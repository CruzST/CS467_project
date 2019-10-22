(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1e6bfb0"],{a085:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"h2 text-left title-text"},[t._v("Your Saved Addresses:")]),s("hr"),s("b-container",[s("b-row",{attrs:{"align-h":"center","align-v":"center"}},[s("b-col",{attrs:{cols:"6",md:"5",lg:"3"}},[s("b-button",{staticClass:"add-button",on:{click:function(e){t.showFormModal=!0,t.modalTitle="Add new address",t.selectNewAddress(null)}}},[s("font-awesome-icon",{attrs:{icon:"plus"}}),t._v("\n                    Add New Address\n                ")],1)],1)],1)],1),s("b-container",{attrs:{fluid:""}},[s("b-row",t._l(t.addresses,function(e,a){return s("b-col",{key:a,attrs:{sm:"4"}},[s("b-card",{staticClass:"address-card"},[s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",[s("div",{staticClass:"text-justify"},[t._v(" \n                                    "+t._s(e.firstName)+" "+t._s(e.lastName)+"\n                                    "),s("br"),t._v("\n                                    "+t._s(e.street)+"\n                                    "),s("br"),t._v("\n                                    "+t._s(e.city)+", "+t._s(e.state)+" "+t._s(e.zipcode)+"\n                                ")])])],1),s("b-row",[s("b-col",[s("div",{staticClass:"text-right"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pencil-alt"},on:{click:function(e){t.showFormModal=!0,t.modalTitle="Edit address",t.selectNewAddress(a)}}}),s("font-awesome-icon",{staticClass:"icon",attrs:{icon:"trash-alt"},on:{click:function(e){return t.handleDeleteAddress(a)}}})],1)])],1)],1)],1)],1)}),1)],1),s("b-modal",{attrs:{centered:"",title:t.modalTitle},on:{ok:t.submitFunction},model:{value:t.showFormModal,callback:function(e){t.showFormModal=e},expression:"showFormModal"}},[s("b-form",[s("b-form-group",{attrs:{label:"Name:"}},[s("b-container",[s("b-form-row",[s("b-col",[s("b-form-input",{attrs:{type:"text",required:"",placeholder:"First Name"},model:{value:t.formData.firstName,callback:function(e){t.$set(t.formData,"firstName",e)},expression:"formData.firstName"}})],1),s("b-col",[s("b-form-input",{attrs:{type:"text",required:"",placeholder:"Last Name"},model:{value:t.formData.lastName,callback:function(e){t.$set(t.formData,"lastName",e)},expression:"formData.lastName"}})],1)],1)],1)],1),s("b-form-group",{attrs:{label:"Address:"}},[s("b-container",[s("b-form-row",[s("b-col",[s("b-form-input",{attrs:{type:"text",required:"",placeholder:"Street Name"},model:{value:t.formData.street,callback:function(e){t.$set(t.formData,"street",e)},expression:"formData.street"}})],1)],1),s("b-form-row",[s("b-col",[s("b-form-input",{attrs:{type:"text",required:"",placeholder:"City"},model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData.city"}})],1)],1),s("b-form-row",[s("b-col",[s("b-form-input",{attrs:{type:"text",required:"",placeholder:"State"},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}})],1),s("b-col",[s("b-form-input",{attrs:{type:"number",required:"",placeholder:"Zip Code"},model:{value:t.formData.zipcode,callback:function(e){t.$set(t.formData,"zipcode",e)},expression:"formData.zipcode"}})],1)],1)],1)],1)],1)],1)],1)},o=[],r=s("cebc"),d=s("75fc"),i=s("bc3a"),n=s.n(i),l={props:{sessionData:Object},data:function(){return{addresses:[],showFormModal:!1,modalTitle:"Add new address",isEditMode:!1,formData:{firstName:"",lastName:"",street:"",city:"",state:"",zipcode:null}}},created:function(){var t=this;n.a.get(this.$hostname+"/address/"+this.sessionData.userinfo.user_id).then(function(e){console.log(e),200===e.status?t.addresses=Object(d["a"])(e.data):console.log("aww")}).catch(function(t){console.log(t)})},methods:{handleAddAddress:function(){var t=this;console.log("add"),n()({method:"POST",url:this.$hostname+"/address",data:{user_id:this.sessionData.userinfo.user_id,address:this.formData}}).then(function(e){var s;200===e.status?(console.log("result.data",e.data),t.addresses.splice(0,t.addresses.length),(s=t.addresses).push.apply(s,Object(d["a"])(e.data.addresses))):console.log("failure")}).catch(function(t){console.log("err :",t)})},handleDeleteAddress:function(t){var e=this;n()({method:"DELETE",url:this.$hostname+"/address/"+this.addresses[t]._id,data:{user_id:this.sessionData.userinfo.user_id}}).then(function(s){200===s.status?(console.log("success"),e.addresses.splice(t,1)):console.log("failure")}).catch(function(t){console.log("err :",t)})},handleEditAddress:function(){var t=this;n()({method:"PUT",url:this.$hostname+"/address/"+this.formData._id,data:{user_id:this.sessionData.userinfo.user_id,address:this.formData}}).then(function(e){var s;200===e.status?(console.log(e),t.addresses.splice(0,t.addresses.length),(s=t.addresses).push.apply(s,Object(d["a"])(e.data))):console.log("failure")}).catch(function(t){console.log("err :",t)})},selectNewAddress:function(t){if(null===t)return this.isEditMode=!1,void(this.formData={});this.isEditMode=!0,this.formData=Object(r["a"])({},this.addresses[t])}},computed:{firstNameValue:function(){return null==this.selectedAddressIndex?"First Name":this.addresses[this.selectedAddressIndex].firstName||this.sessionData.userinfo.firstName},submitFunction:function(){return 0==this.isEditMode?this.handleAddAddress:this.handleEditAddress}}},c=l,u=(s("da93"),s("2877")),f=Object(u["a"])(c,a,o,!1,null,null,null);e["default"]=f.exports},da93:function(t,e,s){"use strict";var a=s("db48"),o=s.n(a);o.a},db48:function(t,e,s){}}]);
//# sourceMappingURL=chunk-b1e6bfb0.7d246064.js.map