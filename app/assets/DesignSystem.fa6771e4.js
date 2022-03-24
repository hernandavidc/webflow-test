import{a as $,b as k}from"./index.899ddffe.js";import{x as S,d as f,r as u,o as c,e as g,h as s,g as n,q as T,t as m,f as r,j as _,k as d,i as N,w as b,s as e,ao as C,z as j,b as P,aC as y,av as p,aD as h}from"./vendor.e615fd77.js";const B=()=>{let t=S();return Object.fromEntries(Object.keys(t._mutations).map(o=>[o.replace(/(\w+\/)+/g,""),i=>t.commit(o,i)]))},M=f({name:"cardCTDA",props:{iconName:{type:[String,Object]},btnTo:{type:[String,Object]},btnLink:{type:String},points:{type:String}},data(){return{action:""}},methods:{redirect(){this.$props.btnTo?this.$router.push(this.$props.btnTo):this.$props.btnLink&&(this.action=this.$props.btnLink,window.location.href=this.action)}}}),L={class:"bg-gradiend-trnsp card-cta h-100 d-flex justify-content-center align-items-center py-4 py-lg-5 position-relative"},D={class:"d-none d-md-block text-center align-self-center"},A={class:"position-absolute badge rounded-pill bg-white text-dark-blue mb-0"},O={class:"fw-bold text-green fs-6"},V=e(" pts"),z={key:0,class:"text-center card-cta__icon mb-3 mb-lg-4"},E={class:"justify-content-center align-items-center"},J={class:"card-cta__title"},q={class:"card-cta__text mb-4 mb-lg-5"},R={key:2,class:"align-items-center"},F=["href"],G={class:"d-flex align-items-center"},H={class:"flex-shrink-0"},I={key:0,class:"text-center card-cta__icon mb-0"},K={class:"justify-content-center align-items-center"},Q={class:"flex-grow-1 ms-3"},U={class:"card-cta__text mb-0"};function W(t,o,i,v,w,x){const l=u("font-awesome-icon"),a=u("router-link");return c(),g("div",L,[s("div",D,[n(s("p",A,[s("span",O,"+"+m(t.points),1),V],512),[[T,t.points]]),t.iconName?(c(),g("p",z,[s("span",E,[r(l,{icon:t.iconName},null,8,["icon"])])])):_("",!0),s("p",J,[d(t.$slots,"title")]),s("p",q,[d(t.$slots,"text")]),t.btnTo?(c(),N(a,{key:1,to:t.btnTo,class:"btn btn-primary"},{default:b(()=>[d(t.$slots,"btn-text")]),_:3},8,["to"])):_("",!0),t.btnLink?(c(),g("div",R,[s("a",{href:t.btnLink,class:"btn btn-outline-secondary"},[d(t.$slots,"btn-text")],8,F)])):_("",!0)]),s("a",{onClick:o[0]||(o[0]=Es=>t.redirect()),class:"d-flex d-md-none"},[s("div",G,[s("div",H,[t.iconName?(c(),g("p",I,[s("span",K,[r(l,{icon:t.iconName},null,8,["icon"])])])):_("",!0)]),s("div",Q,[s("p",null,[d(t.$slots,"title")]),s("p",U,[d(t.$slots,"text")])]),r(l,{icon:"chevron-right",class:"card-cta__btn-icon"})])])])}var X=$(M,[["render",W]]);const Y={class:"home container"},Z=s("div",{class:"text-center"},[s("img",{alt:"Jobgether logo",class:"img mt-4 mb-5",width:"250",src:k})],-1),ss={class:"row"},ts={class:"col-lg-12"},es=s("div",{class:"col text-center"},[s("h2",null,"Translations test")],-1),is={class:"col text-center"},as={class:"col text-center"},os=h('<div class="col-lg-4"><div class="row row-cols-2 text-center"><div class="col px-0 mb-3"><button class="btn btn-outline-white">Outline white</button></div><div class="col px-0 mb-3"><button class="btn btn-primary">Primary</button></div><div class="col px-0 mb-3"><button class="btn btn-outline-secondary">Secondary <small style="font-size:10px;">outline</small></button></div><div class="col px-0 mb-3"><button class="btn btn-primary disabled">Primary</button></div><div class="col px-0 mb-3"><button class="btn btn-outline-secondary disabled">Secondary <small style="font-size:10px;">outline</small></button></div></div><div class="row px-0"><div class="col px-0"><div class="dropdown"><button class="btn btn-primary text-start w-100 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown button </button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item active" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div></div><div class="px-4 mt-2"><label class="form-label">Placeholder</label><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Textfield"></div></div><div class="px-4 error"><label class="form-label">Placeholder</label><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Textfield"></div></div></div>',1),ls={class:"col-lg-4"},ns={class:"px-2"},rs={class:"me-1"},cs={class:"me-2"},ds=e(),ps={class:"mt-4"},gs={class:"progress"},ms=["aria-valuenow"],_s={class:"progress mt-2"},bs=["aria-valuenow"],hs={class:"col-lg-4"},us={class:"row"},vs={"aria-label":"Page navigation example"},fs={class:"pagination"},ys={class:"page-item"},ws={class:"page-link",href:"#","aria-label":"Previous"},xs={"aria-hidden":"true"},$s=h('<li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item active"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">4</a></li><li class="page-item"><a class="page-link" href="#">5</a></li>',5),ks={class:"page-item"},Ss={class:"page-link",href:"#","aria-label":"Next"},Ts={"aria-hidden":"true"},Ns=h('<div class="row mb-2"><div class="matching"><span class="me-2 matching__text"> Matching </span><span class="matching__percent-4"> 80 % </span></div></div><div class="row mb-2"><div class="matching"><span class="me-2 matching__text"> Matching </span><span class="matching__percent-3"> 75 % </span></div></div><div class="row mb-2"><div class="matching"><span class="me-2 matching__text"> Matching </span><span class="matching__percent-2"> 70 % </span></div></div><div class="row mb-2"><div class="matching"><span class="me-2 matching__text"> Matching </span><span class="matching__percent-1"> 60 % </span></div></div><div class="row mb-2"><div class="badge-benefits-primary">badge-benefits-primary</div></div>',5),Cs={class:"row my-5"},js={class:"col-lg-4"},Ps=s("h3",{class:"border-bottom"},"Jobgether generic CSS classes",-1),Bs=s("p",{class:"clickable"},[e("."),s("strong",null,"clickable"),e(", propety cursor: pointer")],-1),Ms=s("p",{class:"text-green"},[e("."),s("strong",null,"text-green"),e(", propety color: $green-app")],-1),Ls=s("p",{class:"error"},[e("."),s("strong",null,"error"),e(", propeties:")],-1),Ds={class:"error py-2 pre-wrap border ms-3 mb-0"},As=s("p",{class:"bg-primary rounded-12 text-white mt-2 ps-2 py-3"},[e("."),s("strong",null,"rounded-12"),e(", propeties: border-radius: 12px;")],-1),Os=s("p",{class:"bg-primary text-white mt-2 ps-2 ms-n10"},[e("."),s("strong",null,"ms-n10"),e(", propeties: margin-left: -10px !important;")],-1),Vs=s("p",{class:"text-underline"},[e("."),s("strong",null,"text-underline"),e(", propety text-decoration: underline")],-1),zs=h('<div class="col-lg-4"></div><div class="col-lg-4"><h3 class="border-bottom">Colors</h3><ul class="list-group list-group-flush rounded"><li class="list-group-item"><div class="me-2 circle bg-primary"></div>Primary color (class: bg-primary)</li><li class="list-group-item"><div class="me-2 circle bg-green-app"></div>green-app color (class: bg-green-app)</li><li class="list-group-item"><div class="me-2 circle bg-blue-app"></div>blue-app color (class: bg-blue-app)</li><li class="list-group-item"><div class="me-2 circle bg-light-blue"></div>light-blue color (class: bg-light-blue)</li><li class="list-group-item"><div class="me-2 circle bg-dark-gray"></div>dark-gray color (class: bg-dark-gray)</li><li class="list-group-item"><div class="me-2 circle bg-light-gray"></div>light-gray color (class: bg-light-gray)</li><li class="list-group-item"><div class="me-2 circle bg-gray"></div>gray color (class: bg-gray)</li><li class="list-group-item"><div class="me-2 circle bg-green-active"></div>green-active color (class: bg-green-active)</li><li class="list-group-item bg-gradiend"><div class="me-2 circle bg-gradiend"></div>gradiend color (class: bg-gradiend)</li><li class="list-group-item bg-gradiend-trnsp"><div class="me-2 circle bg-gradiend-trnsp"></div>gradiend color (class: bg-gradiend-trnsp)</li></ul></div>',2),Rs=f({setup(t){const o={errorPropeties:`     color: $error;
      label{ font-weight: 600; }
      input[type=text]{
          background: $light-error !important;
          border-color: $light-error !important;
      }`},i=C({progress:0}),{setLayout:v}=B();return v("BaseLayout"),j(function(){setTimeout(function(){console.log("change progress"),i.progress=58},2e3)}),(w,x)=>{const l=u("font-awesome-icon"),a=P("t");return c(),g("div",Y,[Z,s("div",ss,[s("div",ts,[es,s("div",is,[n(s("span",null,null,512),[[a,{path:"greeting_with_name",args:{name:"Alex"}}]])]),s("div",as,[n(s("span",null,null,512),[[a,{path:"match.intro.subtitle"}]])])]),os,s("div",ls,[s("div",ns,[r(X,{iconName:"user-tie",btnTo:"/profesional"},{title:b(()=>[n(s("span",rs,null,512),[[a,"dashboard.widget.professional.title"]]),s("strong",null,[n(s("span",null,null,512),[[a,"dashboard.widget.professional.titleBold"]])])]),text:b(()=>[n(s("span",null,null,512),[[a,"dashboard.widget.professional.text"]])]),"btn-text":b(()=>[n(s("span",cs,null,512),[[a,"dashboard.widget.professional.btn"]]),ds,r(l,{class:"card-cta__btn-icon",icon:"chevron-right"})]),_:1})]),s("div",ps,[s("div",gs,[s("div",{class:"progress-bar",role:"progressbar",style:y({width:p(i).progress+"%"}),"aria-valuenow":p(i).progress,"aria-valuemin":"0","aria-valuemax":"100"},m(p(i).progress)+"%",13,ms)]),s("div",_s,[s("div",{class:"progress-bar bg-blue-app",role:"progressbar",style:y({width:p(i).progress+"%"}),"aria-valuenow":p(i).progress,"aria-valuemin":"0","aria-valuemax":"100"},m(p(i).progress)+"%",13,bs)])])]),s("div",hs,[s("div",us,[s("nav",vs,[s("ul",fs,[s("li",ys,[s("a",ws,[s("span",xs,[r(l,{icon:"chevron-left"})])])]),$s,s("li",ks,[s("a",Ss,[s("span",Ts,[r(l,{icon:"chevron-right"})])])])])])]),Ns])]),s("div",Cs,[s("div",js,[Ps,Bs,Ms,Ls,s("p",Ds,m(o.errorPropeties),1),As,Os,Vs]),zs])])}}});export{Rs as default};
