/*! For license information please see component---src-pages-categories-biscotti-tsx-07f62f47b67678f86abd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Fauj:function(e,t,a){e.exports={body:"Quote-module--body--3u4Ij",text:"Quote-module--text--vcTG0",leftQuote:"Quote-module--leftQuote--2QPJO",rightQuote:"Quote-module--rightQuote--29oW3"}},KTFW:function(e,t,a){e.exports={textWrapper:"ProductView-module--textWrapper--8-aF7",fluidImg:"ProductView-module--fluidImg--3JCGH",title:"ProductView-module--title--2YAnF",titleWrapper:"ProductView-module--titleWrapper--YgPFm",descriptionTitle:"ProductView-module--descriptionTitle--qd1hF",ingredientsTitle:"ProductView-module--ingredientsTitle--3EVI2",conservationTitle:"ProductView-module--conservationTitle--3-vmi",description:"ProductView-module--description--61jyL",ingredients:"ProductView-module--ingredients--2DVqV",conservation:"ProductView-module--conservation--jGM2p",descWrapper:"ProductView-module--descWrapper--2zFy3",ingredWrapper:"ProductView-module--ingredWrapper--1l9sp",consWrapper:"ProductView-module--consWrapper--2tSPd"}},O84p:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("af+D"),o=a("kM35"),l=a("BC9t"),c=a("aWju"),s=a("UIRq"),d=a("j1CX"),u=a("rGm7"),p=a("9eSz"),m=a.n(p),h=a("KTFW"),v=a.n(h),g=function(e){return r.a.createElement("div",{style:{position:"relative",backgroundColor:e.bcgColor,width:"100%",height:"100vh",zIndex:100,display:"flex",justifyContent:"space-evenly",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:"400px",width:"20vw",height:"300px",marginBottom:"10vh"}},r.a.createElement(m.a,{className:v.a.fluidImg,fluid:e.fluidImg,alt:"product photo"})),r.a.createElement("div",{className:v.a.textWrapper},r.a.createElement("div",{className:v.a.titleWrapper},r.a.createElement("span",{className:v.a.title},e.title)),r.a.createElement("div",{className:v.a.descWrapper},r.a.createElement("span",{className:v.a.descriptionTitle},"Descrizione prodotto"),r.a.createElement("br",null),r.a.createElement("span",{className:v.a.description},e.description)),r.a.createElement("div",{className:v.a.ingredWrapper},r.a.createElement("span",{className:v.a.ingredientsTitle},"Ingredienti"),r.a.createElement("br",null),r.a.createElement("span",{className:v.a.ingredients},e.ingredients)),r.a.createElement("div",{className:v.a.consWrapper},r.a.createElement("span",{className:v.a.conservationTitle},"Conservazione"),r.a.createElement("br",null),r.a.createElement("span",{className:v.a.conservation},e.conservation))))};t.default=function(){var e=Object(u.a)().allSanityProduct.edges.filter((function(e){return"Biscotti"==e.node.category.title})),t=0;return r.a.createElement(i.Parallax,{pages:3.4,scrolling:!0,ref:function(e){return e}},r.a.createElement("div",{style:{backgroundColor:"#F0E9E4",width:"100%",height:"100vh",zIndex:-100,position:"relative"}},r.a.createElement(i.ParallaxLayer,{factor:0,speed:-1},r.a.createElement(l.a,null),r.a.createElement("section",{style:{position:"absolute",left:"0",right:"0",top:"0",height:"100vh"}},r.a.createElement(d.a,null,r.a.createElement("div",{style:{position:"absolute",width:"55vw",top:"45vh",marginLeft:"25vw"}},r.a.createElement(s.a,null,"Le materie prime utilizzate per i nostri prodotti provengono dalle ricche e generose terre campane che offrono eccellenze riconosciute in tutto il mondo."))),r.a.createElement("div",{style:{position:"absolute",width:"6em",marginLeft:"10vw",textAlign:"center",bottom:"30vh"}},r.a.createElement(s.a,{style:o.a.header},"B")),r.a.createElement("div",{style:{position:"absolute",right:"20vw",bottom:"15vh"}},r.a.createElement(c.a,null,"Biscotti"))))),e.map((function(e){return console.log(e.node.title),t++,r.a.createElement("section",{style:{position:"relative",width:"100%",height:"100vh"},key:e.node.id},r.a.createElement(i.ParallaxLayer,{factor:t,speed:t/10},r.a.createElement(g,{bcgColor:e.node.backGroundColor.hex,fluidImg:e.node.productPhoto.asset.fluid,title:e.node.title,description:e.node.description,conservation:e.node.conservation,ingredients:e.node.ingredients})))})),t++,r.a.createElement("section",{style:{position:"relative",width:"100%",height:"100vh",marginTop:"30vh"}},r.a.createElement(i.ParallaxLayer,{factor:t,speed:t/10},r.a.createElement("div",{style:{backgroundColor:"white",width:"100%",height:"100vh",zIndex:100}}))))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},UIRq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("kM35"),o=a("Fauj"),l=a.n(o);t.a=function(e){var t=e.children,a=e.style,n={fontSize:"1.5rem",fontStyle:"italic",fontWeight:"normal",fontFamily:"IbarraRealNovaItalic"};switch(a){case i.a.header:n.fontSize="7em",n.fontWeight="bold",n.fontStyle="normal",n.marginLeft="-35px",n.marginTop="-15px",n.fontFamily="HomepagebaukastenBold"}return r.a.createElement("div",{className:l.a.body},r.a.createElement("div",{style:{transform:a==i.a.header?"scale(1.3)":"scale(1)"},className:l.a.leftQuote},r.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),r.a.createElement("span",{style:Object.assign({},n),className:l.a.text},t),r.a.createElement("div",{style:{transform:a==i.a.header?"translateY(60px) scale(1.3)":"scale(1)"},className:l.a.rightQuote},r.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"}))))}},"WI/J":function(e,t,a){e.exports={text:"PageTitle-module--text--32e_H"}},ZyrA:function(e,t,a){e.exports={centralizer:"centralizer-module--centralizer--1IRlT",column:"centralizer-module--column--2MPBw",space:"centralizer-module--space--1OdAI",evenly:"centralizer-module--evenly--2F5Lq"}},aWju:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("WI/J"),o=a.n(i);t.a=function(e){var t=e.children;return r.a.createElement("span",{className:o.a.text},t)}},j1CX:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("ZyrA"),o=a.n(i),l=a("TSYQ"),c=a.n(l);t.a=function(e){var t=o.a.centralizer,a={position:""};return e.column&&(t=c()(o.a.centralizer,o.a.column)),e.column&&e.space&&(t=c()(o.a.centralizer,o.a.column,o.a.space)),e.space&&(t=c()(o.a.centralizer,o.a.space)),e.evenly&&(t=c()(o.a.centralizer,o.a.evenly)),void 0!==e.position&&(console.log("position",e.position),a=Object.assign({},a,{position:""+e.position})),r.a.createElement("div",{className:t,style:a},e.children)}},kM35:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e[e.header=0]="header",e[e["paragraph-s"]=1]="paragraph-s",e[e["paragraph-m"]=2]="paragraph-m",e[e["paragraph-l"]=3]="paragraph-l"}(n||(n={}))},rGm7:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("Wbzz"),r=function(){return Object(n.useStaticQuery)("583792849")}}}]);
//# sourceMappingURL=component---src-pages-categories-biscotti-tsx-07f62f47b67678f86abd.js.map