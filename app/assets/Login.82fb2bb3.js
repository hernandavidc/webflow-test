var g=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(t,a,s)=>a in t?g(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,n=(t,a)=>{for(var s in a||(a={}))b.call(a,s)&&d(t,s,a[s]);if(c)for(var s of c(a))w.call(a,s)&&d(t,s,a[s]);return t},r=(t,a)=>f(t,v(a));import{o as h,b as $,h as e,k as C,d as z,aE as y,m as L,p as u,l as k,r as B,f as A,i as D,w as S,g as i,q as o}from"./vendor.3251509c.js";import{a as _}from"./index.fa68af91.js";var T="https://cdn.jsdelivr.net/gh/hernandavidc/webflow-test/app/assets/img/login-banner.png";const j={},E={class:"container my-auto"},G={class:"row py-4 my-3"},U=e("div",{class:"col-12 col-md-6"},[e("div",{class:"d-flex align-items-center"},[e("img",{src:T,class:"w-100",alt:"Logo Jobgether"})])],-1),x={class:"col-12 col-md-6 px-md-5 align-self-center"};function W(t,a){return h(),$("div",E,[e("div",G,[U,e("div",x,[C(t.$slots,"default")])])])}var q=_(j,[["render",W]]);const J=z({name:"TalentLogin",components:{GridAuth:q},directives:{debounce:y.exports.getDirective("3")},data(){return{talent:{email:"",password:""},valid_email:0}},computed:r(n({},L("auth",["auth0Client"])),{validate_min_char(){if(this.validate_pass("min_char"))return!0},validate_number(){if(this.validate_pass("number"))return!0}}),created(){this.setLayout("BaseLogin")},methods:r(n(n(n({},u(["setLayout"])),u("auth",["setUser"])),k("auth",["loginTalent"])),{async login(){try{await this.auth0Client.loginWithRedirect({});let t=await this.auth0Client.getUser();this.setUser(t)}catch(t){console.log(t)}},auth(){let t={email:this.talent.email,password:this.talent.password};this.loginTalent(t).then(a=>{if((a==null?void 0:a.statusCode)&&a.statusCode>=400){let s=a.message;alert(s)}else this.$router.push({name:"TalentSearchBar"}),alert("Welcome")}).catch(a=>{console.error("Error method Login: ",a)})},validate_email(){console.log("validate_email");const t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;this.talent.email.match(t)?this.talent.email=="login@mail.com"?this.valid_email=2:this.valid_email=1:this.valid_email=0},validate_pass(t){const a=/\d+/,s=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/;if(t=="min_char"){if(this.talent.password.length>6)return!0}else{if(t=="number")return a.test(this.talent.password);if(t=="special_char")return s.test(this.talent.password)}}})}),M={class:"fs-22 fw-bold transition"},N={class:"fs-22 fw-bold transition"},P={class:"transition"},R={class:"ms-2 text-green clickable"},V={class:"fs-22 fw-bold transition"},F={class:"transition"},H={class:"px-4 mb-4 pb-3"},I={class:"me-2"},K=e("i",{class:"far fa-sign-in-alt fs-20"},null,-1);function O(t,a,s,Q,X,Y){const m=B("GridAuth"),l=A("t");return h(),D(m,null,{default:S(()=>[i(e("h2",M,null,512),[[o,t.valid_email==0],[l,"auth.greeting_title"]]),i(e("h2",N,null,512),[[o,t.valid_email==1],[l,"auth.create_account.title"]]),i(e("p",P,[i(e("span",null,null,512),[[l,"auth.create_account.subtitle"]]),i(e("span",R,null,512),[[l,"auth.create_account.subtitle_cta"]])],512),[[o,t.valid_email==0||t.valid_email==1]]),i(e("h2",V,null,512),[[o,t.valid_email==2],[l,"auth.login.title"]]),i(e("p",F,[i(e("span",null,null,512),[[l,"auth.login.subtitle"]])],512),[[o,t.valid_email==2]]),e("p",H,[e("button",{class:"btn btn-primary w-100 bg-google-color border-0",type:"button",onClick:a[0]||(a[0]=(...p)=>t.login&&t.login(...p))},[i(e("span",I,null,512),[[l,"auth.login.btn_submit"]]),K])])]),_:1})}var et=_(J,[["render",O]]);export{et as default};
