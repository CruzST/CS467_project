(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ad9c7f8"],{"016b":function(t,e,o){"use strict";var a=o("66da"),r=o.n(a);r.a},"0b64":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",[o("h1",[t._v("Manage Store Inventory: "+t._s(this.sessionData.userinfo.username))])]),o("hr"),o("div",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selected=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a Store")]),t._l(t.stores,function(e){return o("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2),t._v(" (User may have to refresh in order to see stores)\n  ")]),o("ManageInventory",{attrs:{storeToGet:t.selected,sessionData:t.sessionData}}),o("br"),o("hr"),o("br")],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"bv-example-row",attrs:{id:"inventory"}},[o("div",[o("h3",[t._v("\n      Viewing Inventory for:\n      "+t._s(t.storeToGet)+"\n    ")]),o("b-button",{attrs:{variant:"info"},on:{click:function(e){t.showAddProductModal=!0}}},[t._v("Add Product")]),o("b-modal",{attrs:{title:"Add A New Product",centered:"",id:"addproductmodal",size:"xl",scrollable:"","hide-footer":""},model:{value:t.showAddProductModal,callback:function(e){t.showAddProductModal=e},expression:"showAddProductModal"}},[o("PostProductForm",{attrs:{storeToPost:t.storeToGet,storeOwnerId:t.sessionData.userinfo.user_id,storeOwnerUser:t.sessionData.userinfo.username}})],1),o("b-modal",{attrs:{title:"Edit An Existing Product",centered:"",id:"editproductmodal",size:"xl",scrollable:"","hide-footer":""},model:{value:t.showEditProductModal,callback:function(e){t.showEditProductModal=e},expression:"showEditProductModal"}},[o("EditProductForm",{attrs:{productPropId:t.productIDToEdit}})],1),o("b-link",{attrs:{to:t.storeFrontLink}},[t._v("Link to Store Front")])],1),o("b-row",[o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[t._v("ID")]),o("th",[t._v("Name")]),o("th",[t._v("Image")]),o("th",[t._v("Quantity")]),o("th",[t._v("Price")]),o("th",[t._v("Weight")]),o("th",[t._v("Number Sold")]),o("th",[t._v("Edit")]),o("th",[t._v("Delete")])])]),o("tbody",t._l(t.storeProducts,function(e,a){return o("tr",{key:a},[o("td",[t._v(t._s(e._id))]),o("td",[t._v(t._s(e.name))]),o("td",[o("img",{attrs:{src:t.getPathToSrc(e.image),alt:"obj.name",height:"100",width:"100"}})]),o("td",[t._v(t._s(e.Quantity))]),o("td",[t._v("$"+t._s(e.Price))]),o("td",[t._v(t._s(e.Weight))]),o("td",[t._v(t._s(e.NumberSold))]),o("td",[o("b-button",{attrs:{variant:"warning"},on:{click:function(o){return t.editProduct(e._id)}}},[t._v("Edit")])],1),o("td",[o("b-button",{attrs:{variant:"danger"},on:{click:function(o){return t.deleteProduct(e._id)}}},[t._v("X")])],1)])}),0)])])],1)},n=[],i=o("bc3a"),c=o.n(i),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("b-form",{ref:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("b-form-group",{attrs:{label:"Product Name"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Product Name...",required:""},model:{value:t.productData.name,callback:function(e){t.$set(t.productData,"name",e)},expression:"productData.name"}})],1),o("b-form-group",{attrs:{label:"Description"}},[o("b-form-textarea",{attrs:{placeholder:"Write something...",required:"",id:"descriptiontextarea"},model:{value:t.productData.description,callback:function(e){t.$set(t.productData,"description",e)},expression:"productData.description"}})],1),o("b-form-group",{attrs:{label:"Quantity"}},[o("b-form-input",{attrs:{type:"number",required:""},model:{value:t.productData.quantity,callback:function(e){t.$set(t.productData,"quantity",e)},expression:"productData.quantity"}})],1),o("b-form-group",{attrs:{label:"Price (USD)"}},[o("b-form-input",{attrs:{type:"number",step:"0.01",required:""},model:{value:t.productData.price,callback:function(e){t.$set(t.productData,"price",e)},expression:"productData.price"}})],1),o("b-form-group",{attrs:{label:"Weight (kg)"}},[o("b-form-input",{attrs:{type:"number",step:"0.01"},model:{value:t.productData.weight,callback:function(e){t.$set(t.productData,"weight",e)},expression:"productData.weight"}})],1),o("b-form-group",{attrs:{label:"Tags (comma-separated)"}},[o("b-form-textarea",{attrs:{placeholder:"Write something...",required:"",id:"tagtextarea"},model:{value:t.tagsString,callback:function(e){t.tagsString=e},expression:"tagsString"}})],1),o("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),o("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file?t.file.name:""))]),o("b-button",{staticClass:"submitButton",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),o("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.postSuccess,callback:function(e){t.postSuccess=e},expression:"postSuccess"}},[t._v("Product Added!")])],1)],1)},u=[],l=o("f499"),p=o.n(l),m=(o("28a5"),{name:"PostProductForm",data:function(){return{postSuccess:!1,productData:{name:"",description:"",quantity:0,price:0,weight:0,tags:[],numbersold:0,owner:{id:this.storeOwnerId,username:this.storeOwnerUser},store:""},storename:"",tagsString:"",file:""}},props:{storeToPost:String,storeOwnerId:String,storeOwnerUser:String},watch:{storeToPost:function(t,e){console.log("prop changed old: ".concat(e,", new: ").concat(t)),this.productData.store=t}},methods:{handleSubmit:function(t){var e=this,o=new FormData,a=this.tagsString.split(",");for(var r in this.productData.tags=p()(a),this.productData)console.log(r+" + "+this.productData[r]),o.append(r,this.productData[r]);o.append("file",this.file);var s={headers:{"content-type":"multipart/form-data"}};c.a.post(this.$hostname+"/shop/".concat(this.storeToPost,"/dashboard/addproducts"),o,s).then(function(o){201===o.status?(t.target.reset(),e.postSuccess=!0):204===o.status&&alert("ERROR: 204 recvd. Store does not exist")}).catch(function(t){console.log(t)})}}}),f=m,h=(o("016b"),o("2877")),b=Object(h["a"])(f,d,u,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",[t._v("Editing "+t._s(t.productToEdit))]),o("hr"),o("b-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("b-form-group",{attrs:{label:"Product Name"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Product Name...",required:""},model:{value:t.productData.name,callback:function(e){t.$set(t.productData,"name",e)},expression:"productData.name"}})],1),o("b-form-group",{attrs:{label:"Description"}},[o("b-form-textarea",{attrs:{placeholder:"Write something...",required:"",id:"descriptiontextarea"},model:{value:t.productData.description,callback:function(e){t.$set(t.productData,"description",e)},expression:"productData.description"}})],1),o("b-form-group",{attrs:{label:"Quantity"}},[o("b-form-input",{attrs:{type:"number",required:""},model:{value:t.productData.Quantity,callback:function(e){t.$set(t.productData,"Quantity",e)},expression:"productData.Quantity"}})],1),o("b-form-group",{attrs:{label:"Price"}},[o("b-form-input",{attrs:{type:"number",step:"0.01",required:""},model:{value:t.productData.Price,callback:function(e){t.$set(t.productData,"Price",e)},expression:"productData.Price"}})],1),o("b-form-group",{attrs:{label:"Weight"}},[o("b-form-input",{attrs:{type:"number",step:"0.01"},model:{value:t.productData.Weight,callback:function(e){t.$set(t.productData,"Weight",e)},expression:"productData.Weight"}})],1),o("b-form-group",{attrs:{label:"Tags (comma-separated)"}},[o("b-form-textarea",{attrs:{placeholder:"Write something...",id:"tagtextarea"},model:{value:t.tempString,callback:function(e){t.tempString=e},expression:"tempString"}}),o("b-form-group",{attrs:{label:"Store Image:"}},[o("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),o("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file?t.file.name:""))])],1),o("b-button",{staticClass:"submitButton",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),o("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.editSuccess,callback:function(e){t.editSuccess=e},expression:"editSuccess"}},[t._v("Product Updated!")]),o("hr")],1)},D=[],_=(o("7f7f"),{name:"EditProductForm",data:function(){return{productToEdit:"",productData:{},productID:"",file:"",editSuccess:!1,tempString:""}},props:{productPropId:String},watch:{productPropId:function(t,e){var o=this;console.log("prop changed old: ".concat(e,", new: ").concat(t)),this.productID=t,c()({method:"GET",url:this.$hostname+"/shop/editProduct/"+this.productID}).then(function(t){200==t.status?(delete t.data.comments,delete t.data.ratings,delete t.data.__v,o.$set(o.$data,"productData",t.data),o.tempString=t.data.tags.join(),o.productToEdit=t.data.name):console.log("Error: ".concat(t.status," received"))}).catch(function(t){console.log(t)})}},created:function(){},methods:{handleSubmit:function(){var t=this;if(this.handleSubmitOverride)this.handleSubmitOverride();else{var e=new FormData,o=this.tempString.split(",");for(var a in this.productData.tags=p()(o),this.productData)e.append(a,this.productData[a]);e.append("file",this.file);var r={headers:{"content-type":"multipart/form-data"}};c.a.post(this.$hostname+"/shop/updateProduct/"+this.productID,e,r).then(function(e){200===e.status&&(console.log("updated"),t.editSuccess=!0)}).catch(function(t){console.log(t)})}}}}),P=_,S=(o("c5fb"),Object(h["a"])(P,g,D,!1,null,null,null)),w=S.exports,x={name:"ManageInventory",components:{PostProductForm:v,EditProductForm:w},data:function(){return{storeProducts:[],storeRouterLink:"",storeFrontLink:"",showAddProductModal:!1,showEditProductModal:!1,productIDToEdit:""}},props:{sessionData:Object,storeToGet:String},updated:function(){var t=this;this.$nextTick(function(){var e="/products/Store/".concat(t.storeToGet);t.$set(t.$data,"storeFrontLink",e)}),this.$nextTick(function(){var e="/account/manageStore/addProduct/".concat(t.storeToGet);t.$set(t.$data,"storeRouterLink",e)}),this.$nextTick(function(){c()({method:"GET",url:t.$hostname+"/shop/".concat(t.storeToGet,"/products")}).then(function(e){if(200==e.status){var o=e.data;t.$set(t.$data,"storeProducts",o)}else t.$set(t.$data,"errorDisplay",!0),console.log("Error: ".concat(e.status," received"))}).catch(function(t){console.log(t)})})},methods:{editProduct:function(t){this.$set(this.$data,"productIDToEdit",t),this.$set(this.$data,"showEditProductModal",!0)},deleteProduct:function(t){console.log("Going to delete ".concat(t)),c()({method:"DELETE",url:this.$hostname+"/shop/"+"".concat(t)}).then(function(t){200==t.status&&console.log(t.data)}).catch(function(t){console.log(t)})},getPathToSrc:function(t){return this.$hostname+"/images/products/"+t}}},y=x,$=(o("c4b4"),Object(h["a"])(y,s,n,!1,null,null,null)),k=$.exports,E={name:"AccountStoreOwner",components:{ManageInventory:k},data:function(){return{selected:"",stores:""}},props:{sessionData:Object},created:function(){var t=this;this.$nextTick(function(){t.$set(t.$data,"stores",t.sessionData.userinfo.storesOwned)})}},T=E,I=(o("1971"),Object(h["a"])(T,a,r,!1,null,null,null));e["default"]=I.exports},1971:function(t,e,o){"use strict";var a=o("a508"),r=o.n(a);r.a},"66da":function(t,e,o){},"6e2d":function(t,e,o){},"7f7f":function(t,e,o){var a=o("86cc").f,r=Function.prototype,s=/^\s*function ([^ (]*)/,n="name";n in r||o("9e1e")&&a(r,n,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},a508:function(t,e,o){},b94b:function(t,e,o){},c4b4:function(t,e,o){"use strict";var a=o("6e2d"),r=o.n(a);r.a},c5fb:function(t,e,o){"use strict";var a=o("b94b"),r=o.n(a);r.a}}]);
//# sourceMappingURL=chunk-7ad9c7f8.43e5ad6a.js.map