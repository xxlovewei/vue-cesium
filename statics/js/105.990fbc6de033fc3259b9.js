(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{D2yD:function(t,s,a){"use strict";a.r(s);var r=a("JFUb"),e=Object(r.a)(null,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Base")]),t._v(" "),a("h2",[t._v("Global Component Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer}")]),t._v(" "),a("td",[t._v("Triggers when viewer is ready. It returns a core class of Cesium and a instance which is binding on the component "),a("code",{pre:!0},[t._v("CesiumViewer")]),t._v(". Please "),a("strong",[t._v("DON'T")]),t._v(" access the core class and the instance in lifecycle.")])])])]),t._v(" "),a("h2",[t._v("Global Component Instance Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("load")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("An abstract method that is executed when a component will be load.")])]),t._v(" "),a("tr",[a("td",[t._v("unload")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("An abstract method that is executed when a component will be unload.")])]),t._v(" "),a("tr",[a("td",[t._v("reload")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Excute the unload method, and then excute load method.")])])])]),t._v(" "),a("h2",[t._v("Constants")]),t._v(" "),a("ul",[a("li",[t._v("To be added")])]),t._v(" "),a("h2",[t._v("Datatype Array")]),t._v(" "),a("h3",[t._v("Cartesian2")]),t._v(" "),a("p",[t._v("Describe two-dimensional points. Such as the "),a("code",{pre:!0},[t._v("dimensions")]),t._v(" attribute of the component "),a("code",{pre:!0},[t._v("vc-graphics-box")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("x")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("y")]),t._v(": number\n}\n")])]),t._v(" "),a("h3",[t._v("Cartesian2 Array")]),t._v(" "),a("ul",[a("li",[t._v("Describe a two-dimensional point collection. Such as the "),a("code",{pre:!0},[t._v("shape")]),t._v(" attribute of the component "),a("code",{pre:!0},[t._v("vc-graphics-polyline-volume")]),t._v(".")])]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("[{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("x")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("y")]),t._v(": number },...,{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("x")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("y")]),t._v(": number }]\n")])]),t._v(" "),a("h3",[t._v("Cartesian3")]),t._v(" "),a("p",[t._v("Describe the 3D points. Such as the "),a("code",{pre:!0},[t._v("position")]),t._v(" property of the component "),a("code",{pre:!0},[t._v("vc-entity")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// or")]),t._v("\n{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("x")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("y")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("z")]),t._v(": number\n}\n")])]),t._v(" "),a("h3",[t._v("Cartesian3 Array")]),t._v(" "),a("p",[t._v("Describe a collection of 3D points. Such as the "),a("code",{pre:!0},[t._v("positions")]),t._v(" attribute of the component "),a("code",{pre:!0},[t._v("vc-graphics-polyline")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("[{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number },...,{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number }]\n")])]),t._v(" "),a("h3",[t._v("Rectangle")]),t._v(" "),a("p",[t._v("Describe the rectangle. Such as the "),a("code",{pre:!0},[t._v("coordinates")]),t._v(" attribute of the component "),a("code",{pre:!0},[t._v("vc-graphics-rectangle")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("west")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("south")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("east")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("north")]),t._v(": number }\n")])]),t._v(" "),a("h3",[t._v("DistanceDisplayCondition")]),t._v(" "),a("ul",[a("li",[t._v("Describes whether the object is displayed with the camera distance changing.")])]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("near")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("far")]),t._v(": number\n}\n")])]),t._v(" "),a("h3",[t._v("NearFarScalar")]),t._v(" "),a("ul",[a("li",[t._v("Describes the upper and lower limits of scaling, offset, etc. of the object at close and long distances as a function of camera distance.")])]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("near")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("nearValue")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("far")]),t._v(": number,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("farValue")]),t._v(": number\n}\n")])]),t._v(" "),a("h3",[t._v("Color")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// String can be #rgb, #rrggbb, rgb(), rgba(), hsl(), or hsla() etc.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'WHITE'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'rgb(255,255,255)'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#67ADDF'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Array range 0-1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1.0")]),t._v("]\n")])]),t._v(" "),a("h3",[t._v("PolygonHierarchy")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Array")]),t._v("\n[{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}]\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Object")]),t._v("\n{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("holes")]),t._v(": [\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("holes")]),t._v(": [\n        positions: [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}]\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n      ]\n    }\n  ]\n}\n\n")])]),t._v(" "),a("h2",[t._v("Reference")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/index.html"}},[t._v("Cesium Official")])])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html"}},[t._v("SuperMap Cesium Official Documentation")])])])])}],!1,null,null,null);s.default=e.exports},rFHi:function(t,s,a){t.exports=a("D2yD")}}]);
//# sourceMappingURL=105.990fbc6de033fc3259b9.js.map