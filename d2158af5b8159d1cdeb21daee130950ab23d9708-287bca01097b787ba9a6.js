(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"32kA":function(e,t,a){e.exports={pageBody:"LayoutFrameDesktop-module--pageBody--2ypNC",backGround:"LayoutFrameDesktop-module--backGround--2l9Iy"}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},C="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(D,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,n(r),o):o})),D=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));D.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var M=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!C&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(C||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,C=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,L=e.draggable,O=g||h;if(!O)return null;var M=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:M?1:0,transition:I?"opacity "+v+"ms":"none"},o),z="boolean"==typeof C?"lightgray":C,R={transitionDelay:v+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&R,o,f),B={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:y},Y=this.state.isHydrated?p(O):O[0];if(g)return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:Y.maxWidth?Y.maxWidth+"px":null,maxHeight:Y.maxHeight?Y.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),z&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&R)}),Y.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:Y.base64,spreadProps:B,imageVariants:O,generateSources:S}),Y.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:Y.tracedSVG,spreadProps:B,imageVariants:O,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,E(O),c.default.createElement(D,{alt:a,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:w},Y,{imageVariants:O}))}}));if(h){var Q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},i);return"inherit"===i.display&&delete Q.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},z&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},I&&R)}),Y.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:Y.base64,spreadProps:B,imageVariants:O,generateSources:S}),Y.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:Y.tracedSVG,spreadProps:B,imageVariants:O,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,E(O),c.default.createElement(D,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:w},Y,{imageVariants:O}))}}))}return null},t}(c.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),j=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function z(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}M.propTypes={resolutions:I,sizes:j,fixed:z(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:z(d.default.oneOfType([j,d.default.arrayOf(j)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=M;t.default=R},Cvz6:function(e,t,a){e.exports={container:"NavbarDropDownDesktop-module--container--3rJar",menu:"NavbarDropDownDesktop-module--menu--2mrPA",menuItem:"NavbarDropDownDesktop-module--menuItem--3gYqs",active:"NavbarDropDownDesktop-module--active--2E63j",button:"NavbarDropDownDesktop-module--button--1vRUt",activeYeah:"NavbarDropDownDesktop-module--activeYeah--Y0w4d"}},"L3+c":function(e,t,a){e.exports={Layout:"LayoutHeaderDesktop-module--Layout--xCVwI"}},bvyN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("j1CX"),s=a("wEEd"),o=a("f1yE"),l=function(){var e=Object(r.useContext)(o.a),t=e[0],a=e[1],i=Object(s.b)({reverse:!t.productsDropDownMenuOpen,from:{backdropFilter:"blur(0px)",backgroundColor:"rgb(255,255,255,0)"},to:[{backdropFilter:"blur(6px)",backgroundColor:"rgb(255,255,255,0.2)"}]});return t.productsDropDownMenuOpen?n.a.createElement(s.a.div,{onClick:function(){return a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!t.productsDropDownMenuOpen})}))},style:Object.assign({},i,{zIndex:2,position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%"})}):null},c=a("Wbzz"),d=a("kHMO"),u=a.n(d),f=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],i=Object(r.useContext)(o.a),l=(i[0],i[1],Object(s.b)({to:{transform:t?"scale(3)":"scale(2)"},from:{transform:"scale(2)"},config:{mass:1,friction:15,tension:100}}));Object(s.b)({reverse:t,to:{transform:"scale(0)"},from:{transform:"scale(0)"},delay:100,config:{mass:5,friction:60,tension:200}});return n.a.createElement("div",{style:{width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed"}},n.a.createElement("div",{style:{width:"100vw",maxWidth:"1300px",position:"fixed"}},n.a.createElement(c.a,{to:"/"},n.a.createElement(s.a.div,{className:u.a.container},n.a.createElement(s.a.svg,{style:{transform:"translateX(-10px) translateY(-50px)"},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},width:"243",height:"235",viewBox:"0 0 243 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{className:u.a.logo},n.a.createElement(s.a.g,{style:Object.assign({},l,{transformOrigin:"center",transformBox:"fill-box"}),className:u.a.titleFlower},n.a.createElement("path",{id:"Vector_29",d:"M131.365 107.901C131.365 107.901 134.746 110.335 141.794 105.439C141.794 105.439 135.198 103.362 131.365 107.901Z",fill:"#CA8860"}),n.a.createElement("path",{id:"Vector_30",d:"M129.065 99.8988C129.065 99.8988 125.89 101.834 130.004 107.874C130.009 107.874 133.327 103.559 129.065 99.8988Z",fill:"#D3B9A7",stroke:"white",strokeWidth:"0.5969",strokeMiterlimit:"10"}))),n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"paint0_linear",x1:"84.1096",y1:"129.197",x2:"160.089",y2:"129.197",gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#009245"}),n.a.createElement("stop",{offset:"0.5264",stopColor:"#F2F2F2"}),n.a.createElement("stop",{offset:"1",stopColor:"#FF0000"}))))))))},m=a("TSYQ"),p=a.n(m),g=a("P4c3"),h=a("tYNK"),C=a("Cvz6"),v=a.n(C),b=function(){var e=Object(r.useContext)(o.a),t=e[0],a=e[1],i=Object(h.a)();console.log("productsDropDownMenuOpen",t.productsDropDownMenuOpen),console.log("pathname",location.pathname,location.pathname.split("/").includes("categories"));var s=function(){a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},l=[];return i.allSanityCategory.edges.forEach((function(e){var t={title:e.node.title,color:e.node.previewColorBoxColor.hex,slug:e.node.slug.current};l.push(t),console.log(t)})),n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:location.pathname.split("/").includes("categories")?p()(v.a.button,v.a.activeYeah):v.a.button,style:{zIndex:100,cursor:"pointer"},onMouseEnter:function(){a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!0})}))}},t.english?"Products":"Prodotti"),n.a.createElement(g.Transition,{unique:!0,reset:!0,items:t.productsDropDownMenuOpen,from:{opacity:0,height:0,transform:"translateY(-10%)"},enter:{opacity:1,height:"auto",transform:"translate(0%)"},leave:{opacity:0}},(function(e){return e&&function(e){return n.a.createElement("div",{onMouseLeave:s,style:e,className:v.a.menu},n.a.createElement(g.Trail,{items:l,from:{opacity:0},to:{opacity:1}},(function(e){return function(t){return n.a.createElement(c.a,{activeClassName:v.a.active,to:"/categories/"+e.slug},n.a.createElement("div",{style:Object.assign({},t,{zIndex:100,backgroundColor:e.color}),className:v.a.menuItem},e.title))}})))}})))},y=a("orQf"),E=a.n(y),w=function(){var e=Object(r.useContext)(o.a),t=e[0],a=e[1];return n.a.createElement("nav",{className:E.a.navbar},n.a.createElement(i.a,null,n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"end",width:"100vw",maxWidth:"1300px",marginRight:"100px"}},n.a.createElement("div",null,n.a.createElement(c.a,{activeClassName:E.a.active,className:E.a.link,onMouseEnter:function(){return a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},to:"/chisiamo"},t.english?"About Us":"Chi Siamo"),n.a.createElement(b,null),n.a.createElement(c.a,{activeClassName:E.a.active,className:E.a.link,onMouseEnter:function(){return a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},to:"/materieprime"},t.english?"Materials":"Materie prime"),n.a.createElement(c.a,{activeClassName:E.a.active,style:{marginLeft:"0px"},className:E.a.link,onMouseEnter:function(){return a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},to:"/contatti"},t.english?"Contact":"Contatti"),n.a.createElement("button",{className:E.a.button,onClick:function(){return a((function(e){return{english:!t.english}}))}},t.english?n.a.createElement("span",null,"Ita / ",n.a.createElement("span",{className:E.a.active},"Eng")):n.a.createElement("span",null,n.a.createElement("span",{className:E.a.active},"Ita "),"/ Eng")," ")))))},x=a("L3+c"),S=a.n(x),L=function(){return n.a.createElement("div",{className:S.a.Layout},n.a.createElement(f,null),n.a.createElement(w,null))},O=a("32kA"),N=a.n(O);t.a=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:N.a.backGround},n.a.createElement(i.a,{column:!0},n.a.createElement("div",{className:N.a.pageBody},t),n.a.createElement(l,null))),n.a.createElement("div",{style:{width:"100vw",maxWidth:"1300px",position:"fixed",zIndex:2}},n.a.createElement(L,null)))}},"h6/m":function(e,t,a){e.exports={body:"QuoteDesktop-module--body--3JK0b",text:"QuoteDesktop-module--text--19iJW",leftQuote:"QuoteDesktop-module--leftQuote--3qGa2",rightQuote:"QuoteDesktop-module--rightQuote--8iAnL"}},jQ51:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("kM35"),s=a("h6/m"),o=a.n(s),l=a("TSYQ"),c=a.n(l),d=a("sKf1"),u=a("j1CX");t.a=function(e){var t=e.children,a=e.style,r=e.rightQuoteY,s=e.rightQuoteX,l=e.fontSize,f=e.mobile,m=Object(d.b)().width,p={fontStyle:"italic",fontWeight:"normal",fontFamily:"IbarraRealNovaItalic"};switch(a){case i.b.header:p.fontSize="7em",p.fontWeight="bold",p.fontStyle="normal",p.marginLeft="-35px",p.marginTop="-15px",p.fontFamily="HomepagebaukastenBold";break;case i.b.italic:break;case i.b["paragraph-m"]:p.fontSize="1.5rem"}return l&&!f?n.a.createElement("div",{className:o.a.body},n.a.createElement("div",{style:{transform:a==i.b.header?"scale(1.3)":"scale(1)"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement("span",{style:Object.assign({},p,{fontSize:l}),className:c()(o.a.text,l)},t),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:a==i.b.header?"translateY(60px) scale(1.3)":"scale(1)"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"})))))):l&&f&&!i.b.header?n.a.createElement("div",{className:o.a.body},n.a.createElement("div",{style:{transform:"scale("+.001*m+")"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement(u.a,null,n.a.createElement("div",{style:{width:"90%",marginTop:"-50px"}},n.a.createElement("p",{style:Object.assign({},p,{fontSize:l}),className:c()(o.a.text,l)},t))),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:"scale("+.001*m+")"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"})))))):i.b.header&&f?n.a.createElement("div",{className:o.a.body},n.a.createElement("div",{style:{transform:a==i.b.header?"scale(1.3)":"scale(1)"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement("span",{style:Object.assign({},p),className:o.a.text},t),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:a==i.b.header?"translateY(60px) scale(1.3)":"scale(1)"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"})))))):n.a.createElement("div",{style:{transform:"scale(0.7)"},className:o.a.body},n.a.createElement("div",{style:{transform:a==i.b.header?"scale(1.3)":"scale(1)"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement("span",{style:Object.assign({},p),className:c()(o.a.text,l)},t),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:a==i.b.header?"translateY(60px) scale(1.3)":"scale(1)"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"}))))))}},kHMO:function(e,t,a){e.exports={container:"AnimLogoPiccolo-module--container--2m0Bp"}},orQf:function(e,t,a){e.exports={navbar:"MainNavBarDesktop-module--navbar--2BU7E",link:"MainNavBarDesktop-module--link--3DaxP",active:"MainNavBarDesktop-module--active--22Azr",button:"MainNavBarDesktop-module--button--jUdYf"}},tYNK:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("Wbzz"),n=function(){return Object(r.c)("1229184484")}}}]);
//# sourceMappingURL=d2158af5b8159d1cdeb21daee130950ab23d9708-287bca01097b787ba9a6.js.map