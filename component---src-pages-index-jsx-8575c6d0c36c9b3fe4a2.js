(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Dtc0:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return x})),i.d(e,"query",(function(){return L}));var a=i("q1tI"),o=i.n(a),n=i("L12J"),l=i("R/WZ"),r=i("wx14"),c=i("Ff2n"),s=(i("TOwV"),i("iuhU")),m=i("H2TA"),d=a.forwardRef((function(t,e){var i=t.cellHeight,o=void 0===i?180:i,n=t.children,l=t.classes,m=t.className,d=t.cols,p=void 0===d?2:d,f=t.component,u=void 0===f?"ul":f,g=t.spacing,h=void 0===g?4:g,b=t.style,v=Object(c.a)(t,["cellHeight","children","classes","className","cols","component","spacing","style"]);return a.createElement(u,Object(r.a)({className:Object(s.a)(l.root,m),ref:e,style:Object(r.a)({margin:-h/2},b)},v),a.Children.map(n,(function(t){if(!a.isValidElement(t))return null;var e=t.props.cols||1,i=t.props.rows||1;return a.cloneElement(t,{style:Object(r.a)({width:"".concat(100/p*e,"%"),height:"auto"===o?"auto":o*i+h,padding:h/2},t.props.style)})})))})),p=Object(m.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(d),f=i("KQm4"),u=i("l3Wi"),g=i("ucBr"),h=function(t,e){var i,a,o,n;t&&t.complete&&(t.width/t.height>t.parentElement.offsetWidth/t.parentElement.offsetHeight?((i=t.classList).remove.apply(i,Object(f.a)(e.imgFullWidth.split(" "))),(a=t.classList).add.apply(a,Object(f.a)(e.imgFullHeight.split(" ")))):((o=t.classList).remove.apply(o,Object(f.a)(e.imgFullHeight.split(" "))),(n=t.classList).add.apply(n,Object(f.a)(e.imgFullWidth.split(" ")))))};var b=a.forwardRef((function(t,e){var i=t.children,o=t.classes,n=t.className,l=(t.cols,t.component),m=void 0===l?"li":l,d=(t.rows,Object(c.a)(t,["children","classes","className","cols","component","rows"])),p=a.useRef(null);return a.useEffect((function(){!function(t,e){t&&(t.complete?h(t,e):t.addEventListener("load",(function(){h(t,e)})))}(p.current,o)})),a.useEffect((function(){var t=Object(u.a)((function(){h(p.current,o)}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}),[o]),a.createElement(m,Object(r.a)({className:Object(s.a)(o.root,n),ref:e},d),a.createElement("div",{className:o.tile},a.Children.map(i,(function(t){return a.isValidElement(t)?"img"===t.type||Object(g.a)(t,["Image"])?a.cloneElement(t,{ref:p}):t:null}))))})),v=Object(m.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(b),w=a.forwardRef((function(t,e){var i=t.actionIcon,o=t.actionPosition,n=void 0===o?"right":o,l=t.classes,m=t.className,d=t.subtitle,p=t.title,f=t.titlePosition,u=void 0===f?"bottom":f,g=Object(c.a)(t,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),h=i&&n;return a.createElement("div",Object(r.a)({className:Object(s.a)(l.root,m,"top"===u?l.titlePositionTop:l.titlePositionBottom,d&&l.rootSubtitle),ref:e},g),a.createElement("div",{className:Object(s.a)(l.titleWrap,{left:l.titleWrapActionPosLeft,right:l.titleWrapActionPosRight}[h])},a.createElement("div",{className:l.title},p),d?a.createElement("div",{className:l.subtitle},d):null),i?a.createElement("div",{className:Object(s.a)(l.actionIcon,"left"===h&&l.actionIconActionPosLeft)},i):null)})),y=Object(m.a)((function(t){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:t.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:t.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:t.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:t.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(w),E=i("Wbzz"),O=Object(l.a)((function(t){return{root:{margin:"10px 0 0",display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper},gridList:{maxWidth:"1200px",height:"100%",transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"},link:{display:"flex",alignItems:"center",justifyContent:"center"}}})),j=function(t){var e=t.data.allMarkdownRemark.edges,i=O();return o.a.createElement("div",{className:i.root},o.a.createElement(p,{cellHeight:300,spacing:2,className:i.gridList},e.map((function(t){var e=t.node;return o.a.createElement(v,{key:e.frontmatter.img,cols:1,rows:1},o.a.createElement(E.a,{to:"/"+e.fields.way,className:i.link},o.a.createElement("img",{src:e.frontmatter.img,alt:e.frontmatter.title}),o.a.createElement(y,{title:e.frontmatter.title,titlePosition:"top",actionPosition:"right",className:i.titleBar})))}))))};i("MrVB");function x(t){var e=t.data;return o.a.createElement(n.a,null,o.a.createElement(j,{data:e}))}var L="4572629"},MrVB:function(t,e,i){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8575c6d0c36c9b3fe4a2.js.map