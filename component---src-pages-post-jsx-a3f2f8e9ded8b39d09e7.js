(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{iae6:function(e,r,t){"use strict";var o=t("wx14"),a=t("Ff2n"),n=t("q1tI"),i=t("iuhU"),p=t("H2TA"),s=t("NqtD");function c(e){var r,t,o;return r=e,t=0,o=1,e=(Math.min(Math.max(t,r),o)-t)/(o-t),e=(e-=1)*e*e+1}var l=n.forwardRef((function(e,r){var t,p=e.classes,l=e.className,m=e.color,f=void 0===m?"primary":m,u=e.disableShrink,d=void 0!==u&&u,h=e.size,y=void 0===h?40:h,b=e.style,g=e.thickness,x=void 0===g?3.6:g,v=e.value,j=void 0===v?0:v,O=e.variant,k=void 0===O?"indeterminate":O,w=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),N={},P={},S={};if("determinate"===k||"static"===k){var D=2*Math.PI*((44-x)/2);N.strokeDasharray=D.toFixed(3),S["aria-valuenow"]=Math.round(j),"static"===k?(N.strokeDashoffset="".concat(((100-j)/100*D).toFixed(3),"px"),P.transform="rotate(-90deg)"):(N.strokeDashoffset="".concat((t=(100-j)/100,t*t*D).toFixed(3),"px"),P.transform="rotate(".concat((270*c(j/70)).toFixed(3),"deg)"))}return n.createElement("div",Object(o.a)({className:Object(i.a)(p.root,l,"inherit"!==f&&p["color".concat(Object(s.a)(f))],{indeterminate:p.indeterminate,static:p.static}[k]),style:Object(o.a)({width:y,height:y},P,b),ref:r,role:"progressbar"},S,w),n.createElement("svg",{className:p.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},n.createElement("circle",{className:Object(i.a)(p.circle,d&&p.circleDisableShrink,{indeterminate:p.circleIndeterminate,static:p.circleStatic}[k]),style:N,cx:44,cy:44,r:(44-x)/2,fill:"none",strokeWidth:x})))}));r.a=Object(p.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},s55V:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return $})),t.d(r,"q",(function(){return _}));var o=t("KQm4"),a=t("wx14"),n=(t("17x9"),t("bv9d"));var i=function(e){var r=function(r){var t=e(r);return r.css?Object(a.a)(Object(a.a)({},Object(n.a)(t,e(Object(a.a)({theme:r.theme},r.css)))),function(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(o.a)(e.filterProps)),r};var p=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(n.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},s=t("rePB"),c=t("LybE");function l(e,r){return r&&"string"==typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var m=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,a=e.themeKey,n=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=l(e.theme,a)||{};return Object(c.a)(e,t,(function(e){var r;return"function"==typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=l(i,e)||e,n&&(r=n(r))),!1===o?r:Object(s.a)({},o,r)}))};return i.propTypes={},i.filterProps=[r],i};function f(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var u=p(m({prop:"border",themeKey:"borders",transform:f}),m({prop:"borderTop",themeKey:"borders",transform:f}),m({prop:"borderRight",themeKey:"borders",transform:f}),m({prop:"borderBottom",themeKey:"borders",transform:f}),m({prop:"borderLeft",themeKey:"borders",transform:f}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"})),d=p(m({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"})),h=p(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"})),y=p(m({prop:"gridGap"}),m({prop:"gridColumnGap"}),m({prop:"gridRowGap"}),m({prop:"gridColumn"}),m({prop:"gridRow"}),m({prop:"gridAutoFlow"}),m({prop:"gridAutoColumns"}),m({prop:"gridAutoRows"}),m({prop:"gridTemplateColumns"}),m({prop:"gridTemplateRows"}),m({prop:"gridTemplateAreas"}),m({prop:"gridArea"})),b=p(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"})),g=p(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=m({prop:"boxShadow",themeKey:"shadows"});function v(e){return e<=1?"".concat(100*e,"%"):e}var j=m({prop:"width",transform:v}),O=m({prop:"maxWidth",transform:v}),k=m({prop:"minWidth",transform:v}),w=m({prop:"height",transform:v}),N=m({prop:"maxHeight",transform:v}),P=m({prop:"minHeight",transform:v}),S=(m({prop:"size",cssProperty:"width",transform:v}),m({prop:"size",cssProperty:"height",transform:v}),p(j,O,k,w,N,P,m({prop:"boxSizing"}))),D=t("+Hmc"),K=p(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"})),E=t("Ff2n"),T=t("q1tI"),C=t.n(T),I=t("iuhU"),A=t("2mql"),R=t.n(A),W=t("RD7I");function z(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var F=t("cNwE"),M=function(e){var r=function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.name,n=Object(E.a)(t,["name"]);var i,p=o,s="function"==typeof r?function(e){return{root:function(t){return r(Object(a.a)({theme:e},t))}}}:{root:r},c=Object(W.a)(s,Object(a.a)({Component:e,name:o||e.displayName,classNamePrefix:p},n));r.filterProps&&(i=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=C.a.forwardRef((function(r,t){var o=r.children,n=r.className,p=r.clone,s=r.component,l=Object(E.a)(r,["children","className","clone","component"]),m=c(r),f=Object(I.a)(m.root,n),u=l;if(i&&(u=z(u,i)),p)return C.a.cloneElement(o,Object(a.a)({className:Object(I.a)(o.props.className,f)},u));if("function"==typeof o)return o(Object(a.a)({className:f},u));var d=s||e;return C.a.createElement(d,Object(a.a)({ref:t,className:f},u),o)}));return R()(l,e),l}}(e);return function(e,t){return r(e,Object(a.a)({defaultTheme:F.a},t))}},H=i(p(u,d,h,y,b,g,x,S,D.b,K)),q=M("div")(H,{name:"MuiBox"}),B=t("ofer"),L=t("iae6"),G=t("R/WZ"),J=t("L12J"),U=Object(G.a)({root:{margin:"20px 0"},title:{maxWidth:"1200px",margin:"0 auto",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},img:{maxWidth:"1200px",width:"max-content"},disable:{display:"none"},progres:{margin:"30px auto"},content:{display:"flex",justifyContent:"center"},text:{maxWidth:"1200px",margin:"0 auto"}});function $(e){var r,t,o=e.data.markdownRemark,a=U(),n=Object(T.useState)(!1),i=n[0],p=n[1];return C.a.createElement(J.b,null,C.a.createElement(q,{className:a.root},C.a.createElement(B.a,{variant:"h3",className:a.title},o.frontmatter.title),C.a.createElement(q,{className:a.content},C.a.createElement(L.a,{color:"secondary",className:Object(I.a)((r={},r[a.progres]=!i,r[a.disable]=i,r))}),C.a.createElement("img",{src:o.frontmatter.img,alt:o.frontmatter.title,className:Object(I.a)((t={},t[a.img]=i,t[a.disable]=!i,t)),onLoad:function(){p(!0)}})),C.a.createElement("div",{className:a.text,variant:"subtitle2",dangerouslySetInnerHTML:{__html:o.html}})))}var _="2524612337"}}]);
//# sourceMappingURL=component---src-pages-post-jsx-a3f2f8e9ded8b39d09e7.js.map