import{d as l,v as r,b as a,o as _,e as p,h as e,g as c,aC as u,k as s,n}from"./vendor.e615fd77.js";import{a as v}from"./index.899ddffe.js";const b=l({name:"DropdownVanilla",directives:{clickOutside:r.directive},props:{button_bg_color:{type:String,required:!1}},data(){return{button_active:!1,dropdown_visible:!1}},methods:{show_dropdown_items(){this.dropdown_visible=!this.dropdown_visible,this.button_active=!0},close_dropdown(){this.dropdown_visible=!1,this.button_active=!1},disable_button(){this.button_active=!1}}}),w={class:"dropdown_vanilla"};function f(o,t,m,h,g,k){const i=a("click-outside");return _(),p("div",w,[e("ul",{class:n(["dropdown_list",{dropdown_active:o.dropdown_visible,dropdown_button_active:o.button_active}])},[e("li",null,[c(e("div",{class:"dropdown_button d-flex align-items-center justify-content-between",style:u({backgroundColor:o.button_bg_color}),onClick:t[0]||(t[0]=d=>o.show_dropdown_items())},[s(o.$slots,"dropdown_btn"),e("em",{class:n(["far fa-angle-down",{textPrimary:o.button_bg_color=="transparent"}]),style:{width:"21px",height:"21px"}},null,2)],4),[[i,o.close_dropdown]]),e("div",{class:"dropdown_list position-absolute",onClick:t[1]||(t[1]=d=>o.disable_button())},[s(o.$slots,"dropdown_li",{class:"dropdown_list_button px-0"})])])],2)])}var C=v(b,[["render",f]]);export{C as D};
