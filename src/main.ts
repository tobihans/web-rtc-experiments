import Alpine from 'alpinejs';
import {
  collection,
  getFirestore,
  getDoc,
  doc,
  getDocs,
  deleteDoc,
  addDoc,
  onSnapshot,
  updateDoc,
  setDoc
} from 'firebase/firestore';
import firebase from './firebase';
import './style.css';
const config = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
      ],
    },
  ],
  iceCandidatePoolSize: 10,
};

const db = getFirestore(firebase);

Alpine.data('app', () => ({
  roomId: null,
  peerConn: null,
  roomDialog: null,
  localStream: null,
  remoteStream: null,
  async openMedia() {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    this.$refs.localVideo.srcObject = this.localStream;
    this.remoteStream = new MediaStream();
    this.$refs.remoteVideo.srcObject = this.remoteStream;

    console.log(this.localStream);

    // Flip controls
    this.$refs.cameraBtn.disabled = true;
    this.$refs.createBtn.disabled = false;
    this.$refs.joinBtn.disabled = false;
    this.$refs.leaveBtn.disabled = false;
  },
  async create() {
    this.$refs.createBtn.disabled = true;
    this.$refs.joinBtn.disabled = true;
    const roomRef = await addDoc(collection(db, 'rooms'), {});
    this.roomId = roomRef.id;
    this.$refs.currentRoom. innerText = `Room id ${this.roomId}: You're the caller`;

    this.peerConn = new RTCPeerConnection(config);
    this.listeners();

    this.localStream.getTracks().forEach((track: any) => {
      this.peerConn.addTrack(track, this.localStream);
    });

    // Caller ICE candidates collection
    const callerCandidatesCollection = collection(roomRef, 'callerCandidates');

    this.peerConn.addEventListener('icecandidate', async (event: any) => {
      if (!event.candidate) {
        console.log(('Got final candidate'));
        return;
      }
      console.log('New candidate:', event.candidate);
      await addDoc(callerCandidatesCollection, event.candidate.toJSON());
    });

    console.log('Creating the room');
    const offer = await this.peerConn.createOffer();
    await this.peerConn.setLocalDescription(offer);

    const roomWithOffer = {
      offer: {
        type: offer.type,
        sdp: offer.sdp,
      },
    };
    await setDoc(roomRef, roomWithOffer);

    this.peerConn.addEventListener('track', (event: any) => {
      console.log('Remote track received', event.streams[0]);
      event.streams[0].getTracks().forEach((track: any) => {
        console.log('Add a track to the remote remote stream', track);
        this.remoteStream.addTrack(track);
      });
    });
 
    // Listening to a response to our call 
    onSnapshot(roomRef, async (snapshot) => {
      console.log('Got updated room: ', snapshot.data());
      const data = snapshot.data();
      if (!this.peerConn.currentRemoteDescription && data?.answer) {
        console.log('Set remote   desc:', data?.answer);
        await this.peerConn.setRemoteDescription(new RTCSessionDescription(data?.answer));
      }
    });

    // Callee ICE Candidates collection
    const peerConn = this.peerConn;
    onSnapshot(collection(roomRef, 'calleeCandidates'), (snapshot) => {
      snapshot.docChanges().forEach(async change => {
        if (change.type == 'added') {
          const data = change.doc.data();
          console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
          await peerConn.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  },
  async join() {
    this.$refs.createBtn.disabled = true;
    this.$refs.joinBtn.disabled = true;

    this.$refs.confirmJoinBtn.addEventListener('click', async () => {
      console.log(`Join room: ${this.roomId}`);
      this.$refs.currentRoom.innerText = `Room ${this.roomId}: You're are the callee!`;
      await this.joinById(this.roomId);
    }, { once: true });
    this.roomDialog.open();
  },
  async joinById(id: string) {
    const roomRef = doc(db, 'rooms', `${id}`);
    const roomSnapshot = await getDoc(roomRef);
    console.log(`Got room: ${roomSnapshot.exists()}`)

    if (roomSnapshot.exists()) {
      console.log('Create PeerConnection with configuration: ', config);
      this.peerConn = new RTCPeerConnection(config);
      this.listeners();

      this.localStream.getTracks().forEach((track: any) => {
        this.peerConn.addTrack(track, this.localStream);
      });

      // Callee ICE candidates collection
      const calleeCandidatesCollection = collection(roomRef, 'calleeCandidates');

      this.peerConn.addEventListener('icecandidate', async (event: any) => {
        if (!event.candidate) {
          console.log(('Got final candidate'));
          return;
        }
        console.log('New candidate:', event.candidate);
        await addDoc(calleeCandidatesCollection, event.candidate.toJSON());
      });

      this.peerConn.addEventListener('track', (event: any) => {
        console.log('Add track to the remoteStream:', event.streams[0]);
        event.streams[0].getTracks().forEach((track: any) => {
          console.log('Add a track to the remote Stream', track);
          this.remoteStream.addTrack(track);
        });
      });

      // Answering the call
      const offer = roomSnapshot.data().offer;
      console.log('Got offer', offer);
      await this.peerConn.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await this.peerConn.createAnswer();
      console.log('Created answer: ', answer);
      await this.peerConn.setLocalDescription(answer);

      const roomWithAnswer = {
        answer: {
          type: answer.type,
          sdp: answer.sdp,
        },
      };
      await updateDoc(roomRef, roomWithAnswer);

      // Caller ICE Candidates collection
      const peerConn = this.peerConn;
      onSnapshot(collection(roomRef, 'callerCandidates'), (snapshot) => {
        snapshot.docChanges().forEach(async change => {
          if (change.type == 'added') {
            const data = change.doc.data();
            console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
            await peerConn.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    }
  },
  async leave() {
    const tracks = this.$refs.localVideo.srcObject.getTracks();
    tracks.forEach((track: any) => track.stop());

    if (this.remoteStream) {
      this.remoteStream.getTracks().forEach((track: any) => track.stop());
    }

    if (this.peerConn) {
      this.peerConn.close();
    }

    this.$refs.localVideo.srcObject = null;
    this.$refs.remoteVideo.srcObject = null;
    this.$refs.cameraBtn.disabled = false;
    this.$refs.joinBtn.disabled = true;
    this.$refs.createBtn.disabled = true;
    this.$refs.hangupBtn.disabled = true;
    this.$refs.currentRoom.innerText = '';

    if (this.roomId) {
      const roomRef = doc(db, 'rooms', `${this.roomId}`);
      const calleeCandidates = await getDocs(collection(roomRef, 'calleeCandidates'));
      calleeCandidates.forEach(async (candidate) => {
        await deleteDoc(candidate.ref);
      });
      const callerCandidates = await getDocs(collection(roomRef, 'callerCandidates'));
      callerCandidates.forEach(async (candidate) => {
        await deleteDoc(candidate.ref);
      });
      await deleteDoc(roomRef);
    }

    window.location.replace('/');
  },
  async listeners() {
    console.log(this.peerConn);
    this.peerConn.addEventListener('icegatheringstatechange', () => {
      console.log(
          `ICE gathering state changed: ${this.peerConn.iceGatheringState}`);
    });
  
    this.peerConn.addEventListener('connectionstatechange', () => {
      console.log(`Connection state change: ${this.peerConn.connectionState}`);
    });
  
    this.peerConn.addEventListener('signalingstatechange', () => {
      console.log(`Signaling state change: ${this.peerConn.signalingState}`);
    });
  
    this.peerConn.addEventListener('iceconnectionstatechange ', () => {
      console.log(
          `ICE connection state change: ${this.peerConn.iceConnectionState}`);
    });
  },
  async init() {
    this.roomDialog = (window as any).roomDialog;
  },
}));

Alpine.start();
