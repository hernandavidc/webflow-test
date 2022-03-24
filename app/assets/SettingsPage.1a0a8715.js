var v=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&u(e,n,t[n]);if(m)for(var n of m(t))$.call(t,n)&&u(e,n,t[n]);return e},r=(e,t)=>b(e,y(t));import{d as k,m as h,aE as V,D as C,l as S,p as j,r as U,b as g,e as L,h as s,g as a,f as E,w as f,aw as d,n as i,q as _,o as B}from"./vendor.e615fd77.js";import{D as N}from"./DropdownVanilla.789c2b81.js";import{a as q}from"./index.899ddffe.js";const A=k({name:"TalentSettings",components:{DropdownVanilla:N},data(){return{user_app_language:"",name:"Name",last_name:"Last name",phone_number:"",show_phone_number:"06 00 00 00",phone_area_code:"",show_phone_area_code:"+33",talent:{email:"",actual_password:"",new_password:"",new_password_confirm:"",confirm_delete_password:""},collapse:!1}},computed:r(c(c({},h("auth",["email","userData"])),h("auth",["userData"])),{validate_pass_match(){if(this.talent.new_password==this.talent.new_password_confirm&&this.talent.new_password!="")return!0},validate_min_char(){if(this.validate_pass("min_char"))return!0},validate_number(){if(this.validate_pass("number"))return!0},validate_special_char(){if(this.validate_pass("special_char"))return!0}}),directives:{debounce:V.exports.getDirective("3")},created(){this.user_app_language=this.$i18n.locale,this.userData.settings&&(this.$i18n.locale=this.userData.settings.language,this.user_app_language=this.$i18n.locale,this.userData.settings.phone_area_code&&(this.show_phone_area_code="+"+this.userData.settings.phone_area_code),this.userData.settings.phone_number&&(this.show_phone_number=this.userData.settings.phone_number),this.userData.settings.email&&(this.talent.email=this.userData.settings.email))},mounted(){[].slice.call(document.querySelectorAll(".dropdown-toggle")).map(function(t){return new C(t)})},methods:r(c(c({},S("talent",["update_profile_lang","update_profile_phone_number"])),j("auth",["update_user_data_settings"])),{change_user_lang(e){window.localStorage.setItem("userLang",e),this.$i18n.locale=e,window.localStorage.setItem("userLang",e);let t={id:this.userData._id,type:"language",value:this.$i18n.locale};this.update_profile_lang(t),this.update_user_data_settings(t)},change_user_phone(e,t){let n={id:this.userData._id,type:e,value:t};t.length>0&&(this.update_profile_lang(n),this.update_user_data_settings(n))},validate_pass(e){const t=/\d+/,n=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/;if(e=="min_char"){if(this.talent.new_password.length>6)return!0}else{if(e=="number")return t.test(this.talent.new_password);if(e=="special_char")return n.test(this.talent.new_password)}},click_collapse(){this.collapse=!this.collapse}})}),I={class:"container"},M={class:"row mx-0 settings_page_container"},P={class:"mb-4"},T={class:"col-10 col-lg-12 ms-4 ms-lg-0 p-4 bg-white rounded-12"},z={class:"row flex-container"},F={class:"col-12 col-lg-8 flex-item"},G={class:"row"},H={class:"fw-bold"},J={class:"col-12 col-md-6"},K={class:"me-4"},O={class:"form-label text-primary fs-14 fw-medium"},Q={class:"input-group mb-3"},R=["placeholder"],W={class:"col-12 col-md-6"},X={class:"form-label text-primary fs-14 fw-medium"},Y={class:"input-group mb-3"},Z=["placeholder"],x={class:"col-12 col-md-6 col-lg-4 col-xl-3 flex-item"},ss={class:"fw-bold"},es={class:"form-label text-primary fs-14 fw-medium",for:""},ts={class:"dropdown me-sm-4 w-lg-50"},as={class:"py-2"},ls={class:""},os={class:"col-12 col-md-6 col-lg-8 flex-item"},ns={class:"row"},is={class:"col-12 col-lg-6"},ds={class:"me-4"},cs={class:"form-label text-primary fs-14 fw-medium"},_s={class:"input-group mb-3"},rs=["placeholder"],ps={class:"col-12 col-lg-6"},ms={class:"form-label text-primary fs-14 fw-medium"},us={class:"row mx-0"},hs={class:"col-3 col-lg-2 px-0"},gs={class:"input-group mb-3"},fs=["placeholder"],ws={class:"col-6 ms-3 px-0"},vs={class:"input-group mb-3"},bs=["placeholder"],ys={class:"row mt-3"},Ds={class:"fw-bold"},$s={class:"col-12 col-lg-8"},ks={class:"row"},Vs={class:"col-12 col-sm-6"},Cs={class:"me-4"},Ss={class:"form-label text-primary fs-14 fw-medium"},js={class:"input-group mb-3"},Us={class:"col-12 col-sm-6"},Ls={class:"me-4"},Es={class:"form-label text-primary fs-14 fw-medium"},Bs={class:"input-group mb-3"},Ns={class:"col-12 col-lg-4 col-xl-3"},qs={class:"row"},As={class:"form-label text-primary fs-14 fw-medium"},Is={class:"col-12 col-sm-6 col-lg-12 pt-1"},Ms={class:"me-4"},Ps={class:"input-group mb-3"},Ts={class:"col-12 col-md-10 offset-md-1 col-lg-6 col-xxl-4 offset-lg-3 flex-wrap offset-xxl-4 d-flex text-dark-gray"},zs=s("em",{class:"fas fa-check-circle"},null,-1),Fs={class:"fs-12 ms-2"},Gs=s("em",{class:"fas fa-check-circle"},null,-1),Hs={class:"fs-12 ms-2"},Js=s("em",{class:"fas fa-check-circle"},null,-1),Ks={class:"fs-12 ms-2"},Os={class:"d-flex justify-content-end"},Qs={class:"col-10 col-lg-12 ms-4 ms-lg-0 p-4 bg-white rounded-12 position-relative"},Rs={class:"fw-bold mb-1"},Ws={class:"arrow_container me-3"},Xs=s("em",{class:"far fa-angle-right"},null,-1),Ys=[Xs],Zs={class:"arrow_container me-3"},xs=s("em",{class:"far fa-angle-down"},null,-1),se=[xs],ee={class:"collapse",id:"settings_delete_account_collapsable"},te={class:"fs-12 mb-0"},ae={class:"row mt-4"},le={class:"col-12 col-lg-4"},oe={class:"me-4"},ne={class:"form-label text-primary fs-14 fw-medium"},ie={class:"input-group mb-3"},de={class:"col d-flex justify-content-end align-items-center"},ce={class:"delete_acc_button"};function _e(e,t,n,re,pe,me){const w=U("DropdownVanilla"),l=g("t"),p=g("debounce");return B(),L("div",I,[s("div",M,[a(s("h4",P,null,512),[[l,"settings_page.title"]]),s("div",T,[s("div",z,[s("div",F,[s("div",G,[a(s("p",H,null,512),[[l,"settings_page.my_account.title"]]),s("div",J,[s("div",K,[a(s("label",O,null,512),[[l,"settings_page.my_account.name"]]),s("div",Q,[s("input",{type:"text",class:"form-control",id:"name",placeholder:e.name!=""?e.name:e.$t("settings_page.my_account.name")},null,8,R)])])]),s("div",W,[a(s("label",X,null,512),[[l,"settings_page.my_account.last_name"]]),s("div",Y,[s("input",{type:"text",class:"form-control me-4",id:"name",placeholder:e.last_name!=""?e.last_name:e.$t("settings_page.my_account.last_name")},null,8,Z)])])])]),s("div",x,[a(s("p",ss,null,512),[[l,"settings_page.language.title"]]),a(s("label",es,null,512),[[l,"settings_page.language.description"]]),s("div",ts,[E(w,null,{dropdown_btn:f(()=>[s("div",as,[a(s("span",null,null,512),[[_,e.$i18n.locale=="fr"],[l,"global.languages.french"]]),a(s("span",null,null,512),[[_,e.$i18n.locale=="en"],[l,"global.languages.english"]]),a(s("span",null,null,512),[[_,e.$i18n.locale=="es"],[l,"global.languages.spanish"]])])]),dropdown_li:f(()=>[s("ul",ls,[s("li",{class:"dropdown-item",onClick:t[0]||(t[0]=o=>e.change_user_lang("fr"))}),s("li",{class:"dropdown-item",onClick:t[1]||(t[1]=o=>e.change_user_lang("en"))}),s("li",{class:"dropdown-item",onClick:t[2]||(t[2]=o=>e.change_user_lang("es"))})])]),_:1})])]),s("div",os,[s("div",ns,[s("div",is,[s("div",ds,[a(s("label",cs,null,512),[[l,"settings_page.my_account.mail"]]),s("div",_s,[s("input",{type:"email",class:"form-control",id:"email",autocomplete:"off",placeholder:e.talent.email!=""?e.talent.email:e.$t("settings_page.my_account.mail")},null,8,rs)])])]),s("div",ps,[a(s("label",ms,null,512),[[l,"settings_page.my_account.phone"]]),s("div",us,[s("div",hs,[s("div",gs,[a(s("input",{type:"number",class:"form-control ps-2 pe-1",name:"area_code",id:"phone_area_code",placeholder:e.show_phone_area_code,"onUpdate:modelValue":t[3]||(t[3]=o=>e.phone_area_code=o)},null,8,fs),[[d,e.phone_area_code],[p,e.change_user_phone("phone_area_code",String(e.phone_area_code)),"700ms"]])])]),s("div",ws,[s("div",vs,[a(s("input",{type:"number",class:"form-control",name:"phone_number",id:"phone_number",placeholder:e.show_phone_number,"onUpdate:modelValue":t[4]||(t[4]=o=>e.phone_number=o),autocomplete:"false"},null,8,bs),[[d,e.phone_number],[p,e.change_user_phone("phone_number",String(e.phone_number)),"700ms"]])])])])])])])]),s("div",ys,[a(s("p",Ds,null,512),[[l,"settings_page.password.title"]]),s("div",$s,[s("div",ks,[s("div",Vs,[s("div",Cs,[a(s("label",Ss,null,512),[[l,"settings_page.password.actual_pass"]]),s("div",js,[a(s("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=o=>e.talent.actual_password=o),class:"form-control",placeholder:"**********",autocomplete:"new-password"},null,512),[[d,e.talent.actual_password]])])])]),s("div",Us,[s("div",Ls,[a(s("label",Es,null,512),[[l,"settings_page.password.new_pass"]]),s("div",Bs,[a(s("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=o=>e.talent.new_password=o),class:"form-control",placeholder:"**********",autocomplete:"off",name:"new_pass"},null,512),[[d,e.talent.new_password]])])])])])]),s("div",Ns,[s("div",qs,[a(s("label",As,null,512),[[l,"settings_page.password.new_pass_confirm"]]),s("div",Is,[s("div",Ms,[s("div",Ps,[a(s("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=o=>e.talent.new_password_confirm=o),class:i(["form-control",{confirmation_new_pass:e.validate_pass_match}]),placeholder:"**********",autocomplete:"off",name:"confirm_new_pass"},null,2),[[d,e.talent.new_password_confirm]])])])])])]),s("div",Ts,[s("div",{class:i(["d-flex",{validate_check:e.validate_min_char}])},[zs,a(s("p",Fs,null,512),[[l,"settings_page.password.validation.min_char"]])],2),s("div",{class:i(["d-flex mx-4",{validate_check:e.validate_number}])},[Gs,a(s("p",Hs,null,512),[[l,"settings_page.password.validation.number"]])],2),s("div",{class:i(["d-flex",{validate_check:e.validate_special_char}])},[Js,a(s("p",Ks,null,512),[[l,"settings_page.password.validation.especial_char"]])],2)]),s("div",Os,[a(s("button",{class:i(["btn btn-primary w-auto justify-content-end",{disabled:!e.validate_pass_match||!e.validate_number||!e.validate_special_char}]),onClick:t[8]||(t[8]=o=>e.validate_pass("number"))},null,2),[[l,"settings_page.button"]])])])]),s("div",Qs,[s("div",{"data-bs-toggle":"collapse",href:"#settings_delete_account_collapsable",class:"d-flex justify-content-between",role:"button","aria-expanded":"false","aria-controls":"settings_delete_account_collapsable",onClick:t[9]||(t[9]=o=>e.click_collapse())},[a(s("p",Rs,null,512),[[l,"settings_page.delete_account.title"]]),a(s("div",Ws,Ys,512),[[_,!e.collapse]]),a(s("div",Zs,se,512),[[_,e.collapse]])]),s("div",ee,[a(s("p",te,null,512),[[l,"settings_page.delete_account.subtitle"]]),s("div",ae,[s("div",le,[s("div",oe,[a(s("label",ne,null,512),[[l,"settings_page.delete_account.description"]]),s("div",ie,[a(s("input",{type:"password","onUpdate:modelValue":t[10]||(t[10]=o=>e.talent.confirm_delete_password=o),class:i(["form-control",{confirmation_new_pass:e.validate_pass_match}]),placeholder:"**********",autocomplete:"off",name:"confirm_delete_pass"},null,2),[[d,e.talent.confirm_delete_password]])])])]),s("div",de,[s("div",ce,[a(s("button",{class:i(["btn btn-primary w-auto justify-content-end",{disabled:!0}]),onClick:t[11]||(t[11]=o=>e.validate_pass("number"))},null,512),[[l,"settings_page.delete_account.button"]])])])])])])])])}var we=q(A,[["render",_e]]);export{we as default};
