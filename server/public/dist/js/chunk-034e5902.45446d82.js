(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-034e5902"],{"01cb":function(t,e,r){"use strict";var a=r("715a"),s=r.n(a);s.a},"0a7e":function(t,e,r){},"11e9":function(t,e,r){var a=r("52a7"),s=r("4630"),n=r("6821"),c=r("6a99"),i=r("69a8"),o=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=n(t),e=c(e,!0),o)try{return u(t,e)}catch(r){}if(i(t,e))return s(!a.f.call(t,e),t[e])}},"21cd":function(t,e,r){"use strict";var a=r("0a7e"),s=r.n(a);s.a},3760:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Search Results")]),r("hr"),t.valid?r("ProductGrid",{attrs:{productObjectArray:t.searchResultProducts}}):t._e(),t.errorMsgShow?r("div",{staticClass:"errorMsg"},[r("h4",[t._v("Wer're Sorry, we couldnt find any results for that search.")]),r("img",{attrs:{id:"lookingImg",src:"https://blog.clearlynext.com/wp-content/uploads/2017/05/find-featured.png"}}),r("br"),r("br"),r("b-button",{attrs:{variant:"primary"}},[r("b-link",{attrs:{to:"/",id:"linkText"}},[t._v("HOME")])],1)],1):t._e()],1)},s=[],n=r("bc3a"),c=r.n(n),i=r("40f8"),o={name:"ProductSearch",components:{ProductGrid:i["a"]},data:function(){return{searchResultProducts:[],valid:!1,errorMsgShow:!1,tagArray:[]}},created:function(){var t=this;c()({method:"GET",url:this.$hostname+"/products/searchProducts?q="+this.$route.query.q}).then(function(e){0===e.data.length?c()({method:"GET",url:t.$hostname+"/products/relatedProducts?q="+t.$route.query.q}).then(function(e){0===e.data.length?(console.log("no results"),t.$set(t.$data,"errorMsgShow",!0)):(console.log("in matches"),t.$set(t.$data,"searchResultProducts",e.data),t.$set(t.$data,"valid",!0))}):(t.$set(t.$data,"searchResultProducts",e.data),t.$set(t.$data,"valid",!0))}).catch(function(t){console.log(t)})}},u=o,l=(r("01cb"),r("2877")),d=Object(l["a"])(u,a,s,!1,null,null,null);e["default"]=d.exports},"40f8":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",t._l(t.chunkedList,function(e,a){return r("b-row",{key:a,ref:"rows",refInFor:!0,staticClass:"rows"},t._l(e,function(t,e){return r("b-col",{key:e,staticClass:"columns",attrs:{sm:"auto"}},[r("ProductCard",{staticClass:"item-container",attrs:{productObject:t}})],1)}),1)}),1),t.showcontrols?r("div",[r("b-button",{attrs:{variant:"primary"},on:{click:t.goToPrev}},[t._v("Prev")]),t._l(t.pages,function(e){return r("span",{key:e,staticClass:"nav-number",class:[e===t.currentPage+1?"current":""],on:{click:function(r){return t.setCurrPage(e-1)}}},[t._v(t._s(e))])}),r("b-button",{attrs:{variant:"primary"},on:{click:t.goToNext}},[t._v("Next")])],2):t._e()],1)},s=[],n=(r("c5f6"),r("e915")),c={name:"ProductGrid",components:{ProductCard:n["a"]},data:function(){return{rows:0,displayList:[],pages:0,currentPage:0,showcontrols:!0}},props:{productObjectArray:{type:Array,required:!0},cols:{type:Number,default:4},itemsToDisplay:{type:Number,default:12}},mounted:function(){var t=this;this.$nextTick(function(){var e=Math.ceil(t.productObjectArray.length/t.itemsToDisplay);t.$set(t.$data,"pages",e),1===t.pages&&(t.showcontrols=!1);var r=t.productObjectArray.slice(0,t.itemsToDisplay);t.$set(t.$data,"displayList",r);var a=Math.ceil(t.displayList.length/t.cols);t.$set(t.$data,"rows",a)})},computed:{chunkedList:function(){for(var t=[],e=0;e<this.rows;e++)t.push(this.displayList.slice(e*this.cols,e*this.cols+this.cols));return t}},methods:{findEndSlice:function(t,e){return t<e?t:e},calcNewDisplayList:function(){var t=this.currentPage*this.itemsToDisplay,e=t+this.itemsToDisplay;return e>this.productObjectArray.length&&(e=this.productObjectArray.length),this.productObjectArray.slice(t,e)},goToPrev:function(){0!==this.currentPage&&(this.currentPage--,this.$set(this.$data,"displayList",this.calcNewDisplayList()))},goToNext:function(){this.currentPage!==this.pages-1&&(this.currentPage++,this.$set(this.$data,"displayList",this.calcNewDisplayList()))},setCurrPage:function(t){this.$set(this.$data,"currentPage",t),this.$set(this.$data,"displayList",this.calcNewDisplayList())}}},i=c,o=(r("21cd"),r("2877")),u=Object(o["a"])(i,a,s,!1,null,"c8c5c79c",null);e["a"]=u.exports},"5dbc":function(t,e,r){var a=r("d3f4"),s=r("8b97").set;t.exports=function(t,e,r){var n,c=e.constructor;return c!==r&&"function"==typeof c&&(n=c.prototype)!==r.prototype&&a(n)&&s&&s(t,n),t}},"64b4":function(t,e,r){"use strict";var a=r("baf3"),s=r.n(a);s.a},"715a":function(t,e,r){},"8b97":function(t,e,r){var a=r("d3f4"),s=r("cb7c"),n=function(t,e){if(s(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,r){return n(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:n}},9093:function(t,e,r){var a=r("ce10"),s=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,s)}},aa77:function(t,e,r){var a=r("5ca1"),s=r("be13"),n=r("79e5"),c=r("fdef"),i="["+c+"]",o="​",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),d=function(t,e,r){var s={},i=n(function(){return!!c[t]()||o[t]()!=o}),u=s[t]=i?e(f):c[t];r&&(s[r]=u),a(a.P+a.F*i,"String",s)},f=d.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},baf3:function(t,e,r){},c5f6:function(t,e,r){"use strict";var a=r("7726"),s=r("69a8"),n=r("2d95"),c=r("5dbc"),i=r("6a99"),o=r("79e5"),u=r("9093").f,l=r("11e9").f,d=r("86cc").f,f=r("aa77").trim,p="Number",h=a[p],v=h,b=h.prototype,g=n(r("2aeb")(b))==p,m="trim"in String.prototype,y=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():f(e,3);var r,a,s,n=e.charCodeAt(0);if(43===n||45===n){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+e}for(var c,o=e.slice(2),u=0,l=o.length;u<l;u++)if(c=o.charCodeAt(u),c<48||c>s)return NaN;return parseInt(o,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(g?o(function(){b.valueOf.call(r)}):n(r)!=p)?c(new v(y(e)),r,h):y(e)};for(var _,$=r("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;$.length>P;P++)s(v,_=$[P])&&!s(h,_)&&d(h,_,l(v,_));h.prototype=b,b.constructor=h,r("2aba")(a,p,h)}},e915:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productbox"},[r("b-link",{attrs:{to:t.itemLink}},[r("div",{staticClass:"thumbnail"},[r("img",{staticClass:"cardImage img-responsive",attrs:{src:t.getPathToSrc(t.productObject.image),alt:"No Image Found"}})])]),r("div",{staticClass:"productinfo"},[r("div",{staticClass:"producttitle"},[t._v(t._s(t.productObject.name||"PRODUCT_NAME"))]),r("div",{staticClass:"productprice"},[r("b-button",{staticClass:"float-right detailButton",attrs:{variant:"info"}},[r("b-link",{staticClass:"detailsButton",attrs:{to:t.itemLink}},[t._v("Details")])],1),r("div",{staticClass:"pricetext"},[t._v("$"+t._s(t.productObject.Price||"0.00"))])],1)])],1)},s=[],n={name:"productCard",data:function(){return{itemLink:""}},props:{productObject:Object},watch:{productObject:function(t,e){var r="/products/item/".concat(t._id);this.$set(this.$data,"itemLink",r)}},created:function(){var t=this;this.$nextTick(function(){var e="/products/item/".concat(t.productObject._id);t.$set(t.$data,"itemLink",e)})},methods:{getPathToSrc:function(t){return this.$hostname+"/images/products/"+t}}},c=n,i=(r("64b4"),r("2877")),o=Object(i["a"])(c,a,s,!1,null,null,null);e["a"]=o.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-034e5902.45446d82.js.map