function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.fkph7XP2.js","assets/chunks/sl-splitter2.7nVMVtpJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{X as t}from"./framework.bINXxMeB.js";async function a(i){const{addNotification:o}=await t(()=>import("./index.fkph7XP2.js"),__vite__mapDeps([0,1]));o({type:"info",icon:{name:"info",size:"16px"},message:i})}export{a as n};