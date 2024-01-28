import{p as r,H as h,s as c,a as _,h as i,i as L,c as m,g as O,b as u,q as T,d as w,e as f,f as y,j as H,D as j,k as N,l as B,F as A,m as x,S as M,n as q}from"./sl-splitter2.aAx8eQ1B.js";import{o as ee,r as se,v as ie,t as ae,u as ne,w as le}from"./sl-splitter2.aAx8eQ1B.js";const P=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.name=void 0,this.src=void 0,this.size="32px",this.background="var(--sl-avatar-background-color)",this.circle=void 0,this.square=void 0}get style(){return{width:this.size,height:this.size,"background-color":this.background}}get initialsStyle(){return{"font-size":`calc(${this.size} / 2)`}}get initials(){var t,e;const s=new RegExp(/(\p{L}{1})\p{L}+/,"gu"),a=[...this.name.matchAll(s)];return((((t=a.shift())===null||t===void 0?void 0:t[1])||"")+(((e=a.pop())===null||e===void 0?void 0:e[1])||"")).toUpperCase()}connectedCallback(){c(this.host,{display:"inline-flex","vertical-align":"middle"}),_(this.host)}render(){return i("div",{class:"sl-avatar",style:this.style},this.src?i("img",{src:this.src,alt:this.name}):i("span",{style:this.initialsStyle},this.initials))}get host(){return this}},[1,"sl-avatar",{name:[513],src:[1],size:[1],background:[1],circle:[516],square:[516]}]),$=P,F=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.heading=void 0,this.slots={graphic:!1,heading:!1,default:!1,actions:!1}}get _heading(){return this.heading||"h3"}get class(){return{"sl-blankslate":!0,"has-graphic":this.slots.graphic,"has-heading":this.slots.heading,"has-default":this.slots.default,"has-actions":this.slots.actions}}handleSlotChange(t){const e=t.target,s=e.getAttribute("name")||"default";this.slots=Object.assign(Object.assign({},this.slots),{[s]:!L(e)})}connectedCallback(){c(this.host,{display:"flex","align-items":"center","justify-content":"center"})}render(){return i("div",{class:this.class},i("div",{class:"graphic"},i("slot",{name:"graphic",onSlotchange:this.handleSlotChange})),i(this._heading,null,i("slot",{name:"heading",onSlotchange:this.handleSlotChange})),i("p",null,i("slot",{onSlotchange:this.handleSlotChange})),i("div",{class:"actions"},i("slot",{name:"actions",onSlotchange:this.handleSlotChange})))}get host(){return this}},[1,"sl-blankslate",{heading:[1],slots:[32]}]),Z=F,V=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="button",this.disabled=!1,this.link=!1,this.primary=void 0,this.outline=void 0,this.danger=void 0,this.borderless=void 0,this.small=void 0,this.medium=void 0,this.large=void 0,this.iconOnly=!1}get class(){return{"sl-button":!0,"icon-only":this.iconOnly}}handleClick(){if(this.type==="submit"){const t=m(this.host,"sl-form");t&&t.submit()}}handleSlotChange(t){const e=t.target,s=O(e);this.iconOnly=s.length===1&&s[0].nodeName==="SL-ICON"}connectedCallback(){c(this.host,{display:"inline-flex","vertical-align":"middle"}),_(this.host)}render(){return i("button",{class:this.class,type:this.type,disabled:this.disabled,onClick:()=>this.handleClick()},i("slot",{onSlotchange:t=>this.handleSlotChange(t)}))}get host(){return this}},[1,"sl-button",{type:[1],disabled:[516],link:[516],primary:[516],outline:[516],danger:[516],borderless:[516],small:[516],medium:[516],large:[516],iconOnly:[32]}]),G=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1}get class(){return{"sl-breadcrumb":!0,active:this.active}}connectedCallback(){c(this.host,{display:"inline-flex"})}render(){return i("li",{class:this.class},i("sl-button",{link:!0,disabled:this.active},i("slot",null)))}get host(){return this}},[1,"sl-breadcrumb",{active:[516]}]),J=G,W=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow()}connectedCallback(){c(this.host,{display:"inline-flex"})}render(){return i("nav",{class:"sl-breadcrumbs"},i("ul",null,i("slot",null)))}get host(){return this}},[1,"sl-breadcrumbs"]),K=W,Q=V,X=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.danger=void 0,this.small=void 0,this.medium=void 0,this.slots={header:!1,default:!1,footer:!1}}get class(){return{"sl-card":!0,"has-header":this.slots.header,"has-default":this.slots.default,"has-footer":this.slots.footer}}handleSlotChange(t){const e=t.target,s=e.getAttribute("name")||"default";this.slots=Object.assign(Object.assign({},this.slots),{[s]:!L(e)})}connectedCallback(){c(this.host,{display:"flex"})}render(){return i("div",{class:this.class},i("header",null,i("slot",{name:"header",onSlotchange:t=>this.handleSlotChange(t)})),i("section",null,i("slot",{onSlotchange:t=>this.handleSlotChange(t)})),i("footer",null,i("slot",{name:"footer",onSlotchange:t=>this.handleSlotChange(t)})))}get host(){return this}},[1,"sl-card",{danger:[516],small:[516],medium:[516],slots:[32]}]),Y=X,tt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.submitEvent=u(this,"submit",7)}async submit(){const t=T(this.host,"sl-form-control"),e=await Promise.all(t.map(s=>s.validate()));this.submitEvent.emit(e.find(s=>(s==null?void 0:s.type)==="failure")?"failure":"success")}connectedCallback(){c(this.host)}render(){return i("form",{class:"sl-form"},i("slot",null))}get host(){return this}},[1,"sl-form",{submit:[64]}]),et=tt,st=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.name=void 0,this.size="16px"}get style(){return{width:`var(--sl-icon-size, ${this.size})`,height:`var(--sl-icon-size, ${this.size})`}}get svg(){return w.model.icons[this.name]||w.model.fallbackIcon}connectedCallback(){c(this.host,{display:"inline-flex","align-items":"center"}),_(this.host)}render(){return i("i",{class:"sl-icon",style:this.style,innerHTML:this.svg})}get host(){return this}},[1,"sl-icon",{name:[513],size:[1]}]),it=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.name=void 0,this.required=!1}get class(){return{"sl-label":!0,required:this.required}}connectedCallback(){c(this.host,{display:"inline-flex"})}render(){return i("label",{class:this.class,htmlFor:this.name},i("slot",null))}get host(){return this}},[1,"sl-label",{name:[1],required:[516]}]);function at(){}function Mt(n){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)?{type:"success",message:"Email is valid."}:{type:"failure",message:"Invalid email format."}}const nt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.labelClickEvent=u(this,"labelClick",7),this.label="",this.caption="",this.name=crypto.randomUUID(),this.required=!1,this.validation=at,this.status=null}get statusIcon(){var t,e;return((t=this.status)===null||t===void 0?void 0:t.type)==="success"?f.successIcon:((e=this.status)===null||e===void 0?void 0:e.type)==="failure"?f.alertIcon:""}handleLabelClick(){this.labelClickEvent.emit()}async validate(){this.status=null;const t=y(this.host,"sl-input-text")||y(this.host,"sl-input-number")||y(this.host,"sl-input-checkbox");return t&&(this.required&&(!t.value||!t.value.toString().trim())?this.status={type:"failure",message:"Field cannot be left empty."}:this.validation?this.status=this.validation(t.value)||null:this.required&&(this.status={type:"success"}),t.status=this.status?this.status.type:null),this.status}connectedCallback(){c(this.host)}render(){var t;return i("div",{class:"sl-form-control"},this.label&&i("sl-label",{name:this.name,required:this.required,onClick:()=>this.handleLabelClick()},this.label),i("slot",null),((t=this.status)===null||t===void 0?void 0:t.message)&&i("div",{class:`status ${this.status.type}`},i("sl-icon",{name:this.statusIcon,size:"12px"}),i("span",null,this.status.message)),this.caption&&i("span",{class:"caption"},this.caption))}get host(){return this}},[1,"sl-form-control",{label:[1],caption:[1],name:[1],required:[516],validation:[16],status:[32],validate:[64]}]),lt=nt,ot=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notifications=[]}async addNotification(t){this.notifications=[...this.notifications,t],await H(3e3),this.removeNotification(t)}async removeNotification(t){this.notifications=this.notifications.filter(e=>e!==t)}connectedCallback(){c(this.host)}render(){return i("div",{class:"sl-hud"},i("ul",{class:"notifications"},this.notifications.map(t=>i("li",{class:`notification ${t.type}`},i("div",{class:"icon"},i("sl-icon",{name:t.icon.name,size:t.icon.size})),i("div",{class:"content"},i("span",null,t.message))))))}get host(){return this}},[1,"sl-hud",{notifications:[32],addNotification:[64],removeNotification:[64]}]),rt=ot,ht=st,ct=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inputEvent=u(this,"input",7),this.changeEvent=u(this,"change",7),this.value=!1,this.disabled=!1,this.label="",this.status=null}get class(){return{"sl-input-checkbox":!0,[this.status]:!!this.status}}get effectiveName(){var t;return((t=this.control)===null||t===void 0?void 0:t.name)||crypto.randomUUID()}handleInput(t){t.stopPropagation(),this.value=this.input.checked,this.inputEvent.emit(this.value)}async handleChange(t){t.stopPropagation(),this.changeEvent.emit(this.value),this.control&&await this.control.validate()}handleClick(){this.input.click()}connectedCallback(){this.control=m(this.host,"sl-form-control"),c(this.host,{display:"flex"})}render(){var t;return i("div",{class:this.class},i("div",{class:"checkbox-wrapper"},i("input",{ref:e=>this.input=e,type:"checkbox",name:this.effectiveName,checked:this.value,disabled:this.disabled,onInput:e=>this.handleInput(e),onChange:e=>this.handleChange(e)}),this.value&&i("sl-icon",{name:f.checkIcon,size:"12px"})),this.label&&i("sl-label",{name:this.effectiveName,required:(t=this.control)===null||t===void 0?void 0:t.required,onClick:()=>this.handleClick()},this.label))}get host(){return this}},[1,"sl-input-checkbox",{value:[1028],disabled:[516],label:[1],status:[1]}]),dt=ct,ut=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inputEvent=u(this,"input",7),this.changeEvent=u(this,"change",7),this.value=void 0,this.placeholder="",this.disabled=!1,this.min=void 0,this.max=void 0,this.step=void 0,this.autocomplete="off",this.status=null,this.small=void 0,this.medium=void 0}get _placeholder(){return this.placeholder||""}get class(){return{"sl-input-number":!0,[this.status]:!!this.status}}handleInput(t){t.stopPropagation(),this.value=+this.input.value,this.inputEvent.emit(this.value)}async handleChange(t){t.stopPropagation(),this.changeEvent.emit(this.value),this.control&&await this.control.validate()}onControlLabelClick(){this.input.focus()}connectedCallback(){this.control=m(this.host,"sl-form-control"),this.control&&(this.controlLabelClickListener=this.onControlLabelClick.bind(this),this.control.addEventListener("labelClick",this.controlLabelClickListener)),c(this.host,{display:"flex"})}disconnectedCallback(){this.control&&this.controlLabelClickListener&&this.control.removeEventListener("labelClick",this.controlLabelClickListener)}render(){var t;return i("div",{class:this.class},i("input",{ref:e=>this.input=e,type:"number",autocomplete:this.autocomplete,name:(t=this.control)===null||t===void 0?void 0:t.name,value:this.value,min:this.min,max:this.max,step:this.step,placeholder:this._placeholder,disabled:this.disabled,onInput:e=>this.handleInput(e),onChange:e=>this.handleChange(e)}))}get host(){return this}},[1,"sl-input-number",{value:[1026],placeholder:[1],disabled:[516],min:[2],max:[2],step:[2],autocomplete:[1],status:[1],small:[516],medium:[516]}]),pt=ut,mt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inputEvent=u(this,"input",7),this.changeEvent=u(this,"change",7),this.value=void 0,this.placeholder="",this.disabled=!1,this.type="text",this.status=null,this.autocomplete="off",this.small=void 0,this.medium=void 0}get _placeholder(){return this.placeholder||""}get class(){return{"sl-input-text":!0,[this.status]:!!this.status}}get size(){return Math.max(this.value?this.value.length:0,this._placeholder.length)}handleInput(t){t.stopPropagation(),this.value=this.input.value,this.inputEvent.emit(this.value)}async handleChange(t){t.stopPropagation(),this.changeEvent.emit(this.value),this.control&&await this.control.validate()}onControlLabelClick(){this.input.focus()}connectedCallback(){this.control=m(this.host,"sl-form-control"),this.control&&(this.controlLabelClickListener=this.onControlLabelClick.bind(this),this.control.addEventListener("labelClick",this.controlLabelClickListener)),c(this.host,{display:"flex"})}disconnectedCallback(){this.control&&this.controlLabelClickListener&&this.control.removeEventListener("labelClick",this.controlLabelClickListener)}render(){var t;return i("div",{class:this.class},i("input",{ref:e=>this.input=e,type:this.type,autocomplete:this.autocomplete,name:(t=this.control)===null||t===void 0?void 0:t.name,value:this.value,size:this.size,placeholder:this._placeholder,disabled:this.disabled,onInput:e=>this.handleInput(e),onChange:e=>this.handleChange(e)}))}get host(){return this}},[1,"sl-input-text",{value:[1025],placeholder:[1],disabled:[516],type:[1],status:[1],autocomplete:[1],small:[516],medium:[516]}]),gt=mt,bt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow()}connectedCallback(){c(this.host,{display:"inline-flex"})}render(){return i("kbd",{class:"sl-keyboard"},i("slot",null))}get host(){return this}},[1,"sl-keyboard"]),ft=bt,vt=it,yt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1}connectedCallback(){c(this.host,{display:"inline-flex"})}render(){return i("li",{class:"sl-tab"},i("button",null,i("slot",null)))}get host(){return this}},[1,"sl-tab",{active:[516]}]),kt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.small=!1}connectedCallback(){c(this.host,{display:"flex"})}render(){return i("nav",{class:"sl-tabs"},i("ul",null,i("slot",null)))}get host(){return this}},[1,"sl-tabs",{small:[516]}]);function p(n){return JSON.parse(JSON.stringify(n))}function St(n,t,e){const s=[...n],a=s[t];return s[t]=s[e],s[e]=a,s}function k(n){const t=JSON.parse(JSON.stringify(n));switch(t.id=t.id||crypto.randomUUID(),t.type){case"tabs":{let e=!1;if(t.items.length>0){for(let s=0;s<t.items.length;s++)t.items[s].id=t.items[s].id||crypto.randomUUID(),e=e||t.items[s].active;e||(t.items[0].active=!0)}break}case"splitter":{for(let e=0;e<t.items.length;e++)t.items[e]=k(t.items[e]);break}}return t}function I(n,t,e){const s=p(n);switch(s.type){case"splitter":{t===s.id&&(s.blueSize=e);for(let a=0;a<s.items.length;a++)s.items[a]=I(s.items[a],t,e);break}}return s}function E(n,t){const e=p(n);switch(e.type){case"tabs":{e.items.find(s=>s.id===t)&&(e.items=e.items.map(s=>Object.assign(Object.assign({},s),{active:s.id===t})));break}case"splitter":{for(let s=0;s<e.items.length;s++)e.items[s]=E(e.items[s],t);break}}return e}function z(n,t){const e=p(n);switch(e.type){case"tabs":{const s=e.items.findIndex(a=>a.id===t);s!==-1&&(e.items.splice(s,1),!e.items.some(a=>a.active)&&e.items.length>0&&(e.items[0].active=!0));break}case"splitter":{for(let s=0;s<e.items.length;s++)e.items[s]=z(e.items[s],t);break}}return e}function U(n,t,e,s){const a=p(n);switch(a.type){case"tabs":{a.items.find(l=>l.id===t)&&(a.items=St(a.items,e,s).map(l=>Object.assign(Object.assign({},l),{active:t===l.id})));break}case"splitter":{for(let l=0;l<a.items.length;l++)a.items[l]=U(a.items[l],t,e,s);break}}return a}function D(n,t,e,s,a,l){const o=p(n);switch(o.type){case"tabs":{if(o.id===e&&(o.items.splice(s,1),!o.items.some(d=>d.active)&&o.items.length>0&&(o.items[0].active=!0)),o.id===a){const d=[...o.items];d.splice(l,0,t),o.items=d.map(C=>Object.assign(Object.assign({},C),{active:C.id===t.id}))}break}case"splitter":{for(let d=0;d<o.items.length;d++)o.items[d]=D(o.items[d],t,e,s,a,l);break}}return o}function R(n,t,e,s){let a=p(n);switch(a.type){case"tabs":{const l=a.items.findIndex(o=>o.id===t.id);if(l!==-1&&(a.id===e&&s==="center"?a.items=a.items.map(o=>Object.assign(Object.assign({},o),{active:o.id===t.id})):(a.items.splice(l,1),!a.items.some(o=>o.active)&&a.items.length>0&&(a.items[0].active=!0))),a.id===e){const o=Object.assign(Object.assign({},t),{active:!0});switch(s){case"top":{a={id:crypto.randomUUID(),type:"splitter",direction:"vertical",blueSize:50,items:[{id:crypto.randomUUID(),type:"tabs",items:[o]},a]};break}case"right":{a={id:crypto.randomUUID(),type:"splitter",direction:"horizontal",blueSize:50,items:[a,{id:crypto.randomUUID(),type:"tabs",items:[o]}]};break}case"bottom":{a={id:crypto.randomUUID(),type:"splitter",direction:"vertical",blueSize:50,items:[a,{id:crypto.randomUUID(),type:"tabs",items:[o]}]};break}case"left":{a={id:crypto.randomUUID(),type:"splitter",direction:"horizontal",blueSize:50,items:[{id:crypto.randomUUID(),type:"tabs",items:[o]},a]};break}case"center":{l===-1&&(a.items.push(o),a.items=a.items.map(d=>Object.assign(Object.assign({},d),{active:d.id===t.id})));break}}}break}case"splitter":{for(let l=0;l<a.items.length;l++)a.items[l]=R(a.items[l],t,e,s);break}}return a}function S(n,t){if(n.id===t)return n;switch(n.type){case"tabs":{for(const e of n.items)if(e.id===t)return e;break}case"splitter":{for(const e of n.items){const s=S(e,t);if(s)return s}break}}}function b(n){let t=p(n);switch(t.type){case"splitter":{if(v(t.items[0]))t=t.items[1];else if(v(t.items[1]))t=t.items[0];else for(let e=0;e<t.items.length;e++)t.items[e]=b(t.items[e]);break}}return t}function v(n){switch(n.type){case"tabs":return n.items.length===0;case"splitter":return v(n.items[0])&&v(n.items[1])}}const _t=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.updateEvent=u(this,"update",3),this.closeEvent=u(this,"close",3),this.ready=new j,this.model={id:crypto.randomUUID(),type:"tabs",items:[]},this.root=!1,this.dragging=!1,this._model=void 0,this.renderIndex=0}async getGroup(){if(this.group)return this.group;{const t=m(this.host.parentElement,"sl-layout");return t?await t.getGroup():crypto.randomUUID()}}async getRootLayout(){return this.root?this.host:m(this.host.parentElement,"sl-layout").getRootLayout()}async moveTab(t,e,s,a,l){const o=S(this._model,t);this._model=b(D(this._model,o,e,s,a,l)),this.emitUpdate()}async sortTab(t,e,s){this._model=U(this._model,t,e,s),this.emitUpdate()}async selectTab(t){this._model=E(this._model,t),this.emitUpdate()}async removeTab(t){this._model=b(z(this._model,t)),this.emitClose(t),this.emitUpdate()}async resizeSplitter(t,e){this._model=I(this._model,t,e),this.emitUpdate()}async dropTab(t,e,s){const a=S(this._model,t);this._model=b(R(this._model,a,e,s)),this.emitUpdate()}async setRootDragging(t){const e=T(this.host,"sl-layout");for(const s of e)s.setDragging(t)}async setDragging(t){this.dragging=t}getSlots(t){const e=[];switch(t.type){case"tabs":{for(const s of t.items)e.push(s.viewSlot);break}case"splitter":{for(const s of t.items)e.push(...this.getSlots(s));break}}return e}async _selectTab(t){this._model.type==="tabs"&&await(await this.getRootLayout()).selectTab(t)}async _removeTab(t,e){t.stopPropagation(),this._model.type==="tabs"&&await(await this.getRootLayout()).removeTab(e)}emitClose(t){this.closeEvent.emit(t)}emitUpdate(){this.updateEvent.emit(p(this._model)),this.renderIndex++}async _setDragging(t){await(await this.getRootLayout()).setRootDragging(t)}_setTabsRef(t){this.tabsContainer=t,this.createSortableTabs()}_setContentRef(t){this.tabsContent=t,this.createSortableTabs()}createSortableTabs(){this._model.type==="tabs"&&this.tabsContainer&&this.tabsContent&&(N({container:this.tabsContainer,disabled:this._model.droppable===!1,group:this.group,items:"sl-tab",filter:".draggable",onStart:()=>{this._setDragging(!0)},onSort:async(t,e,s)=>{e.id===s.id?await(await this.getRootLayout()).sortTab(t,e.index,s.index):await(await this.getRootLayout()).moveTab(t,e.id,e.index,s.id,s.index)},onEnd:()=>{this._setDragging(!1)}}),B({container:this.tabsContent,disabled:this._model.splittable===!1,onDrop:async(t,e)=>{await(await this.getRootLayout()).dropTab(t.id,this._model.id,e)}}))}onModelChanged(t){this._model=k(t)}handleResizeStart(){this._setDragging(!0)}async handleResizeEnd(t){t.stopPropagation(),this._setDragging(!1),this._model.type==="splitter"&&await(await this.getRootLayout()).resizeSplitter(this._model.id,t.detail)}async connectedCallback(){c(this.host,{display:"block",position:"relative",height:"100%"}),this._model=k(this.model),this.root=!m(this.host.parentElement,"sl-layout"),this.group=await this.getGroup(),this.ready.resolve()}async componentDidLoad(){await this.ready.promise}renderTabs(t){return i(A,null,i("sl-tabs",{id:t.id,ref:e=>this._setTabsRef(e),small:!0},t.items.map(e=>i("sl-tab",{class:{draggable:e.draggable!==!1},id:e.id,key:e.id,active:e.active,onClick:()=>this._selectTab(e.id)},e.name,e.closable&&i("sl-icon",{class:"close-btn",name:f.closeIcon,onClick:s=>this._removeTab(s,e.id)})))),i("div",{class:"tab-content",ref:e=>this._setContentRef(e)},t.items.map(e=>i("div",{class:{"tab-view":!0,active:e.active&&!e.placeholder}},i("slot",{name:e.viewSlot})))))}renderSplitter(t){return i("sl-splitter",{vertical:t.direction==="vertical",blueSize:t.blueSize,minBlue:t.minBlue,maxBlue:t.maxBlue,disabled:t.disabled,onResizeStart:()=>this.handleResizeStart(),onResizeEnd:e=>this.handleResizeEnd(e)},i("sl-layout",{slot:"blue",model:t.items[0]},this.getSlots(t.items[0]).map(e=>i("slot",{name:e,slot:e}))),i("sl-layout",{slot:"green",model:t.items[1]},this.getSlots(t.items[1]).map(e=>i("slot",{name:e,slot:e}))))}render(){return i("div",{key:this._model.id+this.renderIndex,class:"sl-layout"},this._model.type==="tabs"&&this.renderTabs(this._model),this._model.type==="splitter"&&this.renderSplitter(this._model),this._model.type!=="splitter"&&this.getSlots(this._model).map(t=>i("slot",{name:t,slot:t})))}get host(){return this}static get watchers(){return{model:["onModelChanged"]}}},[1,"sl-layout",{model:[16],root:[32],dragging:[32],_model:[32],renderIndex:[32],getGroup:[64],getRootLayout:[64],moveTab:[64],sortTab:[64],selectTab:[64],removeTab:[64],resizeSplitter:[64],dropTab:[64],setRootDragging:[64],setDragging:[64]},void 0,{model:["onModelChanged"]}]),Ct=_t,wt=r(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.target=void 0,this.position="bottom",this.align="start",this.opened=!1}get currentTarget(){return this.target||this.host.previousElementSibling}get class(){return{"sl-popover":!0,opened:this.opened,[this.position]:!0,[this.align]:!0}}get style(){const t={},e=this.currentTarget.getBoundingClientRect(),s=this.host.getBoundingClientRect();let a=e.top+e.height+15,l=e.left,o="max-content",d="max-content";switch(this.position){case"top":{switch(a=e.top-15,this.align){case"start":{l=e.left;break}case"center":{l=e.left+e.width/2;break}case"end":{l=e.right;break}case"justify":{l=e.left,d=`${e.width}px`;break}}break}case"right":{switch(l=e.right+15,this.align){case"start":{a=e.top;break}case"center":{a=e.top+e.height/2;break}case"end":{a=e.bottom;break}case"justify":{a=e.top,o=`${e.height}px`;break}}break}case"bottom":{switch(a=e.top+e.height+15,this.align){case"start":{l=e.left;break}case"center":{l=e.left+e.width/2;break}case"end":{l=e.right;break}case"justify":{l=e.left,d=`${e.width}px`;break}}break}case"left":{switch(l=e.left-15,this.align){case"start":{a=e.top;break}case"center":{a=e.top+e.height/2;break}case"end":{a=e.bottom;break}case"justify":{a=e.top,o=`${e.height}px`;break}}break}}return t.height=o,t.width=d,a+s.height>=window.innerHeight?t.bottom="8px":t.top=`${a}px`,l+s.width>=window.innerWidth?t.right="8px":t.left=`${l}px`,t}async open(){this.opened=!0,this.windowClickListener=this.onWindowClick.bind(this),window.addEventListener("click",this.windowClickListener)}async close(){this.opened=!1,this.windowClickListener&&window.removeEventListener("click",this.windowClickListener)}updateTargetListener(t,e){e&&this.targetClickListener&&e.removeEventListener("click",this.targetClickListener),this.targetClickListener=this.onTargetClick.bind(this),t.addEventListener("click",this.targetClickListener)}onTargetClick(){this.opened?this.close():this.open()}onWindowClick(t){!x(this.currentTarget,t.target)&&!x(this.host,t.target)&&this.close()}onTargetChange(t,e){this.updateTargetListener(this.currentTarget,e)}connectedCallback(){c(this.host,{display:"inline-flex"}),this.updateTargetListener(this.currentTarget)}render(){return i("div",{class:this.class,style:this.style},i("div",{class:"popover-wrapper"},i("div",{class:"popover-container"},i("slot",null))))}get host(){return this}static get watchers(){return{target:["onTargetChange"]}}},[1,"sl-popover",{target:[16],position:[1],align:[1],opened:[32],open:[64],close:[64]},void 0,{target:["onTargetChange"]}]),xt=wt,Lt=M,Tt=yt,It=kt,Et=q;let g;function Qt(n){g||(g=document.createElement("sl-hud"),document.body.appendChild(g)),g.addNotification(n)}const Xt=n=>{typeof customElements<"u"&&[$,Z,J,K,Q,Y,et,lt,rt,ht,dt,pt,gt,ft,vt,Ct,xt,Lt,Tt,It,Et].forEach(t=>{customElements.get(t.is)||customElements.define(t.is,t,n)})};export{Qt as addNotification,_ as attachTooltip,Xt as defineCustomElements,Mt as emailValidation,ee as getAssetPath,at as noValidation,se as setAssetPath,ie as setConfig,ae as setNonce,ne as setPlatformOptions,le as setTheme};
