(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{462:function(e,t,n){},473:function(e,t,n){"use strict";n(462)},501:function(e,t,n){"use strict";n.r(t);n(17),n(51);var o=n(40),r=n.n(o),c={data:function(){return{name:"",password:""}},loaded:function(){},mounted:function(){},methods:{submit:function(){var e=this;this.name&&this.password?r.a.post("/user/UserQuery",{name:this.name,password:this.password,status:1}).then((function(t){var n=t.data.status;200===t.data.code?(e.$Notice.success({title:"登录成功",duration:1.5}),Cookies.remove("login"),Cookies.set("id",t.data.id,{expires:365,path:"/"}),e.$router.push({path:"/"}),setTimeout((function(){Cookies.set("login",n,{expires:365,path:"/"}),location.reload()}),1e3)):400===t.data.code&&e.$Notice.error({title:"用户名或者密码错误",duration:1.5})})).catch((function(e){console.log(e)})):this.$Notice.error({title:"用户名或密码不能为空",duration:1.5})},UserQuery:function(){alert(1)},PwaQuery:function(){console.log("2")}}},l=(n(473),n(2)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdui-container-fluid vcomments input"},[n("h1",[e._v("登入账户")]),e._v(" "),n("Input",{attrs:{type:"text",placeholder:"please enter user name",size:"large",autofocus:""},on:{blur:function(t){return t.preventDefault(),e.UserQuery(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("Input",{attrs:{type:"password",placeholder:"Please enter the password",size:"large"},on:{blur:function(t){return t.preventDefault(),e.PwaQuery(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("Button",{attrs:{type:"success",long:"",size:"large"},on:{click:function(t){return e.submit()}}},[e._v("Log In")])],1)}),[],!1,null,"1db6f363",null);t.default=component.exports}}]);