var Hs=Object.defineProperty,Rs=Object.defineProperties;var Fs=Object.getOwnPropertyDescriptors;var Gt=Object.getOwnPropertySymbols;var Ps=Object.prototype.hasOwnProperty,qs=Object.prototype.propertyIsEnumerable;var Wt=(n,e,t)=>e in n?Hs(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,on=(n,e)=>{for(var t in e||(e={}))Ps.call(e,t)&&Wt(n,t,e[t]);if(Gt)for(var t of Gt(e))qs.call(e,t)&&Wt(n,t,e[t]);return n},On=(n,e)=>Rs(n,Fs(e));const As=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}};As();var Is=Object.defineProperty,Ns=Object.defineProperties,js=Object.getOwnPropertyDescriptors,Yt=Object.getOwnPropertySymbols,Ds=Object.prototype.hasOwnProperty,Bs=Object.prototype.propertyIsEnumerable,_t=(n,e,t)=>e in n?Is(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,wt=(n,e)=>{for(var t in e||(e={}))Ds.call(e,t)&&_t(n,t,e[t]);if(Yt)for(var t of Yt(e))Bs.call(e,t)&&_t(n,t,e[t]);return n},yt=(n,e)=>Ns(n,js(e)),Fn=(n,e,t)=>(_t(n,typeof e!="symbol"?e+"":e,t),t);const bn=new class{constructor(){Fn(this,"theme")}update(e){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";this.theme=e.theme||{key:`vanilla-${t}`}}};function V(){}function Ft(n){return n()}function Qt(){return Object.create(null)}function _n(n){n.forEach(Ft)}function Pt(n){return typeof n=="function"}function Ne(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Us(n){return Object.keys(n).length===0}function Vo(n,...e){if(n==null)return V;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ks(n){let e;return Vo(n,t=>e=t)(),e}function Vs(n,e,t){n.$$.on_destroy.push(Vo(e,t))}function Gs(n){return n&&Pt(n.destroy)?n.destroy:V}function $e(n,e){n.appendChild(e)}function me(n,e,t){n.insertBefore(e,t||null)}function Ae(n){n.parentNode.removeChild(n)}function Ws(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function ce(n){return document.createElement(n)}function Go(n){return document.createTextNode(n)}function In(){return Go(" ")}function zn(n,e,t,o){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}function pe(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Qn(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:pe(n,e,t)}function Ys(n){return Array.from(n.childNodes)}function Qs(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Xt(n,e){n.value=e==null?"":e}function Jt(n,e,t,o){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,o?"important":"")}function Pe(n,e,t){n.classList[t?"add":"remove"](e)}function We(n){const e={};for(const t of n)e[t.name]=t.value;return e}let Nn;function Pn(n){Nn=n}function Wo(){if(!Nn)throw new Error("Function called outside component initialization");return Nn}function st(n){Wo().$$.on_mount.push(n)}function qt(n){Wo().$$.on_destroy.push(n)}const Hn=[],dn=[],Xn=[],Zt=[],Xs=Promise.resolve();let $t=!1;function Js(){$t||($t=!0,Xs.then(ve))}function xt(n){Xn.push(n)}const ft=new Set;let Vn=0;function ve(){const n=Nn;do{for(;Vn<Hn.length;){const e=Hn[Vn];Vn++,Pn(e),Zs(e.$$)}for(Pn(null),Hn.length=0,Vn=0;dn.length;)dn.pop()();for(let e=0;e<Xn.length;e+=1){const t=Xn[e];ft.has(t)||(ft.add(t),t())}Xn.length=0}while(Hn.length);for(;Zt.length;)Zt.pop()();$t=!1,ft.clear(),Pn(n)}function Zs(n){if(n.fragment!==null){n.update(),_n(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(xt)}}const el=new Set;function nl(n,e){n&&n.i&&(el.delete(n),n.i(e))}function tl(n,e,t,o){const{fragment:s,on_mount:l,on_destroy:a,after_update:i}=n.$$;s&&s.m(e,t),o||xt(()=>{const c=l.map(Ft).filter(Pt);a?a.push(...c):_n(c),n.$$.on_mount=[]}),i.forEach(xt)}function ol(n,e){const t=n.$$;t.fragment!==null&&(_n(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function sl(n,e){n.$$.dirty[0]===-1&&(Hn.push(n),Js(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ye(n,e,t,o,s,l,a,i=[-1]){const c=Nn;Pn(n);const r=n.$$={fragment:null,ctx:null,props:l,update:V,not_equal:s,bound:Qt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Qt(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};a&&a(r.root);let b=!1;if(r.ctx=t?t(n,e.props||{},(h,w,...g)=>{const m=g.length?g[0]:w;return r.ctx&&s(r.ctx[h],r.ctx[h]=m)&&(!r.skip_bound&&r.bound[h]&&r.bound[h](m),b&&sl(n,h)),w}):[],r.update(),b=!0,_n(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const h=Ys(e.target);r.fragment&&r.fragment.l(h),h.forEach(Ae)}else r.fragment&&r.fragment.c();e.intro&&nl(n.$$.fragment),tl(n,e.target,e.anchor,e.customElement),ve()}Pn(c)}let je;typeof HTMLElement=="function"&&(je=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:n}=this.$$;this.$$.on_disconnect=n.map(Ft).filter(Pt);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(n,e,t){this[n]=t}disconnectedCallback(){_n(this.$$.on_disconnect)}$destroy(){ol(this,1),this.$destroy=V}$on(n,e){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(e),()=>{const o=t.indexOf(e);o!==-1&&t.splice(o,1)}}$set(n){this.$$set&&!Us(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}});const xn=[];function ll(n,e=V){let t;const o=new Set;function s(i){if(Ne(n,i)&&(n=i,t)){const c=!xn.length;for(const r of o)r[1](),xn.push(r,n);if(c){for(let r=0;r<xn.length;r+=2)xn[r][0](xn[r+1]);xn.length=0}}}function l(i){s(i(n))}function a(i,c=V){const r=[i,c];return o.add(r),o.size===1&&(t=e(s)||V),i(n),()=>{o.delete(r),o.size===0&&(t(),t=null)}}return{set:s,update:l,subscribe:a}}function Yo(n){return n.parentNode instanceof ShadowRoot?n.parentNode.host:null}function Qo(n){n!=null&&n.parentNode&&n.parentNode.removeChild(n)}let eo;const Tn=new Map;function Xo(){if(Tn.size===0){cancelAnimationFrame(eo);return}Tn.forEach((n,e)=>{const t=e.getBoundingClientRect();if(n.rect&&(n.rect.top!==t.top||n.rect.left!==t.left||n.rect.height!==t.height||n.rect.width!==t.width))for(const o of n.callbacks)o(t);n.rect=t}),eo=requestAnimationFrame(Xo)}function il(n,e){let t;return Tn.has(n)?(t=Tn.get(n).callbacks,t.add(e)):(t=new Set([e]),Tn.set(n,{callbacks:t})),Xo(),{dispose(){t.delete(e),t.size===0&&Tn.delete(n)}}}function al(n){let e;const t=Yo(n),o=()=>{n.dataset.title&&(e=document.createElement("sl-tooltip"),e.for=t,e.appendChild(document.createTextNode(n.dataset.title)),t.insertAdjacentElement("afterend",e))},s=()=>{Qo(e)};return n.addEventListener("mouseenter",o),n.addEventListener("mouseleave",s),{destroy(){n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",s)}}}function bt(n){return!!n.assignedNodes().filter(e=>e.nodeName!=="#text"?!0:!!e.nodeValue.trim()).length}class rl{constructor(){Fn(this,"slots"),Fn(this,"_node"),Fn(this,"_handlers"),this.slots=ll({}),this._handlers={}}initialize(e){this._node=e,this._node.querySelectorAll("slot").forEach(t=>{const o=t.name||"default";this.slots.update(s=>yt(wt({},s),{[o]:bt(t)})),this._handlers[o]=()=>{this.slots[o]!==bt(t)&&this.slots.update(s=>yt(wt({},s),{[o]:bt(t)}))},t.addEventListener("slotchange",this._handlers[o])})}dispose(){if(this._node)for(const e in Ks(this.slots))this._node.querySelector(`slot${e==="default"?":not([name])":`[name="${e}"]`}`).removeEventListener("slotchange",this._handlers[e])}}function cl(n){let e,t,o,s;return{c(){e=ce("button"),t=ce("slot"),this.c=V,pe(e,"class",n[1]),pe(e,"type",n[0]),e.disabled=n[3],pe(e,"data-title",n[2])},m(l,a){me(l,e,a),$e(e,t),o||(s=[zn(e,"click",n[4]),Gs(al.call(null,e))],o=!0)},p(l,[a]){a&2&&pe(e,"class",l[1]),a&1&&pe(e,"type",l[0]),a&8&&(e.disabled=l[3]),a&4&&pe(e,"data-title",l[2])},i:V,o:V,d(l){l&&Ae(e),o=!1,_n(s)}}}const ul="button",fl={display:"inline-block"};function bl(n,e,t){let{type:o="button"}=e,{size:s="medium"}=e,{title:l=void 0}=e,{disabled:a=!1}=e;function i(c){a&&c.stopPropagation()}return n.$$set=c=>{"type"in c&&t(0,o=c.type),"size"in c&&t(1,s=c.size),"title"in c&&t(2,l=c.title),"disabled"in c&&t(3,a=c.disabled)},[o,s,l,a,i]}class pl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>:host([sl-theme=vanilla-light]){--sl-button-background-color:#EFEFEF;--sl-button-color:#000000;--sl-button-border-color:#7E7E7E;--sl-button-hover-background-color:#E5E5E5;--sl-button-hover-border-color:#4F4F4F;--sl-button-active-background-color:#EFEFEF;--sl-button-active-border-color:#7E7E7E}:host([sl-theme=vanilla-dark]){--sl-button-background-color:#EFEFEF;--sl-button-color:#000000;--sl-button-border-color:#7E7E7E;--sl-button-hover-background-color:#E5E5E5;--sl-button-hover-border-color:#4F4F4F;--sl-button-active-background-color:#EFEFEF;--sl-button-active-border-color:#7E7E7E}button{font-family:var(--va-font-family);position:relative;background-color:var(--sl-button-background-color);color:var(--sl-button-color);border:1px solid var(--sl-button-border-color);border-radius:3px;padding:2px 7px;user-select:none}button:hover{background-color:var(--sl-button-hover-background-color);border-color:var(--sl-button-hover-border-color)}button:active{background-color:var(--sl-button-active-background-color);border-color:var(--sl-button-active-border-color)}button:focus-visible{outline:2px solid #000000;outline-offset:-2px;box-shadow:0 0 0 2px #FFFFFF}button[disabled]{pointer-events:none;opacity:0.5}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},bl,cl,Ne,{type:0,size:1,title:2,disabled:3},null),e&&(e.target&&me(e.target,this,e.anchor),e.props&&(this.$set(e.props),ve()))}static get observedAttributes(){return["type","size","title","disabled"]}get type(){return this.$$.ctx[0]}set type(e){this.$$set({type:e}),ve()}get size(){return this.$$.ctx[1]}set size(e){this.$$set({size:e}),ve()}get title(){return this.$$.ctx[2]}set title(e){this.$$set({title:e}),ve()}get disabled(){return this.$$.ctx[3]}set disabled(e){this.$$set({disabled:e}),ve()}}var ml=Object.freeze(Object.defineProperty({__proto__:null,default:pl,tag:ul,style:fl},Symbol.toStringTag,{value:"Module"}));function dl(n){let e;return{c(){e=ce("div"),e.innerHTML=`<header><slot name="header"></slot></header> 
  <section><slot></slot></section> 
  <footer><slot name="footer"></slot></footer>`,this.c=V,Pe(e,"has-header",n[1].header),Pe(e,"has-default",n[1].default),Pe(e,"has-footer",n[1].footer)},m(t,o){me(t,e,o),n[3](e)},p(t,[o]){o&2&&Pe(e,"has-header",t[1].header),o&2&&Pe(e,"has-default",t[1].default),o&2&&Pe(e,"has-footer",t[1].footer)},i:V,o:V,d(t){t&&Ae(e),n[3](null)}}}const hl="card",gl={};function vl(n,e,t){let o,s;const l=new rl,a=l.slots;Vs(n,a,c=>t(1,o=c)),st(()=>{l.initialize(s)}),qt(()=>{l.dispose()});function i(c){dn[c?"unshift":"push"](()=>{s=c,t(0,s)})}return[s,o,a,i]}class kl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>:host([sl-theme=vanilla-light]){--sl-card-background-color:#FFFFFF;--sl-card-color:#000000;--sl-card-border-color:#7E7E7E;--sl-card-header-background-color:#EFEFEF}:host([sl-theme=vanilla-dark]){--sl-card-background-color:#FFFFFF;--sl-card-color:#000000;--sl-card-border-color:#7E7E7E;--sl-card-header-background-color:#EFEFEF}div{font-family:var(--va-font-family);background-color:var(--sl-card-background-color);color:var(--sl-card-color)}div.has-header.has-default>header{border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom:none}div.has-header.has-default>section{border-top-left-radius:0px;border-top-right-radius:0px}div.has-header:not(.has-default).has-footer>header{border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom:none}div.has-header:not(.has-default).has-footer>footer{border-top-left-radius:0px;border-top-right-radius:0px}div.has-header>header{display:block}div.has-default>section{display:block}div.has-footer.has-default>section{border-bottom-left-radius:0px;border-bottom-right-radius:0px}div.has-footer.has-default>footer{border-top-left-radius:0px;border-top-right-radius:0px;border-top:none}div.has-footer>footer{display:block}div>header{display:none;background-color:var(--sl-card-header-background-color);border-radius:3px;border:1px solid var(--sl-card-border-color)}div>section{display:none;border-radius:3px;border:1px solid var(--sl-card-border-color)}div>footer{display:none;border-radius:3px;border:1px solid var(--sl-card-border-color)}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},vl,dl,Ne,{},null),e&&e.target&&me(e.target,this,e.anchor)}}var _l=Object.freeze(Object.defineProperty({__proto__:null,default:kl,tag:hl,style:gl},Symbol.toStringTag,{value:"Module"}));async function wl(n=1){return new Promise(e=>{setTimeout(()=>{e()},n)})}function no(n,e,t){const o=n.slice();return o[3]=e[t],o}function to(n){let e,t,o,s,l=n[3].message+"",a,i;return{c(){e=ce("li"),t=ce("sl-icon"),o=In(),s=ce("span"),a=Go(l),i=In(),Qn(t,"name","color-outline-palette"),pe(e,"class","notification")},m(c,r){me(c,e,r),$e(e,t),$e(e,o),$e(e,s),$e(s,a),$e(e,i)},p(c,r){r&1&&l!==(l=c[3].message+"")&&Qs(a,l)},d(c){c&&Ae(e)}}}function yl(n){let e,t,o=n[0],s=[];for(let l=0;l<o.length;l+=1)s[l]=to(no(n,o,l));return{c(){e=ce("div"),t=ce("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.c=V,pe(t,"class","notifications"),pe(e,"class","sl-hud")},m(l,a){me(l,e,a),$e(e,t);for(let i=0;i<s.length;i+=1)s[i].m(t,null)},p(l,[a]){if(a&1){o=l[0];let i;for(i=0;i<o.length;i+=1){const c=no(l,o,i);s[i]?s[i].p(c,a):(s[i]=to(c),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=o.length}},i:V,o:V,d(l){l&&Ae(e),Ws(s,l)}}}const $l="hud",xl={};function El(n,e,t){let o=[];async function s(a){t(0,o=[...o,a]),await wl(3e3),l(a)}function l(a){t(0,o=o.filter(i=>i!==a))}return[o,s]}class Sl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-hud{position:fixed;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}div.sl-hud>ul.notifications{position:fixed;right:15px;bottom:0;list-style:none;margin:0;padding:0}div.sl-hud>ul.notifications>li.notification{pointer-events:all;margin-bottom:15px}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},El,yl,Ne,{addNotification:1},null),e&&(e.target&&me(e.target,this,e.anchor),e.props&&(this.$set(e.props),ve()))}static get observedAttributes(){return["addNotification"]}get addNotification(){return this.$$.ctx[1]}}var Tl=Object.freeze(Object.defineProperty({__proto__:null,default:Sl,tag:$l,style:xl},Symbol.toStringTag,{value:"Module"}));const Cl=new DOMParser;async function Ll(n){const e=await fetch(n);if(e.ok&&e.headers.get("content-type")==="image/svg+xml")return Cl.parseFromString(await e.text(),"image/svg+xml").documentElement;throw new Error(`Couldn't fetch "${n}" SVG file.`)}function Ml(n){let e;return{c(){e=ce("i"),this.c=V,pe(e,"class","sl-icon"),pe(e,"name",n[0]),Jt(e,"font-size",`${n[1]}px`,!1)},m(t,o){me(t,e,o),n[4](e)},p(t,[o]){o&1&&pe(e,"name",t[0]),o&2&&Jt(e,"font-size",`${t[1]}px`,!1)},i:V,o:V,d(t){t&&Ae(e),n[4](null)}}}const Ol="icon",zl={display:"inline-flex","align-items":"center"};function Hl(n,e,t){let{src:o=void 0}=e,{name:s=void 0}=e,{size:l=16}=e,a,i;st(async()=>{o&&(i=await Ll(o),l&&(i.style.display="inline-block",i.style["vertical-align"]="bottom",i.style.height=`${l}px`,i.style.width=`${l}px`),a&&a.appendChild(i))});function c(r){dn[r?"unshift":"push"](()=>{a=r,t(2,a)})}return n.$$set=r=>{"src"in r&&t(3,o=r.src),"name"in r&&t(0,s=r.name),"size"in r&&t(1,l=r.size)},[s,l,a,o,c]}class Rl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>i.sl-icon{display:inline-flex}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},Hl,Ml,Ne,{src:3,name:0,size:1},null),e&&(e.target&&me(e.target,this,e.anchor),e.props&&(this.$set(e.props),ve()))}static get observedAttributes(){return["src","name","size"]}get src(){return this.$$.ctx[3]}set src(e){this.$$set({src:e}),ve()}get name(){return this.$$.ctx[0]}set name(e){this.$$set({name:e}),ve()}get size(){return this.$$.ctx[1]}set size(e){this.$$set({size:e}),ve()}}var Fl=Object.freeze(Object.defineProperty({__proto__:null,default:Rl,tag:Ol,style:zl},Symbol.toStringTag,{value:"Module"}));function Pl(n){let e,t,o,s,l,a,i,c,r;return{c(){e=ce("div"),t=ce("div"),t.innerHTML='<slot name="pre"></slot>',o=In(),s=ce("div"),l=ce("input"),a=In(),i=ce("div"),i.innerHTML='<slot name="placeholder"></slot>',this.c=V,pe(t,"class","input-pre"),pe(i,"class","placeholder"),Pe(i,"visible",n[0].length===0),pe(s,"class","input-container"),pe(e,"class","sl-input-text"),Pe(e,"focused",n[2])},m(b,h){me(b,e,h),$e(e,t),$e(e,o),$e(e,s),$e(s,l),n[7](l),Xt(l,n[0]),$e(s,a),$e(s,i),c||(r=[zn(l,"input",n[8]),zn(l,"focus",n[3]),zn(l,"blur",n[4]),zn(e,"mousedown",n[5])],c=!0)},p(b,[h]){h&1&&l.value!==b[0]&&Xt(l,b[0]),h&1&&Pe(i,"visible",b[0].length===0),h&4&&Pe(e,"focused",b[2])},i:V,o:V,d(b){b&&Ae(e),n[7](null),c=!1,_n(r)}}}const ql="input-text",Al={};function Il(n,e,t){let{value:o=""}=e,s,l=!1;function a(){t(2,l=!0)}function i(){t(2,l=!1)}function c(w){w.target!==s&&(w.preventDefault(),s.focus())}function r(){s.focus()}function b(w){dn[w?"unshift":"push"](()=>{s=w,t(1,s)})}function h(){o=this.value,t(0,o)}return n.$$set=w=>{"value"in w&&t(0,o=w.value)},[o,s,l,a,i,c,r,b,h]}class Nl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-input-text{display:flex;flex-direction:row;align-items:stretch;border-width:var(--sl-input-text-border-width, 1px);border-style:var(--sl-input-text-border-style, solid);border-color:var(--sl-input-text-border-color, #3B3B3B);border-radius:var(--sl-input-text-border-radius, 2px);padding-top:0px;padding-right:var(--sl-input-text-padding-right, 2px);padding-bottom:0px;padding-left:var(--sl-input-text-padding-left, 2px);font-size:var(--sl-input-text-font-size, 13px);cursor:text}div.sl-input-text>div.input-pre{display:inline-flex;flex-direction:row;align-self:center;color:var(--sl-input-text-pre-color, #777777)}div.sl-input-text>div.input-container{position:relative;z-index:0;background-color:transparent}div.sl-input-text>div.input-container>input{font-family:var(--sl-input-text-font-family, Arial);box-sizing:border-box;height:100%;background-color:transparent;border:none;padding-top:var(--sl-input-text-padding-top, 1px);padding-bottom:var(--sl-input-text-padding-bottom, 1px)}div.sl-input-text>div.input-container>input:focus{outline:none}div.sl-input-text>div.input-container>div.placeholder{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;display:flex;flex-direction:row;align-items:center;visibility:hidden;color:var(--sl-input-text-placeholder-color, #777777);font-size:var(--sl-input-text-placeholder-font-size, 13px);margin-left:2px}div.sl-input-text>div.input-container>div.placeholder.visible{visibility:visible}div.sl-input-text.focused{border-color:var(--sl-input-text-focused-border-color, #111111)}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},Il,Pl,Ne,{value:0,focus:6},null),e&&(e.target&&me(e.target,this,e.anchor),e.props&&(this.$set(e.props),ve()))}static get observedAttributes(){return["value","focus"]}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),ve()}get focus(){return this.$$.ctx[6]}}var jl=Object.freeze(Object.defineProperty({__proto__:null,default:Nl,tag:ql,style:Al},Symbol.toStringTag,{value:"Module"}));function Dl(n){let e;return{c(){e=ce("kbd"),e.innerHTML="<slot></slot>",this.c=V},m(t,o){me(t,e,o)},p:V,i:V,o:V,d(t){t&&Ae(e)}}}const Bl="kbd",Ul={display:"inline-flex"};class Kl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>:host([sl-theme=vanilla-light]){--sl-kbd-background-color:#EFEFEF;--sl-kbd-color:#666666;--sl-kbd-border-color:#DDDDDD}:host([sl-theme=vanilla-dark]){--sl-kbd-background-color:#EFEFEF;--sl-kbd-color:#666666;--sl-kbd-border-color:#DDDDDD}kbd{font-family:monospace;font-size:12px;border-radius:2px;background-color:var(--sl-kbd-background-color);color:var(--sl-kbd-color);border:1px solid var(--sl-kbd-border-color);padding:1px 2px;text-transform:uppercase}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},null,Dl,Ne,{},null),e&&e.target&&me(e.target,this,e.anchor)}}var Vl=Object.freeze(Object.defineProperty({__proto__:null,default:Kl,tag:Bl,style:Ul},Symbol.toStringTag,{value:"Module"}));function Gl(n){let e;return{c(){e=ce("div"),e.innerHTML="<slot></slot>",this.c=V,pe(e,"class","sl-rel")},m(t,o){me(t,e,o),n[2](e)},p:V,i:V,o:V,d(t){t&&Ae(e),n[2](null)}}}const Wl="rel",Yl={};function Ql(n,e,t){let{for:o=void 0}=e,s,l,a;function i(r){l.style.top=`${r.top}px`,l.style.left=`${r.left}px`,l.style.height=`${r.height}px`,l.style.width=`${r.width}px`}st(()=>{l=Yo(s),t(1,o=o||l.previousElementSibling),l.style.position="fixed",l.style.pointerEvents="none",l.style.zIndex="2",a=il(o,i),i(o.getBoundingClientRect())}),qt(()=>{a.dispose()});function c(r){dn[r?"unshift":"push"](()=>{s=r,t(0,s)})}return n.$$set=r=>{"for"in r&&t(1,o=r.for)},[s,o,c]}class Xl extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>div.sl-rel>*{pointer-events:all}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},Ql,Gl,Ne,{for:1},null),e&&(e.target&&me(e.target,this,e.anchor),e.props&&(this.$set(e.props),ve()))}static get observedAttributes(){return["for"]}get for(){return this.$$.ctx[1]}set for(e){this.$$set({for:e}),ve()}}var Jl=Object.freeze(Object.defineProperty({__proto__:null,default:Xl,tag:Wl,style:Yl},Symbol.toStringTag,{value:"Module"}));function Zl(n){let e,t;return{c(){e=ce("sl-rel"),t=ce("span"),t.innerHTML="<slot></slot>",this.c=V,pe(t,"class","text-content"),Qn(e,"class","sl-tooltip"),Qn(e,"for",n[0])},m(o,s){me(o,e,s),$e(e,t)},p(o,[s]){s&1&&Qn(e,"for",o[0])},i:V,o:V,d(o){o&&Ae(e)}}}const ei="tooltip",ni={};function ti(n,e,t){let{for:o=void 0}=e;return n.$$set=s=>{"for"in s&&t(0,o=s.for)},[o]}class oi extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>sl-rel.sl-tooltip>span.text-content{position:absolute;top:100%}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},ti,Zl,Ne,{for:0},null),e&&(e.target&&me(e.target,this,e.anchor),e.props&&(this.$set(e.props),ve()))}static get observedAttributes(){return["for"]}get for(){return this.$$.ctx[0]}set for(e){this.$$set({for:e}),ve()}}var si=Object.freeze(Object.defineProperty({__proto__:null,default:oi,tag:ei,style:ni},Symbol.toStringTag,{value:"Module"}));function li(n){let e;return{c(){e=ce("ul"),e.innerHTML="<slot></slot>",this.c=V,pe(e,"class","sl-tree")},m(t,o){me(t,e,o)},p:V,i:V,o:V,d(t){t&&Ae(e)}}}const ii="tree",ai={};class ri extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>ul.sl-tree{list-style:none;margin:0;padding-left:10px}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},null,li,Ne,{},null),e&&e.target&&me(e.target,this,e.anchor)}}var ci=Object.freeze(Object.defineProperty({__proto__:null,default:ri,tag:ii,style:ai},Symbol.toStringTag,{value:"Module"}));function ui(n){let e,t,o,s;return{c(){e=ce("li"),t=ce("slot"),o=In(),s=ce("sl-tree"),s.innerHTML='<slot name="subtree"></slot>',this.c=V,Pe(s,"visible",n[1].subtree),pe(e,"class","sl-tree-item")},m(l,a){me(l,e,a),$e(e,t),$e(e,o),$e(e,s),n[2](e)},p(l,[a]){a&2&&Pe(s,"visible",l[1].subtree)},i:V,o:V,d(l){l&&Ae(e),n[2](null)}}}const fi="tree-item",bi={};function pi(n,e,t){let o,s={},l={};st(()=>{o.querySelectorAll("slot").forEach(i=>{const c=i.name||"default";t(1,s[c]=!!i.assignedNodes().length,s),l[c]=()=>{s[c]!==!!i.assignedNodes().length&&t(1,s=yt(wt({},s),{[c]:!!i.assignedNodes().length}))},i.addEventListener("slotchange",l[c])})}),qt(()=>{for(const i in s)o.querySelector(`slot${i==="default"?":not([name])":`[name="${i}"]`}`).removeEventListener("slotchange",l[i])});function a(i){dn[i?"unshift":"push"](()=>{o=i,t(0,o)})}return[o,s,a]}class mi extends je{constructor(e){super(),this.shadowRoot.innerHTML="<style>li.sl-tree-item{display:block}</style>",Ye(this,{target:this.shadowRoot,props:We(this.attributes),customElement:!0},pi,ui,Ne,{},null),e&&e.target&&me(e.target,this,e.anchor)}}var di=Object.freeze(Object.defineProperty({__proto__:null,default:mi,tag:fi,style:bi},Symbol.toStringTag,{value:"Module"})),hi=`:root {
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
}`;const gi=[ml,_l,Tl,Fl,jl,Vl,Jl,si,ci,di],Et=new Set;function vi(n){const e=document.createElement("style");e.innerHTML=hi,document.head.insertAdjacentElement("beforeend",e),bn.update(n);for(const t of gi){const o=class extends t.default{constructor(){var s,l;super(),Fn(this,"_slithe"),this._slithe={el:this,tag:t.tag},(l=(s=bn.theme)==null?void 0:s.components)!=null&&l[t.tag]&&(this._slithe.style=document.createElement("style"),this._slithe.style.innerHTML=bn.theme.components[t.tag],this._slithe.el.shadowRoot.appendChild(this._slithe.style))}setAttribute(s,l){super.setAttribute(s,l)}addEventListener(s,l,a){super.addEventListener(s,(...i)=>{this._slithe.el.disabled||l(...i)},a)}$destroy(){super.$destroy()}updateTheme(s){var l;this.setAttribute("sl-theme",s.key),this._slithe.style&&(Qo(this._slithe.style),delete this._slithe.style),(l=s.components)!=null&&l[this._slithe.tag]&&(this._slithe.style=document.createElement("style"),this._slithe.style.innerHTML=bn.theme.components[this._slithe.tag],this._slithe.el.shadowRoot.appendChild(this._slithe.style))}connectedCallback(){if(super.connectedCallback(),bn.theme&&this.setAttribute("sl-theme",bn.theme.key),t.style)for(const s in t.style)this._slithe.el.style[s]=t.style[s];Et.add(this)}disconnectedCallback(){super.disconnectedCallback(),this.$destroy(),Et.delete(this)}};customElements.define(`sl-${t.tag}`,o)}}function oo(n){bn.update({theme:n});for(const e of Et)e.updateTheme(n)}let pt;function ki(){const n=document.createElement("sl-hud");return document.body.appendChild(n),n}function Jo(n){pt||(pt=ki()),pt.addNotification(n)}function ie(){}function hn(n,e){for(const t in e)n[t]=e[t];return n}function Zo(n){return n()}function so(){return Object.create(null)}function De(n){n.forEach(Zo)}function At(n){return typeof n=="function"}function Qe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Gn;function et(n,e){return Gn||(Gn=document.createElement("a")),Gn.href=e,n===Gn.href}function _i(n){return Object.keys(n).length===0}function It(n,...e){if(n==null)return ie;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function qe(n){let e;return It(n,t=>e=t)(),e}function Me(n,e,t){n.$$.on_destroy.push(It(e,t))}function lt(n,e,t,o){if(n){const s=es(n,e,t,o);return n[0](s)}}function es(n,e,t,o){return n[1]&&o?hn(t.ctx.slice(),n[1](o(e))):t.ctx}function it(n,e,t,o){if(n[2]&&o){const s=n[2](o(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],a=Math.max(e.dirty.length,s.length);for(let i=0;i<a;i+=1)l[i]=e.dirty[i]|s[i];return l}return e.dirty|s}return e.dirty}function at(n,e,t,o,s,l){if(s){const a=es(e,t,o,l);n.p(a,s)}}function rt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let o=0;o<t;o++)e[o]=-1;return e}return-1}function nt(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function tt(n,e){const t={};e=new Set(e);for(const o in n)!e.has(o)&&o[0]!=="$"&&(t[o]=n[o]);return t}function lo(n){return n==null?"":n}function io(n,e,t){return n.set(t),e}function ct(n){return n&&At(n.destroy)?n.destroy:ie}function $(n,e){n.appendChild(e)}function f(n,e,t){n.insertBefore(e,t||null)}function u(n){n.parentNode.removeChild(n)}function rn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function ue(n){return document.createTextNode(n)}function k(){return ue(" ")}function ut(){return ue("")}function J(n,e,t,o){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}function E(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ao(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const o in e)e[o]==null?n.removeAttribute(o):o==="style"?n.style.cssText=e[o]:o==="__value"?n.value=n[o]=e[o]:t[o]&&t[o].set?n[o]=e[o]:E(n,o,e[o])}function G(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:E(n,e,t)}function wi(n){return Array.from(n.childNodes)}function Ve(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function St(n,e,t,o){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,o?"important":"")}function Y(n,e,t){n.classList[t?"add":"remove"](e)}function yi(n,e,t=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,t,!1,e),o}let jn;function qn(n){jn=n}function Dn(){if(!jn)throw new Error("Function called outside component initialization");return jn}function Nt(n){Dn().$$.on_mount.push(n)}function ns(n){Dn().$$.on_destroy.push(n)}function $i(){const n=Dn();return(e,t)=>{const o=n.$$.callbacks[e];if(o){const s=yi(e,t);o.slice().forEach(l=>{l.call(n,s)})}}}function An(n,e){Dn().$$.context.set(n,e)}function Ze(n){return Dn().$$.context.get(n)}const Rn=[],pn=[],Jn=[],ro=[],ts=Promise.resolve();let Tt=!1;function os(){Tt||(Tt=!0,ts.then(ls))}function ss(){return os(),ts}function Ct(n){Jn.push(n)}const mt=new Set;let Wn=0;function ls(){const n=jn;do{for(;Wn<Rn.length;){const e=Rn[Wn];Wn++,qn(e),xi(e.$$)}for(qn(null),Rn.length=0,Wn=0;pn.length;)pn.pop()();for(let e=0;e<Jn.length;e+=1){const t=Jn[e];mt.has(t)||(mt.add(t),t())}Jn.length=0}while(Rn.length);for(;ro.length;)ro.pop()();Tt=!1,mt.clear(),qn(n)}function xi(n){if(n.fragment!==null){n.update(),De(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ct)}}const Zn=new Set;let mn;function gn(){mn={r:0,c:[],p:mn}}function vn(){mn.r||De(mn.c),mn=mn.p}function D(n,e){n&&n.i&&(Zn.delete(n),n.i(e))}function K(n,e,t,o){if(n&&n.o){if(Zn.has(n))return;Zn.add(n),mn.c.push(()=>{Zn.delete(n),o&&(t&&n.d(1),o())}),n.o(e)}}const Ei=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function is(n,e){const t={},o={},s={$$scope:1};let l=n.length;for(;l--;){const a=n[l],i=e[l];if(i){for(const c in a)c in i||(o[c]=1);for(const c in i)s[c]||(t[c]=i[c],s[c]=1);n[l]=i}else for(const c in a)s[c]=1}for(const a in o)a in t||(t[a]=void 0);return t}function co(n){return typeof n=="object"&&n!==null?n:{}}function ee(n){n&&n.c()}function Q(n,e,t,o){const{fragment:s,on_mount:l,on_destroy:a,after_update:i}=n.$$;s&&s.m(e,t),o||Ct(()=>{const c=l.map(Zo).filter(At);a?a.push(...c):De(c),n.$$.on_mount=[]}),i.forEach(Ct)}function X(n,e){const t=n.$$;t.fragment!==null&&(De(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Si(n,e){n.$$.dirty[0]===-1&&(Rn.push(n),os(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function en(n,e,t,o,s,l,a,i=[-1]){const c=jn;qn(n);const r=n.$$={fragment:null,ctx:null,props:l,update:ie,not_equal:s,bound:so(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:so(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};a&&a(r.root);let b=!1;if(r.ctx=t?t(n,e.props||{},(h,w,...g)=>{const m=g.length?g[0]:w;return r.ctx&&s(r.ctx[h],r.ctx[h]=m)&&(!r.skip_bound&&r.bound[h]&&r.bound[h](m),b&&Si(n,h)),w}):[],r.update(),b=!0,De(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const h=wi(e.target);r.fragment&&r.fragment.l(h),h.forEach(u)}else r.fragment&&r.fragment.c();e.intro&&D(n.$$.fragment),Q(n,e.target,e.anchor,e.customElement),ls()}qn(c)}class nn{$destroy(){X(this,1),this.$destroy=ie}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!_i(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const En=[];function as(n,e){return{subscribe:Oe(n,e).subscribe}}function Oe(n,e=ie){let t;const o=new Set;function s(i){if(Qe(n,i)&&(n=i,t)){const c=!En.length;for(const r of o)r[1](),En.push(r,n);if(c){for(let r=0;r<En.length;r+=2)En[r][0](En[r+1]);En.length=0}}}function l(i){s(i(n))}function a(i,c=ie){const r=[i,c];return o.add(r),o.size===1&&(t=e(s)||ie),i(n),()=>{o.delete(r),o.size===0&&(t(),t=null)}}return{set:s,update:l,subscribe:a}}function Ti(n,e,t){const o=!Array.isArray(n),s=o?[n]:n,l=e.length<2;return as(t,a=>{let i=!1;const c=[];let r=0,b=ie;const h=()=>{if(r)return;b();const g=e(o?c[0]:c,a);l?a(g):b=At(g)?g:ie},w=s.map((g,m)=>It(g,y=>{c[m]=y,r&=~(1<<m),i&&h()},()=>{r|=1<<m}));return i=!0,h(),function(){De(w),b()}})}var Ci=`/* Host */
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
`,Li=`div {
  font-family: var(--pr-font-family);
}
`,Mi=`div.sl-input-text {
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
`,Oi=`i.sl-icon[name] {
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
`,zi=`/* Host */
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
`;const Yn={button:Ci,card:Li,"input-text":Mi,icon:Oi,kbd:zi},Lt={"vanilla-light":{icon:Yn.icon},"vanilla-dark":{icon:Yn.icon},"primer-light":Yn,"primer-dark":Yn},Mt=(()=>{const{subscribe:n,update:e}=Oe(((localStorage==null?void 0:localStorage.getItem("slithe.recent-searches"))||"").split(",").filter(t=>t));return{subscribe:n,get value(){return qe(this)},add:t=>e(o=>(o.includes(t)||o.push(t),o.length>5&&o.shift(),localStorage==null||localStorage.setItem("slithe.recent-searches",o.join(",")),o))}})(),rs=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Ot=(()=>{const{subscribe:n,set:e}=Oe((localStorage==null?void 0:localStorage.getItem("slithe.global-theme"))||`primer-${rs}`);return{subscribe:n,get value(){return qe(this)},set:t=>{oo({key:t,components:Lt[t]}),document.documentElement.setAttribute("sl-theme",t),localStorage==null||localStorage.setItem("slithe.global-theme",t),e(t)},initialize(){oo({key:qe(this),components:Lt[qe(this)]}),document.documentElement.setAttribute("sl-theme",qe(this))}}})(),uo=(()=>{const{subscribe:n,set:e}=Oe((localStorage==null?void 0:localStorage.getItem("slithe.local-theme"))||`primer-${rs}`);return{subscribe:n,get value(){return qe(this)},set:t=>{localStorage==null||localStorage.setItem("slithe.local-theme",t),e(t)}}})(),fo=n=>typeof n=="undefined",cs=n=>typeof n=="function",us=n=>typeof n=="number";function Hi(n){return!n.defaultPrevented&&n.button===0&&!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function fs(){let n=0;return()=>n++}function Ri(){return Math.random().toString(36).substring(2)}const an=typeof window=="undefined";function bs(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}const Bn=n=>`@@svnav-ctx__${n}`,zt=Bn("LOCATION"),Cn=Bn("ROUTER"),jt=Bn("ROUTE"),Fi=Bn("ROUTE_PARAMS"),ps=Bn("FOCUS_ELEM"),ms=/^:(.+)/,Ht=(n,e)=>n.substr(0,e.length)===e,Pi=n=>n==="",qi=n=>ms.test(n),ds=n=>n[0]==="*",Ai=n=>n.replace(/\*.*$/,""),hs=n=>n.replace(/(^\/+|\/+$)/g,"");function Ge(n,e=!1){const t=hs(n).split("/");return e?t.filter(Boolean):t}const dt=(n,e)=>n+(e?`?${e}`:""),Dt=n=>`/${hs(n)}`;function Un(...n){const e=o=>Ge(o,!0).join("/"),t=n.map(e).join("/");return Dt(t)}const Bt=1,Kn=2,kn=3,gs=4,vs=5,Ii=6,ks=7,Ni=8,ji=9,_s=10,ws=11,Di={[Bt]:"Link",[Kn]:"Route",[kn]:"Router",[gs]:"useFocus",[vs]:"useLocation",[Ii]:"useMatch",[ks]:"useNavigate",[Ni]:"useParams",[ji]:"useResolvable",[_s]:"useResolve",[ws]:"navigate"},Ut=n=>Di[n];function Bi(n,e){let t;return n===Kn?t=e.path?`path="${e.path}"`:"default":n===Bt?t=`to="${e.to}"`:n===kn&&(t=`basepath="${e.basepath||""}"`),`<${Ut(n)} ${t||""} />`}function Ui(n,e,t,o){const s=t&&Bi(o||n,t),l=s?`

Occurred in: ${s}`:"",a=Ut(n),i=cs(e)?e(a):e;return`<${a}> ${i}${l}`}const ys=n=>(...e)=>n(Ui(...e)),$s=ys(n=>{throw new Error(n)}),ot=ys(console.warn),bo=4,Ki=3,Vi=2,Gi=1,Wi=1;function Yi(n,e){const t=n.default?0:Ge(n.fullPath).reduce((o,s)=>{let l=o;return l+=bo,Pi(s)?l+=Wi:qi(s)?l+=Vi:ds(s)?l-=bo+Gi:l+=Ki,l},0);return{route:n,score:t,index:e}}function Qi(n){return n.map(Yi).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function xs(n,e){let t,o;const[s]=e.split("?"),l=Ge(s),a=l[0]==="",i=Qi(n);for(let c=0,r=i.length;c<r;c++){const{route:b}=i[c];let h=!1;const w={},g=T=>On(on({},b),{params:w,uri:T});if(b.default){o=g(e);continue}const m=Ge(b.fullPath),y=Math.max(l.length,m.length);let d=0;for(;d<y;d++){const T=m[d],P=l[d];if(!fo(T)&&ds(T)){const C=T==="*"?"*":T.slice(1);w[C]=l.slice(d).map(decodeURIComponent).join("/");break}if(fo(P)){h=!0;break}const B=ms.exec(T);if(B&&!a){const C=decodeURIComponent(P);w[B[1]]=C}else if(T!==P){h=!0;break}}if(!h){t=g(Un(...l.slice(0,d)));break}}return t||o||null}function Es(n,e){return xs([n],e)}function Xi(n,e){if(Ht(n,"/"))return n;const[t,o]=n.split("?"),[s]=e.split("?"),l=Ge(t),a=Ge(s);if(l[0]==="")return dt(s,o);if(!Ht(l[0],".")){const r=a.concat(l).join("/");return dt((s==="/"?"":"/")+r,o)}const i=a.concat(l),c=[];return i.forEach(r=>{r===".."?c.pop():r!=="."&&c.push(r)}),dt(`/${c.join("/")}`,o)}function po(n,e){const{pathname:t,hash:o="",search:s="",state:l}=n,a=Ge(e,!0),i=Ge(t,!0);for(;a.length;)a[0]!==i[0]&&$s(kn,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),a.shift(),i.shift();return{pathname:Un(...i),hash:o,search:s,state:l}}const mo=n=>n.length===1?"":n;function Ss(n){const e=n.indexOf("?"),t=n.indexOf("#"),o=e!==-1,s=t!==-1,l=s?mo(n.substr(t)):"",a=s?n.substr(0,t):n,i=o?mo(a.substr(e)):"";return{pathname:o?a.substr(0,e):a,search:i,hash:l}}function Ji(n,e,t){return Un(t,Xi(n,e))}function Zi(n,e){const t=Dt(Ai(n)),o=Ge(t,!0),s=Ge(e,!0).slice(0,o.length),l=Es({fullPath:t},Un(...s));return l&&l.uri}const ht="POP",ea="PUSH",na="REPLACE";function gt(n){return On(on({},n.location),{pathname:encodeURI(decodeURI(n.location.pathname)),state:n.history.state,_key:n.history.state&&n.history.state._key||"initial"})}function ta(n){let e=[],t=gt(n),o=ht;const s=(l=e)=>l.forEach(a=>a({location:t,action:o}));return{get location(){return t},listen(l){e.push(l);const a=()=>{t=gt(n),o=ht,s([l])};s([l]);const i=bs(n,"popstate",a);return()=>{i(),e=e.filter(c=>c!==l)}},navigate(l,a){const{state:i={},replace:c=!1}=a||{};if(o=c?na:ea,us(l))a&&ot(ws,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=ht,n.history.go(l);else{const r=On(on({},i),{_key:Ri()});try{n.history[c?"replaceState":"pushState"](r,"",l)}catch{n.location[c?"replace":"assign"](l)}}t=gt(n),s()}}}function vt(n,e){return On(on({},Ss(e)),{state:n})}function oa(n="/"){let e=0,t=[vt(null,n)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(o,s,l){e++,t=t.slice(0,e),t.push(vt(o,l))},replaceState(o,s,l){t[e]=vt(o,l)},go(o){const s=e+o;s<0||s>t.length-1||(e=s)}}}}const sa=!!(!an&&window.document&&window.document.createElement),la=!an&&window.location.origin==="null",ia=ta(sa&&!la?window:oa());let Je=null,Ts=!0;function aa(n,e){const t=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<t.length;o++){const s=t[o],l=Number(s.dataset.svnavRouter);if(l===n)return!0;if(l===e)return!1}return!1}function ra(n){(!Je||n.level>Je.level||n.level===Je.level&&aa(n.routerId,Je.routerId))&&(Je=n)}function ca(){Je=null}function ua(){Ts=!1}function ho(n){if(!n)return!1;const e="tabindex";try{if(!n.hasAttribute(e)){n.setAttribute(e,"-1");let t;t=bs(n,"blur",()=>{n.removeAttribute(e),t()})}return n.focus(),document.activeElement===n}catch{return!1}}function fa(n,e){return Number(n.dataset.svnavRouteEnd)===e}function ba(n){return/^H[1-6]$/i.test(n.tagName)}function go(n,e=document){return e.querySelector(n)}function pa(n){let t=go(`[data-svnav-route-start="${n}"]`).nextElementSibling;for(;!fa(t,n);){if(ba(t))return t;const o=go("h1,h2,h3,h4,h5,h6",t);if(o)return o;t=t.nextElementSibling}return null}function ma(n){Promise.resolve(qe(n.focusElement)).then(e=>{const t=e||pa(n.id);t||ot(kn,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,n,Kn),!ho(t)&&ho(document.documentElement)})}const da=(n,e,t)=>(o,s)=>ss().then(()=>{if(!Je||Ts){ua();return}if(o&&ma(Je.route),n.announcements&&s){const{path:l,fullPath:a,meta:i,params:c,uri:r}=Je.route,b=n.createAnnouncement({path:l,fullPath:a,meta:i,params:c,uri:r},qe(t));Promise.resolve(b).then(h=>{e.set(h)})}ca()}),ha="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function ga(n){let e,t;return{c(){e=p("div"),t=ue(n[0]),E(e,"role","status"),E(e,"aria-atomic","true"),E(e,"aria-live","polite"),E(e,"style",ha)},m(o,s){f(o,e,s),$(e,t)},p(o,s){s[0]&1&&Ve(t,o[0])},d(o){o&&u(e)}}}function va(n){let e,t,o,s,l;const a=n[20].default,i=lt(a,n,n[19],null);let c=n[2]&&n[4]&&n[1].announcements&&ga(n);return{c(){e=p("div"),t=k(),i&&i.c(),o=k(),c&&c.c(),s=ut(),St(e,"display","none"),E(e,"aria-hidden","true"),E(e,"data-svnav-router",n[3])},m(r,b){f(r,e,b),f(r,t,b),i&&i.m(r,b),f(r,o,b),c&&c.m(r,b),f(r,s,b),l=!0},p(r,b){i&&i.p&&(!l||b[0]&524288)&&at(i,a,r,r[19],l?it(a,r[19],b,null):rt(r[19]),null),r[2]&&r[4]&&r[1].announcements&&c.p(r,b)},i(r){l||(D(i,r),l=!0)},o(r){K(i,r),l=!1},d(r){r&&u(e),r&&u(t),i&&i.d(r),r&&u(o),c&&c.d(r),r&&u(s)}}}const ka=fs(),vo="/";function _a(n,e,t){let o,s,l,a,i,{$$slots:c={},$$scope:r}=e,{basepath:b=vo}=e,{url:h=null}=e,{history:w=ia}=e,{primary:g=!0}=e,{a11y:m={}}=e;const y=on({createAnnouncement:F=>`Navigated to ${F.uri}`,announcements:!0},m),d=b,T=Dt(b),P=Ze(zt),B=Ze(Cn),C=!P,j=ka(),q=g&&!(B&&!B.manageFocus),I=Oe("");Me(n,I,F=>t(0,i=F));const A=Oe([]);Me(n,A,F=>t(18,a=F));const M=Oe(null);Me(n,M,F=>t(16,s=F));let N=!1;const H=C?0:B.level+1,W=C?Oe((()=>po(an?Ss(h):w.location,T))()):P;Me(n,W,F=>t(15,o=F));const x=Oe(o);Me(n,x,F=>t(17,l=F));const R=da(y,I,W),he=F=>re=>re.filter(ne=>ne.id!==F);function se(F){if(an){if(N)return;const re=Es(F,o.pathname);if(re)return N=!0,re}else A.update(re=>{const ne=he(F.id)(re);return ne.push(F),ne})}function ae(F){A.update(he(F))}return!C&&b!==vo&&ot(kn,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:b}),C&&(Nt(()=>w.listen(re=>{const ne=po(re.location,T);x.set(o),W.set(ne)})),An(zt,W)),An(Cn,{activeRoute:M,registerRoute:se,unregisterRoute:ae,manageFocus:q,level:H,id:j,history:C?w:B.history,basepath:C?T:B.basepath}),n.$$set=F=>{"basepath"in F&&t(10,b=F.basepath),"url"in F&&t(11,h=F.url),"history"in F&&t(12,w=F.history),"primary"in F&&t(13,g=F.primary),"a11y"in F&&t(14,m=F.a11y),"$$scope"in F&&t(19,r=F.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&1024&&b!==d&&ot(kn,'You cannot change the "basepath" prop. It is ignored.'),n.$$.dirty[0]&294912){const F=xs(a,o.pathname);M.set(F)}if(n.$$.dirty[0]&163840&&C){const F=!!o.hash,re=!F&&q,ne=!F||o.pathname!==l.pathname;R(re,ne)}n.$$.dirty[0]&65536&&q&&s&&s.primary&&ra({level:H,routerId:j,route:s})},[i,y,C,j,q,I,A,M,W,x,b,h,w,g,m,o,s,l,a,r,c]}class Cs extends nn{constructor(e){super(),en(this,e,_a,va,Qe,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function Ln(n,e,t=Cn,o=kn){Ze(t)||$s(n,l=>`You cannot use ${l} outside of a ${Ut(o)}.`,e)}const wa=n=>{const{subscribe:e}=Ze(n);return{subscribe:e}};function Kt(){return Ln(vs),wa(zt)}function Ls(){const{history:n}=Ze(Cn);return n}function Ms(){const n=Ze(jt);return n?Ti(n,e=>e.base):Oe("/")}function Os(){Ln(_s);const n=Ms(),{basepath:e}=Ze(Cn);return o=>Ji(o,qe(n),e)}function ya(){Ln(ks);const n=Os(),{navigate:e}=Ls();return(o,s)=>{const l=us(o)?o:n(o);return e(l,s)}}function $a(){Ln(gs,null,jt,Kn);const n=Kt(),e=Ze(ps);let t;const o=n.subscribe(()=>{const s=new Promise(l=>{t=l});e.set(s)});return ns(o),s=>{let l=!1;const a=n.subscribe(()=>{ss().then(()=>{l||t(s)})});return{destroy(){l=!0,a()}}}}const xa=n=>({params:n&16,location:n&8}),ko=n=>({params:an?qe(n[9]):n[4],location:n[3],navigate:n[10]});function _o(n){let e,t;return e=new Cs({props:{primary:n[1],$$slots:{default:[Ta]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment)},m(o,s){Q(e,o,s),t=!0},p(o,s){const l={};s&2&&(l.primary=o[1]),s&264217&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i(o){t||(D(e.$$.fragment,o),t=!0)},o(o){K(e.$$.fragment,o),t=!1},d(o){X(e,o)}}}function Ea(n){let e;const t=n[17].default,o=lt(t,n,n[18],ko);return{c(){o&&o.c()},m(s,l){o&&o.m(s,l),e=!0},p(s,l){o&&o.p&&(!e||l&262168)&&at(o,t,s,s[18],e?it(t,s[18],l,xa):rt(s[18]),ko)},i(s){e||(D(o,s),e=!0)},o(s){K(o,s),e=!1},d(s){o&&o.d(s)}}}function Sa(n){let e,t,o;const s=[{location:n[3]},{navigate:n[10]},an?qe(n[9]):n[4],n[11]];var l=n[0];function a(i){let c={};for(let r=0;r<s.length;r+=1)c=hn(c,s[r]);return{props:c}}return l&&(e=new l(a())),{c(){e&&ee(e.$$.fragment),t=ut()},m(i,c){e&&Q(e,i,c),f(i,t,c),o=!0},p(i,c){const r=c&3608?is(s,[c&8&&{location:i[3]},c&1024&&{navigate:i[10]},c&528&&co(an?qe(i[9]):i[4]),c&2048&&co(i[11])]):{};if(l!==(l=i[0])){if(e){gn();const b=e;K(b.$$.fragment,1,0,()=>{X(b,1)}),vn()}l?(e=new l(a()),ee(e.$$.fragment),D(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else l&&e.$set(r)},i(i){o||(e&&D(e.$$.fragment,i),o=!0)},o(i){e&&K(e.$$.fragment,i),o=!1},d(i){i&&u(t),e&&X(e,i)}}}function Ta(n){let e,t,o,s;const l=[Sa,Ea],a=[];function i(c,r){return c[0]!==null?0:1}return e=i(n),t=a[e]=l[e](n),{c(){t.c(),o=ut()},m(c,r){a[e].m(c,r),f(c,o,r),s=!0},p(c,r){let b=e;e=i(c),e===b?a[e].p(c,r):(gn(),K(a[b],1,1,()=>{a[b]=null}),vn(),t=a[e],t?t.p(c,r):(t=a[e]=l[e](c),t.c()),D(t,1),t.m(o.parentNode,o))},i(c){s||(D(t),s=!0)},o(c){K(t),s=!1},d(c){a[e].d(c),c&&u(o)}}}function Ca(n){let e,t,o,s,l,a=n[2]&&_o(n);return{c(){e=p("div"),t=k(),a&&a.c(),o=k(),s=p("div"),St(e,"display","none"),E(e,"aria-hidden","true"),E(e,"data-svnav-route-start",n[5]),St(s,"display","none"),E(s,"aria-hidden","true"),E(s,"data-svnav-route-end",n[5])},m(i,c){f(i,e,c),f(i,t,c),a&&a.m(i,c),f(i,o,c),f(i,s,c),l=!0},p(i,[c]){i[2]?a?(a.p(i,c),c&4&&D(a,1)):(a=_o(i),a.c(),D(a,1),a.m(o.parentNode,o)):a&&(gn(),K(a,1,1,()=>{a=null}),vn())},i(i){l||(D(a),l=!0)},o(i){K(a),l=!1},d(i){i&&u(e),i&&u(t),a&&a.d(i),i&&u(o),i&&u(s)}}}const La=fs();function Ma(n,e,t){let o;const s=["path","component","meta","primary"];let l=tt(e,s),a,i,c,r,{$$slots:b={},$$scope:h}=e,{path:w=""}=e,{component:g=null}=e,{meta:m={}}=e,{primary:y=!0}=e;Ln(Kn,e);const d=La(),{registerRoute:T,unregisterRoute:P,activeRoute:B}=Ze(Cn);Me(n,B,H=>t(15,a=H));const C=Ms();Me(n,C,H=>t(16,c=H));const j=Kt();Me(n,j,H=>t(3,i=H));const q=Oe(null);let I;const A=Oe(),M=Oe({});Me(n,M,H=>t(4,r=H)),An(jt,A),An(Fi,M),An(ps,q);const N=ya();return an||ns(()=>P(d)),n.$$set=H=>{t(23,e=hn(hn({},e),nt(H))),t(11,l=tt(e,s)),"path"in H&&t(12,w=H.path),"component"in H&&t(0,g=H.component),"meta"in H&&t(13,m=H.meta),"primary"in H&&t(1,y=H.primary),"$$scope"in H&&t(18,h=H.$$scope)},n.$$.update=()=>{if(n.$$.dirty&77834){const H=w==="",le=Un(c,w),W={id:d,path:w,meta:m,default:H,fullPath:H?"":le,base:H?c:Zi(le,i.pathname),primary:y,focusElement:q};A.set(W),t(14,I=T(W))}if(n.$$.dirty&49152&&t(2,o=!!(I||a&&a.id===d)),n.$$.dirty&49156&&o){const{params:H}=I||a;M.set(H)}},e=nt(e),[g,y,o,i,r,d,B,C,j,M,N,l,w,m,I,a,c,b,h]}class Oa extends nn{constructor(e){super(),en(this,e,Ma,Ca,Qe,{path:12,component:0,meta:13,primary:1})}}function za(n){let e,t,o,s;const l=n[13].default,a=lt(l,n,n[12],null);let i=[{href:n[0]},n[2],n[1]],c={};for(let r=0;r<i.length;r+=1)c=hn(c,i[r]);return{c(){e=p("a"),a&&a.c(),ao(e,c)},m(r,b){f(r,e,b),a&&a.m(e,null),t=!0,o||(s=J(e,"click",n[4]),o=!0)},p(r,[b]){a&&a.p&&(!t||b&4096)&&at(a,l,r,r[12],t?it(l,r[12],b,null):rt(r[12]),null),ao(e,c=is(i,[(!t||b&1)&&{href:r[0]},b&4&&r[2],b&2&&r[1]]))},i(r){t||(D(a,r),t=!0)},o(r){K(a,r),t=!1},d(r){r&&u(e),a&&a.d(r),o=!1,s()}}}function Ha(n,e,t){let o,s,l,a,i;const c=["to","replace","state","getProps"];let r=tt(e,c),b,{$$slots:h={},$$scope:w}=e,{to:g}=e,{replace:m=!1}=e,{state:y={}}=e,{getProps:d=null}=e;Ln(Bt,e);const T=Kt();Me(n,T,q=>t(11,b=q));const P=$i(),B=Os(),{navigate:C}=Ls();function j(q){P("click",q),Hi(q)&&(q.preventDefault(),C(o,{state:y,replace:l||m}))}return n.$$set=q=>{t(18,e=hn(hn({},e),nt(q))),t(17,r=tt(e,c)),"to"in q&&t(5,g=q.to),"replace"in q&&t(6,m=q.replace),"state"in q&&t(7,y=q.state),"getProps"in q&&t(8,d=q.getProps),"$$scope"in q&&t(12,w=q.$$scope)},n.$$.update=()=>{n.$$.dirty&2080&&t(0,o=B(g,b)),n.$$.dirty&2049&&t(10,s=Ht(b.pathname,o)),n.$$.dirty&2049&&t(9,l=o===b.pathname),n.$$.dirty&512&&t(2,a=l?{"aria-current":"page"}:{}),t(1,i=(()=>{if(cs(d)){const q=d({location:b,href:o,isPartiallyCurrent:s,isCurrent:l});return on(on({},r),q)}return r})())},e=nt(e),[o,i,a,T,j,g,m,y,d,l,s,b,w,h]}class sn extends nn{constructor(e){super(),en(this,e,Ha,za,Qe,{to:5,replace:6,state:7,getProps:8})}}function Ra(){try{return $a()}catch{return()=>({})}}var Rt="/assets/slithe.ea6f755b.svg";function Fa(n){let e,t,o,s,l,a,i,c,r,b,h,w,g,m,y,d,T,P,B,C,j,q,I,A,M,N,H,le,W,x,R,he,se,ae,F,re,ne,ke,ze,xe,_e,ge,Ee,we,O,Se,de,ye,Ce,te,fe,Z=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,Ie,be,z,U,Le,He,Be,Re,Ue,Te,Ke,oe,tn,Xe,v,S,wn,cn,yn,un,fn,$n,Mn;return{c(){e=p("h1"),e.textContent="Headings",t=k(),o=p("h2"),o.textContent="Test211",s=k(),l=p("h3"),l.textContent="Test2111",a=k(),i=p("h4"),i.textContent="Test21111",c=k(),r=p("h5"),r.textContent="Test211111",b=k(),h=p("h6"),h.textContent="Test2111111",w=k(),g=p("h6"),g.textContent="Test2111112",m=k(),y=p("h1"),y.textContent="Emphasis",d=k(),T=p("p"),T.innerHTML="Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.",P=k(),B=p("p"),B.innerHTML="Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.",C=k(),j=p("p"),j.innerHTML="Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.",q=k(),I=p("p"),I.innerHTML="Strikethrough uses two tildes. <del>Scratch this.</del>",A=k(),M=p("h1"),M.textContent="Lists",N=k(),H=p("ul"),H.innerHTML=`<li>One</li> 
<li>Two</li> 
<li>Three</li>`,le=k(),W=p("ol"),W.innerHTML=`<li>One</li> 
<li>Two</li> 
<li>Three</li>`,x=k(),R=p("h1"),R.textContent="Links",he=k(),se=p("p"),se.innerHTML='<a href="https://www.google.com" title="Google&#39;s Homepage" rel="nofollow">I\u2019m an inline-style link with title</a>',ae=k(),F=p("h1"),F.textContent="Images",re=k(),ne=p("img"),ze=k(),xe=p("sl-icon"),_e=k(),ge=p("sl-icon"),Ee=k(),we=p("sl-icon"),Se=k(),de=p("h1"),de.textContent="Syntax",ye=k(),Ce=p("p"),Ce.innerHTML="Inline <code>code</code> text.",te=k(),fe=p("pre"),Ie=k(),be=p("h1"),be.textContent="Tables",z=k(),U=p("table"),U.innerHTML=`<thead><tr><th>Markdown</th> 
<th>Less</th> 
<th>Pretty</th></tr></thead> 
<tbody><tr><td><em>Still</em></td> 
<td><code>renders</code></td> 
<td><strong>nicely</strong></td></tr> 
<tr><td>1</td> 
<td>2</td> 
<td>3</td></tr></tbody>`,Le=k(),He=p("h1"),He.textContent="Blockquotes",Be=k(),Re=p("blockquote"),Re.innerHTML=`<p>Blockquotes are very handy in email to emulate reply text.
This line is part of the same quote.</p>`,Ue=k(),Te=p("p"),Te.textContent="Quote break.",Ke=k(),oe=p("blockquote"),oe.innerHTML="<p>This is a very long line that will still be quoted properly when it wraps. Oh boy let\u2019s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em>  <strong>Markdown</strong> into a blockquote.</p>",tn=k(),Xe=p("h1"),Xe.textContent="Separators",v=k(),S=p("hr"),wn=k(),cn=p("h1"),cn.textContent="Custom",yn=k(),un=p("p"),fn=p("sl-button"),fn.textContent="aaaaa",et(ne.src,ke=Rt)||E(ne,"src",ke),E(ne,"alt","Slithe Icon"),E(ne,"title","Slithe Icon"),G(xe,"name","github"),G(xe,"size","19"),G(ge,"name","activity"),G(ge,"size","19"),et(we.src,O=Rt)||G(we,"src",O),G(we,"size","19"),E(fe,"class","language-html")},m(_,L){f(_,e,L),f(_,t,L),f(_,o,L),f(_,s,L),f(_,l,L),f(_,a,L),f(_,i,L),f(_,c,L),f(_,r,L),f(_,b,L),f(_,h,L),f(_,w,L),f(_,g,L),f(_,m,L),f(_,y,L),f(_,d,L),f(_,T,L),f(_,P,L),f(_,B,L),f(_,C,L),f(_,j,L),f(_,q,L),f(_,I,L),f(_,A,L),f(_,M,L),f(_,N,L),f(_,H,L),f(_,le,L),f(_,W,L),f(_,x,L),f(_,R,L),f(_,he,L),f(_,se,L),f(_,ae,L),f(_,F,L),f(_,re,L),f(_,ne,L),f(_,ze,L),f(_,xe,L),f(_,_e,L),f(_,ge,L),f(_,Ee,L),f(_,we,L),f(_,Se,L),f(_,de,L),f(_,ye,L),f(_,Ce,L),f(_,te,L),f(_,fe,L),fe.innerHTML=Z,f(_,Ie,L),f(_,be,L),f(_,z,L),f(_,U,L),f(_,Le,L),f(_,He,L),f(_,Be,L),f(_,Re,L),f(_,Ue,L),f(_,Te,L),f(_,Ke,L),f(_,oe,L),f(_,tn,L),f(_,Xe,L),f(_,v,L),f(_,S,L),f(_,wn,L),f(_,cn,L),f(_,yn,L),f(_,un,L),$(un,fn),$n||(Mn=ct(n[0].call(null,fn)),$n=!0)},p:ie,i:ie,o:ie,d(_){_&&u(e),_&&u(t),_&&u(o),_&&u(s),_&&u(l),_&&u(a),_&&u(i),_&&u(c),_&&u(r),_&&u(b),_&&u(h),_&&u(w),_&&u(g),_&&u(m),_&&u(y),_&&u(d),_&&u(T),_&&u(P),_&&u(B),_&&u(C),_&&u(j),_&&u(q),_&&u(I),_&&u(A),_&&u(M),_&&u(N),_&&u(H),_&&u(le),_&&u(W),_&&u(x),_&&u(R),_&&u(he),_&&u(se),_&&u(ae),_&&u(F),_&&u(re),_&&u(ne),_&&u(ze),_&&u(xe),_&&u(_e),_&&u(ge),_&&u(Ee),_&&u(we),_&&u(Se),_&&u(de),_&&u(ye),_&&u(Ce),_&&u(te),_&&u(fe),_&&u(Ie),_&&u(be),_&&u(z),_&&u(U),_&&u(Le),_&&u(He),_&&u(Be),_&&u(Re),_&&u(Ue),_&&u(Te),_&&u(Ke),_&&u(oe),_&&u(tn),_&&u(Xe),_&&u(v),_&&u(S),_&&u(wn),_&&u(cn),_&&u(yn),_&&u(un),$n=!1,Mn()}}}const Pa={title:"Slithe - Introduction"};function qa(n){return[Ra()]}class Aa extends nn{constructor(e){super(),en(this,e,qa,Fa,Qe,{})}}async function Sn(n=1){return new Promise(e=>{setTimeout(()=>{e()},n)})}function Vt(n){const e=t=>{n.contains(t.target)||n.dispatchEvent(new CustomEvent("clickoutside",{detail:t}))};return document.addEventListener("click",e),{destroy(){document.removeEventListener("click",e)}}}function wo(n){let e,t,o;return{c(){e=p("div"),t=p("span"),o=ue(n[0]),E(e,"class","label title svelte-1lghh9")},m(s,l){f(s,e,l),$(e,t),$(t,o)},p(s,l){l&1&&Ve(o,s[0])},d(s){s&&u(e)}}}function yo(n){let e,t,o,s,l,a,i,c,r,b,h,w,g,m,y,d,T,P,B,C,j,q,I,A;return{c(){e=p("sl-card"),t=p("div"),o=p("div"),s=p("span"),s.textContent="Vanilla",l=k(),a=p("ul"),i=p("li"),c=p("button"),r=k(),b=p("li"),h=p("button"),w=k(),g=p("div"),m=p("span"),m.textContent="Primer",y=k(),d=p("ul"),T=p("li"),P=p("button"),B=k(),C=p("li"),j=p("button"),E(s,"class","svelte-1lghh9"),E(c,"class","theme-item vanilla-light svelte-1lghh9"),Y(c,"active",n[4]==="vanilla-light"),E(i,"class","svelte-1lghh9"),E(h,"class","theme-item vanilla-dark svelte-1lghh9"),Y(h,"active",n[4]==="vanilla-dark"),E(b,"class","svelte-1lghh9"),E(a,"class","svelte-1lghh9"),E(o,"class","theme-row svelte-1lghh9"),E(m,"class","svelte-1lghh9"),E(P,"class","theme-item primer-light svelte-1lghh9"),Y(P,"active",n[4]==="primer-light"),E(T,"class","svelte-1lghh9"),E(j,"class","theme-item primer-dark svelte-1lghh9"),Y(j,"active",n[4]==="primer-dark"),E(C,"class","svelte-1lghh9"),E(d,"class","svelte-1lghh9"),E(g,"class","theme-row svelte-1lghh9"),E(t,"class","theme-list svelte-1lghh9"),G(e,"class","theme-picker-container svelte-1lghh9")},m(M,N){f(M,e,N),$(e,t),$(t,o),$(o,s),$(o,l),$(o,a),$(a,i),$(i,c),$(a,r),$(a,b),$(b,h),$(t,w),$(t,g),$(g,m),$(g,y),$(g,d),$(d,T),$(T,P),$(d,B),$(d,C),$(C,j),I||(A=[J(c,"click",n[11]),J(h,"click",n[12]),J(P,"click",n[13]),J(j,"click",n[14]),ct(q=Vt.call(null,e)),J(e,"clickoutside",n[7])],I=!0)},p(M,N){N&16&&Y(c,"active",M[4]==="vanilla-light"),N&16&&Y(h,"active",M[4]==="vanilla-dark"),N&16&&Y(P,"active",M[4]==="primer-light"),N&16&&Y(j,"active",M[4]==="primer-dark")},d(M){M&&u(e),I=!1,De(A)}}}function Ia(n){let e,t,o,s,l,a,i,c,r,b,h;const w=n[9].default,g=lt(w,n,n[8],null);let m=n[0]&&wo(n),y=n[2]&&yo(n);return{c(){e=p("div"),g&&g.c(),t=k(),m&&m.c(),o=k(),s=p("div"),l=p("sl-icon"),a=k(),i=p("sl-rel"),y&&y.c(),G(l,"class","theme-picker-icon svelte-1lghh9"),G(l,"name","color-palette-outline"),G(l,"size",18),E(s,"class","label theme svelte-1lghh9"),E(e,"class",c=lo(n[1])+" svelte-1lghh9"),Y(e,"preview",!0)},m(d,T){f(d,e,T),g&&g.m(e,null),$(e,t),m&&m.m(e,null),$(e,o),$(e,s),$(s,l),n[10](l),$(s,a),$(s,i),y&&y.m(i,null),r=!0,b||(h=J(l,"click",n[6]),b=!0)},p(d,[T]){g&&g.p&&(!r||T&256)&&at(g,w,d,d[8],r?it(w,d[8],T,null):rt(d[8]),null),d[0]?m?m.p(d,T):(m=wo(d),m.c(),m.m(e,o)):m&&(m.d(1),m=null),d[2]?y?y.p(d,T):(y=yo(d),y.c(),y.m(i,null)):y&&(y.d(1),y=null),(!r||T&2&&c!==(c=lo(d[1])+" svelte-1lghh9"))&&E(e,"class",c),T&2&&Y(e,"preview",!0)},i(d){r||(D(g,d),r=!0)},o(d){K(g,d),r=!1},d(d){d&&u(e),g&&g.d(d),m&&m.d(),n[10](null),y&&y.d(),b=!1,h()}}}function Na(n,e,t){let o,s;Me(n,uo,C=>t(4,o=C)),Me(n,Ot,C=>t(15,s=C));let{$$slots:l={},$$scope:a}=e,{title:i=void 0}=e,{class:c=""}=e,r=!1,b;function h(C,j){io(Ot,s=`primer-${C}`,s),io(uo,o=`${j}-${C}`,o),w()}function w(){var j;const C=document.querySelectorAll("div.preview");for(const q of C){const I=Array.from(q.querySelectorAll("*")).filter(A=>A.tagName.startsWith("SL-"));for(const A of I)(j=A.updateTheme)==null||j.call(A,{key:o,components:Lt[o]})}}async function g(){await Sn(),t(2,r=!r)}function m(C){b.contains(C.detail.target)||t(2,r=!1)}Nt(()=>{w()});function y(C){pn[C?"unshift":"push"](()=>{b=C,t(3,b)})}const d=()=>h("light","vanilla"),T=()=>h("dark","vanilla"),P=()=>h("light","primer"),B=()=>h("dark","primer");return n.$$set=C=>{"title"in C&&t(0,i=C.title),"class"in C&&t(1,c=C.class),"$$scope"in C&&t(8,a=C.$$scope)},[i,c,r,b,o,h,g,m,a,l,y,d,T,P,B]}class Fe extends nn{constructor(e){super(),en(this,e,Na,Ia,Qe,{title:0,class:1})}}function ja(n){let e;return{c(){e=p("sl-button"),e.textContent="Button"},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function Da(n){let e,t,o,s,l,a,i,c,r;return{c(){e=p("sl-button"),e.textContent="Default",t=k(),o=p("sl-button"),o.textContent="Primary",s=k(),l=p("sl-button"),l.textContent="Outline",a=k(),i=p("sl-button"),i.textContent="Danger",c=k(),r=p("sl-button"),r.textContent="Borderless",G(o,"primary",""),G(l,"outline",""),G(i,"danger",""),G(r,"borderless","")},m(b,h){f(b,e,h),f(b,t,h),f(b,o,h),f(b,s,h),f(b,l,h),f(b,a,h),f(b,i,h),f(b,c,h),f(b,r,h)},p:ie,d(b){b&&u(e),b&&u(t),b&&u(o),b&&u(s),b&&u(l),b&&u(a),b&&u(i),b&&u(c),b&&u(r)}}}function Ba(n){let e,t,o,s,l;return{c(){e=p("sl-button"),e.textContent="Small",t=k(),o=p("sl-button"),o.textContent="Medium",s=k(),l=p("sl-button"),l.textContent="Large",G(e,"size","small"),G(o,"size","medium"),G(l,"size","large")},m(a,i){f(a,e,i),f(a,t,i),f(a,o,i),f(a,s,i),f(a,l,i)},p:ie,d(a){a&&u(e),a&&u(t),a&&u(o),a&&u(s),a&&u(l)}}}function Ua(n){let e,t,o;return{c(){e=p("sl-button"),e.textContent="Button",t=k(),o=p("sl-button"),o.textContent="Submit",G(e,"type","button"),G(o,"type","submit")},m(s,l){f(s,e,l),f(s,t,l),f(s,o,l)},p:ie,d(s){s&&u(e),s&&u(t),s&&u(o)}}}function Ka(n){let e;return{c(){e=p("sl-button"),e.textContent="Hover me!",G(e,"title","Great Tooltip")},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function Va(n){let e;return{c(){e=p("sl-button"),e.textContent="Disabled",G(e,"disabled","")},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function Ga(n){let e,t,o;return{c(){e=p("sl-button"),e.textContent="Click me!",G(e,"type","button")},m(s,l){f(s,e,l),t||(o=J(e,"click",n[1]),t=!0)},p:ie,d(s){s&&u(e),t=!1,o()}}}function Wa(n){let e,t,o,s,l,a,i,c,r,b='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>',h,w,g,m,y,d,T,P,B,C,j,q,I=`<code class="language-html"><span class="token comment">&lt;!-- Variants --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">primary</span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>Outline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">borderless</span><span class="token punctuation">></span></span>Borderless<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- Size --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Medium<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,A,M,N,H,le,W,x,R,he,se,ae,F,re=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,ne,ke,ze,xe,_e,ge,Ee,we,O='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Great Tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>',Se,de,ye,Ce,te,fe,Z,Ie,be='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>',z,U,Le,He,Be,Re,Ue,Te,Ke,oe,tn=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">'clicked!'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Click me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-button</span><span class="token punctuation">></span></span></code>`,Xe;return i=new Fe({props:{$$slots:{default:[ja]},$$scope:{ctx:n}}}),P=new Fe({props:{title:"Variants",$$slots:{default:[Da]},$$scope:{ctx:n}}}),C=new Fe({props:{title:"Sizes",$$slots:{default:[Ba]},$$scope:{ctx:n}}}),se=new Fe({props:{$$slots:{default:[Ua]},$$scope:{ctx:n}}}),ge=new Fe({props:{$$slots:{default:[Ka]},$$scope:{ctx:n}}}),fe=new Fe({props:{$$slots:{default:[Va]},$$scope:{ctx:n}}}),Te=new Fe({props:{$$slots:{default:[Ga]},$$scope:{ctx:n}}}),{c(){e=p("h1"),e.textContent="Button",t=k(),o=p("p"),o.innerHTML="A <code>sl-button</code> component is an interactive element that performs a programmable action when activated.",s=k(),l=p("p"),l.innerHTML="This component reflects and extends the behavior of the standard <code>button</code> element.",a=k(),ee(i.$$.fragment),c=k(),r=p("pre"),h=k(),w=p("h2"),w.textContent="Modifiers",g=k(),m=p("p"),m.innerHTML="Adding those <code>boolean</code> attributes allows to modify the button styling.",y=k(),d=p("p"),d.innerHTML="Size defaults to <code>medium</code>.",T=k(),ee(P.$$.fragment),B=k(),ee(C.$$.fragment),j=k(),q=p("pre"),A=k(),M=p("h2"),M.textContent="Attributes",N=k(),H=p("h3"),H.textContent="Type",le=k(),W=p("p"),W.innerHTML="Modifies the button behavior, defaults to <code>button</code>.",x=k(),R=p("p"),R.innerHTML="When the button is inside a <code>&lt;form&gt;</code> element, use <code>type=&quot;submit&quot;</code> in order to submit the form.",he=k(),ee(se.$$.fragment),ae=k(),F=p("pre"),ne=k(),ke=p("h3"),ke.textContent="Title",ze=k(),xe=p("p"),xe.innerHTML="Adds extra information about the element, displayed as a <code>tooltip</code> when being hovered.",_e=k(),ee(ge.$$.fragment),Ee=k(),we=p("pre"),Se=k(),de=p("h3"),de.textContent="Disabled",ye=k(),Ce=p("p"),Ce.textContent="Makes the button non-interactable.",te=k(),ee(fe.$$.fragment),Z=k(),Ie=p("pre"),z=k(),U=p("h2"),U.textContent="Events",Le=k(),He=p("h3"),He.textContent="Click",Be=k(),Re=p("p"),Re.textContent="Triggered when the user clicks on the element.",Ue=k(),ee(Te.$$.fragment),Ke=k(),oe=p("pre"),E(r,"class","language-html"),E(q,"class","language-html"),E(F,"class","language-html"),E(we,"class","language-html"),E(Ie,"class","language-html"),E(oe,"class","language-html")},m(v,S){f(v,e,S),f(v,t,S),f(v,o,S),f(v,s,S),f(v,l,S),f(v,a,S),Q(i,v,S),f(v,c,S),f(v,r,S),r.innerHTML=b,f(v,h,S),f(v,w,S),f(v,g,S),f(v,m,S),f(v,y,S),f(v,d,S),f(v,T,S),Q(P,v,S),f(v,B,S),Q(C,v,S),f(v,j,S),f(v,q,S),q.innerHTML=I,f(v,A,S),f(v,M,S),f(v,N,S),f(v,H,S),f(v,le,S),f(v,W,S),f(v,x,S),f(v,R,S),f(v,he,S),Q(se,v,S),f(v,ae,S),f(v,F,S),F.innerHTML=re,f(v,ne,S),f(v,ke,S),f(v,ze,S),f(v,xe,S),f(v,_e,S),Q(ge,v,S),f(v,Ee,S),f(v,we,S),we.innerHTML=O,f(v,Se,S),f(v,de,S),f(v,ye,S),f(v,Ce,S),f(v,te,S),Q(fe,v,S),f(v,Z,S),f(v,Ie,S),Ie.innerHTML=be,f(v,z,S),f(v,U,S),f(v,Le,S),f(v,He,S),f(v,Be,S),f(v,Re,S),f(v,Ue,S),Q(Te,v,S),f(v,Ke,S),f(v,oe,S),oe.innerHTML=tn,Xe=!0},p(v,[S]){const wn={};S&4&&(wn.$$scope={dirty:S,ctx:v}),i.$set(wn);const cn={};S&4&&(cn.$$scope={dirty:S,ctx:v}),P.$set(cn);const yn={};S&4&&(yn.$$scope={dirty:S,ctx:v}),C.$set(yn);const un={};S&4&&(un.$$scope={dirty:S,ctx:v}),se.$set(un);const fn={};S&4&&(fn.$$scope={dirty:S,ctx:v}),ge.$set(fn);const $n={};S&4&&($n.$$scope={dirty:S,ctx:v}),fe.$set($n);const Mn={};S&4&&(Mn.$$scope={dirty:S,ctx:v}),Te.$set(Mn)},i(v){Xe||(D(i.$$.fragment,v),D(P.$$.fragment,v),D(C.$$.fragment,v),D(se.$$.fragment,v),D(ge.$$.fragment,v),D(fe.$$.fragment,v),D(Te.$$.fragment,v),Xe=!0)},o(v){K(i.$$.fragment,v),K(P.$$.fragment,v),K(C.$$.fragment,v),K(se.$$.fragment,v),K(ge.$$.fragment,v),K(fe.$$.fragment,v),K(Te.$$.fragment,v),Xe=!1},d(v){v&&u(e),v&&u(t),v&&u(o),v&&u(s),v&&u(l),v&&u(a),X(i,v),v&&u(c),v&&u(r),v&&u(h),v&&u(w),v&&u(g),v&&u(m),v&&u(y),v&&u(d),v&&u(T),X(P,v),v&&u(B),X(C,v),v&&u(j),v&&u(q),v&&u(A),v&&u(M),v&&u(N),v&&u(H),v&&u(le),v&&u(W),v&&u(x),v&&u(R),v&&u(he),X(se,v),v&&u(ae),v&&u(F),v&&u(ne),v&&u(ke),v&&u(ze),v&&u(xe),v&&u(_e),X(ge,v),v&&u(Ee),v&&u(we),v&&u(Se),v&&u(de),v&&u(ye),v&&u(Ce),v&&u(te),X(fe,v),v&&u(Z),v&&u(Ie),v&&u(z),v&&u(U),v&&u(Le),v&&u(He),v&&u(Be),v&&u(Re),v&&u(Ue),X(Te,v),v&&u(Ke),v&&u(oe)}}}const Ya={title:"Slithe - Components - Button"};function Qa(n){function e(o){Jo({type:"info",message:o})}return[e,()=>e("clicked!")]}class Xa extends nn{constructor(e){super(),en(this,e,Qa,Wa,Qe,{})}}function Ja(n){let e;return{c(){e=p("sl-card"),e.innerHTML="<span>Card Title</span>"},m(t,o){f(t,e,o)},p:ie,d(t){t&&u(e)}}}function $o(n){let e;return{c(){e=p("span"),e.textContent="Header Slot",E(e,"slot","header")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function xo(n){let e;return{c(){e=p("span"),e.textContent="Default Slot"},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function Eo(n){let e;return{c(){e=p("span"),e.textContent="Footer Slot",E(e,"slot","footer")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function Za(n){let e,t,o,s,l,a,i,c,r,b,h,w,g,m,y,d,T,P,B,C,j,q,I=n[0]&&$o(),A=n[1]&&xo(),M=n[2]&&Eo();return{c(){e=p("div"),t=p("sl-card"),I&&I.c(),o=k(),A&&A.c(),s=k(),M&&M.c(),l=k(),a=p("div"),i=p("div"),c=p("label"),c.textContent="Header",r=k(),b=p("input"),h=k(),w=p("div"),g=p("label"),g.textContent="Default",m=k(),y=p("input"),d=k(),T=p("div"),P=p("label"),P.textContent="Footer",B=k(),C=p("input"),E(e,"class","content svelte-1ndiehr"),E(b,"type","checkbox"),E(y,"type","checkbox"),E(C,"type","checkbox"),E(a,"class","controls svelte-1ndiehr")},m(N,H){f(N,e,H),$(e,t),I&&I.m(t,null),$(t,o),A&&A.m(t,null),$(t,s),M&&M.m(t,null),f(N,l,H),f(N,a,H),$(a,i),$(i,c),$(i,r),$(i,b),b.checked=n[0],$(a,h),$(a,w),$(w,g),$(w,m),$(w,y),y.checked=n[1],$(a,d),$(a,T),$(T,P),$(T,B),$(T,C),C.checked=n[2],j||(q=[J(b,"change",n[3]),J(y,"change",n[4]),J(C,"change",n[5])],j=!0)},p(N,H){N[0]?I||(I=$o(),I.c(),I.m(t,o)):I&&(I.d(1),I=null),N[1]?A||(A=xo(),A.c(),A.m(t,s)):A&&(A.d(1),A=null),N[2]?M||(M=Eo(),M.c(),M.m(t,null)):M&&(M.d(1),M=null),H&1&&(b.checked=N[0]),H&2&&(y.checked=N[1]),H&4&&(C.checked=N[2])},d(N){N&&u(e),I&&I.d(),A&&A.d(),M&&M.d(),N&&u(l),N&&u(a),j=!1,De(q)}}}function er(n){let e,t,o,s,l;return{c(){e=p("sl-card"),e.innerHTML=`<span slot="header">Header Slot</span>   
    <span>Default Slot</span> 
    <span slot="footer">Footer Slot</span>`,t=k(),o=p("br"),s=k(),l=p("sl-card"),l.innerHTML=`<span slot="header">Header Slot</span>   
    <span>Default Slot</span> 
    <span slot="footer">Footer Slot</span>`,G(l,"danger","")},m(a,i){f(a,e,i),f(a,t,i),f(a,o,i),f(a,s,i),f(a,l,i)},p:ie,d(a){a&&u(e),a&&u(t),a&&u(o),a&&u(s),a&&u(l)}}}function nr(n){let e,t,o,s,l,a,i,c,r;return{c(){e=p("sl-card"),e.innerHTML=`<span slot="header">Header Slot</span>   
    <span>Default Slot</span> 
    <span slot="footer">Footer Slot</span>`,t=k(),o=p("br"),s=k(),l=p("sl-card"),l.innerHTML=`<span slot="header">Header Slot</span>   
    <span>Default Slot</span> 
    <span slot="footer">Footer Slot</span>`,a=k(),i=p("br"),c=k(),r=p("sl-card"),r.innerHTML=`<span slot="header">Header Slot</span>   
    <span>Default Slot</span> 
    <span slot="footer">Footer Slot</span>`,G(e,"size","small"),G(l,"size","medium"),G(r,"size","large")},m(b,h){f(b,e,h),f(b,t,h),f(b,o,h),f(b,s,h),f(b,l,h),f(b,a,h),f(b,i,h),f(b,c,h),f(b,r,h)},p:ie,d(b){b&&u(e),b&&u(t),b&&u(o),b&&u(s),b&&u(l),b&&u(a),b&&u(i),b&&u(c),b&&u(r)}}}function tr(n){let e,t,o,s,l,a,i,c=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Card Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span></code>`,r,b,h,w,g,m,y,d,T=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Header Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Default Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Footer Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span></code>`,P,B,C,j,q,I,A,M,N,H,le=`<code class="language-html"><span class="token comment">&lt;!-- Variants --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- Size --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-card</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-card</span><span class="token punctuation">></span></span></code>`,W;return l=new Fe({props:{$$slots:{default:[Ja]},$$scope:{ctx:n}}}),m=new Fe({props:{title:"Variants",class:"slots",$$slots:{default:[Za]},$$scope:{ctx:n}}}),I=new Fe({props:{title:"Variants",$$slots:{default:[er]},$$scope:{ctx:n}}}),M=new Fe({props:{title:"Sizes",$$slots:{default:[nr]},$$scope:{ctx:n}}}),{c(){e=p("h1"),e.textContent="Card",t=k(),o=p("p"),o.innerHTML="A <code>sl-card</code> component is a simple rounded box that contains various other components.",s=k(),ee(l.$$.fragment),a=k(),i=p("pre"),r=k(),b=p("h2"),b.textContent="Slots",h=k(),w=p("p"),w.textContent="The component includes multiple slots to cover various layouts.",g=k(),ee(m.$$.fragment),y=k(),d=p("pre"),P=k(),B=p("h2"),B.textContent="Modifiers",C=k(),j=p("p"),j.innerHTML="Adding those <code>boolean</code> attributes allows to modify the card styling.",q=k(),ee(I.$$.fragment),A=k(),ee(M.$$.fragment),N=k(),H=p("pre"),E(i,"class","language-html"),E(d,"class","language-html"),E(H,"class","language-html")},m(x,R){f(x,e,R),f(x,t,R),f(x,o,R),f(x,s,R),Q(l,x,R),f(x,a,R),f(x,i,R),i.innerHTML=c,f(x,r,R),f(x,b,R),f(x,h,R),f(x,w,R),f(x,g,R),Q(m,x,R),f(x,y,R),f(x,d,R),d.innerHTML=T,f(x,P,R),f(x,B,R),f(x,C,R),f(x,j,R),f(x,q,R),Q(I,x,R),f(x,A,R),Q(M,x,R),f(x,N,R),f(x,H,R),H.innerHTML=le,W=!0},p(x,[R]){const he={};R&128&&(he.$$scope={dirty:R,ctx:x}),l.$set(he);const se={};R&135&&(se.$$scope={dirty:R,ctx:x}),m.$set(se);const ae={};R&128&&(ae.$$scope={dirty:R,ctx:x}),I.$set(ae);const F={};R&128&&(F.$$scope={dirty:R,ctx:x}),M.$set(F)},i(x){W||(D(l.$$.fragment,x),D(m.$$.fragment,x),D(I.$$.fragment,x),D(M.$$.fragment,x),W=!0)},o(x){K(l.$$.fragment,x),K(m.$$.fragment,x),K(I.$$.fragment,x),K(M.$$.fragment,x),W=!1},d(x){x&&u(e),x&&u(t),x&&u(o),x&&u(s),X(l,x),x&&u(a),x&&u(i),x&&u(r),x&&u(b),x&&u(h),x&&u(w),x&&u(g),X(m,x),x&&u(y),x&&u(d),x&&u(P),x&&u(B),x&&u(C),x&&u(j),x&&u(q),X(I,x),x&&u(A),X(M,x),x&&u(N),x&&u(H)}}}const or={title:"Slithe - Components - Card"};function sr(n,e,t){let o=!0,s=!0,l=!0;function a(){o=this.checked,t(0,o)}function i(){s=this.checked,t(1,s)}function c(){l=this.checked,t(2,l)}return[o,s,l,a,i,c]}class lr extends nn{constructor(e){super(),en(this,e,sr,tr,Qe,{})}}function ir(n){let e,t,o,s,l;return{c(){e=ue("Press "),t=p("sl-kbd"),t.textContent="Ctrl",o=ue(" + "),s=p("sl-kbd"),s.textContent="B",l=ue(" to do something awesome.")},m(a,i){f(a,e,i),f(a,t,i),f(a,o,i),f(a,s,i),f(a,l,i)},p:ie,d(a){a&&u(e),a&&u(t),a&&u(o),a&&u(s),a&&u(l)}}}function ar(n){let e,t,o,s,l,a,i,c,r,b='<code class="language-html">Press <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-kbd</span><span class="token punctuation">></span></span>Ctrl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-kbd</span><span class="token punctuation">></span></span> + <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sl-kbd</span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sl-kbd</span><span class="token punctuation">></span></span> to do something awesome.</code>',h,w,g;return i=new Fe({props:{$$slots:{default:[ir]},$$scope:{ctx:n}}}),{c(){e=p("h1"),e.textContent="Keyboard",t=k(),o=p("p"),o.innerHTML="A <code>sl-kbd</code> component represents a text that describe keyboard inputs to trigger a specific action.",s=k(),l=p("p"),l.innerHTML="This component reflects and extends the behavior of the standard <code>kbd</code> element.",a=k(),ee(i.$$.fragment),c=k(),r=p("pre"),E(r,"class","language-html")},m(m,y){f(m,e,y),f(m,t,y),f(m,o,y),f(m,s,y),f(m,l,y),f(m,a,y),Q(i,m,y),f(m,c,y),f(m,r,y),r.innerHTML=b,h=!0,w||(g=J(window,"keydown",n[0]),w=!0)},p(m,[y]){const d={};y&2&&(d.$$scope={dirty:y,ctx:m}),i.$set(d)},i(m){h||(D(i.$$.fragment,m),h=!0)},o(m){K(i.$$.fragment,m),h=!1},d(m){m&&u(e),m&&u(t),m&&u(o),m&&u(s),m&&u(l),m&&u(a),X(i,m),m&&u(c),m&&u(r),w=!1,g()}}}const rr={title:"Slithe - Components - Keyboard"};function cr(n){function e(t){switch(t.key){case"b":{t.ctrlKey&&(t.preventDefault(),Jo({type:"info",message:"Actually that's just a toast..."}));break}}}return[e]}class ur extends nn{constructor(e){super(),en(this,e,cr,ar,Qe,{})}}const fr=history.pushState,ln=[{path:"/",metadata:Pa,component:Aa},{path:"/components/button",metadata:Ya,component:Xa},{path:"/components/card",metadata:or,component:lr},{path:"/components/keyboard",metadata:rr,component:ur}],zs=n=>{const e=document.createElement("div");e.innerHTML="";const t=new n.component({target:e});n.content=e.innerText.toLowerCase(),n.toc={};const o=e.querySelectorAll("h1,h2,h3,h4,h5,h6"),s=[];for(let l=0;l<o.length;l++)switch(o[l].tagName){case"H1":{const a={};s[0]=a,n.toc[o[l].textContent]=a;break}case"H2":{if(s[0]){const a={};s[1]=a,s[0][o[l].textContent]=a}else s.splice(0,s.length);break}case"H3":{if(s[1]){const a={};s[2]=a,s[1][o[l].textContent]=a}else s.splice(0,s.length);break}case"H4":{if(s[2]){const a={};s[3]=a,s[2][o[l].textContent]=a}else s.splice(0,s.length);break}case"H5":{if(s[3]){const a={};s[4]=a,s[3][o[l].textContent]=a}else s.splice(0,s.length);break}case"H6":{if(s[4]){const a={};s[5]=a,s[4][o[l].textContent]=a}else s.splice(0,s.length);break}}t.$destroy()},kt=(n=location.href.replace(location.origin,""))=>{const e=[...ln].reverse().find(t=>n.startsWith(t.path));return e&&(e.content||zs(e)),{path:n,page:e}},br=as(kt(),n=>{history.pushState=function(){fr.apply(history,arguments),n(kt())};const e=()=>{n(kt())};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}});async function pr(n){const e=n.trim().toLowerCase();for(const t of ln)t.content||zs(t);if(e){const t=e.split(" "),o=ln.filter(s=>(s.match="",t.every(l=>{const a=s.content.includes(l);if(a){const i=s.content.indexOf(l);return s.match+="..."+s.content.substring(i-10,i+50),a}})));for(const s of o)for(const l of t)s.match=s.match.replace(l,`<mark>${l}</mark>`);return o}else return Mt.value.length?ln.filter(t=>(delete t.match,Mt.value.includes(t.path))):ln.slice(0,5)}var mr="/assets/github.f2d5cf9e.svg";const{window:So}=Ei;function To(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function Co(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function Lo(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function Mo(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function Oo(n,e,t){const o=n.slice();return o[42]=e[t][0],o[43]=e[t][1],o}function zo(n,e,t){const o=n.slice();return o[42]=e[t][0],o}function Ho(n,e,t){const o=n.slice();return o[56]=e[t].path,o[57]=e[t].component,o}function Ro(n,e,t){const o=n.slice();return o[60]=e[t],o}function Fo(n){let e,t,o,s=n[1],l=[];for(let i=0;i<s.length;i+=1)l[i]=qo(Ro(n,s,i));const a=i=>K(l[i],1,1,()=>{l[i]=null});return{c(){e=p("sl-card"),t=p("ul");for(let i=0;i<l.length;i+=1)l[i].c();E(t,"class","results-list"),G(e,"class","search-results"),Y(e,"visible",n[9])},m(i,c){f(i,e,c),$(e,t);for(let r=0;r<l.length;r+=1)l[r].m(t,null);o=!0},p(i,c){if(c[0]&16386){s=i[1];let r;for(r=0;r<s.length;r+=1){const b=Ro(i,s,r);l[r]?(l[r].p(b,c),D(l[r],1)):(l[r]=qo(b),l[r].c(),D(l[r],1),l[r].m(t,null))}for(gn(),r=s.length;r<l.length;r+=1)a(r);vn()}c[0]&512&&Y(e,"visible",i[9])},i(i){if(!o){for(let c=0;c<s.length;c+=1)D(l[c]);o=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)K(l[c]);o=!1},d(i){i&&u(e),rn(l,i)}}}function Po(n){let e,t=n[60].match+"";return{c(){e=p("span"),E(e,"class","page-match")},m(o,s){f(o,e,s),e.innerHTML=t},p(o,s){s[0]&2&&t!==(t=o[60].match+"")&&(e.innerHTML=t)},d(o){o&&u(e)}}}function dr(n){let e,t=n[60].path+"",o,s,l,a=n[60].metadata.title+"",i,c,r,b=n[60].match&&Po(n);return{c(){e=p("span"),o=ue(t),s=k(),l=p("h2"),i=ue(a),c=k(),b&&b.c(),r=ut(),E(e,"class","page-path"),E(l,"class","page-title")},m(h,w){f(h,e,w),$(e,o),f(h,s,w),f(h,l,w),$(l,i),f(h,c,w),b&&b.m(h,w),f(h,r,w)},p(h,w){w[0]&2&&t!==(t=h[60].path+"")&&Ve(o,t),w[0]&2&&a!==(a=h[60].metadata.title+"")&&Ve(i,a),h[60].match?b?b.p(h,w):(b=Po(h),b.c(),b.m(r.parentNode,r)):b&&(b.d(1),b=null)},d(h){h&&u(e),h&&u(s),h&&u(l),h&&u(c),b&&b.d(h),h&&u(r)}}}function qo(n){let e,t,o,s,l,a;t=new sn({props:{class:"link",to:n[60].path,$$slots:{default:[dr]},$$scope:{ctx:n}}});function i(){return n[24](n[60])}return{c(){e=p("li"),ee(t.$$.fragment),o=k()},m(c,r){f(c,e,r),Q(t,e,null),$(e,o),s=!0,l||(a=J(e,"click",i),l=!0)},p(c,r){n=c;const b={};r[0]&2&&(b.to=n[60].path),r[0]&2|r[2]&2&&(b.$$scope={dirty:r,ctx:n}),t.$set(b)},i(c){s||(D(t.$$.fragment,c),s=!0)},o(c){K(t.$$.fragment,c),s=!1},d(c){c&&u(e),X(t),l=!1,a()}}}function hr(n){let e;return{c(){e=ue("Introduction")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function gr(n){let e;return{c(){e=ue("Components")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function vr(n){let e;return{c(){e=ue("Button")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function kr(n){let e;return{c(){e=ue("Card")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function _r(n){let e;return{c(){e=ue("Form")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function wr(n){let e;return{c(){e=ue("Input Text")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function yr(n){let e;return{c(){e=ue("Keyboard")},m(t,o){f(t,e,o)},d(t){t&&u(e)}}}function $r(n){let e,t,o;var s=n[57];function l(a){return{}}return s&&(e=new s(l())),{c(){e&&ee(e.$$.fragment),t=k()},m(a,i){e&&Q(e,a,i),f(a,t,i),o=!0},p(a,i){if(s!==(s=a[57])){if(e){gn();const c=e;K(c.$$.fragment,1,0,()=>{X(c,1)}),vn()}s?(e=new s(l()),ee(e.$$.fragment),D(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}},i(a){o||(e&&D(e.$$.fragment,a),o=!0)},o(a){e&&K(e.$$.fragment,a),o=!1},d(a){e&&X(e,a),a&&u(t)}}}function Ao(n){let e,t;return e=new Oa({props:{path:n[56],$$slots:{default:[$r]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment)},m(o,s){Q(e,o,s),t=!0},p(o,s){const l={};s[2]&2&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i(o){t||(D(e.$$.fragment,o),t=!0)},o(o){K(e.$$.fragment,o),t=!1},d(o){X(e,o)}}}function Io(n){let e,t,o,s,l,a=Object.entries(n[0].page.toc),i=[];for(let c=0;c<a.length;c+=1)i[c]=Ko(To(n,a,c));return{c(){e=p("nav"),t=p("ul");for(let c=0;c<i.length;c+=1)i[c].c();E(e,"class","toc"),Y(e,"fixed",n[5])},m(c,r){f(c,e,r),$(e,t);for(let b=0;b<i.length;b+=1)i[b].m(t,null);s||(l=[ct(o=Vt.call(null,e)),J(e,"clickoutside",n[20])],s=!0)},p(c,r){if(r[0]&2129921){a=Object.entries(c[0].page.toc);let b;for(b=0;b<a.length;b+=1){const h=To(c,a,b);i[b]?i[b].p(h,r):(i[b]=Ko(h),i[b].c(),i[b].m(t,null))}for(;b<i.length;b+=1)i[b].d(1);i.length=a.length}r[0]&32&&Y(e,"fixed",c[5])},d(c){c&&u(e),rn(i,c),s=!1,De(l)}}}function No(n){let e,t,o=n[42]+"",s,l,a,i,c;function r(){return n[33](n[42])}return{c(){e=p("li"),t=p("a"),s=ue(o),a=k(),E(t,"href",l="#"+n[42]),E(t,"class","link h6"),Y(t,"active",n[21](n[42]))},m(b,h){f(b,e,h),$(e,t),$(t,s),$(e,a),i||(c=J(t,"click",r),i=!0)},p(b,h){n=b,h[0]&1&&o!==(o=n[42]+"")&&Ve(s,o),h[0]&1&&l!==(l="#"+n[42])&&E(t,"href",l),h[0]&2097153&&Y(t,"active",n[21](n[42]))},d(b){b&&u(e),i=!1,c()}}}function jo(n){let e,t,o=n[42]+"",s,l,a,i,c,r,b;function h(){return n[32](n[42])}let w=Object.entries(n[43]),g=[];for(let m=0;m<w.length;m+=1)g[m]=No(zo(n,w,m));return{c(){e=p("li"),t=p("a"),s=ue(o),a=k(),i=p("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=k(),E(t,"href",l="#"+n[42]),E(t,"class","link h5"),Y(t,"active",n[21](n[42]))},m(m,y){f(m,e,y),$(e,t),$(t,s),$(e,a),$(e,i);for(let d=0;d<g.length;d+=1)g[d].m(i,null);$(e,c),r||(b=J(t,"click",h),r=!0)},p(m,y){if(n=m,y[0]&1&&o!==(o=n[42]+"")&&Ve(s,o),y[0]&1&&l!==(l="#"+n[42])&&E(t,"href",l),y[0]&2097153&&Y(t,"active",n[21](n[42])),y[0]&2129921){w=Object.entries(n[43]);let d;for(d=0;d<w.length;d+=1){const T=zo(n,w,d);g[d]?g[d].p(T,y):(g[d]=No(T),g[d].c(),g[d].m(i,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=w.length}},d(m){m&&u(e),rn(g,m),r=!1,b()}}}function Do(n){let e,t,o=n[42]+"",s,l,a,i,c,r,b;function h(){return n[31](n[42])}let w=Object.entries(n[43]),g=[];for(let m=0;m<w.length;m+=1)g[m]=jo(Oo(n,w,m));return{c(){e=p("li"),t=p("a"),s=ue(o),a=k(),i=p("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=k(),E(t,"href",l="#"+n[42]),E(t,"class","link h4"),Y(t,"active",n[21](n[42]))},m(m,y){f(m,e,y),$(e,t),$(t,s),$(e,a),$(e,i);for(let d=0;d<g.length;d+=1)g[d].m(i,null);$(e,c),r||(b=J(t,"click",h),r=!0)},p(m,y){if(n=m,y[0]&1&&o!==(o=n[42]+"")&&Ve(s,o),y[0]&1&&l!==(l="#"+n[42])&&E(t,"href",l),y[0]&2097153&&Y(t,"active",n[21](n[42])),y[0]&2129921){w=Object.entries(n[43]);let d;for(d=0;d<w.length;d+=1){const T=Oo(n,w,d);g[d]?g[d].p(T,y):(g[d]=jo(T),g[d].c(),g[d].m(i,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=w.length}},d(m){m&&u(e),rn(g,m),r=!1,b()}}}function Bo(n){let e,t,o=n[42]+"",s,l,a,i,c,r,b;function h(){return n[30](n[42])}let w=Object.entries(n[43]),g=[];for(let m=0;m<w.length;m+=1)g[m]=Do(Mo(n,w,m));return{c(){e=p("li"),t=p("a"),s=ue(o),a=k(),i=p("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=k(),E(t,"href",l="#"+n[42]),E(t,"class","link h3"),Y(t,"active",n[21](n[42]))},m(m,y){f(m,e,y),$(e,t),$(t,s),$(e,a),$(e,i);for(let d=0;d<g.length;d+=1)g[d].m(i,null);$(e,c),r||(b=J(t,"click",h),r=!0)},p(m,y){if(n=m,y[0]&1&&o!==(o=n[42]+"")&&Ve(s,o),y[0]&1&&l!==(l="#"+n[42])&&E(t,"href",l),y[0]&2097153&&Y(t,"active",n[21](n[42])),y[0]&2129921){w=Object.entries(n[43]);let d;for(d=0;d<w.length;d+=1){const T=Mo(n,w,d);g[d]?g[d].p(T,y):(g[d]=Do(T),g[d].c(),g[d].m(i,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=w.length}},d(m){m&&u(e),rn(g,m),r=!1,b()}}}function Uo(n){let e,t,o=n[42]+"",s,l,a,i,c,r,b;function h(){return n[29](n[42])}let w=Object.entries(n[43]),g=[];for(let m=0;m<w.length;m+=1)g[m]=Bo(Lo(n,w,m));return{c(){e=p("li"),t=p("a"),s=ue(o),a=k(),i=p("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=k(),E(t,"href",l="#"+n[42]),E(t,"class","link h2"),Y(t,"active",n[21](n[42]))},m(m,y){f(m,e,y),$(e,t),$(t,s),$(e,a),$(e,i);for(let d=0;d<g.length;d+=1)g[d].m(i,null);$(e,c),r||(b=J(t,"click",h),r=!0)},p(m,y){if(n=m,y[0]&1&&o!==(o=n[42]+"")&&Ve(s,o),y[0]&1&&l!==(l="#"+n[42])&&E(t,"href",l),y[0]&2097153&&Y(t,"active",n[21](n[42])),y[0]&2129921){w=Object.entries(n[43]);let d;for(d=0;d<w.length;d+=1){const T=Lo(n,w,d);g[d]?g[d].p(T,y):(g[d]=Bo(T),g[d].c(),g[d].m(i,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=w.length}},d(m){m&&u(e),rn(g,m),r=!1,b()}}}function Ko(n){let e,t,o=n[42]+"",s,l,a,i,c,r,b;function h(){return n[28](n[42])}let w=Object.entries(n[43]),g=[];for(let m=0;m<w.length;m+=1)g[m]=Uo(Co(n,w,m));return{c(){e=p("li"),t=p("a"),s=ue(o),a=k(),i=p("ul");for(let m=0;m<g.length;m+=1)g[m].c();c=k(),E(t,"href",l="#"+n[42]),E(t,"class","link h1"),Y(t,"active",n[21](n[42]))},m(m,y){f(m,e,y),$(e,t),$(t,s),$(e,a),$(e,i);for(let d=0;d<g.length;d+=1)g[d].m(i,null);$(e,c),r||(b=J(t,"click",h),r=!0)},p(m,y){if(n=m,y[0]&1&&o!==(o=n[42]+"")&&Ve(s,o),y[0]&1&&l!==(l="#"+n[42])&&E(t,"href",l),y[0]&2097153&&Y(t,"active",n[21](n[42])),y[0]&2129921){w=Object.entries(n[43]);let d;for(d=0;d<w.length;d+=1){const T=Co(n,w,d);g[d]?g[d].p(T,y):(g[d]=Uo(T),g[d].c(),g[d].m(i,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=w.length}},d(m){m&&u(e),rn(g,m),r=!1,b()}}}function xr(n){let e,t,o,s,l,a,i,c,r,b,h,w,g,m,y,d,T,P,B,C,j,q,I,A,M,N,H,le,W,x,R,he,se,ae,F,re,ne,ke,ze,xe,_e,ge,Ee,we,O,Se,de,ye,Ce,te=n[1].length>0&&Fo(n);j=new sn({props:{class:"link",to:"/",$$slots:{default:[hr]},$$scope:{ctx:n}}}),A=new sn({props:{class:"link",to:"/components/button",$$slots:{default:[gr]},$$scope:{ctx:n}}}),le=new sn({props:{class:"link",to:"/components/button",$$slots:{default:[vr]},$$scope:{ctx:n}}}),R=new sn({props:{class:"link",to:"/components/card",$$slots:{default:[kr]},$$scope:{ctx:n}}}),ae=new sn({props:{class:"link",to:"/components/form/input-text",$$slots:{default:[_r]},$$scope:{ctx:n}}}),ke=new sn({props:{class:"link",to:"/components/form/input-text",$$slots:{default:[wr]},$$scope:{ctx:n}}}),_e=new sn({props:{class:"link",to:"/components/keyboard",$$slots:{default:[yr]},$$scope:{ctx:n}}});let fe=ln,Z=[];for(let z=0;z<fe.length;z+=1)Z[z]=Ao(Ho(n,fe,z));const Ie=z=>K(Z[z],1,1,()=>{Z[z]=null});let be=n[0].page.toc&&Io(n);return{c(){e=p("header"),t=p("sl-icon"),s=k(),l=p("span"),l.textContent="Slithe",a=k(),i=p("sl-input-text"),i.innerHTML=`<sl-icon slot="pre" name="search"></sl-icon> 
      <span slot="placeholder"><span>Search</span> 
        <sl-kbd>Ctrl</sl-kbd> 
        <sl-kbd>K</sl-kbd></span>`,c=k(),r=p("sl-rel"),te&&te.c(),b=k(),h=p("a"),w=p("sl-icon"),m=k(),y=p("div"),d=p("button"),d.innerHTML=`<sl-icon name="menu-outline" size="${30}"></sl-icon>`,T=k(),P=p("nav"),B=p("ul"),C=p("li"),ee(j.$$.fragment),q=k(),I=p("li"),ee(A.$$.fragment),M=k(),N=p("ul"),H=p("li"),ee(le.$$.fragment),W=k(),x=p("li"),ee(R.$$.fragment),he=k(),se=p("li"),ee(ae.$$.fragment),F=k(),re=p("ul"),ne=p("li"),ee(ke.$$.fragment),ze=k(),xe=p("li"),ee(_e.$$.fragment),ge=k(),Ee=p("main");for(let z=0;z<Z.length;z+=1)Z[z].c();we=k(),O=p("button"),O.innerHTML=`<sl-icon name="menu-arrow-outline" size="${30}"></sl-icon>`,Se=k(),be&&be.c(),G(t,"class","slithe"),et(t.src,o=Rt)||G(t,"src",o),G(t,"size",50),E(l,"class","title"),et(w.src,g=mr)||G(w,"src",g),G(w,"size",30),E(h,"class","github"),E(h,"href","https://github.com/cadgerfeast/slithe"),E(h,"target","_blank"),E(d,"class","sidebar-opener"),E(P,"class","sidebar"),Y(P,"fixed",n[4]),E(O,"class","toc-opener"),E(y,"class","container")},m(z,U){f(z,e,U),$(e,t),$(e,s),$(e,l),$(e,a),$(e,i),n[23](i),$(e,c),$(e,r),te&&te.m(r,null),$(e,b),$(e,h),$(h,w),f(z,m,U),f(z,y,U),$(y,d),n[25](d),$(y,T),$(y,P),$(P,B),$(B,C),Q(j,C,null),$(B,q),$(B,I),Q(A,I,null),$(I,M),$(I,N),$(N,H),Q(le,H,null),$(N,W),$(N,x),Q(R,x,null),$(N,he),$(N,se),Q(ae,se,null),$(se,F),$(se,re),$(re,ne),Q(ke,ne,null),$(N,ze),$(N,xe),Q(_e,xe,null),$(y,ge),$(y,Ee);for(let Le=0;Le<Z.length;Le+=1)Z[Le].m(Ee,null);n[26](Ee),$(y,we),$(y,O),n[27](O),$(y,Se),be&&be.m(y,null),de=!0,ye||(Ce=[J(i,"input",n[16]),J(i,"focus",n[10]),J(i,"blur",n[11]),J(d,"click",n[17]),ct(Vt.call(null,P)),J(P,"clickoutside",n[18]),J(O,"click",n[19])],ye=!0)},p(z,U){z[1].length>0?te?(te.p(z,U),U[0]&2&&D(te,1)):(te=Fo(z),te.c(),D(te,1),te.m(r,null)):te&&(gn(),K(te,1,1,()=>{te=null}),vn());const Le={};U[2]&2&&(Le.$$scope={dirty:U,ctx:z}),j.$set(Le);const He={};U[2]&2&&(He.$$scope={dirty:U,ctx:z}),A.$set(He);const Be={};U[2]&2&&(Be.$$scope={dirty:U,ctx:z}),le.$set(Be);const Re={};U[2]&2&&(Re.$$scope={dirty:U,ctx:z}),R.$set(Re);const Ue={};U[2]&2&&(Ue.$$scope={dirty:U,ctx:z}),ae.$set(Ue);const Te={};U[2]&2&&(Te.$$scope={dirty:U,ctx:z}),ke.$set(Te);const Ke={};if(U[2]&2&&(Ke.$$scope={dirty:U,ctx:z}),_e.$set(Ke),U[0]&16&&Y(P,"fixed",z[4]),U&0){fe=ln;let oe;for(oe=0;oe<fe.length;oe+=1){const tn=Ho(z,fe,oe);Z[oe]?(Z[oe].p(tn,U),D(Z[oe],1)):(Z[oe]=Ao(tn),Z[oe].c(),D(Z[oe],1),Z[oe].m(Ee,null))}for(gn(),oe=fe.length;oe<Z.length;oe+=1)Ie(oe);vn()}z[0].page.toc?be?be.p(z,U):(be=Io(z),be.c(),be.m(y,null)):be&&(be.d(1),be=null)},i(z){if(!de){D(te),D(j.$$.fragment,z),D(A.$$.fragment,z),D(le.$$.fragment,z),D(R.$$.fragment,z),D(ae.$$.fragment,z),D(ke.$$.fragment,z),D(_e.$$.fragment,z);for(let U=0;U<fe.length;U+=1)D(Z[U]);de=!0}},o(z){K(te),K(j.$$.fragment,z),K(A.$$.fragment,z),K(le.$$.fragment,z),K(R.$$.fragment,z),K(ae.$$.fragment,z),K(ke.$$.fragment,z),K(_e.$$.fragment,z),Z=Z.filter(Boolean);for(let U=0;U<Z.length;U+=1)K(Z[U]);de=!1},d(z){z&&u(e),n[23](null),te&&te.d(),z&&u(m),z&&u(y),n[25](null),X(j),X(A),X(le),X(R),X(ae),X(ke),X(_e),rn(Z,z),n[26](null),n[27](null),be&&be.d(),ye=!1,De(Ce)}}}function Er(n){let e,t,o,s,l,a;return document.title=e=n[8],o=new Cs({props:{$$slots:{default:[xr]},$$scope:{ctx:n}}}),{c(){t=k(),ee(o.$$.fragment)},m(i,c){f(i,t,c),Q(o,i,c),s=!0,l||(a=[J(So,"keydown",n[12]),J(So,"scroll",n[13])],l=!0)},p(i,c){(!s||c[0]&256)&&e!==(e=i[8])&&(document.title=e);const r={};c[0]&767|c[2]&2&&(r.$$scope={dirty:c,ctx:i}),o.$set(r)},i(i){s||(D(o.$$.fragment,i),s=!0)},o(i){K(o.$$.fragment,i),s=!1},d(i){i&&u(t),X(o,i),l=!1,De(a)}}}function Sr(n,e,t){let o,s,l,a;Me(n,br,O=>t(0,a=O));let i=location.pathname,c=[],r,b="",h=!1,w,g,m=!1,y=!1,d=!1,T,P;async function B(){i!==location.pathname&&(await Sn(),window.scrollTo({top:0,behavior:"auto"}),i=location.pathname)}function C(){t(22,h=!0),R()}async function j(){await Sn(100),t(22,h=!1)}function q(O){switch(O.key){case"k":{O.ctrlKey&&(O.preventDefault(),r.focus());break}}}async function I(){const O=Array.from(w.querySelectorAll("h1,h2,h3,h4,h5,h6"));let Se;for(const de of O){const ye=de.getBoundingClientRect();ye.top-ye.height<=60&&(Se=de)}clearTimeout(g),g=setTimeout(()=>{m||location.replace(`#${Se.textContent}`),m=!1},100)}function A(O){Mt.add(O.path)}function M(O){m=!0,he(`#${O}`)}function N(O){b=O.target.value,R()}async function H(){await Sn(),t(4,y=!y)}function le(O){T.contains(O.detail.target)||t(4,y=!1)}async function W(){await Sn(),t(5,d=!d)}function x(O){P.contains(O.detail.target)||t(5,d=!1)}async function R(){t(1,c=await pr(b))}function he(O,Se="smooth"){if(w){const de=O.split("#")[1];if(de){const ye=Array.from(w.querySelectorAll("h1,h2,h3,h4,h5,h6")).find(Ce=>Ce.textContent===decodeURIComponent(de));if(ye)return window.scrollTo({top:ye.getBoundingClientRect().top+window.scrollY-80,behavior:Se}),!0}}return!1}function se(O){return decodeURIComponent(s)===O}Nt(async()=>{he(a.path,"auto")||(await Sn(),window.scrollTo({top:0,behavior:"auto"}))});function ae(O){pn[O?"unshift":"push"](()=>{r=O,t(2,r)})}const F=O=>A(O);function re(O){pn[O?"unshift":"push"](()=>{T=O,t(6,T)})}function ne(O){pn[O?"unshift":"push"](()=>{w=O,t(3,w)})}function ke(O){pn[O?"unshift":"push"](()=>{P=O,t(7,P)})}const ze=O=>M(O),xe=O=>M(O),_e=O=>M(O),ge=O=>M(O),Ee=O=>M(O),we=O=>M(O);return n.$$.update=()=>{n.$$.dirty[0]&4194304&&t(9,o=h&&ln.length>0),n.$$.dirty[0]&1&&(s=a.path.split("#")[1]),n.$$.dirty[0]&1&&t(8,l=a.page.metadata.title||"Slithe"),n.$$.dirty[0]&1&&(a.path,B())},[a,c,r,w,y,d,T,P,l,o,C,j,q,I,A,M,N,H,le,W,x,se,h,ae,F,re,ne,ke,ze,xe,_e,ge,Ee,we]}class Tr extends nn{constructor(e){super(),en(this,e,Sr,Er,Qe,{},null,[-1,-1,-1])}}var Cr=`/* Host */
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
`,Lr=`div {
  font-family: var(--pr-font-family);
}
`,Mr=`div.sl-input-text {
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
`,Or=`i.sl-icon[name] {
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
`,zr=`/* Host */
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
`;const Hr={button:Cr,card:Lr,"input-text":Mr,icon:Or,kbd:zr};vi({theme:{key:"primer-light",components:Hr}});Ot.initialize();new Tr({target:document.getElementById("app")});
