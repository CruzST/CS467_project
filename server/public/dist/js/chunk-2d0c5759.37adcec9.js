(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5759"],{"3ed5":function(s,e,t){"use strict";t.r(e);var o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("router-view",{attrs:{orders:s.orders,sessionData:s.sessionData},on:{"update:orders":s.updateOrders}})],1)},r=[],n=(t("20d6"),t("bc3a")),a=t.n(n),i={props:{sessionData:Object},data:function(){return{orders:[]}},created:function(){var s,e=this;s="/account/ordersSold"===this.$route.path.substring(0,19)?this.$hostname+"/orders/bySeller/"+this.sessionData.userinfo.user_id:this.$hostname+"/orders/byCustomer/"+this.sessionData.userinfo.user_id,a.a.get(s).then(function(s){200===s.status?(console.log(s),e.orders=s.data):console.log(s)}).catch(function(s){console.log(s)})},methods:{updateOrders:function(s){console.log("payload",s);var e=this.orders.findIndex(function(e){return e.id===s.id});this.orders[e]=s}}},d=i,u=t("2877"),c=Object(u["a"])(d,o,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c5759.37adcec9.js.map