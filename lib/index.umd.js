!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s(require("@vue/babel-helper-vue-jsx-merge-props"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.regexp.test.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js")):"function"==typeof define&&define.amd?define(["@vue/babel-helper-vue-jsx-merge-props","core-js/modules/es.map.js","core-js/modules/es.object.to-string.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","core-js/modules/es.regexp.exec.js","core-js/modules/es.regexp.test.js","core-js/modules/web.url.js","core-js/modules/web.url-search-params.js"],s):(e="undefined"!=typeof globalThis?globalThis:e||self)["vc-image"]=s(e._mergeJSXProps)}(this,(function(e){"use strict";function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=s(e),t=new Map,o={props:{src:{type:String}},computed:{realSrc:function(){return t.get(this.src)||this.src},attrs:function(){var e=this.$attrs;return delete e.src,e}},watch:{src:{handler:function(e){if(!t.get(e)&&/^(http|https|\/\/):/i.test(e)){var s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="blob",s.onload=function(){var r=new Blob([s.response]),o=window.URL.createObjectURL(r);t.set(e,o)},s.send()}},immediate:!0}},render:function(){var e=arguments[0];return e("img",r.default([{attrs:{src:this.realSrc}},this.attrs]))},install:function(e){e.component("vc-image",o)}};return o}));