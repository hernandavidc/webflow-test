import{d as n,r,h as a,q as i,o as l,b as c,i as p,e as d}from"./vendor.c113d557.js";import{a as v}from"./index.981b3a53.js";const m=n({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(e){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),_={class:"bottom-style"};function w(e,s,h,f,b,g){const o=r("font-awesome-icon");return a((l(),c("a",{onClick:s[0]||(s[0]=(...t)=>e.scrollTop&&e.scrollTop(...t)),class:"bottom-right"},[p("span",_,[d(o,{icon:"chevron-up"})])],512)),[[i,e.visible]])}var y=v(m,[["render",w]]),B="https://cdn.jsdelivr.net/gh/hernandavidc/webflow-test/app/assets/img/icons/briefcase.svg",L="https://cdn.jsdelivr.net/gh/hernandavidc/webflow-test/app/assets/img/icons/management-type.png";export{y as S,B as _,L as a};
