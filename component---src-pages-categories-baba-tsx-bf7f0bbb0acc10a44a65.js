(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+ssM":function(e,t,a){e.exports={pageBody:"LayoutFrameDesktop-module--pageBody--3dWLH",backGround:"LayoutFrameDesktop-module--backGround--1Fsb9"}},LVWJ:function(e,t,a){e.exports=a.p+"static/arrowDown-9e734699d5bdaf7b5cdc24bbb6032fa1.png"},US4T:function(e,t,a){e.exports={header:"BabaProductsPreviewDesktop-module--header--3Cyhv",body:"BabaProductsPreviewDesktop-module--body--ZD32H",text:"BabaProductsPreviewDesktop-module--text--X83B7",productCard:"BabaProductsPreviewDesktop-module--productCard--2DVoW"}},boqk:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.default=n},bvyN:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("j1CX"),i=a("+ssM"),l=a.n(i);t.a=function(e){var t=e.children;return o.a.createElement("div",{className:l.a.backGround},o.a.createElement(r.a,null,o.a.createElement("div",{className:l.a.pageBody},t)))}},f12l:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("j1CX"),i=a("boqk"),l=a.n(i),c=a("LVWJ"),s=a.n(c),u=a("f40C"),d=a.n(u);t.a=function(e){e.id;var t=e.reactivePosition,a=e.currentPosition,i=e.deactivatePosition,c=e.to,u=e.up,m=e.clickEvent,p=Object(n.useState)(!1),b=p[0],v=p[1];Object(n.useEffect)((function(){console.log(a,t),a<=t&&!b&&(console.log("reactivating button"),v(!0)),a>i&&b&&(console.log("deactivating button"),v(!1))}),[a]);return o.a.createElement(r.a,null,o.a.createElement("div",{className:b?d.a.animate:d.a.hide},o.a.createElement("button",{style:{cursor:"pointer"},className:d.a.button,onClick:function(){return console.log("click"),l()(c),void(m&&m())}},o.a.createElement("img",{style:{width:"50px",transform:u?"rotate(180deg)":"rotate(0)"},src:s.a,alt:"arrow"}))))}},f40C:function(e,t,a){e.exports={button:"ScrollButton-module--button--LHAtB",animate:"ScrollButton-module--animate--3IWc-",wave:"ScrollButton-module--wave--3uQc-",hide:"ScrollButton-module--hide--2Empr"}},lBkZ:function(e,t,a){"use strict";var n=a("q1tI");t.a=function(e){var t=Object(n.useState)(0),a=t[0],o=t[1],r=null,i=function(){null!==r&&clearTimeout(r),r=setTimeout((function(){o(e.current.current)}),150)};return Object(n.useEffect)((function(){if(e.current&&e.current.container)return e.current.container.onscroll=i,function(){e.current.container.onscroll=null}})),[a]}},qUFr:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("wEEd"),i=a("f1yE");t.a=function(){var e=Object(n.useContext)(i.a),t=e[0],a=e[1],l=Object(r.b)({reverse:!t.productsDropDownMenuOpen,from:{backdropFilter:"blur(0px)",backgroundColor:"rgb(255,255,255,0)"},to:[{backdropFilter:"blur(6px)",backgroundColor:"rgb(255,255,255,0.2)"}]});return t.productsDropDownMenuOpen?o.a.createElement(r.a.div,{onClick:function(){return a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!t.productsDropDownMenuOpen})}))},style:Object.assign({},l,{zIndex:2,position:"absolute",top:0,left:0,right:0,bottom:0,width:"100vw"})}):null}},rGm7:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("Wbzz"),o=function(){return Object(n.c)("2595492870")}},z5HR:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("af+D"),i=a("WbIz"),l=a("p5Rc"),c=a("jQ51"),s=a("j1CX"),u=a("Wbzz"),d=a("9eSz"),m=a.n(d),p=a("rGm7"),b=a("US4T"),v=a.n(b),f=function(){var e=Object(p.a)().allSanityProduct.edges.filter((function(e){return"Babà"==e.node.category.title}));return console.log("query data",e),o.a.createElement(s.a,null,e.map((function(e){return o.a.createElement("div",{key:e.node.id,className:v.a.productCard,style:{width:"33.33%",height:"500px",backgroundColor:e.node.backGroundColor.hex,position:"relative"}},o.a.createElement("div",{className:v.a.header},o.a.createElement("div",{style:{height:"3px",width:"2vw",backgroundColor:"black",marginBottom:".5em"}}),o.a.createElement(l.a,{fontSize:"1.8em",letterSpacing:".2em"},"Babà"),o.a.createElement("br",null),o.a.createElement(l.a,{fontSize:"1.8em",letterSpacing:".2em"},e.node.title)),o.a.createElement("div",{className:v.a.body},o.a.createElement(l.a,{fontSize:"0.8em",letterSpacing:".15em"},"Ingredienti"),o.a.createElement("p",{className:v.a.text},e.node.ingredients),o.a.createElement(l.a,{fontSize:"0.8em",letterSpacing:".15em"},"Ingredienti Bagna"),o.a.createElement("p",{className:v.a.text},e.node.ingredientsTwo),o.a.createElement(l.a,{fontSize:"0.8em",letterSpacing:".15em"},"Conservazione"),o.a.createElement("p",{className:v.a.text},e.node.conservation),o.a.createElement(l.a,{fontSize:"0.8em",letterSpacing:".15em"},"Peso Netto"),o.a.createElement("p",{className:v.a.text},e.node.weightGr,"g")))})))},g=a("qUFr"),E=a("bvyN"),h=a("lBkZ"),y=a("f12l");t.default=function(){var e=Object(u.c)("3620831211").sanityBabaPage,t=Object(n.useRef)(),a=Object(h.a)(t)[0];return o.a.createElement(r.Parallax,{pages:2,scrolling:!1,ref:t,config:{mass:2}},o.a.createElement(g.a,null),o.a.createElement(E.a,null,o.a.createElement(i.a,null),o.a.createElement("div",{id:"top",style:{position:"absolute",top:"0"}}),o.a.createElement(r.ParallaxLayer,{factor:0,speed:0},o.a.createElement("div",{style:{backgroundColor:"#F0E9E4",width:"100%",height:"100vh",zIndex:-1,position:"relative"}},o.a.createElement("div",{style:{maxWidth:"100vw",width:"100%",position:"absolute"}},o.a.createElement(m.a,{fluid:e.headerImg.asset.fluid,alt:"Baba image"})),o.a.createElement("section",{style:{position:"absolute",left:"0",right:"0",top:"0",height:"100vh"}},o.a.createElement(s.a,null,o.a.createElement("div",{style:{position:"absolute",width:"35vw",top:"35vh",marginLeft:"25vw"}},o.a.createElement(c.a,{rightQuoteY:"15vh"},o.a.createElement(l.a,{letterSpacing:".1em"},"O babà é na cosa seria."))),o.a.createElement("div",{style:{position:"absolute",bottom:"30vh"}},o.a.createElement(y.a,{to:"#products",currentPosition:a,deactivatePosition:9999,reactivePosition:0})))))),o.a.createElement("div",{id:"products",style:{position:"absolute",top:"100vh"}}),o.a.createElement(r.ParallaxLayer,{offset:.99999,speed:.1},o.a.createElement("div",{style:{position:"relative",backgroundColor:"white",width:"100%",height:"100vh",zIndex:100}},o.a.createElement(s.a,{evenly:!0},o.a.createElement("div",{style:{position:"absolute",top:"15vh"}},o.a.createElement(y.a,{to:"#top",up:!0,currentPosition:a,deactivatePosition:9999,reactivePosition:0})),o.a.createElement("div",{style:{width:"30%"}},o.a.createElement("p",{style:{fontFamily:"HomepageBaukastenBook",textAlign:"justify"}},e.pageText)),o.a.createElement("div",{style:{display:"flex",maxWidth:"300px",alignItems:"center",justifyContent:"center"}},o.a.createElement(m.a,{fixed:e.textImg.asset.fixed,alt:"Baba image with text"}))))),o.a.createElement(r.ParallaxLayer,{offset:1.9999,speed:1},o.a.createElement("div",{style:{zIndex:1,width:"100%",marginTop:"-150px"}},o.a.createElement(f,null)))))}}}]);
//# sourceMappingURL=component---src-pages-categories-baba-tsx-bf7f0bbb0acc10a44a65.js.map