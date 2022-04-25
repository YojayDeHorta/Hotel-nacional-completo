"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[881],{4465:function(e,t,n){n.d(t,{J:function(){return f}});var r="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",i=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null},o=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},s=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.26.0",startTime:t})},c=null,u=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(l),window.Stripe)t(window.Stripe);else try{var r=i();r&&e?console.warn(l):r||(r=o(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))),c},d=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return s(r,n),r},p=Promise.resolve().then((function(){return u(null)})),m=!1;p["catch"]((function(e){m||console.warn(e)}));var f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m=!0;var r=Date.now();return p.then((function(e){return d(e,t,r)}))}},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.HandleSeparateCard.apply(null,arguments)}}},[e._m(0),n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Nombre"},model:{value:e.billingDetails.name,callback:function(t){e.$set(e.billingDetails,"name",t)},expression:"billingDetails.name"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Correo electronico"},model:{value:e.billingDetails.email,callback:function(t){e.$set(e.billingDetails,"email",t)},expression:"billingDetails.email"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"telefono"},model:{value:e.billingDetails.phone,callback:function(t){e.$set(e.billingDetails,"phone",t)},expression:"billingDetails.phone"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("label",{attrs:{for:"card-number"}},[e._v("Credit Card")]),n("div",{staticClass:"tarjeta",attrs:{id:"card-number"}})]),n("v-col",{attrs:{cols:"4"}},[n("label",{attrs:{for:"card-expiry"}},[e._v("Expiry date")]),n("div",{staticClass:"tarjeta",attrs:{id:"card-expiry"}})]),n("v-col",{attrs:{cols:"4"}},[n("label",{attrs:{for:"card-cvc"}},[e._v("cvc")]),n("div",{staticClass:"tarjeta",attrs:{id:"card-cvc"}})])],1),n("v-row"),n("v-btn",{attrs:{depressed:"",color:"primary",type:"submit",loading:e.loading}},[e._v(" Buy ")])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nes-field"},[n("label",{attrs:{for:"email_field"}},[e._v("Credit Card")]),n("div",{staticClass:"nes-input",attrs:{id:"stripe-element-mount-point"}})])}],l=n(6198),i=n(4367),o=(n(1539),n(8862),n(5666),n(4465)),s=n(629),c={components:{},data:function(){return{loading:!0,elements:null,stripe:null,billingDetails:{address:{state:null,postal_code:null},email:null,name:null,phone:null}}},computed:(0,i.Z)({},(0,s.rn)(["token"])),mounted:function(){this.chargeStripe()},methods:{chargeStripe:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){var n,r,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.J)("pk_test_51KTZVHIaT2jl6JNbR8MpmiG41BZKXx2F1uFCk0hp1S0kIZD0SHLKnHNLEcRG0FvFBLmymzE2pMSMx6IwjgMJVEXf00YCXUlc3e");case 2:e.stripe=t.sent,n={base:{fontSize:"18px",color:"#000000",fontFamily:"Roboto"}},e.elements=e.stripe.elements(),r=e.elements.create("cardNumber",{style:n,showIcon:!0}),a=e.elements.create("cardExpiry",{style:n}),l=e.elements.create("cardCvc",{style:n}),r.mount("#card-number"),a.mount("#card-expiry"),l.mount("#card-cvc"),e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},HandleSeparateCard:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){var n,r,a,l,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,n=e.elements.getElement("cardNumber"),t.next=6,e.stripe.createPaymentMethod({type:"card",card:n,billing_details:e.billingDetails});case 6:if(r=t.sent,a=r.error,l=r.paymentMethod,a){t.next=24;break}return t.next=12,fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json","auth-token":e.token},body:JSON.stringify({id:l.id,amount:2e4})});case 12:return i=t.sent,t.next=15,i.json();case 15:o=t.sent,s=o.data,c=o.error,c&&e.$root.vtoast.show({message:c}),console.log(l),console.log(s,c),e.loading=!1,t.next=25;break;case 24:e.$root.vtoast.show({message:a});case 25:case"end":return t.stop()}}),t)})))()}}},u=c,d=n(1001),p=n(3453),m=n.n(p),f=n(3150),v=n(2102),b=n(2877),h=n(5978),g=(0,d.Z)(u,r,a,!1,null,null,null),w=g.exports;m()(g,{VBtn:f.Z,VCol:v.Z,VRow:b.Z,VTextField:h.Z})}}]);
//# sourceMappingURL=881-legacy.8615d625.js.map