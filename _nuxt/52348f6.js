(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{474:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(31),{components:{Valine:n(141).default},name:"Portfolio",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("widget/Portfolio",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"千叶麻衣 Blog | 作品集"}},methods:{ArticleMethodDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdui-container-fluid",attrs:{id:"body"}},[n("div",{staticClass:"article-method"},[n("div",{staticClass:"mdui-card mdui-hoverable"},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),n("div",{staticClass:"mdui-card mdui-hoverable vcomments"},[n("Valine")],1)]),t._v(" "),n("FloatingMenu")],1)}),[],!1,null,"babdedac",null);e.default=component.exports;installComponents(component,{FloatingMenu:n(140).default})}}]);