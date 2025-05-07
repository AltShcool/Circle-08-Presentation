import{d as _,a4 as u,z as f,f as n,g as t,t as s,X as c,F as h,aj as g,o as i,i as v,e as x,ad as b}from"../modules/vue-DnfkPNEi.js";import{a as y,u as N}from"../index-DvDVnUD0.js";import{a as m}from"../monaco/bundled-types-DammcoRR.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-Bbf8xPr5.js";import"../modules/shiki-Cj2c-_Dm.js";import"../modules/file-saver-BzOOqXCn.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},z={key:0,class:"border-main mb-8"},W=_({__name:"print",setup(C){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=f(()=>d.value.map(e=>{var a;return(a=e.meta)==null?void 0:a.slide}).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,a)=>(i(),n("div",w,[t("div",L,[t("div",T,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(i(!0),n(h,null,g(l.value,(o,r)=>(i(),n("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,s(o==null?void 0:o.no)+"/"+s(c(p)),1),b(" "+s(o==null?void 0:o.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<l.value.length-1?(i(),n("hr",z)):v("v-if",!0)]))),128))])]))}});export{W as default};
