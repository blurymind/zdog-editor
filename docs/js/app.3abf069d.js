(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/zdog-editor/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"06cd":function(e,t,n){"use strict";n("6cb0")},1416:function(e,t,n){"use strict";n("445f")},"2efc":function(e,t,n){"use strict";n("d713")},"445f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("5c96"),o=n.n(r),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SceneEditor",{staticClass:"backdrop",attrs:{scene:e.scene},on:{setup:function(t){e.shapes={}},"new-shape":function(t){e.shapes[t.id]=t.shape}}}),n("el-container",{staticClass:"mouse-disable"},[n("el-header",{attrs:{height:"2rem"}},[n("Menu",{staticClass:"mouse-enable",on:{save:e.saveFile,load:e.loadFile}}),n("input",{ref:"load",staticStyle:{opacity:"0"},attrs:{type:"file"}})],1),n("el-main",{attrs:{height:"calc(100vh - 2rem)"}},[n("el-col",{attrs:{span:5}},[n("TreeEditor",{staticClass:"mouse-enable",attrs:{scene:e.scene,shapes:e.shapes},on:{select:function(t){e.selection=t}}})],1),n("el-col",{attrs:{span:12}},[e._v(" ")]),n("el-col",{attrs:{span:7}},[n("PropertyEditor",{staticClass:"mouse-enable",attrs:{shapes:e.shapes,selection:e.selection}})],1)],1)],1)],1)}),s=[],l=n("53ca"),c=(n("b64b"),n("e9c4"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("a15b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(t){return e.$emit("save")}}},[n("i",{staticClass:"el-icon-download"}),e._v("Save ")]),n("el-menu-item",{attrs:{index:"2"},on:{click:function(t){return e.$emit("load")}}},[n("i",{staticClass:"el-icon-upload2"}),e._v("Load ")])],1),n("div",{staticClass:"line"})],1)}),d=[],u={name:"Menu",props:{},data:function(){return{title:"Untitled"}}},p=u,m=n("2877"),f=Object(m["a"])(p,c,d,!1,null,"111473e4",null),h=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card"},[n("el-input",{staticStyle:{"margin-bottom":"1em"},attrs:{placeholder:"Filter by name..."},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{ref:"tree",attrs:{draggable:"",data:e.scene,props:e.defaultProps,"filter-node-method":e.filterNode,"render-content":e.renderContent,"expand-on-click-node":!1,"default-expand-all":!0,"highlight-current":!0},on:{"node-drop":e.onNodeDrop,"node-click":function(t){return e.$emit("select",t)}}})],1)},b=[],y=n("b85c"),g=(n("4de4"),n("c740"),n("a434"),n("99af"),n("ec26")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.emitCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("el-button",{attrs:{size:"mini",type:"text"}},[n("i",{staticClass:"el-icon-plus"})])],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"Anchor"}},[e._v(" Anchor ")]),n("el-dropdown-item",{attrs:{command:"Group"}},[e._v(" Group ")]),n("el-dropdown-item",{attrs:{command:"Rect"}},[e._v(" Rect ")]),n("el-dropdown-item",{attrs:{command:"RoundedRect"}},[e._v(" RoundedRect ")]),n("el-dropdown-item",{attrs:{command:"Ellipse"}},[e._v(" Ellipse ")]),n("el-dropdown-item",{attrs:{command:"Polygon"}},[e._v(" Polygon ")]),n("el-dropdown-item",{attrs:{command:"Shape"}},[e._v(" Shape ")]),n("el-dropdown-item",{attrs:{command:"Box"}},[e._v(" Box ")]),n("el-dropdown-item",{attrs:{command:"Cylinder"}},[e._v(" Cylinder ")]),n("el-dropdown-item",{attrs:{command:"Hemisphere"}},[e._v(" Hemisphere ")]),n("el-dropdown-item",{attrs:{command:"Cone"}},[e._v(" Cone ")])],1)],1)},x=[],O={name:"CreateDropdown",props:{},methods:{emitCommand:function(e){this.$emit("command",e)}}},_=O,k=Object(m["a"])(_,w,x,!1,null,"59f2910a",null),j=k.exports,P={name:"TreeEditor",props:{scene:Array,shapes:Object},data:function(){return{filterText:"",defaultProps:{id:"id",label:"label",type:"type",props:"props",children:"children"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},renderContent:function(e,t){var n=this,a=t.node,r=t.data;return"ROOT"===r.id?e("span",{class:"custom-tree-node"},[e("span",[a.label]),e("span",[e(j,{on:{command:function(e){return n.createNode(r,e)}}})])]):e("span",{class:"custom-tree-node"},[e("span",[a.label]),e("span",[e(j,{on:{command:function(e){return n.createNode(r,e)}}}),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return n.duplicateNode(a,r)}},style:"margin-left: 0.3em;"},[e("i",{class:"el-icon-copy-document"})]),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return n.removeNode(a,r)}},style:"margin-left: 0.3em;"},[e("i",{class:"el-icon-delete"})])])])},createNode:function(e,t){console.log(e,t),e.children.push({id:Object(g["a"])(),label:t,type:t,props:{},children:[]})},recursiveUpdateId:function(e){e.id=Object(g["a"])();var t,n=Object(y["a"])(e.children);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.recursiveUpdateId(a)}}catch(r){n.e(r)}finally{n.f()}},duplicateNode:function(e,t){var n=e.parent,a=n.data.children||n.data,r=JSON.parse(JSON.stringify(t));this.recursiveUpdateId(r),a.push(r)},removeNode:function(e,t){var n=e.parent,a=n.data.children||n.data,r=a.findIndex((function(e){return e.id===t.id}));a.splice(r,1)},onNodeDrop:function(){},getPath:function(e,t){if(t.id===e)return[e];var n,a=Object(y["a"])(t.children);try{for(a.s();!(n=a.n()).done;){var r=n.value,o=this.getPath(e,r);if(o.length>0)return[t.id].concat(o)}}catch(i){a.e(i)}finally{a.f()}return[]},getWorldTransform:function(e){var t,n,a=Object(y["a"])(this.scene);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(t=this.getPath(e.data.id,r),t.length>0)break}}catch(o){a.e(o)}finally{a.f()}0===t.length&&console.error("Could not find a path to node ".concat(e.data.id,". Is something wrong?"),e),console.log(t)}}},z=P,S=(n("1416"),Object(m["a"])(z,v,b,!1,null,null,null)),C=S.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{ref:"canvas",style:{background:e.background},attrs:{id:"zdog-canvas"}})},E=[],T=n("e72d"),N=n.n(T),R={name:"SceneEditor",props:{scene:Array,axes:Boolean,background:{type:String,default:"#FDB"}},data:function(){return{resizeObserver:null,width:0,height:0,illustration:null}},methods:{construct:function(e,t){var n=JSON.parse(JSON.stringify(e.props));n.addTo=t;var a=new N.a[e.type](n);this.$emit("new-shape",{id:e.id,shape:a});var r,o=Object(y["a"])(e.children);try{for(o.s();!(r=o.n()).done;){var i=r.value;this.construct(i,a)}}catch(s){o.e(s)}finally{o.f()}},setup:function(){if(this.$emit("setup"),this.illustration=new N.a.Illustration({element:this.$refs.canvas,dragRotate:!0,resize:!0}),this.axes){var e=new N.a.Shape({addTo:this.illustration,color:"#636",stroke:3});new N.a.Polygon({addTo:e,radius:5,sides:3,translate:{x:100},rotate:{z:-Math.PI/6},stroke:5,fill:!0,color:"#C25"}),new N.a.Shape({addTo:e,path:[{},{x:100}],color:"#C25",stroke:3}),new N.a.Polygon({addTo:e,radius:5,sides:3,translate:{y:-100},stroke:5,fill:!0,color:"#E62"}),new N.a.Shape({addTo:e,path:[{},{y:-100}],color:"#E62",stroke:3}),new N.a.Polygon({addTo:e,radius:5,sides:3,translate:{z:100},rotate:{z:-Math.PI/6,y:Math.PI/2},stroke:5,fill:!0,color:"#636"}),new N.a.Shape({addTo:e,path:[{},{z:100}],color:"#636",stroke:3})}var t,n=Object(y["a"])(this.scene);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.construct(a,this.illustration)}}catch(r){n.e(r)}finally{n.f()}this.illustration.updateRenderGraph()},render:function(){this.illustration.updateRenderGraph(),requestAnimationFrame(this.render.bind(this))}},watch:{scene:{deep:!0,handler:function(){var e=this.illustration.rotate;this.setup(),this.illustration.rotate=e}}},mounted:function(){this.setup(),this.render()}},M=R,I=(n("06cd"),Object(m["a"])(M,$,E,!1,null,"366fc6d4",null)),F=I.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!==e.selection?n("el-card",{staticClass:"property-editor"},[n("el-form",{ref:"form",attrs:{"label-width":"100px",size:"mini",inline:!0}},[n("el-form-item",{attrs:{label:"Layer Name"}},[n("el-input",{attrs:{size:"mini"},model:{value:e.selection.label,callback:function(t){e.$set(e.selection,"label",t)},expression:"selection.label"}})],1),n("el-collapse",e._l(e.properties,(function(t){return n("el-collapse-item",{key:t.name,attrs:{title:t.name,name:t.name}},e._l(t.props,(function(t){return n("el-form-item",{key:t.name,attrs:{label:t.name}},["number"===t.type?n("el-input-number",{attrs:{controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,n)}},model:{value:e.shapes[e.selection.id][t.name],callback:function(n){e.$set(e.shapes[e.selection.id],t.name,n)},expression:"shapes[selection.id][prop.name]"}}):e._e(),"boolean"===t.type?n("el-switch",{on:{change:function(n){return e.updateProperty(e.selection.id,t.name,n)}},model:{value:e.shapes[e.selection.id][t.name],callback:function(n){e.$set(e.shapes[e.selection.id],t.name,n)},expression:"shapes[selection.id][prop.name]"}}):e._e(),"string"===t.type&&"#"===e.shapes[e.selection.id][t.name].slice(0,1)?n("el-color-picker",{attrs:{size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,n)}},model:{value:e.shapes[e.selection.id][t.name],callback:function(n){e.$set(e.shapes[e.selection.id],t.name,n)},expression:"shapes[selection.id][prop.name]"}}):e._e(),"vector"===t.type&&"rotate"!==t.name?n("el-input-number",{attrs:{controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,{x:n})}},model:{value:e.shapes[e.selection.id][t.name].x,callback:function(n){e.$set(e.shapes[e.selection.id][t.name],"x",n)},expression:"shapes[selection.id][prop.name].x"}}):e._e(),"vector"===t.type&&"rotate"!==t.name?n("el-input-number",{attrs:{controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,{y:n})}},model:{value:e.shapes[e.selection.id][t.name].y,callback:function(n){e.$set(e.shapes[e.selection.id][t.name],"y",n)},expression:"shapes[selection.id][prop.name].y"}}):e._e(),"vector"===t.type&&"rotate"!==t.name?n("el-input-number",{attrs:{controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,{z:n})}},model:{value:e.shapes[e.selection.id][t.name].z,callback:function(n){e.$set(e.shapes[e.selection.id][t.name],"z",n)},expression:"shapes[selection.id][prop.name].z"}}):e._e(),"vector"===t.type&&"rotate"===t.name?n("el-input-number",{attrs:{value:e.degrees(e.shapes[e.selection.id][t.name].x),controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,{x:n})}}}):e._e(),"vector"===t.type&&"rotate"===t.name?n("el-input-number",{attrs:{value:e.degrees(e.shapes[e.selection.id][t.name].y),controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,{y:n})}}}):e._e(),"vector"===t.type&&"rotate"===t.name?n("el-input-number",{attrs:{value:e.degrees(e.shapes[e.selection.id][t.name].z),controls:!1,size:"mini"},on:{change:function(n){return e.updateProperty(e.selection.id,t.name,{z:n})}}}):e._e()],1)})),1)})),1)],1)],1):e._e()},J=[],U=(n("caad"),n("fb6a"),n("2532"),n("b0c0"),n("4e82"),{name:"PropertyEditor",props:{selection:Object,shapes:Object},methods:{updateProperty:function(e,t,n){if(this.$emit("update",e,t,n),"object"===Object(l["a"])(n))for(var a=0,r=Object.keys(n);a<r.length;a++){var o=r[a];this.selection.props[t]||(this.selection.props[t]={}),"rotate"===t?(this.selection.props[t][o]=this.radians(n[o]),this.shapes[e][t][o]=this.radians(n[o])):this.selection.props[t][o]=n[o]}else this.selection.props[t]=n;this.shapes[e].updatePath&&this.shapes[e].updatePath()},radians:function(e){return e*Math.PI/180},degrees:function(e){return 180*e/Math.PI}},computed:{properties:function(){var e=["renderOrigin","renderFront","renderNormal","sortValue","isFacingBack","renderCentroid"],t=[{name:"Transform",range:["translate","rotate","scale","origin"],props:[]},{name:"Shape and size",range:["width","height","diameter","length","quarters"],props:[]},{name:"Style",range:["stroke","color","visible","fill","closed","backface"],props:[]},{name:"Others",props:[]}];if(!this.selection)return[];for(var n=this.shapes[this.selection.id],a=[],r=0,o=Object.keys(n);r<o.length;r++){var i=o[r];e.includes(i)||("object"===Object(l["a"])(n[i])?"number"===typeof n[i].x&&"number"===typeof n[i].y&&"number"===typeof n[i].z&&a.push({name:i,type:"vector"}):"undefined"!==typeof n[i]&&("_"===i.slice(0,1)?a.push({name:i.slice(1),type:Object(l["a"])(n[i])}):a.push({name:i,type:Object(l["a"])(n[i])})))}for(var s=0,c=a;s<c.length;s++){var d,u=c[s],p=Object(y["a"])(t);try{for(p.s();!(d=p.n()).done;){var m=d.value;if(m.range){if(m.range.includes(u.name)){m.props.push(u);break}}else m.props.push(u)}}catch(b){p.e(b)}finally{p.f()}}for(var f=function(){var e=v[h];e.props.sort((function(t,n){if(t.name===n.name)return 0;if(!e.range)return t.name<n.name?-1:t.name>n.name?1:0;var a=e.range.indexOf(t.name),r=e.range.indexOf(n.name);return-1===a&&-1===r?t.name<n.name?-1:t.name>n.name?1:0:a>-1&&-1===r?-1:-1===a&&r>-1?1:a-r}))},h=0,v=t;h<v.length;h++)f();return console.log(t),t}}}),B=U,D=(n("2efc"),Object(m["a"])(B,A,J,!1,null,"0e952b6f",null)),G=D.exports,L={name:"App",components:{TreeEditor:C,SceneEditor:F,PropertyEditor:G,Menu:h},data:function(){return{scene:[{id:"ROOT",label:"Root",type:"Anchor",props:{},children:[]}],selection:null,shapes:{},title:"Untitled"}},methods:{updateSelection:function(e,t,n){if("object"===Object(l["a"])(n))for(var a=0,r=Object.keys(n);a<r.length;a++){var o=r[a];this.selection[t][n]=n[o]}else this.selection[t]=n},saveFile:function(){var e=JSON.stringify(this.scene),t=new Blob([e],{type:"text/plain"}),n=document.createEvent("MouseEvents"),a=document.createElement("a");a.download="zdog.json",a.href=window.URL.createObjectURL(t),a.dataset.downloadurl=["text/json",a.download,a.href].join(":"),n.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(n)},loadFile:function(){var e=this;this.$refs.load.click(),this.$refs.load.onchange=function(t){if(console.log(t.target.files[0]),t.target.files[0]){var n=new FileReader;n.onload=function(t){var n=t.target.result;e.scene=JSON.parse(n)},n.readAsText(t.target.files[0])}}}}},q=L,H=(n("034f"),Object(m["a"])(q,i,s,!1,null,null,null)),V=H.exports;a["default"].config.productionTip=!1,a["default"].use(o.a),new a["default"]({render:function(e){return e(V)}}).$mount("#app")},"6cb0":function(e,t,n){},"85ec":function(e,t,n){},d713:function(e,t,n){}});
//# sourceMappingURL=app.3abf069d.js.map