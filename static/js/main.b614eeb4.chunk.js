(this.webpackJsonpkasa=this.webpackJsonpkasa||[]).push([[0],{33:function(t,e,s){},34:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(17),i=s.n(c),r=s(2),o=s(3),u=s(5),j=s(4),l=s(11),b=s(0),h=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={data:[]},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("data.json").then((function(t){return t.json()})).then((function(e){t.setState({data:e})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"Adds",children:this.state.data.map((function(t){return Object(b.jsx)(l.b,{to:{pathname:"/housing",search:"?id=".concat(t.id)},children:Object(b.jsxs)("article",{children:[Object(b.jsx)("h2",{children:t.title}),Object(b.jsx)("img",{src:t.cover,alt:"house"}),Object(b.jsx)("span",{})]})},t.id)}))})}}]),s}(n.Component),d=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Banner",children:[Object(b.jsx)("p",{children:"Chez vous, partout et ailleurs"}),Object(b.jsx)("img",{src:"../img/banner.jpg",alt:"banner"})]})}}]),s}(n.Component),p=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("footer",{className:"Footer",children:[Object(b.jsx)("img",{src:"../img/logo_footer.svg",alt:"logo"}),Object(b.jsx)("p",{children:"\xa9 2020 Kasa. All rights reserved"})]})}}]),s}(n.Component),O=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Logo",children:Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)("img",{src:"../img/kasa.svg",alt:"Logo"})})})}}]),s}(n.Component),m=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Navigation",children:[Object(b.jsx)(l.c,{exact:!0,to:"/",activeClassName:"nav-active",children:"Accueil"}),Object(b.jsx)(l.c,{exact:!0,to:"/about",activeClassName:"nav-active",children:"A propos"})]})}}]),s}(n.Component),x=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Header",children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{})]})}}]),s}(n.Component),v=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsx)(x,{}),Object(b.jsx)(d,{}),Object(b.jsx)(h,{}),Object(b.jsx)(p,{})]})}}]),s}(n.Component),f=s(6),g=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Error",children:[Object(b.jsx)(x,{}),Object(b.jsx)("h1",{children:"404"}),Object(b.jsxs)("p",{children:["Oups! La page que vous demandez n","'existe pas"]}),Object(b.jsxs)(l.b,{to:"/",className:"homeLink",children:["Retouner sur la page ","d'accueil"]})]})}}]),s}(n.Component),N=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={show:!1,classlist:!1},n}return Object(o.a)(s,[{key:"onToggle",value:function(){this.setState({show:!this.state.show,classlist:!this.state.classlist})}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"Accordion",children:Object(b.jsxs)("aside",{className:"description",children:[Object(b.jsxs)("div",{className:"titleSection",children:[Object(b.jsx)("h3",{children:this.props.title}),Object(b.jsx)("button",{type:"button",className:this.state.classlist?"buttonShow":"buttonHide",onClick:function(){return t.onToggle()}})]}),this.state.show?Object(b.jsx)("div",{className:this.props.classname,children:this.props.text}):null]})})}}]),s}(n.Component),y=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"About",children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"Banner",children:Object(b.jsx)("img",{src:"../img/banner_about.jpg",alt:"banner"})}),Object(b.jsx)(N,{title:"Fiabilit\xe9",text:"Les annonces post\xe9es sur Kasa garantissent une fiabilit\xe9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xe9guli\xe8rement v\xe9rifi\xe9es  par nos \xe9quipes.",classname:"textDescription"}),Object(b.jsx)(N,{title:"Respect",text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xeenera une exclusion de notre plateforme.",classname:"textDescription"}),Object(b.jsx)(N,{title:"Service",text:"Nos \xe9quipes se tiennent \xe0 votre disposition pour vous fournir une exp\xe9rience parfaite. N'\xe9sitez pas \xe0 nous contacter si vous avez la moindre question.",classname:"textDescription"}),Object(b.jsx)(N,{title:"S\xe9curit\xe9",text:"La s\xe9curit\xe9 est la priorit\xe9 de Kasa. Aussi bien pour nos h\xf4tes que pour les voyageurs, chaque logement correspond aux crit\xe8res de s\xe9curit\xe9 \xe9tablis par nos services. En laissant une note aussi bien \xe0 l'h\xf4te qu'au locataire, cela permet \xe0 nos \xe9quipes de v\xe9rifier que les standards sont bien respect\xe9s. Nous organisons \xe9galement des ateliers sur la s\xe9curit\xe9 domestique pour nos h\xf4tes.",classname:"textDescription"}),Object(b.jsx)(p,{})]})}}]),s}(n.Component),k=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={count:0},n}return Object(o.a)(s,[{key:"nextImage",value:function(){this.state.count===this.props.length-1?this.setState({count:0}):this.setState({count:this.state.count+1})}},{key:"previousImage",value:function(){0===this.state.count?this.setState({count:this.props.length-1}):this.setState({count:this.state.count-1})}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"Gallery",children:[this.props.length>1&&Object(b.jsx)("button",{type:"button",className:"nextMedia",onClick:function(){return t.nextImage()}}),this.props.length>1&&Object(b.jsx)("button",{type:"button",className:"previousMedia",onClick:function(){return t.previousImage()}}),Object(b.jsx)("div",{className:"containerImage",children:this.props.data.pictures.map((function(e,s){return s===t.state.count&&Object(b.jsx)("img",{src:e,alt:""},s)}))})]})}}]),s}(n.Component),C=s.p+"static/media/red_star.436cdaa5.svg",q=s.p+"static/media/white_star.6870d270.svg",w=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={id:"",title:"",cover:"",pictures:[],description:"",host:{},rating:"",location:"",equipments:[],tags:[]},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;window.scrollTo(0,0),fetch("../data.json").then((function(t){return t.json()})).then((function(e){var s=window.location.search,n=new URLSearchParams(s).get("id"),a=e.find((function(t){return t.id===n}));t.setState({id:a.id,title:a.title,cover:a.cover,pictures:a.pictures,description:a.description,host:a.host,rating:a.rating,location:a.location,equipments:a.equipments,tags:a.tags})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this,e=this.state;return Object(b.jsxs)("div",{className:"Housing",children:[Object(b.jsx)(x,{}),Object(b.jsx)(k,{data:e,length:this.state.pictures.length}),Object(b.jsxs)("div",{className:"appartment",children:[Object(b.jsxs)("div",{className:"generalInfos",children:[Object(b.jsxs)("div",{className:"locationInfos",children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("h3",{children:e.location}),Object(b.jsx)("div",{className:"tagsContainer",children:e.tags.map((function(t){return Object(b.jsx)("span",{className:"tags",children:t},e.id+t)}))})]}),Object(b.jsxs)("div",{className:"otherInfos",children:[Object(b.jsxs)("div",{className:"hostInfos",children:[Object(b.jsx)("span",{className:"name",children:e.host.name}),Object(b.jsx)("img",{src:e.host.picture,alt:"profil",className:"profilPicture"})]}),Object(b.jsx)("div",{className:"ratingContainer",children:[1,2,3,4,5].map((function(e){return e<=parseInt(t.state.rating,10)?Object(b.jsx)("img",{src:C,alt:"red star"},e):Object(b.jsx)("img",{src:q,alt:"white star"},e)}))})]})]}),Object(b.jsxs)("div",{className:"textContainer",children:[Object(b.jsx)(N,{title:"Description",text:e.description,classname:"textDescription"}),Object(b.jsx)(N,{title:"Equipements",text:e.equipments.map((function(t){return Object(b.jsx)("span",{children:t},e.id+t)})),classname:"textEquipments"})]})]},e.id),Object(b.jsx)(p,{})]})}}]),s}(n.Component),S=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(l.a,{children:Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{exact:!0,path:"/",component:v}),Object(b.jsx)(f.a,{exact:!0,path:"/about",component:y}),Object(b.jsx)(f.a,{exact:!0,path:"/housing",component:w}),Object(b.jsx)(f.a,{component:g})]})})})}}]),s}(n.Component);s(33);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b614eeb4.chunk.js.map