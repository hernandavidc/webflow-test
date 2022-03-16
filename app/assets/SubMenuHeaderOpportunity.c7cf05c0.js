var j=Object.defineProperty,U=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(t,a,n)=>a in t?j(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,d=(t,a)=>{for(var n in a||(a={}))B.call(a,n)&&y(t,n,a[n]);if(b)for(var n of b(a))V.call(a,n)&&y(t,n,a[n]);return t},f=(t,a)=>U(t,x(a));import{d as v,m as g,p as k,b as m,e as $,o as l,f as r,i as e,h as o,k as u,s as I,t as N,aa as D,ab as w,r as S,g as c,w as O}from"./vendor.c408dfb7.js";import{h as P}from"./moment.08a7f518.js";import{M as W}from"./bootstrap.esm.5b5e0dd6.js";import{a as C}from"./index.64da2b7d.js";const A=v({name:"SubmenuWidget",props:{matchData:{type:Object,required:!0},reasons:{type:Object,default:["enterprise","sector","contract","mission","location","salary","homework","other"]}},data(){return{modalType:"",reasonSelect:[],userStatus:{}}},computed:d({},g("auth",["userData","accessToken"])),created(){this.checkStatusUser(),this.getCurrentUser()},methods:f(d(d(d(d({},k("auth",["update_user_data_array"])),k("talent",["updateUserMeta"])),m("auth",["getCurrentUser"])),m("talent",["update_profile_archived_offers"])),{formatDate(t){return P(t).format("L")},checkStatusUser(){this.userStatus={loggedout:!0,loggedin:!1},window.localStorage.getItem("accessToken")&&(this.userStatus={loggedout:!1,loggedin:!0})},openUrl(t){window.open(t,"_blank")},modal_(t){this.modalType=t,new W(document.getElementById("modalValidate")).show()},change_archived_offers(){if(this.accessToken){let t={id:this.userData._id,type:"archived_offers",value:this.matchData._id};this.update_user_data_array(t),this.update_profile_archived_offers(t)}else this.$router.push({name:"TalentLogin"})}})}),q={class:"modal fade",id:"modalValidate",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-dialog-centered"},Y={class:"modal-content rounded-12 border-0"},z=e("div",{class:"modal-header"},[e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),F={key:0,class:"modal-body"},H={class:"text-center pb-4"},G={key:0,class:"d-flex justify-content-center px-4 py-1"},J={key:1,class:"d-flex justify-content-center px-4 py-2"},K={key:2,class:"d-flex justify-content-center px-4 py-2"},Q={key:0,id:"match-card-neutral",class:"d-block d-md-flex mb-3 align-items-center bg-white py-3 px-4 rounded-12 submenu__intro text-center text-md-start"},R={class:"me-auto"},X={class:"mb-1"},Z={key:0,class:"m-0"},tt={key:0,class:"ms-3 me-1 d-inline"},et={class:"ms-3 me-1 d-inline"};function at(t,a,n,L,M,T){var p;const s=$("t");return l(),r(w,null,[e("div",q,[e("div",E,[e("div",Y,[z,t.modalType=="APPLY"?(l(),r("div",F,[o(e("h4",H,null,512),[[s,"opportunity.submenu.modal.valider.title"]]),t.matchData.meta.applyLinkLinkedin?(l(),r("div",G,[e("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:a[0]||(a[0]=i=>t.openUrl(t.matchData.meta.applyLinkLinkedin))},[o(e("span",null,null,512),[[s,"opportunity.submenu.modal.valider.via.linkedin"]])])])):u("",!0),t.matchData.meta.applyLinkIndeed?(l(),r("div",J,[e("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:a[1]||(a[1]=i=>t.openUrl(t.matchData.meta.applyLinkIndeed))},[o(e("span",null,null,512),[[s,"opportunity.submenu.modal.valider.via.indeed"]])])])):u("",!0),t.matchData.meta.applyLinkCareerSite?(l(),r("div",K,[e("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:a[2]||(a[2]=i=>t.openUrl(t.matchData.meta.applyLinkCareerSite))},[o(e("span",null,null,512),[[s,"opportunity.submenu.modal.valider.via.carrerSite"]])])])):u("",!0)])):u("",!0)])])]),t.userData.archived_offers.includes(t.matchData._id)?u("",!0):(l(),r("div",Q,[e("div",R,[o(e("h4",X,null,512),[[s,"opportunity.submenu.title"]]),((p=t.matchData)==null?void 0:p.updated_at)?(l(),r("p",Z,[o(e("span",null,null,512),[[s,"opportunity.submenu.date"]]),I(" "+N(t.formatDate(t.matchData.updated_at)),1)])):u("",!0)]),t.userStatus.loggedin?(l(),r("div",tt,[o(e("button",{class:"btn btn-outline-secondary fw-medium px-4",onClick:a[3]||(a[3]=D(i=>t.change_archived_offers(),["stop"]))},null,512),[[s,"decline"]])])):u("",!0),e("div",et,[o(e("button",{class:"btn btn-primary",onClick:a[4]||(a[4]=D(i=>t.modal_("APPLY"),["stop"]))},null,512),[[s,"global.postulate"]])])]))],64)}var st=C(A,[["render",at]]);const ot=v({components:{SubmenuWidget:st},computed:d({},g("talent",["matchData"])),created(){this.getMatchData(this.$route.params.id)},methods:d({},m("talent",["getMatchData"]))}),nt={class:"container pb-2",id:"returnBack"},it={class:"fs-14 text-white text-start mt-2 mb-0 me-3"},lt=e("em",{class:"fas fa-chevron-left"},null,-1),rt={class:"ms-2"},dt={class:"submenu"},ut={class:"container"},ct={id:"submenu__nav-opportunity",class:"list-group list-group-horizontal submenu__nav d-inline-flex"},pt={class:"list-group-item"},mt={class:"list-group-item"},ht={class:"list-group-item"},_t={class:"list-group-item"},bt={key:0,class:"list-group-item"};function yt(t,a,n,L,M,T){var h,_;const s=S("router-link"),p=S("submenu-widget"),i=$("t");return l(),r(w,null,[e("div",nt,[c(s,{to:{name:"TalentOpportunities"}},{default:O(()=>[e("div",it,[lt,o(e("span",rt,null,512),[[i,"global.returnbBack"]])])]),_:1})]),e("div",dt,[e("div",ut,[c(p,{matchData:t.matchData},null,8,["matchData"]),e("ul",ct,[e("li",pt,[o(c(s,{to:"#information",class:"btn active","aria-current":"page"},null,512),[[i,"opportunity.header.informations"]])]),e("li",mt,[o(c(s,{to:"#flexibility",class:"btn"},null,512),[[i,"opportunity.header.flexibility"]])]),e("li",ht,[o(c(s,{to:"#description",class:"btn"},null,512),[[i,"opportunity.header.description"]])]),e("li",_t,[o(c(s,{to:"#required-profile",class:"btn"},null,512),[[i,"opportunity.header.profilSearch"]])]),((_=(h=t.matchData)==null?void 0:h.meta)==null?void 0:_.leadershipWorkTeam)?(l(),r("li",bt,[o(c(s,{to:"#team",class:"btn"},null,512),[[i,"opportunity.header.team"]])])):u("",!0)])])])],64)}var Dt=C(ot,[["render",yt]]);export{Dt as default};
