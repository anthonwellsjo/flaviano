(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},C="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(k,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,n(r),o):o})),k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!C&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(C||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,C=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,E=e.loading,L=e.draggable,O=g||h;if(!O)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,D=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:I?1:0,transition:D?"opacity "+b+"ms":"none"},o),j="boolean"==typeof C?"lightgray":C,R={transitionDelay:b+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},D&&R,o,f),P={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:y},H=this.state.isHydrated?p(O):O[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},D&&R)}),H.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:O,generateSources:x}),H.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:O,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(O),d.default.createElement(k,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:E,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:E},H,{imageVariants:O}))}}));if(h){var Q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete Q.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},D&&R)}),H.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:O,generateSources:x}),H.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:O,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(O),d.default.createElement(k,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:E,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:E},H,{imageVariants:O}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var D=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}I.propTypes={resolutions:D,sizes:z,fixed:j(c.default.oneOfType([D,c.default.arrayOf(D)])),fluid:j(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=I;t.default=R},FKg1:function(e,t,a){e.exports={body:"QuoteDesktop-module--body--PZv5z",text:"QuoteDesktop-module--text--LkVt1",leftQuote:"QuoteDesktop-module--leftQuote--3-DjH",rightQuote:"QuoteDesktop-module--rightQuote--3CDCg"}},G8dS:function(e,t,a){e.exports={container:"AnimLogoPiccolo-module--container--1UAlP",firstStartBackdrop:"AnimLogoPiccolo-module--firstStartBackdrop--2IPW1"}},HgQ3:function(e,t,a){e.exports={navbar:"MainNavBarDesktop-module--navbar--29CPP",link:"MainNavBarDesktop-module--link--3k-8P",button:"MainNavBarDesktop-module--button--3EkQq"}},WbIz:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=a("wEEd"),o=a("f1yE"),l=a("G8dS"),d=a.n(l),c=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],l=Object(r.useContext)(o.a),c=(l[0],l[1],Object(s.b)({reverse:t,to:{transform:"scale(2)"},from:{transform:"scale(3)"},config:{mass:1,friction:15,tension:100}}));Object(s.b)({reverse:t,to:{transform:"scale(0)"},from:{transform:"scale(0)"},delay:100,config:{mass:5,friction:60,tension:200}});return n.a.createElement(i.a,{to:"/"},n.a.createElement(s.a.div,{className:d.a.container},n.a.createElement(s.a.svg,{style:{transform:"translateX(-10px) translateY(-50px)"},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},width:"243",height:"235",viewBox:"0 0 243 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{className:d.a.logo},n.a.createElement(s.a.g,{style:Object.assign({},c,{transformOrigin:"center",transformBox:"fill-box"}),className:d.a.titleFlower},n.a.createElement("path",{id:"Vector_29",d:"M131.365 107.901C131.365 107.901 134.746 110.335 141.794 105.439C141.794 105.439 135.198 103.362 131.365 107.901Z",fill:"#CA8860"}),n.a.createElement("path",{id:"Vector_30",d:"M129.065 99.8988C129.065 99.8988 125.89 101.834 130.004 107.874C130.009 107.874 133.327 103.559 129.065 99.8988Z",fill:"#D3B9A7",stroke:"white",strokeWidth:"0.5969",strokeMiterlimit:"10"}))),n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"paint0_linear",x1:"84.1096",y1:"129.197",x2:"160.089",y2:"129.197",gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#009245"}),n.a.createElement("stop",{offset:"0.5264",stopColor:"#F2F2F2"}),n.a.createElement("stop",{offset:"1",stopColor:"#FF0000"}))))))},u=a("P4c3"),f=a("tYNK"),m=a("o7m/"),p=a.n(m),g=function(){var e=Object(r.useContext)(o.a),t=e[0],a=e[1],s=Object(f.a)();console.log("productsDropDownMenuOpen",t.productsDropDownMenuOpen);var l=function(){a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},d=[];return s.allSanityCategory.edges.forEach((function(e){var t={title:e.node.title,color:e.node.previewColorBoxColor.hex,slug:e.node.slug.current};d.push(t),console.log(t)})),n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:p.a.button,style:{zIndex:100,cursor:"pointer"},onMouseEnter:function(){a((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!0})}))}},"Prodotti"),n.a.createElement(u.Transition,{unique:!0,reset:!0,items:t.productsDropDownMenuOpen,from:{opacity:0,height:0,transform:"translateY(-10%)"},enter:{opacity:1,height:"auto",transform:"translate(0%)"},leave:{opacity:0}},(function(e){return e&&function(e){return n.a.createElement("div",{onMouseLeave:l,style:e,className:p.a.menu},n.a.createElement(u.Trail,{items:d,from:{opacity:0},to:{opacity:1}},(function(e){return function(t){return n.a.createElement(i.a,{to:"/categories/"+e.slug},n.a.createElement("div",{style:Object.assign({},t,{zIndex:100,backgroundColor:e.color}),className:p.a.menuItem},e.title))}})))}})))},h=a("HgQ3"),C=a.n(h),b=function(){var e=Object(r.useContext)(o.a),t=(e[0],e[1]);return n.a.createElement("nav",{className:C.a.navbar},n.a.createElement(i.a,{className:C.a.link,onMouseEnter:function(){return t((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},to:"/chisiamo"},"Chi siamo"),n.a.createElement(g,null),n.a.createElement(i.a,{className:C.a.link,onMouseEnter:function(){return t((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},to:"/materieprime"},"Materie prime"),n.a.createElement(i.a,{className:C.a.link,onMouseEnter:function(){return t((function(e){return Object.assign({},e,{productsDropDownMenuOpen:!1})}))},to:"/contact"},"Contatti"),n.a.createElement("button",{className:C.a.button},"Ita/Eng"))},v=a("wapJ"),y=a.n(v);t.a=function(){return n.a.createElement("div",{className:y.a.Layout},n.a.createElement(c,null),n.a.createElement(b,null))}},jQ51:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("kM35"),s=a("FKg1"),o=a.n(s),l=a("TSYQ"),d=a.n(l),c=a("sKf1"),u=a("j1CX");t.a=function(e){var t=e.children,a=e.style,r=e.rightQuoteY,s=e.rightQuoteX,l=e.fontSize,f=e.mobile,m=Object(c.b)().width,p={fontStyle:"italic",fontWeight:"normal",fontFamily:"IbarraRealNovaItalic"};switch(a){case i.a.header:p.fontSize="7em",p.fontWeight="bold",p.fontStyle="normal",p.marginLeft="-35px",p.marginTop="-15px",p.fontFamily="HomepagebaukastenBold";break;case i.a.italic:break;case i.a["paragraph-m"]:p.fontSize="1.5rem"}return l&&!f?n.a.createElement("div",{className:o.a.body},n.a.createElement("div",{style:{transform:a==i.a.header?"scale(1.3)":"scale(1)"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement("span",{style:Object.assign({},p,{fontSize:l}),className:d()(o.a.text,l)},t),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:a==i.a.header?"translateY(60px) scale(1.3)":"scale(1)"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"})))))):l&&f&&!i.a.header?n.a.createElement("div",{className:o.a.body},n.a.createElement("div",{style:{transform:"scale("+.001*m+")"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement(u.a,null,n.a.createElement("div",{style:{width:"90%",marginTop:"-50px"}},n.a.createElement("p",{style:Object.assign({},p,{fontSize:l}),className:d()(o.a.text,l)},t))),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:"scale("+.001*m+")"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"})))))):i.a.header&&f?n.a.createElement("div",{className:o.a.body},n.a.createElement("div",{style:{transform:a==i.a.header?"scale(1.3)":"scale(1)"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement("span",{style:Object.assign({},p),className:o.a.text},t),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:a==i.a.header?"translateY(60px) scale(1.3)":"scale(1)"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"})))))):n.a.createElement("div",{style:{transform:"scale(0.7)"},className:o.a.body},n.a.createElement("div",{style:{transform:a==i.a.header?"scale(1.3)":"scale(1)"},className:o.a.leftQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z",fill:"#050200"}))),n.a.createElement("span",{style:Object.assign({},p),className:d()(o.a.text,l)},t),n.a.createElement("div",{style:{transform:s?"translateX("+s+")":"translateX(0"}},n.a.createElement("div",{style:{transform:r?"translateY("+r+")":"translateY(0)"}},n.a.createElement("div",{style:{transform:a==i.a.header?"translateY(60px) scale(1.3)":"scale(1)"},className:o.a.rightQuote},n.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z",fill:"#050200"}))))))}},"o7m/":function(e,t,a){e.exports={container:"NavbarDropDownDesktop-module--container--27sgo",menu:"NavbarDropDownDesktop-module--menu--1r-x1",menuItem:"NavbarDropDownDesktop-module--menuItem--1VI2q",button:"NavbarDropDownDesktop-module--button--1wymU"}},tYNK:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("Wbzz"),n=function(){return Object(r.c)("3494211438")}},wapJ:function(e,t,a){e.exports={Layout:"LayoutHeaderDesktop-module--Layout--3P4Zo"}}}]);
//# sourceMappingURL=d2158af5b8159d1cdeb21daee130950ab23d9708-7bae55b19b90e0d678e0.js.map