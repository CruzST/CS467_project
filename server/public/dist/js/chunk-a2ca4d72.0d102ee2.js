(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2ca4d72"],{"0a7e":function(t,e,s){},"11e9":function(t,e,s){var i=s("52a7"),n=s("4630"),r=s("6821"),a=s("6a99"),o=s("69a8"),c=s("c69a"),u=Object.getOwnPropertyDescriptor;e.f=s("9e1e")?u:function(t,e){if(t=r(t),e=a(e,!0),c)try{return u(t,e)}catch(s){}if(o(t,e))return n(!i.f.call(t,e),t[e])}},"21cd":function(t,e,s){"use strict";var i=s("0a7e"),n=s.n(i);n.a},"3e07":function(t,e,s){"use strict";var i=s("eade"),n=s.n(i);n.a},"40f8":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-container",t._l(t.chunkedList,function(e,i){return s("b-row",{key:i,ref:"rows",refInFor:!0,staticClass:"rows"},t._l(e,function(t,e){return s("b-col",{key:e,staticClass:"columns",attrs:{sm:"auto"}},[s("ProductCard",{staticClass:"item-container",attrs:{productObject:t}})],1)}),1)}),1),t.showcontrols?s("div",[s("b-button",{attrs:{variant:"primary"},on:{click:t.goToPrev}},[t._v("Prev")]),t._l(t.pages,function(e){return s("span",{key:e,staticClass:"nav-number",class:[e===t.currentPage+1?"current":""],on:{click:function(s){return t.setCurrPage(e-1)}}},[t._v(t._s(e))])}),s("b-button",{attrs:{variant:"primary"},on:{click:t.goToNext}},[t._v("Next")])],2):t._e()],1)},n=[],r=(s("c5f6"),s("e915")),a={name:"ProductGrid",components:{ProductCard:r["a"]},data:function(){return{rows:0,displayList:[],pages:0,currentPage:0,showcontrols:!0}},props:{productObjectArray:{type:Array,required:!0},cols:{type:Number,default:4},itemsToDisplay:{type:Number,default:12}},mounted:function(){var t=this;this.$nextTick(function(){var e=Math.ceil(t.productObjectArray.length/t.itemsToDisplay);t.$set(t.$data,"pages",e),1===t.pages&&(t.showcontrols=!1);var s=t.productObjectArray.slice(0,t.itemsToDisplay);t.$set(t.$data,"displayList",s);var i=Math.ceil(t.displayList.length/t.cols);t.$set(t.$data,"rows",i)})},computed:{chunkedList:function(){for(var t=[],e=0;e<this.rows;e++)t.push(this.displayList.slice(e*this.cols,e*this.cols+this.cols));return t}},methods:{findEndSlice:function(t,e){return t<e?t:e},calcNewDisplayList:function(){var t=this.currentPage*this.itemsToDisplay,e=t+this.itemsToDisplay;return e>this.productObjectArray.length&&(e=this.productObjectArray.length),this.productObjectArray.slice(t,e)},goToPrev:function(){0!==this.currentPage&&(this.currentPage--,this.$set(this.$data,"displayList",this.calcNewDisplayList()))},goToNext:function(){this.currentPage!==this.pages-1&&(this.currentPage++,this.$set(this.$data,"displayList",this.calcNewDisplayList()))},setCurrPage:function(t){this.$set(this.$data,"currentPage",t),this.$set(this.$data,"displayList",this.calcNewDisplayList())}}},o=a,c=(s("21cd"),s("2877")),u=Object(c["a"])(o,i,n,!1,null,"c8c5c79c",null);e["a"]=u.exports},"5dbc":function(t,e,s){var i=s("d3f4"),n=s("8b97").set;t.exports=function(t,e,s){var r,a=e.constructor;return a!==s&&"function"==typeof a&&(r=a.prototype)!==s.prototype&&i(r)&&n&&n(t,r),t}},"643d":function(t,e,s){},"64b4":function(t,e,s){"use strict";var i=s("baf3"),n=s.n(i);n.a},"822d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("hr"),s("div",[s("h4",[t._v("Checking user info")]),t._v("\n    Logged in: "+t._s(t.sessionData.loggedIn)+"\n    "),s("br"),t._v("\n    UserName: "+t._s(t.sessionData.userinfo.username)+"\n    "),s("br"),t._v("\n    Email: "+t._s(t.sessionData.userinfo.email)+"\n    "),s("br"),t._v("\n    First Name: "+t._s(t.sessionData.userinfo.firstName)+"\n    "),s("br"),t._v("\n    Last Name: "+t._s(t.sessionData.userinfo.lastName)+"\n    "),s("br"),t._v("\n    Addr: "+t._s(t.sessionData.userinfo.address)+"\n    "),s("br"),t._v("\n    Seller?: "+t._s(t.sessionData.userinfo.isSeller)+"\n    "),s("br"),t._v("img:\n    "),s("img",{staticStyle:{width:"250px",height:"200px"},attrs:{src:t.sessionData.userinfo.profileimage}}),s("br"),t._v("\n    stores: "+t._s(t.sessionData.userinfo.storesOwned)+"\n    "),s("hr")]),s("div",[s("br"),s("h4",[t._v("Product Card")]),s("div",{attrs:{id:"test"}},[s("ProductCard",{attrs:{productObject:t.testobject}})],1),s("br"),s("h4",[t._v("Product Ribbon")]),s("ProductRibbon",{attrs:{productObjectArray:t.productList}}),s("br"),s("h4",[t._v("Product Grid")]),s("ProductGrid",{attrs:{productObjectArray:t.productList}}),s("br"),s("br")],1),s("h4",[t._v("Testing vue cookies")]),s("b-button",{on:{click:t.setCookie}},[t._v("Set a cookie")]),s("br"),s("b-button",{on:{click:t.getCookie}},[t._v("Get a cookie")]),s("br"),s("b-button",{on:{click:t.delCookie}},[t._v("Delete a cookie")])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Static Page msg for Testing stuff")])])}],r=s("e915"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slides"},[s("p",[t._v("\n    single width: "+t._s(t.singleWidth)+"\n    "),s("br"),t._v("\n    inner width: "+t._s(t.innerWidth)+"\n  ")]),s("div",{staticClass:"slides-inner",style:{width:t.innerWidth+"px",marginLeft:"-"+t.slidesInnerMarginLeft+"px"}},t._l(t.slides,function(e,i){return s("ProductCard",{key:i+1,staticClass:"featItem",style:{width:t.singleWidth+"px"},attrs:{productObject:e}})}),1),s("div",{staticClass:"navigation"},[s("b-button",{attrs:{variant:"primary"},on:{click:t.goToPrev}},[t._v("Prev")]),t._l(t.slides.length-t.itemsPerSlide+1,function(e){return s("span",{key:e,staticClass:"nav-number",class:[e===t.currentIndex+1?"current":""]},[t._v(t._s(e))])}),s("b-button",{attrs:{variant:"primary"},on:{click:t.goToNext}},[t._v("Next")])],2)])},o=[],c={name:"ProductRibbon",components:{ProductCard:r["a"]},data:function(){return{slides:this.productObjectArray,innerWidth:0,singleWidth:0,currentIndex:0}},props:{itemsPerSlide:{type:null,default:4},productObjectArray:{type:Array}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$el.clientWidth/t.itemsPerSlide;t.$set(t.$data,"singleWidth",e),t.$set(t.$data,"innerWidth",t.$el.clientWidth)})},computed:{slidesInnerMarginLeft:function(){return this.currentIndex*this.singleWidth}},methods:{goToPrev:function(){0!==this.currentIndex&&this.currentIndex--},goToNext:function(){this.currentIndex!==this.slides.length-this.itemsPerSlide&&this.currentIndex++}}},u=c,d=(s("3e07"),s("2877")),p=Object(d["a"])(u,a,o,!1,null,"5f79753c",null),l=p.exports,h=s("40f8"),f={name:"testComponents",components:{ProductCard:r["a"],ProductRibbon:l,ProductGrid:h["a"]},props:{sessionData:Object},methods:{setCookie:function(){this.$cookies.set("testcookie","loggedin",60),console.log("cookie set")},getCookie:function(){var t=this.$cookies.get("testcookie");console.log("cookie get: "+t)},delCookie:function(){this.$cookies.remove("loginToken")}},data:function(){return{testobject:{name:"beats headphones",Price:"100.50",image:"https://res.cloudinary.com/teepublic/image/private/s--fZSzwgC7--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1527665318/production/designs/2737304_0.jpg"},productList:[{name:"beats headphones #1",Price:"100.50",image:"https://vignette.wikia.nocookie.net/love-live/images/c/cb/LLSS_S1Ep6_235.png/revision/latest?cb=20160806180336"},{name:"beats headphones #2",Price:"100.50",image:"https://i1.wp.com/www.animefeminist.com/wp-content/uploads/2018/07/Harukana1-19.png?resize=1024%2C576&ssl=1"},{name:"beats headphones #3",Price:"100.50",image:"https://i.imgur.com/9y1wkv6.jpg"},{name:"beats headphones #4",Price:"100.50",image:"https://images-na.ssl-images-amazon.com/images/I/91JdzvaB-GL._RI_.jpg"},{name:"beats headphones #5",Price:"100.50",image:"https://res.cloudinary.com/teepublic/image/private/s--eSAoDaOc--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1534682471/production/designs/3040733_0.jpg"},{name:"beats headphones #6",Price:"100.50",image:"https://www.listchallenges.com/f/items/5e86fe66-eefa-4db0-aa06-bf076f8e5441.jpg"},{name:"beats headphones #7",Price:"100.50",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb0saGwBmzZ-Xi7fkCp0EABbiMGUWFej-7cJgcQv6mwKwRPdD"},{name:"beats headphones #8",Price:"100.50",image:"https://img.fireden.net/v/image/1534/41/1534411052845.png"},{name:"beats headphones #9",Price:"100.50",image:"https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/07/screen-shot-2018-07-13-at-10-32-56-pm.png?resize=620%2C347&ssl=1"},{name:"beats headphones #10",Price:"100.50",image:"https://d3ieicw58ybon5.cloudfront.net/ex/1200.630/0.133.600.316/u/160a8c89b92744ccb8d992dd8e685cf2.jpg"},{name:"beats headphones #11",Price:"100.50",image:"https://deluscar.files.wordpress.com/2015/01/horriblesubs-shirobako-01-720p-mkv_snapshot_01-49_2015-01-20_21-20-08.jpg?w=774&h=435"},{name:"beats headphones #12",Price:"100.50",image:"https://i2.wp.com/wrongeverytime.com/wp-content/uploads/2015/04/HorribleSubs-Shirobako-24-720p.mkv_snapshot_24.22_2015.03.28_19.43.02.jpg"},{name:"beats headphones #13",Price:"100.50",image:"https://i.imgur.com/uVDmqK0.jpg"},{name:"beats headphones #14",Price:"100.50",image:"https://www.animefeminist.com/wp-content/uploads/2017/03/SakuraQuest3.png"},{name:"beats headphones #15",Price:"100.50",image:"https://i.imgur.com/sZRSMQ8.jpg"},{name:"beats headphones #16",Price:"100.50",image:"https://remyfool.files.wordpress.com/2017/09/ed-8.jpg?w=924&h=0&crop=1"},{name:"beats headphones #17",Price:"100.50",image:"https://thumbs.gfycat.com/FabulousMajesticFinnishspitz-poster.jpg"},{name:"beats headphones #18",Price:"100.50",image:"https://i.imgur.com/ZUfBQzW.jpg"},{name:"beats headphones #19",Price:"100.50",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI4-a-gbKESRCX7gLbnSukyRx21drab8NH8MVJ1qoVFtKlG-rCQ"}]}},mounted:function(){}},m=f,g=(s("b5a0"),Object(d["a"])(m,i,n,!1,null,null,null));e["default"]=g.exports},"8b97":function(t,e,s){var i=s("d3f4"),n=s("cb7c"),r=function(t,e){if(n(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,s){return r(t,s),e?t.__proto__=s:i(t,s),t}}({},!1):void 0),check:r}},9093:function(t,e,s){var i=s("ce10"),n=s("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},aa77:function(t,e,s){var i=s("5ca1"),n=s("be13"),r=s("79e5"),a=s("fdef"),o="["+a+"]",c="​",u=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),p=function(t,e,s){var n={},o=r(function(){return!!a[t]()||c[t]()!=c}),u=n[t]=o?e(l):a[t];s&&(n[s]=u),i(i.P+i.F*o,"String",n)},l=p.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(d,"")),t};t.exports=p},b5a0:function(t,e,s){"use strict";var i=s("643d"),n=s.n(i);n.a},baf3:function(t,e,s){},c5f6:function(t,e,s){"use strict";var i=s("7726"),n=s("69a8"),r=s("2d95"),a=s("5dbc"),o=s("6a99"),c=s("79e5"),u=s("9093").f,d=s("11e9").f,p=s("86cc").f,l=s("aa77").trim,h="Number",f=i[h],m=f,g=f.prototype,b=r(s("2aeb")(g))==h,v="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():l(e,3);var s,i,n,r=e.charCodeAt(0);if(43===r||45===r){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var a,c=e.slice(2),u=0,d=c.length;u<d;u++)if(a=c.charCodeAt(u),a<48||a>n)return NaN;return parseInt(c,i)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof f&&(b?c(function(){g.valueOf.call(s)}):r(s)!=h)?a(new m(_(e)),s,f):_(e)};for(var y,P=s("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;P.length>w;w++)n(m,y=P[w])&&!n(f,y)&&p(f,y,d(m,y));f.prototype=g,g.constructor=f,s("2aba")(i,h,f)}},e915:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"productbox"},[s("b-link",{attrs:{to:t.itemLink}},[s("div",{staticClass:"thumbnail"},[s("img",{staticClass:"cardImage img-responsive",attrs:{src:t.getPathToSrc(t.productObject.image),alt:"No Image Found"}})])]),s("div",{staticClass:"productinfo"},[s("div",{staticClass:"producttitle"},[t._v(t._s(t.productObject.name||"PRODUCT_NAME"))]),s("div",{staticClass:"productprice"},[s("b-button",{staticClass:"float-right detailButton",attrs:{variant:"info"}},[s("b-link",{staticClass:"detailsButton",attrs:{to:t.itemLink}},[t._v("Details")])],1),s("div",{staticClass:"pricetext"},[t._v("$"+t._s(t.productObject.Price||"0.00"))])],1)])],1)},n=[],r={name:"productCard",data:function(){return{itemLink:""}},props:{productObject:Object},watch:{productObject:function(t,e){var s="/products/item/".concat(t._id);this.$set(this.$data,"itemLink",s)}},created:function(){var t=this;this.$nextTick(function(){var e="/products/item/".concat(t.productObject._id);t.$set(t.$data,"itemLink",e)})},methods:{getPathToSrc:function(t){return this.$hostname+"/images/products/"+t}}},a=r,o=(s("64b4"),s("2877")),c=Object(o["a"])(a,i,n,!1,null,null,null);e["a"]=c.exports},eade:function(t,e,s){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-a2ca4d72.0d102ee2.js.map