(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{HQzq:function(t,e,s){t.exports=s("Me0e")},Me0e:function(t,e,s){"use strict";s.r(e);var a=s("JFUb"),r=Object(a.a)({data:function(){return{show:!0}},methods:{ready:function(t){t.Cesium,t.viewer}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("KmlDataSource")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("Non visual feature data, such as atom:author and ExtendedData is exposed via an instance of KmlFeatureData, which is added to each Entity under the kml property.")]),t._v(" "),s("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),s("h4",[t._v("Preview")]),t._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:t.ready}},[s("vc-datasource-kml",{attrs:{data:"./statics/SampleData/kml/gdpPerCapita2008.kmz",show:t.show}})],1)],1)]],2),t._v(" "),s("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("Instance Properties")]),t._v(" "),t._m(3),t._v(" "),s("hr"),t._v(" "),t._m(4),t._v(" "),s("h2",[t._v("Events")]),t._v(" "),t._m(5),t._v(" "),s("hr")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",{pre:!0},[this._v("vc-datasource-kml")]),this._v(" component is used to load a dataSource which processes Keyhole Markup Language 2.2 (KML).KML support in Cesium is incomplete, but a large amount of the standard, as well as Google's gx extension namespace, is supported. See Github issue #873 for a detailed list of what is and isn't support. Cesium will also write information to the console when it encounters most unsupported features.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Load a KmlDataSource with "),e("code",{pre:!0},[this._v("vc-datasource-kml")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-kml")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"./statics/SampleData/kml/gdpPerCapita2008.kmz"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-kml")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("String|Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("required")]),t._v(" A url, GeoJSON object, or TopoJSON object to be loaded.")])]),t._v(" "),s("tr",[s("td",[t._v("show")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets whether or not this data source should be displayed.")])]),t._v(" "),s("tr",[s("td",[t._v("entities")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("[]")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the collection of entities to be added to this datasource.")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" An object with the following properties:")])]),t._v(" "),s("tr",[s("td",[t._v("-------------")]),t._v(" "),s("td",[t._v("--------------")]),t._v(" "),s("td",[t._v("-------")]),t._v(" "),s("td",[t._v("-----------------------------------------------------------------------------")])]),t._v(" "),s("tr",[s("td",[t._v("camera")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("canvas")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("sourceUri")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("clampToGround")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("ellipsoid")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("credit")]),t._v(" "),s("td",[t._v("String|Object")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Refer to the official document: "),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html"}},[this._v("KmlDataSource")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ready")]),t._v(" "),s("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),s("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),s("tr",[s("td",[t._v("changedEvent")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Triggers when the underlying data changes.")])]),t._v(" "),s("tr",[s("td",[t._v("errorEvent")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Triggers if an error is encountered during processing.")])]),t._v(" "),s("tr",[s("td",[t._v("loadingEvent")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Triggers the data source either starts or stops loading.")])]),t._v(" "),s("tr",[s("td",[t._v("clusterEvent")]),t._v(" "),s("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),s("td",[t._v("Gets the event that is fired when entities are added or removed from the collection.")])]),t._v(" "),s("tr",[s("td",[t._v("collectionChanged")]),t._v(" "),s("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),s("td",[t._v("Gets the event that will be raised when a new cluster will be displayed.")])])])])}],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=18.969626f609e9b45dcc58.js.map