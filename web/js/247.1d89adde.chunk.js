webpackJsonp([247],{2132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=(n.n(a),n(6)),o=(n.n(r),n(30)),s=n.n(o),i=n(2389),l=n(2391),c=n(2392),u=n(2399),m=n(2),p=n(254),d=n(2167),f=n(2728),h=(n.n(f),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}()),g=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0},t.fetchSysInfo=function(){t.setState({loading:!0}),n.i(p.c)().then(function(e){t.mounted&&t.setState({loading:!1,sysInfoData:e})},function(){t.mounted&&t.setState({loading:!1})})},t.toggleSysInfoCards=function(e){var a,r=n.i(d.a)(t.props.location.query);a=r.expandedCards.includes(e)?r.expandedCards.filter(function(t){return t!==e}):r.expandedCards.concat(e),t.updateQuery({expandedCards:a})},t.updateQuery=function(e){var a=n.i(d.b)(g({},n.i(d.a)(t.props.location.query),e));t.context.router.replace({pathname:t.props.location.pathname,query:a})},t}return h(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSysInfo()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderSysInfo=function(){var e=this.state.sysInfoData;if(!e)return null;var t=n.i(d.a)(this.props.location.query);return n.i(d.c)(e)?a.createElement(i.a,{expandedCards:t.expandedCards,sysInfoData:e,toggleCard:this.toggleSysInfoCards}):a.createElement(c.a,{expandedCards:t.expandedCards,sysInfoData:e,toggleCard:this.toggleSysInfoCards})},t.prototype.render=function(){var e=this.state,t=e.loading,r=e.sysInfoData;return a.createElement("div",{className:"page page-limited"},a.createElement(s.a,{title:n.i(m.translate)("system_info.page")}),a.createElement(u.a,null),a.createElement(l.a,{loading:t,isCluster:n.i(d.c)(r),logLevel:n.i(d.d)(r),showActions:void 0!==r,onLogLevelChange:this.fetchSysInfo}),this.renderSysInfo())},t.contextTypes={router:r.object},t}(a.PureComponent);t.default=y},2167:function(e,t,n){"use strict";function a(e){return n.i(b.omit)(e,[x,L,"Name",k,O])}function r(e){return e[x]}function o(e){return e[L]}function s(e){return e?e["Web Logging"]||e["Compute Engine Logging"]?n.i(b.sortBy)([s(e["Web Logging"]),s(e["Compute Engine Logging"])],function(e){return S.indexOf(e)})[1]:e.System?s(e.System):e["Logs Level"]||S[0]:S[0]}function i(e){return e["Application Nodes"]}function l(e){return e["Search Nodes"]}function c(e){return void 0!=e&&e.System&&!0===e.System[w]}function u(e){var t=S[0];if(!e)return t;if(c(e)){var a=n.i(b.sortBy)(i(e).map(s),function(e){return S.indexOf(e)});return a.length>0?a[a.length-1]:t}return s(e)}function m(e){return e.Name}function p(e){var t={},a=e.Statistics;return a&&(t["Lines of Code"]=n.i(_.formatMeasure)(a.ncloc,"INT")),N({},e.System,t)}function d(e){return N({},p(e),n.i(b.omit)(e,["Application Nodes",k,"Search Nodes",O,"Statistics","System"]))}function f(e){return N({},p(e),n.i(b.omitBy)(e,function(e,t){return null==e||[k,O,"Statistics","System"].includes(t)||t.startsWith("Compute Engine")||t.startsWith("Search")||t.startsWith("Web")}))}function h(e){return{Web:n.i(b.pickBy)(e,function(e,t){return t.startsWith("Web")}),"Compute Engine":n.i(b.pickBy)(e,function(e,t){return t.startsWith("Compute Engine")}),"Search Engine":n.i(b.pickBy)(e,function(e,t){return t.startsWith("Search")})}}function g(e){var t={},a={};return n.i(b.each)(e,function(e,n){"object"!==(void 0===e?"undefined":C(e))||e instanceof Array?t[n]=e:a[n]=e}),{mainSection:t,sections:a}}function y(e){return n.i(b.sortBy)(e,[function(e){return-Number(e.version.split(".")[0])},function(e){return-Number(e.version.split(".")[1]||0)},function(e){return-Number(e.version.split(".")[2]||0)}])}function v(e){var t=n.i(b.groupBy)(e,function(e){return e.version.split(".")[0]});return n.i(b.sortBy)(Object.keys(t),function(e){return-Number(e)}).map(function(e){return t[e]})}n.d(t,"e",function(){return S}),n.d(t,"o",function(){return x}),t.j=a,t.h=r,t.i=o,t.n=s,t.q=i,t.s=l,t.c=c,t.d=u,t.r=m,t.p=d,t.k=f,t.l=h,t.m=g,n.d(t,"a",function(){return D}),n.d(t,"b",function(){return P}),t.g=y,t.f=v;var b=n(4),E=(n.n(b),n(701)),_=n(25),C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S=["INFO","DEBUG","TRACE"],w="High Availability",x="Health",L="Health Causes",k="Plugins",O="Settings",D=n.i(b.memoize)(function(e){return{expandedCards:n.i(E.b)(e.expand,E.c)}}),P=n.i(b.memoize)(function(e){return n.i(E.g)({expand:n.i(E.e)(e.expandedCards)})})},2178:function(e,t,n){"use strict";function a(e){var t=e.className,n=e.color,a=e.size;return r.createElement("i",{className:o("status-indicator",n,{"small-status-indicator":"small"===a,"big-status-indicator":"big"===a},t)})}t.a=a;var r=n(0),o=(n.n(r),n(8)),s=(n.n(o),n(2191));n.n(s)},2185:function(e,t,n){t=e.exports=n(27)(void 0),t.push([e.i,".status-indicator{display:inline-block;box-sizing:border-box;width:16px;height:16px;border-radius:16px;margin:4px}.status-indicator.small-status-indicator{width:8px;height:8px;border-radius:8px;margin:8px}.status-indicator.big-status-indicator{width:24px;height:24px;border-radius:24px;margin:0}.status-indicator.red{background-color:#d4333f}.status-indicator.yellow{background-color:#eabe06}.status-indicator.green{background-color:#0a0}",""])},2191:function(e,t,n){var a=n(2185);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(28)(a,r);a.locals&&(e.exports=a.locals)},2244:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(8)),o=(n.n(r),n(4)),s=(n.n(o),n(2245)),i=n(709),l=n(2394),c=n(2167),u=n(2),m=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hoveringDetail:!1},t.handleClick=function(){return t.props.onClick(t.props.name)},t.onDetailEnter=function(){return t.setState({hoveringDetail:!0})},t.onDetailLeave=function(){return t.setState({hoveringDetail:!1})},t}return m(t,e),t.prototype.render=function(){var e=this.props,t=e.health,m=e.open,p=e.sysInfoData,d=n.i(c.m)(p),f=d.mainSection,h=d.sections,g=m&&f&&Object.keys(f).length>0,y=m&&h,v=n.i(c.n)(p),b=v&&v!==c.e[0];return a.createElement("li",{className:r("boxed-group system-info-health-card",{"no-hover":this.state.hoveringDetail})},a.createElement("div",{className:"boxed-group-header",onClick:this.handleClick},a.createElement("span",{className:"system-info-health-card-title"},a.createElement(i.a,{className:"little-spacer-right",open:m}),this.props.name),b&&a.createElement("span",{className:"alert alert-danger spacer-left"},n.i(u.translate)("system.log_level.warning.short")),t&&a.createElement(s.a,{biggerHealth:this.props.biggerHealth,className:"pull-right",health:t,healthCauses:this.props.healthCauses,name:this.props.name})),m&&a.createElement("div",{className:"boxed-group-inner",onMouseEnter:this.onDetailEnter,onMouseLeave:this.onDetailLeave},g&&a.createElement(l.a,{items:f}),y&&n.i(o.map)(h,function(e,t){return a.createElement(l.a,{key:t,items:e,name:t})})))},t}(a.PureComponent);t.a=p},2245:function(e,t,n){"use strict";function a(e){var t=e.biggerHealth,a=e.className,m=e.name,p=e.health,d=e.healthCauses,f=d&&d.length>0&&p!==c.f.GREEN,h=r.createElement(i.a,{color:p.toLowerCase(),size:t?"big":void 0});return r.createElement("div",{className:o("system-info-health-info",a)},f&&d.map(function(e,t){return r.createElement(s.a,{key:t,className:"spacer-right",health:p,healthCause:e})}),m?r.createElement(l.a,{overlay:n.i(u.translateWithParameters)("system.current_health_of_x",m),placement:"left"},r.createElement("span",null,h)):h)}t.a=a;var r=n(0),o=(n.n(r),n(8)),s=(n.n(o),n(2393)),i=n(2178),l=n(24),c=n(254),u=n(2)},2388:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(37)),o=n.n(r),s=n(254),i=n(2),l=n(2167),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=function(e){function t(t){var a=e.call(this,t)||this;return a.handleCancelClick=function(e){e.preventDefault(),a.props.onClose()},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.newLevel;a.state.updating||(a.setState({updating:!0}),n.i(s.d)(t).then(function(){return a.props.onChange(t)},function(){return a.setState({updating:!1})}))},a.handleLevelChange=function(e){return a.setState({newLevel:e.currentTarget.value})},a.state={newLevel:t.logLevel,updating:!1},a}return c(t,e),t.prototype.render=function(){var e=this,t=this.state,r=t.updating,s=t.newLevel,c=n.i(i.translate)("system.set_log_level");return a.createElement(o.a,{isOpen:!0,contentLabel:c,className:"modal",overlayClassName:"modal-overlay",onRequestClose:this.props.onClose},a.createElement("form",{id:"set-log-level-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,c)),a.createElement("div",{className:"modal-body"},l.e.map(function(t){return a.createElement("p",{key:t,className:"spacer-bottom"},a.createElement("input",{id:"loglevel-"+t,type:"radio",className:"spacer-right text-middle",name:"system.log_levels",value:t,checked:t===s,onChange:e.handleLevelChange}),a.createElement("label",{className:"text-middle",htmlFor:"loglevel-"+t},t))}),a.createElement("div",{className:"alert alert-info spacer-top"},this.props.infoMsg),"INFO"!==s&&a.createElement("div",{className:"alert alert-danger spacer-top"},n.i(i.translate)("system.log_level.warning"))),a.createElement("div",{className:"modal-foot"},r&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{disabled:r,id:"set-log-level-submit"},n.i(i.translate)("save")),a.createElement("a",{href:"#",id:"set-log-level-cancel",onClick:this.handleCancelClick},n.i(i.translate)("cancel")))))},t}(a.PureComponent);t.a=u},2389:function(e,t,n){"use strict";function a(e){var t=e.expandedCards,a=e.sysInfoData,c=e.toggleCard;return r.createElement("ul",null,r.createElement(s.a,{biggerHealth:!0,health:n.i(l.h)(a),healthCauses:n.i(l.i)(a),name:"System",onClick:c,open:t.includes("System"),sysInfoData:n.i(l.j)(n.i(l.p)(a))}),r.createElement("li",{className:"note system-info-health-title"},n.i(i.translate)("system.application_nodes_title")),n.i(o.sortBy)(n.i(l.q)(a),l.r).map(function(e){return r.createElement(s.a,{key:n.i(l.r)(e),health:n.i(l.h)(e),healthCauses:n.i(l.i)(e),name:n.i(l.r)(e),onClick:c,open:t.includes(n.i(l.r)(e)),sysInfoData:n.i(l.j)(e)})}),r.createElement("li",{className:"note system-info-health-title"},n.i(i.translate)("system.search_nodes_title")),n.i(o.sortBy)(n.i(l.s)(a),l.r).map(function(e){return r.createElement(s.a,{key:n.i(l.r)(e),health:n.i(l.h)(e),healthCauses:n.i(l.i)(e),name:n.i(l.r)(e),onClick:c,open:t.includes(n.i(l.r)(e)),sysInfoData:n.i(l.j)(e)})}))}t.a=a;var r=n(0),o=(n.n(r),n(4)),s=(n.n(o),n(2244)),i=n(2),l=n(2167)},2390:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(2388)),o=n(711),s=n(2407),i=n(34),l=n(2),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=function(e){function t(t){var n=e.call(this,t)||this;return n.handleLogsLevelOpen=function(e){e.preventDefault(),n.setState({openLogsLevelForm:!0})},n.handleLogsLevelChange=function(e){n.setState({logLevel:e}),n.props.onLogLevelChange(),n.handleLogsLevelClose()},n.handleLogsLevelClose=function(){return n.setState({openLogsLevelForm:!1})},n.handleServerRestartOpen=function(){return n.setState({openRestartForm:!0})},n.handleServerRestartClose=function(){return n.setState({openRestartForm:!1})},n.removeElementFocus=function(e){return e.currentTarget.blur()},n.state={logLevel:t.logLevel,openLogsLevelForm:!1,openRestartForm:!1},n}return c(t,e),t.prototype.componentWillReceiveProps=function(e){e.logLevel!==this.state.logLevel&&this.setState({logLevel:e.logLevel})},t.prototype.render=function(){var e=n.i(i.i)()+"/api/system/info",t=n.i(i.i)()+"/api/system/logs";return a.createElement("div",{className:"page-actions"},a.createElement("span",null,n.i(l.translate)("system.logs_level"),":",a.createElement("strong",{className:"little-spacer-left"},this.state.logLevel),a.createElement("a",{id:"edit-logs-level-button",className:"spacer-left link-no-underline",href:"#",onClick:this.handleLogsLevelOpen},a.createElement(s.a,{className:"little-spacer-top"}))),this.props.canDownloadLogs&&a.createElement("div",{className:"display-inline-block dropdown spacer-left"},a.createElement("button",{"data-toggle":"dropdown"},n.i(l.translate)("system.download_logs"),a.createElement("i",{className:"icon-dropdown little-spacer-left"})),a.createElement("ul",{className:"dropdown-menu"},a.createElement("li",null,a.createElement("a",{href:t+"?process=app",id:"logs-link",download:"sonarqube_app.log",target:"_blank"},"Main Process")),a.createElement("li",null,a.createElement("a",{href:t+"?process=ce",id:"ce-logs-link",download:"sonarqube_ce.log",target:"_blank"},"Compute Engine")),a.createElement("li",null,a.createElement("a",{href:t+"?process=es",id:"es-logs-link",download:"sonarqube_es.log",target:"_blank"},"Search Engine")),a.createElement("li",null,a.createElement("a",{href:t+"?process=web",id:"web-logs-link",download:"sonarqube_web.log",target:"_blank"},"Web Server")))),a.createElement("a",{href:e,id:"download-link",className:"button spacer-left",onClick:this.removeElementFocus,download:"sonarqube_system_info.json",target:"_blank"},n.i(l.translate)("system.download_system_info")),this.props.canRestart&&a.createElement("button",{id:"restart-server-button",className:"spacer-left",onClick:this.handleServerRestartOpen},n.i(l.translate)("system.restart_server")),this.props.canRestart&&this.state.openRestartForm&&a.createElement(o.a,{onClose:this.handleServerRestartClose}),this.state.openLogsLevelForm&&a.createElement(r.a,{infoMsg:n.i(l.translate)(this.props.cluster?"system.cluster_log_level.info":"system.log_level.info"),logLevel:this.state.logLevel,onChange:this.handleLogsLevelChange,onClose:this.handleLogsLevelClose}))},t}(a.PureComponent);t.a=u},2391:function(e,t,n){"use strict";function a(e){return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},n.i(s.translate)("system_info.page")),e.showActions&&r.createElement(o.a,{canDownloadLogs:!e.isCluster,canRestart:!e.isCluster,cluster:e.isCluster,logLevel:e.logLevel,onLogLevelChange:e.onLogLevelChange}),e.loading&&r.createElement("div",{className:"page-actions"},r.createElement("i",{className:"spinner"})))}t.a=a;var r=n(0),o=(n.n(r),n(2390)),s=n(2)},2392:function(e,t,n){"use strict";function a(e){var t=e.expandedCards,a=e.sysInfoData,l=e.toggleCard;return r.createElement("ul",null,r.createElement(s.a,{biggerHealth:!0,health:n.i(i.h)(a),healthCauses:n.i(i.i)(a),name:"System",onClick:l,open:t.includes("System"),sysInfoData:n.i(i.j)(n.i(i.k)(a))}),n.i(o.map)(n.i(i.l)(a),function(e,a){return r.createElement(s.a,{key:a,name:a,onClick:l,open:t.includes(a),sysInfoData:n.i(i.j)(e)})}))}t.a=a;var r=n(0),o=(n.n(r),n(4)),s=(n.n(o),n(2244)),i=n(2167)},2393:function(e,t,n){"use strict";function a(e){var t=e.className,n=e.health,a=e.healthCause;return r.createElement("span",{className:o("alert",n===s.f.RED?"alert-danger":"alert-warning",t)},a)}t.a=a;var r=n(0),o=(n.n(r),n(8)),s=(n.n(o),n(254))},2394:function(e,t,n){"use strict";function a(e){var t=e.name,a=e.items;return r.createElement("div",{className:"system-info-section"},t&&r.createElement("h4",{className:"spacer-bottom"},t),r.createElement("table",{className:"data zebra",id:t},r.createElement("tbody",null,n.i(o.map)(a,function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{className:"thin"},r.createElement("div",{className:"system-info-section-item-name"},t)),r.createElement("td",{style:{wordBreak:"break-all"}},r.createElement(s.a,{name:t,value:e})))}))))}t.a=a;var r=n(0),o=(n.n(r),n(4)),s=(n.n(o),n(2395))},2395:function(e,t,n){"use strict";function a(e){var t=e.name,n=e.value;if(t===m.o||"State"===t)return s.createElement(u.a,{className:"no-margin",health:n});if(n instanceof Array)return s.createElement("code",null,JSON.stringify(n));switch(void 0===n?"undefined":p(n)){case"boolean":return s.createElement(r,{value:n});case"object":return s.createElement(o,{value:n});default:return s.createElement("code",null,n)}}function r(e){return e.value?s.createElement(l.a,null):s.createElement(c.a,null)}function o(e){var t=e.value;return s.createElement("table",{className:"data"},s.createElement("tbody",null,n.i(i.map)(t,function(e,t){return s.createElement("tr",{key:t},s.createElement("td",{className:"thin nowrap"},t),s.createElement("td",null,s.createElement(a,{name:t,value:e})))})))}t.a=a;var s=n(0),i=(n.n(s),n(4)),l=(n.n(i),n(707)),c=n(255),u=n(2245),m=n(2167),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},2396:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(37)),o=n.n(r),s=n(2398),i=n(2),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={upgrading:!1},t.handleCancelClick=function(e){e.preventDefault(),e.stopPropagation(),t.props.onClose()},t}return l(t,e),t.prototype.render=function(){var e=this.state.upgrading,t=this.props.systemUpgrades,r=n.i(i.translate)("system.system_upgrade");return a.createElement(o.a,{isOpen:!0,contentLabel:r,className:"modal",overlayClassName:"modal-overlay",onRequestClose:this.props.onClose},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,r)),a.createElement("div",{className:"modal-body"},t.map(function(e,t){return a.createElement(s.a,{key:e[e.length-1].version,type:0===t?n.i(i.translate)("system.latest_version"):n.i(i.translate)("system.lts_version"),systemUpgrades:e})})),a.createElement("div",{className:"modal-foot"},e&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("a",{className:"pull-left",href:"https://www.sonarqube.org/downloads/",target:"_blank"},n.i(i.translate)("system.see_sonarqube_downloads")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},n.i(i.translate)("cancel"))))},t}(a.PureComponent);t.a=c},2397:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(8)),o=(n.n(r),n(388)),s=n(2),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={showMore:!1},t.toggleIntermediatVersions=function(e){e.preventDefault(),e.stopPropagation(),t.setState(function(e){return{showMore:!e.showMore}})},t}return i(t,e),t.prototype.render=function(){var e=this.state.showMore,t=this.props.upgrades;return t.length<=0?null:a.createElement("div",{className:this.props.className},a.createElement("a",{className:"button-link little-spacer-bottom",href:"#",onClick:this.toggleIntermediatVersions},e?n.i(s.translate)("system.hide_intermediate_versions"):n.i(s.translate)("system.show_intermediate_versions"),a.createElement("i",{className:r("little-spacer-left",{"icon-arrow-down":!e,"icon-arrow-up":e})})),e&&t.map(function(e){return a.createElement("div",{key:e.version,className:"note system-upgrade-intermediate"},a.createElement(o.a,{date:e.releaseDate,long:!0},function(t){return a.createElement("p",null,a.createElement("b",{className:"little-spacer-right"},"SonarQube ",e.version),t,e.changeLogUrl&&a.createElement("a",{className:"spacer-left",href:e.changeLogUrl,target:"_blank"},n.i(s.translate)("system.release_notes")))}),a.createElement("p",{className:"little-spacer-top"},e.description))}))},t}(a.PureComponent);t.a=l},2398:function(e,t,n){"use strict";function a(e){var t=e.type,a=e.systemUpgrades,c=a[0];return r.createElement("div",{className:"system-upgrade-version"},t&&r.createElement("h1",{className:"spacer-bottom"},r.createElement("strong",null,t)),r.createElement("p",null,r.createElement(o.c,{defaultMessage:n.i(l.translate)("system.version_is_availble"),id:"system.version_is_availble",values:{version:r.createElement("b",null,"SonarQube ",c.version)}})),r.createElement("p",{className:"spacer-top"},c.description),r.createElement("div",{className:"big-spacer-top"},r.createElement(s.a,{date:c.releaseDate,long:!0},function(e){return r.createElement("span",null,n.i(l.translateWithParameters)("system.released_x",e))}),c.changeLogUrl&&r.createElement("a",{className:"spacer-left",href:c.changeLogUrl,target:"_blank"},n.i(l.translate)("system.release_notes"))),r.createElement(i.a,{className:"spacer-top",upgrades:a.slice(1)}),r.createElement("div",{className:"big-spacer-top"},r.createElement("a",{className:"button",download:"sonarqube-"+c.version+".zip",href:c.downloadUrl,target:"blank"},n.i(l.translateWithParameters)("system.download_x",c.version)),r.createElement("a",{className:"spacer-left",href:"https://redirect.sonarsource.com/doc/upgrading.html",target:"_blank"},n.i(l.translate)("system.how_to_upgrade"))))}t.a=a;var r=n(0),o=(n.n(r),n(62)),s=n(388),i=n(2397),l=n(2)},2399:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(2396)),o=n(254),s=n(2),i=n(2167),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openSystemUpgradeForm:!1,systemUpgrades:[]},t.fetchSystemUpgrade=function(){return n.i(o.e)().then(function(e){var a=e.upgrades;t.mounted&&t.setState({systemUpgrades:n.i(i.f)(n.i(i.g)(a))})},function(){})},t.handleOpenSystemUpgradeForm=function(){return t.setState({openSystemUpgradeForm:!0})},t.handleCloseSystemUpgradeForm=function(){return t.setState({openSystemUpgradeForm:!1})},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSystemUpgrade()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.state.systemUpgrades;return e.length<=0?null:a.createElement("div",{className:"page-notifs"},a.createElement("div",{className:"alert alert-info"},n.i(s.translate)("system.new_version_available"),a.createElement("button",{className:"spacer-left",onClick:this.handleOpenSystemUpgradeForm},n.i(s.translate)("learn_more"))),this.state.openSystemUpgradeForm&&a.createElement(r.a,{systemUpgrades:e,onClose:this.handleCloseSystemUpgradeForm}))},t}(a.PureComponent);t.a=c},2407:function(e,t,n){"use strict";function a(e){var t=e.className,n=e.size,a=void 0===n?14:n;return r.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:a,height:a},r.createElement("path",{fill:"currentColor",d:"M3.918 11.918l0.711-0.711-1.836-1.836-0.711 0.711v0.836h1v1h0.836zM8.004 4.668q0-0.172-0.172-0.172-0.078 0-0.133 0.055l-4.234 4.234q-0.055 0.055-0.055 0.133 0 0.172 0.172 0.172 0.078 0 0.133-0.055l4.234-4.234q0.055-0.055 0.055-0.133zM7.582 3.168l3.25 3.25-6.5 6.5h-3.25v-3.25zM12.918 3.918q0 0.414-0.289 0.703l-1.297 1.297-3.25-3.25 1.297-1.289q0.281-0.297 0.703-0.297 0.414 0 0.711 0.297l1.836 1.828q0.289 0.305 0.289 0.711z"}))}t.a=a;var r=n(0);n.n(r)},2678:function(e,t,n){t=e.exports=n(27)(void 0),t.push([e.i,".system-info-health-title{margin-top:24px;margin-bottom:16px}.system-info-health-card{margin-bottom:8px;transition:border-color .3s ease}.system-info-health-card:not(.no-hover):hover{border-color:#4b9fd5}.system-info-health-card:not(.no-hover):hover .system-info-health-card-title{color:#4b9fd5}.system-info-health-card .boxed-group-header{cursor:pointer;padding-bottom:15px}.system-info-health-card .boxed-group-header>.alert{display:inline-block;margin-bottom:-6px;margin-top:-6px}.system-info-health-card .boxed-group-inner{padding-top:0}.system-info-health-card-title{font-weight:700}.system-info-health-info{margin-top:-12px}.system-info-health-info .status-indicator{position:relative;top:8px}.system-info-health-info .alert{display:inline-block}.system-info-health-info.no-margin .status-indicator{margin:0}.system-info-section~.system-info-section{margin-top:16px}.system-info-section-item-name{width:25vw;overflow:hidden;text-overflow:ellipsis}.system-upgrade-version{padding:8px}.system-upgrade-version~.system-upgrade-version{margin-top:10px;padding-top:18px;border-top:1px solid #e6e6e6}.system-upgrade-intermediate{padding:6px 10px}",""])},2728:function(e,t,n){var a=n(2678);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(28)(a,r);a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=247.1d89adde.chunk.js.map