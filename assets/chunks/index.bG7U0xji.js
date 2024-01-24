import{defineCustomElements as y}from"./index.7sbXo6Vq.js";import{d as u,c as s,r as o,ai as r,aj as p,o as n,M as f,$ as c}from"./framework.bINXxMeB.js";import"./sl-layout.zElb8nfO.js";const C=u({__name:"avatar",props:{background:{default:"var(--sl-avatar-background-color)"},circle:{type:Boolean},name:{},size:{default:"32px"},square:{type:Boolean},src:{default:null}},setup(e){const t=e;return(a,l)=>(n(),s("sl-avatar",r(p(t)),[o(a.$slots,"default")],16))}}),P=u({__name:"blankslate",props:{heading:{default:"h3"}},setup(e){const t=e;return(a,l)=>(n(),s("sl-blankslate",r(p(t)),[o(a.$slots,"default")],16))}}),T=u({__name:"breadcrumb",props:{active:{type:Boolean,default:!1}},setup(e){const t=e;return(a,l)=>(n(),s("sl-breadcrumb",r(p(t)),[o(a.$slots,"default")],16))}}),i=(e,t)=>{const a=e.__vccOpts||e;for(const[l,m]of t)a[l]=m;return a},B={};function _(e,t){return n(),s("sl-breadcrumbs",null,[o(e.$slots,"default")])}const U=i(B,[["render",_]]),q=u({__name:"button",props:{borderless:{type:Boolean},danger:{type:Boolean},disabled:{type:Boolean,default:!1},large:{type:Boolean},link:{type:Boolean,default:!1},medium:{type:Boolean},outline:{type:Boolean},primary:{type:Boolean},small:{type:Boolean},type:{default:"button"}},setup(e){const t=e;return(a,l)=>(n(),s("sl-button",r(p(t)),[o(a.$slots,"default")],16))}}),D=u({__name:"card",props:{danger:{type:Boolean},medium:{type:Boolean},small:{type:Boolean}},setup(e){const t=e;return(a,l)=>(n(),s("sl-card",r(p(t)),[o(a.$slots,"default")],16))}}),S={};function v(e,t){return n(),s("sl-form",null,[o(e.$slots,"default")])}const E=i(S,[["render",v]]),F=u({__name:"form-control",props:{caption:{default:""},label:{default:""},name:{default:crypto.randomUUID()},required:{type:Boolean,default:!1}},setup(e){const t=e;return(a,l)=>(n(),s("sl-form-control",r(p(t)),[o(a.$slots,"default")],16))}}),$={};function g(e,t){return n(),s("sl-hud",null,[o(e.$slots,"default")])}const G=i($,[["render",g]]),H=u({__name:"icon",props:{name:{},size:{default:"16px"}},setup(e){const t=e;return(a,l)=>(n(),s("sl-icon",r(p(t)),[o(a.$slots,"default")],16))}}),L=u({__name:"input-checkbox",props:{disabled:{type:Boolean,default:!1},label:{default:""},value:{type:Boolean,default:!1}},emits:["update:value"],setup(e,{emit:t}){const a=e,l=t,m={slInput:({detail:d})=>{l("update:value",d)}};return(d,b)=>(n(),s("sl-input-checkbox",f(a,c(m,!0)),[o(d.$slots,"default")],16))}}),j=u({__name:"input-number",props:{disabled:{type:Boolean,default:!1},max:{},medium:{type:Boolean},min:{},placeholder:{default:""},small:{type:Boolean},step:{},value:{}},emits:["update:value"],setup(e,{emit:t}){const a=e,l=t,m={slInput:({detail:d})=>{l("update:value",d)}};return(d,b)=>(n(),s("sl-input-number",f(a,c(m,!0)),[o(d.$slots,"default")],16))}}),A=u({__name:"input-text",props:{disabled:{type:Boolean,default:!1},medium:{type:Boolean},placeholder:{default:""},small:{type:Boolean},type:{default:"text"},value:{}},emits:["update:value"],setup(e,{emit:t}){const a=e,l=t,m={slInput:({detail:d})=>{l("update:value",d)}};return(d,b)=>(n(),s("sl-input-text",f(a,c(m,!0)),[o(d.$slots,"default")],16))}}),k={};function x(e,t){return n(),s("sl-keyboard",null,[o(e.$slots,"default")])}const K=i(k,[["render",x]]),M=u({__name:"label",props:{name:{},required:{type:Boolean,default:!1}},setup(e){const t=e;return(a,l)=>(n(),s("sl-label",r(p(t)),[o(a.$slots,"default")],16))}}),N=u({__name:"layout",props:{model:{default:{id:crypto.randomUUID(),type:"tabs",items:[]}}},setup(e){const t=e;return(a,l)=>(n(),s("sl-layout",r(p(t)),[o(a.$slots,"default")],16))}}),O=u({__name:"popover",props:{align:{default:"start"},position:{default:"bottom"},target:{}},setup(e){const t=e;return(a,l)=>(n(),s("sl-popover",r(p(t)),[o(a.$slots,"default")],16))}}),R=u({__name:"splitter",props:{blueSize:{default:50},disabled:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!0},maxBlue:{default:100},maxGreen:{default:100},minBlue:{default:0},minGreen:{default:0},vertical:{type:Boolean,default:!1}},setup(e){const t=e;return(a,l)=>(n(),s("sl-splitter",r(p(t)),[o(a.$slots,"default")],16))}}),w=u({__name:"tab",props:{active:{type:Boolean,default:!1}},setup(e){const t=e;return(a,l)=>(n(),s("sl-tab",r(p(t)),[o(a.$slots,"default")],16))}}),J=u({__name:"tabs",props:{small:{type:Boolean,default:!1}},setup(e){const t=e;return(a,l)=>(n(),s("sl-tabs",r(p(t)),[o(a.$slots,"default")],16))}}),Q=u({__name:"tooltip",props:{debounce:{default:.25},position:{default:[0,0]},target:{}},setup(e){const t=e;return(a,l)=>(n(),s("sl-tooltip",r(p(t)),[o(a.$slots,"default")],16))}}),V={async install(){y()}};export{C as SlAvatar,P as SlBlankslate,T as SlBreadcrumb,U as SlBreadcrumbs,q as SlButton,D as SlCard,E as SlForm,F as SlFormControl,G as SlHud,H as SlIcon,L as SlInputCheckbox,j as SlInputNumber,A as SlInputText,K as SlKeyboard,M as SlLabel,N as SlLayout,O as SlPopover,R as SlSplitter,w as SlTab,J as SlTabs,Q as SlTooltip,V as SlithePlugin};
