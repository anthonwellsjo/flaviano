(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+ssM":function(e,t,a){e.exports={pageBody:"LayoutFrameDesktop-module--pageBody--3dWLH",backGround:"LayoutFrameDesktop-module--backGround--1Fsb9"}},O84p:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("af+D"),i=a("kM35"),l=a("WbIz"),c=a("p5Rc"),s=a("jQ51"),d=a("j1CX"),u=a("rGm7"),p=a("9eSz"),m=a.n(p),g=a("ghY5"),h=a.n(g),E=function(e){return r.a.createElement("div",{style:{position:"relative",backgroundColor:e.bcgColor,width:"100%",height:"100vh",zIndex:100,display:"flex",justifyContent:"space-evenly",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:"500px",maxHeight:"300px",width:"28%",height:"300px",marginBottom:"10vh"}},r.a.createElement(m.a,{className:h.a.fluidImg,fluid:e.fluidImg,alt:"product photo"})),r.a.createElement("div",{className:h.a.textWrapper},r.a.createElement("div",{className:h.a.titleWrapper},r.a.createElement("span",{className:h.a.title},e.title)),r.a.createElement("div",{className:h.a.descWrapper},r.a.createElement("span",{className:h.a.descriptionTitle},"Descrizione prodotto"),r.a.createElement("br",null),r.a.createElement("p",{className:h.a.description},e.description)),r.a.createElement("div",{className:h.a.ingredWrapper},r.a.createElement("span",{className:h.a.ingredientsTitle},"Ingredienti"),r.a.createElement("br",null),r.a.createElement("p",{className:h.a.ingredients},e.ingredients)),r.a.createElement("div",{className:h.a.consWrapper},r.a.createElement("span",{className:h.a.conservationTitle},"Conservazione"),r.a.createElement("br",null),r.a.createElement("span",{className:h.a.conservation},e.conservation))))},v=a("qUFr"),f=a("f1yE"),b=a("bvyN"),w=function(){var e=Object(n.useContext)(f.a),t=(e[0],e[1]),a=Object(u.a)().allSanityProduct.edges.filter((function(e){return"Biscotti"==e.node.category.title})),p=0;return Object(n.useEffect)((function(){t((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))}),[]),r.a.createElement(o.Parallax,{pages:3.3,scrolling:!0,ref:function(e){return e}},r.a.createElement(b.a,null,r.a.createElement(v.a,null),r.a.createElement(l.a,null),r.a.createElement("div",{style:{backgroundColor:"#F0E9E4",width:"100%",height:"100vh",position:"relative"}},r.a.createElement(o.ParallaxLayer,{factor:0,speed:-1},r.a.createElement("section",{style:{position:"absolute",left:"0",right:"0",top:"0",height:"100vh"}},r.a.createElement(d.a,null,r.a.createElement("div",{style:{position:"absolute",width:"55%",top:"45vh",marginLeft:"25%"}},r.a.createElement(s.a,{style:i.a.italic,fontSize:"Quote-M"},"Le materie prime utilizzate per i nostri prodotti provengono dalle ricche e generose terre campane che offrono eccellenze riconosciute in tutto il mondo."))),r.a.createElement("div",{style:{position:"absolute",width:"6em",marginLeft:"10%",textAlign:"center",bottom:"30vh"}},r.a.createElement(s.a,{style:i.a.header},"B")),r.a.createElement("div",{style:{position:"absolute",right:"20%",bottom:"15vh"}},r.a.createElement(c.a,null,"Biscotti"))))),a.map((function(e){return console.log(e.node.title),p++,r.a.createElement("section",{style:{position:"relative",width:"100%",height:"100vh"},key:e.node.id},r.a.createElement(o.ParallaxLayer,{factor:p,speed:p/10},r.a.createElement(E,{bcgColor:e.node.backGroundColor.hex,fluidImg:e.node.productPhoto.asset.fluid,title:e.node.title,description:e.node.description,conservation:e.node.conservation,ingredients:e.node.ingredients})))})),p++,r.a.createElement("section",{style:{position:"relative",width:"100%",height:"100vh",marginTop:"30vh"}},r.a.createElement(o.ParallaxLayer,{factor:p,speed:p/15},r.a.createElement("div",{style:{backgroundColor:"white",width:"100%",height:"100vh",zIndex:100}})))))},y=function(){return r.a.createElement("h1",null,"mobile")},k=a("sKf1");t.default=function(){return Object(k.b)().width>850?r.a.createElement(w,null):r.a.createElement(y,null)}},bvyN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("j1CX"),i=a("+ssM"),l=a.n(i);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:l.a.backGround},r.a.createElement(o.a,null,r.a.createElement("div",{className:l.a.pageBody},t)))}},ghY5:function(e,t,a){e.exports={textWrapper:"ProductViewDesktop-module--textWrapper--1_p1y",fluidImg:"ProductViewDesktop-module--fluidImg--33Jy4",title:"ProductViewDesktop-module--title--8ZtHN",titleWrapper:"ProductViewDesktop-module--titleWrapper--3EF_h",descriptionTitle:"ProductViewDesktop-module--descriptionTitle--z7tPU",ingredientsTitle:"ProductViewDesktop-module--ingredientsTitle--2hXb4",conservationTitle:"ProductViewDesktop-module--conservationTitle--10Pc9",description:"ProductViewDesktop-module--description--19sGD",ingredients:"ProductViewDesktop-module--ingredients--1Ts0S",conservation:"ProductViewDesktop-module--conservation--2K3qd",descWrapper:"ProductViewDesktop-module--descWrapper--2-nK1",ingredWrapper:"ProductViewDesktop-module--ingredWrapper--2waaW",consWrapper:"ProductViewDesktop-module--consWrapper--3ypno"}},qUFr:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("wEEd"),i=a("f1yE");t.a=function(){var e=Object(n.useContext)(i.a),t=e[0],a=e[1],l=Object(o.b)({reverse:!t.productsDropDownMenuOpen,from:{backdropFilter:"blur(0px)",backgroundColor:"rgb(255,255,255,0)"},to:[{backdropFilter:"blur(6px)",backgroundColor:"rgb(255,255,255,0.2)"}]});return t.productsDropDownMenuOpen?r.a.createElement(o.a.div,{onClick:function(){return a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!t.productsDropDownMenuOpen})}))},style:Object.assign({},l,{zIndex:2,position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%"})}):null}},rGm7:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("Wbzz"),r=function(){return Object(n.c)("494139059")}}}]);
//# sourceMappingURL=component---src-pages-categories-biscotti-tsx-806856df3c450919fc3d.js.map