(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{M7yo:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{billboards:[],id:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:108,lat:35,height:1e4},billboard:{},show:!0,distanceDisplayCondition:{near:0,far:2e7},horizontalOrigin:0}},methods:{ready:function(s){s.Cesium,s.viewer;for(var t=[],a=0;a<500;a++){var r={};r.position={lng:40*Math.random()+85,lat:30*Math.random()+21},r.image="https://zouyaoji.top/vue-cesium/favicon.png",r.scale=.1,t.push(r)}this.billboards=t},clicked:function(s){console.log(s)},dblclick:function(s){console.log(s)}}},l=a("JFUb"),v=Object(l.a)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("BillboardCollection")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载布告板图元集合")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards},on:{click:s.clicked,dblclick:s.dblclick}}),s._v(" "),a("vc-collection-primitive-billboard",[a("vc-primitive-billboard",{attrs:{image:s.image,scale:.4,show:s.show,distanceDisplayCondition:s.distanceDisplayCondition,horizontalOrigin:s.horizontalOrigin,position:s.position},on:{click:s.clicked}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-collection-primitive-billboard")]),this._v(" 组件用于添加布告板图元集合，布告板是场景中与视口对齐的图像。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-billboard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":image")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"image"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":scale")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.4"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":distanceDisplayCondition")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"distanceDisplayCondition"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":horizontalOrigin")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"horizontalOrigin"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-billboard")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards")]),s._v(": [],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("distanceDisplayCondition")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("near")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("far")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20000000")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("horizontalOrigin")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards = []\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v("; i++) {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard = {}\n          billboard.position = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard.image = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard.scale = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          billboards.push(billboard)\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".billboards = billboards\n      },\n      clicked (a) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(a)\n      },\n      dblclick (a) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(a)\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("modelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。")])]),s._v(" "),a("tr",[a("td",[s._v("debugShowBoundingVolume")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否显示此图元的 BoundingVolume， 仅调试使用。")])]),s._v(" "),a("tr",[a("td",[s._v("blendOption")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定颜色混合选项。")])]),s._v(" "),a("tr",[a("td",[s._v("scene")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 必须传递使用高度参考属性的标签，否则将针对地球进行深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("billboards")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("[]")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定布告板集合数组。 数组对象结构为"),a("a",{attrs:{href:"./#/zh/primitive/vc-primitive-billboard"}},[a("code",{pre:!0},[s._v("vc-primitive-billboard")])]),s._v("组件属性。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html"}},[this._v("BillboardCollection")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("mousedown")]),s._v(" "),a("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元集合上按下时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseup")]),s._v(" "),a("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元集合上弹起时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("click")]),s._v(" "),a("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标单击该图元集合时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("dblclick")]),s._v(" "),a("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标左键双击该图元集合时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mousemove")]),s._v(" "),a("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标移动到该图元集合时触发。")])])])])}],!1,null,null,null);t.default=v.exports},"j/RI":function(s,t,a){s.exports=a("M7yo")}}]);
//# sourceMappingURL=200.4172869785e52032b060.js.map