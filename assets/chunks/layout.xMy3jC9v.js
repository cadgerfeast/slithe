import{S as _,a as w,f}from"./components.D3mJnzg1.js";import"./sl-layout.oki_j8Kt.js";import{d as S,h as r,o as d,c as y,I as m,w as p,m as s,b as h,p as b,q as g,k as e,_ as V}from"./framework.tKHdXlNu.js";const t=o=>(b("data-v-94bd5447"),o=o(),g(),o),I={class:"playground-layout"},C=t(()=>e("div",{class:"slot-content",slot:"iframe"},[e("iframe",{src:"/iframe.html"})],-1)),k=t(()=>e("div",{class:"slot-content",slot:"view0"},"View 0 (Content)",-1)),B=t(()=>e("div",{class:"slot-content",slot:"view1"},"View 1 (Content)",-1)),x=t(()=>e("div",{class:"slot-content",slot:"view2"},"View 2 (Content)",-1)),N=t(()=>e("div",{class:"slot-content",slot:"view3"},"View 3 (Content)",-1)),z=t(()=>e("div",{class:"slot-content",slot:"view4"},"View 4 (Content)",-1)),J=S({__name:"layout",setup(o){const a=localStorage==null?void 0:localStorage.getItem("slithe.playground.layout.model"),l={type:"splitter",direction:"horizontal",blueSize:30,minBlue:20,items:[{type:"tabs",splittable:!1,droppable:!1,items:[{name:"View 0",viewSlot:"view0",closable:!0}]},{type:"splitter",direction:"vertical",items:[{type:"tabs",items:[{name:"View 1",viewSlot:"view1"},{name:"View 2",viewSlot:"view2"}]},{type:"tabs",items:[{name:"Iframe",viewSlot:"iframe",draggable:!1},{name:"View 3",viewSlot:"view3",active:!0,closable:!0},{name:"View 4",viewSlot:"view4",closable:!0}]}]}]},i=r(0),n=r(a?JSON.parse(a):l);function u(){localStorage.removeItem("slithe.playground.layout.model"),n.value=l,i.value++}function v(c){localStorage&&localStorage.setItem("slithe.playground.layout.model",JSON.stringify(c.detail))}return(c,M)=>(d(),y("div",I,[m(s(w),{class:"reset",small:"",borderless:"",onClick:u},{default:p(()=>[m(s(_),{name:"sync"})]),_:1}),(d(),h(s(f),{key:i.value,".model":n.value,onUpdate:v},{default:p(()=>[C,k,B,x,N,z]),_:1},40,[".model"]))]))}}),L=V(J,[["__scopeId","data-v-94bd5447"]]);export{L as default};