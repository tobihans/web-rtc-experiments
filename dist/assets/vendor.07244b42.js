var $h=Object.defineProperty,Bh=Object.defineProperties;var jh=Object.getOwnPropertyDescriptors;var ka=Object.getOwnPropertySymbols;var qh=Object.prototype.hasOwnProperty,Kh=Object.prototype.propertyIsEnumerable;var Ra=(t,e,n)=>e in t?$h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,En=(t,e)=>{for(var n in e||(e={}))qh.call(e,n)&&Ra(t,n,e[n]);if(ka)for(var n of ka(e))Kh.call(e,n)&&Ra(t,n,e[n]);return t},Oa=(t,e)=>Bh(t,jh(e));var Hh=Object.create,fo=Object.defineProperty,zh=Object.getPrototypeOf,Gh=Object.prototype.hasOwnProperty,Wh=Object.getOwnPropertyNames,Qh=Object.getOwnPropertyDescriptor,Yh=t=>fo(t,"__esModule",{value:!0}),ai=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),Xh=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Wh(e))!Gh.call(t,r)&&r!=="default"&&fo(t,r,{get:()=>e[r],enumerable:!(n=Qh(e,r))||n.enumerable});return t},Jh=t=>Xh(Yh(fo(t!=null?Hh(zh(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),Zh=ai(t=>{Object.defineProperty(t,"__esModule",{value:!0});function e(d,_){const E=Object.create(null),k=d.split(",");for(let U=0;U<k.length;U++)E[k[U]]=!0;return _?U=>!!E[U.toLowerCase()]:U=>!!E[U]}var n={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},r={[1]:"STABLE",[2]:"DYNAMIC",[3]:"FORWARDED"},i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=e(i),o=2;function a(d,_=0,E=d.length){const k=d.split(/\r?\n/);let U=0;const J=[];for(let Z=0;Z<k.length;Z++)if(U+=k[Z].length+1,U>=_){for(let Se=Z-o;Se<=Z+o||E>U;Se++){if(Se<0||Se>=k.length)continue;const We=Se+1;J.push(`${We}${" ".repeat(Math.max(3-String(We).length,0))}|  ${k[Se]}`);const Ft=k[Se].length;if(Se===Z){const Vt=_-(U-Ft)+1,as=Math.max(1,E>U?Ft-Vt:E-_);J.push("   |  "+" ".repeat(Vt)+"^".repeat(as))}else if(Se>Z){if(E>U){const Vt=Math.max(Math.min(E-U,Ft),1);J.push("   |  "+"^".repeat(Vt))}U+=Ft+1}}break}return J.join(`
`)}var c="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l=e(c),h=e(c+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),f=/[>/="'\u0009\u000a\u000c\u0020]/,g={};function v(d){if(g.hasOwnProperty(d))return g[d];const _=f.test(d);return _&&console.error(`unsafe attribute name: ${d}`),g[d]=!_}var S={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},L=e("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width"),T=e("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");function O(d){if(Me(d)){const _={};for(let E=0;E<d.length;E++){const k=d[E],U=O(Ge(k)?X(k):k);if(U)for(const J in U)_[J]=U[J]}return _}else if(xe(d))return d}var D=/;(?![^(]*\))/g,V=/:(.+)/;function X(d){const _={};return d.split(D).forEach(E=>{if(E){const k=E.split(V);k.length>1&&(_[k[0].trim()]=k[1].trim())}}),_}function Te(d){let _="";if(!d)return _;for(const E in d){const k=d[E],U=E.startsWith("--")?E:st(E);(Ge(k)||typeof k=="number"&&L(U))&&(_+=`${U}:${k};`)}return _}function Oe(d){let _="";if(Ge(d))_=d;else if(Me(d))for(let E=0;E<d.length;E++){const k=Oe(d[E]);k&&(_+=k+" ")}else if(xe(d))for(const E in d)d[E]&&(_+=E+" ");return _.trim()}var At="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",zi="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Gi="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",It=e(At),Ct=e(zi),Wi=e(Gi),Qi=/["'&<>]/;function gr(d){const _=""+d,E=Qi.exec(_);if(!E)return _;let k="",U,J,Z=0;for(J=E.index;J<_.length;J++){switch(_.charCodeAt(J)){case 34:U="&quot;";break;case 38:U="&amp;";break;case 39:U="&#39;";break;case 60:U="&lt;";break;case 62:U="&gt;";break;default:continue}Z!==J&&(k+=_.substring(Z,J)),Z=J+1,k+=U}return Z!==J?k+_.substring(Z,J):k}var Yi=/^-?>|<!--|-->|--!>|<!-$/g;function Xi(d){return d.replace(Yi,"")}function Ji(d,_){if(d.length!==_.length)return!1;let E=!0;for(let k=0;E&&k<d.length;k++)E=nt(d[k],_[k]);return E}function nt(d,_){if(d===_)return!0;let E=Ot(d),k=Ot(_);if(E||k)return E&&k?d.getTime()===_.getTime():!1;if(E=Me(d),k=Me(_),E||k)return E&&k?Ji(d,_):!1;if(E=xe(d),k=xe(_),E||k){if(!E||!k)return!1;const U=Object.keys(d).length,J=Object.keys(_).length;if(U!==J)return!1;for(const Z in d){const Se=d.hasOwnProperty(Z),We=_.hasOwnProperty(Z);if(Se&&!We||!Se&&We||!nt(d[Z],_[Z]))return!1}}return String(d)===String(_)}function mr(d,_){return d.findIndex(E=>nt(E,_))}var Zi=d=>d==null?"":xe(d)?JSON.stringify(d,es,2):String(d),es=(d,_)=>Pe(_)?{[`Map(${_.size})`]:[..._.entries()].reduce((E,[k,U])=>(E[`${k} =>`]=U,E),{})}:gn(_)?{[`Set(${_.size})`]:[..._.values()]}:xe(_)&&!Me(_)&&!mn(_)?String(_):_,fn=["bigInt","optionalChaining","nullishCoalescingOperator"],dn=Object.freeze({}),pn=Object.freeze([]),xt=()=>{},Nt=()=>!1,Dt=/^on[^a-z]/,kt=d=>Dt.test(d),yr=d=>d.startsWith("onUpdate:"),vr=Object.assign,wr=(d,_)=>{const E=d.indexOf(_);E>-1&&d.splice(E,1)},_r=Object.prototype.hasOwnProperty,Rt=(d,_)=>_r.call(d,_),Me=Array.isArray,Pe=d=>rt(d)==="[object Map]",gn=d=>rt(d)==="[object Set]",Ot=d=>d instanceof Date,Mt=d=>typeof d=="function",Ge=d=>typeof d=="string",ts=d=>typeof d=="symbol",xe=d=>d!==null&&typeof d=="object",ns=d=>xe(d)&&Mt(d.then)&&Mt(d.catch),Er=Object.prototype.toString,rt=d=>Er.call(d),rs=d=>rt(d).slice(8,-1),mn=d=>rt(d)==="[object Object]",br=d=>Ge(d)&&d!=="NaN"&&d[0]!=="-"&&""+parseInt(d,10)===d,Tr=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),it=d=>{const _=Object.create(null);return E=>_[E]||(_[E]=d(E))},Sr=/-(\w)/g,is=it(d=>d.replace(Sr,(_,E)=>E?E.toUpperCase():"")),ss=/\B([A-Z])/g,st=it(d=>d.replace(ss,"-$1").toLowerCase()),Ar=it(d=>d.charAt(0).toUpperCase()+d.slice(1)),yn=it(d=>d?`on${Ar(d)}`:""),os=(d,_)=>d!==_&&(d===d||_===_),Pt=(d,_)=>{for(let E=0;E<d.length;E++)d[E](_)},Lt=(d,_,E)=>{Object.defineProperty(d,_,{configurable:!0,enumerable:!1,value:E})},vn=d=>{const _=parseFloat(d);return isNaN(_)?d:_},wn,q=()=>wn||(wn=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});t.EMPTY_ARR=pn,t.EMPTY_OBJ=dn,t.NO=Nt,t.NOOP=xt,t.PatchFlagNames=n,t.babelParserDefaultPlugins=fn,t.camelize=is,t.capitalize=Ar,t.def=Lt,t.escapeHtml=gr,t.escapeHtmlComment=Xi,t.extend=vr,t.generateCodeFrame=a,t.getGlobalThis=q,t.hasChanged=os,t.hasOwn=Rt,t.hyphenate=st,t.invokeArrayFns=Pt,t.isArray=Me,t.isBooleanAttr=h,t.isDate=Ot,t.isFunction=Mt,t.isGloballyWhitelisted=s,t.isHTMLTag=It,t.isIntegerKey=br,t.isKnownAttr=T,t.isMap=Pe,t.isModelListener=yr,t.isNoUnitNumericStyleProp=L,t.isObject=xe,t.isOn=kt,t.isPlainObject=mn,t.isPromise=ns,t.isReservedProp=Tr,t.isSSRSafeAttrName=v,t.isSVGTag=Ct,t.isSet=gn,t.isSpecialBooleanAttr=l,t.isString=Ge,t.isSymbol=ts,t.isVoidTag=Wi,t.looseEqual=nt,t.looseIndexOf=mr,t.makeMap=e,t.normalizeClass=Oe,t.normalizeStyle=O,t.objectToString=Er,t.parseStringStyle=X,t.propsToAttrMap=S,t.remove=wr,t.slotFlagsText=r,t.stringifyStyle=Te,t.toDisplayString=Zi,t.toHandlerKey=yn,t.toNumber=vn,t.toRawType=rs,t.toTypeString=rt}),ef=ai((t,e)=>{e.exports=Zh()}),tf=ai(t=>{Object.defineProperty(t,"__esModule",{value:!0});var e=ef(),n=new WeakMap,r=[],i,s=Symbol("iterate"),o=Symbol("Map key iterate");function a(u){return u&&u._isEffect===!0}function c(u,p=e.EMPTY_OBJ){a(u)&&(u=u.raw);const m=f(u,p);return p.lazy||m(),m}function l(u){u.active&&(g(u),u.options.onStop&&u.options.onStop(),u.active=!1)}var h=0;function f(u,p){const m=function(){if(!m.active)return u();if(!r.includes(m)){g(m);try{return T(),r.push(m),i=m,u()}finally{r.pop(),O(),i=r[r.length-1]}}};return m.id=h++,m.allowRecurse=!!p.allowRecurse,m._isEffect=!0,m.active=!0,m.raw=u,m.deps=[],m.options=p,m}function g(u){const{deps:p}=u;if(p.length){for(let m=0;m<p.length;m++)p[m].delete(u);p.length=0}}var v=!0,S=[];function L(){S.push(v),v=!1}function T(){S.push(v),v=!0}function O(){const u=S.pop();v=u===void 0?!0:u}function D(u,p,m){if(!v||i===void 0)return;let I=n.get(u);I||n.set(u,I=new Map);let b=I.get(m);b||I.set(m,b=new Set),b.has(i)||(b.add(i),i.deps.push(b),i.options.onTrack&&i.options.onTrack({effect:i,target:u,type:p,key:m}))}function V(u,p,m,I,b,B){const F=n.get(u);if(!F)return;const W=new Set,ce=ie=>{ie&&ie.forEach(Le=>{(Le!==i||Le.allowRecurse)&&W.add(Le)})};if(p==="clear")F.forEach(ce);else if(m==="length"&&e.isArray(u))F.forEach((ie,Le)=>{(Le==="length"||Le>=I)&&ce(ie)});else switch(m!==void 0&&ce(F.get(m)),p){case"add":e.isArray(u)?e.isIntegerKey(m)&&ce(F.get("length")):(ce(F.get(s)),e.isMap(u)&&ce(F.get(o)));break;case"delete":e.isArray(u)||(ce(F.get(s)),e.isMap(u)&&ce(F.get(o)));break;case"set":e.isMap(u)&&ce(F.get(s));break}const _n=ie=>{ie.options.onTrigger&&ie.options.onTrigger({effect:ie,target:u,key:m,type:p,newValue:I,oldValue:b,oldTarget:B}),ie.options.scheduler?ie.options.scheduler(ie):ie()};W.forEach(_n)}var X=e.makeMap("__proto__,__v_isRef,__isVue"),Te=new Set(Object.getOwnPropertyNames(Symbol).map(u=>Symbol[u]).filter(e.isSymbol)),Oe=Ct(),At=Ct(!1,!0),zi=Ct(!0),Gi=Ct(!0,!0),It={};["includes","indexOf","lastIndexOf"].forEach(u=>{const p=Array.prototype[u];It[u]=function(...m){const I=q(this);for(let B=0,F=this.length;B<F;B++)D(I,"get",B+"");const b=p.apply(I,m);return b===-1||b===!1?p.apply(I,m.map(q)):b}}),["push","pop","shift","unshift","splice"].forEach(u=>{const p=Array.prototype[u];It[u]=function(...m){L();const I=p.apply(this,m);return O(),I}});function Ct(u=!1,p=!1){return function(I,b,B){if(b==="__v_isReactive")return!u;if(b==="__v_isReadonly")return u;if(b==="__v_raw"&&B===(u?p?Sr:it:p?Tr:br).get(I))return I;const F=e.isArray(I);if(!u&&F&&e.hasOwn(It,b))return Reflect.get(It,b,B);const W=Reflect.get(I,b,B);return(e.isSymbol(b)?Te.has(b):X(b))||(u||D(I,"get",b),p)?W:E(W)?!F||!e.isIntegerKey(b)?W.value:W:e.isObject(W)?u?yn(W):st(W):W}}var Wi=gr(),Qi=gr(!0);function gr(u=!1){return function(m,I,b,B){let F=m[I];if(!u&&(b=q(b),F=q(F),!e.isArray(m)&&E(F)&&!E(b)))return F.value=b,!0;const W=e.isArray(m)&&e.isIntegerKey(I)?Number(I)<m.length:e.hasOwn(m,I),ce=Reflect.set(m,I,b,B);return m===q(B)&&(W?e.hasChanged(b,F)&&V(m,"set",I,b,F):V(m,"add",I,b)),ce}}function Yi(u,p){const m=e.hasOwn(u,p),I=u[p],b=Reflect.deleteProperty(u,p);return b&&m&&V(u,"delete",p,void 0,I),b}function Xi(u,p){const m=Reflect.has(u,p);return(!e.isSymbol(p)||!Te.has(p))&&D(u,"has",p),m}function Ji(u){return D(u,"iterate",e.isArray(u)?"length":s),Reflect.ownKeys(u)}var nt={get:Oe,set:Wi,deleteProperty:Yi,has:Xi,ownKeys:Ji},mr={get:zi,set(u,p){return console.warn(`Set operation on key "${String(p)}" failed: target is readonly.`,u),!0},deleteProperty(u,p){return console.warn(`Delete operation on key "${String(p)}" failed: target is readonly.`,u),!0}},Zi=e.extend({},nt,{get:At,set:Qi}),es=e.extend({},mr,{get:Gi}),fn=u=>e.isObject(u)?st(u):u,dn=u=>e.isObject(u)?yn(u):u,pn=u=>u,xt=u=>Reflect.getPrototypeOf(u);function Nt(u,p,m=!1,I=!1){u=u.__v_raw;const b=q(u),B=q(p);p!==B&&!m&&D(b,"get",p),!m&&D(b,"get",B);const{has:F}=xt(b),W=I?pn:m?dn:fn;if(F.call(b,p))return W(u.get(p));if(F.call(b,B))return W(u.get(B));u!==b&&u.get(p)}function Dt(u,p=!1){const m=this.__v_raw,I=q(m),b=q(u);return u!==b&&!p&&D(I,"has",u),!p&&D(I,"has",b),u===b?m.has(u):m.has(u)||m.has(b)}function kt(u,p=!1){return u=u.__v_raw,!p&&D(q(u),"iterate",s),Reflect.get(u,"size",u)}function yr(u){u=q(u);const p=q(this);return xt(p).has.call(p,u)||(p.add(u),V(p,"add",u,u)),this}function vr(u,p){p=q(p);const m=q(this),{has:I,get:b}=xt(m);let B=I.call(m,u);B?mn(m,I,u):(u=q(u),B=I.call(m,u));const F=b.call(m,u);return m.set(u,p),B?e.hasChanged(p,F)&&V(m,"set",u,p,F):V(m,"add",u,p),this}function wr(u){const p=q(this),{has:m,get:I}=xt(p);let b=m.call(p,u);b?mn(p,m,u):(u=q(u),b=m.call(p,u));const B=I?I.call(p,u):void 0,F=p.delete(u);return b&&V(p,"delete",u,void 0,B),F}function _r(){const u=q(this),p=u.size!==0,m=e.isMap(u)?new Map(u):new Set(u),I=u.clear();return p&&V(u,"clear",void 0,void 0,m),I}function Rt(u,p){return function(I,b){const B=this,F=B.__v_raw,W=q(F),ce=p?pn:u?dn:fn;return!u&&D(W,"iterate",s),F.forEach((_n,ie)=>I.call(b,ce(_n),ce(ie),B))}}function Me(u,p,m){return function(...I){const b=this.__v_raw,B=q(b),F=e.isMap(B),W=u==="entries"||u===Symbol.iterator&&F,ce=u==="keys"&&F,_n=b[u](...I),ie=m?pn:p?dn:fn;return!p&&D(B,"iterate",ce?o:s),{next(){const{value:Le,done:cs}=_n.next();return cs?{value:Le,done:cs}:{value:W?[ie(Le[0]),ie(Le[1])]:ie(Le),done:cs}},[Symbol.iterator](){return this}}}}function Pe(u){return function(...p){{const m=p[0]?`on key "${p[0]}" `:"";console.warn(`${e.capitalize(u)} operation ${m}failed: target is readonly.`,q(this))}return u==="delete"?!1:this}}var gn={get(u){return Nt(this,u)},get size(){return kt(this)},has:Dt,add:yr,set:vr,delete:wr,clear:_r,forEach:Rt(!1,!1)},Ot={get(u){return Nt(this,u,!1,!0)},get size(){return kt(this)},has:Dt,add:yr,set:vr,delete:wr,clear:_r,forEach:Rt(!1,!0)},Mt={get(u){return Nt(this,u,!0)},get size(){return kt(this,!0)},has(u){return Dt.call(this,u,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:Rt(!0,!1)},Ge={get(u){return Nt(this,u,!0,!0)},get size(){return kt(this,!0)},has(u){return Dt.call(this,u,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:Rt(!0,!0)},ts=["keys","values","entries",Symbol.iterator];ts.forEach(u=>{gn[u]=Me(u,!1,!1),Mt[u]=Me(u,!0,!1),Ot[u]=Me(u,!1,!0),Ge[u]=Me(u,!0,!0)});function xe(u,p){const m=p?u?Ge:Ot:u?Mt:gn;return(I,b,B)=>b==="__v_isReactive"?!u:b==="__v_isReadonly"?u:b==="__v_raw"?I:Reflect.get(e.hasOwn(m,b)&&b in I?m:I,b,B)}var ns={get:xe(!1,!1)},Er={get:xe(!1,!0)},rt={get:xe(!0,!1)},rs={get:xe(!0,!0)};function mn(u,p,m){const I=q(m);if(I!==m&&p.call(u,I)){const b=e.toRawType(u);console.warn(`Reactive ${b} contains both the raw and reactive versions of the same object${b==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var br=new WeakMap,Tr=new WeakMap,it=new WeakMap,Sr=new WeakMap;function is(u){switch(u){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ss(u){return u.__v_skip||!Object.isExtensible(u)?0:is(e.toRawType(u))}function st(u){return u&&u.__v_isReadonly?u:Pt(u,!1,nt,ns,br)}function Ar(u){return Pt(u,!1,Zi,Er,Tr)}function yn(u){return Pt(u,!0,mr,rt,it)}function os(u){return Pt(u,!0,es,rs,Sr)}function Pt(u,p,m,I,b){if(!e.isObject(u))return console.warn(`value cannot be made reactive: ${String(u)}`),u;if(u.__v_raw&&!(p&&u.__v_isReactive))return u;const B=b.get(u);if(B)return B;const F=ss(u);if(F===0)return u;const W=new Proxy(u,F===2?I:m);return b.set(u,W),W}function Lt(u){return vn(u)?Lt(u.__v_raw):!!(u&&u.__v_isReactive)}function vn(u){return!!(u&&u.__v_isReadonly)}function wn(u){return Lt(u)||vn(u)}function q(u){return u&&q(u.__v_raw)||u}function d(u){return e.def(u,"__v_skip",!0),u}var _=u=>e.isObject(u)?st(u):u;function E(u){return Boolean(u&&u.__v_isRef===!0)}function k(u){return Z(u)}function U(u){return Z(u,!0)}var J=class{constructor(u,p=!1){this._rawValue=u,this._shallow=p,this.__v_isRef=!0,this._value=p?u:_(u)}get value(){return D(q(this),"get","value"),this._value}set value(u){e.hasChanged(q(u),this._rawValue)&&(this._rawValue=u,this._value=this._shallow?u:_(u),V(q(this),"set","value",u))}};function Z(u,p=!1){return E(u)?u:new J(u,p)}function Se(u){V(q(u),"set","value",u.value)}function We(u){return E(u)?u.value:u}var Ft={get:(u,p,m)=>We(Reflect.get(u,p,m)),set:(u,p,m,I)=>{const b=u[p];return E(b)&&!E(m)?(b.value=m,!0):Reflect.set(u,p,m,I)}};function Vt(u){return Lt(u)?u:new Proxy(u,Ft)}var as=class{constructor(u){this.__v_isRef=!0;const{get:p,set:m}=u(()=>D(this,"get","value"),()=>V(this,"set","value"));this._get=p,this._set=m}get value(){return this._get()}set value(u){this._set(u)}};function Ph(u){return new as(u)}function Lh(u){wn(u)||console.warn("toRefs() expects a reactive object but received a plain one.");const p=e.isArray(u)?new Array(u.length):{};for(const m in u)p[m]=Da(u,m);return p}var Fh=class{constructor(u,p){this._object=u,this._key=p,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(u){this._object[this._key]=u}};function Da(u,p){return E(u[p])?u[p]:new Fh(u,p)}var Vh=class{constructor(u,p,m){this._setter=p,this._dirty=!0,this.__v_isRef=!0,this.effect=c(u,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,V(q(this),"set","value"))}}),this.__v_isReadonly=m}get value(){const u=q(this);return u._dirty&&(u._value=this.effect(),u._dirty=!1),D(u,"get","value"),u._value}set value(u){this._setter(u)}};function Uh(u){let p,m;return e.isFunction(u)?(p=u,m=()=>{console.warn("Write operation failed: computed value is readonly")}):(p=u.get,m=u.set),new Vh(p,m,e.isFunction(u)||!u.set)}t.ITERATE_KEY=s,t.computed=Uh,t.customRef=Ph,t.effect=c,t.enableTracking=T,t.isProxy=wn,t.isReactive=Lt,t.isReadonly=vn,t.isRef=E,t.markRaw=d,t.pauseTracking=L,t.proxyRefs=Vt,t.reactive=st,t.readonly=yn,t.ref=k,t.resetTracking=O,t.shallowReactive=Ar,t.shallowReadonly=os,t.shallowRef=U,t.stop=l,t.toRaw=q,t.toRef=Da,t.toRefs=Lh,t.track=D,t.trigger=V,t.triggerRef=Se,t.unref=We}),nf=ai((t,e)=>{e.exports=tf()}),Is=!1,Cs=!1,lt=[];function rf(t){sf(t)}function sf(t){lt.includes(t)||lt.push(t),of()}function Fc(t){let e=lt.indexOf(t);e!==-1&&lt.splice(e,1)}function of(){!Cs&&!Is&&(Is=!0,queueMicrotask(af))}function af(){Is=!1,Cs=!0;for(let t=0;t<lt.length;t++)lt[t]();lt.length=0,Cs=!1}var tn,Wn,ci,Vc,xs=!0;function cf(t){xs=!1,t(),xs=!0}function uf(t){tn=t.reactive,ci=t.release,Wn=e=>t.effect(e,{scheduler:n=>{xs?rf(n):n()}}),Vc=t.raw}function Ma(t){Wn=t}function lf(t){let e=()=>{};return[r=>{let i=Wn(r);t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(s=>s())}),t._x_effects.add(i),e=()=>{i!==void 0&&(t._x_effects.delete(i),ci(i))}},()=>{e()}]}var Uc=[],$c=[],Bc=[];function hf(t){Bc.push(t)}function jc(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,$c.push(e))}function ff(t){Uc.push(t)}function df(t,e,n){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(n)}function qc(t,e){!t._x_attributeCleanups||Object.entries(t._x_attributeCleanups).forEach(([n,r])=>{(e===void 0||e.includes(n))&&(r.forEach(i=>i()),delete t._x_attributeCleanups[n])})}var po=new MutationObserver(yo),go=!1;function Kc(){po.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),go=!0}function pf(){gf(),po.disconnect(),go=!1}var Cn=[],us=!1;function gf(){Cn=Cn.concat(po.takeRecords()),Cn.length&&!us&&(us=!0,queueMicrotask(()=>{mf(),us=!1}))}function mf(){yo(Cn),Cn.length=0}function le(t){if(!go)return t();pf();let e=t();return Kc(),e}var mo=!1,Vr=[];function yf(){mo=!0}function vf(){mo=!1,yo(Vr),Vr=[]}function yo(t){if(mo){Vr=Vr.concat(t);return}let e=[],n=[],r=new Map,i=new Map;for(let s=0;s<t.length;s++)if(!t[s].target._x_ignoreMutationObserver&&(t[s].type==="childList"&&(t[s].addedNodes.forEach(o=>o.nodeType===1&&e.push(o)),t[s].removedNodes.forEach(o=>o.nodeType===1&&n.push(o))),t[s].type==="attributes")){let o=t[s].target,a=t[s].attributeName,c=t[s].oldValue,l=()=>{r.has(o)||r.set(o,[]),r.get(o).push({name:a,value:o.getAttribute(a)})},h=()=>{i.has(o)||i.set(o,[]),i.get(o).push(a)};o.hasAttribute(a)&&c===null?l():o.hasAttribute(a)?(h(),l()):h()}i.forEach((s,o)=>{qc(o,s)}),r.forEach((s,o)=>{Uc.forEach(a=>a(o,s))});for(let s of n)if(!e.includes(s)&&($c.forEach(o=>o(s)),s._x_cleanups))for(;s._x_cleanups.length;)s._x_cleanups.pop()();e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)n.includes(s)||!s.isConnected||(delete s._x_ignoreSelf,delete s._x_ignore,Bc.forEach(o=>o(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,n=null,r=null,i=null}function Hc(t){return Yn(zt(t))}function Qn(t,e,n){return t._x_dataStack=[e,...zt(n||t)],()=>{t._x_dataStack=t._x_dataStack.filter(r=>r!==e)}}function Pa(t,e){let n=t._x_dataStack[0];Object.entries(e).forEach(([r,i])=>{n[r]=i})}function zt(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?zt(t.host):t.parentNode?zt(t.parentNode):[]}function Yn(t){let e=new Proxy({},{ownKeys:()=>Array.from(new Set(t.flatMap(n=>Object.keys(n)))),has:(n,r)=>t.some(i=>i.hasOwnProperty(r)),get:(n,r)=>(t.find(i=>{if(i.hasOwnProperty(r)){let s=Object.getOwnPropertyDescriptor(i,r);if(s.get&&s.get._x_alreadyBound||s.set&&s.set._x_alreadyBound)return!0;if((s.get||s.set)&&s.enumerable){let o=s.get,a=s.set,c=s;o=o&&o.bind(e),a=a&&a.bind(e),o&&(o._x_alreadyBound=!0),a&&(a._x_alreadyBound=!0),Object.defineProperty(i,r,Oa(En({},c),{get:o,set:a}))}return!0}return!1})||{})[r],set:(n,r,i)=>{let s=t.find(o=>o.hasOwnProperty(r));return s?s[r]=i:t[t.length-1][r]=i,!0}});return e}function zc(t){let e=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([s,{value:o,enumerable:a}])=>{if(a===!1||o===void 0)return;let c=i===""?s:`${i}.${s}`;typeof o=="object"&&o!==null&&o._x_interceptor?r[s]=o.initialize(t,c,s):e(o)&&o!==r&&!(o instanceof Element)&&n(o,c)})};return n(t)}function Gc(t,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,i,s){return t(this.initialValue,()=>wf(r,i),o=>Ns(r,i,o),i,s)}};return e(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let i=n.initialize.bind(n);n.initialize=(s,o,a)=>{let c=r.initialize(s,o,a);return n.initialValue=c,i(s,o,a)}}else n.initialValue=r;return n}}function wf(t,e){return e.split(".").reduce((n,r)=>n[r],t)}function Ns(t,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=n;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),Ns(t[e[0]],e.slice(1),n)}}var Wc={};function Ve(t,e){Wc[t]=e}function Ds(t,e){return Object.entries(Wc).forEach(([n,r])=>{Object.defineProperty(t,`$${n}`,{get(){let[i,s]=Zc(e);return i=En({interceptor:Gc},i),jc(e,s),r(e,i)},enumerable:!1})}),t}function _f(t,e,n,...r){try{return n(...r)}catch(i){On(i,t,e)}}function On(t,e,n=void 0){Object.assign(t,{el:e,expression:n}),console.warn(`Alpine Expression Error: ${t.message}

${n?'Expression: "'+n+`"

`:""}`,e),setTimeout(()=>{throw t},0)}function jt(t,e,n={}){let r;return Ee(t,e)(i=>r=i,n),r}function Ee(...t){return Qc(...t)}var Qc=Yc;function Ef(t){Qc=t}function Yc(t,e){let n={};Ds(n,t);let r=[n,...zt(t)];if(typeof e=="function")return bf(r,e);let i=Sf(r,e,t);return _f.bind(null,t,e,i)}function bf(t,e){return(n=()=>{},{scope:r={},params:i=[]}={})=>{let s=e.apply(Yn([r,...t]),i);Ur(n,s)}}var ls={};function Tf(t,e){if(ls[t])return ls[t];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(t)||/^(let|const)\s/.test(t)?`(() => { ${t} })()`:t,s=(()=>{try{return new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)}catch(o){return On(o,e,t),Promise.resolve()}})();return ls[t]=s,s}function Sf(t,e,n){let r=Tf(e,n);return(i=()=>{},{scope:s={},params:o=[]}={})=>{r.result=void 0,r.finished=!1;let a=Yn([s,...t]);if(typeof r=="function"){let c=r(r,a).catch(l=>On(l,n,e));r.finished?(Ur(i,r.result,a,o,n),r.result=void 0):c.then(l=>{Ur(i,l,a,o,n)}).catch(l=>On(l,n,e)).finally(()=>r.result=void 0)}}}function Ur(t,e,n,r,i){if(typeof e=="function"){let s=e.apply(n,r);s instanceof Promise?s.then(o=>Ur(t,o,n,r)).catch(o=>On(o,i,e)):t(s)}else t(e)}var vo="x-";function nn(t=""){return vo+t}function Af(t){vo=t}var Xc={};function re(t,e){Xc[t]=e}function wo(t,e,n){let r={};return Array.from(e).map(nu((s,o)=>r[s]=o)).filter(iu).map(Nf(r,n)).sort(Df).map(s=>xf(t,s))}function If(t){return Array.from(t).map(nu()).filter(e=>!iu(e))}var ks=!1,Sn=new Map,Jc=Symbol();function Cf(t){ks=!0;let e=Symbol();Jc=e,Sn.set(e,[]);let n=()=>{for(;Sn.get(e).length;)Sn.get(e).shift()();Sn.delete(e)},r=()=>{ks=!1,n()};t(n),r()}function Zc(t){let e=[],n=a=>e.push(a),[r,i]=lf(t);return e.push(i),[{Alpine:Xn,effect:r,cleanup:n,evaluateLater:Ee.bind(Ee,t),evaluate:jt.bind(jt,t)},()=>e.forEach(a=>a())]}function xf(t,e){let n=()=>{},r=Xc[e.type]||n,[i,s]=Zc(t);df(t,e.original,s);let o=()=>{t._x_ignore||t._x_ignoreSelf||(r.inline&&r.inline(t,e,i),r=r.bind(r,t,e,i),ks?Sn.get(Jc).push(r):r())};return o.runCleanups=s,o}var eu=(t,e)=>({name:n,value:r})=>(n.startsWith(t)&&(n=n.replace(t,e)),{name:n,value:r}),tu=t=>t;function nu(t=()=>{}){return({name:e,value:n})=>{let{name:r,value:i}=ru.reduce((s,o)=>o(s),{name:e,value:n});return r!==e&&t(r,e),{name:r,value:i}}}var ru=[];function _o(t){ru.push(t)}function iu({name:t}){return su().test(t)}var su=()=>new RegExp(`^${vo}([^:^.]+)\\b`);function Nf(t,e){return({name:n,value:r})=>{let i=n.match(su()),s=n.match(/:([a-zA-Z0-9\-:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=e||t[n]||n;return{type:i?i[1]:null,value:s?s[1]:null,modifiers:o.map(c=>c.replace(".","")),expression:r,original:a}}}var Rs="DEFAULT",Ir=["ignore","ref","data","id","bind","init","for","model","modelable","transition","show","if",Rs,"teleport","element"];function Df(t,e){let n=Ir.indexOf(t.type)===-1?Rs:t.type,r=Ir.indexOf(e.type)===-1?Rs:e.type;return Ir.indexOf(n)-Ir.indexOf(r)}function xn(t,e,n={}){t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}var Os=[],Eo=!1;function ou(t){Os.push(t),queueMicrotask(()=>{Eo||setTimeout(()=>{Ms()})})}function Ms(){for(Eo=!1;Os.length;)Os.shift()()}function kf(){Eo=!0}function ft(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(i=>ft(i,e));return}let n=!1;if(e(t,()=>n=!0),n)return;let r=t.firstElementChild;for(;r;)ft(r,e),r=r.nextElementSibling}function $r(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}function Rf(){document.body||$r("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),xn(document,"alpine:init"),xn(document,"alpine:initializing"),Kc(),hf(e=>dt(e,ft)),jc(e=>Mf(e)),ff((e,n)=>{wo(e,n).forEach(r=>r())});let t=e=>!ui(e.parentElement,!0);Array.from(document.querySelectorAll(uu())).filter(t).forEach(e=>{dt(e)}),xn(document,"alpine:initialized")}var bo=[],au=[];function cu(){return bo.map(t=>t())}function uu(){return bo.concat(au).map(t=>t())}function lu(t){bo.push(t)}function hu(t){au.push(t)}function ui(t,e=!1){return li(t,n=>{if((e?uu():cu()).some(i=>n.matches(i)))return!0})}function li(t,e){if(!!t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),!!t.parentElement)return li(t.parentElement,e)}}function Of(t){return cu().some(e=>t.matches(e))}function dt(t,e=ft){Cf(()=>{e(t,(n,r)=>{wo(n,n.attributes).forEach(i=>i()),n._x_ignore&&r()})})}function Mf(t){ft(t,e=>qc(e))}function To(t,e){return Array.isArray(e)?La(t,e.join(" ")):typeof e=="object"&&e!==null?Pf(t,e):typeof e=="function"?To(t,e()):La(t,e)}function La(t,e){let n=i=>i.split(" ").filter(s=>!t.classList.contains(s)).filter(Boolean),r=i=>(t.classList.add(...i),()=>{t.classList.remove(...i)});return e=e===!0?e="":e||"",r(n(e))}function Pf(t,e){let n=a=>a.split(" ").filter(Boolean),r=Object.entries(e).flatMap(([a,c])=>c?n(a):!1).filter(Boolean),i=Object.entries(e).flatMap(([a,c])=>c?!1:n(a)).filter(Boolean),s=[],o=[];return i.forEach(a=>{t.classList.contains(a)&&(t.classList.remove(a),o.push(a))}),r.forEach(a=>{t.classList.contains(a)||(t.classList.add(a),s.push(a))}),()=>{o.forEach(a=>t.classList.add(a)),s.forEach(a=>t.classList.remove(a))}}function hi(t,e){return typeof e=="object"&&e!==null?Lf(t,e):Ff(t,e)}function Lf(t,e){let n={};return Object.entries(e).forEach(([r,i])=>{n[r]=t.style[r],r.startsWith("--")||(r=Vf(r)),t.style.setProperty(r,i)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{hi(t,n)}}function Ff(t,e){let n=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",n||"")}}function Vf(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ps(t,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,t.apply(this,arguments))}}re("transition",(t,{value:e,modifiers:n,expression:r},{evaluate:i})=>{typeof r=="function"&&(r=i(r)),r?Uf(t,r,e):$f(t,n,e)});function Uf(t,e,n){fu(t,To,""),{enter:i=>{t._x_transition.enter.during=i},"enter-start":i=>{t._x_transition.enter.start=i},"enter-end":i=>{t._x_transition.enter.end=i},leave:i=>{t._x_transition.leave.during=i},"leave-start":i=>{t._x_transition.leave.start=i},"leave-end":i=>{t._x_transition.leave.end=i}}[n](e)}function $f(t,e,n){fu(t,hi);let r=!e.includes("in")&&!e.includes("out")&&!n,i=r||e.includes("in")||["enter"].includes(n),s=r||e.includes("out")||["leave"].includes(n);e.includes("in")&&!r&&(e=e.filter((O,D)=>D<e.indexOf("out"))),e.includes("out")&&!r&&(e=e.filter((O,D)=>D>e.indexOf("out")));let o=!e.includes("opacity")&&!e.includes("scale"),a=o||e.includes("opacity"),c=o||e.includes("scale"),l=a?0:1,h=c?bn(e,"scale",95)/100:1,f=bn(e,"delay",0),g=bn(e,"origin","center"),v="opacity, transform",S=bn(e,"duration",150)/1e3,L=bn(e,"duration",75)/1e3,T="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(t._x_transition.enter.during={transformOrigin:g,transitionDelay:f,transitionProperty:v,transitionDuration:`${S}s`,transitionTimingFunction:T},t._x_transition.enter.start={opacity:l,transform:`scale(${h})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(t._x_transition.leave.during={transformOrigin:g,transitionDelay:f,transitionProperty:v,transitionDuration:`${L}s`,transitionTimingFunction:T},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:l,transform:`scale(${h})`})}function fu(t,e,n={}){t._x_transition||(t._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},i=()=>{}){Ls(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,i)},out(r=()=>{},i=()=>{}){Ls(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,n,r){let i=()=>{document.visibilityState==="visible"?requestAnimationFrame(n):setTimeout(n)};if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(n):i():t._x_transition?t._x_transition.in(n):i();return}t._x_hidePromise=t._x_transition?new Promise((s,o)=>{t._x_transition.out(()=>{},()=>s(r)),t._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let s=du(t);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(t)):queueMicrotask(()=>{let o=a=>{let c=Promise.all([a._x_hidePromise,...(a._x_hideChildren||[]).map(o)]).then(([l])=>l());return delete a._x_hidePromise,delete a._x_hideChildren,c};o(t).catch(a=>{if(!a.isFromCancelledTransition)throw a})})})};function du(t){let e=t.parentNode;if(!!e)return e._x_hidePromise?e:du(e)}function Ls(t,e,{during:n,start:r,end:i}={},s=()=>{},o=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(i).length===0){s(),o();return}let a,c,l;Bf(t,{start(){a=e(t,r)},during(){c=e(t,n)},before:s,end(){a(),l=e(t,i)},after:o,cleanup(){c(),l()}})}function Bf(t,e){let n,r,i,s=Ps(()=>{le(()=>{n=!0,r||e.before(),i||(e.end(),Ms()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:Ps(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},le(()=>{e.start(),e.during()}),kf(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),le(()=>{e.before()}),r=!0,requestAnimationFrame(()=>{n||(le(()=>{e.end()}),Ms(),setTimeout(t._x_transitioning.finish,o+a),i=!0)})})}function bn(t,e,n){if(t.indexOf(e)===-1)return n;const r=t[t.indexOf(e)+1];if(!r||e==="scale"&&isNaN(r))return n;if(e==="duration"){let i=r.match(/([0-9]+)ms/);if(i)return i[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[r,t[t.indexOf(e)+2]].join(" "):r}var Fs=!1;function fi(t,e=()=>{}){return(...n)=>Fs?e(...n):t(...n)}function jf(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),Fs=!0,Kf(()=>{qf(e)}),Fs=!1}function qf(t){let e=!1;dt(t,(r,i)=>{ft(r,(s,o)=>{if(e&&Of(s))return o();e=!0,i(s,o)})})}function Kf(t){let e=Wn;Ma((n,r)=>{let i=e(n);return ci(i),()=>{}}),t(),Ma(e)}function pu(t,e,n,r=[]){switch(t._x_bindings||(t._x_bindings=tn({})),t._x_bindings[e]=n,e=r.includes("camel")?Xf(e):e,e){case"value":Hf(t,n);break;case"style":Gf(t,n);break;case"class":zf(t,n);break;default:Wf(t,e,n);break}}function Hf(t,e){if(t.type==="radio")t.attributes.value===void 0&&(t.value=e),window.fromModel&&(t.checked=Fa(t.value,e));else if(t.type==="checkbox")Number.isInteger(e)?t.value=e:!Number.isInteger(e)&&!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(n=>Fa(n,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")Yf(t,e);else{if(t.value===e)return;t.value=e}}function zf(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=To(t,e)}function Gf(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=hi(t,e)}function Wf(t,e,n){[null,void 0,!1].includes(n)&&Jf(e)?t.removeAttribute(e):(gu(e)&&(n=e),Qf(t,e,n))}function Qf(t,e,n){t.getAttribute(e)!=n&&t.setAttribute(e,n)}function Yf(t,e){const n=[].concat(e).map(r=>r+"");Array.from(t.options).forEach(r=>{r.selected=n.includes(r.value)})}function Xf(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Fa(t,e){return t==e}function gu(t){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(t)}function Jf(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function Zf(t,e,n){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];let r=t.getAttribute(e);return r===null?typeof n=="function"?n():n:gu(e)?!![e,"true"].includes(r):r===""?!0:r}function mu(t,e){var n;return function(){var r=this,i=arguments,s=function(){n=null,t.apply(r,i)};clearTimeout(n),n=setTimeout(s,e)}}function yu(t,e){let n;return function(){let r=this,i=arguments;n||(t.apply(r,i),n=!0,setTimeout(()=>n=!1,e))}}function ed(t){t(Xn)}var ot={},Va=!1;function td(t,e){if(Va||(ot=tn(ot),Va=!0),e===void 0)return ot[t];ot[t]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&ot[t].init(),zc(ot[t])}function nd(){return ot}var vu={};function rd(t,e){vu[t]=typeof e!="function"?()=>e:e}function id(t){return Object.entries(vu).forEach(([e,n])=>{Object.defineProperty(t,e,{get(){return(...r)=>n(...r)}})}),t}var wu={};function sd(t,e){wu[t]=e}function od(t,e){return Object.entries(wu).forEach(([n,r])=>{Object.defineProperty(t,n,{get(){return(...i)=>r.bind(e)(...i)},enumerable:!1})}),t}var ad={get reactive(){return tn},get release(){return ci},get effect(){return Wn},get raw(){return Vc},version:"3.9.1",flushAndStopDeferringMutations:vf,disableEffectScheduling:cf,setReactivityEngine:uf,closestDataStack:zt,skipDuringClone:fi,addRootSelector:lu,addInitSelector:hu,addScopeToNode:Qn,deferMutations:yf,mapAttributes:_o,evaluateLater:Ee,setEvaluator:Ef,mergeProxies:Yn,findClosest:li,closestRoot:ui,interceptor:Gc,transition:Ls,setStyles:hi,mutateDom:le,directive:re,throttle:yu,debounce:mu,evaluate:jt,initTree:dt,nextTick:ou,prefixed:nn,prefix:Af,plugin:ed,magic:Ve,store:td,start:Rf,clone:jf,bound:Zf,$data:Hc,data:sd,bind:rd},Xn=ad,Cr=Jh(nf());Ve("nextTick",()=>ou);Ve("dispatch",t=>xn.bind(xn,t));Ve("watch",(t,{evaluateLater:e,effect:n})=>(r,i)=>{let s=e(r),o=!0,a;n(()=>s(c=>{JSON.stringify(c),o?a=c:queueMicrotask(()=>{i(c,a),a=c}),o=!1}))});Ve("store",nd);Ve("data",t=>Hc(t));Ve("root",t=>ui(t));Ve("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=Yn(cd(t))),t._x_refs_proxy));function cd(t){let e=[],n=t;for(;n;)n._x_refs&&e.push(n._x_refs),n=n.parentNode;return e}var hs={};function _u(t){return hs[t]||(hs[t]=0),++hs[t]}function ud(t,e){return li(t,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function ld(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=_u(e))}Ve("id",t=>(e,n=null)=>{let r=ud(t,e),i=r?r._x_ids[e]:_u(e);return n?`${e}-${i}-${n}`:`${e}-${i}`});Ve("el",t=>t);re("modelable",(t,{expression:e},{effect:n,evaluate:r,evaluateLater:i})=>{let s=i(e),o=()=>{let h;return s(f=>h=f),h},a=i(`${e} = __placeholder`),c=h=>a(()=>{},{scope:{__placeholder:h}}),l=o();t._x_modelable_hook&&(l=t._x_modelable_hook(l)),c(l),queueMicrotask(()=>{if(!t._x_model)return;let h=t._x_model.get,f=t._x_model.set;n(()=>c(h())),n(()=>f(o()))})});re("teleport",(t,{expression:e},{cleanup:n})=>{t.tagName.toLowerCase()!=="template"&&$r("x-teleport can only be used on a <template> tag",t);let r=document.querySelector(e);r||$r(`Cannot find x-teleport element for selector: "${e}"`);let i=t.content.cloneNode(!0).firstElementChild;t._x_teleport=i,i._x_teleportBack=t,t._x_forwardEvents&&t._x_forwardEvents.forEach(s=>{i.addEventListener(s,o=>{o.stopPropagation(),t.dispatchEvent(new o.constructor(o.type,o))})}),Qn(i,{},t),le(()=>{r.appendChild(i),dt(i),i._x_ignore=!0}),n(()=>i.remove())});var Eu=()=>{};Eu.inline=(t,{modifiers:e},{cleanup:n})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,n(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};re("ignore",Eu);re("effect",(t,{expression:e},{effect:n})=>n(Ee(t,e)));function bu(t,e,n,r){let i=t,s=c=>r(c),o={},a=(c,l)=>h=>l(c,h);if(n.includes("dot")&&(e=hd(e)),n.includes("camel")&&(e=fd(e)),n.includes("passive")&&(o.passive=!0),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(i=window),n.includes("document")&&(i=document),n.includes("prevent")&&(s=a(s,(c,l)=>{l.preventDefault(),c(l)})),n.includes("stop")&&(s=a(s,(c,l)=>{l.stopPropagation(),c(l)})),n.includes("self")&&(s=a(s,(c,l)=>{l.target===t&&c(l)})),(n.includes("away")||n.includes("outside"))&&(i=document,s=a(s,(c,l)=>{t.contains(l.target)||t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&c(l)})),s=a(s,(c,l)=>{pd(e)&&gd(l,n)||c(l)}),n.includes("debounce")){let c=n[n.indexOf("debounce")+1]||"invalid-wait",l=Vs(c.split("ms")[0])?Number(c.split("ms")[0]):250;s=mu(s,l)}if(n.includes("throttle")){let c=n[n.indexOf("throttle")+1]||"invalid-wait",l=Vs(c.split("ms")[0])?Number(c.split("ms")[0]):250;s=yu(s,l)}return n.includes("once")&&(s=a(s,(c,l)=>{c(l),i.removeEventListener(e,s,o)})),i.addEventListener(e,s,o),()=>{i.removeEventListener(e,s,o)}}function hd(t){return t.replace(/-/g,".")}function fd(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Vs(t){return!Array.isArray(t)&&!isNaN(t)}function dd(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function pd(t){return["keydown","keyup"].includes(t)}function gd(t,e){let n=e.filter(s=>!["window","document","prevent","stop","once"].includes(s));if(n.includes("debounce")){let s=n.indexOf("debounce");n.splice(s,Vs((n[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Ua(t.key).includes(n[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(s=>n.includes(s));return n=n.filter(s=>!i.includes(s)),!(i.length>0&&i.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),t[`${o}Key`])).length===i.length&&Ua(t.key).includes(n[0]))}function Ua(t){if(!t)return[];t=dd(t);let e={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return e[t]=t,Object.keys(e).map(n=>{if(e[n]===t)return n}).filter(n=>n)}re("model",(t,{modifiers:e,expression:n},{effect:r,cleanup:i})=>{let s=Ee(t,n),o=`${n} = rightSideOfExpression($event, ${n})`,a=Ee(t,o);var c=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)||e.includes("lazy")?"change":"input";let l=md(t,e,n),h=bu(t,c,e,g=>{a(()=>{},{scope:{$event:g,rightSideOfExpression:l}})});i(()=>h());let f=Ee(t,`${n} = __placeholder`);t._x_model={get(){let g;return s(v=>g=v),g},set(g){f(()=>{},{scope:{__placeholder:g}})}},t._x_forceModelUpdate=()=>{s(g=>{g===void 0&&n.match(/\./)&&(g=""),window.fromModel=!0,le(()=>pu(t,"value",g)),delete window.fromModel})},r(()=>{e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate()})});function md(t,e,n){return t.type==="radio"&&le(()=>{t.hasAttribute("name")||t.setAttribute("name",n)}),(r,i)=>le(()=>{if(r instanceof CustomEvent&&r.detail!==void 0)return r.detail||r.target.value;if(t.type==="checkbox")if(Array.isArray(i)){let s=e.includes("number")?fs(r.target.value):r.target.value;return r.target.checked?i.concat([s]):i.filter(o=>!yd(o,s))}else return r.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return e.includes("number")?Array.from(r.target.selectedOptions).map(s=>{let o=s.value||s.text;return fs(o)}):Array.from(r.target.selectedOptions).map(s=>s.value||s.text);{let s=r.target.value;return e.includes("number")?fs(s):e.includes("trim")?s.trim():s}}})}function fs(t){let e=t?parseFloat(t):null;return vd(e)?e:t}function yd(t,e){return t==e}function vd(t){return!Array.isArray(t)&&!isNaN(t)}re("cloak",t=>queueMicrotask(()=>le(()=>t.removeAttribute(nn("cloak")))));hu(()=>`[${nn("init")}]`);re("init",fi((t,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));re("text",(t,{expression:e},{effect:n,evaluateLater:r})=>{let i=r(e);n(()=>{i(s=>{le(()=>{t.textContent=s})})})});re("html",(t,{expression:e},{effect:n,evaluateLater:r})=>{let i=r(e);n(()=>{i(s=>{t.innerHTML=s})})});_o(eu(":",tu(nn("bind:"))));re("bind",(t,{value:e,modifiers:n,expression:r,original:i},{effect:s})=>{if(!e)return wd(t,r,i);if(e==="key")return _d(t,r);let o=Ee(t,r);s(()=>o(a=>{a===void 0&&r.match(/\./)&&(a=""),le(()=>pu(t,e,a,n))}))});function wd(t,e,n,r){let i={};id(i);let s=Ee(t,e),o=[];for(;o.length;)o.pop()();s(a=>{let c=Object.entries(a).map(([h,f])=>({name:h,value:f})),l=If(c);c=c.map(h=>l.find(f=>f.name===h.name)?{name:`x-bind:${h.name}`,value:`"${h.value}"`}:h),wo(t,c,n).map(h=>{o.push(h.runCleanups),h()})},{scope:i})}function _d(t,e){t._x_keyExpression=e}lu(()=>`[${nn("data")}]`);re("data",fi((t,{expression:e},{cleanup:n})=>{e=e===""?"{}":e;let r={};Ds(r,t);let i={};od(i,r);let s=jt(t,e,{scope:i});s===void 0&&(s={}),Ds(s,t);let o=tn(s);zc(o);let a=Qn(t,o);o.init&&jt(t,o.init),n(()=>{a(),o.destroy&&jt(t,o.destroy)})}));re("show",(t,{modifiers:e,expression:n},{effect:r})=>{let i=Ee(t,n),s=()=>le(()=>{t.style.display="none",t._x_isShown=!1}),o=()=>le(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display"),t._x_isShown=!0}),a=()=>setTimeout(o),c=Ps(f=>f?o():s(),f=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,f,o,s):f?a():s()}),l,h=!0;r(()=>i(f=>{!h&&f===l||(e.includes("immediate")&&(f?a():s()),c(f),l=f,h=!1)}))});re("for",(t,{expression:e},{effect:n,cleanup:r})=>{let i=bd(e),s=Ee(t,i.items),o=Ee(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},n(()=>Ed(t,i,s,o)),r(()=>{Object.values(t._x_lookup).forEach(a=>a.remove()),delete t._x_prevKeys,delete t._x_lookup})});function Ed(t,e,n,r){let i=o=>typeof o=="object"&&!Array.isArray(o),s=t;n(o=>{Td(o)&&o>=0&&(o=Array.from(Array(o).keys(),T=>T+1)),o===void 0&&(o=[]);let a=t._x_lookup,c=t._x_prevKeys,l=[],h=[];if(i(o))o=Object.entries(o).map(([T,O])=>{let D=$a(e,O,T,o);r(V=>h.push(V),{scope:En({index:T},D)}),l.push(D)});else for(let T=0;T<o.length;T++){let O=$a(e,o[T],T,o);r(D=>h.push(D),{scope:En({index:T},O)}),l.push(O)}let f=[],g=[],v=[],S=[];for(let T=0;T<c.length;T++){let O=c[T];h.indexOf(O)===-1&&v.push(O)}c=c.filter(T=>!v.includes(T));let L="template";for(let T=0;T<h.length;T++){let O=h[T],D=c.indexOf(O);if(D===-1)c.splice(T,0,O),f.push([L,T]);else if(D!==T){let V=c.splice(T,1)[0],X=c.splice(D-1,1)[0];c.splice(T,0,X),c.splice(D,0,V),g.push([V,X])}else S.push(O);L=O}for(let T=0;T<v.length;T++){let O=v[T];a[O]._x_effects&&a[O]._x_effects.forEach(Fc),a[O].remove(),a[O]=null,delete a[O]}for(let T=0;T<g.length;T++){let[O,D]=g[T],V=a[O],X=a[D],Te=document.createElement("div");le(()=>{X.after(Te),V.after(X),X._x_currentIfEl&&X.after(X._x_currentIfEl),Te.before(V),V._x_currentIfEl&&V.after(V._x_currentIfEl),Te.remove()}),Pa(X,l[h.indexOf(D)])}for(let T=0;T<f.length;T++){let[O,D]=f[T],V=O==="template"?s:a[O];V._x_currentIfEl&&(V=V._x_currentIfEl);let X=l[D],Te=h[D],Oe=document.importNode(s.content,!0).firstElementChild;Qn(Oe,tn(X),s),le(()=>{V.after(Oe),dt(Oe)}),typeof Te=="object"&&$r("x-for key cannot be an object, it must be a string or an integer",s),a[Te]=Oe}for(let T=0;T<S.length;T++)Pa(a[S[T]],l[h.indexOf(S[T])]);s._x_prevKeys=h})}function bd(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=t.match(r);if(!i)return;let s={};s.items=i[2].trim();let o=i[1].replace(n,"").trim(),a=o.match(e);return a?(s.item=o.replace(e,"").trim(),s.index=a[1].trim(),a[2]&&(s.collection=a[2].trim())):s.item=o,s}function $a(t,e,n,r){let i={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,a)=>{i[o]=e[a]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{i[o]=e[o]}):i[t.item]=e,t.index&&(i[t.index]=n),t.collection&&(i[t.collection]=r),i}function Td(t){return!Array.isArray(t)&&!isNaN(t)}function Tu(){}Tu.inline=(t,{expression:e},{cleanup:n})=>{let r=ui(t);r._x_refs||(r._x_refs={}),r._x_refs[e]=t,n(()=>delete r._x_refs[e])};re("ref",Tu);re("if",(t,{expression:e},{effect:n,cleanup:r})=>{let i=Ee(t,e),s=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let a=t.content.cloneNode(!0).firstElementChild;return Qn(a,{},t),le(()=>{t.after(a),dt(a)}),t._x_currentIfEl=a,t._x_undoIf=()=>{ft(a,c=>{c._x_effects&&c._x_effects.forEach(Fc)}),a.remove(),delete t._x_currentIfEl},a},o=()=>{!t._x_undoIf||(t._x_undoIf(),delete t._x_undoIf)};n(()=>i(a=>{a?s():o()})),r(()=>t._x_undoIf&&t._x_undoIf())});re("id",(t,{expression:e},{evaluate:n})=>{n(e).forEach(i=>ld(t,i))});_o(eu("@",tu(nn("on:"))));re("on",fi((t,{value:e,modifiers:n,expression:r},{cleanup:i})=>{let s=r?Ee(t,r):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let o=bu(t,e,n,a=>{s(()=>{},{scope:{$event:a},params:[a]})});i(()=>o())}));Xn.setEvaluator(Yc);Xn.setReactivityEngine({reactive:Cr.reactive,effect:Cr.effect,release:Cr.stop,raw:Cr.toRaw});var Sd=Xn,Fv=Sd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ad=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|l>>6,v=l&63;c||(v=64,o||(g=64)),r.push(n[h],n[f],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Su(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ad(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw Error();const g=s<<2|a>>4;if(r.push(g),l!==64){const v=a<<4&240|l>>2;if(r.push(v),f!==64){const S=l<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Au=function(t){const e=Su(t);return Id.encodeByteArray(e,!0)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(di())}function Nd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){return di().indexOf("Electron/")>=0}function Rd(){const t=di();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Od(){return di().indexOf("MSAppHost/")>=0}function Md(){return typeof indexedDB=="object"}function Pd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="FirebaseError";class pi extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Ld,Object.setPrototypeOf(this,pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Iu.prototype.create)}}class Iu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pi(i,a,r)}}function Fd(t,e){return t.replace(Vd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vd=/\{\$([^}]+)}/g;function Us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ba(s)&&Ba(o)){if(!Us(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ba(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bd(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$d(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $d(t){return t===at?void 0:t}function Bd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ud(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const qd={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Kd=K.INFO,Hd={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},zd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hd[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=Kd,this._logHandler=zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}function Gd(t){return Array.prototype.slice.call(t)}function xu(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function So(t,e,n){var r,i=new Promise(function(s,o){r=t[e].apply(t,n),xu(r).then(s,o)});return i.request=r,i}function Wd(t,e,n){var r=So(t,e,n);return r.then(function(i){if(!!i)return new Pn(i,r.request)})}function rn(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(i){this[e][r]=i}})})}function Ao(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return So(this[e],i,arguments)})})}function gi(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function Nu(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return Wd(this[e],i,arguments)})})}function Et(t){this._index=t}rn(Et,"_index",["name","keyPath","multiEntry","unique"]);Ao(Et,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Nu(Et,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Pn(t,e){this._cursor=t,this._request=e}rn(Pn,"_cursor",["direction","key","primaryKey","value"]);Ao(Pn,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Pn.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),xu(e._request).then(function(r){if(!!r)return new Pn(r,e._request)})})})});function Ue(t){this._store=t}Ue.prototype.createIndex=function(){return new Et(this._store.createIndex.apply(this._store,arguments))};Ue.prototype.index=function(){return new Et(this._store.index.apply(this._store,arguments))};rn(Ue,"_store",["name","keyPath","indexNames","autoIncrement"]);Ao(Ue,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Nu(Ue,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);gi(Ue,"_store",IDBObjectStore,["deleteIndex"]);function Jn(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Jn.prototype.objectStore=function(){return new Ue(this._tx.objectStore.apply(this._tx,arguments))};rn(Jn,"_tx",["objectStoreNames","mode"]);gi(Jn,"_tx",IDBTransaction,["abort"]);function mi(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Jn(n)}mi.prototype.createObjectStore=function(){return new Ue(this._db.createObjectStore.apply(this._db,arguments))};rn(mi,"_db",["name","version","objectStoreNames"]);gi(mi,"_db",IDBDatabase,["deleteObjectStore","close"]);function yi(t){this._db=t}yi.prototype.transaction=function(){return new Jn(this._db.transaction.apply(this._db,arguments))};rn(yi,"_db",["name","version","objectStoreNames"]);gi(yi,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Ue,Et].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Gd(arguments),r=n[n.length-1],i=this._store||this._index,s=i[t].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})})});[Et,Ue].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(s){r.iterateCursor(e,function(o){if(!o){s(i);return}if(i.push(o.value),n!==void 0&&i.length==n){s(i);return}o.continue()})})})});function Qd(t,e,n){var r=So(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(s){n&&n(new mi(i.result,s.oldVersion,i.transaction))}),r.then(function(s){return new yi(s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $s="@firebase/app",ja="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Cu("@firebase/app"),Jd="@firebase/app-compat",Zd="@firebase/analytics-compat",ep="@firebase/analytics",tp="@firebase/app-check-compat",np="@firebase/app-check",rp="@firebase/auth",ip="@firebase/auth-compat",sp="@firebase/database",op="@firebase/database-compat",ap="@firebase/functions",cp="@firebase/functions-compat",up="@firebase/installations",lp="@firebase/installations-compat",hp="@firebase/messaging",fp="@firebase/messaging-compat",dp="@firebase/performance",pp="@firebase/performance-compat",gp="@firebase/remote-config",mp="@firebase/remote-config-compat",yp="@firebase/storage",vp="@firebase/storage-compat",wp="@firebase/firestore",_p="@firebase/firestore-compat",Ep="firebase",bp="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="[DEFAULT]",Tp={[$s]:"fire-core",[Jd]:"fire-core-compat",[ep]:"fire-analytics",[Zd]:"fire-analytics-compat",[np]:"fire-app-check",[tp]:"fire-app-check-compat",[rp]:"fire-auth",[ip]:"fire-auth-compat",[sp]:"fire-rtdb",[op]:"fire-rtdb-compat",[ap]:"fire-fn",[cp]:"fire-fn-compat",[up]:"fire-iid",[lp]:"fire-iid-compat",[hp]:"fire-fcm",[fp]:"fire-fcm-compat",[dp]:"fire-perf",[pp]:"fire-perf-compat",[gp]:"fire-rc",[mp]:"fire-rc-compat",[yp]:"fire-gcs",[vp]:"fire-gcs-compat",[wp]:"fire-fst",[_p]:"fire-fst-compat","fire-js":"fire-js",[Ep]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,Bs=new Map;function Sp(t,e){try{t.container.addComponent(e)}catch(n){Io.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(Bs.has(e))return Io.debug(`There were multiple attempts to register component ${e}.`),!1;Bs.set(e,t);for(const n of Br.values())Sp(n,t);return!0}function Ap(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ye=new Iu("app","Firebase",Ip);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=bp;function Vv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Du,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ye.create("bad-app-name",{appName:String(r)});const i=Br.get(r);if(i){if(Us(t,i.options)&&Us(n,i.config))return i;throw Ye.create("duplicate-app",{appName:r})}const s=new jd(r);for(const a of Bs.values())s.addComponent(a);const o=new Cp(t,n,s);return Br.set(r,o),o}function Np(t=Du){const e=Br.get(t);if(!e)throw Ye.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let i=(r=Tp[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Io.warn(a.join(" "));return}jr(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="firebase-heartbeat-database",kp=1,pt="firebase-heartbeat-store";let ds=null;function Co(){return ds||(ds=Qd(Dp,kp,t=>{switch(t.oldVersion){case 0:t.createObjectStore(pt)}}).catch(t=>{throw Ye.create("storage-open",{originalErrorMessage:t.message})})),ds}async function Rp(t){try{return(await Co()).transaction(pt).objectStore(pt).get(xo(t))}catch(e){throw Ye.create("storage-get",{originalErrorMessage:e.message})}}async function ps(t,e){try{const r=(await Co()).transaction(pt,"readwrite");return await r.objectStore(pt).put(e,xo(t)),r.complete}catch(n){throw Ye.create("storage-set",{originalErrorMessage:n.message})}}async function Op(t){try{const n=(await Co()).transaction(pt,"readwrite");return await n.objectStore(pt).delete(xo(t)),n.complete}catch(e){throw Ye.create("storage-delete",{originalErrorMessage:e.message})}}function xo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=1024,Pp=30*24*60*60*1e3;class Lp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Up(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(i=>i.date===r))return this._heartbeatsCache.push({date:r,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Pp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Vp(this._heartbeatsCache),r=Au(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),r}}function Fp(){return new Date().toISOString().substring(0,10)}function Vp(t,e=Mp){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.userAgent===i.userAgent);if(s){if(s.dates.push(i.date),qa(n)>e){s.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),qa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?Pd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rp(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return ps(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ps(this.app,{heartbeats:[...r,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ps(this.app,{heartbeats:r.filter(i=>!e.includes(i))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Op(this.app)}}function qa(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){jr(new Mn("platform-logger",e=>new Yd(e),"PRIVATE")),jr(new Mn("heartbeat",e=>new Lp(e),"PRIVATE")),qt($s,ja,t),qt($s,ja,"esm2017"),qt("fire-js","")}$p("");var Bp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A,No=No||{},R=Bp||self;function qr(){}function js(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jp(t){return Object.prototype.hasOwnProperty.call(t,gs)&&t[gs]||(t[gs]=++qp)}var gs="closure_uid_"+(1e9*Math.random()>>>0),qp=0;function Kp(t,e,n){return t.call.apply(t.bind,arguments)}function Hp(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function he(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?he=Kp:he=Hp,he.apply(null,arguments)}function xr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ge(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function et(){this.s=this.s,this.o=this.o}var zp=0,Gp={};et.prototype.s=!1;et.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),zp!=0)){var t=jp(this);delete Gp[t]}};et.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ku=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ru=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Wp(t){e:{var e=Ug;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Ka(t){return Array.prototype.concat.apply([],arguments)}function Do(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Kr(t){return/^[\s\xa0]*$/.test(t)}var Ha=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ve(t,e){return t.indexOf(e)!=-1}function ms(t,e){return t<e?-1:t>e?1:0}var we;e:{var za=R.navigator;if(za){var Ga=za.userAgent;if(Ga){we=Ga;break e}}we=""}function ko(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ou(t){const e={};for(const n in t)e[n]=t[n];return e}var Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mu(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Wa.length;s++)n=Wa[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ro(t){return Ro[" "](t),t}Ro[" "]=qr;function Qp(t){var e=Jp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Yp=ve(we,"Opera"),Gt=ve(we,"Trident")||ve(we,"MSIE"),Pu=ve(we,"Edge"),qs=Pu||Gt,Lu=ve(we,"Gecko")&&!(ve(we.toLowerCase(),"webkit")&&!ve(we,"Edge"))&&!(ve(we,"Trident")||ve(we,"MSIE"))&&!ve(we,"Edge"),Xp=ve(we.toLowerCase(),"webkit")&&!ve(we,"Edge");function Fu(){var t=R.document;return t?t.documentMode:void 0}var Hr;e:{var ys="",vs=function(){var t=we;if(Lu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Pu)return/Edge\/([\d\.]+)/.exec(t);if(Gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Xp)return/WebKit\/(\S+)/.exec(t);if(Yp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vs&&(ys=vs?vs[1]:""),Gt){var ws=Fu();if(ws!=null&&ws>parseFloat(ys)){Hr=String(ws);break e}}Hr=ys}var Jp={};function Zp(){return Qp(function(){let t=0;const e=Ha(String(Hr)).split("."),n=Ha("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ms(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ms(i[2].length==0,s[2].length==0)||ms(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ks;if(R.document&&Gt){var Qa=Fu();Ks=Qa||parseInt(Hr,10)||void 0}else Ks=void 0;var eg=Ks,tg=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{R.addEventListener("test",qr,e),R.removeEventListener("test",qr,e)}catch{}return t}();function ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};function Ln(t,e){if(ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lu){e:{try{Ro(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ng[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ln.Z.h.call(this)}}ge(Ln,ye);var ng={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var er="closure_listenable_"+(1e6*Math.random()|0),rg=0;function ig(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++rg,this.ca=this.fa=!1}function vi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function wi(t){this.src=t,this.g={},this.h=0}wi.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zs(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ig(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Hs(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ku(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zs(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Oo="closure_lm_"+(1e6*Math.random()|0),_s={};function Vu(t,e,n,r,i){if(r&&r.once)return $u(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vu(t,e[s],n,r,i);return null}return n=Lo(n),t&&t[er]?t.N(e,n,Zn(r)?!!r.capture:!!r,i):Uu(t,e,n,!1,r,i)}function Uu(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zn(i)?!!i.capture:!!i,a=Po(t);if(a||(t[Oo]=a=new wi(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=sg(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tg||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ju(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sg(){function t(n){return e.call(t.src,t.listener,n)}var e=og;return t}function $u(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$u(t,e[s],n,r,i);return null}return n=Lo(n),t&&t[er]?t.O(e,n,Zn(r)?!!r.capture:!!r,i):Uu(t,e,n,!0,r,i)}function Bu(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Bu(t,e[s],n,r,i);else r=Zn(r)?!!r.capture:!!r,n=Lo(n),t&&t[er]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zs(s,n,r,i),-1<n&&(vi(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Po(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zs(e,n,r,i)),(n=-1<t?e[t]:null)&&Mo(n))}function Mo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[er])Hs(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ju(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Po(e))?(Hs(n,t),n.h==0&&(n.src=null,e[Oo]=null)):vi(t)}}}function ju(t){return t in _s?_s[t]:_s[t]="on"+t}function og(t,e){if(t.ca)t=!0;else{e=new Ln(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Mo(t),t=n.call(r,e)}return t}function Po(t){return t=t[Oo],t instanceof wi?t:null}var Es="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lo(t){return typeof t=="function"?t:(t[Es]||(t[Es]=function(e){return t.handleEvent(e)}),t[Es])}function oe(){et.call(this),this.i=new wi(this),this.P=this,this.I=null}ge(oe,et);oe.prototype[er]=!0;oe.prototype.removeEventListener=function(t,e,n,r){Bu(this,t,e,n,r)};function fe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ye(e,t);else if(e instanceof ye)e.target=e.target||t;else{var i=e;e=new ye(r,t),Mu(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Nr(o,r,!0,e)&&i}if(o=e.g=t,i=Nr(o,r,!0,e)&&i,i=Nr(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Nr(o,r,!1,e)&&i}oe.prototype.M=function(){if(oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vi(n[r]);delete t.g[e],t.h--}}this.I=null};oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Nr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Hs(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fo=R.JSON.stringify;function ag(){var t=Ku;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cg{constructor(){this.h=this.g=null}add(e,n){const r=qu.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ug,t=>t.reset());class ug{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lg(t){R.setTimeout(()=>{throw t},0)}function Vo(t,e){Gs||hg(),Ws||(Gs(),Ws=!0),Ku.add(t,e)}var Gs;function hg(){var t=R.Promise.resolve(void 0);Gs=function(){t.then(fg)}}var Ws=!1,Ku=new cg;function fg(){for(var t;t=ag();){try{t.h.call(t.g)}catch(n){lg(n)}var e=qu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ws=!1}function _i(t,e){oe.call(this),this.h=t||1,this.g=e||R,this.j=he(this.kb,this),this.l=Date.now()}ge(_i,oe);A=_i.prototype;A.da=!1;A.S=null;A.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),fe(this,"tick"),this.da&&(Uo(this),this.start()))}};A.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uo(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}A.M=function(){_i.Z.M.call(this),Uo(this),delete this.g};function $o(t,e,n){if(typeof t=="function")n&&(t=he(t,n));else if(t&&typeof t.handleEvent=="function")t=he(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function Hu(t){t.g=$o(()=>{t.g=null,t.i&&(t.i=!1,Hu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dg extends et{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hu(this)}M(){super.M(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fn(t){et.call(this),this.h=t,this.g={}}ge(Fn,et);var Ya=[];function zu(t,e,n,r){Array.isArray(n)||(n&&(Ya[0]=n.toString()),n=Ya);for(var i=0;i<n.length;i++){var s=Vu(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gu(t){ko(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mo(e)},t),t.g={}}Fn.prototype.M=function(){Fn.Z.M.call(this),Gu(this)};Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ei(){this.g=!0}Ei.prototype.Aa=function(){this.g=!1};function pg(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gg(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $t(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yg(t,n)+(r?" "+r:"")})}function mg(t,e){t.info(function(){return"TIMEOUT: "+e})}Ei.prototype.info=function(){};function yg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fo(n)}catch{return e}}var bt={},Xa=null;function bi(){return Xa=Xa||new oe}bt.Ma="serverreachability";function Wu(t){ye.call(this,bt.Ma,t)}ge(Wu,ye);function Vn(t){const e=bi();fe(e,new Wu(e,t))}bt.STAT_EVENT="statevent";function Qu(t,e){ye.call(this,bt.STAT_EVENT,t),this.stat=e}ge(Qu,ye);function _e(t){const e=bi();fe(e,new Qu(e,t))}bt.Na="timingevent";function Yu(t,e){ye.call(this,bt.Na,t),this.size=e}ge(Yu,ye);function tr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var Ti={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Bo(){}Bo.prototype.h=null;function Ja(t){return t.h||(t.h=t.i())}function Ju(){}var nr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function jo(){ye.call(this,"d")}ge(jo,ye);function qo(){ye.call(this,"c")}ge(qo,ye);var Qs;function Si(){}ge(Si,Bo);Si.prototype.g=function(){return new XMLHttpRequest};Si.prototype.i=function(){return{}};Qs=new Si;function rr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Fn(this),this.P=vg,t=qs?125:void 0,this.W=new _i(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var vg=45e3,Ys={},zr={};A=rr.prototype;A.setTimeout=function(t){this.P=t};function Xs(t,e,n){t.K=1,t.v=Ii(He(e)),t.s=n,t.U=!0,el(t,null)}function el(t,e){t.F=Date.now(),ir(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),al(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Zu,t.g=Cl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new dg(he(t.Ia,t,t.g),t.O)),zu(t.V,t.g,"readystatechange",t.gb),e=t.H?Ou(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Vn(1),pg(t.j,t.u,t.A,t.m,t.X,t.s)}A.gb=function(t){t=t.target;const e=this.L;e&&$e(t)==3?e.l():this.Ia(t)};A.Ia=function(t){try{if(t==this.g)e:{const h=$e(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(h!=3||qs||this.g&&(this.h.h||this.g.ga()||nc(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?Vn(3):Vn(2)),Ai(this);var n=this.g.ba();this.N=n;t:if(tl(this)){var r=nc(this.g);t="";var i=r.length,s=$e(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ct(this),Nn(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,gg(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kr(a)){var l=a;break t}}l=null}if(n=l)$t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Js(this,n);else{this.i=!1,this.o=3,_e(12),ct(this),Nn(this);break e}}this.U?(nl(this,h,o),qs&&this.i&&h==3&&(zu(this.V,this.W,"tick",this.fb),this.W.start())):($t(this.j,this.m,o,null),Js(this,o)),h==4&&ct(this),this.i&&!this.I&&(h==4?Tl(this.l,this):(this.i=!1,ir(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_e(12)):(this.o=0,_e(13)),ct(this),Nn(this)}}}catch{}finally{}};function tl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function nl(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=wg(t,n),i==zr){e==4&&(t.o=4,_e(14),r=!1),$t(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ys){t.o=4,_e(15),$t(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $t(t.j,t.m,i,null),Js(t,i);tl(t)&&i!=zr&&i!=Ys&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_e(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jo(e),e.L=!0,_e(11))):($t(t.j,t.m,n,"[Invalid Chunked Response]"),ct(t),Nn(t))}A.fb=function(){if(this.g){var t=$e(this.g),e=this.g.ga();this.C<e.length&&(Ai(this),nl(this,t,e),this.i&&t!=4&&ir(this))}};function wg(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zr:(n=Number(e.substring(n,r)),isNaN(n)?Ys:(r+=1,r+n>e.length?zr:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,ct(this)};function ir(t){t.Y=Date.now()+t.P,rl(t,t.P)}function rl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tr(he(t.eb,t),e)}function Ai(t){t.B&&(R.clearTimeout(t.B),t.B=null)}A.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mg(this.j,this.A),this.K!=2&&(Vn(3),_e(17)),ct(this),this.o=2,Nn(this)):rl(this,this.Y-t)};function Nn(t){t.l.G==0||t.I||Tl(t.l,t)}function ct(t){Ai(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uo(t.W),Gu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Js(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zs(n.i,t))){if(n.I=t.N,!t.J&&Zs(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yr(n),Ni(n);else break e;Xo(n),_e(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=tr(he(n.ab,n),6e3));if(1>=ll(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ut(n,11)}else if((t.J||n.g==t)&&Yr(n),!Kr(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const h=l[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const f=l[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const g=l[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=t.g;if(v){const S=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var s=r.i;!s.g&&(ve(S,"spdy")||ve(S,"quic")||ve(S,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(zo(s,s.h),s.h=null))}if(r.D){const L=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;L&&(r.sa=L,Q(r.F,r.D,L))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Il(r,r.H?r.la:null,r.W),o.J){hl(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ai(a),ir(a)),r.g=o}else El(r);0<n.l.length&&Di(n)}else l[0]!="stop"&&l[0]!="close"||ut(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ut(n,7):Yo(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Vn(4)}catch{}}function _g(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(js(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ko(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(js(t)||typeof t=="string")Ru(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(js(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=_g(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function sn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof sn)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}A=sn.prototype;A.R=function(){Ho(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};A.T=function(){return Ho(this),this.g.concat()};function Ho(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];gt(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],gt(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}A.get=function(t,e){return gt(this.h,t)?this.h[t]:e};A.set=function(t,e){gt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};A.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var il=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Eg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof mt){this.g=e!==void 0?e:t.g,Gr(this,t.j),this.s=t.s,Wr(this,t.i),Qr(this,t.m),this.l=t.l,e=t.h;var n=new Un;n.i=e.i,e.g&&(n.g=new sn(e.g),n.h=e.h),Za(this,n),this.o=t.o}else t&&(n=String(t).match(il))?(this.g=!!e,Gr(this,n[1]||"",!0),this.s=Dn(n[2]||""),Wr(this,n[3]||"",!0),Qr(this,n[4]),this.l=Dn(n[5]||"",!0),Za(this,n[6]||"",!0),this.o=Dn(n[7]||"")):(this.g=!!e,this.h=new Un(null,this.g))}mt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(An(e,ec,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(An(e,ec,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(An(n,n.charAt(0)=="/"?Ig:Ag,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",An(n,xg)),t.join("")};function He(t){return new mt(t)}function Gr(t,e,n){t.j=n?Dn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wr(t,e,n){t.i=n?Dn(e,!0):e}function Qr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Za(t,e,n){e instanceof Un?(t.h=e,Ng(t.h,t.g)):(n||(e=An(e,Cg)),t.h=new Un(e,t.g))}function Q(t,e,n){t.h.set(e,n)}function Ii(t){return Q(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bg(t){return t instanceof mt?He(t):new mt(t,void 0)}function Tg(t,e,n,r){var i=new mt(null,void 0);return t&&Gr(i,t),e&&Wr(i,e),n&&Qr(i,n),r&&(i.l=r),i}function Dn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function An(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Sg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ec=/[#\/\?@]/g,Ag=/[#\?:]/g,Ig=/[#\?]/g,Cg=/[#\?@]/g,xg=/#/g;function Un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tt(t){t.g||(t.g=new sn,t.h=0,t.i&&Eg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Un.prototype;A.add=function(t,e){tt(this),this.i=null,t=on(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sl(t,e){tt(t),e=on(t,e),gt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,gt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ho(t)))}function ol(t,e){return tt(t),e=on(t,e),gt(t.g.h,e)}A.forEach=function(t,e){tt(this),this.g.forEach(function(n,r){Ru(n,function(i){t.call(e,i,r,this)},this)},this)};A.T=function(){tt(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};A.R=function(t){tt(this);var e=[];if(typeof t=="string")ol(this,t)&&(e=Ka(e,this.g.get(on(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ka(e,t[n])}return e};A.set=function(t,e){return tt(this),this.i=null,t=on(this,t),ol(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function al(t,e,n){sl(t,e),0<n.length&&(t.i=null,t.g.set(on(t,e),Do(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function on(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ng(t,e){e&&!t.j&&(tt(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sl(this,r),al(this,i,n))},t)),t.j=e}var Dg=class{constructor(t,e){this.h=t,this.g=e}};function cl(t){this.l=t||kg,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ea&&R.g.Ea()&&R.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kg=10;function ul(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ll(t){return t.h?1:t.g?t.g.size:0}function Zs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zo(t,e){t.g?t.g.add(e):t.h=e}function hl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cl.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fl(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Do(t.i)}function Go(){}Go.prototype.stringify=function(t){return R.JSON.stringify(t,void 0)};Go.prototype.parse=function(t){return R.JSON.parse(t,void 0)};function Rg(){this.g=new Go}function Og(t,e,n){const r=n||"";try{Ko(t,function(i,s){let o=i;Zn(i)&&(o=Fo(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Mg(t,e){const n=new Ei;if(R.Image){const r=new Image;r.onload=xr(Dr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xr(Dr,n,r,"TestLoadImage: error",!1,e),r.onabort=xr(Dr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xr(Dr,n,r,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Dr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function sr(t){this.l=t.$b||null,this.j=t.ib||!1}ge(sr,Bo);sr.prototype.g=function(){return new Ci(this.l,this.j)};sr.prototype.i=function(t){return function(){return t}}({});function Ci(t,e){oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Wo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(Ci,oe);var Wo=0;A=Ci.prototype;A.open=function(t,e){if(this.readyState!=Wo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$n(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||R).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=Wo};A.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof R.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dl(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function dl(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}A.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?or(this):$n(this),this.readyState==3&&dl(this)}};A.Ua=function(t){this.g&&(this.response=this.responseText=t,or(this))};A.Ta=function(t){this.g&&(this.response=t,or(this))};A.ha=function(){this.g&&or(this)};function or(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$n(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $n(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Pg=R.JSON.parse;function ne(t){oe.call(this),this.headers=new sn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pl,this.K=this.L=!1}ge(ne,oe);var pl="",Lg=/^https?$/i,Fg=["POST","PUT"];A=ne.prototype;A.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qs.g(),this.C=this.u?Ja(this.u):Ja(Qs),this.g.onreadystatechange=he(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){tc(this,s);return}t=n||"";const i=new sn(this.headers);r&&Ko(r,function(s,o){i.set(o,s)}),r=Wp(i.T()),n=R.FormData&&t instanceof R.FormData,!(0<=ku(Fg,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yl(this),0<this.B&&((this.K=Vg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=he(this.pa,this)):this.A=$o(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){tc(this,s)}};function Vg(t){return Gt&&Zp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Ug(t){return t.toLowerCase()=="content-type"}A.pa=function(){typeof No!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function tc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gl(t),xi(t)}function gl(t){t.D||(t.D=!0,fe(t,"complete"),fe(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fe(this,"complete"),fe(this,"abort"),xi(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),ne.Z.M.call(this)};A.Fa=function(){this.s||(this.F||this.v||this.l?ml(this):this.cb())};A.cb=function(){ml(this)};function ml(t){if(t.h&&typeof No!="undefined"&&(!t.C[1]||$e(t)!=4||t.ba()!=2)){if(t.v&&$e(t)==4)$o(t.Fa,0,t);else if(fe(t,"readystatechange"),$e(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(il)[1]||null;if(!i&&R.self&&R.self.location){var s=R.self.location.protocol;i=s.substr(0,s.length-1)}r=!Lg.test(i?i.toLowerCase():"")}n=r}if(n)fe(t,"complete"),fe(t,"success");else{t.m=6;try{var o=2<$e(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",gl(t)}}finally{xi(t)}}}}function xi(t,e){if(t.g){yl(t);const n=t.g,r=t.C[0]?qr:null;t.g=null,t.C=null,e||fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function yl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}function $e(t){return t.g?t.g.readyState:0}A.ba=function(){try{return 2<$e(this)?this.g.status:-1}catch{return-1}};A.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Pg(e)}};function nc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Da=function(){return this.m};A.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function $g(t){let e="";return ko(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qo(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$g(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Q(t,e,n))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vl(t){this.za=0,this.l=[],this.h=new Ei,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Tn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Tn("baseRetryDelayMs",5e3,t),this.$a=Tn("retryDelaySeedMs",1e4,t),this.Ya=Tn("forwardChannelMaxRetries",2,t),this.ra=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new cl(t&&t.concurrentRequestLimit),this.Ca=new Rg,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}A=vl.prototype;A.ma=8;A.G=1;function Yo(t){if(wl(t),t.G==3){var e=t.V++,n=He(t.F);Q(n,"SID",t.J),Q(n,"RID",e),Q(n,"TYPE","terminate"),ar(t,n),e=new rr(t,t.h,e,void 0),e.K=2,e.v=Ii(He(n)),n=!1,R.navigator&&R.navigator.sendBeacon&&(n=R.navigator.sendBeacon(e.v.toString(),"")),!n&&R.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ir(e)}Al(t)}A.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ni(t){t.g&&(Jo(t),t.g.cancel(),t.g=null)}function wl(t){Ni(t),t.u&&(R.clearTimeout(t.u),t.u=null),Yr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function bs(t,e){t.l.push(new Dg(t.Za++,e)),t.G==3&&Di(t)}function Di(t){ul(t.i)||t.m||(t.m=!0,Vo(t.Ha,t),t.C=0)}function Bg(t,e){return ll(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=tr(he(t.Ha,t,e),Sl(t,t.C)),t.C++,!0)}A.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new rr(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Ou(s),Mu(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_l(this,i,e),n=He(this.F),Q(n,"RID",t),Q(n,"CVER",22),this.D&&Q(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Qo(n,this.o,s),zo(this.i,i),this.Ra&&Q(n,"TYPE","init"),this.ja?(Q(n,"$req",e),Q(n,"SID","null"),i.$=!0,Xs(i,n,null)):Xs(i,n,e),this.G=2}}else this.G==3&&(t?rc(this,t):this.l.length==0||ul(this.i)||rc(this))};function rc(t,e){var n;e?n=e.m:n=t.V++;const r=He(t.F);Q(r,"SID",t.J),Q(r,"RID",n),Q(r,"AID",t.U),ar(t,r),t.o&&t.s&&Qo(r,t.o,t.s),n=new rr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=_l(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),zo(t.i,n),Xs(n,r,e)}function ar(t,e){t.j&&Ko({},function(n,r){Q(e,r,n)})}function _l(t,e,n){n=Math.min(t.l.length,n);var r=t.j?he(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const h=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{Og(h,o,"req"+l+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function El(t){t.g||t.u||(t.Y=1,Vo(t.Ga,t),t.A=0)}function Xo(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=tr(he(t.Ga,t),Sl(t,t.A)),t.A++,!0)}A.Ga=function(){if(this.u=null,bl(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=tr(he(this.bb,this),t)}};A.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,_e(10),Ni(this),bl(this))};function Jo(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function bl(t){t.g=new rr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Q(e,"RID","rpc"),Q(e,"SID",t.J),Q(e,"CI",t.N?"0":"1"),Q(e,"AID",t.U),ar(t,e),Q(e,"TYPE","xmlhttp"),t.o&&t.s&&Qo(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ii(He(e)),n.s=null,n.U=!0,el(n,t)}A.ab=function(){this.v!=null&&(this.v=null,Ni(this),Xo(this),_e(19))};function Yr(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function Tl(t,e){var n=null;if(t.g==e){Yr(t),Jo(t),t.g=null;var r=2}else if(Zs(t.i,e))n=e.D,hl(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=bi(),fe(r,new Yu(r,n,e,i)),Di(t)}else El(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&Bg(t,e)||r==2&&Xo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ut(t,5);break;case 4:ut(t,10);break;case 3:ut(t,6);break;default:ut(t,2)}}}function Sl(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ut(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=he(t.jb,t);n||(n=new mt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Gr(n,"https"),Ii(n)),Mg(n.toString(),r)}else _e(2);t.G=0,t.j&&t.j.va(e),Al(t),wl(t)}A.jb=function(t){t?(this.h.info("Successfully pinged google.com"),_e(2)):(this.h.info("Failed to ping google.com"),_e(1))};function Al(t){t.G=0,t.I=-1,t.j&&((fl(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Do(t.l),t.l.length=0),t.j.ua())}function Il(t,e,n){let r=bg(n);if(r.i!="")e&&Wr(r,e+"."+r.i),Qr(r,r.m);else{const i=R.location;r=Tg(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&ko(t.aa,function(i,s){Q(r,s,i)}),e=t.D,n=t.sa,e&&n&&Q(r,e,n),Q(r,"VER",t.ma),ar(t,r),r}function Cl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ne(new sr({ib:!0})):new ne(t.qa),e.L=t.H,e}function xl(){}A=xl.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Oa=function(){};function Xr(){if(Gt&&!(10<=Number(eg)))throw Error("Environmental error: no available transport.")}Xr.prototype.g=function(t,e){return new Re(t,e)};function Re(t,e){oe.call(this),this.g=new vl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Kr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Kr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new an(this)}ge(Re,oe);Re.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vo(he(t.hb,t,e))),_e(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Il(t,null,t.W),Di(t)};Re.prototype.close=function(){Yo(this.g)};Re.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,bs(this.g,e)}else this.v?(e={},e.__data__=Fo(t),bs(this.g,e)):bs(this.g,t)};Re.prototype.M=function(){this.g.j=null,delete this.j,Yo(this.g),delete this.g,Re.Z.M.call(this)};function Nl(t){jo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ge(Nl,jo);function Dl(){qo.call(this),this.status=1}ge(Dl,qo);function an(t){this.g=t}ge(an,xl);an.prototype.xa=function(){fe(this.g,"a")};an.prototype.wa=function(t){fe(this.g,new Nl(t))};an.prototype.va=function(t){fe(this.g,new Dl(t))};an.prototype.ua=function(){fe(this.g,"b")};Xr.prototype.createWebChannel=Xr.prototype.g;Re.prototype.send=Re.prototype.u;Re.prototype.open=Re.prototype.m;Re.prototype.close=Re.prototype.close;Ti.NO_ERROR=0;Ti.TIMEOUT=8;Ti.HTTP_ERROR=6;Xu.COMPLETE="complete";Ju.EventType=nr;nr.OPEN="a";nr.CLOSE="b";nr.ERROR="c";nr.MESSAGE="d";oe.prototype.listen=oe.prototype.N;ne.prototype.listenOnce=ne.prototype.O;ne.prototype.getLastError=ne.prototype.La;ne.prototype.getLastErrorCode=ne.prototype.Da;ne.prototype.getStatus=ne.prototype.ba;ne.prototype.getResponseJson=ne.prototype.Qa;ne.prototype.getResponseText=ne.prototype.ga;ne.prototype.send=ne.prototype.ea;var jg=function(){return new Xr},qg=function(){return bi()},Ts=Ti,Kg=Xu,Hg=bt,ic={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},zg=sr,kr=Ju,Gg=ne;const sc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Cu("@firebase/firestore");function oc(){return yt.logLevel}function C(t,...e){if(yt.logLevel<=K.DEBUG){const n=e.map(Zo);yt.debug(`Firestore (${cn}): ${t}`,...n)}}function Xe(t,...e){if(yt.logLevel<=K.ERROR){const n=e.map(Zo);yt.error(`Firestore (${cn}): ${t}`,...n)}}function ac(t,...e){if(yt.logLevel<=K.WARN){const n=e.map(Zo);yt.warn(`Firestore (${cn}): ${t}`,...n)}}function Zo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: `+t;throw Xe(e),new Error(e)}function z(t,e){t||M()}function P(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends pi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class Yg{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Be,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Be)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new Wg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new Ae(e)}}class Xg{constructor(e,n,r){this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Jg{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Xg(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class em{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.p=n.token,new Zg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ea.A=-1;class kl{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function H(t,e){return t<e?-1:t>e?1:0}function Wt(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new De(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends Bn{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const nm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Bn{construct(e,n,r){return new Ie(e,n,r)}static isValidIdentifier(e){return nm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(Ie.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wt(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const rm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(t){if(z(!!t),typeof t=="string"){let e=0;const n=rm.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qt(t){return typeof t=="string"?pe.fromBase64String(t):pe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ml(t){const e=t.mapValue.fields.__previous_value__;return Ol(e)?Ml(e):e}function qn(t){const e=Je(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t){return t==null}function Jr(t){return t===0&&1/t==-1/0}function sm(t){return typeof t=="number"&&Number.isInteger(t)&&!Jr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(Y.fromString(e))}static fromName(e){return new N(Y.fromString(e).popFirst(5))}static empty(){return new N(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new Y(e.slice()))}}function vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ol(t)?4:10:M()}function Fe(t,e){if(t===e)return!0;const n=vt(t);if(n!==vt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qn(t).isEqual(qn(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Je(r.timestampValue),o=Je(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qt(r.bytesValue).isEqual(Qt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return te(r.geoPointValue.latitude)===te(i.geoPointValue.latitude)&&te(r.geoPointValue.longitude)===te(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return te(r.integerValue)===te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=te(r.doubleValue),o=te(i.doubleValue);return s===o?Jr(s)===Jr(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Wt(t.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(cc(s)!==cc(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Fe(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function Kn(t,e){return(t.values||[]).find(n=>Fe(n,e))!==void 0}function Xt(t,e){if(t===e)return 0;const n=vt(t),r=vt(e);if(n!==r)return H(n,r);switch(n){case 0:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=te(i.integerValue||i.doubleValue),a=te(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return uc(t.timestampValue,e.timestampValue);case 4:return uc(qn(t),qn(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Qt(i),a=Qt(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=H(o[c],a[c]);if(l!==0)return l}return H(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=H(te(i.latitude),te(s.latitude));return o!==0?o:H(te(i.longitude),te(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Xt(o[c],a[c]);if(l)return l}return H(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let h=0;h<a.length&&h<l.length;++h){const f=H(a[h],l[h]);if(f!==0)return f;const g=Xt(o[a[h]],c[l[h]]);if(g!==0)return g}return H(a.length,l.length)}(t.mapValue,e.mapValue);default:throw M()}}function uc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=Je(t),r=Je(e),i=H(n.seconds,r.seconds);return i!==0?i:H(n.nanos,r.nanos)}function Kt(t){return eo(t)}function eo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Je(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Qt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=eo(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${eo(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function to(t){return!!t&&"integerValue"in t}function ta(t){return!!t&&"arrayValue"in t}function lc(t){return!!t&&"nullValue"in t}function hc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Or(t){return!!t&&"mapValue"in t}function kn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tt(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=kn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Or(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kn(n)}setAll(e){let n=Ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=kn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Or(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Or(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Tt(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ne(kn(this.value))}}function Pl(t){const e=[];return Tt(t.fields,(n,r)=>{const i=new Ie([n]);if(Or(r)){const s=Pl(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new me(e,0,$.min(),$.min(),Ne.empty(),0)}static newFoundDocument(e,n,r){return new me(e,1,n,$.min(),r,0)}static newNoDocument(e,n){return new me(e,2,n,$.min(),Ne.empty(),0)}static newUnknownDocument(e,n){return new me(e,3,n,$.min(),Ne.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function fc(t,e=null,n=[],r=[],i=null,s=null,o=null){return new om(t,e,n,r,i,s,o)}function na(t){const e=P(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Kt(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),un(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Kt(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Kt(r)).join(",")),e.P=n}return e.P}function am(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Kt(r.value)}`;var r}).join(", ")}]`),un(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Kt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Kt(n)).join(",")),`Target(${e})`}function ra(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!gm(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Fe(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pc(t.startAt,e.startAt)&&pc(t.endAt,e.endAt)}function no(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ce extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,r):new cm(e,n,r):n==="array-contains"?new hm(e,r):n==="in"?new fm(e,r):n==="not-in"?new dm(e,r):n==="array-contains-any"?new pm(e,r):new Ce(e,n,r)}static v(e,n,r){return n==="in"?new um(e,r):new lm(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(Xt(n,this.value)):n!==null&&vt(this.value)===vt(n)&&this.V(Xt(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cm extends Ce{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.V(n)}}class um extends Ce{constructor(e,n){super(e,"in",n),this.keys=Ll("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lm extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=Ll("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ll(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class hm extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ta(n)&&Kn(n.arrayValue,this.value)}}class fm extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kn(this.value.arrayValue,n)}}class dm extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kn(this.value.arrayValue,n)}}class pm extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ta(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}class Zr{constructor(e,n){this.position=e,this.inclusive=n}}class Rn{constructor(e,n="asc"){this.field=e,this.dir=n}}function gm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function dc(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=Xt(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function mm(t,e,n,r,i,s,o,a){return new ki(t,e,n,r,i,s,o,a)}function Ri(t){return new ki(t)}function Mr(t){return!un(t.limit)&&t.limitType==="F"}function ei(t){return!un(t.limit)&&t.limitType==="L"}function ym(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vm(t){for(const e of t.filters)if(e.S())return e.field;return null}function wm(t){return t.collectionGroup!==null}function Hn(t){const e=P(t);if(e.D===null){e.D=[];const n=vm(e),r=ym(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Rn(n)),e.D.push(new Rn(Ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Rn(Ie.keyField(),s))}}}return e.D}function wt(t){const e=P(t);if(!e.C)if(e.limitType==="F")e.C=fc(e.path,e.collectionGroup,Hn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Hn(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Rn(s.field,o))}const r=e.endAt?new Zr(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Zr(e.startAt.position,!e.startAt.inclusive):null;e.C=fc(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function _m(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oi(t,e){return ra(wt(t),wt(e))&&t.limitType===e.limitType}function Fl(t){return`${na(wt(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${am(wt(t))}; limitType=${t.limitType})`}function ia(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=dc(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Hn(n),r)||n.endAt&&!function(i,s,o){const a=dc(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Hn(n),r))}(t,e)}function Vl(t){return(e,n)=>{let r=!1;for(const i of Hn(t)){const s=Em(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Em(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Xt(a,c):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(e)?"-0":e}}function $l(t){return{integerValue:""+t}}function bm(t,e){return sm(e)?$l(e):Ul(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this._=void 0}}function Tm(t,e,n){return t instanceof ti?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof zn?jl(t,e):t instanceof Gn?ql(t,e):function(r,i){const s=Bl(r,i),o=gc(s)+gc(r.k);return to(s)&&to(r.k)?$l(o):Ul(r.O,o)}(t,e)}function Sm(t,e,n){return t instanceof zn?jl(t,e):t instanceof Gn?ql(t,e):n}function Bl(t,e){return t instanceof ni?to(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ti extends Mi{}class zn extends Mi{constructor(e){super(),this.elements=e}}function jl(t,e){const n=Kl(e);for(const r of t.elements)n.some(i=>Fe(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gn extends Mi{constructor(e){super(),this.elements=e}}function ql(t,e){let n=Kl(e);for(const r of t.elements)n=n.filter(i=>!Fe(i,r));return{arrayValue:{values:n}}}class ni extends Mi{constructor(e,n){super(),this.O=e,this.k=n}}function gc(t){return te(t.integerValue||t.doubleValue)}function Kl(t){return ta(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Am(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zn&&r instanceof zn||n instanceof Gn&&r instanceof Gn?Wt(n.elements,r.elements,Fe):n instanceof ni&&r instanceof ni?Fe(n.k,r.k):n instanceof ti&&r instanceof ti}(t.transform,e.transform)}class Im{constructor(e,n){this.version=e,this.transformResults=n}}class je{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pi{}function Cm(t,e,n){t instanceof Li?function(r,i,s){const o=r.value.clone(),a=vc(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ln?function(r,i,s){if(!Pr(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=vc(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Hl(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n){t instanceof Li?function(r,i,s){if(!Pr(r.precondition,i))return;const o=r.value.clone(),a=wc(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(yc(i),o).setHasLocalMutations()}(t,e,n):t instanceof ln?function(r,i,s){if(!Pr(r.precondition,i))return;const o=wc(r.fieldTransforms,s,i),a=i.data;a.setAll(Hl(r)),a.setAll(o),i.convertToFoundDocument(yc(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Pr(r.precondition,i)&&i.convertToNoDocument($.min())}(t,e)}function xm(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Bl(r.transform,i||null);s!=null&&(n==null&&(n=Ne.empty()),n.set(r.field,s))}return n||null}function mc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Wt(n,r,(i,s)=>Am(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function yc(t){return t.isFoundDocument()?t.version:$.min()}class Li extends Pi{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class ln extends Pi{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Hl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vc(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Sm(o,a,n[i]))}return r}function wc(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Tm(s,o,e))}return r}class zl extends Pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Nm extends Pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,j;function km(t){switch(t){default:return M();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Gl(t){if(t===void 0)return Xe("GRPC error has no .code"),y.UNKNOWN;switch(t){case ee.OK:return y.OK;case ee.CANCELLED:return y.CANCELLED;case ee.UNKNOWN:return y.UNKNOWN;case ee.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case ee.INTERNAL:return y.INTERNAL;case ee.UNAVAILABLE:return y.UNAVAILABLE;case ee.UNAUTHENTICATED:return y.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case ee.NOT_FOUND:return y.NOT_FOUND;case ee.ALREADY_EXISTS:return y.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return y.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case ee.ABORTED:return y.ABORTED;case ee.OUT_OF_RANGE:return y.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return y.UNIMPLEMENTED;case ee.DATA_LOSS:return y.DATA_LOSS;default:return M()}}(j=ee||(ee={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.comparator=e,this.root=n||ue.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rr(this.root,e,this.comparator,!0)}}class Rr{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ue.RED,this.left=i!=null?i:ue.EMPTY,this.right=s!=null?s:ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _c(this.data.getIterator())}getIteratorFrom(e){return new _c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new de(this.comparator);return n.data=e,n}}class _c{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new ae(N.comparator);function _t(){return Rm}const Om=new ae(N.comparator);function so(){return Om}const Mm=new ae(N.comparator),Pm=new de(N.comparator);function G(...t){let e=Pm;for(const n of t)e=e.add(n);return e}const Lm=new de(H);function Wl(){return Lm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,cr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fi($.min(),r,Wl(),_t(),G())}}class cr{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new cr(pe.EMPTY_BYTE_STRING,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,i){this.M=e,this.removedTargetIds=n,this.key=r,this.$=i}}class Ql{constructor(e,n){this.targetId=e,this.F=n}}class Yl{constructor(e,n,r=pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ec{constructor(){this.B=0,this.L=Tc(),this.U=pe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=G(),n=G(),r=G();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new cr(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Tc()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Fm{constructor(e){this.nt=e,this.st=new Map,this.it=_t(),this.rt=bc(),this.ot=new de(H)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.F.count,i=this.wt(n);if(i){const s=i.target;if(no(s))if(r===0){const o=new N(s.path);this.at(n,o,me.newNoDocument(o,$.min()))}else z(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&no(a.target)){const c=new N(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,me.newNoDocument(c,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=G();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Fi(e,n,this.ot,this.it,r);return this.it=_t(),this.rt=bc(),this.ot=new de(H),i}ut(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Ec,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new de(H),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Ec),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function bc(){return new ae(N.comparator)}function Tc(){return new ae(N.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Um=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $m{constructor(e,n){this.databaseId=e,this.N=n}}function ri(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xl(t,e){return t.N?e.toBase64():e.toUint8Array()}function Bm(t,e){return ri(t,e.toTimestamp())}function qe(t){return z(!!t),$.fromTimestamp(function(e){const n=Je(e);return new De(n.seconds,n.nanos)}(t))}function sa(t,e){return function(n){return new Y(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jl(t){const e=Y.fromString(t);return z(th(e)),e}function oo(t,e){return sa(t.databaseId,e.path)}function Ss(t,e){const n=Jl(e);if(n.get(1)!==t.databaseId.projectId)throw new x(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(Zl(n))}function ao(t,e){return sa(t.databaseId,e)}function jm(t){const e=Jl(t);return e.length===4?Y.emptyPath():Zl(e)}function co(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zl(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sc(t,e,n){return{name:oo(t,e),fields:n.value.mapValue.fields}}function qm(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.N?(z(l===void 0||typeof l=="string"),pe.fromBase64String(l||"")):(z(l===void 0||l instanceof Uint8Array),pe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:Gl(c.code);return new x(l,c.message||"")}(o);n=new Yl(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ss(t,r.document.name),s=qe(r.document.updateTime),o=new Ne({mapValue:{fields:r.document.fields}}),a=me.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Lr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ss(t,r.document),s=r.readTime?qe(r.readTime):$.min(),o=me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ss(t,r.document),s=r.removedTargetIds||[];n=new Lr([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Dm(i),o=r.targetId;n=new Ql(o,s)}}return n}function Km(t,e){let n;if(e instanceof Li)n={update:Sc(t,e.key,e.value)};else if(e instanceof zl)n={delete:oo(t,e.key)};else if(e instanceof ln)n={update:Sc(t,e.key,e.data),updateMask:ey(e.fieldMask)};else{if(!(e instanceof Nm))return M();n={verify:oo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ti)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ni)return{fieldPath:s.field.canonicalString(),increment:o.k};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Bm(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function Hm(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?qe(r.updateTime):qe(i);return s.isEqual($.min())&&(s=qe(i)),new Im(s,r.transformResults||[])}(n,e))):[]}function zm(t,e){return{documents:[ao(t,e.path)]}}function Gm(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ao(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ao(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(h=>function(f){if(f.op==="=="){if(hc(f.value))return{unaryFilter:{field:Ut(f.field),op:"IS_NAN"}};if(lc(f.value))return{unaryFilter:{field:Ut(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(hc(f.value))return{unaryFilter:{field:Ut(f.field),op:"IS_NOT_NAN"}};if(lc(f.value))return{unaryFilter:{field:Ut(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(f.field),op:Xm(f.op),value:f.value}}}(h));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Ut(h.field),direction:Ym(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.N||un(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Wm(t){let e=jm(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=eh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Rn(Bt(f.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,un(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new Zr(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new Zr(g,f)}(n.endAt)),mm(e,i,o,s,a,"F",c,l)}function Qm(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function eh(t){return t?t.unaryFilter!==void 0?[Zm(t)]:t.fieldFilter!==void 0?[Jm(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>eh(e)).reduce((e,n)=>e.concat(n)):M():[]}function Ym(t){return Vm[t]}function Xm(t){return Um[t]}function Ut(t){return{fieldPath:t.canonicalString()}}function Bt(t){return Ie.fromServerFormat(t.fieldPath)}function Jm(t){return Ce.create(Bt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}function Zm(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bt(t.unaryFilter.field);return Ce.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bt(t.unaryFilter.field);return Ce.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bt(t.unaryFilter.field);return Ce.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bt(t.unaryFilter.field);return Ce.create(i,"!=",{nullValue:"NULL_VALUE"});default:return M()}}function ey(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function th(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ny{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function ur(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Cm(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&io(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&io(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument($.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Wt(this.mutations,e.mutations,(n,r)=>mc(n,r))&&Wt(this.baseMutations,e.baseMutations,(n,r)=>mc(n,r))}}class oa{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=Mm;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new oa(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s=$.min(),o=$.min(),a=pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.Ht=e}}function oy(t){const e=Wm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_m(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.xe=new cy}addToCollectionParentIndex(e,n){return this.xe.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n,r){return w.resolve(G())}getFieldIndex(e,n){return w.resolve(null)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class cy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new de(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Jt(0)}static Je(){return new Jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==ty)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Tt(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Rl(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.changes=new hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r){this.qn=e,this.gs=n,this.indexManager=r}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.ps(e,n,r))}ps(e,n,r){return this.qn.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Is(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Es(e,n){return this.qn.getEntries(e,n).next(r=>this.Ts(e,r).next(()=>r))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Is(n,r))}As(e,n,r){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(e,n.path):wm(n)?this.Ps(e,n,r):this.bs(e,n,r)}Rs(e,n){return this.ys(e,new N(n)).next(r=>{let i=so();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ps(e,n,r){const i=n.collectionGroup;let s=so();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const c=function(l,h){return new ki(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.bs(e,c,r).next(l=>{l.forEach((h,f)=>{s=s.insert(h,f)})})}).next(()=>s))}bs(e,n,r){let i;return this.qn.getAll(e,n.path,r).next(s=>(i=s,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const c=a.key;let l=i.get(c);l==null&&(l=me.newInvalidDocument(c),i=i.insert(c,l)),io(a,l,o.localWriteTime),l.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((s,o)=>{ia(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.vs=r,this.Vs=i}static Ss(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new aa(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{Ds(e){this.Cs=e}As(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual($.min())?this.Ns(e,n):this.Cs.Es(e,i).next(s=>{const o=this.xs(n,s);return(Mr(n)||ei(n))&&this.ks(n.limitType,o,i,r)?this.Ns(e,n):(oc()<=K.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ro(n)),this.Cs.As(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let r=new de(Vl(e));return n.forEach((i,s)=>{ia(e,s)&&(r=r.add(s))}),r}ks(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ns(e,n){return oc()<=K.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",ro(n)),this.Cs.As(e,n,$.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,i){this.persistence=e,this.Os=n,this.O=i,this.Ms=new ae(H),this.$s=new hr(s=>na(s),ra),this.Fs=$.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(r)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new ly(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function dy(t,e,n,r){return new fy(t,e,n,r)}async function nh(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.gs.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.gs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=G();for(const l of i){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return n.Us.Es(r,c).next(l=>({qs:l,removedBatchIds:o,addedBatchIds:a}))})})}function py(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const h=c.batch,f=h.keys();let g=w.resolve();return f.forEach(v=>{g=g.next(()=>l.getEntry(a,v)).next(S=>{const L=c.docVersions.get(v);z(L!==null),S.version.compareTo(L)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),l.addEntry(S)))})}),g.next(()=>o.gs.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.gs.performConsistencyCheck(r)).next(()=>n.Us.Es(r,i))})}function rh(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function gy(t,e){const n=P(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Un.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Un.addMatchingKeys(s,l.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(pe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),i=i.insert(h,g),function(v,S,L){return v.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(f,g,l)&&a.push(n.Un.updateTargetData(s,g))});let c=_t();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(my(s,o,e.documentUpdates).next(l=>{c=l})),!r.isEqual($.min())){const l=n.Un.getLastRemoteSnapshotVersion(s).next(h=>n.Un.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.Us.Ts(s,c)).next(()=>c)}).then(s=>(n.Ms=i,s))}function my(t,e,n){let r=G();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=_t();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual($.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):C("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),s})}function yy(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(r,e)))}function vy(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Un.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Un.allocateTargetId(r).next(o=>(i=new ht(e,o,0,r.currentSequenceNumber),n.Un.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.$s.set(e,r.targetId)),r})}async function uo(t,e,n){const r=P(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ur(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.$s.delete(i.target)}function Ac(t,e,n){const r=P(t);let i=$.min(),s=G();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const h=P(a),f=h.$s.get(l);return f!==void 0?w.resolve(h.Ms.get(f)):h.Un.getTargetData(c,l)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Os.As(o,e,n?i:$.min(),n?s:G())).next(a=>({documents:a,Ks:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return w.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var r;return this.Ws.set(n.id,{id:(r=n).id,version:r.version,createTime:qe(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(r){return{name:r.name,query:oy(r.bundledQuery),readTime:qe(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.overlays=new ae(N.comparator),this.Hs=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach(i=>{this.Yt(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Hs.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=new Map,s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ae((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=new Map,s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=new Map,c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(h,l)),!(a.size>=i)););return w.resolve(a)}Yt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);i!==null&&this.Hs.get(i.largestBatchId).delete(r.key),this.overlays=this.overlays.insert(r.key,new iy(n,r));let s=this.Hs.get(n);s===void 0&&(s=new Set,this.Hs.set(n,s)),s.add(r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.Js=new de(se.Ys),this.Xs=new de(se.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const r=new se(e,n);this.Js=this.Js.add(r),this.Xs=this.Xs.add(r)}ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ei(new se(e,n))}ni(e,n){e.forEach(r=>this.removeReference(r,n))}si(e){const n=new N(new Y([])),r=new se(n,e),i=new se(n,e+1),s=[];return this.Xs.forEachInRange([r,i],o=>{this.ei(o),s.push(o.key)}),s}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new N(new Y([])),r=new se(n,e),i=new se(n,e+1);let s=G();return this.Xs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new se(e,0),r=this.Js.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return N.comparator(e.key,n.key)||H(e.oi,n.oi)}static Zs(e,n){return H(e.oi,n.oi)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new de(se.Ys)}checkEmpty(e){return w.resolve(this.gs.length===0)}addMutationBatch(e,n,r,i){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new ry(s,n,r,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.hi(r),s=i<0?0:i;return w.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return w.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new se(n,0),i=new se(n,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([r,i],o=>{const a=this.ai(o.oi);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new de(H);return n.forEach(i=>{const s=new se(i,0),o=new se(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([s,o],a=>{r=r.add(a.oi)})}),w.resolve(this.li(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new se(new N(s),0);let a=new de(H);return this.ui.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.oi)),!0)},o),w.resolve(this.li(a))}li(e){const n=[];return e.forEach(r=>{const i=this.ai(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.fi(n.batchId,"removed")===0),this.gs.shift();let r=this.ui;return w.forEach(n.mutations,i=>{const s=new se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ui=r})}Qe(e){}containsKey(e,n){const r=new se(n,0),i=this.ui.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.gs.length,w.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.di=e,this.docs=new ae(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():me.newInvalidDocument(n))}getEntries(e,n){let r=_t();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():me.newInvalidDocument(i))}),w.resolve(r)}getAll(e,n,r){let i=_t();const s=new N(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return w.resolve(i)}_i(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ty(this)}getSize(e){return w.resolve(this.size)}}class Ty extends uy{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(e,i)):this.Tn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.persistence=e,this.wi=new hr(n=>na(n),ra),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.mi=0,this.gi=new ca,this.targetCount=0,this.yi=Jt.He()}forEachTarget(e,n){return this.wi.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.mi&&(this.mi=n),w.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Jt(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Ze(n),w.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.wi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.wi.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.gi.ti(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.gi.ni(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.gi.ri(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.pi={},this.overlays={},this.Nn=new ea(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new Sy(this),this.indexManager=new ay,this.qn=function(r){return new by(r)}(r=>this.referenceDelegate.Ii(r)),this.O=new sy(n),this.Kn=new wy(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _y,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.pi[e.toKey()];return r||(r=new Ey(n,this.referenceDelegate),this.pi[e.toKey()]=r),r}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new Iy(this.Nn.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return w.or(Object.values(this.pi).map(r=>()=>r.containsKey(e,n)))}}class Iy extends ny{constructor(e){super(),this.currentSequenceNumber=e}}class ua{constructor(e){this.persistence=e,this.Ri=new ca,this.Pi=null}static bi(e){return new ua(e)}get vi(){if(this.Pi)return this.Pi;throw M()}addReference(e,n,r){return this.Ri.addReference(r,n),this.vi.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.vi.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),w.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.vi,r=>{const i=N.fromPath(r);return this.Vi(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(r=>{r?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return w.or([()=>w.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ic{constructor(){this.activeTargetIds=Wl()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cy{constructor(){this._r=new Ic,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,r){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Ic,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,r,i,s){const o=this.$r(e,n);C("RestConnection","Sending: ",o,r);const a={};return this.Fr(a,i,s),this.Br(e,o,a,r).then(c=>(C("RestConnection","Received: ",c),c),c=>{throw ac("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}Lr(e,n,r,i,s){return this.Mr(e,n,r,i,s)}Fr(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+cn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}$r(e,n){const r=Ny[e];return`${this.kr}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,r,i){return new Promise((s,o)=>{const a=new Gg;a.listenOnce(Kg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ts.NO_ERROR:const l=a.getResponseJson();C("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Ts.TIMEOUT:C("Connection",'RPC "'+e+'" timed out'),o(new x(y.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const h=a.getStatus();if(C("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const g=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(S)>=0?S:y.UNKNOWN}(f.status);o(new x(g,f.message))}else o(new x(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(y.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}Ur(e,n,r){const i=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jg(),o=qg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zg({})),this.Fr(a.initMessageHeaders,n,r),xd()||Dd()||kd()||Rd()||Od()||Nd()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");C("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let h=!1,f=!1;const g=new Dy({Ar:S=>{f?C("Connection","Not sending because WebChannel is closed:",S):(h||(C("Connection","Opening WebChannel transport."),l.open(),h=!0),C("Connection","WebChannel sending:",S),l.send(S))},Rr:()=>l.close()}),v=(S,L,T)=>{S.listen(L,O=>{try{T(O)}catch(D){setTimeout(()=>{throw D},0)}})};return v(l,kr.EventType.OPEN,()=>{f||C("Connection","WebChannel transport opened.")}),v(l,kr.EventType.CLOSE,()=>{f||(f=!0,C("Connection","WebChannel transport closed"),g.Cr())}),v(l,kr.EventType.ERROR,S=>{f||(f=!0,ac("Connection","WebChannel transport errored:",S),g.Cr(new x(y.UNAVAILABLE,"The operation could not be completed")))}),v(l,kr.EventType.MESSAGE,S=>{var L;if(!f){const T=S.data[0];z(!!T);const O=T,D=O.error||((L=O[0])===null||L===void 0?void 0:L.error);if(D){C("Connection","WebChannel received error:",D);const V=D.status;let X=function(Oe){const At=ee[Oe];if(At!==void 0)return Gl(At)}(V),Te=D.message;X===void 0&&(X=y.INTERNAL,Te="Unknown error status: "+V+" with message "+D.message),f=!0,g.Cr(new x(X,Te)),l.close()}else C("Connection","WebChannel received:",T),g.Nr(T)}}),v(o,Hg.STAT_EVENT,S=>{S.stat===ic.PROXY?C("Connection","Detected buffering proxy"):S.stat===ic.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.Dr()},0),g}}function As(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return new $m(t,!0)}class ih{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Sn=e,this.timerId=n,this.qr=r,this.Kr=i,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),r=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,i,s,o,a,c){this.Sn=e,this.Xr=r,this.Zr=i,this.eo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new ih(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.no===n&&this.po(r,i)},r=>{e(()=>{const i=new x(y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Io(i)})})}po(e,n){const r=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{r(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{r(()=>this.Io(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ry extends sh{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.O=s}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=qm(this.O,e),r=function(i){if(!("targetChange"in i))return $.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?$.min():s.readTime?qe(s.readTime):$.min()}(e);return this.listener.To(n,r)}Ao(e){const n={};n.database=co(this.O),n.addTarget=function(i,s){let o;const a=s.target;return o=no(a)?{documents:zm(i,a)}:{query:Gm(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Xl(i,s.resumeToken):s.snapshotVersion.compareTo($.min())>0&&(o.readTime=ri(i,s.snapshotVersion.toTimestamp())),o}(this.O,e);const r=Qm(this.O,e);r&&(n.labels=r),this.fo(n)}Ro(e){const n={};n.database=co(this.O),n.removeTarget=e,this.fo(n)}}class Oy extends sh{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=Hm(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.Vo(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=co(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Km(this.O,r))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=r,this.O=i,this.Co=!1}No(){if(this.Co)throw new x(y.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Mr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(y.UNKNOWN,i.toString())})}Lr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Lr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(y.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class Py{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Xe(n),this.Oo=!1):C("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr(o=>{r.enqueueAndForget(async()=>{St(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=P(a);c.Ko.add(4),await fr(c),c.Qo.set("Unknown"),c.Ko.delete(4),await Ui(c)}(this))})}),this.Qo=new Py(r,i)}}async function Ui(t){if(St(t))for(const e of t.Go)await e(!0)}async function fr(t){for(const e of t.Go)await e(!1)}function oh(t,e){const n=P(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),fa(n)?ha(n):hn(n).co()&&la(n,e))}function ah(t,e){const n=P(t),r=hn(n);n.qo.delete(e),r.co()&&ch(n,e),n.qo.size===0&&(r.co()?r.ho():St(n)&&n.Qo.set("Unknown"))}function la(t,e){t.Wo.Z(e.targetId),hn(t).Ao(e)}function ch(t,e){t.Wo.Z(e),hn(t).Ro(e)}function ha(t){t.Wo=new Fm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),hn(t).start(),t.Qo.Mo()}function fa(t){return St(t)&&!hn(t).oo()&&t.qo.size>0}function St(t){return P(t).Ko.size===0}function uh(t){t.Wo=void 0}async function Fy(t){t.qo.forEach((e,n)=>{la(t,e)})}async function Vy(t,e){uh(t),fa(t)?(t.Qo.Bo(e),ha(t)):t.Qo.set("Unknown")}async function Uy(t,e,n){if(t.Qo.set("Online"),e instanceof Yl&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qo.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qo.delete(o),r.Wo.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ii(t,r)}else if(e instanceof Lr?t.Wo.ct(e):e instanceof Ql?t.Wo._t(e):t.Wo.ht(e),!n.isEqual($.min()))try{const r=await rh(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Wo.yt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qo.get(c);l&&i.qo.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.qo.get(a);if(!c)return;i.qo.set(a,c.withResumeToken(pe.EMPTY_BYTE_STRING,c.snapshotVersion)),ch(i,a);const l=new ht(c.target,a,1,c.sequenceNumber);la(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await ii(t,r)}}async function ii(t,e,n){if(!ur(e))throw e;t.Ko.add(1),await fr(t),t.Qo.set("Offline"),n||(n=()=>rh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Ui(t)})}function lh(t,e){return e().catch(n=>ii(t,n,e))}async function $i(t){const e=P(t),n=Ze(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;$y(e);)try{const i=await yy(e.localStore,r);if(i===null){e.Uo.length===0&&n.ho();break}r=i.batchId,By(e,i)}catch(i){await ii(e,i)}hh(e)&&fh(e)}function $y(t){return St(t)&&t.Uo.length<10}function By(t,e){t.Uo.push(e);const n=Ze(t);n.co()&&n.bo&&n.vo(e.mutations)}function hh(t){return St(t)&&!Ze(t).oo()&&t.Uo.length>0}function fh(t){Ze(t).start()}async function jy(t){Ze(t).Do()}async function qy(t){const e=Ze(t);for(const n of t.Uo)e.vo(n.mutations)}async function Ky(t,e,n){const r=t.Uo.shift(),i=oa.from(r,e,n);await lh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $i(t)}async function Hy(t,e){e&&Ze(t).bo&&await async function(n,r){if(i=r.code,km(i)&&i!==y.ABORTED){const s=n.Uo.shift();Ze(n).ao(),await lh(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $i(n)}var i}(t,e),hh(t)&&fh(t)}async function xc(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=St(n);n.Ko.add(3),await fr(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Ui(n)}async function zy(t,e){const n=P(t);e?(n.Ko.delete(2),await Ui(n)):e||(n.Ko.add(2),await fr(n),n.Qo.set("Unknown"))}function hn(t){return t.zo||(t.zo=function(e,n,r){const i=P(e);return i.No(),new Ry(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:Fy.bind(null,t),vr:Vy.bind(null,t),To:Uy.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),fa(t)?ha(t):t.Qo.set("Unknown")):(await t.zo.stop(),uh(t))})),t.zo}function Ze(t){return t.Ho||(t.Ho=function(e,n,r){const i=P(e);return i.No(),new Oy(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:jy.bind(null,t),vr:Hy.bind(null,t),So:qy.bind(null,t),Vo:Ky.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await $i(t)):(await t.Ho.stop(),t.Uo.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new da(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(t,e){if(Xe("AsyncQueue",`${e}: ${t}`),ur(t))return new x(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new Ht(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ht;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.Jo=new ae(N.comparator)}track(e){const n=e.doc.key,r=this.Jo.get(n);r?e.type!==0&&r.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&r.type!==1?this.Jo=this.Jo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jo=this.Jo.remove(n):e.type===1&&r.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):M():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zt{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Zt(e,n,Ht.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.Xo=void 0,this.listeners=[]}}class Wy{constructor(){this.queries=new hr(e=>Fl(e),Oi),this.onlineState="Unknown",this.Zo=new Set}}async function ga(t,e){const n=P(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Gy),i)try{s.Xo=await n.onListen(r)}catch(o){const a=pa(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.tc(n.onlineState),s.Xo&&e.ec(s.Xo)&&ya(n)}async function ma(t,e){const n=P(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Qy(t,e){const n=P(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ec(i)&&(r=!0);o.Xo=i}}r&&ya(n)}function Yy(t,e,n){const r=P(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ya(t){t.Zo.forEach(e=>{e.next()})}class va{constructor(e,n,r){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=r||{}}ec(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uc||!r)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=Zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.key=e}}class ph{constructor(e){this.key=e}}class Xy{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=G(),this.mutatedKeys=G(),this.mc=Vl(e),this.gc=new Ht(this.mc)}get yc(){return this.dc}Ic(e,n){const r=n?n.Ec:new Nc,i=n?n.gc:this.gc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Mr(this.query)&&i.size===this.query.limit?i.last():null,l=ei(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const g=i.get(h),v=ia(this.query,f)?f:null,S=!!g&&this.mutatedKeys.has(g.key),L=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let T=!1;g&&v?g.data.isEqual(v.data)?S!==L&&(r.track({type:3,doc:v}),T=!0):this.Tc(g,v)||(r.track({type:2,doc:v}),T=!0,(c&&this.mc(v,c)>0||l&&this.mc(v,l)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),T=!0):g&&!v&&(r.track({type:1,doc:g}),T=!0,(c||l)&&(a=!0)),T&&(v?(o=o.add(v),s=L?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),Mr(this.query)||ei(this.query))for(;o.size>this.query.limit;){const h=Mr(this.query)?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{gc:o,Ec:r,ks:a,mutatedKeys:s}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const s=e.Ec.Yo();s.sort((l,h)=>function(f,g){const v=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return v(f)-v(g)}(l.type,h.type)||this.mc(l.doc,h.doc)),this.Ac(r);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,s.length!==0||c?{snapshot:new Zt(this.query,e.gc,i,s,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Nc,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=G(),this.gc.forEach(r=>{this.bc(r.key)&&(this.wc=this.wc.add(r.key))});const n=[];return e.forEach(r=>{this.wc.has(r)||n.push(new ph(r))}),this.wc.forEach(r=>{e.has(r)||n.push(new dh(r))}),n}vc(e){this.dc=e.Ks,this.wc=G();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return Zt.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class Jy{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Zy{constructor(e){this.key=e,this.Sc=!1}}class ev{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new hr(a=>Fl(a),Oi),this.Nc=new Map,this.xc=new Set,this.kc=new ae(N.comparator),this.Oc=new Map,this.Mc=new ca,this.$c={},this.Fc=new Map,this.Bc=Jt.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function tv(t,e){const n=hv(t);let r,i;const s=n.Cc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const o=await vy(n.localStore,wt(e));n.isPrimaryClient&&oh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await nv(n,e,r,a==="current")}return i}async function nv(t,e,n,r){t.Uc=(h,f,g)=>async function(v,S,L,T){let O=S.view.Ic(L);O.ks&&(O=await Ac(v.localStore,S.query,!1).then(({documents:X})=>S.view.Ic(X,O)));const D=T&&T.targetChanges.get(S.targetId),V=S.view.applyChanges(O,v.isPrimaryClient,D);return kc(v,S.targetId,V.Pc),V.snapshot}(t,h,f,g);const i=await Ac(t.localStore,e,!0),s=new Xy(e,i.Ks),o=s.Ic(i.documents),a=cr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);kc(t,n,c.Pc);const l=new Jy(e,n,s);return t.Cc.set(e,l),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function rv(t,e){const n=P(t),r=n.Cc.get(e),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(s=>!Oi(s,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ah(n.remoteStore,r.targetId),lo(n,r.targetId)}).catch(lr)):(lo(n,r.targetId),await uo(n.localStore,r.targetId,!0))}async function iv(t,e,n){const r=fv(t);try{const i=await function(s,o){const a=P(s),c=De.now(),l=o.reduce((f,g)=>f.add(g.key),G());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>a.Us.Es(f,l).next(g=>{h=g;const v=[];for(const S of o){const L=xm(S,h.get(S.key));L!=null&&v.push(new ln(S.key,L,Pl(L.value.mapValue),je.exists(!0)))}return a.gs.addMutationBatch(f,c,v,o)})).then(f=>(f.applyToLocalDocumentSet(h),{batchId:f.batchId,changes:h}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.$c[s.currentUser.toKey()];c||(c=new ae(H)),c=c.insert(o,a),s.$c[s.currentUser.toKey()]=c}(r,i.batchId,n),await dr(r,i.changes),await $i(r.remoteStore)}catch(i){const s=pa(i,"Failed to persist write");n.reject(s)}}async function gh(t,e){const n=P(t);try{const r=await gy(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oc.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?z(o.Sc):i.removedDocuments.size>0&&(z(o.Sc),o.Sc=!1))}),await dr(n,r,e)}catch(r){await lr(r)}}function Dc(t,e,n){const r=P(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Cc.forEach((s,o)=>{const a=o.view.tc(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=P(s);a.onlineState=o;let c=!1;a.queries.forEach((l,h)=>{for(const f of h.listeners)f.tc(o)&&(c=!0)}),c&&ya(a)}(r.eventManager,e),i.length&&r.Dc.To(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sv(t,e,n){const r=P(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oc.get(e),s=i&&i.key;if(s){let o=new ae(N.comparator);o=o.insert(s,me.newNoDocument(s,$.min()));const a=G().add(s),c=new Fi($.min(),new Map,new de(H),o,a);await gh(r,c),r.kc=r.kc.remove(s),r.Oc.delete(e),wa(r)}else await uo(r.localStore,e,!1).then(()=>lo(r,e,n)).catch(lr)}async function ov(t,e){const n=P(t),r=e.batch.batchId;try{const i=await py(n.localStore,e);yh(n,r,null),mh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dr(n,i)}catch(i){await lr(i)}}async function av(t,e,n){const r=P(t);try{const i=await function(s,o){const a=P(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.gs.lookupMutationBatch(c,o).next(h=>(z(h!==null),l=h.keys(),a.gs.removeMutationBatch(c,h))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,l))})}(r.localStore,e);yh(r,e,n),mh(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dr(r,i)}catch(i){await lr(i)}}function mh(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function yh(t,e,n){const r=P(t);let i=r.$c[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.$c[r.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Nc.get(e))t.Cc.delete(r),n&&t.Dc.qc(r,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(r=>{t.Mc.containsKey(r)||vh(t,r)})}function vh(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(ah(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),wa(t))}function kc(t,e,n){for(const r of n)r instanceof dh?(t.Mc.addReference(r.key,e),cv(t,r)):r instanceof ph?(C("SyncEngine","Document no longer in limbo: "+r.key),t.Mc.removeReference(r.key,e),t.Mc.containsKey(r.key)||vh(t,r.key)):M()}function cv(t,e){const n=e.key,r=n.path.canonicalString();t.kc.get(n)||t.xc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.xc.add(r),wa(t))}function wa(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new N(Y.fromString(e)),r=t.Bc.next();t.Oc.set(r,new Zy(n)),t.kc=t.kc.insert(n,r),oh(t.remoteStore,new ht(wt(Ri(n.path)),r,2,ea.A))}}async function dr(t,e,n){const r=P(t),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((a,c)=>{o.push(r.Uc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const h=aa.Ss(c.targetId,l);s.push(h)}}))}),await Promise.all(o),r.Dc.To(i),await async function(a,c){const l=P(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(c,f=>w.forEach(f.vs,g=>l.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>w.forEach(f.Vs,g=>l.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!ur(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=l.Ms.get(f),v=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(v);l.Ms=l.Ms.insert(f,S)}}}(r.localStore,s))}async function uv(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await nh(n.localStore,e);n.currentUser=e,function(i,s){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new x(y.CANCELLED,s))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dr(n,r.qs)}}function lv(t,e){const n=P(t),r=n.Oc.get(e);if(r&&r.Sc)return G().add(r.key);{let i=G();const s=n.Nc.get(e);if(!s)return i;for(const o of s){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function hv(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sv.bind(null,e),e.Dc.To=Qy.bind(null,e.eventManager),e.Dc.qc=Yy.bind(null,e.eventManager),e}function fv(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=av.bind(null,e),e}class dv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Vi(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return dy(this.persistence,new hy,e.initialUser,this.O)}jc(e){return new Ay(ua.bi,this.O)}Gc(e){return new Cy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uv.bind(null,this.syncEngine),await zy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wy}createDatastore(e){const n=Vi(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new ky(i));var i;return function(s,o,a,c){return new My(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Dc(this.syncEngine,a,0),o=Cc.Vt()?new Cc:new xy,new Ly(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const h=new ev(r,i,s,o,a,c);return l&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);C("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await fr(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=kl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mv(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vv(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>xc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>xc(e.remoteStore,s)),t.onlineComponents=e}async function vv(t){return t.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await mv(t,new dv)),t.offlineComponents}async function wh(t){return t.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await yv(t,new pv)),t.onlineComponents}function wv(t){return wh(t).then(e=>e.syncEngine)}async function si(t){const e=await wh(t),n=e.eventManager;return n.onListen=tv.bind(null,e.syncEngine),n.onUnlisten=rv.bind(null,e.syncEngine),n}function _v(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new _a({next:f=>{s.enqueueAndForget(()=>ma(i,h));const g=f.docs.has(o);!g&&f.fromCache?c.reject(new x(y.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&a&&a.source==="server"?c.reject(new x(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new va(Ri(o.path),l,{includeMetadataChanges:!0,uc:!0});return ga(i,h)}(await si(t),t.asyncQueue,e,n,r)),r.promise}function Ev(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new _a({next:f=>{s.enqueueAndForget(()=>ma(i,h)),f.fromCache&&a.source==="server"?c.reject(new x(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new va(o,l,{includeMetadataChanges:!0,uc:!0});return ga(i,h)}(await si(t),t.asyncQueue,e,n,r)),r.promise}const Rc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t,e,n){if(!n)throw new x(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bv(t,e,n,r){if(e===!0&&r===!0)throw new x(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Oc(t){if(!N.isDocumentKey(t))throw new x(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(N.isDocumentKey(t))throw new x(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function ke(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ea(t);throw new x(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pc({}),this._settingsFrozen=!1,e instanceof Yt?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new x(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yt(i.options.projectId)}(e))}get app(){if(!this._app)throw new x(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Qg;switch(n.type){case"gapi":const r=n.client;return z(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Jg(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new x(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rc.get(e);n&&(C("ComponentProvider","Removing Datastore"),Rc.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pr(this.firestore,e,this._query)}}class Qe extends pr{constructor(e,n,r){super(e,n,Ri(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new N(e))}withConverter(e){return new Qe(this.firestore,e,this._path)}}function Uv(t,e,...n){if(t=Ke(t),_h("collection","path",e),t instanceof ba){const r=Y.fromString(e,...n);return Mc(r),new Qe(t,null,r)}{if(!(t instanceof be||t instanceof Qe))throw new x(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return Mc(r),new Qe(t.firestore,null,r)}}function Tv(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=kl.R()),_h("doc","path",e),t instanceof ba){const r=Y.fromString(e,...n);return Oc(r),new be(t,null,new N(r))}{if(!(t instanceof be||t instanceof Qe))throw new x(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return Oc(r),new be(t.firestore,t instanceof Qe?t.converter:null,new N(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new ih(this,"async_queue_retry"),this.yu=()=>{const n=As();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=As();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=As();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Be;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!ur(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(r=>{this._u=r,this.wu=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.wu=!1,r))));return this.hu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const i=da.createAndSchedule(this,e,n,r,s=>this.Tu(s));return this.du.push(i),i}pu(){this._u&&M()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Lc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ze extends ba{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Sv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Eh(this),this._firestoreClient.terminate()}}function $v(t=Np()){return Ap(t,"firestore").getImmediate()}function Bi(t){return t._firestoreClient||Eh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eh(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new im(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gv(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(pe.fromBase64String(e))}catch(n){throw new x(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=/^__.*__$/;class Iv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}class bh{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ln(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Th(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Aa{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.O=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.Nu(e),i}xu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.vu(),i}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return oi(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Th(this.Vu)&&Av.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class Cv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=r||Vi(e)}Fu(e,n,r,i=!1){return new Aa({Vu:e,methodName:n,$u:r,path:Ie.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Ia(t){const e=t._freezeSettings(),n=Vi(t._databaseId);return new Cv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sh(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Ca("Data must be an object, but it was:",o,r);const a=Ah(r,o);let c,l;if(s.merge)c=new jn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=ho(e,f,n);if(!o.contains(g))throw new x(y.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ch(h,g)||h.push(g)}c=new jn(h),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new Iv(new Ne(a),c,l)}class qi extends Ta{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qi}}function xv(t,e,n,r){const i=t.Fu(1,e,n);Ca("Data must be an object, but it was:",i,r);const s=[],o=Ne.empty();Tt(r,(c,l)=>{const h=xa(e,c,n);l=Ke(l);const f=i.xu(h);if(l instanceof qi)s.push(h);else{const g=Ki(l,f);g!=null&&(s.push(h),o.set(h,g))}});const a=new jn(s);return new bh(o,a,i.fieldTransforms)}function Nv(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[ho(e,r,n)],c=[i];if(s.length%2!=0)throw new x(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(ho(e,s[g])),c.push(s[g+1]);const l=[],h=Ne.empty();for(let g=a.length-1;g>=0;--g)if(!Ch(l,a[g])){const v=a[g];let S=c[g];S=Ke(S);const L=o.xu(v);if(S instanceof qi)l.push(v);else{const T=Ki(S,L);T!=null&&(l.push(v),h.set(v,T))}}const f=new jn(l);return new bh(h,f,o.fieldTransforms)}function Ki(t,e){if(Ih(t=Ke(t)))return Ca("Unsupported field value:",e,t),Ah(t,e);if(t instanceof Ta)return function(n,r){if(!Th(r.Vu))throw r.Ou(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ki(o,r.ku(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bm(r.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:ri(r.O,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ri(r.O,i)}}if(n instanceof Sa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof en)return{bytesValue:Xl(r.O,n._byteString)};if(n instanceof be){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sa(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ou(`Unsupported field value: ${Ea(n)}`)}(t,e)}function Ah(t,e){const n={};return Rl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tt(t,(r,i)=>{const s=Ki(i,e.Du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ih(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Sa||t instanceof en||t instanceof be||t instanceof Ta)}function Ca(t,e,n){if(!Ih(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ea(n);throw r==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+r)}}function ho(t,e,n){if((e=Ke(e))instanceof ji)return e._internalPath;if(typeof e=="string")return xa(t,e);throw oi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Dv=new RegExp("[~\\*/\\[\\]]");function xa(t,e,n){if(e.search(Dv)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ji(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oi(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new x(y.INVALID_ARGUMENT,a+t+c)}function Ch(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kv extends xh{data(){return super.data()}}function Nh(t,e){return typeof e=="string"?xa(t,e):e instanceof ji?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dh extends xh{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fr extends Dh{data(e={}){return super.data(e)}}class kh{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new In(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fr(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Fr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new In(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Fr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new In(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:Rv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){if(ei(t)&&t.explicitOrderBy.length===0)throw new x(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{convertValue(e,n="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const r={};return Tt(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sa(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ml(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qn(e));default:return null}}convertTimestamp(e){const n=Je(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);z(th(r));const i=new Yt(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||Xe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){t=ke(t,be);const e=ke(t.firestore,ze);return _v(Bi(e),t._key).then(n=>Mh(e,t,n))}class Na extends Ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function jv(t){t=ke(t,pr);const e=ke(t.firestore,ze),n=Bi(e),r=new Na(e);return Rh(t._query),Ev(n,t._query).then(i=>new kh(e,r,t,i))}function qv(t,e,n){t=ke(t,be);const r=ke(t.firestore,ze),i=Oh(t.converter,e,n);return Hi(r,[Sh(Ia(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,je.none())])}function Kv(t,e,n,...r){t=ke(t,be);const i=ke(t.firestore,ze),s=Ia(i);let o;return o=typeof(e=Ke(e))=="string"||e instanceof ji?Nv(s,"updateDoc",t._key,e,n,r):xv(s,"updateDoc",t._key,e),Hi(i,[o.toMutation(t._key,je.exists(!0))])}function Hv(t){return Hi(ke(t.firestore,ze),[new zl(t._key,je.none())])}function zv(t,e){const n=ke(t.firestore,ze),r=Tv(t),i=Oh(t.converter,e);return Hi(n,[Sh(Ia(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,je.exists(!1))]).then(()=>r)}function Gv(t,...e){var n,r,i;t=Ke(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Lc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Lc(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,l,h;if(t instanceof be)l=ke(t.firestore,ze),h=Ri(t._key.path),c={next:f=>{e[o]&&e[o](Mh(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ke(t,pr);l=ke(f.firestore,ze),h=f._query;const g=new Na(l);c={next:v=>{e[o]&&e[o](new kh(l,g,f,v))},error:e[o+1],complete:e[o+2]},Rh(t._query)}return function(f,g,v,S){const L=new _a(S),T=new va(g,L,v);return f.asyncQueue.enqueueAndForget(async()=>ga(await si(f),T)),()=>{L.Jc(),f.asyncQueue.enqueueAndForget(async()=>ma(await si(f),T))}}(Bi(l),h,a,c)}function Hi(t,e){return function(n,r){const i=new Be;return n.asyncQueue.enqueueAndForget(async()=>iv(await wv(n),r,i)),i.promise}(Bi(t),e)}function Mh(t,e,n){const r=n.docs.get(e._key),i=new Na(t);return new Dh(t,i,e._key,r,new In(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){cn=n})(xp),jr(new Mn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new ze(i,new Yg(n.getProvider("auth-internal")),new em(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),qt(sc,"3.4.5",t),qt(sc,"3.4.5","esm2017")})();var Mv="firebase",Pv="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Mv,Pv,"app");export{Bv as F,Gv as H,Kv as Q,Hv as W,Tv as a,$v as d,Vv as i,qv as j,Fv as m,Uv as n,jv as q,zv as z};
