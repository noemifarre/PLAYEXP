"use strict";(self["webpackChunkplayexp"]=self["webpackChunkplayexp"]||[]).push([[772],{7759:function(t,a,r){r.r(a),r.d(a,{default:function(){return g}});var o=function(){var t=this,a=t._self._c;return a("div",[a("h1",{staticClass:"pb-2"},[a("icons",{attrs:{icon:["fas","award"]}}),t._v(" Programación "),a("icons",{attrs:{icon:["fas","award"]}})],1),a("p",[t._v(" *Próximamente más eventos en camino* ")]),a("div",{staticClass:"container-md"},[a("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return a("div",{key:t.id,attrs:{columns:""}},[a("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])},e=[],s=function(){var t=this,a=t._self._c;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[a("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Guárdalo en tu calendario",variant:"info",href:t.url}},[t._v("Recuérdamelo")])],1)],1)},i=[],n={props:["id","autor","titulo","srcimg","alt","texto","url"]},c=n,l=r(1001),u=(0,l.Z)(c,s,i,!1,null,"b4f6c0ca",null),p=u.exports;const m="https://raw.githubusercontent.com/noemifarre/playexp/main/proyectosWD2021.json";var d={props:{name:{type:String,default:"ListaProyectos"}},components:{Card2:p},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(m),a=await t.json();this.proyectos=a,console.log(a)}}},f=d,h=(0,l.Z)(f,o,e,!1,null,null,null),g=h.exports}}]);
//# sourceMappingURL=Programacion.2e434b30.js.map