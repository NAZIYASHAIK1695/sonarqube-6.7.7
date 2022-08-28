webpackJsonp([249],{2116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=(n.n(a),n(30)),s=n.n(i),o=n(2514),r=n(2),l=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.componentDidMount=function(){n.i(o.a)(this.refs.container)},e.prototype.render=function(){return a.createElement("div",null,a.createElement(s.a,{title:n.i(r.translate)("custom_metrics.page")}),a.createElement("div",{ref:"container"}))},e}(a.PureComponent);e.default=c},2201:function(t,e,n){"use strict";var a=n(4),i=(n.n(a),n(20)),s=n.n(i);e.a=s.a.Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/metrics"},sync:function(t,e,i){var o=i||{};return"create"===t&&n.i(a.defaults)(o,{url:this.urlRoot()+"/create",type:"POST",data:n.i(a.pick)(e.toJSON(),"key","name","description","domain","type")}),"update"===t&&n.i(a.defaults)(o,{url:this.urlRoot()+"/update",type:"POST",data:n.i(a.pick)(e.toJSON(),"id","key","name","description","domain","type")}),"delete"===t&&n.i(a.defaults)(o,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),s.a.ajax(o)}})},2220:function(t,e,n){"use strict";var a=n(20),i=n.n(a),s=n(2201);e.a=i.a.Collection.extend({model:s.a,url:function(){return window.baseUrl+"/api/metrics/search"},parse:function(t){return this.total=t.total,this.p=t.p,this.ps=t.ps,t.metrics},fetch:function(t){var e=Object.assign({data:{}},t);return this.q=e.data.q,e.data.isCustom=!0,i.a.Collection.prototype.fetch.call(this,e)},fetchMore:function(){var t=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:t,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})},2258:function(t,e,n){"use strict";var a=n(15),i=n.n(a),s=n(69),o=n.n(s),r=n(44),l=n(2690),c=n.n(l);e.a=r.a.extend({template:c.a,onRender:function(){var t=this;r.a.prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-metric-domain").select2({width:"250px",createSearchChoice:function(t){return{id:t,text:"+"+t}},createSearchChoicePosition:"top",initSelection:function(t,e){var n=i()(t).val();e({id:n,text:n})},query:function(e){var n=t.options.domains.filter(function(t){return-1!==t.toLowerCase().indexOf(e.term.toLowerCase())}),a=n.map(function(t){return{id:t,text:t}});e.callback({results:a,more:!1})},escapeMarkup:o.a,formatResult:function(t){return t.text}}).select2("val",this.model&&this.model.get("domain")),this.$("#create-metric-type").select2({width:"250px"})},onDestroy:function(){r.a.prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){r.a.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},serializeData:function(){return Object.assign({},r.a.prototype.serializeData.apply(this,arguments),{domains:this.options.domains,types:this.options.types})}})},2511:function(t,e,n){"use strict";var a=n(2201),i=n(2258);e.a=i.a.extend({sendRequest:function(){var t=this,e=new a.a({key:this.$("#create-metric-key").val(),name:this.$("#create-metric-name").val(),description:this.$("#create-metric-description").val(),domain:this.$("#create-metric-domain").val(),type:this.$("#create-metric-type").val()});return this.disableForm(),e.save(null,{statusCode:{400:null}}).done(function(){t.collection.refresh(),-1===t.options.domains.indexOf(e.get("domain"))&&t.options.domains.push(e.get("domain")),t.destroy()}).fail(function(e){t.showErrors(e.responseJSON.errors,e.responseJSON.warnings),t.enableForm()})}})},2512:function(t,e,n){"use strict";var a=n(44),i=n(2689),s=n.n(i);e.a=a.a.extend({template:s.a,onFormSubmit:function(){a.a.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var t=this,e=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){e.refresh(),t.destroy()}).fail(function(e){t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})},2513:function(t,e,n){"use strict";var a=n(14),i=n.n(a),s=n(2511),o=n(2691),r=n.n(o);e.a=i.a.ItemView.extend({template:r.a,events:{"click #metrics-create":"onCreateClick"},onCreateClick:function(t){t.preventDefault(),this.createMetric()},createMetric:function(){new s.a({collection:this.collection,domains:this.options.domains,types:this.options.types,app:this.options.app}).render()}})},2514:function(t,e,n){"use strict";var a=n(14),i=n.n(a),s=n(2515),o=n(2220),r=n(2513),l=n(2518),c=n(2516),d=n(395),u=function(){function t(t,e){var n=[],a=!0,i=!1,s=void 0;try{for(var o,r=t[Symbol.iterator]();!(a=(o=r.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){i=!0,s=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=new i.a.Application,p=function(t){this.layout=new s.a({el:t}),this.layout.render(),this.metrics=new o.a,this.headerView=new r.a({collection:this.metrics,domains:this.domains,types:this.types,app:m}),this.layout.headerRegion.show(this.headerView),this.listView=new l.a({collection:this.metrics,domains:this.domains,types:this.types}),this.layout.listRegion.show(this.listView),this.listFooterView=new c.a({collection:this.metrics}),this.layout.listFooterRegion.show(this.listFooterView),this.metrics.fetch()};m.on("start",function(t){Promise.all([n.i(d.b)(),n.i(d.c)()]).then(function(e){var n=u(e,2),a=n[0],i=n[1];m.domains=a,m.types=i,p.call(m,t)},function(){})}),e.a=function(t){m.start(t)}},2515:function(t,e,n){"use strict";var a=n(14),i=n.n(a),s=n(2692),o=n.n(s);e.a=i.a.LayoutView.extend({template:o.a,regions:{headerRegion:"#metrics-header",listRegion:"#metrics-list",listFooterRegion:"#metrics-list-footer"}})},2516:function(t,e,n){"use strict";var a=n(14),i=n.n(a),s=n(2693),o=n.n(s);e.a=i.a.ItemView.extend({template:o.a,collectionEvents:{all:"render"},events:{"click #metrics-fetch-more":"onMoreClick"},onMoreClick:function(t){t.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return Object.assign({},i.a.ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})},2517:function(t,e,n){"use strict";var a=n(14),i=n.n(a),s=n(2519),o=n(2512),r=n(2694),l=n.n(r);e.a=i.a.ItemView.extend({tagName:"li",className:"panel panel-vertical",template:l.a,events:{"click .js-metric-update":"onUpdateClick","click .js-metric-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id).attr("data-key",this.model.get("key")),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(t){t.preventDefault(),this.updateMetric()},onDeleteClick:function(t){t.preventDefault(),this.deleteMetric()},updateMetric:function(){new s.a({model:this.model,collection:this.model.collection,types:this.options.types,domains:this.options.domains}).render()},deleteMetric:function(){new o.a({model:this.model}).render()}})},2518:function(t,e,n){"use strict";var a=n(14),i=n.n(a),s=n(2517);e.a=i.a.CollectionView.extend({tagName:"ul",childView:s.a,childViewOptions:function(){return{types:this.options.types,domains:this.options.domains}}})},2519:function(t,e,n){"use strict";var a=n(2258);e.a=a.a.extend({sendRequest:function(){var t=this;return this.model.set({key:this.$("#create-metric-key").val(),name:this.$("#create-metric-name").val(),description:this.$("#create-metric-description").val(),domain:this.$("#create-metric-domain").val(),type:this.$("#create-metric-type").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){t.collection.refresh(),t.destroy()}).fail(function(e){t.enableForm(),t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})},2689:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var i=n(5);t.exports=(i.default||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,i,s){var o=this.escapeExpression;return'<form id="delete-metric-form">\n  <div class="modal-head">\n    <h2>'+o(a(n(1)).call(t,"custom_metrics.delete_metric",{name:"t",hash:{},data:s}))+'</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    '+o(a(n(43)).call(t,"custom_metrics.delete_metric.confirmation",null!=t?t.name:t,{name:"tp",hash:{},data:s}))+'\n  </div>\n  <div class="modal-foot">\n    <button id="delete-metric-submit" class="button-red">'+o(a(n(1)).call(t,"delete",{name:"t",hash:{},data:s}))+'</button>\n    <a href="#" class="js-modal-close" id="delete-metric-cancel">'+o(a(n(1)).call(t,"cancel",{name:"t",hash:{},data:s}))+"</a>\n  </div>\n</form>\n"},useData:!0})},2690:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var i=n(5);t.exports=(i.default||i).template({1:function(t,e,i,s){return(0,this.escapeExpression)(a(n(1)).call(t,"custom_metrics.update_metric",{name:"t",hash:{},data:s}))},3:function(t,e,i,s){return(0,this.escapeExpression)(a(n(1)).call(t,"custom_metrics.create_metric",{name:"t",hash:{},data:s}))},5:function(t,e,i,s,o){var r,l=this.lambda,c=this.escapeExpression,d='          <option value="'+c(l(t,t))+'" ';return r=a(n(12)).call(t,t,null!=o[1]?o[1].type:o[1],{name:"eq",hash:{},fn:this.program(6,s,o),inverse:this.noop,data:s}),null!=r&&(d+=r),d+">"+c(a(n(1)).call(t,"metric.type",t,{name:"t",hash:{},data:s}))+"</option>\n"},6:function(t,e,n,a){return"selected"},8:function(t,e,i,s){return(0,this.escapeExpression)(a(n(1)).call(t,"update_verb",{name:"t",hash:{},data:s}))},10:function(t,e,i,s){return(0,this.escapeExpression)(a(n(1)).call(t,"create",{name:"t",hash:{},data:s}))},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,i,s,o){var r,l=this.escapeExpression,c=this.lambda,d='<form id="create-metric-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return r=e.if.call(t,null!=t?t.id:t,{name:"if",hash:{},fn:this.program(1,s,o),inverse:this.program(3,s,o),data:s}),null!=r&&(d+=r),d+='</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="create-metric-key">'+l(a(n(1)).call(t,"key",{name:"t",hash:{},data:s}))+'<em class="mandatory">*</em></label>\n      <input id="create-metric-key" name="key" type="text" maxlength="64" required value="'+l(c(null!=t?t.key:t,t))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-name">'+l(a(n(1)).call(t,"name",{name:"t",hash:{},data:s}))+'<em class="mandatory">*</em></label>\n      <input id="create-metric-name" name="name" type="text" maxlength="64" required value="'+l(c(null!=t?t.name:t,t))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-description">'+l(a(n(1)).call(t,"description",{name:"t",hash:{},data:s}))+'</label>\n      <textarea id="create-metric-description" maxlength="255" name="description">'+l(c(null!=t?t.description:t,t))+'</textarea>\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-domain">'+l(a(n(1)).call(t,"custom_metrics.domain",{name:"t",hash:{},data:s}))+'</label>\n      <input id="create-metric-domain" name="domain" type="text" maxlength="200" value="'+l(c(null!=t?t.domain:t,t))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-type">'+l(a(n(1)).call(t,"type",{name:"t",hash:{},data:s}))+'<em class="mandatory">*</em></label>\n      <select id="create-metric-type" name="type">\n',r=e.each.call(t,null!=t?t.types:t,{name:"each",hash:{},fn:this.program(5,s,o),inverse:this.noop,data:s}),null!=r&&(d+=r),d+='      </select>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-metric-submit">',r=e.if.call(t,null!=t?t.id:t,{name:"if",hash:{},fn:this.program(8,s,o),inverse:this.program(10,s,o),data:s}),null!=r&&(d+=r),d+'</button>\n    <a href="#" class="js-modal-close" id="create-metric-cancel">'+l(a(n(1)).call(t,"cancel",{name:"t",hash:{},data:s}))+"</a>\n  </div>\n</form>\n"},useData:!0,useDepths:!0})},2691:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var i=n(5);t.exports=(i.default||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,i,s){var o=this.escapeExpression;return'<header class="page-header">\n  <h1 class="page-title">'+o(a(n(1)).call(t,"custom_metrics.page",{name:"t",hash:{},data:s}))+'</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="metrics-create">'+o(a(n(1)).call(t,"custom_metrics.create_metric",{name:"t",hash:{},data:s}))+'</button>\n    </div>\n  </div>\n  <p class="page-description">'+o(a(n(1)).call(t,"custom_metrics.page.description",{name:"t",hash:{},data:s}))+"</p>\n</header>\n"},useData:!0})},2692:function(t,e,n){var a=n(5);t.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){return'<div class="page page-limited">\n  <div id="metrics-header"></div>\n  <div id="metrics-list"></div>\n  <div id="metrics-list-footer"></div>\n</div>\n'},useData:!0})},2693:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var i=n(5);t.exports=(i.default||i).template({1:function(t,e,i,s){return'    <a id="metrics-fetch-more" class="spacer-left" href="#">'+(0,this.escapeExpression)(a(n(1)).call(t,"show_more",{name:"t",hash:{},data:s}))+"</a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,i,s){var o,r=this.escapeExpression,l='<footer class="spacer-top note text-center">\n  '+r(a(n(43)).call(t,"x_of_y_shown",null!=t?t.count:t,null!=t?t.total:t,{name:"tp",hash:{},data:s}))+"\n";return o=e.if.call(t,null!=t?t.more:t,{name:"if",hash:{},fn:this.program(1,s),inverse:this.noop,data:s}),null!=o&&(l+=o),l+"</footer>\n"},useData:!0})},2694:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var i=n(5);t.exports=(i.default||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,i,s){var o=this.escapeExpression,r=this.lambda;return'<div class="pull-right big-spacer-left nowrap">\n  <a class="js-metric-update icon-edit" title="'+o(a(n(1)).call(t,"update_verb",{name:"t",hash:{},data:s}))+'" data-toggle="tooltip" href="#"></a>\n  <a class="js-metric-delete icon-delete" title="'+o(a(n(1)).call(t,"delete",{name:"t",hash:{},data:s}))+'" data-toggle="tooltip" href="#"></a>\n</div>\n\n<div class="display-inline-block text-top width-30">\n  <div>\n    <strong class="js-metric-name text-limited">'+o(r(null!=t?t.name:t,t))+'</strong>\n    <span class="js-metric-key note little-spacer-left text-limited">'+o(r(null!=t?t.key:t,t))+'</span>\n  </div>\n</div>\n\n<div class="display-inline-block text-top width-20 text-ellipsis">\n  <span class="js-metric-domain">'+o(r(null!=t?t.domain:t,t))+'</span>\n</div>\n\n<div class="display-inline-block text-top width-20 text-ellipsis">\n  <span class="js-metric-type">'+o(a(n(1)).call(t,"metric.type",null!=t?t.type:t,{name:"t",hash:{},data:s}))+'</span>\n</div>\n\n<div class="display-inline-block text-top width-20 text-ellipsis" title="'+o(r(null!=t?t.description:t,t))+'">\n  <span class="js-metric-description">'+o(r(null!=t?t.description:t,t))+"</span>\n</div>\n"},useData:!0})}});
//# sourceMappingURL=249.451747fe.chunk.js.map