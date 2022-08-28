webpackJsonp([268],{2112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=(n.n(a),n(30)),c=n.n(r),o=n(2279),l=n(47),i=n(2),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0,page:1,query:""},t.loadMore=function(){return t.loadProjects(t.state.page+1)},t.search=function(e){return t.loadProjects(1,e)},t}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadProjects()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.loadProjects=function(e,t){var a=this;void 0===e&&(e=this.state.page),void 0===t&&(t=this.state.query),this.setState({loading:!0});var r={ps:100};return e>1&&(r.p=e),t&&(r.q=t),n.i(l.x)(r).then(function(n){var r=e>1?(a.state.projects||[]).concat(n.projects):n.projects;a.setState({projects:r,query:t,loading:!1,page:n.paging.pageIndex,total:n.paging.total})})},t.prototype.render=function(){var e=a.createElement(c.a,{title:n.i(i.translate)("my_account.projects")});return null==this.state.projects?a.createElement("div",{className:"text-center"},e,a.createElement("i",{className:"spinner spinner-margin"})):a.createElement("div",{className:"account-body account-container"},e,a.createElement(o.a,{projects:this.state.projects,total:this.state.total,loading:this.state.loading,loadMore:this.loadMore,search:this.search}))},t}(a.PureComponent);t.default=u},2221:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),l=n.n(o),i=n(397),s=n(726),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=l.a.createElement(s.a,null),m=l.a.createElement("i",{className:"icon-color-link icon-detach"}),d=function(e){function t(){var e,n,c,o;a(this,t);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return n=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),c.state={expanded:!1},c.handleClick=function(e){e.preventDefault(),e.target.blur(),c.setState(function(e){return{expanded:!e.expanded}})},o=n,r(c,o)}return c(t,e),u(t,[{key:"renderLinkIcon",value:function(e){return"issue"===e.type?p:n.i(i.b)(e)?l.a.createElement("i",{className:"icon-color-link icon-"+e.type}):m}},{key:"render",value:function(){var e=this.props,t=e.iconOnly,a=e.link;return l.a.createElement("li",null,l.a.createElement("a",{className:"link-with-icon",href:a.url,target:"_blank",onClick:!n.i(i.c)(a)&&this.handleClick,title:a.name},this.renderLinkIcon(a),!t&&" "+a.name),this.state.expanded&&l.a.createElement("div",{className:"little-spacer-top"},l.a.createElement("input",{type:"text",className:"overview-key",value:a.url,readOnly:!0,onClick:function(e){return e.target.select()}})))}}]),t}(l.a.PureComponent);t.a=d},2278:function(e,t,n){"use strict";function a(e){var t=e.project,a=null!=t.lastAnalysisDate,d=t.links,f=n.i(p.a)(d.map(function(e,t){var n=e.href;return{id:"link-"+t,name:e.name,type:e.type,url:n}}));return r.createElement("div",{className:"account-project-card clearfix"},r.createElement("aside",{className:"account-project-side"},a?r.createElement(s.a,{overlay:r.createElement(l.a,{date:t.lastAnalysisDate}),placement:"right"},r.createElement("div",{className:"account-project-analysis"},r.createElement(o.a,{date:t.lastAnalysisDate},function(e){return r.createElement("span",null,n.i(m.translateWithParameters)("my_account.projects.analyzed_x",e))}))):r.createElement("div",{className:"account-project-analysis"},n.i(m.translate)("my_account.projects.never_analyzed")),null!=t.qualityGate&&r.createElement("div",{className:"account-project-quality-gate"},r.createElement(i.a,{level:t.qualityGate}))),r.createElement("h3",{className:"account-project-name"},r.createElement(c.Link,{to:{pathname:"/dashboard",query:{id:t.key}}},t.name)),d.length>0&&r.createElement("div",{className:"account-project-links"},r.createElement("ul",{className:"list-inline"},f.map(function(e){return r.createElement(u.a,{iconOnly:!0,key:e.id,link:e})}))),r.createElement("div",{className:"account-project-key"},t.key),!!t.description&&r.createElement("div",{className:"account-project-description"},t.description))}t.a=a;var r=n(0),c=(n.n(r),n(9)),o=n(202),l=n(111),i=n(206),s=n(24),u=n(2221),p=n(397),m=n(2)},2279:function(e,t,n){"use strict";function a(e){var t=e.projects;return r.createElement("div",{id:"account-projects"},0===t.length?r.createElement("div",{className:"js-no-results"},n.i(l.translate)("my_account.projects.no_results")):r.createElement("p",null,n.i(l.translate)("my_account.projects.description")),t.length>0&&r.createElement("ul",{className:"account-projects-list"},t.map(function(e){return r.createElement("li",{key:e.key},r.createElement(c.a,{project:e}))})),t.length>0&&r.createElement(o.a,{count:t.length,total:e.total||0,ready:!e.loading,loadMore:e.loadMore}))}t.a=a;var r=n(0),c=(n.n(r),n(2278)),o=n(207),l=n(2)}});
//# sourceMappingURL=268.98f65e61.chunk.js.map