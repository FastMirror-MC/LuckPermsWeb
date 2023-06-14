(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["verbose"],{5478:function(e,t,s){},c699:function(e,t,s){"use strict";var r=s("5478"),o=s.n(r);o.a},d67a:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"verbose container"},[2===e.verboseData.status?r("div",{staticClass:"verbose-viewer"},[r("div",{staticClass:"col-1"},[r("h1",[e._v(e._s(e.$t("verbose.title")))]),r("div",{staticClass:"meta-info"},[r("table",[r("tr",[r("td",[e._v(e._s(e.$t("verbose.uploaded")))]),r("td",["00000000-0000-0000-0000-000000000000"!==e.verboseData.metadata.uploader.uuid?r("avatar",{attrs:{id:e.verboseData.metadata.uploader.uuid,title:!1}}):e._e(),e._v("\n              "+e._s(e.verboseData.metadata.uploader.name)+"\n            ")],1)]),r("tr",[r("td",{attrs:{title:e.$t("verbose.started")}},[e._v("\n              "+e._s(e.$t("verbose.start"))+"\n            ")]),r("td",[e._v(e._s(e.verboseData.metadata.startTime))])]),r("tr",[r("td",{attrs:{title:e.$t("verbose.ended")}},[e._v("\n              "+e._s(e.$t("verbose.end"))+"\n            ")]),r("td",[e._v(e._s(e.verboseData.metadata.endTime))])]),r("tr",[r("td",{attrs:{title:e.$t("verbose.recording")}},[e._v("\n              "+e._s(e.$t("verbose.duration"))+"\n            ")]),r("td",[e._v(e._s(e.verboseData.metadata.duration))])]),r("tr",[r("td",{attrs:{title:e.$t("verbose.values")}},[e._v("\n              "+e._s(e.$t("verbose.count"))+"\n            ")]),r("td",[e._v("\n              "+e._s(e.filteredNodeCount)+" / "+e._s(e.verboseData.metadata.count.total)+"\n            ")])]),r("tr",[r("td",{attrs:{title:e.$t("verbose.filterDesc")}},[e._v("\n              "+e._s(e.$t("verbose.filter"))+"\n            ")]),r("td",[r("code",[e._v(e._s(e.verboseData.metadata.filter))])])]),r("tr",[r("td",{attrs:{title:e.$t("verbose.truncatedDesc")}},[e._v("\n              "+e._s(e.$t("verbose.truncated"))+"\n            ")]),r("td",[r("code",{class:e.verboseData.metadata.truncated?"true":"false"},[e._v("\n                "+e._s(e.verboseData.metadata.truncated)+"\n              ")])])])])]),r("div",{staticClass:"filter"},[r("label",{attrs:{for:"filter"}},[e._v(e._s(e.$t("verbose.filter")))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{type:"text",id:"filter",placeholder:e.$t("verbose.filterPlaceholder")},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),e._l(["true","false","undefined"],(function(t){return r("div",{key:t,class:["exclude-result",{selected:e.isExcluded(t)}],on:{click:function(s){return e.excludeResult(t)}}},[r("span"),r("p",[e._v("\n            "+e._s(e.$t("verbose.exclude"))+" "),r("code",{class:t},[e._v(e._s(t))])])])}))],2)]),r("div",{staticClass:"col-2"},[r("virtual-list",{staticClass:"data",attrs:{"data-sources":e.filteredNodes,"data-key":"id","data-component":e.Node,keeps:50,"estimate-size":38}})],1)]):r("div",{staticClass:"tool-intro"},[r("div",[r("img",{attrs:{alt:"LuckPerms logo",src:s("9b19")}}),r("div",{staticClass:"text"},[r("h1",[e._v("LuckPerms")]),r("p",[e._v(e._s(e.$t("verbose.title")))]),3===e.verboseData.status?r("div",{staticClass:"error"},[e.errors.load?[r("h3",[e._v(e._s(e.$t("editor.error.title")))]),r("p",[e._v(e._s(e.$t("editor.error.info")))]),r("i18n",{attrs:{path:"editor.error.new",tag:"p"},scopedSlots:e._u([{key:"command",fn:function(){return[r("code",[e._v("/lp editor")])]},proxy:!0}],null,!1,3149427954)})]:e._e(),e.errors.unsupported?[r("h3",[e._v(e._s(e.$t("editor.unsupported.title")))]),r("i18n",{attrs:{path:"editor.unsupported.info",tag:"p"},scopedSlots:e._u([{key:"download",fn:function(){return[r("router-link",{attrs:{to:"/download"}},[e._v("\n                  "+e._s(e.$t("editor.unsupported.download"))+"\n                ")])]},proxy:!0}],null,!1,247335080)})]:e._e()],2):e._e(),1===e.verboseData.status?[r("p",[r("font-awesome",{attrs:{icon:"asterisk",spin:!0}}),e._v("\n            "+e._s(e.$t("editor.loading"))+"\n          ")],1)]:e._e(),0===e.verboseData.status?[r("router-link",{attrs:{to:"/verbose/demo"}},[r("button",{staticClass:"button demo-button"},[e._v("\n              "+e._s(e.$t("tools.demo"))+"\n            ")])]),r("p",[e._v(e._s(e.$t("verbose.home.generate")))]),r("ul",[r("li",[r("code",[e._v("/lp verbose record ["+e._s(e.$t("verbose.home.filter"))+"]")])]),r("li",[e._v(e._s(e.$t("verbose.home.performActions")))]),e._m(0),r("li",[e._v(e._s(e.$t("verbose.home.url")))])])]:e._e()],2)])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("code",[e._v("/lp verbose paste")])])}],a=(s("6762"),s("2fdb"),s("89c1")),n=s.n(a),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"node"},[s("div",{staticClass:"main",on:{click:function(t){e.open=!e.open}}},[s("span",{staticClass:"name"},[e.source.who.uuid&&"00000000-0000-0000-0000-000000000000"!==e.source.who.uuid?s("avatar",{attrs:{id:e.source.who.uuid,name:e.source.who.identifier,title:!1}}):e._e(),e._v("\n      "+e._s(e.source.who.identifier)+"\n    ")],1),s("span",{staticClass:"permission"},[s("code",[e._v(e._s(e.source.permission||"meta: "+e.source.key))])]),s("span",{staticClass:"value",class:e.source.result},[s("code",{class:e.source.result},[e._v(e._s(e.source.result))]),s("font-awesome",{attrs:{icon:e.valueIcon,"fixed-width":""}})],1)]),s("transition",{attrs:{name:"slide"}},[e.open?s("div",{staticClass:"stack"},[s("div",{staticClass:"col-1"},[s("table",[e.source.context.length?s("tr",[s("td",[e._v(e._s(e.$t("verbose.context")))]),s("td",e._l(e.source.context,(function(t){return s("code",{key:t},[e._v("\n                "+e._s(t.key)+": "+e._s(t.value)+"\n              ")])})),0)]):e._e(),s("tr",[s("td",[e._v(e._s(e.$t("verbose.origin")))]),s("td",[s("code",[e._v(e._s(e.source.origin))])])]),e.source.resultInfo?s("tr",[s("td",[e._v(e._s(e.$t("verbose.processor")))]),s("td",[s("code",[e._v(e._s(e.source.resultInfo.processorClass))])])]):e._e(),e.source.resultInfo?s("tr",[s("td",[e._v(e._s(e.$t("verbose.cause")))]),s("td",[s("code",[e._v(e._s(e.source.resultInfo.cause))])])]):e._e(),s("tr",[s("td",[e._v(e._s(e.$t("verbose.thread")))]),s("td",[s("code",[e._v(e._s(e.source.thread))])])])])]),s("div",{staticClass:"col-2"},[e._v("\n        "+e._s(e.$t("verbose.trace"))+"\n        "),s("pre",{staticClass:"code"},[e._v(e._s(e.source.trace.join("\n")))])])]):e._e()])],1)},d=[],u=s("df3a"),l={components:{Avatar:u["a"]},props:{source:Object},data:function(){return{open:!1}},computed:{valueIcon:function(){switch(this.source.result){case"true":return"check";case"false":return"times";default:return"minus"}}}},c=l,v=(s("c699"),s("2877")),_=Object(v["a"])(c,i,d,!1,null,null,null),f=_.exports,b=s("b263"),p={metaInfo:{title:"Verbose"},components:{Avatar:u["a"],VirtualList:n.a},data:function(){return{filter:"",excludedResults:[]}},computed:{Node:function(){return f},verboseData:function(){return this.$store.getters.verbose},filteredNodes:function(){var e=this,t=this.verboseData.data;if(!this.filter&&0===this.excludedResults.length)return t;var s=this.filter.toLowerCase();return t.filter((function(t){var r,o,a;return!e.excludedResults.includes(t.result)&&((null===(r=t.permission)||void 0===r?void 0:r.toLowerCase().includes(s))||(null===(o=t.key)||void 0===o?void 0:o.toLowerCase().includes(s))||(null===(a=t.who)||void 0===a?void 0:a.identifier.toLowerCase().includes(s)))}))},errors:function(){return this.$store.state.verbose.errors},filteredNodeCount:function(){return this.filteredNodes.length}},methods:{isExcluded:function(e){return this.excludedResults.includes(e)},excludeResult:function(e){this.isExcluded(e)?this.excludedResults=this.excludedResults.filter((function(t){return t!==e})):this.excludedResults.push(e)}},created:function(){var e;(null===(e=this.verboseData)||void 0===e?void 0:e.sessionId)||Object(b["a"])(this.$route,"getVerboseData")},watch:{$route:function(e){Object(b["a"])(e,"getVerboseData")}}},m=p,h=(s("fa45"),Object(v["a"])(m,r,o,!1,null,null,null));t["default"]=h.exports},e81a:function(e,t,s){},fa45:function(e,t,s){"use strict";var r=s("e81a"),o=s.n(r);o.a}}]);
//# sourceMappingURL=verbose.c0b4290a.js.map