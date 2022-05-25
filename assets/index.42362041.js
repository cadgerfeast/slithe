var Ti=Object.defineProperty,Si=Object.defineProperties;var Ci=Object.getOwnPropertyDescriptors;var Dt=Object.getOwnPropertySymbols;var Li=Object.prototype.hasOwnProperty,Oi=Object.prototype.propertyIsEnumerable;var Ut=(n,e,t)=>e in n?Ti(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ln=(n,e)=>{for(var t in e||(e={}))Li.call(e,t)&&Ut(n,t,e[t]);if(Dt)for(var t of Dt(e))Oi.call(e,t)&&Ut(n,t,e[t]);return n},On=(n,e)=>Si(n,Ci(e));const Mi=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};Mi();var zi=Object.defineProperty,Ri=Object.defineProperties,Pi=Object.getOwnPropertyDescriptors,Kt=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,qi=Object.prototype.propertyIsEnumerable,gt=(n,e,t)=>e in n?zi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ai=(n,e)=>{for(var t in e||(e={}))Hi.call(e,t)&&gt(n,t,e[t]);if(Kt)for(var t of Kt(e))qi.call(e,t)&&gt(n,t,e[t]);return n},Ii=(n,e)=>Ri(n,Pi(e)),Io=(n,e,t)=>(gt(n,typeof e!="symbol"?e+"":e,t),t);const bn=new class{constructor(){Io(this,"theme")}update(e){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";this.theme=e.theme||{key:`vanilla-${t}`}}};function Fo(n){return n.parentNode instanceof ShadowRoot?n.parentNode.host:null}function No(n){n!=null&&n.parentNode&&n.parentNode.removeChild(n)}let Vt;const xn=new Map;function jo(){if(xn.size===0){cancelAnimationFrame(Vt);return}xn.forEach((n,e)=>{const t=e.getBoundingClientRect();if(n.rect&&(n.rect.top!==t.top||n.rect.left!==t.left||n.rect.height!==t.height||n.rect.width!==t.width))for(const o of n.callbacks)o(t);n.rect=t}),Vt=requestAnimationFrame(jo)}function Fi(n,e){let t;return xn.has(n)?(t=xn.get(n).callbacks,t.add(e)):(t=new Set([e]),xn.set(n,{callbacks:t})),jo(),{dispose(){t.delete(e),t.size===0&&xn.delete(n)}}}function Ni(n){let e;const t=Fo(n),o=()=>{n.dataset.title&&(e=document.createElement("sl-tooltip"),e.for=t,e.appendChild(document.createTextNode(n.dataset.title)),t.insertAdjacentElement("afterend",e))},i=()=>{No(e)};return n.addEventListener("mouseenter",o),n.addEventListener("mouseleave",i),{destroy(){n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",i)}}}function N(){}function Ot(n){return n()}function Gt(){return Object.create(null)}function kn(n){n.forEach(Ot)}function Mt(n){return typeof n=="function"}function Ge(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ji(n){return Object.keys(n).length===0}function Bi(n){return n&&Mt(n.destroy)?n.destroy:N}function _e(n,e){n.appendChild(e)}function ce(n,e,t){n.insertBefore(e,t||null)}function He(n){n.parentNode.removeChild(n)}function Di(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function ae(n){return document.createElement(n)}function Bo(n){return document.createTextNode(n)}function An(){return Bo(" ")}function Mn(n,e,t,o){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}function oe(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Wn(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:oe(n,e,t)}function Ui(n){return Array.from(n.childNodes)}function Ki(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Wt(n,e){n.value=e==null?"":e}function Yt(n,e,t,o){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,o?"important":"")}function En(n,e,t){n.classList[t?"add":"remove"](e)}function We(n){const e={};for(const t of n)e[t.name]=t.value;return e}let In;function Pn(n){In=n}function Do(){if(!In)throw new Error("Function called outside component initialization");return In}function zt(n){Do().$$.on_mount.push(n)}function Uo(n){Do().$$.on_destroy.push(n)}const zn=[],Tn=[],Yn=[],Qt=[],Vi=Promise.resolve();let vt=!1;function Gi(){vt||(vt=!0,Vi.then(ge))}function kt(n){Yn.push(n)}const rt=new Set;let Un=0;function ge(){const n=In;do{for(;Un<zn.length;){const e=zn[Un];Un++,Pn(e),Wi(e.$$)}for(Pn(null),zn.length=0,Un=0;Tn.length;)Tn.pop()();for(let e=0;e<Yn.length;e+=1){const t=Yn[e];rt.has(t)||(rt.add(t),t())}Yn.length=0}while(zn.length);for(;Qt.length;)Qt.pop()();vt=!1,rt.clear(),Pn(n)}function Wi(n){if(n.fragment!==null){n.update(),kn(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(kt)}}const Yi=new Set;function Qi(n,e){n&&n.i&&(Yi.delete(n),n.i(e))}function Xi(n,e,t,o){const{fragment:i,on_mount:l,on_destroy:a,after_update:s}=n.$$;i&&i.m(e,t),o||kt(()=>{const c=l.map(Ot).filter(Mt);a?a.push(...c):kn(c),n.$$.on_mount=[]}),s.forEach(kt)}function Ji(n,e){const t=n.$$;t.fragment!==null&&(kn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Zi(n,e){n.$$.dirty[0]===-1&&(zn.push(n),Gi(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ye(n,e,t,o,i,l,a,s=[-1]){const c=In;Pn(n);const r=n.$$={fragment:null,ctx:null,props:l,update:N,not_equal:i,bound:Gt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Gt(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};a&&a(r.root);let b=!1;if(r.ctx=t?t(n,e.props||{},(h,_,...g)=>{const m=g.length?g[0]:_;return r.ctx&&i(r.ctx[h],r.ctx[h]=m)&&(!r.skip_bound&&r.bound[h]&&r.bound[h](m),b&&Zi(n,h)),_}):[],r.update(),b=!0,kn(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const h=Ui(e.target);r.fragment&&r.fragment.l(h),h.forEach(He)}else r.fragment&&r.fragment.c();e.intro&&Qi(n.$$.fragment),Xi(n,e.target,e.anchor,e.customElement),ge()}Pn(c)}let Be;typeof HTMLElement=="function"&&(Be=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:n}=this.$$;this.$$.on_disconnect=n.map(Ot).filter(Mt);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(n,e,t){this[n]=t}disconnectedCallback(){kn(this.$$.on_disconnect)}$destroy(){Ji(this,1),this.$destroy=N}$on(n,e){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(e),()=>{const o=t.indexOf(e);o!==-1&&t.splice(o,1)}}$set(n){this.$$set&&!ji(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}});function el(n){let e,t,o,i;return{c(){e=ae("button"),t=ae("slot"),this.c=N,oe(e,"class",n[1]),oe(e,"type",n[0]),e.disabled=n[3],oe(e,"data-title",n[2])},m(l,a){ce(l,e,a),_e(e,t),o||(i=[Mn(e,"click",n[4]),Bi(Ni.call(null,e))],o=!0)},p(l,[a]){a&2&&oe(e,"class",l[1]),a&1&&oe(e,"type",l[0]),a&8&&(e.disabled=l[3]),a&4&&oe(e,"data-title",l[2])},i:N,o:N,d(l){l&&He(e),o=!1,kn(i)}}}const nl="button",tl={display:"inline-block"};function ol(n,e,t){let{type:o="button"}=e,{size:i="medium"}=e,{title:l=void 0}=e,{disabled:a=!1}=e;function s(c){a&&c.stopPropagation()}return n.$$set=c=>{"type"in c&&t(0,o=c.type),"size"in c&&t(1,i=c.size),"title"in c&&t(2,l=c.title),"disabled"in c&&t(3,a=c.disabled)},[o,i,l,a,s]}class il extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>:host([sl-theme=vanilla-light]){--sl-button-background-color:#EFEFEF;--sl-button-color:#000000;--sl-button-border-color:#7E7E7E;--sl-button-hover-background-color:#E5E5E5;--sl-button-hover-border-color:#4F4F4F;--sl-button-active-background-color:#EFEFEF;--sl-button-active-border-color:#7E7E7E}:host([sl-theme=vanilla-dark]){--sl-button-background-color:#EFEFEF;--sl-button-color:#000000;--sl-button-border-color:#7E7E7E;--sl-button-hover-background-color:#E5E5E5;--sl-button-hover-border-color:#4F4F4F;--sl-button-active-background-color:#EFEFEF;--sl-button-active-border-color:#7E7E7E}button{position:relative;background-color:var(--sl-button-background-color);color:var(--sl-button-color);border:1px solid var(--sl-button-border-color);border-radius:3px;padding:2px 7px;user-select:none}button:hover{background-color:var(--sl-button-hover-background-color);border-color:var(--sl-button-hover-border-color)}button:active{background-color:var(--sl-button-active-background-color);border-color:var(--sl-button-active-border-color)}button:focus-visible{outline:2px solid #000000;outline-offset:-2px;box-shadow:0 0 0 2px #FFFFFF}button[disabled]{pointer-events:none;opacity:0.5}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},ol,el,Ge,{type:0,size:1,title:2,disabled:3},null),e&&(e.target&&ce(e.target,this,e.anchor),e.props&&(this.$set(e.props),ge()))}static get observedAttributes(){return["type","size","title","disabled"]}get type(){return this.$$.ctx[0]}set type(e){this.$$set({type:e}),ge()}get size(){return this.$$.ctx[1]}set size(e){this.$$set({size:e}),ge()}get title(){return this.$$.ctx[2]}set title(e){this.$$set({title:e}),ge()}get disabled(){return this.$$.ctx[3]}set disabled(e){this.$$set({disabled:e}),ge()}}var ll=Object.freeze(Object.defineProperty({__proto__:null,default:il,tag:nl,style:tl},Symbol.toStringTag,{value:"Module"}));function sl(n){let e;return{c(){e=ae("div"),e.innerHTML="<slot></slot>",this.c=N,oe(e,"class","sl-card")},m(t,o){ce(t,e,o)},p:N,i:N,o:N,d(t){t&&He(e)}}}const al="card",rl={};class cl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-card{background-color:var(--sl-card-background-color, #FFFFFF);border-width:var(--sl-card-border-width, 1px);border-style:var(--sl-card-border-style, solid);border-color:var(--sl-card-border-color, #3B3B3B);border-radius:var(--sl-card-border-radius, 2px)}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},null,sl,Ge,{},null),e&&e.target&&ce(e.target,this,e.anchor)}}var ul=Object.freeze(Object.defineProperty({__proto__:null,default:cl,tag:al,style:rl},Symbol.toStringTag,{value:"Module"}));async function fl(n=1){return new Promise(e=>{setTimeout(()=>{e()},n)})}function Xt(n,e,t){const o=n.slice();return o[3]=e[t],o}function Jt(n){let e,t,o,i,l=n[3].message+"",a,s;return{c(){e=ae("li"),t=ae("sl-icon"),o=An(),i=ae("span"),a=Bo(l),s=An(),Wn(t,"name","color-outline-palette"),oe(e,"class","notification")},m(c,r){ce(c,e,r),_e(e,t),_e(e,o),_e(e,i),_e(i,a),_e(e,s)},p(c,r){r&1&&l!==(l=c[3].message+"")&&Ki(a,l)},d(c){c&&He(e)}}}function bl(n){let e,t,o=n[0],i=[];for(let l=0;l<o.length;l+=1)i[l]=Jt(Xt(n,o,l));return{c(){e=ae("div"),t=ae("ul");for(let l=0;l<i.length;l+=1)i[l].c();this.c=N,oe(t,"class","notifications"),oe(e,"class","sl-hud")},m(l,a){ce(l,e,a),_e(e,t);for(let s=0;s<i.length;s+=1)i[s].m(t,null)},p(l,[a]){if(a&1){o=l[0];let s;for(s=0;s<o.length;s+=1){const c=Xt(l,o,s);i[s]?i[s].p(c,a):(i[s]=Jt(c),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},i:N,o:N,d(l){l&&He(e),Di(i,l)}}}const ml="hud",pl={};function dl(n,e,t){let o=[];async function i(a){t(0,o=[...o,a]),await fl(3e3),l(a)}function l(a){t(0,o=o.filter(s=>s!==a))}return[o,i]}class hl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-hud{position:fixed;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}div.sl-hud>ul.notifications{position:fixed;right:15px;bottom:0;list-style:none;margin:0;padding:0}div.sl-hud>ul.notifications>li.notification{pointer-events:all;margin-bottom:15px}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},dl,bl,Ge,{addNotification:1},null),e&&(e.target&&ce(e.target,this,e.anchor),e.props&&(this.$set(e.props),ge()))}static get observedAttributes(){return["addNotification"]}get addNotification(){return this.$$.ctx[1]}}var gl=Object.freeze(Object.defineProperty({__proto__:null,default:hl,tag:ml,style:pl},Symbol.toStringTag,{value:"Module"}));const vl=new DOMParser;async function kl(n){const e=await fetch(n);if(e.ok&&e.headers.get("content-type")==="image/svg+xml")return vl.parseFromString(await e.text(),"image/svg+xml").documentElement;throw new Error(`Couldn't fetch "${n}" SVG file.`)}function _l(n){let e;return{c(){e=ae("i"),this.c=N,oe(e,"class","sl-icon"),oe(e,"name",n[0]),Yt(e,"font-size",`${n[1]}px`,!1)},m(t,o){ce(t,e,o),n[4](e)},p(t,[o]){o&1&&oe(e,"name",t[0]),o&2&&Yt(e,"font-size",`${t[1]}px`,!1)},i:N,o:N,d(t){t&&He(e),n[4](null)}}}const wl="icon",yl={display:"inline-flex","align-items":"center"};function $l(n,e,t){let{src:o=void 0}=e,{name:i=void 0}=e,{size:l=16}=e,a,s;zt(async()=>{o&&(s=await kl(o),l&&(s.style.display="inline-block",s.style["vertical-align"]="bottom",s.style.height=`${l}px`,s.style.width=`${l}px`),a&&a.appendChild(s))});function c(r){Tn[r?"unshift":"push"](()=>{a=r,t(2,a)})}return n.$$set=r=>{"src"in r&&t(3,o=r.src),"name"in r&&t(0,i=r.name),"size"in r&&t(1,l=r.size)},[i,l,a,o,c]}class xl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>i.sl-icon{display:inline-flex}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},$l,_l,Ge,{src:3,name:0,size:1},null),e&&(e.target&&ce(e.target,this,e.anchor),e.props&&(this.$set(e.props),ge()))}static get observedAttributes(){return["src","name","size"]}get src(){return this.$$.ctx[3]}set src(e){this.$$set({src:e}),ge()}get name(){return this.$$.ctx[0]}set name(e){this.$$set({name:e}),ge()}get size(){return this.$$.ctx[1]}set size(e){this.$$set({size:e}),ge()}}var El=Object.freeze(Object.defineProperty({__proto__:null,default:xl,tag:wl,style:yl},Symbol.toStringTag,{value:"Module"}));function Tl(n){let e,t,o,i,l,a,s,c,r;return{c(){e=ae("div"),t=ae("div"),t.innerHTML='<slot name="pre"></slot>',o=An(),i=ae("div"),l=ae("input"),a=An(),s=ae("div"),s.innerHTML='<slot name="placeholder"></slot>',this.c=N,oe(t,"class","input-pre"),oe(s,"class","placeholder"),En(s,"visible",n[0].length===0),oe(i,"class","input-container"),oe(e,"class","sl-input-text"),En(e,"focused",n[2])},m(b,h){ce(b,e,h),_e(e,t),_e(e,o),_e(e,i),_e(i,l),n[7](l),Wt(l,n[0]),_e(i,a),_e(i,s),c||(r=[Mn(l,"input",n[8]),Mn(l,"focus",n[3]),Mn(l,"blur",n[4]),Mn(e,"mousedown",n[5])],c=!0)},p(b,[h]){h&1&&l.value!==b[0]&&Wt(l,b[0]),h&1&&En(s,"visible",b[0].length===0),h&4&&En(e,"focused",b[2])},i:N,o:N,d(b){b&&He(e),n[7](null),c=!1,kn(r)}}}const Sl="input-text",Cl={};function Ll(n,e,t){let{value:o=""}=e,i,l=!1;function a(){t(2,l=!0)}function s(){t(2,l=!1)}function c(_){_.target!==i&&(_.preventDefault(),i.focus())}function r(){i.focus()}function b(_){Tn[_?"unshift":"push"](()=>{i=_,t(1,i)})}function h(){o=this.value,t(0,o)}return n.$$set=_=>{"value"in _&&t(0,o=_.value)},[o,i,l,a,s,c,r,b,h]}class Ol extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-input-text{display:flex;flex-direction:row;align-items:stretch;border-width:var(--sl-input-text-border-width, 1px);border-style:var(--sl-input-text-border-style, solid);border-color:var(--sl-input-text-border-color, #3B3B3B);border-radius:var(--sl-input-text-border-radius, 2px);padding-top:0px;padding-right:var(--sl-input-text-padding-right, 2px);padding-bottom:0px;padding-left:var(--sl-input-text-padding-left, 2px);font-size:var(--sl-input-text-font-size, 13px);cursor:text}div.sl-input-text>div.input-pre{display:inline-flex;flex-direction:row;align-self:center;color:var(--sl-input-text-pre-color, #777777)}div.sl-input-text>div.input-container{position:relative;z-index:0;background-color:transparent}div.sl-input-text>div.input-container>input{font-family:var(--sl-input-text-font-family, Arial);box-sizing:border-box;height:100%;background-color:transparent;border:none;padding-top:var(--sl-input-text-padding-top, 1px);padding-bottom:var(--sl-input-text-padding-bottom, 1px)}div.sl-input-text>div.input-container>input:focus{outline:none}div.sl-input-text>div.input-container>div.placeholder{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;display:flex;flex-direction:row;align-items:center;visibility:hidden;color:var(--sl-input-text-placeholder-color, #777777);font-size:var(--sl-input-text-placeholder-font-size, 13px);margin-left:2px}div.sl-input-text>div.input-container>div.placeholder.visible{visibility:visible}div.sl-input-text.focused{border-color:var(--sl-input-text-focused-border-color, #111111)}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},Ll,Tl,Ge,{value:0,focus:6},null),e&&(e.target&&ce(e.target,this,e.anchor),e.props&&(this.$set(e.props),ge()))}static get observedAttributes(){return["value","focus"]}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),ge()}get focus(){return this.$$.ctx[6]}}var Ml=Object.freeze(Object.defineProperty({__proto__:null,default:Ol,tag:Sl,style:Cl},Symbol.toStringTag,{value:"Module"}));function zl(n){let e;return{c(){e=ae("kbd"),e.innerHTML="<slot></slot>",this.c=N,oe(e,"class","sl-kbd")},m(t,o){ce(t,e,o)},p:N,i:N,o:N,d(t){t&&He(e)}}}const Rl="kbd",Pl={display:"inline-flex"};class Hl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>:host([sl-theme=vanilla-light]){--sl-kbd-background-color:#EFEFEF;--sl-kbd-color:#666666;--sl-kbd-border-color:#DDDDDD}:host([sl-theme=vanilla-dark]){--sl-kbd-background-color:#EFEFEF;--sl-kbd-color:#666666;--sl-kbd-border-color:#DDDDDD}kbd{font-family:monospace;font-size:12px;border-radius:2px;background-color:var(--sl-kbd-background-color);color:var(--sl-kbd-color);border:1px solid var(--sl-kbd-border-color);padding:1px 2px;text-transform:uppercase}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},null,zl,Ge,{},null),e&&e.target&&ce(e.target,this,e.anchor)}}var ql=Object.freeze(Object.defineProperty({__proto__:null,default:Hl,tag:Rl,style:Pl},Symbol.toStringTag,{value:"Module"}));function Al(n){let e;return{c(){e=ae("div"),e.innerHTML="<slot></slot>",this.c=N,oe(e,"class","sl-rel")},m(t,o){ce(t,e,o),n[2](e)},p:N,i:N,o:N,d(t){t&&He(e),n[2](null)}}}const Il="rel",Fl={};function Nl(n,e,t){let{for:o=void 0}=e,i,l,a;function s(r){l.style.top=`${r.top}px`,l.style.left=`${r.left}px`,l.style.height=`${r.height}px`,l.style.width=`${r.width}px`}zt(()=>{l=Fo(i),t(1,o=o||l.previousElementSibling),l.style.position="fixed",l.style.pointerEvents="none",l.style.zIndex="2",a=Fi(o,s),s(o.getBoundingClientRect())}),Uo(()=>{a.dispose()});function c(r){Tn[r?"unshift":"push"](()=>{i=r,t(0,i)})}return n.$$set=r=>{"for"in r&&t(1,o=r.for)},[i,o,c]}class jl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-rel>*{pointer-events:all}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},Nl,Al,Ge,{for:1},null),e&&(e.target&&ce(e.target,this,e.anchor),e.props&&(this.$set(e.props),ge()))}static get observedAttributes(){return["for"]}get for(){return this.$$.ctx[1]}set for(e){this.$$set({for:e}),ge()}}var Bl=Object.freeze(Object.defineProperty({__proto__:null,default:jl,tag:Il,style:Fl},Symbol.toStringTag,{value:"Module"}));function Dl(n){let e,t;return{c(){e=ae("sl-rel"),t=ae("span"),t.innerHTML="<slot></slot>",this.c=N,oe(t,"class","text-content"),Wn(e,"class","sl-tooltip"),Wn(e,"for",n[0])},m(o,i){ce(o,e,i),_e(e,t)},p(o,[i]){i&1&&Wn(e,"for",o[0])},i:N,o:N,d(o){o&&He(e)}}}const Ul="tooltip",Kl={};function Vl(n,e,t){let{for:o=void 0}=e;return n.$$set=i=>{"for"in i&&t(0,o=i.for)},[o]}class Gl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>sl-rel.sl-tooltip>span.text-content{position:absolute;top:100%}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},Vl,Dl,Ge,{for:0},null),e&&(e.target&&ce(e.target,this,e.anchor),e.props&&(this.$set(e.props),ge()))}static get observedAttributes(){return["for"]}get for(){return this.$$.ctx[0]}set for(e){this.$$set({for:e}),ge()}}var Wl=Object.freeze(Object.defineProperty({__proto__:null,default:Gl,tag:Ul,style:Kl},Symbol.toStringTag,{value:"Module"}));function Yl(n){let e;return{c(){e=ae("ul"),e.innerHTML="<slot></slot>",this.c=N,oe(e,"class","sl-tree")},m(t,o){ce(t,e,o)},p:N,i:N,o:N,d(t){t&&He(e)}}}const Ql="tree",Xl={};class Jl extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>ul.sl-tree{list-style:none;margin:0;padding-left:10px}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},null,Yl,Ge,{},null),e&&e.target&&ce(e.target,this,e.anchor)}}var Zl=Object.freeze(Object.defineProperty({__proto__:null,default:Jl,tag:Ql,style:Xl},Symbol.toStringTag,{value:"Module"}));function es(n){let e,t,o,i;return{c(){e=ae("li"),t=ae("slot"),o=An(),i=ae("sl-tree"),i.innerHTML='<slot name="subtree"></slot>',this.c=N,En(i,"visible",n[1].subtree),oe(e,"class","sl-tree-item")},m(l,a){ce(l,e,a),_e(e,t),_e(e,o),_e(e,i),n[2](e)},p(l,[a]){a&2&&En(i,"visible",l[1].subtree)},i:N,o:N,d(l){l&&He(e),n[2](null)}}}const ns="tree-item",ts={};function os(n,e,t){let o,i={},l={};zt(()=>{o.querySelectorAll("slot").forEach(s=>{const c=s.name||"default";t(1,i[c]=!!s.assignedNodes().length,i),l[c]=()=>{i[c]!==!!s.assignedNodes().length&&t(1,i=Ii(Ai({},i),{[c]:!!s.assignedNodes().length}))},s.addEventListener("slotchange",l[c])})}),Uo(()=>{for(const s in i)o.querySelector(`slot${s==="default"?":not([name])":`[name="${s}"]`}`).removeEventListener("slotchange",l[s])});function a(s){Tn[s?"unshift":"push"](()=>{o=s,t(0,o)})}return[o,i,a]}class is extends Be{constructor(e){super(),this.shadowRoot.innerHTML="<style>li.sl-tree-item{display:block}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},os,es,Ge,{},null),e&&e.target&&ce(e.target,this,e.anchor)}}var ls=Object.freeze(Object.defineProperty({__proto__:null,default:is,tag:ns,style:ts},Symbol.toStringTag,{value:"Module"})),ss=`:root {
  --va-font-family: Verdana;
  --va-font-family-mono: monospace;
}

*[sl-theme=vanilla-light] {
  --sl-font-family: var(--va-font-family);
  --sl-font-family-mono: var(--va-font-family-mono);
  --sl-background-color: var(--va-white);
  --sl-background-color-subtle: var(--va-aqua-haze);
  --sl-text-color: var(--va-tundora);
  --sl-text-color-subtle: var(--va-shuttle-gray);
  --sl-divider-color: var(--va-silver);
  --sl-white: var(--va-white);
  --sl-primary: var(--va-vermilion);
}

*[sl-theme=vanilla-dark] {
  --sl-font-family: var(--va-font-family);
  --sl-font-family-mono: var(--va-font-family-mono);
  --sl-background-color: var(--va-tundora);
  --sl-background-color-subtle: var(--va-brilliant-gray);
  --sl-text-color: var(--va-white);
  --sl-text-color-subtle: var(--va-aqua-haze);
  --sl-divider-color: var(--va-dark-charcoal);
  --sl-white: var(--va-white);
  --sl-primary: var(--va-vermilion);
}`;const as=[ll,ul,gl,El,Ml,ql,Bl,Wl,Zl,ls],_t=new Set;function rs(n){const e=document.createElement("style");e.innerHTML=ss,document.head.insertAdjacentElement("beforeend",e),bn.update(n);for(const t of as){const o=class extends t.default{constructor(){var i,l;super(),Io(this,"_slithe"),this._slithe={el:this,tag:t.tag},(l=(i=bn.theme)==null?void 0:i.components)!=null&&l[t.tag]&&(this._slithe.style=document.createElement("style"),this._slithe.style.innerHTML=bn.theme.components[t.tag],this._slithe.el.shadowRoot.appendChild(this._slithe.style))}setAttribute(i,l){super.setAttribute(i,l)}addEventListener(i,l,a){super.addEventListener(i,(...s)=>{this._slithe.el.disabled||l(...s)},a)}$destroy(){super.$destroy()}updateTheme(i){var l;this.setAttribute("sl-theme",i.key),this._slithe.style&&(No(this._slithe.style),delete this._slithe.style),(l=i.components)!=null&&l[this._slithe.tag]&&(this._slithe.style=document.createElement("style"),this._slithe.style.innerHTML=bn.theme.components[this._slithe.tag],this._slithe.el.shadowRoot.appendChild(this._slithe.style))}connectedCallback(){if(super.connectedCallback(),bn.theme&&this.setAttribute("sl-theme",bn.theme.key),t.style)for(const i in t.style)this._slithe.el.style[i]=t.style[i];_t.add(this)}disconnectedCallback(){super.disconnectedCallback(),this.$destroy(),_t.delete(this)}};customElements.define(`sl-${t.tag}`,o)}}function Zt(n){bn.update({theme:n});for(const e of _t)e.updateTheme(n)}let ct;function cs(){const n=document.createElement("sl-hud");return document.body.appendChild(n),n}function Ko(n){ct||(ct=cs()),ct.addNotification(n)}function ie(){}function dn(n,e){for(const t in e)n[t]=e[t];return n}function Vo(n){return n()}function eo(){return Object.create(null)}function Qe(n){n.forEach(Vo)}function Rt(n){return typeof n=="function"}function De(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Kn;function Jn(n,e){return Kn||(Kn=document.createElement("a")),Kn.href=e,n===Kn.href}function us(n){return Object.keys(n).length===0}function Pt(n,...e){if(n==null)return ie;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Pe(n){let e;return Pt(n,t=>e=t)(),e}function Oe(n,e,t){n.$$.on_destroy.push(Pt(e,t))}function tt(n,e,t,o){if(n){const i=Go(n,e,t,o);return n[0](i)}}function Go(n,e,t,o){return n[1]&&o?dn(t.ctx.slice(),n[1](o(e))):t.ctx}function ot(n,e,t,o){if(n[2]&&o){const i=n[2](o(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],a=Math.max(e.dirty.length,i.length);for(let s=0;s<a;s+=1)l[s]=e.dirty[s]|i[s];return l}return e.dirty|i}return e.dirty}function it(n,e,t,o,i,l){if(i){const a=Go(e,t,o,l);n.p(a,i)}}function lt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let o=0;o<t;o++)e[o]=-1;return e}return-1}function Zn(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function et(n,e){const t={};e=new Set(e);for(const o in n)!e.has(o)&&o[0]!=="$"&&(t[o]=n[o]);return t}function no(n,e,t){return n.set(t),e}function st(n){return n&&Rt(n.destroy)?n.destroy:ie}function $(n,e){n.appendChild(e)}function f(n,e,t){n.insertBefore(e,t||null)}function u(n){n.parentNode.removeChild(n)}function cn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function d(n){return document.createElement(n)}function ne(n){return document.createTextNode(n)}function y(){return ne(" ")}function at(){return ne("")}function ee(n,e,t,o){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}function T(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function to(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const o in e)e[o]==null?n.removeAttribute(o):o==="style"?n.style.cssText=e[o]:o==="__value"?n.value=n[o]=e[o]:t[o]&&t[o].set?n[o]=e[o]:T(n,o,e[o])}function V(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:T(n,e,t)}function fs(n){return Array.from(n.childNodes)}function Ke(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function wt(n,e,t,o){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,o?"important":"")}function X(n,e,t){n.classList[t?"add":"remove"](e)}function bs(n,e,t=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,t,!1,e),o}let Fn;function Hn(n){Fn=n}function Nn(){if(!Fn)throw new Error("Function called outside component initialization");return Fn}function Ht(n){Nn().$$.on_mount.push(n)}function Wo(n){Nn().$$.on_destroy.push(n)}function ms(){const n=Nn();return(e,t)=>{const o=n.$$.callbacks[e];if(o){const i=bs(e,t);o.slice().forEach(l=>{l.call(n,i)})}}}function qn(n,e){Nn().$$.context.set(n,e)}function en(n){return Nn().$$.context.get(n)}const Rn=[],mn=[],Qn=[],oo=[],Yo=Promise.resolve();let yt=!1;function Qo(){yt||(yt=!0,Yo.then(Jo))}function Xo(){return Qo(),Yo}function $t(n){Qn.push(n)}const ut=new Set;let Vn=0;function Jo(){const n=Fn;do{for(;Vn<Rn.length;){const e=Rn[Vn];Vn++,Hn(e),ps(e.$$)}for(Hn(null),Rn.length=0,Vn=0;mn.length;)mn.pop()();for(let e=0;e<Qn.length;e+=1){const t=Qn[e];ut.has(t)||(ut.add(t),t())}Qn.length=0}while(Rn.length);for(;oo.length;)oo.pop()();yt=!1,ut.clear(),Hn(n)}function ps(n){if(n.fragment!==null){n.update(),Qe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach($t)}}const Xn=new Set;let pn;function hn(){pn={r:0,c:[],p:pn}}function gn(){pn.r||Qe(pn.c),pn=pn.p}function P(n,e){n&&n.i&&(Xn.delete(n),n.i(e))}function A(n,e,t,o){if(n&&n.o){if(Xn.has(n))return;Xn.add(n),pn.c.push(()=>{Xn.delete(n),o&&(t&&n.d(1),o())}),n.o(e)}}const ds=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Zo(n,e){const t={},o={},i={$$scope:1};let l=n.length;for(;l--;){const a=n[l],s=e[l];if(s){for(const c in a)c in s||(o[c]=1);for(const c in s)i[c]||(t[c]=s[c],i[c]=1);n[l]=s}else for(const c in a)i[c]=1}for(const a in o)a in t||(t[a]=void 0);return t}function io(n){return typeof n=="object"&&n!==null?n:{}}function Q(n){n&&n.c()}function G(n,e,t,o){const{fragment:i,on_mount:l,on_destroy:a,after_update:s}=n.$$;i&&i.m(e,t),o||$t(()=>{const c=l.map(Vo).filter(Rt);a?a.push(...c):Qe(c),n.$$.on_mount=[]}),s.forEach($t)}function W(n,e){const t=n.$$;t.fragment!==null&&(Qe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function hs(n,e){n.$$.dirty[0]===-1&&(Rn.push(n),Qo(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function nn(n,e,t,o,i,l,a,s=[-1]){const c=Fn;Hn(n);const r=n.$$={fragment:null,ctx:null,props:l,update:ie,not_equal:i,bound:eo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:eo(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};a&&a(r.root);let b=!1;if(r.ctx=t?t(n,e.props||{},(h,_,...g)=>{const m=g.length?g[0]:_;return r.ctx&&i(r.ctx[h],r.ctx[h]=m)&&(!r.skip_bound&&r.bound[h]&&r.bound[h](m),b&&hs(n,h)),_}):[],r.update(),b=!0,Qe(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const h=fs(e.target);r.fragment&&r.fragment.l(h),h.forEach(u)}else r.fragment&&r.fragment.c();e.intro&&P(n.$$.fragment),G(n,e.target,e.anchor,e.customElement),Jo()}Hn(c)}class tn{$destroy(){W(this,1),this.$destroy=ie}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const i=o.indexOf(t);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!us(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const yn=[];function ei(n,e){return{subscribe:Me(n,e).subscribe}}function Me(n,e=ie){let t;const o=new Set;function i(s){if(De(n,s)&&(n=s,t)){const c=!yn.length;for(const r of o)r[1](),yn.push(r,n);if(c){for(let r=0;r<yn.length;r+=2)yn[r][0](yn[r+1]);yn.length=0}}}function l(s){i(s(n))}function a(s,c=ie){const r=[s,c];return o.add(r),o.size===1&&(t=e(i)||ie),s(n),()=>{o.delete(r),o.size===0&&(t(),t=null)}}return{set:i,update:l,subscribe:a}}function gs(n,e,t){const o=!Array.isArray(n),i=o?[n]:n,l=e.length<2;return ei(t,a=>{let s=!1;const c=[];let r=0,b=ie;const h=()=>{if(r)return;b();const g=e(o?c[0]:c,a);l?a(g):b=Rt(g)?g:ie},_=i.map((g,m)=>Pt(g,w=>{c[m]=w,r&=~(1<<m),s&&h()},()=>{r|=1<<m}));return s=!0,h(),function(){Qe(_),b()}})}var vs=`/* Host */
:host([sl-theme=primer-light]) {
  /* Override */
  --sl-button-background-color: var(--pr-aqua-haze);
  --sl-button-color: var(--pr-shark);
  --sl-button-border-color: rgba(27,31,36,0.15);
  --sl-button-hover-background-color: var(--pr-athens-gray);
  --sl-button-hover-border-color: rgba(27,31,36,0.15);
  --sl-button-active-background-color: var(--pr-clewd);
  --sl-button-active-border-color: rgba(27,31,36,0.15);
  /* Custom */
  --sl-button-outline-color: var(--pr-science-blue);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
}
:host([sl-theme=primer-dark]) {
  /* Override */
  --sl-button-border-radius: 6px;
  --sl-button-background-color: var(--pr-sibuya-game-reserve);
  --sl-button-color: var(--pr-karpa-kora);
  --sl-button-border-color: rgba(205,217,229,0.1);
  --sl-button-hover-background-color: var(--pr-dark-sea);
  --sl-button-hover-border-color: var(--pr-slate-gray);
  --sl-button-active-background-color: var(--pr-nothing-but-life);
  --sl-button-active-border-color: var(--pr-nevada);
  /* Custom */
  --sl-button-outline-color: var(--pr-cornflower-blue);
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;;
}
/* Primary */
:host([sl-theme=primer-light][primary]) {
  --sl-button-background-color: var(--pr-science-blue);
  --sl-button-color: var(--pr-white);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-border-color: rgba(205,217,229,0.1);
  --sl-button-hover-background-color: var(--pr-true-blue);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-active-background-color: var(--pr-endeavour);
  --sl-button-active-color: var(--pr-white);
  --sl-button-focus-box-shadow: inset 0 0 0 3px var(--sl-white);
}
:host([sl-theme=primer-dark][primary]) {
  --sl-button-background-color: var(--pr-endeavour);
  --sl-button-color: var(--pr-white);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-border-color: rgba(240,246,252,0.1);
  --sl-button-hover-background-color: var(--pr-true-blue);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-active-background-color: var(--pr-endeavour);
  --sl-button-active-color: var(--pr-white);
  --sl-button-focus-box-shadow: inset 0 0 0 3px var(--pr-white);
}
/* Outline */
:host([sl-theme=primer-light][outline]) {
  --sl-button-color: var(--pr-science-blue);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  --sl-button-hover-background-color: var(--pr-science-blue);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-hover-border-color: rgba(27,31,36,0.15);
  --sl-button-hover-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-active-background-color: var(--pr-true-blue);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: rgba(27,31,36,0.15);
  --sl-button-active-box-shadow: inset 0 1px 0 rgba(0,33,85,0.2);
}
:host([sl-theme=primer-dark][outline]) {
  --sl-button-color: var(--pr-cornflower-blue);
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: var(--pr-outer-space);
  --sl-button-hover-color: var(--pr-cornflower-blue);
  --sl-button-hover-border-color: rgba(240,246,252,0.1);
  --sl-button-hover-box-shadow: 0 1px 0 rgba(1,4,9,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-active-background-color: var(--pr-endeavour);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: rgba(240,246,252,0.1);
  --sl-button-active-box-shadow: 0 0 transparent;
}
/* Danger */
:host([sl-theme=primer-light][danger]) {
  --sl-button-color: var(--pr-cardinal);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  --sl-button-hover-background-color: var(--pr-shiraz);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-hover-border-color: rgba(27,31,36,0.15);
  --sl-button-hover-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-active-background-color: var(--pr-miyamoto-red);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: rgba(27,31,36,0.15);
  --sl-button-active-box-shadow: inset 0 1px 0 rgba(76,0,20,0.2);
}
:host([sl-theme=primer-dark][danger]) {
  --sl-button-color: var(--pr-sunset-orange);
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: var(--pr-punch);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-hover-border-color: var(--pr-sunset-orange);
  --sl-button-hover-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-active-background-color: var(--pr-tall-poppy);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: var(--pr-salmon);
  --sl-button-active-box-shadow: 0 0 transparent;
}
/* Borderless */
:host([sl-theme=primer-light][borderless]) {
  --sl-button-background-color: transparent;
  --sl-button-color: var(--pr-science-blue);
  --sl-button-border-color: transparent;
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: rgb(243, 244, 246);
  --sl-button-hover-color: var(--pr-science-blue);
  --sl-button-hover-border-color: transparent;
  --sl-button-active-background-color: rgb(238, 239, 242);
  --sl-button-active-color: var(--pr-science-blue);
  --sl-button-active-border-color: transparent;
}
:host([sl-theme=primer-dark][borderless]) {
  --sl-button-background-color: transparent;
  --sl-button-color: var(--pr-cornflower-blue);
  --sl-button-border-color: transparent;
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: rgb(68, 76, 86);
  --sl-button-hover-color: var(--pr-cornflower-blue);
  --sl-button-hover-border-color: transparent;
  --sl-button-active-background-color: rgb(45, 51, 59);
  --sl-button-active-color: var(--pr-cornflower-blue);
  --sl-button-active-border-color: transparent;
}
/* Button */
button {
  font-family: var(--pr-font-family);
  font-size: 14px;
  font-weight: 500;
  padding: 5px 16px;
  border-radius: 6px;
  box-shadow: var(--sl-button-box-shadow);
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
}
button.small {
  font-size: 12px;
  padding: 3px 12px;
}
button.large {
  font-size: 16px;
  padding: 9px 20px;
}
button:hover {
  color: var(--sl-button-hover-color, unset);
  border-color: var(--sl-button-hover-border-color, unset);
  box-shadow: var(--sl-button-hover-box-shadow, unset);
}
button:active {
  color: var(--sl-button-active-color, unset);
  border-color: var(--sl-button-active-border-color, unset);
  box-shadow: var(--sl-button-active-box-shadow, unset);
}
button:focus-visible {
  outline-color: var(--sl-button-outline-color);
  box-shadow: var(--sl-button-focus-box-shadow, unset);
}
`,ks=`*[sl-theme=primer-light] {
  --sl-card-border-color: var(--pr-regent-gray);
  --sl-card-border-radius: 4px;
}
`,_s=`div.sl-input-text {
  --sl-input-text-font-family: 'Fira Sans';
  --sl-input-text-border-color: var(--pr-regent-gray);
  --sl-input-text-border-radius: 16px;
  --sl-input-text-padding-top: 4px;
  --sl-input-text-padding-right: 4px;
  --sl-input-text-padding-bottom: 4px;
  --sl-input-text-padding-left: 4px;
  --sl-input-text-font-size: 14px;
  --sl-input-text-pre-color: var(--pr-pale-sky);
  --sl-input-text-placeholder-color: var(--pr-pale-sky);
  --sl-input-text-placeholder-font-size: 14px;
  --sl-input-text-focused-border-color: var(--pr-tundora);
}
`,ws=`i.sl-icon[name] {
  display: inline-block;
  transform: translate(0, 0);
  text-rendering: auto;
  font-family: 'Eva Icons';
  font-style: normal;
  vertical-align: middle;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
i.sl-icon[name="activity"]::before {
  content: "\\ea01";
}
i.sl-icon[name="activity-outline"]::before {
  content: "\\ea02";
}
i.sl-icon[name="alert-circle"]::before {
  content: "\\ea03";
}
i.sl-icon[name="alert-circle-outline"]::before {
  content: "\\ea04";
}
i.sl-icon[name="alert-triangle"]::before {
  content: "\\ea05";
}
i.sl-icon[name="alert-triangle-outline"]::before {
  content: "\\ea06";
}
i.sl-icon[name="archive"]::before {
  content: "\\ea07";
}
i.sl-icon[name="archive-outline"]::before {
  content: "\\ea08";
}
i.sl-icon[name="arrow-back"]::before {
  content: "\\ea09";
}
i.sl-icon[name="arrow-back-outline"]::before {
  content: "\\ea0a";
}
i.sl-icon[name="arrow-circle-down"]::before {
  content: "\\ea0b";
}
i.sl-icon[name="arrow-circle-down-outline"]::before {
  content: "\\ea0c";
}
i.sl-icon[name="arrow-circle-left"]::before {
  content: "\\ea0d";
}
i.sl-icon[name="arrow-circle-left-outline"]::before {
  content: "\\ea0e";
}
i.sl-icon[name="arrow-circle-right"]::before {
  content: "\\ea0f";
}
i.sl-icon[name="arrow-circle-right-outline"]::before {
  content: "\\ea10";
}
i.sl-icon[name="arrow-circle-up"]::before {
  content: "\\ea11";
}
i.sl-icon[name="arrow-circle-up-outline"]::before {
  content: "\\ea12";
}
i.sl-icon[name="arrow-down"]::before {
  content: "\\ea13";
}
i.sl-icon[name="arrow-down-outline"]::before {
  content: "\\ea14";
}
i.sl-icon[name="arrow-downward"]::before {
  content: "\\ea15";
}
i.sl-icon[name="arrow-downward-outline"]::before {
  content: "\\ea16";
}
i.sl-icon[name="arrow-forward"]::before {
  content: "\\ea17";
}
i.sl-icon[name="arrow-forward-outline"]::before {
  content: "\\ea18";
}
i.sl-icon[name="arrow-ios-back"]::before {
  content: "\\ea19";
}
i.sl-icon[name="arrow-ios-back-outline"]::before {
  content: "\\ea1a";
}
i.sl-icon[name="arrow-ios-downward"]::before {
  content: "\\ea1b";
}
i.sl-icon[name="arrow-ios-downward-outline"]::before {
  content: "\\ea1c";
}
i.sl-icon[name="arrow-ios-forward"]::before {
  content: "\\ea1d";
}
i.sl-icon[name="arrow-ios-forward-outline"]::before {
  content: "\\ea1e";
}
i.sl-icon[name="arrow-ios-upward"]::before {
  content: "\\ea1f";
}
i.sl-icon[name="arrow-ios-upward-outline"]::before {
  content: "\\ea20";
}
i.sl-icon[name="arrow-left"]::before {
  content: "\\ea21";
}
i.sl-icon[name="arrow-left-outline"]::before {
  content: "\\ea22";
}
i.sl-icon[name="arrow-right"]::before {
  content: "\\ea23";
}
i.sl-icon[name="arrow-right-outline"]::before {
  content: "\\ea24";
}
i.sl-icon[name="arrow-up"]::before {
  content: "\\ea25";
}
i.sl-icon[name="arrow-up-outline"]::before {
  content: "\\ea26";
}
i.sl-icon[name="arrow-upward"]::before {
  content: "\\ea27";
}
i.sl-icon[name="arrow-upward-outline"]::before {
  content: "\\ea28";
}
i.sl-icon[name="arrowhead-down"]::before {
  content: "\\ea29";
}
i.sl-icon[name="arrowhead-down-outline"]::before {
  content: "\\ea2a";
}
i.sl-icon[name="arrowhead-left"]::before {
  content: "\\ea2b";
}
i.sl-icon[name="arrowhead-left-outline"]::before {
  content: "\\ea2c";
}
i.sl-icon[name="arrowhead-right"]::before {
  content: "\\ea2d";
}
i.sl-icon[name="arrowhead-right-outline"]::before {
  content: "\\ea2e";
}
i.sl-icon[name="arrowhead-up"]::before {
  content: "\\ea2f";
}
i.sl-icon[name="arrowhead-up-outline"]::before {
  content: "\\ea30";
}
i.sl-icon[name="at"]::before {
  content: "\\ea31";
}
i.sl-icon[name="at-outline"]::before {
  content: "\\ea32";
}
i.sl-icon[name="attach"]::before {
  content: "\\ea33";
}
i.sl-icon[name="attach-2"]::before {
  content: "\\ea34";
}
i.sl-icon[name="attach-2-outline"]::before {
  content: "\\ea35";
}
i.sl-icon[name="attach-outline"]::before {
  content: "\\ea36";
}
i.sl-icon[name="award"]::before {
  content: "\\ea37";
}
i.sl-icon[name="award-outline"]::before {
  content: "\\ea38";
}
i.sl-icon[name="backspace"]::before {
  content: "\\ea39";
}
i.sl-icon[name="backspace-outline"]::before {
  content: "\\ea3a";
}
i.sl-icon[name="bar-chart"]::before {
  content: "\\ea3b";
}
i.sl-icon[name="bar-chart-2"]::before {
  content: "\\ea3c";
}
i.sl-icon[name="bar-chart-2-outline"]::before {
  content: "\\ea3d";
}
i.sl-icon[name="bar-chart-outline"]::before {
  content: "\\ea3e";
}
i.sl-icon[name="battery"]::before {
  content: "\\ea3f";
}
i.sl-icon[name="battery-outline"]::before {
  content: "\\ea40";
}
i.sl-icon[name="behance"]::before {
  content: "\\ea41";
}
i.sl-icon[name="behance-outline"]::before {
  content: "\\ea42";
}
i.sl-icon[name="bell"]::before {
  content: "\\ea43";
}
i.sl-icon[name="bell-off"]::before {
  content: "\\ea44";
}
i.sl-icon[name="bell-off-outline"]::before {
  content: "\\ea45";
}
i.sl-icon[name="bell-outline"]::before {
  content: "\\ea46";
}
i.sl-icon[name="bluetooth"]::before {
  content: "\\ea47";
}
i.sl-icon[name="bluetooth-outline"]::before {
  content: "\\ea48";
}
i.sl-icon[name="book"]::before {
  content: "\\ea49";
}
i.sl-icon[name="book-open"]::before {
  content: "\\ea4a";
}
i.sl-icon[name="book-open-outline"]::before {
  content: "\\ea4b";
}
i.sl-icon[name="book-outline"]::before {
  content: "\\ea4c";
}
i.sl-icon[name="bookmark"]::before {
  content: "\\ea4d";
}
i.sl-icon[name="bookmark-outline"]::before {
  content: "\\ea4e";
}
i.sl-icon[name="briefcase"]::before {
  content: "\\ea4f";
}
i.sl-icon[name="briefcase-outline"]::before {
  content: "\\ea50";
}
i.sl-icon[name="browser"]::before {
  content: "\\ea51";
}
i.sl-icon[name="browser-outline"]::before {
  content: "\\ea52";
}
i.sl-icon[name="brush"]::before {
  content: "\\ea53";
}
i.sl-icon[name="brush-outline"]::before {
  content: "\\ea54";
}
i.sl-icon[name="bulb"]::before {
  content: "\\ea55";
}
i.sl-icon[name="bulb-outline"]::before {
  content: "\\ea56";
}
i.sl-icon[name="calendar"]::before {
  content: "\\ea57";
}
i.sl-icon[name="calendar-outline"]::before {
  content: "\\ea58";
}
i.sl-icon[name="camera"]::before {
  content: "\\ea59";
}
i.sl-icon[name="camera-outline"]::before {
  content: "\\ea5a";
}
i.sl-icon[name="car"]::before {
  content: "\\ea5b";
}
i.sl-icon[name="car-outline"]::before {
  content: "\\ea5c";
}
i.sl-icon[name="cast"]::before {
  content: "\\ea5d";
}
i.sl-icon[name="cast-outline"]::before {
  content: "\\ea5e";
}
i.sl-icon[name="charging"]::before {
  content: "\\ea5f";
}
i.sl-icon[name="charging-outline"]::before {
  content: "\\ea60";
}
i.sl-icon[name="checkmark"]::before {
  content: "\\ea61";
}
i.sl-icon[name="checkmark-circle"]::before {
  content: "\\ea62";
}
i.sl-icon[name="checkmark-circle-2"]::before {
  content: "\\ea63";
}
i.sl-icon[name="checkmark-circle-2-outline"]::before {
  content: "\\ea64";
}
i.sl-icon[name="checkmark-circle-outline"]::before {
  content: "\\ea65";
}
i.sl-icon[name="checkmark-outline"]::before {
  content: "\\ea66";
}
i.sl-icon[name="checkmark-square"]::before {
  content: "\\ea67";
}
i.sl-icon[name="checkmark-square-2"]::before {
  content: "\\ea68";
}
i.sl-icon[name="checkmark-square-2-outline"]::before {
  content: "\\ea69";
}
i.sl-icon[name="checkmark-square-outline"]::before {
  content: "\\ea6a";
}
i.sl-icon[name="chevron-down"]::before {
  content: "\\ea6b";
}
i.sl-icon[name="chevron-down-outline"]::before {
  content: "\\ea6c";
}
i.sl-icon[name="chevron-left"]::before {
  content: "\\ea6d";
}
i.sl-icon[name="chevron-left-outline"]::before {
  content: "\\ea6e";
}
i.sl-icon[name="chevron-right"]::before {
  content: "\\ea6f";
}
i.sl-icon[name="chevron-right-outline"]::before {
  content: "\\ea70";
}
i.sl-icon[name="chevron-up"]::before {
  content: "\\ea71";
}
i.sl-icon[name="chevron-up-outline"]::before {
  content: "\\ea72";
}
i.sl-icon[name="clipboard"]::before {
  content: "\\ea73";
}
i.sl-icon[name="clipboard-outline"]::before {
  content: "\\ea74";
}
i.sl-icon[name="clock"]::before {
  content: "\\ea75";
}
i.sl-icon[name="clock-outline"]::before {
  content: "\\ea76";
}
i.sl-icon[name="close"]::before {
  content: "\\ea77";
}
i.sl-icon[name="close-circle"]::before {
  content: "\\ea78";
}
i.sl-icon[name="close-circle-outline"]::before {
  content: "\\ea79";
}
i.sl-icon[name="close-outline"]::before {
  content: "\\ea7a";
}
i.sl-icon[name="close-square"]::before {
  content: "\\ea7b";
}
i.sl-icon[name="close-square-outline"]::before {
  content: "\\ea7c";
}
i.sl-icon[name="cloud-download"]::before {
  content: "\\ea7d";
}
i.sl-icon[name="cloud-download-outline"]::before {
  content: "\\ea7e";
}
i.sl-icon[name="cloud-upload"]::before {
  content: "\\ea7f";
}
i.sl-icon[name="cloud-upload-outline"]::before {
  content: "\\ea80";
}
i.sl-icon[name="code"]::before {
  content: "\\ea81";
}
i.sl-icon[name="code-download"]::before {
  content: "\\ea82";
}
i.sl-icon[name="code-download-outline"]::before {
  content: "\\ea83";
}
i.sl-icon[name="code-outline"]::before {
  content: "\\ea84";
}
i.sl-icon[name="collapse"]::before {
  content: "\\ea85";
}
i.sl-icon[name="collapse-outline"]::before {
  content: "\\ea86";
}
i.sl-icon[name="color-palette"]::before {
  content: "\\ea87";
}
i.sl-icon[name="color-palette-outline"]::before {
  content: "\\ea88";
}
i.sl-icon[name="color-picker"]::before {
  content: "\\ea89";
}
i.sl-icon[name="color-picker-outline"]::before {
  content: "\\ea8a";
}
i.sl-icon[name="compass"]::before {
  content: "\\ea8b";
}
i.sl-icon[name="compass-outline"]::before {
  content: "\\ea8c";
}
i.sl-icon[name="copy"]::before {
  content: "\\ea8d";
}
i.sl-icon[name="copy-outline"]::before {
  content: "\\ea8e";
}
i.sl-icon[name="corner-down-left"]::before {
  content: "\\ea8f";
}
i.sl-icon[name="corner-down-left-outline"]::before {
  content: "\\ea90";
}
i.sl-icon[name="corner-down-right"]::before {
  content: "\\ea91";
}
i.sl-icon[name="corner-down-right-outline"]::before {
  content: "\\ea92";
}
i.sl-icon[name="corner-left-down"]::before {
  content: "\\ea93";
}
i.sl-icon[name="corner-left-down-outline"]::before {
  content: "\\ea94";
}
i.sl-icon[name="corner-left-up"]::before {
  content: "\\ea95";
}
i.sl-icon[name="corner-left-up-outline"]::before {
  content: "\\ea96";
}
i.sl-icon[name="corner-right-down"]::before {
  content: "\\ea97";
}
i.sl-icon[name="corner-right-down-outline"]::before {
  content: "\\ea98";
}
i.sl-icon[name="corner-right-up"]::before {
  content: "\\ea99";
}
i.sl-icon[name="corner-right-up-outline"]::before {
  content: "\\ea9a";
}
i.sl-icon[name="corner-up-left"]::before {
  content: "\\ea9b";
}
i.sl-icon[name="corner-up-left-outline"]::before {
  content: "\\ea9c";
}
i.sl-icon[name="corner-up-right"]::before {
  content: "\\ea9d";
}
i.sl-icon[name="corner-up-right-outline"]::before {
  content: "\\ea9e";
}
i.sl-icon[name="credit-card"]::before {
  content: "\\ea9f";
}
i.sl-icon[name="credit-card-outline"]::before {
  content: "\\eaa0";
}
i.sl-icon[name="crop"]::before {
  content: "\\eaa1";
}
i.sl-icon[name="crop-outline"]::before {
  content: "\\eaa2";
}
i.sl-icon[name="cube"]::before {
  content: "\\eaa3";
}
i.sl-icon[name="cube-outline"]::before {
  content: "\\eaa4";
}
i.sl-icon[name="diagonal-arrow-left-down"]::before {
  content: "\\eaa5";
}
i.sl-icon[name="diagonal-arrow-left-down-outline"]::before {
  content: "\\eaa6";
}
i.sl-icon[name="diagonal-arrow-left-up"]::before {
  content: "\\eaa7";
}
i.sl-icon[name="diagonal-arrow-left-up-outline"]::before {
  content: "\\eaa8";
}
i.sl-icon[name="diagonal-arrow-right-down"]::before {
  content: "\\eaa9";
}
i.sl-icon[name="diagonal-arrow-right-down-outline"]::before {
  content: "\\eaaa";
}
i.sl-icon[name="diagonal-arrow-right-up"]::before {
  content: "\\eaab";
}
i.sl-icon[name="diagonal-arrow-right-up-outline"]::before {
  content: "\\eaac";
}
i.sl-icon[name="done-all"]::before {
  content: "\\eaad";
}
i.sl-icon[name="done-all-outline"]::before {
  content: "\\eaae";
}
i.sl-icon[name="download"]::before {
  content: "\\eaaf";
}
i.sl-icon[name="download-outline"]::before {
  content: "\\eab0";
}
i.sl-icon[name="droplet"]::before {
  content: "\\eab1";
}
i.sl-icon[name="droplet-off"]::before {
  content: "\\eab2";
}
i.sl-icon[name="droplet-off-outline"]::before {
  content: "\\eab3";
}
i.sl-icon[name="droplet-outline"]::before {
  content: "\\eab4";
}
i.sl-icon[name="edit"]::before {
  content: "\\eab5";
}
i.sl-icon[name="edit-2"]::before {
  content: "\\eab6";
}
i.sl-icon[name="edit-2-outline"]::before {
  content: "\\eab7";
}
i.sl-icon[name="edit-outline"]::before {
  content: "\\eab8";
}
i.sl-icon[name="email"]::before {
  content: "\\eab9";
}
i.sl-icon[name="email-outline"]::before {
  content: "\\eaba";
}
i.sl-icon[name="expand"]::before {
  content: "\\eabb";
}
i.sl-icon[name="expand-outline"]::before {
  content: "\\eabc";
}
i.sl-icon[name="external-link"]::before {
  content: "\\eabd";
}
i.sl-icon[name="external-link-outline"]::before {
  content: "\\eabe";
}
i.sl-icon[name="eye"]::before {
  content: "\\eabf";
}
i.sl-icon[name="eye-off"]::before {
  content: "\\eac0";
}
i.sl-icon[name="eye-off-2"]::before {
  content: "\\eac1";
}
i.sl-icon[name="eye-off-2-outline"]::before {
  content: "\\eac2";
}
i.sl-icon[name="eye-off-outline"]::before {
  content: "\\eac3";
}
i.sl-icon[name="eye-outline"]::before {
  content: "\\eac4";
}
i.sl-icon[name="facebook"]::before {
  content: "\\eac5";
}
i.sl-icon[name="facebook-outline"]::before {
  content: "\\eac6";
}
i.sl-icon[name="file"]::before {
  content: "\\eac7";
}
i.sl-icon[name="file-add"]::before {
  content: "\\eac8";
}
i.sl-icon[name="file-add-outline"]::before {
  content: "\\eac9";
}
i.sl-icon[name="file-outline"]::before {
  content: "\\eaca";
}
i.sl-icon[name="file-remove"]::before {
  content: "\\eacb";
}
i.sl-icon[name="file-remove-outline"]::before {
  content: "\\eacc";
}
i.sl-icon[name="file-text"]::before {
  content: "\\eacd";
}
i.sl-icon[name="file-text-outline"]::before {
  content: "\\eace";
}
i.sl-icon[name="film"]::before {
  content: "\\eacf";
}
i.sl-icon[name="film-outline"]::before {
  content: "\\ead0";
}
i.sl-icon[name="flag"]::before {
  content: "\\ead1";
}
i.sl-icon[name="flag-outline"]::before {
  content: "\\ead2";
}
i.sl-icon[name="flash"]::before {
  content: "\\ead3";
}
i.sl-icon[name="flash-off"]::before {
  content: "\\ead4";
}
i.sl-icon[name="flash-off-outline"]::before {
  content: "\\ead5";
}
i.sl-icon[name="flash-outline"]::before {
  content: "\\ead6";
}
i.sl-icon[name="flip"]::before {
  content: "\\ead7";
}
i.sl-icon[name="flip-2"]::before {
  content: "\\ead8";
}
i.sl-icon[name="flip-2-outline"]::before {
  content: "\\ead9";
}
i.sl-icon[name="flip-outline"]::before {
  content: "\\eada";
}
i.sl-icon[name="folder"]::before {
  content: "\\eadb";
}
i.sl-icon[name="folder-add"]::before {
  content: "\\eadc";
}
i.sl-icon[name="folder-add-outline"]::before {
  content: "\\eadd";
}
i.sl-icon[name="folder-outline"]::before {
  content: "\\eade";
}
i.sl-icon[name="folder-remove"]::before {
  content: "\\eadf";
}
i.sl-icon[name="folder-remove-outline"]::before {
  content: "\\eae0";
}
i.sl-icon[name="funnel"]::before {
  content: "\\eae1";
}
i.sl-icon[name="funnel-outline"]::before {
  content: "\\eae2";
}
i.sl-icon[name="gift"]::before {
  content: "\\eae3";
}
i.sl-icon[name="gift-outline"]::before {
  content: "\\eae4";
}
i.sl-icon[name="github"]::before {
  content: "\\eae5";
}
i.sl-icon[name="github-outline"]::before {
  content: "\\eae6";
}
i.sl-icon[name="globe"]::before {
  content: "\\eae7";
}
i.sl-icon[name="globe-2"]::before {
  content: "\\eae8";
}
i.sl-icon[name="globe-2-outline"]::before {
  content: "\\eae9";
}
i.sl-icon[name="globe-3"]::before {
  content: "\\eaea";
}
i.sl-icon[name="globe-outline"]::before {
  content: "\\eaeb";
}
i.sl-icon[name="google"]::before {
  content: "\\eaec";
}
i.sl-icon[name="google-outline"]::before {
  content: "\\eaed";
}
i.sl-icon[name="grid"]::before {
  content: "\\eaee";
}
i.sl-icon[name="grid-outline"]::before {
  content: "\\eaef";
}
i.sl-icon[name="hard-drive"]::before {
  content: "\\eaf0";
}
i.sl-icon[name="hard-drive-outline"]::before {
  content: "\\eaf1";
}
i.sl-icon[name="hash"]::before {
  content: "\\eaf2";
}
i.sl-icon[name="hash-outline"]::before {
  content: "\\eaf3";
}
i.sl-icon[name="headphones"]::before {
  content: "\\eaf4";
}
i.sl-icon[name="headphones-outline"]::before {
  content: "\\eaf5";
}
i.sl-icon[name="heart"]::before {
  content: "\\eaf6";
}
i.sl-icon[name="heart-outline"]::before {
  content: "\\eaf7";
}
i.sl-icon[name="home"]::before {
  content: "\\eaf8";
}
i.sl-icon[name="home-outline"]::before {
  content: "\\eaf9";
}
i.sl-icon[name="image"]::before {
  content: "\\eafa";
}
i.sl-icon[name="image-2"]::before {
  content: "\\eafb";
}
i.sl-icon[name="image-outline"]::before {
  content: "\\eafc";
}
i.sl-icon[name="inbox"]::before {
  content: "\\eafd";
}
i.sl-icon[name="inbox-outline"]::before {
  content: "\\eafe";
}
i.sl-icon[name="info"]::before {
  content: "\\eaff";
}
i.sl-icon[name="info-outline"]::before {
  content: "\\eb00";
}
i.sl-icon[name="keypad"]::before {
  content: "\\eb01";
}
i.sl-icon[name="keypad-outline"]::before {
  content: "\\eb02";
}
i.sl-icon[name="layers"]::before {
  content: "\\eb03";
}
i.sl-icon[name="layers-outline"]::before {
  content: "\\eb04";
}
i.sl-icon[name="layout"]::before {
  content: "\\eb05";
}
i.sl-icon[name="layout-outline"]::before {
  content: "\\eb06";
}
i.sl-icon[name="link"]::before {
  content: "\\eb07";
}
i.sl-icon[name="link-2"]::before {
  content: "\\eb08";
}
i.sl-icon[name="link-2-outline"]::before {
  content: "\\eb09";
}
i.sl-icon[name="link-outline"]::before {
  content: "\\eb0a";
}
i.sl-icon[name="linkedin"]::before {
  content: "\\eb0b";
}
i.sl-icon[name="linkedin-outline"]::before {
  content: "\\eb0c";
}
i.sl-icon[name="list"]::before {
  content: "\\eb0d";
}
i.sl-icon[name="list-outline"]::before {
  content: "\\eb0e";
}
i.sl-icon[name="loader-outline"]::before {
  content: "\\eb0f";
}
i.sl-icon[name="lock"]::before {
  content: "\\eb10";
}
i.sl-icon[name="lock-outline"]::before {
  content: "\\eb11";
}
i.sl-icon[name="log-in"]::before {
  content: "\\eb12";
}
i.sl-icon[name="log-in-outline"]::before {
  content: "\\eb13";
}
i.sl-icon[name="log-out"]::before {
  content: "\\eb14";
}
i.sl-icon[name="log-out-outline"]::before {
  content: "\\eb15";
}
i.sl-icon[name="map"]::before {
  content: "\\eb16";
}
i.sl-icon[name="map-outline"]::before {
  content: "\\eb17";
}
i.sl-icon[name="maximize"]::before {
  content: "\\eb18";
}
i.sl-icon[name="maximize-outline"]::before {
  content: "\\eb19";
}
i.sl-icon[name="menu"]::before {
  content: "\\eb1a";
}
i.sl-icon[name="menu-2"]::before {
  content: "\\eb1b";
}
i.sl-icon[name="menu-2-outline"]::before {
  content: "\\eb1c";
}
i.sl-icon[name="menu-arrow"]::before {
  content: "\\eb1d";
}
i.sl-icon[name="menu-arrow-outline"]::before {
  content: "\\eb1e";
}
i.sl-icon[name="menu-outline"]::before {
  content: "\\eb1f";
}
i.sl-icon[name="message-circle"]::before {
  content: "\\eb20";
}
i.sl-icon[name="message-circle-outline"]::before {
  content: "\\eb21";
}
i.sl-icon[name="message-square"]::before {
  content: "\\eb22";
}
i.sl-icon[name="message-square-outline"]::before {
  content: "\\eb23";
}
i.sl-icon[name="mic"]::before {
  content: "\\eb24";
}
i.sl-icon[name="mic-off"]::before {
  content: "\\eb25";
}
i.sl-icon[name="mic-off-outline"]::before {
  content: "\\eb26";
}
i.sl-icon[name="mic-outline"]::before {
  content: "\\eb27";
}
i.sl-icon[name="minimize"]::before {
  content: "\\eb28";
}
i.sl-icon[name="minimize-outline"]::before {
  content: "\\eb29";
}
i.sl-icon[name="minus"]::before {
  content: "\\eb2a";
}
i.sl-icon[name="minus-circle"]::before {
  content: "\\eb2b";
}
i.sl-icon[name="minus-circle-outline"]::before {
  content: "\\eb2c";
}
i.sl-icon[name="minus-outline"]::before {
  content: "\\eb2d";
}
i.sl-icon[name="minus-square"]::before {
  content: "\\eb2e";
}
i.sl-icon[name="minus-square-outline"]::before {
  content: "\\eb2f";
}
i.sl-icon[name="monitor"]::before {
  content: "\\eb30";
}
i.sl-icon[name="monitor-outline"]::before {
  content: "\\eb31";
}
i.sl-icon[name="moon"]::before {
  content: "\\eb32";
}
i.sl-icon[name="moon-outline"]::before {
  content: "\\eb33";
}
i.sl-icon[name="more-horizontal"]::before {
  content: "\\eb34";
}
i.sl-icon[name="more-horizontal-outline"]::before {
  content: "\\eb35";
}
i.sl-icon[name="more-vertical"]::before {
  content: "\\eb36";
}
i.sl-icon[name="more-vertical-outline"]::before {
  content: "\\eb37";
}
i.sl-icon[name="move"]::before {
  content: "\\eb38";
}
i.sl-icon[name="move-outline"]::before {
  content: "\\eb39";
}
i.sl-icon[name="music"]::before {
  content: "\\eb3a";
}
i.sl-icon[name="music-outline"]::before {
  content: "\\eb3b";
}
i.sl-icon[name="navigation"]::before {
  content: "\\eb3c";
}
i.sl-icon[name="navigation-2"]::before {
  content: "\\eb3d";
}
i.sl-icon[name="navigation-2-outline"]::before {
  content: "\\eb3e";
}
i.sl-icon[name="navigation-outline"]::before {
  content: "\\eb3f";
}
i.sl-icon[name="npm"]::before {
  content: "\\eb40";
}
i.sl-icon[name="npm-outline"]::before {
  content: "\\eb41";
}
i.sl-icon[name="options"]::before {
  content: "\\eb42";
}
i.sl-icon[name="options-2"]::before {
  content: "\\eb43";
}
i.sl-icon[name="options-2-outline"]::before {
  content: "\\eb44";
}
i.sl-icon[name="options-outline"]::before {
  content: "\\eb45";
}
i.sl-icon[name="pantone"]::before {
  content: "\\eb46";
}
i.sl-icon[name="pantone-outline"]::before {
  content: "\\eb47";
}
i.sl-icon[name="paper-plane"]::before {
  content: "\\eb48";
}
i.sl-icon[name="paper-plane-outline"]::before {
  content: "\\eb49";
}
i.sl-icon[name="pause-circle"]::before {
  content: "\\eb4a";
}
i.sl-icon[name="pause-circle-outline"]::before {
  content: "\\eb4b";
}
i.sl-icon[name="people"]::before {
  content: "\\eb4c";
}
i.sl-icon[name="people-outline"]::before {
  content: "\\eb4d";
}
i.sl-icon[name="percent"]::before {
  content: "\\eb4e";
}
i.sl-icon[name="percent-outline"]::before {
  content: "\\eb4f";
}
i.sl-icon[name="person"]::before {
  content: "\\eb50";
}
i.sl-icon[name="person-add"]::before {
  content: "\\eb51";
}
i.sl-icon[name="person-add-outline"]::before {
  content: "\\eb52";
}
i.sl-icon[name="person-delete"]::before {
  content: "\\eb53";
}
i.sl-icon[name="person-delete-outline"]::before {
  content: "\\eb54";
}
i.sl-icon[name="person-done"]::before {
  content: "\\eb55";
}
i.sl-icon[name="person-done-outline"]::before {
  content: "\\eb56";
}
i.sl-icon[name="person-outline"]::before {
  content: "\\eb57";
}
i.sl-icon[name="person-remove"]::before {
  content: "\\eb58";
}
i.sl-icon[name="person-remove-outline"]::before {
  content: "\\eb59";
}
i.sl-icon[name="phone"]::before {
  content: "\\eb5a";
}
i.sl-icon[name="phone-call"]::before {
  content: "\\eb5b";
}
i.sl-icon[name="phone-call-outline"]::before {
  content: "\\eb5c";
}
i.sl-icon[name="phone-missed"]::before {
  content: "\\eb5d";
}
i.sl-icon[name="phone-missed-outline"]::before {
  content: "\\eb5e";
}
i.sl-icon[name="phone-off"]::before {
  content: "\\eb5f";
}
i.sl-icon[name="phone-off-outline"]::before {
  content: "\\eb60";
}
i.sl-icon[name="phone-outline"]::before {
  content: "\\eb61";
}
i.sl-icon[name="pie-chart"]::before {
  content: "\\eb62";
}
i.sl-icon[name="pie-chart-2"]::before {
  content: "\\eb63";
}
i.sl-icon[name="pie-chart-outline"]::before {
  content: "\\eb64";
}
i.sl-icon[name="pin"]::before {
  content: "\\eb65";
}
i.sl-icon[name="pin-outline"]::before {
  content: "\\eb66";
}
i.sl-icon[name="play-circle"]::before {
  content: "\\eb67";
}
i.sl-icon[name="play-circle-outline"]::before {
  content: "\\eb68";
}
i.sl-icon[name="plus"]::before {
  content: "\\eb69";
}
i.sl-icon[name="plus-circle"]::before {
  content: "\\eb6a";
}
i.sl-icon[name="plus-circle-outline"]::before {
  content: "\\eb6b";
}
i.sl-icon[name="plus-outline"]::before {
  content: "\\eb6c";
}
i.sl-icon[name="plus-square"]::before {
  content: "\\eb6d";
}
i.sl-icon[name="plus-square-outline"]::before {
  content: "\\eb6e";
}
i.sl-icon[name="power"]::before {
  content: "\\eb6f";
}
i.sl-icon[name="power-outline"]::before {
  content: "\\eb70";
}
i.sl-icon[name="pricetags"]::before {
  content: "\\eb71";
}
i.sl-icon[name="pricetags-outline"]::before {
  content: "\\eb72";
}
i.sl-icon[name="printer"]::before {
  content: "\\eb73";
}
i.sl-icon[name="printer-outline"]::before {
  content: "\\eb74";
}
i.sl-icon[name="question-mark"]::before {
  content: "\\eb75";
}
i.sl-icon[name="question-mark-circle"]::before {
  content: "\\eb76";
}
i.sl-icon[name="question-mark-circle-outline"]::before {
  content: "\\eb77";
}
i.sl-icon[name="question-mark-outline"]::before {
  content: "\\eb78";
}
i.sl-icon[name="radio"]::before {
  content: "\\eb79";
}
i.sl-icon[name="radio-button-off"]::before {
  content: "\\eb7a";
}
i.sl-icon[name="radio-button-off-outline"]::before {
  content: "\\eb7b";
}
i.sl-icon[name="radio-button-on"]::before {
  content: "\\eb7c";
}
i.sl-icon[name="radio-button-on-outline"]::before {
  content: "\\eb7d";
}
i.sl-icon[name="radio-outline"]::before {
  content: "\\eb7e";
}
i.sl-icon[name="recording"]::before {
  content: "\\eb7f";
}
i.sl-icon[name="recording-outline"]::before {
  content: "\\eb80";
}
i.sl-icon[name="refresh"]::before {
  content: "\\eb81";
}
i.sl-icon[name="refresh-outline"]::before {
  content: "\\eb82";
}
i.sl-icon[name="repeat"]::before {
  content: "\\eb83";
}
i.sl-icon[name="repeat-outline"]::before {
  content: "\\eb84";
}
i.sl-icon[name="rewind-left"]::before {
  content: "\\eb85";
}
i.sl-icon[name="rewind-left-outline"]::before {
  content: "\\eb86";
}
i.sl-icon[name="rewind-right"]::before {
  content: "\\eb87";
}
i.sl-icon[name="rewind-right-outline"]::before {
  content: "\\eb88";
}
i.sl-icon[name="save"]::before {
  content: "\\eb89";
}
i.sl-icon[name="save-outline"]::before {
  content: "\\eb8a";
}
i.sl-icon[name="scissors"]::before {
  content: "\\eb8b";
}
i.sl-icon[name="scissors-outline"]::before {
  content: "\\eb8c";
}
i.sl-icon[name="search"]::before {
  content: "\\eb8d";
}
i.sl-icon[name="search-outline"]::before {
  content: "\\eb8e";
}
i.sl-icon[name="settings"]::before {
  content: "\\eb8f";
}
i.sl-icon[name="settings-2"]::before {
  content: "\\eb90";
}
i.sl-icon[name="settings-2-outline"]::before {
  content: "\\eb91";
}
i.sl-icon[name="settings-outline"]::before {
  content: "\\eb92";
}
i.sl-icon[name="shake"]::before {
  content: "\\eb93";
}
i.sl-icon[name="shake-outline"]::before {
  content: "\\eb94";
}
i.sl-icon[name="share"]::before {
  content: "\\eb95";
}
i.sl-icon[name="share-outline"]::before {
  content: "\\eb96";
}
i.sl-icon[name="shield"]::before {
  content: "\\eb97";
}
i.sl-icon[name="shield-off"]::before {
  content: "\\eb98";
}
i.sl-icon[name="shield-off-outline"]::before {
  content: "\\eb99";
}
i.sl-icon[name="shield-outline"]::before {
  content: "\\eb9a";
}
i.sl-icon[name="shopping-bag"]::before {
  content: "\\eb9b";
}
i.sl-icon[name="shopping-bag-outline"]::before {
  content: "\\eb9c";
}
i.sl-icon[name="shopping-cart"]::before {
  content: "\\eb9d";
}
i.sl-icon[name="shopping-cart-outline"]::before {
  content: "\\eb9e";
}
i.sl-icon[name="shuffle"]::before {
  content: "\\eb9f";
}
i.sl-icon[name="shuffle-2"]::before {
  content: "\\eba0";
}
i.sl-icon[name="shuffle-2-outline"]::before {
  content: "\\eba1";
}
i.sl-icon[name="shuffle-outline"]::before {
  content: "\\eba2";
}
i.sl-icon[name="skip-back"]::before {
  content: "\\eba3";
}
i.sl-icon[name="skip-back-outline"]::before {
  content: "\\eba4";
}
i.sl-icon[name="skip-forward"]::before {
  content: "\\eba5";
}
i.sl-icon[name="skip-forward-outline"]::before {
  content: "\\eba6";
}
i.sl-icon[name="slash"]::before {
  content: "\\eba7";
}
i.sl-icon[name="slash-outline"]::before {
  content: "\\eba8";
}
i.sl-icon[name="smartphone"]::before {
  content: "\\eba9";
}
i.sl-icon[name="smartphone-outline"]::before {
  content: "\\ebaa";
}
i.sl-icon[name="smiling-face"]::before {
  content: "\\ebab";
}
i.sl-icon[name="smiling-face-outline"]::before {
  content: "\\ebac";
}
i.sl-icon[name="speaker"]::before {
  content: "\\ebad";
}
i.sl-icon[name="speaker-outline"]::before {
  content: "\\ebae";
}
i.sl-icon[name="square"]::before {
  content: "\\ebaf";
}
i.sl-icon[name="square-outline"]::before {
  content: "\\ebb0";
}
i.sl-icon[name="star"]::before {
  content: "\\ebb1";
}
i.sl-icon[name="star-outline"]::before {
  content: "\\ebb2";
}
i.sl-icon[name="stop-circle"]::before {
  content: "\\ebb3";
}
i.sl-icon[name="stop-circle-outline"]::before {
  content: "\\ebb4";
}
i.sl-icon[name="sun"]::before {
  content: "\\ebb5";
}
i.sl-icon[name="sun-outline"]::before {
  content: "\\ebb6";
}
i.sl-icon[name="swap"]::before {
  content: "\\ebb7";
}
i.sl-icon[name="swap-outline"]::before {
  content: "\\ebb8";
}
i.sl-icon[name="sync"]::before {
  content: "\\ebb9";
}
i.sl-icon[name="sync-outline"]::before {
  content: "\\ebba";
}
i.sl-icon[name="text"]::before {
  content: "\\ebbb";
}
i.sl-icon[name="text-outline"]::before {
  content: "\\ebbc";
}
i.sl-icon[name="thermometer"]::before {
  content: "\\ebbd";
}
i.sl-icon[name="thermometer-minus"]::before {
  content: "\\ebbe";
}
i.sl-icon[name="thermometer-minus-outline"]::before {
  content: "\\ebbf";
}
i.sl-icon[name="thermometer-outline"]::before {
  content: "\\ebc0";
}
i.sl-icon[name="thermometer-plus"]::before {
  content: "\\ebc1";
}
i.sl-icon[name="thermometer-plus-outline"]::before {
  content: "\\ebc2";
}
i.sl-icon[name="toggle-left"]::before {
  content: "\\ebc3";
}
i.sl-icon[name="toggle-left-outline"]::before {
  content: "\\ebc4";
}
i.sl-icon[name="toggle-right"]::before {
  content: "\\ebc5";
}
i.sl-icon[name="toggle-right-outline"]::before {
  content: "\\ebc6";
}
i.sl-icon[name="trash"]::before {
  content: "\\ebc7";
}
i.sl-icon[name="trash-2"]::before {
  content: "\\ebc8";
}
i.sl-icon[name="trash-2-outline"]::before {
  content: "\\ebc9";
}
i.sl-icon[name="trash-outline"]::before {
  content: "\\ebca";
}
i.sl-icon[name="trending-down"]::before {
  content: "\\ebcb";
}
i.sl-icon[name="trending-down-outline"]::before {
  content: "\\ebcc";
}
i.sl-icon[name="trending-up"]::before {
  content: "\\ebcd";
}
i.sl-icon[name="trending-up-outline"]::before {
  content: "\\ebce";
}
i.sl-icon[name="tv"]::before {
  content: "\\ebcf";
}
i.sl-icon[name="tv-outline"]::before {
  content: "\\ebd0";
}
i.sl-icon[name="twitter"]::before {
  content: "\\ebd1";
}
i.sl-icon[name="twitter-outline"]::before {
  content: "\\ebd2";
}
i.sl-icon[name="umbrella"]::before {
  content: "\\ebd3";
}
i.sl-icon[name="umbrella-outline"]::before {
  content: "\\ebd4";
}
i.sl-icon[name="undo"]::before {
  content: "\\ebd5";
}
i.sl-icon[name="undo-outline"]::before {
  content: "\\ebd6";
}
i.sl-icon[name="unlock"]::before {
  content: "\\ebd7";
}
i.sl-icon[name="unlock-outline"]::before {
  content: "\\ebd8";
}
i.sl-icon[name="upload"]::before {
  content: "\\ebd9";
}
i.sl-icon[name="upload-outline"]::before {
  content: "\\ebda";
}
i.sl-icon[name="video"]::before {
  content: "\\ebdb";
}
i.sl-icon[name="video-off"]::before {
  content: "\\ebdc";
}
i.sl-icon[name="video-off-outline"]::before {
  content: "\\ebdd";
}
i.sl-icon[name="video-outline"]::before {
  content: "\\ebde";
}
i.sl-icon[name="volume-down"]::before {
  content: "\\ebdf";
}
i.sl-icon[name="volume-down-outline"]::before {
  content: "\\ebe0";
}
i.sl-icon[name="volume-mute"]::before {
  content: "\\ebe1";
}
i.sl-icon[name="volume-mute-outline"]::before {
  content: "\\ebe2";
}
i.sl-icon[name="volume-off"]::before {
  content: "\\ebe3";
}
i.sl-icon[name="volume-off-outline"]::before {
  content: "\\ebe4";
}
i.sl-icon[name="volume-up"]::before {
  content: "\\ebe5";
}
i.sl-icon[name="volume-up-outline"]::before {
  content: "\\ebe6";
}
i.sl-icon[name="wifi"]::before {
  content: "\\ebe7";
}
i.sl-icon[name="wifi-off"]::before {
  content: "\\ebe8";
}
i.sl-icon[name="wifi-off-outline"]::before {
  content: "\\ebe9";
}
i.sl-icon[name="wifi-outline"]::before {
  content: "\\ebea";
}
`,ys=`/* Host */
:host([sl-theme=primer-light]) {
  /* Override */
  --sl-kbd-background-color: var(--pr-aqua-haze);
  --sl-kbd-color: var(--pr-shuttle-gray);
  --sl-kbd-border-color: rgba(27,31,36,0.15);
}
:host([sl-theme=primer-dark]) {
  /* Override */
  --sl-kbd-background-color: var(--pr-sibuya-game-reserve);
  --sl-kbd-color: var(--pr-regent-gray);
  --sl-kbd-border-color: var(--pr-regent-gray);
}
/* Keyboard */
kbd {
  font-family: var(--pr-font-family);
  border-radius: 4px;
  padding: 2px 4px;
}
`;const Gn={button:vs,card:ks,"input-text":_s,icon:ws,kbd:ys},xt={"vanilla-light":{icon:Gn.icon},"vanilla-dark":{icon:Gn.icon},"primer-light":Gn,"primer-dark":Gn},Et=(()=>{const{subscribe:n,update:e}=Me(((localStorage==null?void 0:localStorage.getItem("slithe.recent-searches"))||"").split(",").filter(t=>t));return{subscribe:n,get value(){return Pe(this)},add:t=>e(o=>(o.includes(t)||o.push(t),o.length>5&&o.shift(),localStorage==null||localStorage.setItem("slithe.recent-searches",o.join(",")),o))}})(),ni=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Tt=(()=>{const{subscribe:n,set:e}=Me((localStorage==null?void 0:localStorage.getItem("slithe.global-theme"))||`primer-${ni}`);return{subscribe:n,get value(){return Pe(this)},set:t=>{Zt({key:t,components:xt[t]}),document.documentElement.setAttribute("sl-theme",t),localStorage==null||localStorage.setItem("slithe.global-theme",t),e(t)},initialize(){Zt({key:Pe(this),components:xt[Pe(this)]}),document.documentElement.setAttribute("sl-theme",Pe(this))}}})(),lo=(()=>{const{subscribe:n,set:e}=Me((localStorage==null?void 0:localStorage.getItem("slithe.local-theme"))||`primer-${ni}`);return{subscribe:n,get value(){return Pe(this)},set:t=>{localStorage==null||localStorage.setItem("slithe.local-theme",t),e(t)}}})(),so=n=>typeof n=="undefined",ti=n=>typeof n=="function",oi=n=>typeof n=="number";function $s(n){return!n.defaultPrevented&&n.button===0&&!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ii(){let n=0;return()=>n++}function xs(){return Math.random().toString(36).substring(2)}const rn=typeof window=="undefined";function li(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}const jn=n=>`@@svnav-ctx__${n}`,St=jn("LOCATION"),Sn=jn("ROUTER"),qt=jn("ROUTE"),Es=jn("ROUTE_PARAMS"),si=jn("FOCUS_ELEM"),ai=/^:(.+)/,Ct=(n,e)=>n.substr(0,e.length)===e,Ts=n=>n==="",Ss=n=>ai.test(n),ri=n=>n[0]==="*",Cs=n=>n.replace(/\*.*$/,""),ci=n=>n.replace(/(^\/+|\/+$)/g,"");function Ve(n,e=!1){const t=ci(n).split("/");return e?t.filter(Boolean):t}const ft=(n,e)=>n+(e?`?${e}`:""),At=n=>`/${ci(n)}`;function Bn(...n){const e=o=>Ve(o,!0).join("/"),t=n.map(e).join("/");return At(t)}const It=1,Dn=2,vn=3,ui=4,fi=5,Ls=6,bi=7,Os=8,Ms=9,mi=10,pi=11,zs={[It]:"Link",[Dn]:"Route",[vn]:"Router",[ui]:"useFocus",[fi]:"useLocation",[Ls]:"useMatch",[bi]:"useNavigate",[Os]:"useParams",[Ms]:"useResolvable",[mi]:"useResolve",[pi]:"navigate"},Ft=n=>zs[n];function Rs(n,e){let t;return n===Dn?t=e.path?`path="${e.path}"`:"default":n===It?t=`to="${e.to}"`:n===vn&&(t=`basepath="${e.basepath||""}"`),`<${Ft(n)} ${t||""} />`}function Ps(n,e,t,o){const i=t&&Rs(o||n,t),l=i?`

Occurred in: ${i}`:"",a=Ft(n),s=ti(e)?e(a):e;return`<${a}> ${s}${l}`}const di=n=>(...e)=>n(Ps(...e)),hi=di(n=>{throw new Error(n)}),nt=di(console.warn),ao=4,Hs=3,qs=2,As=1,Is=1;function Fs(n,e){const t=n.default?0:Ve(n.fullPath).reduce((o,i)=>{let l=o;return l+=ao,Ts(i)?l+=Is:Ss(i)?l+=qs:ri(i)?l-=ao+As:l+=Hs,l},0);return{route:n,score:t,index:e}}function Ns(n){return n.map(Fs).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function gi(n,e){let t,o;const[i]=e.split("?"),l=Ve(i),a=l[0]==="",s=Ns(n);for(let c=0,r=s.length;c<r;c++){const{route:b}=s[c];let h=!1;const _={},g=C=>On(ln({},b),{params:_,uri:C});if(b.default){o=g(e);continue}const m=Ve(b.fullPath),w=Math.max(l.length,m.length);let v=0;for(;v<w;v++){const C=m[v],I=l[v];if(!so(C)&&ri(C)){const q=C==="*"?"*":C.slice(1);_[q]=l.slice(v).map(decodeURIComponent).join("/");break}if(so(I)){h=!0;break}const O=ai.exec(C);if(O&&!a){const q=decodeURIComponent(I);_[O[1]]=q}else if(C!==I){h=!0;break}}if(!h){t=g(Bn(...l.slice(0,v)));break}}return t||o||null}function vi(n,e){return gi([n],e)}function js(n,e){if(Ct(n,"/"))return n;const[t,o]=n.split("?"),[i]=e.split("?"),l=Ve(t),a=Ve(i);if(l[0]==="")return ft(i,o);if(!Ct(l[0],".")){const r=a.concat(l).join("/");return ft((i==="/"?"":"/")+r,o)}const s=a.concat(l),c=[];return s.forEach(r=>{r===".."?c.pop():r!=="."&&c.push(r)}),ft(`/${c.join("/")}`,o)}function ro(n,e){const{pathname:t,hash:o="",search:i="",state:l}=n,a=Ve(e,!0),s=Ve(t,!0);for(;a.length;)a[0]!==s[0]&&hi(vn,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),a.shift(),s.shift();return{pathname:Bn(...s),hash:o,search:i,state:l}}const co=n=>n.length===1?"":n;function ki(n){const e=n.indexOf("?"),t=n.indexOf("#"),o=e!==-1,i=t!==-1,l=i?co(n.substr(t)):"",a=i?n.substr(0,t):n,s=o?co(a.substr(e)):"";return{pathname:o?a.substr(0,e):a,search:s,hash:l}}function Bs(n,e,t){return Bn(t,js(n,e))}function Ds(n,e){const t=At(Cs(n)),o=Ve(t,!0),i=Ve(e,!0).slice(0,o.length),l=vi({fullPath:t},Bn(...i));return l&&l.uri}const bt="POP",Us="PUSH",Ks="REPLACE";function mt(n){return On(ln({},n.location),{pathname:encodeURI(decodeURI(n.location.pathname)),state:n.history.state,_key:n.history.state&&n.history.state._key||"initial"})}function Vs(n){let e=[],t=mt(n),o=bt;const i=(l=e)=>l.forEach(a=>a({location:t,action:o}));return{get location(){return t},listen(l){e.push(l);const a=()=>{t=mt(n),o=bt,i([l])};i([l]);const s=li(n,"popstate",a);return()=>{s(),e=e.filter(c=>c!==l)}},navigate(l,a){const{state:s={},replace:c=!1}=a||{};if(o=c?Ks:Us,oi(l))a&&nt(pi,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=bt,n.history.go(l);else{const r=On(ln({},s),{_key:xs()});try{n.history[c?"replaceState":"pushState"](r,"",l)}catch{n.location[c?"replace":"assign"](l)}}t=mt(n),i()}}}function pt(n,e){return On(ln({},ki(e)),{state:n})}function Gs(n="/"){let e=0,t=[pt(null,n)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(o,i,l){e++,t=t.slice(0,e),t.push(pt(o,l))},replaceState(o,i,l){t[e]=pt(o,l)},go(o){const i=e+o;i<0||i>t.length-1||(e=i)}}}}const Ws=!!(!rn&&window.document&&window.document.createElement),Ys=!rn&&window.location.origin==="null",Qs=Vs(Ws&&!Ys?window:Gs());let Ze=null,_i=!0;function Xs(n,e){const t=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<t.length;o++){const i=t[o],l=Number(i.dataset.svnavRouter);if(l===n)return!0;if(l===e)return!1}return!1}function Js(n){(!Ze||n.level>Ze.level||n.level===Ze.level&&Xs(n.routerId,Ze.routerId))&&(Ze=n)}function Zs(){Ze=null}function ea(){_i=!1}function uo(n){if(!n)return!1;const e="tabindex";try{if(!n.hasAttribute(e)){n.setAttribute(e,"-1");let t;t=li(n,"blur",()=>{n.removeAttribute(e),t()})}return n.focus(),document.activeElement===n}catch{return!1}}function na(n,e){return Number(n.dataset.svnavRouteEnd)===e}function ta(n){return/^H[1-6]$/i.test(n.tagName)}function fo(n,e=document){return e.querySelector(n)}function oa(n){let t=fo(`[data-svnav-route-start="${n}"]`).nextElementSibling;for(;!na(t,n);){if(ta(t))return t;const o=fo("h1,h2,h3,h4,h5,h6",t);if(o)return o;t=t.nextElementSibling}return null}function ia(n){Promise.resolve(Pe(n.focusElement)).then(e=>{const t=e||oa(n.id);t||nt(vn,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,n,Dn),!uo(t)&&uo(document.documentElement)})}const la=(n,e,t)=>(o,i)=>Xo().then(()=>{if(!Ze||_i){ea();return}if(o&&ia(Ze.route),n.announcements&&i){const{path:l,fullPath:a,meta:s,params:c,uri:r}=Ze.route,b=n.createAnnouncement({path:l,fullPath:a,meta:s,params:c,uri:r},Pe(t));Promise.resolve(b).then(h=>{e.set(h)})}Zs()}),sa="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function aa(n){let e,t;return{c(){e=d("div"),t=ne(n[0]),T(e,"role","status"),T(e,"aria-atomic","true"),T(e,"aria-live","polite"),T(e,"style",sa)},m(o,i){f(o,e,i),$(e,t)},p(o,i){i[0]&1&&Ke(t,o[0])},d(o){o&&u(e)}}}function ra(n){let e,t,o,i,l;const a=n[20].default,s=tt(a,n,n[19],null);let c=n[2]&&n[4]&&n[1].announcements&&aa(n);return{c(){e=d("div"),t=y(),s&&s.c(),o=y(),c&&c.c(),i=at(),wt(e,"display","none"),T(e,"aria-hidden","true"),T(e,"data-svnav-router",n[3])},m(r,b){f(r,e,b),f(r,t,b),s&&s.m(r,b),f(r,o,b),c&&c.m(r,b),f(r,i,b),l=!0},p(r,b){s&&s.p&&(!l||b[0]&524288)&&it(s,a,r,r[19],l?ot(a,r[19],b,null):lt(r[19]),null),r[2]&&r[4]&&r[1].announcements&&c.p(r,b)},i(r){l||(P(s,r),l=!0)},o(r){A(s,r),l=!1},d(r){r&&u(e),r&&u(t),s&&s.d(r),r&&u(o),c&&c.d(r),r&&u(i)}}}const ca=ii(),bo="/";function ua(n,e,t){let o,i,l,a,s,{$$slots:c={},$$scope:r}=e,{basepath:b=bo}=e,{url:h=null}=e,{history:_=Qs}=e,{primary:g=!0}=e,{a11y:m={}}=e;const w=ln({createAnnouncement:M=>`Navigated to ${M.uri}`,announcements:!0},m),v=b,C=At(b),I=en(St),O=en(Sn),q=!I,j=ca(),R=g&&!(O&&!O.manageFocus),B=Me("");Oe(n,B,M=>t(0,s=M));const U=Me([]);Oe(n,U,M=>t(18,a=M));const F=Me(null);Oe(n,F,M=>t(16,i=M));let K=!1;const H=q?0:O.level+1,le=q?Me((()=>ro(rn?ki(h):_.location,C))()):I;Oe(n,le,M=>t(15,o=M));const fe=Me(o);Oe(n,fe,M=>t(17,l=M));const be=la(w,B,le),we=M=>Y=>Y.filter(D=>D.id!==M);function ve(M){if(rn){if(K)return;const Y=vi(M,o.pathname);if(Y)return K=!0,Y}else U.update(Y=>{const D=we(M.id)(Y);return D.push(M),D})}function me(M){U.update(we(M))}return!q&&b!==bo&&nt(vn,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:b}),q&&(Ht(()=>_.listen(Y=>{const D=ro(Y.location,C);fe.set(o),le.set(D)})),qn(St,le)),qn(Sn,{activeRoute:F,registerRoute:ve,unregisterRoute:me,manageFocus:R,level:H,id:j,history:q?_:O.history,basepath:q?C:O.basepath}),n.$$set=M=>{"basepath"in M&&t(10,b=M.basepath),"url"in M&&t(11,h=M.url),"history"in M&&t(12,_=M.history),"primary"in M&&t(13,g=M.primary),"a11y"in M&&t(14,m=M.a11y),"$$scope"in M&&t(19,r=M.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&1024&&b!==v&&nt(vn,'You cannot change the "basepath" prop. It is ignored.'),n.$$.dirty[0]&294912){const M=gi(a,o.pathname);F.set(M)}if(n.$$.dirty[0]&163840&&q){const M=!!o.hash,Y=!M&&R,D=!M||o.pathname!==l.pathname;be(Y,D)}n.$$.dirty[0]&65536&&R&&i&&i.primary&&Js({level:H,routerId:j,route:i})},[s,w,q,j,R,B,U,F,le,fe,b,h,_,g,m,o,i,l,a,r,c]}class wi extends tn{constructor(e){super(),nn(this,e,ua,ra,De,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function Cn(n,e,t=Sn,o=vn){en(t)||hi(n,l=>`You cannot use ${l} outside of a ${Ft(o)}.`,e)}const fa=n=>{const{subscribe:e}=en(n);return{subscribe:e}};function Nt(){return Cn(fi),fa(St)}function yi(){const{history:n}=en(Sn);return n}function $i(){const n=en(qt);return n?gs(n,e=>e.base):Me("/")}function xi(){Cn(mi);const n=$i(),{basepath:e}=en(Sn);return o=>Bs(o,Pe(n),e)}function ba(){Cn(bi);const n=xi(),{navigate:e}=yi();return(o,i)=>{const l=oi(o)?o:n(o);return e(l,i)}}function ma(){Cn(ui,null,qt,Dn);const n=Nt(),e=en(si);let t;const o=n.subscribe(()=>{const i=new Promise(l=>{t=l});e.set(i)});return Wo(o),i=>{let l=!1;const a=n.subscribe(()=>{Xo().then(()=>{l||t(i)})});return{destroy(){l=!0,a()}}}}const pa=n=>({params:n&16,location:n&8}),mo=n=>({params:rn?Pe(n[9]):n[4],location:n[3],navigate:n[10]});function po(n){let e,t;return e=new wi({props:{primary:n[1],$$slots:{default:[ga]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},m(o,i){G(e,o,i),t=!0},p(o,i){const l={};i&2&&(l.primary=o[1]),i&264217&&(l.$$scope={dirty:i,ctx:o}),e.$set(l)},i(o){t||(P(e.$$.fragment,o),t=!0)},o(o){A(e.$$.fragment,o),t=!1},d(o){W(e,o)}}}function da(n){let e;const t=n[17].default,o=tt(t,n,n[18],mo);return{c(){o&&o.c()},m(i,l){o&&o.m(i,l),e=!0},p(i,l){o&&o.p&&(!e||l&262168)&&it(o,t,i,i[18],e?ot(t,i[18],l,pa):lt(i[18]),mo)},i(i){e||(P(o,i),e=!0)},o(i){A(o,i),e=!1},d(i){o&&o.d(i)}}}function ha(n){let e,t,o;const i=[{location:n[3]},{navigate:n[10]},rn?Pe(n[9]):n[4],n[11]];var l=n[0];function a(s){let c={};for(let r=0;r<i.length;r+=1)c=dn(c,i[r]);return{props:c}}return l&&(e=new l(a())),{c(){e&&Q(e.$$.fragment),t=at()},m(s,c){e&&G(e,s,c),f(s,t,c),o=!0},p(s,c){const r=c&3608?Zo(i,[c&8&&{location:s[3]},c&1024&&{navigate:s[10]},c&528&&io(rn?Pe(s[9]):s[4]),c&2048&&io(s[11])]):{};if(l!==(l=s[0])){if(e){hn();const b=e;A(b.$$.fragment,1,0,()=>{W(b,1)}),gn()}l?(e=new l(a()),Q(e.$$.fragment),P(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else l&&e.$set(r)},i(s){o||(e&&P(e.$$.fragment,s),o=!0)},o(s){e&&A(e.$$.fragment,s),o=!1},d(s){s&&u(t),e&&W(e,s)}}}function ga(n){let e,t,o,i;const l=[ha,da],a=[];function s(c,r){return c[0]!==null?0:1}return e=s(n),t=a[e]=l[e](n),{c(){t.c(),o=at()},m(c,r){a[e].m(c,r),f(c,o,r),i=!0},p(c,r){let b=e;e=s(c),e===b?a[e].p(c,r):(hn(),A(a[b],1,1,()=>{a[b]=null}),gn(),t=a[e],t?t.p(c,r):(t=a[e]=l[e](c),t.c()),P(t,1),t.m(o.parentNode,o))},i(c){i||(P(t),i=!0)},o(c){A(t),i=!1},d(c){a[e].d(c),c&&u(o)}}}function va(n){let e,t,o,i,l,a=n[2]&&po(n);return{c(){e=d("div"),t=y(),a&&a.c(),o=y(),i=d("div"),wt(e,"display","none"),T(e,"aria-hidden","true"),T(e,"data-svnav-route-start",n[5]),wt(i,"display","none"),T(i,"aria-hidden","true"),T(i,"data-svnav-route-end",n[5])},m(s,c){f(s,e,c),f(s,t,c),a&&a.m(s,c),f(s,o,c),f(s,i,c),l=!0},p(s,[c]){s[2]?a?(a.p(s,c),c&4&&P(a,1)):(a=po(s),a.c(),P(a,1),a.m(o.parentNode,o)):a&&(hn(),A(a,1,1,()=>{a=null}),gn())},i(s){l||(P(a),l=!0)},o(s){A(a),l=!1},d(s){s&&u(e),s&&u(t),a&&a.d(s),s&&u(o),s&&u(i)}}}const ka=ii();function _a(n,e,t){let o;const i=["path","component","meta","primary"];let l=et(e,i),a,s,c,r,{$$slots:b={},$$scope:h}=e,{path:_=""}=e,{component:g=null}=e,{meta:m={}}=e,{primary:w=!0}=e;Cn(Dn,e);const v=ka(),{registerRoute:C,unregisterRoute:I,activeRoute:O}=en(Sn);Oe(n,O,H=>t(15,a=H));const q=$i();Oe(n,q,H=>t(16,c=H));const j=Nt();Oe(n,j,H=>t(3,s=H));const R=Me(null);let B;const U=Me(),F=Me({});Oe(n,F,H=>t(4,r=H)),qn(qt,U),qn(Es,F),qn(si,R);const K=ba();return rn||Wo(()=>I(v)),n.$$set=H=>{t(23,e=dn(dn({},e),Zn(H))),t(11,l=et(e,i)),"path"in H&&t(12,_=H.path),"component"in H&&t(0,g=H.component),"meta"in H&&t(13,m=H.meta),"primary"in H&&t(1,w=H.primary),"$$scope"in H&&t(18,h=H.$$scope)},n.$$.update=()=>{if(n.$$.dirty&77834){const H=_==="",J=Bn(c,_),le={id:v,path:_,meta:m,default:H,fullPath:H?"":J,base:H?c:Ds(J,s.pathname),primary:w,focusElement:R};U.set(le),t(14,B=C(le))}if(n.$$.dirty&49152&&t(2,o=!!(B||a&&a.id===v)),n.$$.dirty&49156&&o){const{params:H}=B||a;F.set(H)}},e=Zn(e),[g,w,o,s,r,v,O,q,j,F,K,l,_,m,B,a,c,b,h]}class wa extends tn{constructor(e){super(),nn(this,e,_a,va,De,{path:12,component:0,meta:13,primary:1})}}function ya(n){let e,t,o,i;const l=n[13].default,a=tt(l,n,n[12],null);let s=[{href:n[0]},n[2],n[1]],c={};for(let r=0;r<s.length;r+=1)c=dn(c,s[r]);return{c(){e=d("a"),a&&a.c(),to(e,c)},m(r,b){f(r,e,b),a&&a.m(e,null),t=!0,o||(i=ee(e,"click",n[4]),o=!0)},p(r,[b]){a&&a.p&&(!t||b&4096)&&it(a,l,r,r[12],t?ot(l,r[12],b,null):lt(r[12]),null),to(e,c=Zo(s,[(!t||b&1)&&{href:r[0]},b&4&&r[2],b&2&&r[1]]))},i(r){t||(P(a,r),t=!0)},o(r){A(a,r),t=!1},d(r){r&&u(e),a&&a.d(r),o=!1,i()}}}function $a(n,e,t){let o,i,l,a,s;const c=["to","replace","state","getProps"];let r=et(e,c),b,{$$slots:h={},$$scope:_}=e,{to:g}=e,{replace:m=!1}=e,{state:w={}}=e,{getProps:v=null}=e;Cn(It,e);const C=Nt();Oe(n,C,R=>t(11,b=R));const I=ms(),O=xi(),{navigate:q}=yi();function j(R){I("click",R),$s(R)&&(R.preventDefault(),q(o,{state:w,replace:l||m}))}return n.$$set=R=>{t(18,e=dn(dn({},e),Zn(R))),t(17,r=et(e,c)),"to"in R&&t(5,g=R.to),"replace"in R&&t(6,m=R.replace),"state"in R&&t(7,w=R.state),"getProps"in R&&t(8,v=R.getProps),"$$scope"in R&&t(12,_=R.$$scope)},n.$$.update=()=>{n.$$.dirty&2080&&t(0,o=O(g,b)),n.$$.dirty&2049&&t(10,i=Ct(b.pathname,o)),n.$$.dirty&2049&&t(9,l=o===b.pathname),n.$$.dirty&512&&t(2,a=l?{"aria-current":"page"}:{}),t(1,s=(()=>{if(ti(v)){const R=v({location:b,href:o,isPartiallyCurrent:i,isCurrent:l});return ln(ln({},r),R)}return r})())},e=Zn(e),[o,s,a,C,j,g,m,w,v,l,i,b,_,h]}class je extends tn{constructor(e){super(),nn(this,e,$a,ya,De,{to:5,replace:6,state:7,getProps:8})}}function xa(){try{return ma()}catch{return()=>({})}}var Lt="/assets/slithe.ea6f755b.svg";function Ea(n){let e,t,o,i,l,a,s,c,r,b,h,_,g,m,w,v,C,I,O,q,j,R,B,U,F,K,H,J,le,fe,be,we,ve,me,M,Y,D,qe,pe,Ce,ke,xe,Ee,re,L,ue,de,te,Ae,Ie,he,on=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,Se,Fe,Te,Ne,ye,ze,Re,Z,$e,p,E,se,S,z,Le,Xe,Je,Ue,_n,un,fn,wn,Ln;return{c(){e=d("h1"),e.textContent="Headings",t=y(),o=d("h2"),o.textContent="Test211",i=y(),l=d("h3"),l.textContent="Test2111",a=y(),s=d("h4"),s.textContent="Test21111",c=y(),r=d("h5"),r.textContent="Test211111",b=y(),h=d("h6"),h.textContent="Test2111111",_=y(),g=d("h6"),g.textContent="Test2111112",m=y(),w=d("h1"),w.textContent="Emphasis",v=y(),C=d("p"),C.innerHTML="Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.",I=y(),O=d("p"),O.innerHTML="Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.",q=y(),j=d("p"),j.innerHTML="Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.",R=y(),B=d("p"),B.innerHTML="Strikethrough uses two tildes. <del>Scratch this.</del>",U=y(),F=d("h1"),F.textContent="Lists",K=y(),H=d("ul"),H.innerHTML=`<li>One</li> 
<li>Two</li> 
<li>Three</li>`,J=y(),le=d("ol"),le.innerHTML=`<li>One</li> 
<li>Two</li> 
<li>Three</li>`,fe=y(),be=d("h1"),be.textContent="Links",we=y(),ve=d("p"),ve.innerHTML='<a href="https://www.google.com" title="Google&#39;s Homepage" rel="nofollow">I\u2019m an inline-style link with title</a>',me=y(),M=d("h1"),M.textContent="Images",Y=y(),D=d("img"),pe=y(),Ce=d("sl-icon"),ke=y(),xe=d("sl-icon"),Ee=y(),re=d("sl-icon"),ue=y(),de=d("h1"),de.textContent="Syntax",te=y(),Ae=d("p"),Ae.innerHTML="Inline <code>code</code> text.",Ie=y(),he=d("pre"),Se=y(),Fe=d("h1"),Fe.textContent="Tables",Te=y(),Ne=d("table"),Ne.innerHTML=`<thead><tr><th>Markdown</th> 
<th>Less</th> 
<th>Pretty</th></tr></thead> 
<tbody><tr><td><em>Still</em></td> 
<td><code>renders</code></td> 
<td><strong>nicely</strong></td></tr> 
<tr><td>1</td> 
<td>2</td> 
<td>3</td></tr></tbody>`,ye=y(),ze=d("h1"),ze.textContent="Blockquotes",Re=y(),Z=d("blockquote"),Z.innerHTML=`<p>Blockquotes are very handy in email to emulate reply text.
This line is part of the same quote.</p>`,$e=y(),p=d("p"),p.textContent="Quote break.",E=y(),se=d("blockquote"),se.innerHTML="<p>This is a very long line that will still be quoted properly when it wraps. Oh boy let\u2019s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em>  <strong>Markdown</strong> into a blockquote.</p>",S=y(),z=d("h1"),z.textContent="Separators",Le=y(),Xe=d("hr"),Je=y(),Ue=d("h1"),Ue.textContent="Custom",_n=y(),un=d("p"),fn=d("sl-button"),fn.textContent="aaaaa",Jn(D.src,qe=Lt)||T(D,"src",qe),T(D,"alt","Slithe Icon"),T(D,"title","Slithe Icon"),V(Ce,"name","github"),V(Ce,"size","19"),V(xe,"name","activity"),V(xe,"size","19"),Jn(re.src,L=Lt)||V(re,"src",L),V(re,"size","19"),T(he,"class","language-html")},m(k,x){f(k,e,x),f(k,t,x),f(k,o,x),f(k,i,x),f(k,l,x),f(k,a,x),f(k,s,x),f(k,c,x),f(k,r,x),f(k,b,x),f(k,h,x),f(k,_,x),f(k,g,x),f(k,m,x),f(k,w,x),f(k,v,x),f(k,C,x),f(k,I,x),f(k,O,x),f(k,q,x),f(k,j,x),f(k,R,x),f(k,B,x),f(k,U,x),f(k,F,x),f(k,K,x),f(k,H,x),f(k,J,x),f(k,le,x),f(k,fe,x),f(k,be,x),f(k,we,x),f(k,ve,x),f(k,me,x),f(k,M,x),f(k,Y,x),f(k,D,x),f(k,pe,x),f(k,Ce,x),f(k,ke,x),f(k,xe,x),f(k,Ee,x),f(k,re,x),f(k,ue,x),f(k,de,x),f(k,te,x),f(k,Ae,x),f(k,Ie,x),f(k,he,x),he.innerHTML=on,f(k,Se,x),f(k,Fe,x),f(k,Te,x),f(k,Ne,x),f(k,ye,x),f(k,ze,x),f(k,Re,x),f(k,Z,x),f(k,$e,x),f(k,p,x),f(k,E,x),f(k,se,x),f(k,S,x),f(k,z,x),f(k,Le,x),f(k,Xe,x),f(k,Je,x),f(k,Ue,x),f(k,_n,x),f(k,un,x),$(un,fn),wn||(Ln=st(n[0].call(null,fn)),wn=!0)},p:ie,i:ie,o:ie,d(k){k&&u(e),k&&u(t),k&&u(o),k&&u(i),k&&u(l),k&&u(a),k&&u(s),k&&u(c),k&&u(r),k&&u(b),k&&u(h),k&&u(_),k&&u(g),k&&u(m),k&&u(w),k&&u(v),k&&u(C),k&&u(I),k&&u(O),k&&u(q),k&&u(j),k&&u(R),k&&u(B),k&&u(U),k&&u(F),k&&u(K),k&&u(H),k&&u(J),k&&u(le),k&&u(fe),k&&u(be),k&&u(we),k&&u(ve),k&&u(me),k&&u(M),k&&u(Y),k&&u(D),k&&u(pe),k&&u(Ce),k&&u(ke),k&&u(xe),k&&u(Ee),k&&u(re),k&&u(ue),k&&u(de),k&&u(te),k&&u(Ae),k&&u(Ie),k&&u(he),k&&u(Se),k&&u(Fe),k&&u(Te),k&&u(Ne),k&&u(ye),k&&u(ze),k&&u(Re),k&&u(Z),k&&u($e),k&&u(p),k&&u(E),k&&u(se),k&&u(S),k&&u(z),k&&u(Le),k&&u(Xe),k&&u(Je),k&&u(Ue),k&&u(_n),k&&u(un),wn=!1,Ln()}}}const Ta={title:"Slithe - Introduction"};function Sa(n){return[xa()]}class Ca extends tn{constructor(e){super(),nn(this,e,Sa,Ea,De,{})}}function dt(n){let e;return{c(){e=d("sl-button"),e.textContent="test"},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function La(n){let e,t,o,i,l="sl-button",a,s,c,r,b=dt();return{c(){e=d("h1"),e.textContent="Test1",t=y(),o=d("h3"),o.textContent="Test11",i=y(),b&&b.c(),a=y(),s=d("p"),s.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus adipisci esse inventore nostrum officiis minima alias possimus cumque, assumenda exercitationem facilis nam voluptate minus dolore! Nobis neque animi nisi.",c=y(),r=d("sl-tree"),r.innerHTML="<sl-tree-item><span>test</span></sl-tree-item>"},m(h,_){f(h,e,_),f(h,t,_),f(h,o,_),f(h,i,_),b&&b.m(h,_),f(h,a,_),f(h,s,_),f(h,c,_),f(h,r,_)},p(h,[_]){l?De(l,"sl-button")?(b.d(1),b=dt(),b.c(),b.m(a.parentNode,a)):b.p(h,_):(b=dt(),b.c(),b.m(a.parentNode,a)),l="sl-button"},i:ie,o:ie,d(h){h&&u(e),h&&u(t),h&&u(o),h&&u(i),b&&b.d(h),h&&u(a),h&&u(s),h&&u(c),h&&u(r)}}}const Oa={title:"Slithe - Accessibility"};class Ma extends tn{constructor(e){super(),nn(this,e,null,La,De,{})}}async function $n(n=1){return new Promise(e=>{setTimeout(()=>{e()},n)})}function jt(n){const e=t=>{n.contains(t.target)||n.dispatchEvent(new CustomEvent("clickoutside",{detail:t}))};return document.addEventListener("click",e),{destroy(){document.removeEventListener("click",e)}}}function ho(n){let e,t,o;return{c(){e=d("div"),t=d("span"),o=ne(n[0]),T(e,"class","label title svelte-1lghh9")},m(i,l){f(i,e,l),$(e,t),$(t,o)},p(i,l){l&1&&Ke(o,i[0])},d(i){i&&u(e)}}}function go(n){let e,t,o,i,l,a,s,c,r,b,h,_,g,m,w,v,C,I,O,q,j,R,B,U;return{c(){e=d("sl-card"),t=d("div"),o=d("div"),i=d("span"),i.textContent="Vanilla",l=y(),a=d("ul"),s=d("li"),c=d("button"),r=y(),b=d("li"),h=d("button"),_=y(),g=d("div"),m=d("span"),m.textContent="Primer",w=y(),v=d("ul"),C=d("li"),I=d("button"),O=y(),q=d("li"),j=d("button"),T(i,"class","svelte-1lghh9"),T(c,"class","theme-item vanilla-light svelte-1lghh9"),X(c,"active",n[3]==="vanilla-light"),T(s,"class","svelte-1lghh9"),T(h,"class","theme-item vanilla-dark svelte-1lghh9"),X(h,"active",n[3]==="vanilla-dark"),T(b,"class","svelte-1lghh9"),T(a,"class","svelte-1lghh9"),T(o,"class","theme-row svelte-1lghh9"),T(m,"class","svelte-1lghh9"),T(I,"class","theme-item primer-light svelte-1lghh9"),X(I,"active",n[3]==="primer-light"),T(C,"class","svelte-1lghh9"),T(j,"class","theme-item primer-dark svelte-1lghh9"),X(j,"active",n[3]==="primer-dark"),T(q,"class","svelte-1lghh9"),T(v,"class","svelte-1lghh9"),T(g,"class","theme-row svelte-1lghh9"),T(t,"class","theme-list svelte-1lghh9"),V(e,"class","theme-picker-container svelte-1lghh9")},m(F,K){f(F,e,K),$(e,t),$(t,o),$(o,i),$(o,l),$(o,a),$(a,s),$(s,c),$(a,r),$(a,b),$(b,h),$(t,_),$(t,g),$(g,m),$(g,w),$(g,v),$(v,C),$(C,I),$(v,O),$(v,q),$(q,j),B||(U=[ee(c,"click",n[10]),ee(h,"click",n[11]),ee(I,"click",n[12]),ee(j,"click",n[13]),st(R=jt.call(null,e)),ee(e,"clickoutside",n[6])],B=!0)},p(F,K){K&8&&X(c,"active",F[3]==="vanilla-light"),K&8&&X(h,"active",F[3]==="vanilla-dark"),K&8&&X(I,"active",F[3]==="primer-light"),K&8&&X(j,"active",F[3]==="primer-dark")},d(F){F&&u(e),B=!1,Qe(U)}}}function za(n){let e,t,o,i,l,a,s,c,r,b;const h=n[8].default,_=tt(h,n,n[7],null);let g=n[0]&&ho(n),m=n[1]&&go(n);return{c(){e=d("div"),_&&_.c(),t=y(),g&&g.c(),o=y(),i=d("div"),l=d("sl-icon"),a=y(),s=d("sl-rel"),m&&m.c(),V(l,"class","theme-picker-icon svelte-1lghh9"),V(l,"name","color-palette-outline"),V(l,"size",18),T(i,"class","label theme svelte-1lghh9"),T(e,"class","preview svelte-1lghh9")},m(w,v){f(w,e,v),_&&_.m(e,null),$(e,t),g&&g.m(e,null),$(e,o),$(e,i),$(i,l),n[9](l),$(i,a),$(i,s),m&&m.m(s,null),c=!0,r||(b=ee(l,"click",n[5]),r=!0)},p(w,[v]){_&&_.p&&(!c||v&128)&&it(_,h,w,w[7],c?ot(h,w[7],v,null):lt(w[7]),null),w[0]?g?g.p(w,v):(g=ho(w),g.c(),g.m(e,o)):g&&(g.d(1),g=null),w[1]?m?m.p(w,v):(m=go(w),m.c(),m.m(s,null)):m&&(m.d(1),m=null)},i(w){c||(P(_,w),c=!0)},o(w){A(_,w),c=!1},d(w){w&&u(e),_&&_.d(w),g&&g.d(),n[9](null),m&&m.d(),r=!1,b()}}}function Ra(n,e,t){let o,i;Oe(n,lo,O=>t(3,o=O)),Oe(n,Tt,O=>t(14,i=O));let{$$slots:l={},$$scope:a}=e,{title:s=void 0}=e,c=!1,r;function b(O,q){no(Tt,i=`primer-${O}`,i),no(lo,o=`${q}-${O}`,o),h()}function h(){var q;const O=document.querySelectorAll("div.preview");for(const j of O){const R=Array.from(j.querySelectorAll("*")).filter(B=>B.tagName.startsWith("SL-"));for(const B of R)(q=B.updateTheme)==null||q.call(B,{key:o,components:xt[o]})}}async function _(){await $n(),t(1,c=!c)}function g(O){r.contains(O.detail.target)||t(1,c=!1)}Ht(()=>{h()});function m(O){mn[O?"unshift":"push"](()=>{r=O,t(2,r)})}const w=()=>b("light","vanilla"),v=()=>b("dark","vanilla"),C=()=>b("light","primer"),I=()=>b("dark","primer");return n.$$set=O=>{"title"in O&&t(0,s=O.title),"$$scope"in O&&t(7,a=O.$$scope)},[s,c,r,o,b,_,g,a,l,m,w,v,C,I]}class sn extends tn{constructor(e){super(),nn(this,e,Ra,za,De,{title:0})}}function Pa(n){let e;return{c(){e=d("sl-button"),e.textContent="Button"},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function Ha(n){let e,t,o,i,l,a,s,c,r;return{c(){e=d("sl-button"),e.textContent="Default",t=y(),o=d("sl-button"),o.textContent="Primary",i=y(),l=d("sl-button"),l.textContent="Outline",a=y(),s=d("sl-button"),s.textContent="Danger",c=y(),r=d("sl-button"),r.textContent="Borderless",V(o,"primary",""),V(l,"outline",""),V(s,"danger",""),V(r,"borderless","")},m(b,h){f(b,e,h),f(b,t,h),f(b,o,h),f(b,i,h),f(b,l,h),f(b,a,h),f(b,s,h),f(b,c,h),f(b,r,h)},p:ie,d(b){b&&u(e),b&&u(t),b&&u(o),b&&u(i),b&&u(l),b&&u(a),b&&u(s),b&&u(c),b&&u(r)}}}function qa(n){let e,t,o,i,l;return{c(){e=d("sl-button"),e.textContent="Small",t=y(),o=d("sl-button"),o.textContent="Medium",i=y(),l=d("sl-button"),l.textContent="Large",V(e,"size","small"),V(o,"size","medium"),V(l,"size","large")},m(a,s){f(a,e,s),f(a,t,s),f(a,o,s),f(a,i,s),f(a,l,s)},p:ie,d(a){a&&u(e),a&&u(t),a&&u(o),a&&u(i),a&&u(l)}}}function Aa(n){let e,t,o;return{c(){e=d("sl-button"),e.textContent="Button",t=y(),o=d("sl-button"),o.textContent="Submit",V(e,"type","button"),V(o,"type","submit")},m(i,l){f(i,e,l),f(i,t,l),f(i,o,l)},p:ie,d(i){i&&u(e),i&&u(t),i&&u(o)}}}function Ia(n){let e;return{c(){e=d("sl-button"),e.textContent="Hover me!",V(e,"title","Great Tooltip")},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function Fa(n){let e;return{c(){e=d("sl-button"),e.textContent="Disabled",V(e,"disabled","")},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function Na(n){let e,t,o;return{c(){e=d("sl-button"),e.textContent="Click me!",V(e,"type","button")},m(i,l){f(i,e,l),t||(o=ee(e,"click",n[1]),t=!0)},p:ie,d(i){i&&u(e),t=!1,o()}}}function ja(n){let e,t,o,i,l,a,s,c,r,b,h,_,g,m,w,v,C,I=`<code class="language-html"><span class="token comment">&lt;!-- Variants --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">primary</span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>Outline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">borderless</span><span class="token punctuation">></span></span>Borderless<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- Size --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Medium<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,O,q,j,R,B,U,F,K,H,J,le,fe,be=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,we,ve,me,M,Y,D,qe,pe,Ce='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Great Tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>',ke,xe,Ee,re,L,ue,de,te,Ae='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>',Ie,he,on,Se,Fe,Te,Ne,ye,ze,Re,Z=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">'clicked!'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Click me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,$e;return s=new sn({props:{$$slots:{default:[Pa]},$$scope:{ctx:n}}}),g=new sn({props:{title:"Variants",$$slots:{default:[Ha]},$$scope:{ctx:n}}}),w=new sn({props:{title:"Sizes",$$slots:{default:[qa]},$$scope:{ctx:n}}}),J=new sn({props:{$$slots:{default:[Aa]},$$scope:{ctx:n}}}),D=new sn({props:{$$slots:{default:[Ia]},$$scope:{ctx:n}}}),ue=new sn({props:{$$slots:{default:[Fa]},$$scope:{ctx:n}}}),ye=new sn({props:{$$slots:{default:[Na]},$$scope:{ctx:n}}}),{c(){e=d("h1"),e.textContent="Button",t=y(),o=d("p"),o.innerHTML="A <code>sl-button</code> component is an interactive element that performs a programmable action when activated.",i=y(),l=d("p"),l.innerHTML="This component reflects and extends the behavior of the standard <code>button</code> element.",a=y(),Q(s.$$.fragment),c=y(),r=d("h2"),r.textContent="Modifiers",b=y(),h=d("p"),h.innerHTML="Adding those <code>boolean</code> attributes allows to modify the button styling.",_=y(),Q(g.$$.fragment),m=y(),Q(w.$$.fragment),v=y(),C=d("pre"),O=y(),q=d("h2"),q.textContent="Attributes",j=y(),R=d("h3"),R.textContent="Type",B=y(),U=d("p"),U.innerHTML="Modifies the button behavior, defaults to <code>button</code>.",F=y(),K=d("p"),K.innerHTML="When the button is inside a <code>&lt;form&gt;</code> element, use <code>type=&quot;submit&quot;</code> in order to submit the form.",H=y(),Q(J.$$.fragment),le=y(),fe=d("pre"),we=y(),ve=d("h3"),ve.textContent="Title",me=y(),M=d("p"),M.innerHTML="Adds extra information about the element, displayed as a <code>tooltip</code> when being hovered.",Y=y(),Q(D.$$.fragment),qe=y(),pe=d("pre"),ke=y(),xe=d("h3"),xe.textContent="Disabled",Ee=y(),re=d("p"),re.textContent="Makes the button non-interactable.",L=y(),Q(ue.$$.fragment),de=y(),te=d("pre"),Ie=y(),he=d("h2"),he.textContent="Events",on=y(),Se=d("h3"),Se.textContent="Click",Fe=y(),Te=d("p"),Te.textContent="Triggered when the user clicks on the element.",Ne=y(),Q(ye.$$.fragment),ze=y(),Re=d("pre"),T(C,"class","language-html"),T(fe,"class","language-html"),T(pe,"class","language-html"),T(te,"class","language-html"),T(Re,"class","language-html")},m(p,E){f(p,e,E),f(p,t,E),f(p,o,E),f(p,i,E),f(p,l,E),f(p,a,E),G(s,p,E),f(p,c,E),f(p,r,E),f(p,b,E),f(p,h,E),f(p,_,E),G(g,p,E),f(p,m,E),G(w,p,E),f(p,v,E),f(p,C,E),C.innerHTML=I,f(p,O,E),f(p,q,E),f(p,j,E),f(p,R,E),f(p,B,E),f(p,U,E),f(p,F,E),f(p,K,E),f(p,H,E),G(J,p,E),f(p,le,E),f(p,fe,E),fe.innerHTML=be,f(p,we,E),f(p,ve,E),f(p,me,E),f(p,M,E),f(p,Y,E),G(D,p,E),f(p,qe,E),f(p,pe,E),pe.innerHTML=Ce,f(p,ke,E),f(p,xe,E),f(p,Ee,E),f(p,re,E),f(p,L,E),G(ue,p,E),f(p,de,E),f(p,te,E),te.innerHTML=Ae,f(p,Ie,E),f(p,he,E),f(p,on,E),f(p,Se,E),f(p,Fe,E),f(p,Te,E),f(p,Ne,E),G(ye,p,E),f(p,ze,E),f(p,Re,E),Re.innerHTML=Z,$e=!0},p(p,[E]){const se={};E&4&&(se.$$scope={dirty:E,ctx:p}),s.$set(se);const S={};E&4&&(S.$$scope={dirty:E,ctx:p}),g.$set(S);const z={};E&4&&(z.$$scope={dirty:E,ctx:p}),w.$set(z);const Le={};E&4&&(Le.$$scope={dirty:E,ctx:p}),J.$set(Le);const Xe={};E&4&&(Xe.$$scope={dirty:E,ctx:p}),D.$set(Xe);const Je={};E&4&&(Je.$$scope={dirty:E,ctx:p}),ue.$set(Je);const Ue={};E&4&&(Ue.$$scope={dirty:E,ctx:p}),ye.$set(Ue)},i(p){$e||(P(s.$$.fragment,p),P(g.$$.fragment,p),P(w.$$.fragment,p),P(J.$$.fragment,p),P(D.$$.fragment,p),P(ue.$$.fragment,p),P(ye.$$.fragment,p),$e=!0)},o(p){A(s.$$.fragment,p),A(g.$$.fragment,p),A(w.$$.fragment,p),A(J.$$.fragment,p),A(D.$$.fragment,p),A(ue.$$.fragment,p),A(ye.$$.fragment,p),$e=!1},d(p){p&&u(e),p&&u(t),p&&u(o),p&&u(i),p&&u(l),p&&u(a),W(s,p),p&&u(c),p&&u(r),p&&u(b),p&&u(h),p&&u(_),W(g,p),p&&u(m),W(w,p),p&&u(v),p&&u(C),p&&u(O),p&&u(q),p&&u(j),p&&u(R),p&&u(B),p&&u(U),p&&u(F),p&&u(K),p&&u(H),W(J,p),p&&u(le),p&&u(fe),p&&u(we),p&&u(ve),p&&u(me),p&&u(M),p&&u(Y),W(D,p),p&&u(qe),p&&u(pe),p&&u(ke),p&&u(xe),p&&u(Ee),p&&u(re),p&&u(L),W(ue,p),p&&u(de),p&&u(te),p&&u(Ie),p&&u(he),p&&u(on),p&&u(Se),p&&u(Fe),p&&u(Te),p&&u(Ne),W(ye,p),p&&u(ze),p&&u(Re)}}}const Ba={title:"Slithe - Components - Button"};function Da(n){function e(o){Ko({type:"info",message:o})}return[e,()=>e("clicked!")]}class Ua extends tn{constructor(e){super(),nn(this,e,Da,ja,De,{})}}function Ka(n){let e,t,o,i,l;return{c(){e=ne("Press "),t=d("sl-kbd"),t.textContent="Ctrl",o=ne(" + "),i=d("sl-kbd"),i.textContent="B",l=ne(" to do something awesome.")},m(a,s){f(a,e,s),f(a,t,s),f(a,o,s),f(a,i,s),f(a,l,s)},p:ie,d(a){a&&u(e),a&&u(t),a&&u(o),a&&u(i),a&&u(l)}}}function Va(n){let e,t,o,i,l,a,s,c,r,b='<code class="language-html">Press <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-kbd</span><span class="token punctuation">></span></span>Ctrl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-kbd</span><span class="token punctuation">></span></span> + <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-kbd</span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-kbd</span><span class="token punctuation">></span></span> to do something awesome.</code>',h,_,g;return s=new sn({props:{$$slots:{default:[Ka]},$$scope:{ctx:n}}}),{c(){e=d("h1"),e.textContent="Keyboard",t=y(),o=d("p"),o.innerHTML="A <code>sl-kbd</code> component represents a text that describe keyboard inputs to trigger a specific action.",i=y(),l=d("p"),l.innerHTML="This component reflects and extends the behavior of the standard <code>kbd</code> element.",a=y(),Q(s.$$.fragment),c=y(),r=d("pre"),T(r,"class","language-html")},m(m,w){f(m,e,w),f(m,t,w),f(m,o,w),f(m,i,w),f(m,l,w),f(m,a,w),G(s,m,w),f(m,c,w),f(m,r,w),r.innerHTML=b,h=!0,_||(g=ee(window,"keydown",n[0]),_=!0)},p(m,[w]){const v={};w&2&&(v.$$scope={dirty:w,ctx:m}),s.$set(v)},i(m){h||(P(s.$$.fragment,m),h=!0)},o(m){A(s.$$.fragment,m),h=!1},d(m){m&&u(e),m&&u(t),m&&u(o),m&&u(i),m&&u(l),m&&u(a),W(s,m),m&&u(c),m&&u(r),_=!1,g()}}}const Ga={title:"Slithe - Components - Keyboard"};function Wa(n){function e(t){switch(t.key){case"b":{t.ctrlKey&&(t.preventDefault(),Ko({type:"info",message:"Actually that's just a toast..."}));break}}}return[e]}class Ya extends tn{constructor(e){super(),nn(this,e,Wa,Va,De,{})}}const Qa=history.pushState,an=[{path:"/",metadata:Ta,component:Ca},{path:"/accessibility",metadata:Oa,component:Ma},{path:"/components/button",metadata:Ba,component:Ua},{path:"/components/keyboard",metadata:Ga,component:Ya}],Ei=n=>{const e=document.createElement("div");e.innerHTML="";const t=new n.component({target:e});n.content=e.innerText.toLowerCase(),n.toc={};const o=e.querySelectorAll("h1,h2,h3,h4,h5,h6"),i=[];for(let l=0;l<o.length;l++)switch(o[l].tagName){case"H1":{const a={};i[0]=a,n.toc[o[l].textContent]=a;break}case"H2":{if(i[0]){const a={};i[1]=a,i[0][o[l].textContent]=a}else i.splice(0,i.length);break}case"H3":{if(i[1]){const a={};i[2]=a,i[1][o[l].textContent]=a}else i.splice(0,i.length);break}case"H4":{if(i[2]){const a={};i[3]=a,i[2][o[l].textContent]=a}else i.splice(0,i.length);break}case"H5":{if(i[3]){const a={};i[4]=a,i[3][o[l].textContent]=a}else i.splice(0,i.length);break}case"H6":{if(i[4]){const a={};i[5]=a,i[4][o[l].textContent]=a}else i.splice(0,i.length);break}}t.$destroy()},ht=(n=location.href.replace(location.origin,""))=>{const e=[...an].reverse().find(t=>n.startsWith(t.path));return e&&(e.content||Ei(e)),{path:n,page:e}},Xa=ei(ht(),n=>{history.pushState=function(){Qa.apply(history,arguments),n(ht())};const e=()=>{n(ht())};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}});async function Ja(n){const e=n.trim().toLowerCase();for(const t of an)t.content||Ei(t);if(e){const t=e.split(" "),o=an.filter(i=>(i.match="",t.every(l=>{const a=i.content.includes(l);if(a){const s=i.content.indexOf(l);return i.match+="..."+i.content.substring(s-10,s+50),a}})));for(const i of o)for(const l of t)i.match=i.match.replace(l,`<mark>${l}</mark>`);return o}else return Et.value.length?an.filter(t=>(delete t.match,Et.value.includes(t.path))):an.slice(0,5)}var Za="/assets/github.f2d5cf9e.svg";const{window:vo}=ds;function ko(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function _o(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function wo(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function yo(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function $o(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function xo(n,e,t){const o=n.slice();return o[42]=e[t][0],o}function Eo(n,e,t){const o=n.slice();return o[56]=e[t].path,o[57]=e[t].component,o}function To(n,e,t){const o=n.slice();return o[60]=e[t],o}function So(n){let e,t,o,i=n[1],l=[];for(let s=0;s<i.length;s+=1)l[s]=Lo(To(n,i,s));const a=s=>A(l[s],1,1,()=>{l[s]=null});return{c(){e=d("sl-card"),t=d("ul");for(let s=0;s<l.length;s+=1)l[s].c();T(t,"class","results-list"),V(e,"class","search-results"),X(e,"visible",n[9])},m(s,c){f(s,e,c),$(e,t);for(let r=0;r<l.length;r+=1)l[r].m(t,null);o=!0},p(s,c){if(c[0]&16386){i=s[1];let r;for(r=0;r<i.length;r+=1){const b=To(s,i,r);l[r]?(l[r].p(b,c),P(l[r],1)):(l[r]=Lo(b),l[r].c(),P(l[r],1),l[r].m(t,null))}for(hn(),r=i.length;r<l.length;r+=1)a(r);gn()}c[0]&512&&X(e,"visible",s[9])},i(s){if(!o){for(let c=0;c<i.length;c+=1)P(l[c]);o=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)A(l[c]);o=!1},d(s){s&&u(e),cn(l,s)}}}function Co(n){let e,t=n[60].match+"";return{c(){e=d("span"),T(e,"class","page-match")},m(o,i){f(o,e,i),e.innerHTML=t},p(o,i){i[0]&2&&t!==(t=o[60].match+"")&&(e.innerHTML=t)},d(o){o&&u(e)}}}function er(n){let e,t=n[60].path+"",o,i,l,a=n[60].metadata.title+"",s,c,r,b=n[60].match&&Co(n);return{c(){e=d("span"),o=ne(t),i=y(),l=d("h2"),s=ne(a),c=y(),b&&b.c(),r=at(),T(e,"class","page-path"),T(l,"class","page-title")},m(h,_){f(h,e,_),$(e,o),f(h,i,_),f(h,l,_),$(l,s),f(h,c,_),b&&b.m(h,_),f(h,r,_)},p(h,_){_[0]&2&&t!==(t=h[60].path+"")&&Ke(o,t),_[0]&2&&a!==(a=h[60].metadata.title+"")&&Ke(s,a),h[60].match?b?b.p(h,_):(b=Co(h),b.c(),b.m(r.parentNode,r)):b&&(b.d(1),b=null)},d(h){h&&u(e),h&&u(i),h&&u(l),h&&u(c),b&&b.d(h),h&&u(r)}}}function Lo(n){let e,t,o,i,l,a;t=new je({props:{class:"link",to:n[60].path,$$slots:{default:[er]},$$scope:{ctx:n}}});function s(){return n[24](n[60])}return{c(){e=d("li"),Q(t.$$.fragment),o=y()},m(c,r){f(c,e,r),G(t,e,null),$(e,o),i=!0,l||(a=ee(e,"click",s),l=!0)},p(c,r){n=c;const b={};r[0]&2&&(b.to=n[60].path),r[0]&2|r[2]&2&&(b.$$scope={dirty:r,ctx:n}),t.$set(b)},i(c){i||(P(t.$$.fragment,c),i=!0)},o(c){A(t.$$.fragment,c),i=!1},d(c){c&&u(e),W(t),l=!1,a()}}}function nr(n){let e;return{c(){e=ne("Introduction")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function tr(n){let e;return{c(){e=ne("Features")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function or(n){let e;return{c(){e=ne("Accessibility")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function ir(n){let e;return{c(){e=ne("Internationalization")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function lr(n){let e;return{c(){e=ne("Themes")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function sr(n){let e;return{c(){e=ne("Components")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function ar(n){let e;return{c(){e=ne("Button")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function rr(n){let e;return{c(){e=ne("Form")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function cr(n){let e;return{c(){e=ne("Input Text")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function ur(n){let e;return{c(){e=ne("Keyboard")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function fr(n){let e,t,o;var i=n[57];function l(a){return{}}return i&&(e=new i(l())),{c(){e&&Q(e.$$.fragment),t=y()},m(a,s){e&&G(e,a,s),f(a,t,s),o=!0},p(a,s){if(i!==(i=a[57])){if(e){hn();const c=e;A(c.$$.fragment,1,0,()=>{W(c,1)}),gn()}i?(e=new i(l()),Q(e.$$.fragment),P(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}},i(a){o||(e&&P(e.$$.fragment,a),o=!0)},o(a){e&&A(e.$$.fragment,a),o=!1},d(a){e&&W(e,a),a&&u(t)}}}function Oo(n){let e,t;return e=new wa({props:{path:n[56],$$slots:{default:[fr]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},m(o,i){G(e,o,i),t=!0},p(o,i){const l={};i[2]&2&&(l.$$scope={dirty:i,ctx:o}),e.$set(l)},i(o){t||(P(e.$$.fragment,o),t=!0)},o(o){A(e.$$.fragment,o),t=!1},d(o){W(e,o)}}}function Mo(n){let e,t,o,i,l,a=Object.entries(n[0].page.toc),s=[];for(let c=0;c<a.length;c+=1)s[c]=Ao(ko(n,a,c));return{c(){e=d("nav"),t=d("ul");for(let c=0;c<s.length;c+=1)s[c].c();T(e,"class","toc"),X(e,"fixed",n[5])},m(c,r){f(c,e,r),$(e,t);for(let b=0;b<s.length;b+=1)s[b].m(t,null);i||(l=[st(o=jt.call(null,e)),ee(e,"clickoutside",n[20])],i=!0)},p(c,r){if(r[0]&2129921){a=Object.entries(c[0].page.toc);let b;for(b=0;b<a.length;b+=1){const h=ko(c,a,b);s[b]?s[b].p(h,r):(s[b]=Ao(h),s[b].c(),s[b].m(t,null))}for(;b<s.length;b+=1)s[b].d(1);s.length=a.length}r[0]&32&&X(e,"fixed",c[5])},d(c){c&&u(e),cn(s,c),i=!1,Qe(l)}}}function zo(n){let e,t,o=n[42]+"",i,l,a,s,c;function r(){return n[33](n[42])}return{c(){e=d("li"),t=d("a"),i=ne(o),a=y(),T(t,"href",l="#"+n[42]),T(t,"class","link h6"),X(t,"active",n[21](n[42]))},m(b,h){f(b,e,h),$(e,t),$(t,i),$(e,a),s||(c=ee(t,"click",r),s=!0)},p(b,h){n=b,h[0]&1&&o!==(o=n[42]+"")&&Ke(i,o),h[0]&1&&l!==(l="#"+n[42])&&T(t,"href",l),h[0]&2097153&&X(t,"active",n[21](n[42]))},d(b){b&&u(e),s=!1,c()}}}function Ro(n){let e,t,o=n[42]+"",i,l,a,s,c,r,b;function h(){return n[32](n[42])}let _=Object.entries(n[43]),g=[];for(let m=0;m<_.length;m+=1)g[m]=zo(xo(n,_,m));return{c(){e=d("li"),t=d("a"),i=ne(o),a=y(),s=d("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=y(),T(t,"href",l="#"+n[42]),T(t,"class","link h5"),X(t,"active",n[21](n[42]))},m(m,w){f(m,e,w),$(e,t),$(t,i),$(e,a),$(e,s);for(let v=0;v<g.length;v+=1)g[v].m(s,null);$(e,c),r||(b=ee(t,"click",h),r=!0)},p(m,w){if(n=m,w[0]&1&&o!==(o=n[42]+"")&&Ke(i,o),w[0]&1&&l!==(l="#"+n[42])&&T(t,"href",l),w[0]&2097153&&X(t,"active",n[21](n[42])),w[0]&2129921){_=Object.entries(n[43]);let v;for(v=0;v<_.length;v+=1){const C=xo(n,_,v);g[v]?g[v].p(C,w):(g[v]=zo(C),g[v].c(),g[v].m(s,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=_.length}},d(m){m&&u(e),cn(g,m),r=!1,b()}}}function Po(n){let e,t,o=n[42]+"",i,l,a,s,c,r,b;function h(){return n[31](n[42])}let _=Object.entries(n[43]),g=[];for(let m=0;m<_.length;m+=1)g[m]=Ro($o(n,_,m));return{c(){e=d("li"),t=d("a"),i=ne(o),a=y(),s=d("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=y(),T(t,"href",l="#"+n[42]),T(t,"class","link h4"),X(t,"active",n[21](n[42]))},m(m,w){f(m,e,w),$(e,t),$(t,i),$(e,a),$(e,s);for(let v=0;v<g.length;v+=1)g[v].m(s,null);$(e,c),r||(b=ee(t,"click",h),r=!0)},p(m,w){if(n=m,w[0]&1&&o!==(o=n[42]+"")&&Ke(i,o),w[0]&1&&l!==(l="#"+n[42])&&T(t,"href",l),w[0]&2097153&&X(t,"active",n[21](n[42])),w[0]&2129921){_=Object.entries(n[43]);let v;for(v=0;v<_.length;v+=1){const C=$o(n,_,v);g[v]?g[v].p(C,w):(g[v]=Ro(C),g[v].c(),g[v].m(s,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=_.length}},d(m){m&&u(e),cn(g,m),r=!1,b()}}}function Ho(n){let e,t,o=n[42]+"",i,l,a,s,c,r,b;function h(){return n[30](n[42])}let _=Object.entries(n[43]),g=[];for(let m=0;m<_.length;m+=1)g[m]=Po(yo(n,_,m));return{c(){e=d("li"),t=d("a"),i=ne(o),a=y(),s=d("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=y(),T(t,"href",l="#"+n[42]),T(t,"class","link h3"),X(t,"active",n[21](n[42]))},m(m,w){f(m,e,w),$(e,t),$(t,i),$(e,a),$(e,s);for(let v=0;v<g.length;v+=1)g[v].m(s,null);$(e,c),r||(b=ee(t,"click",h),r=!0)},p(m,w){if(n=m,w[0]&1&&o!==(o=n[42]+"")&&Ke(i,o),w[0]&1&&l!==(l="#"+n[42])&&T(t,"href",l),w[0]&2097153&&X(t,"active",n[21](n[42])),w[0]&2129921){_=Object.entries(n[43]);let v;for(v=0;v<_.length;v+=1){const C=yo(n,_,v);g[v]?g[v].p(C,w):(g[v]=Po(C),g[v].c(),g[v].m(s,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=_.length}},d(m){m&&u(e),cn(g,m),r=!1,b()}}}function qo(n){let e,t,o=n[42]+"",i,l,a,s,c,r,b;function h(){return n[29](n[42])}let _=Object.entries(n[43]),g=[];for(let m=0;m<_.length;m+=1)g[m]=Ho(wo(n,_,m));return{c(){e=d("li"),t=d("a"),i=ne(o),a=y(),s=d("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=y(),T(t,"href",l="#"+n[42]),T(t,"class","link h2"),X(t,"active",n[21](n[42]))},m(m,w){f(m,e,w),$(e,t),$(t,i),$(e,a),$(e,s);for(let v=0;v<g.length;v+=1)g[v].m(s,null);$(e,c),r||(b=ee(t,"click",h),r=!0)},p(m,w){if(n=m,w[0]&1&&o!==(o=n[42]+"")&&Ke(i,o),w[0]&1&&l!==(l="#"+n[42])&&T(t,"href",l),w[0]&2097153&&X(t,"active",n[21](n[42])),w[0]&2129921){_=Object.entries(n[43]);let v;for(v=0;v<_.length;v+=1){const C=wo(n,_,v);g[v]?g[v].p(C,w):(g[v]=Ho(C),g[v].c(),g[v].m(s,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=_.length}},d(m){m&&u(e),cn(g,m),r=!1,b()}}}function Ao(n){let e,t,o=n[42]+"",i,l,a,s,c,r,b;function h(){return n[28](n[42])}let _=Object.entries(n[43]),g=[];for(let m=0;m<_.length;m+=1)g[m]=qo(_o(n,_,m));return{c(){e=d("li"),t=d("a"),i=ne(o),a=y(),s=d("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=y(),T(t,"href",l="#"+n[42]),T(t,"class","link h1"),X(t,"active",n[21](n[42]))},m(m,w){f(m,e,w),$(e,t),$(t,i),$(e,a),$(e,s);for(let v=0;v<g.length;v+=1)g[v].m(s,null);$(e,c),r||(b=ee(t,"click",h),r=!0)},p(m,w){if(n=m,w[0]&1&&o!==(o=n[42]+"")&&Ke(i,o),w[0]&1&&l!==(l="#"+n[42])&&T(t,"href",l),w[0]&2097153&&X(t,"active",n[21](n[42])),w[0]&2129921){_=Object.entries(n[43]);let v;for(v=0;v<_.length;v+=1){const C=_o(n,_,v);g[v]?g[v].p(C,w):(g[v]=qo(C),g[v].c(),g[v].m(s,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=_.length}},d(m){m&&u(e),cn(g,m),r=!1,b()}}}function br(n){let e,t,o,i,l,a,s,c,r,b,h,_,g,m,w,v,C,I,O,q,j,R,B,U,F,K,H,J,le,fe,be,we,ve,me,M,Y,D,qe,pe,Ce,ke,xe,Ee,re,L,ue,de,te,Ae,Ie,he,on,Se,Fe,Te,Ne,ye,ze,Re,Z=n[1].length>0&&So(n);j=new je({props:{class:"link",to:"/",$$slots:{default:[nr]},$$scope:{ctx:n}}}),U=new je({props:{class:"link",to:"/accessibility",$$slots:{default:[tr]},$$scope:{ctx:n}}}),J=new je({props:{class:"link",to:"/accessibility",$$slots:{default:[or]},$$scope:{ctx:n}}}),be=new je({props:{class:"link",to:"/internationalization",$$slots:{default:[ir]},$$scope:{ctx:n}}}),me=new je({props:{class:"link",to:"/themes",$$slots:{default:[lr]},$$scope:{ctx:n}}}),D=new je({props:{class:"link",to:"/components/button",$$slots:{default:[sr]},$$scope:{ctx:n}}}),ke=new je({props:{class:"link",to:"/components/button",$$slots:{default:[ar]},$$scope:{ctx:n}}}),re=new je({props:{class:"link",to:"/components/form/input-text",$$slots:{default:[rr]},$$scope:{ctx:n}}}),te=new je({props:{class:"link",to:"/components/form/input-text",$$slots:{default:[cr]},$$scope:{ctx:n}}}),he=new je({props:{class:"link",to:"/components/keyboard",$$slots:{default:[ur]},$$scope:{ctx:n}}});let $e=an,p=[];for(let S=0;S<$e.length;S+=1)p[S]=Oo(Eo(n,$e,S));const E=S=>A(p[S],1,1,()=>{p[S]=null});let se=n[0].page.toc&&Mo(n);return{c(){e=d("header"),t=d("sl-icon"),i=y(),l=d("span"),l.textContent="Slithe",a=y(),s=d("sl-input-text"),s.innerHTML=`<sl-icon slot="pre" name="search"></sl-icon> 
      <span slot="placeholder"><span>Search</span> 
        <sl-kbd>Ctrl</sl-kbd> 
        <sl-kbd>K</sl-kbd></span>`,c=y(),r=d("sl-rel"),Z&&Z.c(),b=y(),h=d("a"),_=d("sl-icon"),m=y(),w=d("div"),v=d("button"),v.innerHTML=`<sl-icon name="menu-outline" size="${30}"></sl-icon>`,C=y(),I=d("nav"),O=d("ul"),q=d("li"),Q(j.$$.fragment),R=y(),B=d("li"),Q(U.$$.fragment),F=y(),K=d("ul"),H=d("li"),Q(J.$$.fragment),le=y(),fe=d("li"),Q(be.$$.fragment),we=y(),ve=d("li"),Q(me.$$.fragment),M=y(),Y=d("li"),Q(D.$$.fragment),qe=y(),pe=d("ul"),Ce=d("li"),Q(ke.$$.fragment),xe=y(),Ee=d("li"),Q(re.$$.fragment),L=y(),ue=d("ul"),de=d("li"),Q(te.$$.fragment),Ae=y(),Ie=d("li"),Q(he.$$.fragment),on=y(),Se=d("main");for(let S=0;S<p.length;S+=1)p[S].c();Fe=y(),Te=d("button"),Te.innerHTML=`<sl-icon name="menu-arrow-outline" size="${30}"></sl-icon>`,Ne=y(),se&&se.c(),V(t,"class","slithe"),Jn(t.src,o=Lt)||V(t,"src",o),V(t,"size",50),T(l,"class","title"),Jn(_.src,g=Za)||V(_,"src",g),V(_,"size",30),T(h,"class","github"),T(h,"href","https://github.com/cadgerfeast/slithe"),T(h,"target","_blank"),T(v,"class","sidebar-opener"),T(I,"class","sidebar"),X(I,"fixed",n[4]),T(Te,"class","toc-opener"),T(w,"class","container")},m(S,z){f(S,e,z),$(e,t),$(e,i),$(e,l),$(e,a),$(e,s),n[23](s),$(e,c),$(e,r),Z&&Z.m(r,null),$(e,b),$(e,h),$(h,_),f(S,m,z),f(S,w,z),$(w,v),n[25](v),$(w,C),$(w,I),$(I,O),$(O,q),G(j,q,null),$(O,R),$(O,B),G(U,B,null),$(B,F),$(B,K),$(K,H),G(J,H,null),$(K,le),$(K,fe),G(be,fe,null),$(K,we),$(K,ve),G(me,ve,null),$(O,M),$(O,Y),G(D,Y,null),$(Y,qe),$(Y,pe),$(pe,Ce),G(ke,Ce,null),$(pe,xe),$(pe,Ee),G(re,Ee,null),$(Ee,L),$(Ee,ue),$(ue,de),G(te,de,null),$(pe,Ae),$(pe,Ie),G(he,Ie,null),$(w,on),$(w,Se);for(let Le=0;Le<p.length;Le+=1)p[Le].m(Se,null);n[26](Se),$(w,Fe),$(w,Te),n[27](Te),$(w,Ne),se&&se.m(w,null),ye=!0,ze||(Re=[ee(s,"input",n[16]),ee(s,"focus",n[10]),ee(s,"blur",n[11]),ee(v,"click",n[17]),st(jt.call(null,I)),ee(I,"clickoutside",n[18]),ee(Te,"click",n[19])],ze=!0)},p(S,z){S[1].length>0?Z?(Z.p(S,z),z[0]&2&&P(Z,1)):(Z=So(S),Z.c(),P(Z,1),Z.m(r,null)):Z&&(hn(),A(Z,1,1,()=>{Z=null}),gn());const Le={};z[2]&2&&(Le.$$scope={dirty:z,ctx:S}),j.$set(Le);const Xe={};z[2]&2&&(Xe.$$scope={dirty:z,ctx:S}),U.$set(Xe);const Je={};z[2]&2&&(Je.$$scope={dirty:z,ctx:S}),J.$set(Je);const Ue={};z[2]&2&&(Ue.$$scope={dirty:z,ctx:S}),be.$set(Ue);const _n={};z[2]&2&&(_n.$$scope={dirty:z,ctx:S}),me.$set(_n);const un={};z[2]&2&&(un.$$scope={dirty:z,ctx:S}),D.$set(un);const fn={};z[2]&2&&(fn.$$scope={dirty:z,ctx:S}),ke.$set(fn);const wn={};z[2]&2&&(wn.$$scope={dirty:z,ctx:S}),re.$set(wn);const Ln={};z[2]&2&&(Ln.$$scope={dirty:z,ctx:S}),te.$set(Ln);const k={};if(z[2]&2&&(k.$$scope={dirty:z,ctx:S}),he.$set(k),z[0]&16&&X(I,"fixed",S[4]),z&0){$e=an;let x;for(x=0;x<$e.length;x+=1){const Bt=Eo(S,$e,x);p[x]?(p[x].p(Bt,z),P(p[x],1)):(p[x]=Oo(Bt),p[x].c(),P(p[x],1),p[x].m(Se,null))}for(hn(),x=$e.length;x<p.length;x+=1)E(x);gn()}S[0].page.toc?se?se.p(S,z):(se=Mo(S),se.c(),se.m(w,null)):se&&(se.d(1),se=null)},i(S){if(!ye){P(Z),P(j.$$.fragment,S),P(U.$$.fragment,S),P(J.$$.fragment,S),P(be.$$.fragment,S),P(me.$$.fragment,S),P(D.$$.fragment,S),P(ke.$$.fragment,S),P(re.$$.fragment,S),P(te.$$.fragment,S),P(he.$$.fragment,S);for(let z=0;z<$e.length;z+=1)P(p[z]);ye=!0}},o(S){A(Z),A(j.$$.fragment,S),A(U.$$.fragment,S),A(J.$$.fragment,S),A(be.$$.fragment,S),A(me.$$.fragment,S),A(D.$$.fragment,S),A(ke.$$.fragment,S),A(re.$$.fragment,S),A(te.$$.fragment,S),A(he.$$.fragment,S),p=p.filter(Boolean);for(let z=0;z<p.length;z+=1)A(p[z]);ye=!1},d(S){S&&u(e),n[23](null),Z&&Z.d(),S&&u(m),S&&u(w),n[25](null),W(j),W(U),W(J),W(be),W(me),W(D),W(ke),W(re),W(te),W(he),cn(p,S),n[26](null),n[27](null),se&&se.d(),ze=!1,Qe(Re)}}}function mr(n){let e,t,o,i,l,a;return document.title=e=n[8],o=new wi({props:{$$slots:{default:[br]},$$scope:{ctx:n}}}),{c(){t=y(),Q(o.$$.fragment)},m(s,c){f(s,t,c),G(o,s,c),i=!0,l||(a=[ee(vo,"keydown",n[12]),ee(vo,"scroll",n[13])],l=!0)},p(s,c){(!i||c[0]&256)&&e!==(e=s[8])&&(document.title=e);const r={};c[0]&767|c[2]&2&&(r.$$scope={dirty:c,ctx:s}),o.$set(r)},i(s){i||(P(o.$$.fragment,s),i=!0)},o(s){A(o.$$.fragment,s),i=!1},d(s){s&&u(t),W(o,s),l=!1,Qe(a)}}}function pr(n,e,t){let o,i,l,a;Oe(n,Xa,L=>t(0,a=L));let s=location.pathname,c=[],r,b="",h=!1,_,g,m=!1,w=!1,v=!1,C,I;async function O(){s!==location.pathname&&(await $n(),window.scrollTo({top:0,behavior:"auto"}),s=location.pathname)}function q(){t(22,h=!0),be()}async function j(){await $n(100),t(22,h=!1)}function R(L){switch(L.key){case"k":{L.ctrlKey&&(L.preventDefault(),r.focus());break}}}async function B(){const L=Array.from(_.querySelectorAll("h1,h2,h3,h4,h5,h6"));let ue;for(const de of L){const te=de.getBoundingClientRect();te.top-te.height<=60&&(ue=de)}clearTimeout(g),g=setTimeout(()=>{m||location.replace(`#${ue.textContent}`),m=!1},100)}function U(L){Et.add(L.path)}function F(L){m=!0,we(`#${L}`)}function K(L){b=L.target.value,be()}async function H(){await $n(),t(4,w=!w)}function J(L){C.contains(L.detail.target)||t(4,w=!1)}async function le(){await $n(),t(5,v=!v)}function fe(L){I.contains(L.detail.target)||t(5,v=!1)}async function be(){t(1,c=await Ja(b))}function we(L,ue="smooth"){if(_){const de=L.split("#")[1];if(de){const te=Array.from(_.querySelectorAll("h1,h2,h3,h4,h5,h6")).find(Ae=>Ae.textContent===decodeURIComponent(de));if(te)return window.scrollTo({top:te.getBoundingClientRect().top+window.scrollY-80,behavior:ue}),!0}}return!1}function ve(L){return decodeURIComponent(i)===L}Ht(async()=>{we(a.path,"auto")||(await $n(),window.scrollTo({top:0,behavior:"auto"}))});function me(L){mn[L?"unshift":"push"](()=>{r=L,t(2,r)})}const M=L=>U(L);function Y(L){mn[L?"unshift":"push"](()=>{C=L,t(6,C)})}function D(L){mn[L?"unshift":"push"](()=>{_=L,t(3,_)})}function qe(L){mn[L?"unshift":"push"](()=>{I=L,t(7,I)})}const pe=L=>F(L),Ce=L=>F(L),ke=L=>F(L),xe=L=>F(L),Ee=L=>F(L),re=L=>F(L);return n.$$.update=()=>{n.$$.dirty[0]&4194304&&t(9,o=h&&an.length>0),n.$$.dirty[0]&1&&(i=a.path.split("#")[1]),n.$$.dirty[0]&1&&t(8,l=a.page.metadata.title||"Slithe"),n.$$.dirty[0]&1&&(a.path,O())},[a,c,r,_,w,v,C,I,l,o,q,j,R,B,U,F,K,H,J,le,fe,ve,h,me,M,Y,D,qe,pe,Ce,ke,xe,Ee,re]}class dr extends tn{constructor(e){super(),nn(this,e,pr,mr,De,{},null,[-1,-1,-1])}}var hr=`/* Host */
:host([sl-theme=primer-light]) {
  /* Override */
  --sl-button-background-color: var(--pr-aqua-haze);
  --sl-button-color: var(--pr-shark);
  --sl-button-border-color: rgba(27,31,36,0.15);
  --sl-button-hover-background-color: var(--pr-athens-gray);
  --sl-button-hover-border-color: rgba(27,31,36,0.15);
  --sl-button-active-background-color: var(--pr-clewd);
  --sl-button-active-border-color: rgba(27,31,36,0.15);
  /* Custom */
  --sl-button-outline-color: var(--pr-science-blue);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
}
:host([sl-theme=primer-dark]) {
  /* Override */
  --sl-button-border-radius: 6px;
  --sl-button-background-color: var(--pr-sibuya-game-reserve);
  --sl-button-color: var(--pr-karpa-kora);
  --sl-button-border-color: rgba(205,217,229,0.1);
  --sl-button-hover-background-color: var(--pr-dark-sea);
  --sl-button-hover-border-color: var(--pr-slate-gray);
  --sl-button-active-background-color: var(--pr-nothing-but-life);
  --sl-button-active-border-color: var(--pr-nevada);
  /* Custom */
  --sl-button-outline-color: var(--pr-cornflower-blue);
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;;
}
/* Primary */
:host([sl-theme=primer-light][primary]) {
  --sl-button-background-color: var(--pr-science-blue);
  --sl-button-color: var(--pr-white);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-border-color: rgba(205,217,229,0.1);
  --sl-button-hover-background-color: var(--pr-true-blue);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-active-background-color: var(--pr-endeavour);
  --sl-button-active-color: var(--pr-white);
  --sl-button-focus-box-shadow: inset 0 0 0 3px var(--sl-white);
}
:host([sl-theme=primer-dark][primary]) {
  --sl-button-background-color: var(--pr-endeavour);
  --sl-button-color: var(--pr-white);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-border-color: rgba(240,246,252,0.1);
  --sl-button-hover-background-color: var(--pr-true-blue);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-active-background-color: var(--pr-endeavour);
  --sl-button-active-color: var(--pr-white);
  --sl-button-focus-box-shadow: inset 0 0 0 3px var(--pr-white);
}
/* Outline */
:host([sl-theme=primer-light][outline]) {
  --sl-button-color: var(--pr-science-blue);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  --sl-button-hover-background-color: var(--pr-science-blue);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-hover-border-color: rgba(27,31,36,0.15);
  --sl-button-hover-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-active-background-color: var(--pr-true-blue);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: rgba(27,31,36,0.15);
  --sl-button-active-box-shadow: inset 0 1px 0 rgba(0,33,85,0.2);
}
:host([sl-theme=primer-dark][outline]) {
  --sl-button-color: var(--pr-cornflower-blue);
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: var(--pr-outer-space);
  --sl-button-hover-color: var(--pr-cornflower-blue);
  --sl-button-hover-border-color: rgba(240,246,252,0.1);
  --sl-button-hover-box-shadow: 0 1px 0 rgba(1,4,9,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-active-background-color: var(--pr-endeavour);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: rgba(240,246,252,0.1);
  --sl-button-active-box-shadow: 0 0 transparent;
}
/* Danger */
:host([sl-theme=primer-light][danger]) {
  --sl-button-color: var(--pr-cardinal);
  --sl-button-box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  --sl-button-hover-background-color: var(--pr-shiraz);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-hover-border-color: rgba(27,31,36,0.15);
  --sl-button-hover-box-shadow: 0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.03);
  --sl-button-active-background-color: var(--pr-miyamoto-red);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: rgba(27,31,36,0.15);
  --sl-button-active-box-shadow: inset 0 1px 0 rgba(76,0,20,0.2);
}
:host([sl-theme=primer-dark][danger]) {
  --sl-button-color: var(--pr-sunset-orange);
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: var(--pr-punch);
  --sl-button-hover-color: var(--pr-white);
  --sl-button-hover-border-color: var(--pr-sunset-orange);
  --sl-button-hover-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-active-background-color: var(--pr-tall-poppy);
  --sl-button-active-color: var(--pr-white);
  --sl-button-active-border-color: var(--pr-salmon);
  --sl-button-active-box-shadow: 0 0 transparent;
}
/* Borderless */
:host([sl-theme=primer-light][borderless]) {
  --sl-button-background-color: transparent;
  --sl-button-color: var(--pr-science-blue);
  --sl-button-border-color: transparent;
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: rgb(243, 244, 246);
  --sl-button-hover-color: var(--pr-science-blue);
  --sl-button-hover-border-color: transparent;
  --sl-button-active-background-color: rgb(238, 239, 242);
  --sl-button-active-color: var(--pr-science-blue);
  --sl-button-active-border-color: transparent;
}
:host([sl-theme=primer-dark][borderless]) {
  --sl-button-background-color: transparent;
  --sl-button-color: var(--pr-cornflower-blue);
  --sl-button-border-color: transparent;
  --sl-button-box-shadow: 0 0 transparent, 0 0 transparent;
  --sl-button-hover-background-color: rgb(68, 76, 86);
  --sl-button-hover-color: var(--pr-cornflower-blue);
  --sl-button-hover-border-color: transparent;
  --sl-button-active-background-color: rgb(45, 51, 59);
  --sl-button-active-color: var(--pr-cornflower-blue);
  --sl-button-active-border-color: transparent;
}
/* Button */
button {
  font-family: var(--pr-font-family);
  font-size: 14px;
  font-weight: 500;
  padding: 5px 16px;
  border-radius: 6px;
  box-shadow: var(--sl-button-box-shadow);
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
}
button.small {
  font-size: 12px;
  padding: 3px 12px;
}
button.large {
  font-size: 16px;
  padding: 9px 20px;
}
button:hover {
  color: var(--sl-button-hover-color, unset);
  border-color: var(--sl-button-hover-border-color, unset);
  box-shadow: var(--sl-button-hover-box-shadow, unset);
}
button:active {
  color: var(--sl-button-active-color, unset);
  border-color: var(--sl-button-active-border-color, unset);
  box-shadow: var(--sl-button-active-box-shadow, unset);
}
button:focus-visible {
  outline-color: var(--sl-button-outline-color);
  box-shadow: var(--sl-button-focus-box-shadow, unset);
}
`,gr=`*[sl-theme=primer-light] {
  --sl-card-border-color: var(--pr-regent-gray);
  --sl-card-border-radius: 4px;
}
`,vr=`div.sl-input-text {
  --sl-input-text-font-family: 'Fira Sans';
  --sl-input-text-border-color: var(--pr-regent-gray);
  --sl-input-text-border-radius: 16px;
  --sl-input-text-padding-top: 4px;
  --sl-input-text-padding-right: 4px;
  --sl-input-text-padding-bottom: 4px;
  --sl-input-text-padding-left: 4px;
  --sl-input-text-font-size: 14px;
  --sl-input-text-pre-color: var(--pr-pale-sky);
  --sl-input-text-placeholder-color: var(--pr-pale-sky);
  --sl-input-text-placeholder-font-size: 14px;
  --sl-input-text-focused-border-color: var(--pr-tundora);
}
`,kr=`i.sl-icon[name] {
  display: inline-block;
  transform: translate(0, 0);
  text-rendering: auto;
  font-family: 'Eva Icons';
  font-style: normal;
  vertical-align: middle;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
i.sl-icon[name="activity"]::before {
  content: "\\ea01";
}
i.sl-icon[name="activity-outline"]::before {
  content: "\\ea02";
}
i.sl-icon[name="alert-circle"]::before {
  content: "\\ea03";
}
i.sl-icon[name="alert-circle-outline"]::before {
  content: "\\ea04";
}
i.sl-icon[name="alert-triangle"]::before {
  content: "\\ea05";
}
i.sl-icon[name="alert-triangle-outline"]::before {
  content: "\\ea06";
}
i.sl-icon[name="archive"]::before {
  content: "\\ea07";
}
i.sl-icon[name="archive-outline"]::before {
  content: "\\ea08";
}
i.sl-icon[name="arrow-back"]::before {
  content: "\\ea09";
}
i.sl-icon[name="arrow-back-outline"]::before {
  content: "\\ea0a";
}
i.sl-icon[name="arrow-circle-down"]::before {
  content: "\\ea0b";
}
i.sl-icon[name="arrow-circle-down-outline"]::before {
  content: "\\ea0c";
}
i.sl-icon[name="arrow-circle-left"]::before {
  content: "\\ea0d";
}
i.sl-icon[name="arrow-circle-left-outline"]::before {
  content: "\\ea0e";
}
i.sl-icon[name="arrow-circle-right"]::before {
  content: "\\ea0f";
}
i.sl-icon[name="arrow-circle-right-outline"]::before {
  content: "\\ea10";
}
i.sl-icon[name="arrow-circle-up"]::before {
  content: "\\ea11";
}
i.sl-icon[name="arrow-circle-up-outline"]::before {
  content: "\\ea12";
}
i.sl-icon[name="arrow-down"]::before {
  content: "\\ea13";
}
i.sl-icon[name="arrow-down-outline"]::before {
  content: "\\ea14";
}
i.sl-icon[name="arrow-downward"]::before {
  content: "\\ea15";
}
i.sl-icon[name="arrow-downward-outline"]::before {
  content: "\\ea16";
}
i.sl-icon[name="arrow-forward"]::before {
  content: "\\ea17";
}
i.sl-icon[name="arrow-forward-outline"]::before {
  content: "\\ea18";
}
i.sl-icon[name="arrow-ios-back"]::before {
  content: "\\ea19";
}
i.sl-icon[name="arrow-ios-back-outline"]::before {
  content: "\\ea1a";
}
i.sl-icon[name="arrow-ios-downward"]::before {
  content: "\\ea1b";
}
i.sl-icon[name="arrow-ios-downward-outline"]::before {
  content: "\\ea1c";
}
i.sl-icon[name="arrow-ios-forward"]::before {
  content: "\\ea1d";
}
i.sl-icon[name="arrow-ios-forward-outline"]::before {
  content: "\\ea1e";
}
i.sl-icon[name="arrow-ios-upward"]::before {
  content: "\\ea1f";
}
i.sl-icon[name="arrow-ios-upward-outline"]::before {
  content: "\\ea20";
}
i.sl-icon[name="arrow-left"]::before {
  content: "\\ea21";
}
i.sl-icon[name="arrow-left-outline"]::before {
  content: "\\ea22";
}
i.sl-icon[name="arrow-right"]::before {
  content: "\\ea23";
}
i.sl-icon[name="arrow-right-outline"]::before {
  content: "\\ea24";
}
i.sl-icon[name="arrow-up"]::before {
  content: "\\ea25";
}
i.sl-icon[name="arrow-up-outline"]::before {
  content: "\\ea26";
}
i.sl-icon[name="arrow-upward"]::before {
  content: "\\ea27";
}
i.sl-icon[name="arrow-upward-outline"]::before {
  content: "\\ea28";
}
i.sl-icon[name="arrowhead-down"]::before {
  content: "\\ea29";
}
i.sl-icon[name="arrowhead-down-outline"]::before {
  content: "\\ea2a";
}
i.sl-icon[name="arrowhead-left"]::before {
  content: "\\ea2b";
}
i.sl-icon[name="arrowhead-left-outline"]::before {
  content: "\\ea2c";
}
i.sl-icon[name="arrowhead-right"]::before {
  content: "\\ea2d";
}
i.sl-icon[name="arrowhead-right-outline"]::before {
  content: "\\ea2e";
}
i.sl-icon[name="arrowhead-up"]::before {
  content: "\\ea2f";
}
i.sl-icon[name="arrowhead-up-outline"]::before {
  content: "\\ea30";
}
i.sl-icon[name="at"]::before {
  content: "\\ea31";
}
i.sl-icon[name="at-outline"]::before {
  content: "\\ea32";
}
i.sl-icon[name="attach"]::before {
  content: "\\ea33";
}
i.sl-icon[name="attach-2"]::before {
  content: "\\ea34";
}
i.sl-icon[name="attach-2-outline"]::before {
  content: "\\ea35";
}
i.sl-icon[name="attach-outline"]::before {
  content: "\\ea36";
}
i.sl-icon[name="award"]::before {
  content: "\\ea37";
}
i.sl-icon[name="award-outline"]::before {
  content: "\\ea38";
}
i.sl-icon[name="backspace"]::before {
  content: "\\ea39";
}
i.sl-icon[name="backspace-outline"]::before {
  content: "\\ea3a";
}
i.sl-icon[name="bar-chart"]::before {
  content: "\\ea3b";
}
i.sl-icon[name="bar-chart-2"]::before {
  content: "\\ea3c";
}
i.sl-icon[name="bar-chart-2-outline"]::before {
  content: "\\ea3d";
}
i.sl-icon[name="bar-chart-outline"]::before {
  content: "\\ea3e";
}
i.sl-icon[name="battery"]::before {
  content: "\\ea3f";
}
i.sl-icon[name="battery-outline"]::before {
  content: "\\ea40";
}
i.sl-icon[name="behance"]::before {
  content: "\\ea41";
}
i.sl-icon[name="behance-outline"]::before {
  content: "\\ea42";
}
i.sl-icon[name="bell"]::before {
  content: "\\ea43";
}
i.sl-icon[name="bell-off"]::before {
  content: "\\ea44";
}
i.sl-icon[name="bell-off-outline"]::before {
  content: "\\ea45";
}
i.sl-icon[name="bell-outline"]::before {
  content: "\\ea46";
}
i.sl-icon[name="bluetooth"]::before {
  content: "\\ea47";
}
i.sl-icon[name="bluetooth-outline"]::before {
  content: "\\ea48";
}
i.sl-icon[name="book"]::before {
  content: "\\ea49";
}
i.sl-icon[name="book-open"]::before {
  content: "\\ea4a";
}
i.sl-icon[name="book-open-outline"]::before {
  content: "\\ea4b";
}
i.sl-icon[name="book-outline"]::before {
  content: "\\ea4c";
}
i.sl-icon[name="bookmark"]::before {
  content: "\\ea4d";
}
i.sl-icon[name="bookmark-outline"]::before {
  content: "\\ea4e";
}
i.sl-icon[name="briefcase"]::before {
  content: "\\ea4f";
}
i.sl-icon[name="briefcase-outline"]::before {
  content: "\\ea50";
}
i.sl-icon[name="browser"]::before {
  content: "\\ea51";
}
i.sl-icon[name="browser-outline"]::before {
  content: "\\ea52";
}
i.sl-icon[name="brush"]::before {
  content: "\\ea53";
}
i.sl-icon[name="brush-outline"]::before {
  content: "\\ea54";
}
i.sl-icon[name="bulb"]::before {
  content: "\\ea55";
}
i.sl-icon[name="bulb-outline"]::before {
  content: "\\ea56";
}
i.sl-icon[name="calendar"]::before {
  content: "\\ea57";
}
i.sl-icon[name="calendar-outline"]::before {
  content: "\\ea58";
}
i.sl-icon[name="camera"]::before {
  content: "\\ea59";
}
i.sl-icon[name="camera-outline"]::before {
  content: "\\ea5a";
}
i.sl-icon[name="car"]::before {
  content: "\\ea5b";
}
i.sl-icon[name="car-outline"]::before {
  content: "\\ea5c";
}
i.sl-icon[name="cast"]::before {
  content: "\\ea5d";
}
i.sl-icon[name="cast-outline"]::before {
  content: "\\ea5e";
}
i.sl-icon[name="charging"]::before {
  content: "\\ea5f";
}
i.sl-icon[name="charging-outline"]::before {
  content: "\\ea60";
}
i.sl-icon[name="checkmark"]::before {
  content: "\\ea61";
}
i.sl-icon[name="checkmark-circle"]::before {
  content: "\\ea62";
}
i.sl-icon[name="checkmark-circle-2"]::before {
  content: "\\ea63";
}
i.sl-icon[name="checkmark-circle-2-outline"]::before {
  content: "\\ea64";
}
i.sl-icon[name="checkmark-circle-outline"]::before {
  content: "\\ea65";
}
i.sl-icon[name="checkmark-outline"]::before {
  content: "\\ea66";
}
i.sl-icon[name="checkmark-square"]::before {
  content: "\\ea67";
}
i.sl-icon[name="checkmark-square-2"]::before {
  content: "\\ea68";
}
i.sl-icon[name="checkmark-square-2-outline"]::before {
  content: "\\ea69";
}
i.sl-icon[name="checkmark-square-outline"]::before {
  content: "\\ea6a";
}
i.sl-icon[name="chevron-down"]::before {
  content: "\\ea6b";
}
i.sl-icon[name="chevron-down-outline"]::before {
  content: "\\ea6c";
}
i.sl-icon[name="chevron-left"]::before {
  content: "\\ea6d";
}
i.sl-icon[name="chevron-left-outline"]::before {
  content: "\\ea6e";
}
i.sl-icon[name="chevron-right"]::before {
  content: "\\ea6f";
}
i.sl-icon[name="chevron-right-outline"]::before {
  content: "\\ea70";
}
i.sl-icon[name="chevron-up"]::before {
  content: "\\ea71";
}
i.sl-icon[name="chevron-up-outline"]::before {
  content: "\\ea72";
}
i.sl-icon[name="clipboard"]::before {
  content: "\\ea73";
}
i.sl-icon[name="clipboard-outline"]::before {
  content: "\\ea74";
}
i.sl-icon[name="clock"]::before {
  content: "\\ea75";
}
i.sl-icon[name="clock-outline"]::before {
  content: "\\ea76";
}
i.sl-icon[name="close"]::before {
  content: "\\ea77";
}
i.sl-icon[name="close-circle"]::before {
  content: "\\ea78";
}
i.sl-icon[name="close-circle-outline"]::before {
  content: "\\ea79";
}
i.sl-icon[name="close-outline"]::before {
  content: "\\ea7a";
}
i.sl-icon[name="close-square"]::before {
  content: "\\ea7b";
}
i.sl-icon[name="close-square-outline"]::before {
  content: "\\ea7c";
}
i.sl-icon[name="cloud-download"]::before {
  content: "\\ea7d";
}
i.sl-icon[name="cloud-download-outline"]::before {
  content: "\\ea7e";
}
i.sl-icon[name="cloud-upload"]::before {
  content: "\\ea7f";
}
i.sl-icon[name="cloud-upload-outline"]::before {
  content: "\\ea80";
}
i.sl-icon[name="code"]::before {
  content: "\\ea81";
}
i.sl-icon[name="code-download"]::before {
  content: "\\ea82";
}
i.sl-icon[name="code-download-outline"]::before {
  content: "\\ea83";
}
i.sl-icon[name="code-outline"]::before {
  content: "\\ea84";
}
i.sl-icon[name="collapse"]::before {
  content: "\\ea85";
}
i.sl-icon[name="collapse-outline"]::before {
  content: "\\ea86";
}
i.sl-icon[name="color-palette"]::before {
  content: "\\ea87";
}
i.sl-icon[name="color-palette-outline"]::before {
  content: "\\ea88";
}
i.sl-icon[name="color-picker"]::before {
  content: "\\ea89";
}
i.sl-icon[name="color-picker-outline"]::before {
  content: "\\ea8a";
}
i.sl-icon[name="compass"]::before {
  content: "\\ea8b";
}
i.sl-icon[name="compass-outline"]::before {
  content: "\\ea8c";
}
i.sl-icon[name="copy"]::before {
  content: "\\ea8d";
}
i.sl-icon[name="copy-outline"]::before {
  content: "\\ea8e";
}
i.sl-icon[name="corner-down-left"]::before {
  content: "\\ea8f";
}
i.sl-icon[name="corner-down-left-outline"]::before {
  content: "\\ea90";
}
i.sl-icon[name="corner-down-right"]::before {
  content: "\\ea91";
}
i.sl-icon[name="corner-down-right-outline"]::before {
  content: "\\ea92";
}
i.sl-icon[name="corner-left-down"]::before {
  content: "\\ea93";
}
i.sl-icon[name="corner-left-down-outline"]::before {
  content: "\\ea94";
}
i.sl-icon[name="corner-left-up"]::before {
  content: "\\ea95";
}
i.sl-icon[name="corner-left-up-outline"]::before {
  content: "\\ea96";
}
i.sl-icon[name="corner-right-down"]::before {
  content: "\\ea97";
}
i.sl-icon[name="corner-right-down-outline"]::before {
  content: "\\ea98";
}
i.sl-icon[name="corner-right-up"]::before {
  content: "\\ea99";
}
i.sl-icon[name="corner-right-up-outline"]::before {
  content: "\\ea9a";
}
i.sl-icon[name="corner-up-left"]::before {
  content: "\\ea9b";
}
i.sl-icon[name="corner-up-left-outline"]::before {
  content: "\\ea9c";
}
i.sl-icon[name="corner-up-right"]::before {
  content: "\\ea9d";
}
i.sl-icon[name="corner-up-right-outline"]::before {
  content: "\\ea9e";
}
i.sl-icon[name="credit-card"]::before {
  content: "\\ea9f";
}
i.sl-icon[name="credit-card-outline"]::before {
  content: "\\eaa0";
}
i.sl-icon[name="crop"]::before {
  content: "\\eaa1";
}
i.sl-icon[name="crop-outline"]::before {
  content: "\\eaa2";
}
i.sl-icon[name="cube"]::before {
  content: "\\eaa3";
}
i.sl-icon[name="cube-outline"]::before {
  content: "\\eaa4";
}
i.sl-icon[name="diagonal-arrow-left-down"]::before {
  content: "\\eaa5";
}
i.sl-icon[name="diagonal-arrow-left-down-outline"]::before {
  content: "\\eaa6";
}
i.sl-icon[name="diagonal-arrow-left-up"]::before {
  content: "\\eaa7";
}
i.sl-icon[name="diagonal-arrow-left-up-outline"]::before {
  content: "\\eaa8";
}
i.sl-icon[name="diagonal-arrow-right-down"]::before {
  content: "\\eaa9";
}
i.sl-icon[name="diagonal-arrow-right-down-outline"]::before {
  content: "\\eaaa";
}
i.sl-icon[name="diagonal-arrow-right-up"]::before {
  content: "\\eaab";
}
i.sl-icon[name="diagonal-arrow-right-up-outline"]::before {
  content: "\\eaac";
}
i.sl-icon[name="done-all"]::before {
  content: "\\eaad";
}
i.sl-icon[name="done-all-outline"]::before {
  content: "\\eaae";
}
i.sl-icon[name="download"]::before {
  content: "\\eaaf";
}
i.sl-icon[name="download-outline"]::before {
  content: "\\eab0";
}
i.sl-icon[name="droplet"]::before {
  content: "\\eab1";
}
i.sl-icon[name="droplet-off"]::before {
  content: "\\eab2";
}
i.sl-icon[name="droplet-off-outline"]::before {
  content: "\\eab3";
}
i.sl-icon[name="droplet-outline"]::before {
  content: "\\eab4";
}
i.sl-icon[name="edit"]::before {
  content: "\\eab5";
}
i.sl-icon[name="edit-2"]::before {
  content: "\\eab6";
}
i.sl-icon[name="edit-2-outline"]::before {
  content: "\\eab7";
}
i.sl-icon[name="edit-outline"]::before {
  content: "\\eab8";
}
i.sl-icon[name="email"]::before {
  content: "\\eab9";
}
i.sl-icon[name="email-outline"]::before {
  content: "\\eaba";
}
i.sl-icon[name="expand"]::before {
  content: "\\eabb";
}
i.sl-icon[name="expand-outline"]::before {
  content: "\\eabc";
}
i.sl-icon[name="external-link"]::before {
  content: "\\eabd";
}
i.sl-icon[name="external-link-outline"]::before {
  content: "\\eabe";
}
i.sl-icon[name="eye"]::before {
  content: "\\eabf";
}
i.sl-icon[name="eye-off"]::before {
  content: "\\eac0";
}
i.sl-icon[name="eye-off-2"]::before {
  content: "\\eac1";
}
i.sl-icon[name="eye-off-2-outline"]::before {
  content: "\\eac2";
}
i.sl-icon[name="eye-off-outline"]::before {
  content: "\\eac3";
}
i.sl-icon[name="eye-outline"]::before {
  content: "\\eac4";
}
i.sl-icon[name="facebook"]::before {
  content: "\\eac5";
}
i.sl-icon[name="facebook-outline"]::before {
  content: "\\eac6";
}
i.sl-icon[name="file"]::before {
  content: "\\eac7";
}
i.sl-icon[name="file-add"]::before {
  content: "\\eac8";
}
i.sl-icon[name="file-add-outline"]::before {
  content: "\\eac9";
}
i.sl-icon[name="file-outline"]::before {
  content: "\\eaca";
}
i.sl-icon[name="file-remove"]::before {
  content: "\\eacb";
}
i.sl-icon[name="file-remove-outline"]::before {
  content: "\\eacc";
}
i.sl-icon[name="file-text"]::before {
  content: "\\eacd";
}
i.sl-icon[name="file-text-outline"]::before {
  content: "\\eace";
}
i.sl-icon[name="film"]::before {
  content: "\\eacf";
}
i.sl-icon[name="film-outline"]::before {
  content: "\\ead0";
}
i.sl-icon[name="flag"]::before {
  content: "\\ead1";
}
i.sl-icon[name="flag-outline"]::before {
  content: "\\ead2";
}
i.sl-icon[name="flash"]::before {
  content: "\\ead3";
}
i.sl-icon[name="flash-off"]::before {
  content: "\\ead4";
}
i.sl-icon[name="flash-off-outline"]::before {
  content: "\\ead5";
}
i.sl-icon[name="flash-outline"]::before {
  content: "\\ead6";
}
i.sl-icon[name="flip"]::before {
  content: "\\ead7";
}
i.sl-icon[name="flip-2"]::before {
  content: "\\ead8";
}
i.sl-icon[name="flip-2-outline"]::before {
  content: "\\ead9";
}
i.sl-icon[name="flip-outline"]::before {
  content: "\\eada";
}
i.sl-icon[name="folder"]::before {
  content: "\\eadb";
}
i.sl-icon[name="folder-add"]::before {
  content: "\\eadc";
}
i.sl-icon[name="folder-add-outline"]::before {
  content: "\\eadd";
}
i.sl-icon[name="folder-outline"]::before {
  content: "\\eade";
}
i.sl-icon[name="folder-remove"]::before {
  content: "\\eadf";
}
i.sl-icon[name="folder-remove-outline"]::before {
  content: "\\eae0";
}
i.sl-icon[name="funnel"]::before {
  content: "\\eae1";
}
i.sl-icon[name="funnel-outline"]::before {
  content: "\\eae2";
}
i.sl-icon[name="gift"]::before {
  content: "\\eae3";
}
i.sl-icon[name="gift-outline"]::before {
  content: "\\eae4";
}
i.sl-icon[name="github"]::before {
  content: "\\eae5";
}
i.sl-icon[name="github-outline"]::before {
  content: "\\eae6";
}
i.sl-icon[name="globe"]::before {
  content: "\\eae7";
}
i.sl-icon[name="globe-2"]::before {
  content: "\\eae8";
}
i.sl-icon[name="globe-2-outline"]::before {
  content: "\\eae9";
}
i.sl-icon[name="globe-3"]::before {
  content: "\\eaea";
}
i.sl-icon[name="globe-outline"]::before {
  content: "\\eaeb";
}
i.sl-icon[name="google"]::before {
  content: "\\eaec";
}
i.sl-icon[name="google-outline"]::before {
  content: "\\eaed";
}
i.sl-icon[name="grid"]::before {
  content: "\\eaee";
}
i.sl-icon[name="grid-outline"]::before {
  content: "\\eaef";
}
i.sl-icon[name="hard-drive"]::before {
  content: "\\eaf0";
}
i.sl-icon[name="hard-drive-outline"]::before {
  content: "\\eaf1";
}
i.sl-icon[name="hash"]::before {
  content: "\\eaf2";
}
i.sl-icon[name="hash-outline"]::before {
  content: "\\eaf3";
}
i.sl-icon[name="headphones"]::before {
  content: "\\eaf4";
}
i.sl-icon[name="headphones-outline"]::before {
  content: "\\eaf5";
}
i.sl-icon[name="heart"]::before {
  content: "\\eaf6";
}
i.sl-icon[name="heart-outline"]::before {
  content: "\\eaf7";
}
i.sl-icon[name="home"]::before {
  content: "\\eaf8";
}
i.sl-icon[name="home-outline"]::before {
  content: "\\eaf9";
}
i.sl-icon[name="image"]::before {
  content: "\\eafa";
}
i.sl-icon[name="image-2"]::before {
  content: "\\eafb";
}
i.sl-icon[name="image-outline"]::before {
  content: "\\eafc";
}
i.sl-icon[name="inbox"]::before {
  content: "\\eafd";
}
i.sl-icon[name="inbox-outline"]::before {
  content: "\\eafe";
}
i.sl-icon[name="info"]::before {
  content: "\\eaff";
}
i.sl-icon[name="info-outline"]::before {
  content: "\\eb00";
}
i.sl-icon[name="keypad"]::before {
  content: "\\eb01";
}
i.sl-icon[name="keypad-outline"]::before {
  content: "\\eb02";
}
i.sl-icon[name="layers"]::before {
  content: "\\eb03";
}
i.sl-icon[name="layers-outline"]::before {
  content: "\\eb04";
}
i.sl-icon[name="layout"]::before {
  content: "\\eb05";
}
i.sl-icon[name="layout-outline"]::before {
  content: "\\eb06";
}
i.sl-icon[name="link"]::before {
  content: "\\eb07";
}
i.sl-icon[name="link-2"]::before {
  content: "\\eb08";
}
i.sl-icon[name="link-2-outline"]::before {
  content: "\\eb09";
}
i.sl-icon[name="link-outline"]::before {
  content: "\\eb0a";
}
i.sl-icon[name="linkedin"]::before {
  content: "\\eb0b";
}
i.sl-icon[name="linkedin-outline"]::before {
  content: "\\eb0c";
}
i.sl-icon[name="list"]::before {
  content: "\\eb0d";
}
i.sl-icon[name="list-outline"]::before {
  content: "\\eb0e";
}
i.sl-icon[name="loader-outline"]::before {
  content: "\\eb0f";
}
i.sl-icon[name="lock"]::before {
  content: "\\eb10";
}
i.sl-icon[name="lock-outline"]::before {
  content: "\\eb11";
}
i.sl-icon[name="log-in"]::before {
  content: "\\eb12";
}
i.sl-icon[name="log-in-outline"]::before {
  content: "\\eb13";
}
i.sl-icon[name="log-out"]::before {
  content: "\\eb14";
}
i.sl-icon[name="log-out-outline"]::before {
  content: "\\eb15";
}
i.sl-icon[name="map"]::before {
  content: "\\eb16";
}
i.sl-icon[name="map-outline"]::before {
  content: "\\eb17";
}
i.sl-icon[name="maximize"]::before {
  content: "\\eb18";
}
i.sl-icon[name="maximize-outline"]::before {
  content: "\\eb19";
}
i.sl-icon[name="menu"]::before {
  content: "\\eb1a";
}
i.sl-icon[name="menu-2"]::before {
  content: "\\eb1b";
}
i.sl-icon[name="menu-2-outline"]::before {
  content: "\\eb1c";
}
i.sl-icon[name="menu-arrow"]::before {
  content: "\\eb1d";
}
i.sl-icon[name="menu-arrow-outline"]::before {
  content: "\\eb1e";
}
i.sl-icon[name="menu-outline"]::before {
  content: "\\eb1f";
}
i.sl-icon[name="message-circle"]::before {
  content: "\\eb20";
}
i.sl-icon[name="message-circle-outline"]::before {
  content: "\\eb21";
}
i.sl-icon[name="message-square"]::before {
  content: "\\eb22";
}
i.sl-icon[name="message-square-outline"]::before {
  content: "\\eb23";
}
i.sl-icon[name="mic"]::before {
  content: "\\eb24";
}
i.sl-icon[name="mic-off"]::before {
  content: "\\eb25";
}
i.sl-icon[name="mic-off-outline"]::before {
  content: "\\eb26";
}
i.sl-icon[name="mic-outline"]::before {
  content: "\\eb27";
}
i.sl-icon[name="minimize"]::before {
  content: "\\eb28";
}
i.sl-icon[name="minimize-outline"]::before {
  content: "\\eb29";
}
i.sl-icon[name="minus"]::before {
  content: "\\eb2a";
}
i.sl-icon[name="minus-circle"]::before {
  content: "\\eb2b";
}
i.sl-icon[name="minus-circle-outline"]::before {
  content: "\\eb2c";
}
i.sl-icon[name="minus-outline"]::before {
  content: "\\eb2d";
}
i.sl-icon[name="minus-square"]::before {
  content: "\\eb2e";
}
i.sl-icon[name="minus-square-outline"]::before {
  content: "\\eb2f";
}
i.sl-icon[name="monitor"]::before {
  content: "\\eb30";
}
i.sl-icon[name="monitor-outline"]::before {
  content: "\\eb31";
}
i.sl-icon[name="moon"]::before {
  content: "\\eb32";
}
i.sl-icon[name="moon-outline"]::before {
  content: "\\eb33";
}
i.sl-icon[name="more-horizontal"]::before {
  content: "\\eb34";
}
i.sl-icon[name="more-horizontal-outline"]::before {
  content: "\\eb35";
}
i.sl-icon[name="more-vertical"]::before {
  content: "\\eb36";
}
i.sl-icon[name="more-vertical-outline"]::before {
  content: "\\eb37";
}
i.sl-icon[name="move"]::before {
  content: "\\eb38";
}
i.sl-icon[name="move-outline"]::before {
  content: "\\eb39";
}
i.sl-icon[name="music"]::before {
  content: "\\eb3a";
}
i.sl-icon[name="music-outline"]::before {
  content: "\\eb3b";
}
i.sl-icon[name="navigation"]::before {
  content: "\\eb3c";
}
i.sl-icon[name="navigation-2"]::before {
  content: "\\eb3d";
}
i.sl-icon[name="navigation-2-outline"]::before {
  content: "\\eb3e";
}
i.sl-icon[name="navigation-outline"]::before {
  content: "\\eb3f";
}
i.sl-icon[name="npm"]::before {
  content: "\\eb40";
}
i.sl-icon[name="npm-outline"]::before {
  content: "\\eb41";
}
i.sl-icon[name="options"]::before {
  content: "\\eb42";
}
i.sl-icon[name="options-2"]::before {
  content: "\\eb43";
}
i.sl-icon[name="options-2-outline"]::before {
  content: "\\eb44";
}
i.sl-icon[name="options-outline"]::before {
  content: "\\eb45";
}
i.sl-icon[name="pantone"]::before {
  content: "\\eb46";
}
i.sl-icon[name="pantone-outline"]::before {
  content: "\\eb47";
}
i.sl-icon[name="paper-plane"]::before {
  content: "\\eb48";
}
i.sl-icon[name="paper-plane-outline"]::before {
  content: "\\eb49";
}
i.sl-icon[name="pause-circle"]::before {
  content: "\\eb4a";
}
i.sl-icon[name="pause-circle-outline"]::before {
  content: "\\eb4b";
}
i.sl-icon[name="people"]::before {
  content: "\\eb4c";
}
i.sl-icon[name="people-outline"]::before {
  content: "\\eb4d";
}
i.sl-icon[name="percent"]::before {
  content: "\\eb4e";
}
i.sl-icon[name="percent-outline"]::before {
  content: "\\eb4f";
}
i.sl-icon[name="person"]::before {
  content: "\\eb50";
}
i.sl-icon[name="person-add"]::before {
  content: "\\eb51";
}
i.sl-icon[name="person-add-outline"]::before {
  content: "\\eb52";
}
i.sl-icon[name="person-delete"]::before {
  content: "\\eb53";
}
i.sl-icon[name="person-delete-outline"]::before {
  content: "\\eb54";
}
i.sl-icon[name="person-done"]::before {
  content: "\\eb55";
}
i.sl-icon[name="person-done-outline"]::before {
  content: "\\eb56";
}
i.sl-icon[name="person-outline"]::before {
  content: "\\eb57";
}
i.sl-icon[name="person-remove"]::before {
  content: "\\eb58";
}
i.sl-icon[name="person-remove-outline"]::before {
  content: "\\eb59";
}
i.sl-icon[name="phone"]::before {
  content: "\\eb5a";
}
i.sl-icon[name="phone-call"]::before {
  content: "\\eb5b";
}
i.sl-icon[name="phone-call-outline"]::before {
  content: "\\eb5c";
}
i.sl-icon[name="phone-missed"]::before {
  content: "\\eb5d";
}
i.sl-icon[name="phone-missed-outline"]::before {
  content: "\\eb5e";
}
i.sl-icon[name="phone-off"]::before {
  content: "\\eb5f";
}
i.sl-icon[name="phone-off-outline"]::before {
  content: "\\eb60";
}
i.sl-icon[name="phone-outline"]::before {
  content: "\\eb61";
}
i.sl-icon[name="pie-chart"]::before {
  content: "\\eb62";
}
i.sl-icon[name="pie-chart-2"]::before {
  content: "\\eb63";
}
i.sl-icon[name="pie-chart-outline"]::before {
  content: "\\eb64";
}
i.sl-icon[name="pin"]::before {
  content: "\\eb65";
}
i.sl-icon[name="pin-outline"]::before {
  content: "\\eb66";
}
i.sl-icon[name="play-circle"]::before {
  content: "\\eb67";
}
i.sl-icon[name="play-circle-outline"]::before {
  content: "\\eb68";
}
i.sl-icon[name="plus"]::before {
  content: "\\eb69";
}
i.sl-icon[name="plus-circle"]::before {
  content: "\\eb6a";
}
i.sl-icon[name="plus-circle-outline"]::before {
  content: "\\eb6b";
}
i.sl-icon[name="plus-outline"]::before {
  content: "\\eb6c";
}
i.sl-icon[name="plus-square"]::before {
  content: "\\eb6d";
}
i.sl-icon[name="plus-square-outline"]::before {
  content: "\\eb6e";
}
i.sl-icon[name="power"]::before {
  content: "\\eb6f";
}
i.sl-icon[name="power-outline"]::before {
  content: "\\eb70";
}
i.sl-icon[name="pricetags"]::before {
  content: "\\eb71";
}
i.sl-icon[name="pricetags-outline"]::before {
  content: "\\eb72";
}
i.sl-icon[name="printer"]::before {
  content: "\\eb73";
}
i.sl-icon[name="printer-outline"]::before {
  content: "\\eb74";
}
i.sl-icon[name="question-mark"]::before {
  content: "\\eb75";
}
i.sl-icon[name="question-mark-circle"]::before {
  content: "\\eb76";
}
i.sl-icon[name="question-mark-circle-outline"]::before {
  content: "\\eb77";
}
i.sl-icon[name="question-mark-outline"]::before {
  content: "\\eb78";
}
i.sl-icon[name="radio"]::before {
  content: "\\eb79";
}
i.sl-icon[name="radio-button-off"]::before {
  content: "\\eb7a";
}
i.sl-icon[name="radio-button-off-outline"]::before {
  content: "\\eb7b";
}
i.sl-icon[name="radio-button-on"]::before {
  content: "\\eb7c";
}
i.sl-icon[name="radio-button-on-outline"]::before {
  content: "\\eb7d";
}
i.sl-icon[name="radio-outline"]::before {
  content: "\\eb7e";
}
i.sl-icon[name="recording"]::before {
  content: "\\eb7f";
}
i.sl-icon[name="recording-outline"]::before {
  content: "\\eb80";
}
i.sl-icon[name="refresh"]::before {
  content: "\\eb81";
}
i.sl-icon[name="refresh-outline"]::before {
  content: "\\eb82";
}
i.sl-icon[name="repeat"]::before {
  content: "\\eb83";
}
i.sl-icon[name="repeat-outline"]::before {
  content: "\\eb84";
}
i.sl-icon[name="rewind-left"]::before {
  content: "\\eb85";
}
i.sl-icon[name="rewind-left-outline"]::before {
  content: "\\eb86";
}
i.sl-icon[name="rewind-right"]::before {
  content: "\\eb87";
}
i.sl-icon[name="rewind-right-outline"]::before {
  content: "\\eb88";
}
i.sl-icon[name="save"]::before {
  content: "\\eb89";
}
i.sl-icon[name="save-outline"]::before {
  content: "\\eb8a";
}
i.sl-icon[name="scissors"]::before {
  content: "\\eb8b";
}
i.sl-icon[name="scissors-outline"]::before {
  content: "\\eb8c";
}
i.sl-icon[name="search"]::before {
  content: "\\eb8d";
}
i.sl-icon[name="search-outline"]::before {
  content: "\\eb8e";
}
i.sl-icon[name="settings"]::before {
  content: "\\eb8f";
}
i.sl-icon[name="settings-2"]::before {
  content: "\\eb90";
}
i.sl-icon[name="settings-2-outline"]::before {
  content: "\\eb91";
}
i.sl-icon[name="settings-outline"]::before {
  content: "\\eb92";
}
i.sl-icon[name="shake"]::before {
  content: "\\eb93";
}
i.sl-icon[name="shake-outline"]::before {
  content: "\\eb94";
}
i.sl-icon[name="share"]::before {
  content: "\\eb95";
}
i.sl-icon[name="share-outline"]::before {
  content: "\\eb96";
}
i.sl-icon[name="shield"]::before {
  content: "\\eb97";
}
i.sl-icon[name="shield-off"]::before {
  content: "\\eb98";
}
i.sl-icon[name="shield-off-outline"]::before {
  content: "\\eb99";
}
i.sl-icon[name="shield-outline"]::before {
  content: "\\eb9a";
}
i.sl-icon[name="shopping-bag"]::before {
  content: "\\eb9b";
}
i.sl-icon[name="shopping-bag-outline"]::before {
  content: "\\eb9c";
}
i.sl-icon[name="shopping-cart"]::before {
  content: "\\eb9d";
}
i.sl-icon[name="shopping-cart-outline"]::before {
  content: "\\eb9e";
}
i.sl-icon[name="shuffle"]::before {
  content: "\\eb9f";
}
i.sl-icon[name="shuffle-2"]::before {
  content: "\\eba0";
}
i.sl-icon[name="shuffle-2-outline"]::before {
  content: "\\eba1";
}
i.sl-icon[name="shuffle-outline"]::before {
  content: "\\eba2";
}
i.sl-icon[name="skip-back"]::before {
  content: "\\eba3";
}
i.sl-icon[name="skip-back-outline"]::before {
  content: "\\eba4";
}
i.sl-icon[name="skip-forward"]::before {
  content: "\\eba5";
}
i.sl-icon[name="skip-forward-outline"]::before {
  content: "\\eba6";
}
i.sl-icon[name="slash"]::before {
  content: "\\eba7";
}
i.sl-icon[name="slash-outline"]::before {
  content: "\\eba8";
}
i.sl-icon[name="smartphone"]::before {
  content: "\\eba9";
}
i.sl-icon[name="smartphone-outline"]::before {
  content: "\\ebaa";
}
i.sl-icon[name="smiling-face"]::before {
  content: "\\ebab";
}
i.sl-icon[name="smiling-face-outline"]::before {
  content: "\\ebac";
}
i.sl-icon[name="speaker"]::before {
  content: "\\ebad";
}
i.sl-icon[name="speaker-outline"]::before {
  content: "\\ebae";
}
i.sl-icon[name="square"]::before {
  content: "\\ebaf";
}
i.sl-icon[name="square-outline"]::before {
  content: "\\ebb0";
}
i.sl-icon[name="star"]::before {
  content: "\\ebb1";
}
i.sl-icon[name="star-outline"]::before {
  content: "\\ebb2";
}
i.sl-icon[name="stop-circle"]::before {
  content: "\\ebb3";
}
i.sl-icon[name="stop-circle-outline"]::before {
  content: "\\ebb4";
}
i.sl-icon[name="sun"]::before {
  content: "\\ebb5";
}
i.sl-icon[name="sun-outline"]::before {
  content: "\\ebb6";
}
i.sl-icon[name="swap"]::before {
  content: "\\ebb7";
}
i.sl-icon[name="swap-outline"]::before {
  content: "\\ebb8";
}
i.sl-icon[name="sync"]::before {
  content: "\\ebb9";
}
i.sl-icon[name="sync-outline"]::before {
  content: "\\ebba";
}
i.sl-icon[name="text"]::before {
  content: "\\ebbb";
}
i.sl-icon[name="text-outline"]::before {
  content: "\\ebbc";
}
i.sl-icon[name="thermometer"]::before {
  content: "\\ebbd";
}
i.sl-icon[name="thermometer-minus"]::before {
  content: "\\ebbe";
}
i.sl-icon[name="thermometer-minus-outline"]::before {
  content: "\\ebbf";
}
i.sl-icon[name="thermometer-outline"]::before {
  content: "\\ebc0";
}
i.sl-icon[name="thermometer-plus"]::before {
  content: "\\ebc1";
}
i.sl-icon[name="thermometer-plus-outline"]::before {
  content: "\\ebc2";
}
i.sl-icon[name="toggle-left"]::before {
  content: "\\ebc3";
}
i.sl-icon[name="toggle-left-outline"]::before {
  content: "\\ebc4";
}
i.sl-icon[name="toggle-right"]::before {
  content: "\\ebc5";
}
i.sl-icon[name="toggle-right-outline"]::before {
  content: "\\ebc6";
}
i.sl-icon[name="trash"]::before {
  content: "\\ebc7";
}
i.sl-icon[name="trash-2"]::before {
  content: "\\ebc8";
}
i.sl-icon[name="trash-2-outline"]::before {
  content: "\\ebc9";
}
i.sl-icon[name="trash-outline"]::before {
  content: "\\ebca";
}
i.sl-icon[name="trending-down"]::before {
  content: "\\ebcb";
}
i.sl-icon[name="trending-down-outline"]::before {
  content: "\\ebcc";
}
i.sl-icon[name="trending-up"]::before {
  content: "\\ebcd";
}
i.sl-icon[name="trending-up-outline"]::before {
  content: "\\ebce";
}
i.sl-icon[name="tv"]::before {
  content: "\\ebcf";
}
i.sl-icon[name="tv-outline"]::before {
  content: "\\ebd0";
}
i.sl-icon[name="twitter"]::before {
  content: "\\ebd1";
}
i.sl-icon[name="twitter-outline"]::before {
  content: "\\ebd2";
}
i.sl-icon[name="umbrella"]::before {
  content: "\\ebd3";
}
i.sl-icon[name="umbrella-outline"]::before {
  content: "\\ebd4";
}
i.sl-icon[name="undo"]::before {
  content: "\\ebd5";
}
i.sl-icon[name="undo-outline"]::before {
  content: "\\ebd6";
}
i.sl-icon[name="unlock"]::before {
  content: "\\ebd7";
}
i.sl-icon[name="unlock-outline"]::before {
  content: "\\ebd8";
}
i.sl-icon[name="upload"]::before {
  content: "\\ebd9";
}
i.sl-icon[name="upload-outline"]::before {
  content: "\\ebda";
}
i.sl-icon[name="video"]::before {
  content: "\\ebdb";
}
i.sl-icon[name="video-off"]::before {
  content: "\\ebdc";
}
i.sl-icon[name="video-off-outline"]::before {
  content: "\\ebdd";
}
i.sl-icon[name="video-outline"]::before {
  content: "\\ebde";
}
i.sl-icon[name="volume-down"]::before {
  content: "\\ebdf";
}
i.sl-icon[name="volume-down-outline"]::before {
  content: "\\ebe0";
}
i.sl-icon[name="volume-mute"]::before {
  content: "\\ebe1";
}
i.sl-icon[name="volume-mute-outline"]::before {
  content: "\\ebe2";
}
i.sl-icon[name="volume-off"]::before {
  content: "\\ebe3";
}
i.sl-icon[name="volume-off-outline"]::before {
  content: "\\ebe4";
}
i.sl-icon[name="volume-up"]::before {
  content: "\\ebe5";
}
i.sl-icon[name="volume-up-outline"]::before {
  content: "\\ebe6";
}
i.sl-icon[name="wifi"]::before {
  content: "\\ebe7";
}
i.sl-icon[name="wifi-off"]::before {
  content: "\\ebe8";
}
i.sl-icon[name="wifi-off-outline"]::before {
  content: "\\ebe9";
}
i.sl-icon[name="wifi-outline"]::before {
  content: "\\ebea";
}
`,_r=`/* Host */
:host([sl-theme=primer-light]) {
  /* Override */
  --sl-kbd-background-color: var(--pr-aqua-haze);
  --sl-kbd-color: var(--pr-shuttle-gray);
  --sl-kbd-border-color: rgba(27,31,36,0.15);
}
:host([sl-theme=primer-dark]) {
  /* Override */
  --sl-kbd-background-color: var(--pr-sibuya-game-reserve);
  --sl-kbd-color: var(--pr-regent-gray);
  --sl-kbd-border-color: var(--pr-regent-gray);
}
/* Keyboard */
kbd {
  font-family: var(--pr-font-family);
  border-radius: 4px;
  padding: 2px 4px;
}
`;const wr={button:hr,card:gr,"input-text":vr,icon:kr,kbd:_r};rs({theme:{key:"primer-light",components:wr}});Tt.initialize();new dr({target:document.getElementById("app")});
