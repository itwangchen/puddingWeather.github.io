(function(e){function n(n){for(var i,r,u=n[0],c=n[1],l=n[2],d=0,f=[];d<u.length;d++)r=u[d],t[r]&&f.push(t[r][0]),t[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);s&&s(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],i=!0,r=1;r<o.length;r++){var c=o[r];0!==t[c]&&(i=!1)}i&&(a.splice(n--,1),e=u(u.s=o[0]))}return e}var i={},t={index:0},a=[];function r(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-index-index":"d934e98c"}[e]+".js"}function u(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var n=[],o=t[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(function(n,i){o=t[e]=[n,i]});n.push(o[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(e),a=function(n){c.onerror=c.onload=null,clearTimeout(l);var o=t[e];if(0!==o){if(o){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,o[1](r)}t[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=i,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)u.d(o,i,function(n){return e[n]}.bind(null,i));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var s=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("3297")},"13b4":function(e,n,o){"use strict";var i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},t=[];o.d(n,"a",function(){return i}),o.d(n,"b",function(){return t})},"13c7":function(e,n,o){"use strict";o.r(n);var i=o("13b4"),t=o("8fbb");for(var a in t)"default"!==a&&function(e){o.d(n,e,function(){return t[e]})}(a);o("4066");var r=o("2877"),u=Object(r["a"])(t["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},3297:function(e,n,o){"use strict";var i=o("288e"),t=i(o("cebc"));o("cadf"),o("551c"),o("097d"),o("e598"),o("1c31");var a=i(o("e143")),r=i(o("13c7"));a.default.config.productionTip=!1,r.default.mpType="app";var u=new a.default((0,t.default)({},r.default));u.$mount()},4066:function(e,n,o){"use strict";var i=o("98c7"),t=o.n(i);t.a},"72ab":function(e,n,o){n=e.exports=o("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},"7a50":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={MAP_API_KEY:"5EOBZ-JGBKX-SXY4O-TY2WO-E3X3H-IVFXX",WEATHER_API_KEY:"dbcd0bce164347c89de825bf1c1ecc03",BD_Map_Key:"ub60z8oQBNt4XRuvZSQDn16gK4Lo8pPm"};n.default=i},"8fbb":function(e,n,o){"use strict";o.r(n);var i=o("edd9"),t=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(n,e,function(){return i[e]})}(a);n["default"]=t.a},"98c7":function(e,n,o){var i=o("72ab");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var t=o("4f06").default;t("75a96f21",i,!0,{sourceMap:!1,shadowMode:!1})},b870:function(e,n,o){"use strict";var i=o("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.loadScript=n.initialize=n.snowType=n.rainType=n.iconType=n.lifeIndexEnum=n.arrForAirColor=n.airQuailtyLevel=n.weekEnum=void 0;var t=i(o("7a50")),a=t.default.BD_Map_Key,r={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"};n.weekEnum=r;var u={50:"优",100:"良",150:"轻度污染",200:"中度污染",250:"重度污染",300:"严重污染"};n.airQuailtyLevel=u;var c=["green","blue","orange","red","purple","maroon"];n.arrForAirColor=c;var l={comf:"舒适度指数",cw:"洗车指数",drsg:"穿衣指数",flu:"感冒指数",sport:"运动指数",trav:"旅游指数",uv:"紫外线指数",air:"空气污染",airc:"晾晒指数",ag:"过敏指数",mu:"化妆指数",ptfc:"交通指数"};n.lifeIndexEnum=l;var d={100:"qingbai",101:"duoyunbai",102:"duoyunbai",103:"duoyunbai",104:"yin",200:"fengli",201:"qing",202:"fengli",203:"fengli",204:"fengli",205:"fengli",206:"fengli",207:"fengli",208:"fengli",209:"fengli",210:"fengli",211:"fengli",212:"fengli",213:"fengli",300:"zhenyubai",301:"zhenyubai",302:"leizhenyu",303:"leizhenyu",304:"leizhenyuzhaunbingbao",305:"xiaoyu",306:"zhongyu",307:"dayu",308:"zhongyu",309:"xiaoyu",310:"baoyu",311:"dabaoyu",312:"tedabaoyu",313:"dongyu",314:"zhongyu",315:"dayu",316:"baoyu",317:"baoyu",318:"tedabaoyu",399:"xiaoyu",400:"xiaoxue",401:"zhongyue",402:"daxue",403:"baoxue",404:"yujiaxue",405:"yujiaxue",406:"yujiaxue",407:"zhenxuebai",408:"zhongxue",409:"daxue",410:"baoxue",499:"xiaoxue",500:"wu",501:"wu",502:"wumaibai",503:"yangsha",504:"fuchen",507:"shachenbao",508:"qiangshachenbao",509:"wu",510:"wu",511:"wumaibai",512:"wumaibai",513:"wumaibai",514:"wu",515:"wu"};n.iconType=d;var s={300:80,301:100,302:80,303:100,304:100,305:20,306:40,307:60,308:20,309:10,310:180,311:220,312:250,313:40,314:30,315:50,316:100,317:150,318:180,399:20};n.rainType=s;var f={400:40,401:80,402:120,403:160,404:80,405:80,406:120,407:120,408:80,409:100,410:140,499:30};n.snowType=f;var p=function(e,n,o){var i=new window.BMap.Point,t=new i.Geocoder,a=new i.Point(e,n);t.getLocation(a,function(e){console.log(rs,"initialize"),o(e)})};n.initialize=p;var g=function(){console.log(1);var e=document.createElement("script");e.src="https://api.map.baidu.com/api?v=2.0&ak="+a+"&callback=initialize",document.body.appendChild(e)};n.loadScript=g},e598:function(e,n,o){"use strict";(function(e){var n=o("288e"),i=n(o("5176")),t=n(o("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"布丁天气",navigationBarBackgroundColor:"#30b8c4",backgroundColor:"#fff"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={maps:{qqmap:{key:"5EOBZ-JGBKX-SXY4O-TY2WO-E3X3H-IVFXX"}}},e.__uniConfig.qqMapKey="5EOBZ-JGBKX-SXY4O-TY2WO-E3X3H-IVFXX",e.__uniConfig.nvue={"flex-direction":"column"},t.default.component("pages-index-index",function(e){var n={component:o.e("pages-index-index").then(function(){return e(o("22c5"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,i.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"布丁天气"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,o("c8ba"))},edd9:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o("b870"),t={onLaunch:function(){console.log("App Launch"),console.log(i.loadScript,"插入百度地图"),(0,i.loadScript)()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t}});