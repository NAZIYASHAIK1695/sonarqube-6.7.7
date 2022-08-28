webpackJsonp([252],{2118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),r=n(2336),o=n(11),i=function(e){return{canAdmin:n.i(o.getAppState)(e).canAdmin}};t.default=n.i(a.connect)(i)(r.a)},2178:function(e,t,n){"use strict";function a(e){var t=e.className,n=e.color,a=e.size;return r.createElement("i",{className:o("status-indicator",n,{"small-status-indicator":"small"===a,"big-status-indicator":"big"===a},t)})}t.a=a;var r=n(0),o=(n.n(r),n(8)),i=(n.n(o),n(2191));n.n(i)},2185:function(e,t,n){t=e.exports=n(27)(void 0),t.push([e.i,".status-indicator{display:inline-block;box-sizing:border-box;width:16px;height:16px;border-radius:16px;margin:4px}.status-indicator.small-status-indicator{width:8px;height:8px;border-radius:8px;margin:8px}.status-indicator.big-status-indicator{width:24px;height:24px;border-radius:24px;margin:0}.status-indicator.red{background-color:#d4333f}.status-indicator.yellow{background-color:#eabe06}.status-indicator.green{background-color:#0a0}",""])},2191:function(e,t,n){var a=n(2185);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(28)(a,r);a.locals&&(e.exports=a.locals)},2193:function(e,t,n){"use strict";function a(e){return n.i(i.getJSON)("/api/project_branches/list",{project:e}).then(function(e){return e.branches},s.a)}function r(e,t){return n.i(i.post)("/api/project_branches/delete",{project:e,branch:t}).catch(s.a)}function o(e,t){return n.i(i.post)("/api/project_branches/rename",{project:e,name:t}).catch(s.a)}t.a=a,t.c=r,t.b=o;var i=n(19),s=n(42)},2199:function(e,t,n){"use strict";function a(e){var t=e.branch,a=e.concise,p=void 0!==a&&a;if(n.i(u.a)(t)){if(!t.status)return null;var m=t.status.bugs+t.status.vulnerabilities+t.status.codeSmells,h=m>0?"red":"green";return p?r.createElement("ul",{className:"list-inline branch-status"},r.createElement("li",null,m),r.createElement("li",{className:"spacer-left"},r.createElement(l.a,{color:h,size:"small"}))):r.createElement("ul",{className:"list-inline branch-status"},r.createElement("li",{className:"spacer-right"},r.createElement(l.a,{color:h,size:"small"})),r.createElement("li",null,t.status.bugs,r.createElement(i.a,null)),r.createElement("li",null,t.status.vulnerabilities,r.createElement(c.a,null)),r.createElement("li",null,t.status.codeSmells,r.createElement(s.a,null)))}return t.status?r.createElement(o.a,{level:t.status.qualityGateStatus,small:!0}):null}t.a=a;var r=n(0),o=(n.n(r),n(206)),i=n(112),s=n(113),l=n(2178),c=n(114),u=n(385),p=n(2230);n.n(p)},2229:function(e,t,n){t=e.exports=n(27)(void 0),t.push([e.i,".branch-status{min-width:64px;text-align:right}.branch-status .status-indicator{margin:0}",""])},2230:function(e,t,n){var a=n(2229);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(28)(a,r);a.locals&&(e.exports=a.locals)},2243:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(390)),o=n(2),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),s=function(e){function t(t){var a=e.call(this,t)||this;return a.handleSubmit=function(e){e.preventDefault();var t=a.state.value;t&&(a.setState({submitting:!0}),n.i(r.i)({branch:a.props.branch,component:a.props.project,key:a.props.setting.key,value:t}).then(a.props.onChange,function(){a.mounted&&a.setState({submitting:!1})}))},a.handleValueChange=function(e){a.setState({value:e.currentTarget.value})},a.handleResetClick=function(e){e.preventDefault(),e.currentTarget.blur(),a.setState({submitting:!0}),n.i(r.g)(a.props.setting.key,a.props.project,a.props.branch).then(a.props.onChange,function(){a.mounted&&a.setState({submitting:!1})})},a.handleCancelClick=function(e){e.preventDefault(),a.props.onClose()},a.state={submitting:!1,value:t.setting.value},a}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.setting,t=this.state.submitting||this.state.value===e.value;return a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"big-spacer-bottom markdown",dangerouslySetInnerHTML:{__html:n.i(o.translate)("property."+e.key+".description")}}),a.createElement("div",{className:"big-spacer-bottom"},a.createElement("input",{autoFocus:!0,className:"input-super-large",onChange:this.handleValueChange,required:!0,type:"text",value:this.state.value}),e.inherited&&a.createElement("div",{className:"note spacer-top"},n.i(o.translate)("settings._default")),!e.inherited&&e.parentValue&&a.createElement("div",{className:"note spacer-top"},n.i(o.translateWithParameters)("settings.default_x",e.parentValue)))),a.createElement("footer",{className:"modal-foot"},!e.inherited&&e.parentValue&&a.createElement("button",{className:"pull-left",disabled:this.state.submitting,onClick:this.handleResetClick,type:"reset"},n.i(o.translate)("reset_to_default")),this.state.submitting&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{disabled:t,type:"submit"},n.i(o.translate)("save")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},n.i(o.translate)("cancel"))))},t}(a.PureComponent);t.a=s},2336:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(2337)),o=n(2340),i=n(385),s=n(2),l=n(390),c=n(62),u=n(25),p=n(9),m=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0},t}return m(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchPurgeSetting()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchPurgeSetting=function(){var e=this;this.setState({loading:!0}),n.i(l.d)("sonar.dbcleaner.daysBeforeDeletingInactiveShortLivingBranches").then(function(t){e.mounted&&e.setState({loading:!1,branchLifeTime:t.length>0?t[0].value:void 0})},function(){e.setState({loading:!1})})},t.prototype.renderBranchLifeTime=function(){if(!this.state.branchLifeTime)return null;var e=this.props.canAdmin?"project_branches.page.life_time.admin":"project_branches.page.life_time";return a.createElement("p",{className:"page-description"},a.createElement(c.c,{defaultMessage:n.i(s.translate)(e),id:e,values:{days:n.i(u.formatMeasure)(this.state.branchLifeTime,"INT"),settings:a.createElement(p.Link,{to:"/admin/settings"},n.i(s.translate)("settings.page"))}}))},t.prototype.render=function(){var e=this.props,t=e.branches,l=e.component,c=e.onBranchesChange;return this.state.loading?a.createElement("div",{className:"page page-limited"},a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},n.i(s.translate)("project_branches.page"))),a.createElement("i",{className:"spinner"})):a.createElement("div",{className:"page page-limited"},a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},n.i(s.translate)("project_branches.page")),a.createElement(o.a,{project:l.key}),a.createElement("p",{className:"page-description"},n.i(s.translate)("project_branches.page.description")),this.renderBranchLifeTime()),a.createElement("table",{className:"data zebra zebra-hover"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,n.i(s.translate)("branch")),a.createElement("th",{className:"thin nowrap text-right"},n.i(s.translate)("status")),a.createElement("th",{className:"thin nowrap text-right"},n.i(s.translate)("branches.last_analysis_date")),a.createElement("th",{className:"thin nowrap text-right"},n.i(s.translate)("actions")))),a.createElement("tbody",null,n.i(i.d)(t).map(function(e){return a.createElement(r.a,{branch:e,component:l.key,key:e.name,onChange:c})}))))},t}(a.PureComponent);t.a=h},2337:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(8)),o=(n.n(r),n(2338)),i=n(2339),s=n(2199),l=n(706),c=n(385),u=n(2),p=n(2342),m=n(202),h=n(717),d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={changingLeak:!1,deleting:!1,renaming:!1},t.handleDeleteClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.setState({deleting:!0})},t.handleDeletingStop=function(){t.setState({deleting:!1})},t.handleRenameClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.setState({renaming:!0})},t.handleChange=function(){t.mounted&&(t.setState({deleting:!1,renaming:!1}),t.props.onChange())},t.handleRenamingStop=function(){t.setState({renaming:!1})},t.handleChangeLeakClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.setState({changingLeak:!0})},t.handleChangingLeakStop=function(){t.mounted&&t.setState({changingLeak:!1})},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.branch,d=e.component;return a.createElement("tr",null,a.createElement("td",null,a.createElement(l.a,{branch:t,className:r("little-spacer-right",{"big-spacer-left":n.i(c.a)(t)&&!t.isOrphan})}),t.name,t.isMain&&a.createElement("div",{className:"outline-badge spacer-left"},n.i(u.translate)("branches.main_branch"))),a.createElement("td",{className:"thin nowrap text-right"},a.createElement(s.a,{branch:t})),a.createElement("td",{className:"thin nowrap text-right"},t.analysisDate&&a.createElement(m.a,{date:t.analysisDate})),a.createElement("td",{className:"thin nowrap text-right"},a.createElement("div",{className:"dropdown big-spacer-left"},a.createElement("button",{className:"dropdown-toggle little-spacer-right button-compact","data-toggle":"dropdown"},a.createElement(h.a,{style:{marginTop:4}})," ",a.createElement("i",{className:"icon-dropdown"})),a.createElement("ul",{className:"dropdown-menu dropdown-menu-right"},n.i(c.c)(t)&&a.createElement("li",null,a.createElement("a",{className:"js-change-leak-period link-no-underline",href:"#",onClick:this.handleChangeLeakClick},n.i(u.translate)("branches.set_leak_period"))),t.isMain?a.createElement("li",null,a.createElement("a",{className:"js-rename link-no-underline",href:"#",onClick:this.handleRenameClick},n.i(u.translate)("branches.rename"))):a.createElement("li",null,a.createElement("a",{className:"js-delete link-no-underline",href:"#",onClick:this.handleDeleteClick},n.i(u.translate)("branches.delete")))))),this.state.deleting&&a.createElement(o.a,{branch:t,component:d,onClose:this.handleDeletingStop,onDelete:this.handleChange}),this.state.renaming&&a.createElement(p.a,{branch:t,component:d,onClose:this.handleRenamingStop,onRename:this.handleChange}),this.state.changingLeak&&a.createElement(i.a,{branch:t.name,onClose:this.handleChangingLeakStop,project:d}))},t}(a.PureComponent);t.a=f},2338:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(37)),o=n.n(r),i=n(2193),s=n(2),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!1},t.handleSubmit=function(e){e.preventDefault(),t.setState({loading:!0}),n.i(i.c)(t.props.component,t.props.branch.name).then(function(){t.mounted&&(t.setState({loading:!1}),t.props.onDelete())},function(){t.mounted&&t.setState({loading:!1})})},t.handleCancelClick=function(e){e.preventDefault(),t.props.onClose()},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.branch,t=n.i(s.translate)("branches.delete");return a.createElement(o.a,{isOpen:!0,contentLabel:t,className:"modal",overlayClassName:"modal-overlay",onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},n.i(s.translateWithParameters)("branches.delete.are_you_sure",e.name)),a.createElement("footer",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{className:"button-red",disabled:this.state.loading,type:"submit"},n.i(s.translate)("delete")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},n.i(s.translate)("cancel")))))},t}(a.PureComponent);t.a=c},2339:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(37)),o=n.n(r),i=n(2243),s=n(2),l=n(390),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0,submitting:!1},t.handleCancelClick=function(e){e.preventDefault(),t.props.onClose()},t}return c(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSetting()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchSetting=function(){var e=this;this.setState({loading:!0}),n.i(l.d)("sonar.leak.period",this.props.project,this.props.branch).then(function(t){e.mounted&&e.setState({loading:!1,setting:t[0]})},function(){e.mounted&&e.setState({loading:!1})})},t.prototype.render=function(){var e=this.state.setting,t=n.i(s.translate)("branches.set_leak_period");return a.createElement(o.a,{isOpen:!0,contentLabel:t,className:"modal",overlayClassName:"modal-overlay",onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,t)),this.state.loading&&a.createElement("div",{className:"modal-body"},a.createElement("i",{className:"spinner"})),e&&a.createElement(i.a,{branch:this.props.branch,onChange:this.props.onClose,onClose:this.props.onClose,project:this.props.project,setting:e}))},t}(a.PureComponent);t.a=u},2340:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(2341)),o=n(390),i=n(713),s=n(2),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={formOpen:!1},t.closeForm=function(){t.mounted&&t.setState({formOpen:!1})},t.handleChangeClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.setState({formOpen:!0})},t.handleChange=function(){t.mounted&&t.fetchSetting().then(t.closeForm,t.closeForm)},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSetting()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchSetting=function(){var e=this;return n.i(o.d)("sonar.branch.longLivedBranches.regex",this.props.project).then(function(t){e.mounted&&e.setState({setting:t[0]})},function(){})},t.prototype.render=function(){var e=this.state.setting;return e?a.createElement("div",{className:"pull-right text-right"},n.i(s.translate)("branches.long_living_branches_pattern"),": ",a.createElement("strong",null,e.value),a.createElement("a",{className:"display-inline-block spacer-left link-no-underline",href:"#",onClick:this.handleChangeClick},a.createElement(i.a,null)),this.state.formOpen&&a.createElement(r.a,{onClose:this.closeForm,onChange:this.handleChange,project:this.props.project,setting:e})):null},t}(a.PureComponent);t.a=c},2341:function(e,t,n){"use strict";function a(e){var t=n.i(l.translate)("branches.detection_of_long_living_branches");return r.createElement(i.a,{isOpen:!0,contentLabel:t,className:"modal",overlayClassName:"modal-overlay",onRequestClose:e.onClose},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,t)),r.createElement(s.a,c({},e)))}t.a=a;var r=n(0),o=(n.n(r),n(37)),i=n.n(o),s=n(2243),l=n(2),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}},2342:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(37)),o=n.n(r),i=n(2193),s=n(2),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!1},t.handleSubmit=function(e){e.preventDefault(),t.state.name&&(t.setState({loading:!0}),n.i(i.b)(t.props.component,t.state.name).then(function(){t.mounted&&(t.setState({loading:!1}),t.props.onRename())},function(){t.mounted&&t.setState({loading:!1})}))},t.handleCancelClick=function(e){e.preventDefault(),t.props.onClose()},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.branch,t=n.i(s.translate)("branches.rename"),r=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(o.a,{isOpen:!0,contentLabel:t,className:"modal",overlayClassName:"modal-overlay",onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"rename-branch-name"},n.i(s.translate)("new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"rename-branch-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:void 0!=this.state.name?this.state.name:e.name}))),a.createElement("footer",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{disabled:r,type:"submit"},n.i(s.translate)("rename")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},n.i(s.translate)("cancel")))))},t}(a.PureComponent);t.a=c}});
//# sourceMappingURL=252.064e686c.chunk.js.map