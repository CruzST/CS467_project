(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b95e806"],{"0bfb":function(t,a,e){"use strict";var r=e("cb7c");t.exports=function(){var t=r(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,a,e){"use strict";e("3846");var r=e("cb7c"),s=e("0bfb"),o=e("9e1e"),n="toString",i=/./[n],u=function(t){e("2aba")(RegExp.prototype,n,t,!0)};e("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):i.name!=n&&u(function(){return i.call(this)})},9253:function(t,a,e){},dbae:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"h2 text-left title-text"},[t._v("Update your information:")]),e("hr"),e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{md:"8"}},[e("b-card",[e("b-alert",{attrs:{variant:"danger",show:t.showFailure}},[t._v(t._s(t.failureMessage))]),e("b-form",[t._l(t.formData,function(a,r){return e("div",{key:r},[e("b-form-group",{attrs:{label:t._f("colonize")(t._f("capitalize")(t._f("wordify")(r)))}},[e("b-form-input",{attrs:{type:t._f("inputType")(r),placeholder:a},model:{value:t.formData[r],callback:function(a){t.$set(t.formData,r,a)},expression:"formData[key]"}})],1)],1)}),t.formData.password?e("b-form-group",{attrs:{label:"Re-type password:"}},[e("b-form-input",{attrs:{type:"password",required:""},model:{value:t.repeatPassword,callback:function(a){t.repeatPassword=a},expression:"repeatPassword"}})],1):t._e(),e("b-button",{attrs:{type:"button"},on:{click:t.validateFormToShowModal}},[t._v("Update")]),e("b-modal",{attrs:{centered:"",title:"Please provide your current password to proceed"},on:{ok:function(a){return a.preventDefault(),t.handlePasswordCheck(a)}},model:{value:t.showModal,callback:function(a){t.showModal=a},expression:"showModal"}},[e("b-card",[e("b-alert",{attrs:{variant:"danger",show:t.showFailure}},[t._v(t._s(t.failureMessage))]),e("b-form-group",{attrs:{label:"Current Password"}},[e("b-form-input",{attrs:{type:"password",required:""},model:{value:t.currentPassword,callback:function(a){t.currentPassword=a},expression:"currentPassword"}})],1)],1)],1)],2)],1)],1)],1),e("b-row",[e("b-col")],1)],1)},s=[],o=(e("6b54"),e("bc3a")),n=e.n(o),i={props:{sessionData:Object},data:function(){return{formData:{username:"",email:"",firstName:"",lastName:"",password:""},showModal:!1,repeatPassword:null,currentPassword:null,showFailure:!1,failureMessage:""}},created:function(){this.formData.username=this.sessionData.userinfo.username,this.formData.email=this.sessionData.userinfo.email,this.formData.firstName=this.sessionData.userinfo.firstName,this.formData.lastName=this.sessionData.userinfo.lastName},methods:{handlePasswordCheck:function(){var t=this;if(!this.currentPassword)return this.failureMessage="You must provide your current password to proceed...",void(this.showFailure=!0);n()({method:"post",url:"http://localhost:3000/login",data:{username:this.sessionData.userinfo.username,password:this.currentPassword}}).then(function(a){200===a.status?t.handleSubmit():(console.log(a),t.failureMessage="Could not verify current password",t.showFailure=!0)}).catch(function(a){t.failureMessage="Something's gone awry, please try again later!",t.showFailure=!0,console.log(a)})},handleSubmit:function(){console.log("insert request here...");var t={};for(var a in this.formData)this.formData[a]&&this.formData[a]!==this.sessionData.userinfo[a]&&(t[a]=this.formData[a]);console.log(t),this.showModal=!1},validateFormToShowModal:function(){this.formData.password&&this.formData.password!==this.repeatPassword?(this.failureMessage="Please re-type your new password (it may not match)",this.showFailure=!0):(this.showFailure=!1,this.showModal=!0)}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},colonize:function(t){return t+":"},wordify:function(t){for(var a=0,e="",r=0;r<t.length;r++)"_"===t[r]||"-"===t[r]?(e+=t.substring(a,r),e+=" ",r++,a=r):t[r]==t.charAt(r).toUpperCase()&&(e+=t.substring(a,r),e+=" ",a=r);return e+=t.substring(a),e},inputType:function(t){return"password"===t?"password":"text"}},computed:{isPasswordProvided:function(){return!!this.formData.currentPassword}}},u=i,l=(e("f6e5"),e("2877")),c=Object(l["a"])(u,r,s,!1,null,null,null);a["default"]=c.exports},f6e5:function(t,a,e){"use strict";var r=e("9253"),s=e.n(r);s.a}}]);
//# sourceMappingURL=chunk-3b95e806.90bb2827.js.map