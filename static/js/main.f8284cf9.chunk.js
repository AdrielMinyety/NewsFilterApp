(window.webpackJsonpnoticias=window.webpackJsonpnoticias||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),i=a(6),l=a.n(i),s=a(11),m=a(1),u=a(2),p=a(4),d=a(3),h=a(5),v=a(12),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={pais:"",categoria:""},a.actualizarState=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value),(function(){a.props.consultarApi(a.state.pais,a.state.categoria)}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"col"},c.a.createElement("select",{className:"custom-select font-weight-bold",onChange:this.actualizarState,name:"categoria"},c.a.createElement("option",null,"Tipos de noticias:"),c.a.createElement("option",{value:"business"},"Negocios"),c.a.createElement("option",{value:"entertainment"},"Entretenimiento"),c.a.createElement("option",{value:"sports"},"Deportes"),c.a.createElement("option",{value:"health"},"Salud"),c.a.createElement("option",{value:"science"},"Ciencia"),c.a.createElement("option",{value:"technology"},"Tecnologia"),c.a.createElement("option",{value:"general"},"General"))),c.a.createElement("div",{className:"col"},c.a.createElement("select",{className:"custom-select font-weight-bold",onChange:this.actualizarState,name:"pais"},c.a.createElement("option",null,"De:"),c.a.createElement("option",{value:"us"},"Estados Unidos"),c.a.createElement("option",{value:"ve"},"Venezuela"),c.a.createElement("option",{value:"mx"},"M\xe9xico")))))}}]),t}(n.Component),f=function(e){var t=e.noticia,a=t.urlToImage,n=t.url,o=t.title,r=t.description,i=a?c.a.createElement("img",{src:a,alt:"Imagen",className:"card-img-top",style:{maxHeight:"200px"}}):null;return c.a.createElement("div",{className:"card shadow"},i,c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"font-weight-bold"},o),c.a.createElement("p",null,r)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("a",{className:"btn btn-info btn-block",href:n,target:"_blank",rel:"noopener noreferrer"},"Ver m\xe1s")))},g=a(13),b=a.n(g),w=function(e){var t=e.noticias;return c.a.createElement("div",{className:"card-columns"},t.map((function(e){return c.a.createElement(f,{key:b()(),noticia:e})})))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={noticias:[]},a.consultarApi=Object(s.a)(l.a.mark((function e(){var t,n,c,o,r,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"us",n=i.length>1&&void 0!==i[1]?i[1]:"science",c="https://newsapi.org/v2/top-headlines?country=".concat(t,"&category=").concat(n,"&apiKey=72233c3581624dc98f9862d77969b1e4"),e.next=5,fetch(c);case 5:return o=e.sent,e.next=8,o.json();case 8:r=e.sent,a.setState({noticias:r.articles});case 10:case"end":return e.stop()}}),e)}))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.consultarApi()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App py-5"},c.a.createElement("header",{className:"fixed-top p-3 mx-3 rounded-bottom shadow"},c.a.createElement("h3",{className:"text-center text-white"},"News Filter App")),c.a.createElement("div",{className:"container-fluid my-5 py-4"},c.a.createElement(w,{noticias:this.state.noticias})),c.a.createElement("div",{className:"footer fixed-bottom p-3 mx-3 shadow rounded-top"},c.a.createElement(E,{consultarApi:this.consultarApi})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.f8284cf9.chunk.js.map