import{d as n,r,h as a,q as i,o as l,f as c,i as d,g as p}from"./vendor.c408dfb7.js";import{a as v}from"./index.64da2b7d.js";const m=n({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(e){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),_={class:"bottom-style"};function f(e,s,w,h,b,g){const o=r("font-awesome-icon");return a((l(),c("a",{onClick:s[0]||(s[0]=(...t)=>e.scrollTop&&e.scrollTop(...t)),class:"bottom-right"},[d("span",_,[p(o,{icon:"chevron-up"})])],512)),[[i,e.visible]])}var y=v(m,[["render",f]]),B="https://cdn.jsdelivr.net/gh/hernandavidc/webflow-test/app/assets/img/icons/briefcase.svg",L="https://cdn.jsdelivr.net/gh/hernandavidc/webflow-test/app/assets/img/icons/management-type.png";export{y as S,B as _,L as a};
