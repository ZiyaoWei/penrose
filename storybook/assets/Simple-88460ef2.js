var kt=Object.defineProperty;var c=(t,n)=>kt(t,"name",{value:n,configurable:!0});import{b as Et,R as Ct,T as $t,A as Nt,s as Rt,m as Tt,g as b,e as R,a as dt,o as I,d as _,i as ht,t as G,f as P,h as x,j,r as et,_ as Mt,k as J,n as zt,p as nt,q as Vt,u as It,v as rt,w as Bt,x as Dt,y as Ft,B as Ot,C as Xt,D as Lt,E as qt,c as Yt,F as _t,G as jt,H as Wt,I as Ht,J as Gt,K as Pt}from"./svg-17f153a1.js";import{R as ot,j as B,a as st}from"./jsx-runtime-dc251ea5.js";const Zt=c(()=>{const t=Et();Ct(t);const n=new $t({packages:Nt,macros:{textsc:["\\style{font-variant-caps: small-caps}{\\text{#1}}",1]},inlineMath:[["$","$"],["\\(","\\)"]],processEscapes:!0,formatError:(s,i)=>{throw Error(i.message)}}),r=new Rt.SVG({fontCache:"none"}),e=Tt.mathjax.document("",{InputJax:n,OutputJax:r});return c(s=>{try{const i=e.convert(s,{});return I(i.firstChild)}catch(i){return R(i.message)}},"convert")},"mathjaxInit"),Ut=c(t=>{const n=/^(\d+(?:\.\d+)?)\s*(px|in|cm|mm)$/,r=t.match(n);if(!r)return;const e=parseFloat(r[1]),o=r[2];return{number:e,unit:o}},"parseFontSize"),Kt=c((t,n)=>({px:1,in:96,cm:37.79527559055118,mm:3.7795275590551185})[n]*t,"toPxFontSize"),Jt=c(async(t,n)=>new Promise(r=>{const e=b(t.string,""),o=b(t.fontSize,"");(o===""||e==="")&&r(R(`Label 'string' and 'fontSize' must be non-empty and non-optimized for ${t.name.contents}`));const s=n(e);if(s.isErr()){r(R(`MathJax could not render $${e}$: ${s.error}`));return}const i=s.value,a=i.getAttribute("viewBox");if(a===null){r(R(`No ViewBox found for MathJax output $${e}$`));return}const l=a.split(" "),d=parseFloat(l[2])/1e3,u=parseFloat(l[3])/1e3,h=-parseFloat(i.style.verticalAlign),g=parseFloat(i.getAttribute("height")),m=Ut(o);if(m){const{number:f,unit:w}=m,y=c(N=>N*Kt(f,w),"em_to_px"),v=y(d),A=y(u),p=h/g*A,$=A-p;r(I({body:i,width:v,height:A,descent:p,ascent:$}))}else{r(R('Invalid font size format. Only "px", "in", "cm", and "mm" units are supported.'));return}}),"tex2svg"),z=c(t=>({tag:"FloatV",contents:t}),"floatV"),it=c((t,n,r,e)=>({tag:"TextData",width:z(t),height:z(n),descent:z(r),ascent:z(e)}),"textData"),Qt=c((t,n,r,e,o)=>({tag:"EquationData",width:z(t),height:z(n),ascent:z(r),descent:z(e),rendered:o}),"equationData"),gt=c(t=>{const n=b(t.fontFamily),r=b(t.fontSize),e=b(t.fontStretch),o=b(t.fontStyle),s=b(t.fontVariant),i=b(t.fontWeight),a=b(t.lineHeight),l=`${e} ${o} ${s} ${i} ${r} ${n}`;return a!==""?l.concat(`/${a}`):l},"toFontRule"),mt=c(async(t,n)=>{const r=new Map;for(const e of t)if(e.shapeType==="Equation"){const o=b(e.name),s=await Jt(e,n);if(s.isErr())return R({errorType:"SubstanceError",tag:"Fatal",message:s.error});const{body:i,width:a,height:l,ascent:d,descent:u}=s.value,h=Qt(a===1/0?0:a,l===1/0?0:l,d,u,i);r.set(o,h)}else if(e.shapeType==="Text"){const o=b(e.name);let s;const i=te(b(e.string),gt(e));i.width&&i.height?s=it(i.width,i.height,i.actualDescent,i.actualAscent):s=it(0,0,0,0),r.set(o,s)}else if(e.shapeType==="Group"){const o=dt(e.shapes),s=await mt(o,n);if(s.isErr())return s;for(const[i,a]of s.value.entries())r.set(i,a)}return I(r)},"collectLabels");function te(t,n){const r=document.createElement("canvas"),e=r.getContext("2d");e.textBaseline="alphabetic",e.font=n;const o=e.measureText(t);return r.remove(),{width:Math.abs(o.actualBoundingBoxLeft)+Math.abs(o.actualBoundingBoxRight),height:Math.abs(o.actualBoundingBoxAscent)+Math.abs(o.actualBoundingBoxDescent),actualDescent:Math.abs(o.actualBoundingBoxDescent),actualAscent:Math.abs(o.actualBoundingBoxAscent)}}c(te,"measureText");const M=c((t,n,r,e)=>{if(typeof r.contents!="number"&&r.contents.tag==="Var"){const{index:o,meta:s}=_(n.get(r.contents),"missing input");s.init.tag==="Pending"&&(t[o]=e.contents)}},"setPendingProperty"),pt=c((t,n,r,e)=>{for(const o of t)if(o.shapeType==="Group"){const s=dt(o.shapes);pt(s,n,r,e)}else if(o.shapeType==="Equation"){const s=_(r.get(o.name.contents),"missing label");if(s.tag!=="EquationData")throw Error(`for ${o.shapeType} ${o.name.contents} got unexpected ${s.tag}`);M(n,e,o.width,s.width),M(n,e,o.height,s.height),M(n,e,o.ascent,s.ascent),M(n,e,o.descent,s.descent)}else if(o.shapeType==="Text"){const s=_(r.get(o.name.contents),"missing label");if(s.tag!=="TextData")throw Error(`for ${o.shapeType} ${o.name.contents} got unexpected ${s.tag}`);M(n,e,o.width,s.width),M(n,e,o.height,s.height),M(n,e,o.ascent,s.ascent),M(n,e,o.descent,s.descent)}},"insertPendingHelper"),ft=c(t=>{const n=[...t.varyingValues],r=new Map(t.inputs.map(({handle:e,meta:o},s)=>[e,{index:s,meta:o}]));return pt(t.shapes,n,t.labelCache,r),{...t,varyingValues:n}},"insertPending"),at={accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",panose1:"panose-1",paintOrder:"paint-order",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},E=c((t,n,r)=>{const e=["name","ensureOnCanvas"],o=new Set(r.concat(e));for(const[s,i]of t.passthrough)if(!(i.tag==="StrV"&&i.contents===""||o.has(s)))if(ht(s,at)){const a=at[s];n.hasAttribute(a)||n.setAttribute(a,i.contents.toString())}else if(s==="style"&&i.contents!==""){const a=n.getAttribute(s);a===null?n.setAttribute(s,i.contents.toString()):n.setAttribute(s,`${a}${i.contents.toString()}`)}else n.hasAttribute(s)||n.setAttribute(s,i.contents.toString())},"attrAutoFillSvg"),T=c((t,n)=>{const r=t.fillColor,e=G(r.contents);return n.setAttribute("fill",P(r.contents)),r.contents.tag!=="NONE"&&n.setAttribute("fill-opacity",e.toString()),["fillColor"]},"attrFill"),wt=c((t,n,r)=>{const e=t.center,[o,s]=x([e.contents[0],e.contents[1]],n);return r.setAttribute("cx",o.toString()),r.setAttribute("cy",s.toString()),["center"]},"attrCenter"),St=c((t,n)=>{let r=t.scale.contents;r=r||1;let e=n.getAttribute("transform");return e=e===null?`scale(${r})`:e+`scale{${r}}`,n.setAttribute("transform",e),["scale"]},"attrScale"),vt=c((t,n,r)=>{const e=t.center,[o,s]=x([e.contents[0],e.contents[1]],n),i=t.width,a=t.height;let l=r.getAttribute("transform");return l=l===null?`translate(${o-i.contents/2}, ${s-a.contents/2})`:l+`translate(${o-i.contents/2}, ${s-a.contents/2})`,r.setAttribute("transform",l),["center","width","height"]},"attrTransformCoords"),ee=c((t,n,r)=>{const e=t.center,[o,s]=x([e.contents[0],e.contents[1]],n),i=t.width,a=t.height;return r.setAttribute("x",(o-i.contents/2).toString()),r.setAttribute("y",(s-a.contents/2).toString()),["center","width","height"]},"attrXY"),Z=c((t,n,r)=>{t.width,t.height;const e=t.center,o=t.rotation.contents,[s,i]=x([e.contents[0],e.contents[1]],n);let a=r.getAttribute("transform");return a=a===null?`rotate(${o}, ${s}, ${i})`:a+`rotate(${o}, ${s}, ${i})`,r.setAttribute("transform",a),["rotation","center","width","height"]},"attrRotation"),F=c((t,n)=>{const r=t.width,e=t.height;return n.setAttribute("width",r.contents.toString()),n.setAttribute("height",e.contents.toString()),["width","height"]},"attrWH"),ne=c((t,n)=>{const r=t.cornerRadius;return n.setAttribute("rx",r.contents.toString()),["cornerRadius"]},"attrCornerRadius"),re=c((t,n)=>{const r=t.string,e=document.createTextNode(r.contents.toString());return n.appendChild(e),["string"]},"attrString"),oe="7,5",V=c((t,n)=>{const r=[],e=t.strokeColor,o=G(e.contents),s=t.strokeWidth.contents;return n.setAttribute("stroke",P(e.contents)),r.push("strokeColor","strokeWidth"),e.contents.tag!=="NONE"&&(n.setAttribute("stroke-opacity",o.toString()),n.setAttribute("stroke-width",s.toString()),"strokeDasharray"in t&&t.strokeDasharray.contents!==""?(n.setAttribute("stroke-dasharray",t.strokeDasharray.contents),r.push("strokeDasharray")):"strokeStyle"in t&&t.strokeStyle.contents==="dashed"&&(n.setAttribute("stroke-dasharray",oe.toString()),r.push("strokeDasharray","strokeStyle")),"strokeLinecap"in t&&t.strokeLinecap.contents!==""&&(n.setAttribute("stroke-linecap",t.strokeLinecap.contents),r.push("strokeLinecap"))),r},"attrStroke"),C=c((t,n)=>{const r=t.name,e=document.createElementNS("http://www.w3.org/2000/svg","title");return e.textContent=r.contents,n.appendChild(e),["name"]},"attrTitle"),se=c((t,n)=>{const r=gt(t),e=n.getAttribute("style");return n.setAttribute("style",e?`${e}; font: ${r};`:`font: ${r};`),["fontFamily","fontSize","fontStretch","fontStyle","fontVariant","fontWeight","lineHeigh"]},"attrFont"),At=c((t,n,r)=>{const o=t.points.contents.map(s=>x([s[0],s[1]],n));return r.setAttribute("points",o.toString()),["points"]},"attrPolyPoints"),ie=c((t,{canvasSize:n})=>{const r=document.createElementNS("http://www.w3.org/2000/svg","circle"),e=[];return e.push(...T(t,r)),e.push(...wt(t,n,r)),e.push(...V(t,r)),e.push(...C(t,r)),r.setAttribute("r",t.r.contents.toString()),e.push("r"),E(t,r,e),r},"RenderCircle"),ae=c((t,{canvasSize:n})=>{const r=document.createElementNS("http://www.w3.org/2000/svg","ellipse"),e=[];return e.push(...T(t,r)),e.push(...wt(t,n,r)),e.push(...V(t,r)),e.push(...C(t,r)),r.setAttribute("rx",t.rx.contents.toString()),e.push("rx"),r.setAttribute("ry",t.ry.contents.toString()),e.push("ry"),E(t,r,e),r},"RenderEllipse"),U=c((t,[n,r],e)=>{const o=document.createElementNS("http://www.w3.org/2000/svg","text");return o.textContent=t,T(e,o),F(e,o),o.setAttribute("x",`${n}`),o.setAttribute("y",`${r}`),o.setAttribute("alignment-baseline","alphabetic"),o.setAttribute("dominant-baseline","alphabetic"),o.setAttribute("text-anchor","middle"),o},"placeholderString"),ce=c((t,n)=>{const{canvasSize:r,labels:e,texLabels:o}=n,{center:s}=t,[i,a]=x([s.contents[0],s.contents[1]],r);if(o){const h=a+t.height.contents/2-t.descent.contents;let g=U(`$${b(t.string)}$`,[i,h],t);for(const[m,f]of t.passthrough)m==="texContourColor"&&f.contents!==""&&(g=U(`\\contour{${f.contents}}{$${b(t.string)}$}`,[i,h],t));return g}const l=document.createElementNS("http://www.w3.org/2000/svg","g"),d=[];d.push(...Z(t,r,l)),d.push(...vt(t,r,l)),d.push(...C(t,l));const u=e.get(b(t.name));if(u&&u.tag==="EquationData"){const h=u.rendered.cloneNode(!0),g=h.getElementsByTagName("g")[0];d.push(...T(t,g)),d.push(...F(t,h)),g.setAttribute("stroke","none"),g.setAttribute("stroke-width","0");const m=t.fontSize;return h.setAttribute("style",`font-size: ${m.contents}`),l.appendChild(h),E(t,l,d),l}else return U(b(t.string),[i,a],t)},"RenderEquation"),le=`<?xml version="1.0" encoding="UTF-8"?>
<svg id="uuid-14337243-9689-41d7-b7ce-2960e3a1016a" data-name="uuid-95bf6e06-fb2b-43f6-8f44-0afdfcaaf242" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <polygon points="132.5 2.1 175.7 45.3 175.7 197.9 24.3 197.9 24.3 2.1 132.5 2.1" style="fill: #e0e0e0; stroke: #7f7f7f; stroke-width: 4.039px;"/>
  <g>
    <path d="m157.4,77.75l-46.2-33.4-42.1,30.4m42.2-46.9l-46.4,33.5,15.7,49.1m38.2,0h-51.4l-18-54.1m7.8,66.9h57.1l17.1-48.4m-7.3,62l17.9-54.1-42.2-30.9m38,85H61.6l-23.4-72.3,61.5-44.9,62.1,44.9-24,72.3Z" style="fill: none; stroke: #ffb6b6; stroke-width: 4.034px;"/>
    <path d="m77,66.3c0-3.4.5-6.5,1.4-9.4s2.3-5.3,4.2-7.3c1.8-2,4.2-3.6,7-4.8s6.1-1.7,9.7-1.7c8,0,13.9,2,17.9,5.9,3.9,3.9,5.9,9.2,5.9,15.8,0,3.2-.5,6.1-1.5,8.8s-2.9,5.6-5.6,8.8l-4.5,5.1c-2,2.2-3.4,4.2-4.2,6-.9,1.8-1.3,4.1-1.3,7h0c0,.9-.8,1.7-1.7,1.7h-10.7c-.9,0-1.7-.8-1.7-1.7v-2.7c0-3.8.5-6.9,1.6-9.5s2.9-5.3,5.4-8.2l4.3-4.8c1.6-1.7,2.7-3.6,3.3-5.6.6-2,1-4.1,1-6.4,0-2.9-.6-5.2-1.9-6.9-1.3-1.8-3.2-2.6-5.7-2.6-2.9,0-4.9,1.1-6.1,3.4-1.2,2.3-1.9,5.3-1.9,9v1.1c0,.9-.8,1.7-1.7,1.7h-11.6c-.9,0-1.7-.8-1.7-1.7v-1h.1Zm28,58.1h-12.2c-.9,0-1.7-.8-1.7-1.7v-11.5c0-.9.8-1.7,1.7-1.7h12.2c.9,0,1.7.8,1.7,1.7v11.5c0,1-.8,1.7-1.7,1.7Z" style="fill: red;"/>
  </g>
  <g style="isolation: isolate;">
    <g style="isolation: isolate;">
      <path d="m58.52,179.451h-8.066v-9.533h8.066v9.533Z"/>
      <path d="m70.802,169.795c0,1.427.376,2.577,1.131,3.453.753.876,1.843,1.313,3.269,1.313,1.303,0,2.342-.325,3.117-.978.773-.651,1.161-1.629,1.161-2.934,0-1.059-.306-1.863-.917-2.414-.611-.55-1.324-.987-2.139-1.313l-5.928-2.139c-2.322-.814-4.074-1.965-5.255-3.453-1.182-1.486-1.772-3.392-1.772-5.713,0-1.345.224-2.617.672-3.819.448-1.201,1.161-2.251,2.139-3.147.978-.896,2.23-1.609,3.758-2.139s3.371-.795,5.53-.795c3.829,0,6.661.815,8.494,2.444,1.833,1.63,2.75,3.933,2.75,6.905v1.345h-7.578c0-1.711-.275-2.964-.825-3.758-.55-.795-1.519-1.192-2.903-1.192-1.06,0-1.986.296-2.781.887-.794.591-1.191,1.477-1.191,2.658,0,.815.254,1.549.764,2.199.509.652,1.477,1.202,2.903,1.65l5.072,1.711c2.647.896,4.522,2.068,5.622,3.514,1.1,1.447,1.65,3.413,1.65,5.897,0,1.752-.306,3.27-.917,4.553-.611,1.283-1.457,2.353-2.536,3.208-1.08.855-2.363,1.467-3.85,1.833-1.488.367-3.127.55-4.919.55-2.363,0-4.329-.224-5.897-.672-1.569-.448-2.811-1.12-3.728-2.017-.917-.896-1.558-1.986-1.925-3.27s-.55-2.719-.55-4.308v-1.161h7.578v1.1Z"/>
      <path d="m115.778,146.574l-8.25,32.877h-9.778l-8.494-32.877h8.8l4.705,23.527h.123l4.461-23.527h8.434Z"/>
      <path d="m143.52,177.8c0,4.237-1.049,7.415-3.146,9.533-2.099,2.118-5.612,3.178-10.541,3.178-3.586,0-6.347-.764-8.28-2.291-1.936-1.528-2.903-3.697-2.903-6.509h8.066c0,1.06.428,1.895,1.283,2.506.407.284.846.509,1.314.672.468.162.967.245,1.497.245,1.711,0,2.912-.551,3.605-1.65.692-1.1,1.038-2.466,1.038-4.095v-4.338h-.122c-.855,1.222-1.904,2.199-3.146,2.933-1.243.733-2.536,1.101-3.881,1.101-3.341,0-5.856-1.273-7.547-3.819-1.691-2.546-2.536-6.814-2.536-12.803,0-1.914.112-3.87.336-5.866s.692-3.799,1.406-5.408c.712-1.609,1.751-2.923,3.116-3.941,1.364-1.019,3.188-1.528,5.469-1.528,1.182,0,2.403.327,3.667.978,1.263.652,2.301,1.834,3.116,3.545h.122v-3.667h8.066v31.227Zm-16.713-10.511c.102,1.02.306,1.926.611,2.72.306.795.733,1.427,1.283,1.895.55.469,1.272.703,2.169.703s1.64-.234,2.23-.703c.591-.468,1.06-1.109,1.406-1.925.345-.814.59-1.803.732-2.964s.214-2.434.214-3.819c0-3.992-.315-6.823-.946-8.494-.633-1.67-1.783-2.506-3.453-2.506-.938,0-1.691.205-2.261.611-.571.408-1.02,1.069-1.345,1.986-.326.916-.54,2.139-.642,3.666-.103,1.528-.152,3.392-.152,5.592,0,1.141.05,2.221.152,3.238Z"/>
    </g>
  </g>
  <polygon points="175.7 45.3 132.5 45.3 132.5 2.1 175.7 45.3" style="fill: #e0e0e0; stroke: #7f7f7f; stroke-linecap: round; stroke-linejoin: round; stroke-width: 4.039px;"/>
  <rect width="200" height="200" style="fill: none;"/>
</svg>`;let ue=1;const de=c((t,n)=>{const r="--inject-",e={clipPath:["clip-path"],"color-profile":null,cursor:null,filter:null,linearGradient:["fill","stroke"],marker:["marker","marker-end","marker-mid","marker-start"],mask:null,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},o=r+ue++,s=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,i=t.querySelectorAll("[id]");let a;const l=n?new Set:void 0,d=new Set,u=[];let h=!1,g,m;if(i.length){for(g=0;g<i.length;g++){const S=i[g].localName;ht(S,e)&&d.add(S)}d.forEach(S=>{(e[S]||[S]).forEach(function(p){u.indexOf(p)<0&&u.push(p)})}),u.length&&u.push("style");const f=t.getElementsByTagName("*");let w=t,y,v,A;for(g=-1;w!==null;){if(w.localName==="style")v=w.textContent,A=v&&v.replace(s,function(S,p){return l&&l.add(p),"url(#"+p+o+")"}),A!==v&&(w.textContent=A);else if(w.hasAttributes()){for(m=0;m<u.length;m++)y=u[m],v=w.getAttribute(y),A=v&&v.replace(s,function(S,p){return l&&l.add(p),"url(#"+p+o+")"}),A&&A!==v&&w.setAttribute(y,A);for(const S of["xlink:href","href"]){let p=w.getAttribute(S);p&&/^\s*#/.test(p)&&(p=p.trim(),w.setAttribute(S,p+o),l&&l.add(p.substring(1)))}}w=f.item(++g)}for(g=0;g<i.length;g++)a=i[g],(!l||l.has(a.id))&&(a.id+=o,h=!0)}return h},"makeIdsUnique"),he=c(async(t,{canvasSize:n,pathResolver:r})=>{const e=document.createElementNS("http://www.w3.org/2000/svg","g"),o=[],s=t.href.contents;let i=await r(s);i===void 0&&(console.error(`Could not resolve image path ${s}`),i=le),o.push("href"),e.innerHTML=i;const a=e.querySelector("svg");return de(e,!1),o.push(...F(t,a)),o.push(...Z(t,n,e)),o.push(...vt(t,n,e)),o.push(...C(t,e)),a.setAttribute("preserveAspectRatio",t.preserveAspectRatio.contents),o.push("preserveAspectRatio"),E(t,e,o),e},"RenderImage"),W=c((t,n,r,e,o,s)=>{const i=document.createElementNS("http://www.w3.org/2000/svg","marker");i.setAttribute("id",t),i.setAttribute("markerUnits","strokeWidth"),i.setAttribute("markerWidth",et(e.width*o).toString()),i.setAttribute("markerHeight",et(e.height*o).toString()),i.setAttribute("viewBox",e.viewbox),i.setAttribute("refX",e.refX.toString()),i.setAttribute("refY",e.refY.toString()),s?i.setAttribute("orient","auto"):i.setAttribute("orient","auto-start-reverse");const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",e.path),e.fillKind==="stroke"?(a.setAttribute("fill","none"),i.setAttribute("stroke",n),i.setAttribute("stroke-opacity",r.toString())):(a.setAttribute("fill",n),a.setAttribute("fill-opacity",r.toString())),e.style&&Object.entries(e.style).forEach(([l,d])=>{a.setAttribute(l,d)}),i.appendChild(a),i},"arrowHead"),ge=c((t,n,r)=>{const e=[],[o,s]=[t.start.contents[0],t.start.contents[1]],[i,a]=[t.end.contents[0],t.end.contents[1]],l=t.startArrowheadSize.contents,d=t.endArrowheadSize.contents,u=t.strokeWidth.contents;e.push("start","end","startArrowhead","endArrowhead","startArrowheadSize","endArrowheadSize","strokeWidth");const h=Math.sqrt((o-i)**2+(s-a)**2);if(h===0)return[[[o,s],[i,a]],e];let g,m;if(n){const v=(t.flipStartArrowhead.contents?n.refX:n.width-n.refX)*l*u,A=v/h*(o-i),S=v/h*(s-a);[g,m]=[o-A,s-S]}else[g,m]=[o,s];let f,w;if(r){const y=(r.width-r.refX)*d*u;[f,w]=[i-y/h*(i-o),a-y/h*(a-s)]}else[f,w]=[i,a];return[[[g,m],[f,w]],e]},"makeRoomForArrows"),me=c((t,{canvasSize:n,namespace:r,variation:e})=>{const o=j(t.startArrowhead.contents),s=j(t.endArrowhead.contents),[[[i,a],[l,d]],u]=ge(t,o,s),h=P(t.strokeColor.contents),g=G(t.strokeColor.contents),m=document.createElementNS("http://www.w3.org/2000/svg","g"),f=document.createElementNS("http://www.w3.org/2000/svg","line"),[w,y]=x([i,a],n),[v,A]=x([l,d],n);f.setAttribute("x1",w.toString()),f.setAttribute("y1",y.toString()),f.setAttribute("x2",v.toString()),f.setAttribute("y2",A.toString());const S=`${r}-${e}-${t.name.contents}`,p=S+"-startArrowId",$=S+"-endArrowId";if(o){const N=t.startArrowheadSize.contents,D=t.flipStartArrowhead.contents;m.appendChild(W(p,h,g,o,N,D))}if(s){const N=t.endArrowheadSize.contents;m.appendChild(W($,h,g,s,N,!1))}return u.push("startArrowhead","flipStartArrowhead","endArrowhead","startArrowheadSize","endArrowheadSize"),u.push(...V(t,f)),o&&(f.setAttribute("marker-start",`url(#${p})`),u.push("startArrowhead")),s&&(f.setAttribute("marker-end",`url(#${$})`),u.push("endArrowhead")),m.appendChild(f),u.push(...C(t,m)),E(t,m,u),m},"RenderLine"),pe=c((t,n)=>t.map(r=>{const{cmd:e,contents:o}=r;if(o.length===0&&e!=="Z")return console.error("WARNING: empty path"),"";const s=Mt.flatten(o.map(i=>{switch(i.tag){case"CoordV":return x([i.contents[0],i.contents[1]],n);case"ValueV":return i.contents}})).join(" ");return`${e} ${s}`}).join(" "),"toPathString"),fe=c(t=>{const n=document.createElementNS("http://www.w3.org/2000/svg","filter");return n.setAttribute("id",t),n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","200%"),n.setAttribute("height","200%"),n.innerHTML=`
    <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
       <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
       <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
       <feComponentTransfer>
         <feFuncA type="linear" slope="0.5" />
       </feComponentTransfer>
       <feMerge>
         <feMergeNode />
         <feMergeNode in="SourceGraphic" />
       </feMerge>
    `,n},"Shadow"),we=c((t,{canvasSize:n})=>{const r=t.name.contents+"-startArrowId",e=t.name.contents+"-endArrowId",o=t.name.contents+"-shadow",s=document.createElementNS("http://www.w3.org/2000/svg","g"),i=P(t.strokeColor.contents),a=G(t.strokeColor.contents),l=[],d=j(t.startArrowhead.contents),u=j(t.endArrowhead.contents);if(d){const g=t.name.contents+"-startArrowId",m=t.startArrowheadSize.contents,f=t.flipStartArrowhead.contents;s.appendChild(W(g,i,a,d,m,f))}if(u){const g=t.name.contents+"-endArrowId",m=t.endArrowheadSize.contents;s.appendChild(W(g,i,a,u,m,!1))}l.push("name","startArrowhead","flipStartArrowhead","endArrowhead"),s.appendChild(fe(o));const h=document.createElementNS("http://www.w3.org/2000/svg","path");return l.push(...T(t,h)),l.push(...V(t,h)),h.setAttribute("d",pe(t.d.contents,n)),l.push("d"),d&&(h.setAttribute("marker-start",`url(#${r})`),l.push("startArrowhead")),u&&(h.setAttribute("marker-end",`url(#${e})`),l.push("endArrowhead")),s.appendChild(h),l.push(...C(t,s)),E(t,s,l),s},"RenderPath"),Se=c((t,{canvasSize:n})=>{const r=document.createElementNS("http://www.w3.org/2000/svg","polygon"),e=[];return e.push(...T(t,r)),e.push(...V(t,r)),e.push(...C(t,r)),e.push(...St(t,r)),e.push(...At(t,n,r)),E(t,r,e),r},"RenderPolygon"),ve=c((t,{canvasSize:n})=>{const r=document.createElementNS("http://www.w3.org/2000/svg","polyline"),e=[];return e.push(...T(t,r)),e.push(...V(t,r)),e.push(...C(t,r)),e.push(...St(t,r)),e.push(...At(t,n,r)),E(t,r,e),r},"RenderPolyline"),Ae=c((t,{canvasSize:n})=>{const r=document.createElementNS("http://www.w3.org/2000/svg","rect"),e=[];return e.push(...ee(t,n,r)),e.push(...F(t,r)),e.push(...T(t,r)),e.push(...V(t,r)),e.push(...C(t,r)),e.push(...ne(t,r)),e.push(...Z(t,n,r)),E(t,r,e),r},"RenderRectangle"),ye=c((t,{canvasSize:n,labels:r})=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text"),o=[];o.push("x","y"),o.push(...T(t,e)),o.push(...V(t,e)),o.push(...C(t,e)),o.push(...re(t,e)),o.push(...Z(t,n,e)),o.push(...se(t,e));const s=t.name,i=r.get(s.contents),a=t.center,[l,d]=x([a.contents[0],a.contents[1]],n);if(i&&i.tag==="TextData"){const u=i.descent.contents,h=i.height.contents,g=d+(h/2-u);e.setAttribute("x",l.toString()),e.setAttribute("y",g.toString()),o.push(...F(t,e))}else e.setAttribute("x",l.toString()),e.setAttribute("y",d.toString());return e.setAttribute("font-size-adjust",t.fontSizeAdjust.contents),e.setAttribute("alignment-baseline",t.alignmentBaseline.contents),e.setAttribute("dominant-baseline",t.dominantBaseline.contents),e.setAttribute("ascent",t.ascent.contents.toString()),e.setAttribute("descent",t.descent.contents.toString()),e.setAttribute("text-anchor",t.textAnchor.contents.toString()),e.setAttribute("visibility",t.visibility.contents),o.push("fontSizeAdjust","alignmentBaseline","dominantBaseline","ascent","descent","textAnchor","visibility"),E(t,e,o),e},"RenderText"),be=c((t,n,r,e)=>{const o=[...t.varyingValues];return{...t,params:J(o.length),varyingValues:o}},"dragUpdate"),ct=c(({clientX:t,clientY:n},r)=>{const e=r.getScreenCTM();return e!==null?{x:(t-e.e)/e.a,y:(n-e.f)/e.d}:{x:0,y:0}},"getPosition"),xe=c(async(t,n,r,e)=>{const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.2"),o.setAttribute("viewBox",`0 0 ${t.canvas.width} ${t.canvas.height}`);const s=c((a,l,d)=>{n(be(t))},"onDrag"),i=t.computeShapes(t.varyingValues);return await yt(i,o,{labels:t.labelCache,canvasSize:t.canvas.size,variation:t.variation,namespace:e,texLabels:!1,pathResolver:r},{updateState:n,onDrag:s,parentSVG:o}),o},"toInteractiveSVG"),ke=c(async(t,n,r,e=!1)=>{const{varyingValues:o,computeShapes:s,labelCache:i,canvas:a,variation:l}=t,d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("version","1.2"),d.setAttribute("xmlns","http://www.w3.org/2000/svg"),d.setAttribute("viewBox",`0 0 ${a.width} ${a.height}`);const u=s(o),h=u.map(k=>zt(k)),g=nt(h.map(k=>Vt(k))),m=nt(h.map(k=>It(k))),f=rt(h.map(k=>Bt(k))),w=rt(h.map(k=>Dt(k))),y=[g,m,f,w],[v,A,S,p]=(await Ft(Ot(y)))(k=>k.val).secondary,[$,N]=x([v,A],[a.width,a.height]),[D,O]=x([S,p],[a.width,a.height]),X=[$,O],L=[D-$,N-O];d.setAttribute("penrose","0");const q=document.createElementNS("https://penrose.cs.cmu.edu/metadata","penrose"),tt=document.createElementNS("https://penrose.cs.cmu.edu/croppedViewBox","croppedViewBox");return tt.insertAdjacentText("afterbegin",`${X[0]} ${X[1]} ${L[0]} ${L[1]}`),q.appendChild(tt),d.appendChild(q),await yt(u,d,{labels:i,canvasSize:a.size,variation:l,namespace:r,texLabels:e,pathResolver:n},void 0),d},"toSVG"),Ee=c(async(t,n,r)=>{const e=document.createElementNS("http://www.w3.org/2000/svg","g"),o=t.clipPath.contents;let s,i;if(o.tag==="Clip"){const l=o.contents;s=l.name.contents;const d=await Y(l,n,r),u=document.createElementNS("http://www.w3.org/2000/svg","clipPath");i=n.namespace+s+"-clip",u.setAttribute("id",i),u.appendChild(d),e.appendChild(u)}const a=t.shapes.contents;for(const l of a){const d=l.name.contents;if(o.tag==="Clip"){if(d!==s){const u=await Y(l,n,r),h=document.createElementNS("http://www.w3.org/2000/svg","g");h.appendChild(u),h.setAttribute("clip-path",`url(#${i})`),e.appendChild(h)}}else{const u=await Y(l,n,r);e.appendChild(u)}}return E(t,e,[...C(t,e),"shapes","clipPath"]),e},"RenderGroup"),Ce=c(async(t,n)=>{switch(t.shapeType){case"Circle":return ie(t,n);case"Ellipse":return ae(t,n);case"Equation":return ce(t,n);case"Image":return he(t,n);case"Line":return me(t,n);case"Path":return we(t,n);case"Polygon":return Se(t,n);case"Polyline":return ve(t,n);case"Rectangle":return Ae(t,n);case"Text":return ye(t,n)}},"RenderShapeSvg"),Y=c(async(t,n,r)=>{if(t.shapeType==="Group")return await Ee(t,n,r);{const e=await Ce(t,n);if(r){const o=document.createElementNS("http://www.w3.org/2000/svg","g");Xt(t)?o.setAttribute("pointer-events","visibleStroke"):Lt(t)?o.setAttribute("pointer-events","bounding-box"):o.setAttribute("pointer-events","auto"),o.appendChild(e);const s=c(i=>{const{clientX:a,clientY:l}=i,{x:d,y:u}=ct({clientX:a,clientY:l},r.parentSVG),{width:h,height:g,x:m,y:f}=i.target.getBBox({stroke:!0}),w=d-m,y=n.canvasSize[0]-h+(d-m),v=u-f,A=n.canvasSize[1]-g+(u-f);o.setAttribute("opacity","0.5");let S=0,p=0;const $=c(D=>{const{x:O,y:X}=ct(D,r.parentSVG),L=lt(O,w,y),q=lt(X,v,A);S=L-d,p=u-q,o.setAttribute("transform",`translate(${S},${-p})`)},"onMouseMove"),N=c(()=>{o.setAttribute("opacity","1"),document.removeEventListener("mouseup",N),document.removeEventListener("mousemove",$),r.onDrag(t.name.contents,S,p)},"onMouseUp");document.addEventListener("mouseup",N),document.addEventListener("mousemove",$)},"onMouseDown");return o.addEventListener("mousedown",s),o}else return e}},"RenderShape"),yt=c(async(t,n,r,e)=>{for(const o of t){const s=await Y(o,r,e);n.appendChild(s)}},"RenderShapes"),lt=c((t,n,r)=>Math.min(Math.max(t,n),r),"clamp"),$e=c(t=>{const n=qt(t.variation);return ft({...t,varyingValues:t.inputs.map(({meta:r})=>r.init.tag==="Sampled"?r.init.sampler(n):r.init.pending),currentStageIndex:0,params:J(t.varyingValues.length)})},"resample"),bt=c((t,n)=>{const{constraintSets:r,optStages:e,currentStageIndex:o}=t,s=e[o],i=_(r.get(s),"missing stage"),a=new Float64Array(t.varyingValues),l=Ht((d,u,h)=>t.gradient(i,d,u,h).phi,a,t.params,n.until);return l.optStatus==="Error"?R({errorType:"RuntimeError",...Gt("",t)}):I({...t,varyingValues:Array.from(a),params:l})},"step"),Ne=c((t,n=1e4)=>{let r=0;const e=bt(t,{until:()=>r++>=n});if(e.isErr())return e;{const o=e.value;if(H(o)&&!Q(o)){const s=xt(o);return I(s)}else return e}},"stepTimes"),xt=c(t=>Q(t)?t:{...t,currentStageIndex:t.currentStageIndex+1,params:J(t.varyingValues.length)},"nextStage"),Re=c(t=>{let n=t;for(;!H(n)||!Q(n);){H(n)&&(n=xt(n));const r=bt(n,{until:()=>!1});if(r.isOk())n=r.value;else return r}return I(n)},"optimize"),Te=c(async t=>{const n=Yt(t.domain),r=_t(o=>jt(t.substance,o),n),e=r.isErr()?R(r.error):await Wt(t.variation,t.style,t.excludeWarnings??[],...r.value);if(e.isErr())return e;{const o=e.value,s=Zt(),i=await mt(o.shapes,s);return i.isErr()?R(i.error):I(ft({...o,labelCache:i.value}))}},"compile"),H=c(t=>t.params.optStatus==="EPConverged","isOptimized"),Q=c(t=>t.currentStageIndex===t.optStages.length-1,"finalStage");async function ut(t){const n=await fetch(t);if(!n.ok){console.error(`could not fetch ${t}`);return}return await n.text()}c(ut,"fetchResolver");class K extends ot.Component{canvasRef=ot.createRef();penroseState=void 0;timerID=void 0;constructor(n){super(n),this.state={error:void 0}}compile=async()=>{this.penroseState=void 0,this.setState({error:void 0});const n=await Te(this.props);n.isOk()?(this.penroseState=n.value,this.setState({error:void 0})):this.setState({error:n.error})};converge=async()=>{if(this.penroseState){const n=Re(this.penroseState);n.isOk()?this.penroseState=n.value:this.setState({error:n.error})}};tick=()=>{if(this.props.animate&&this.penroseState&&!H(this.penroseState)){const n=Ne(this.penroseState,this.props.stepSize??1);n.isErr()?this.setState({error:n.error}):this.penroseState=n.value,this.renderCanvas()}};componentDidMount=async()=>{await this.compile(),this.props.animate||await this.converge(),this.renderCanvas(),this.timerID=window.setInterval(()=>this.tick(),1e3/60)};componentDidUpdate=async n=>{if(this.props.domain!==n.domain||this.props.substance!==n.substance||this.props.style!==n.style){await this.compile(),this.props.animate||await this.converge(),this.renderCanvas();return}if(this.penroseState&&!this.state.error){if(this.props.variation!==n.variation||this.props.animate!==n.animate){this.penroseState.variation=this.props.variation,this.penroseState=$e(this.penroseState),this.props.animate||await this.converge(),this.renderCanvas();return}else if(this.props.interactive!==n.interactive){this.renderCanvas();return}}};componentWillUnmount=()=>{clearInterval(this.timerID)};renderCanvas=async()=>{if(this.canvasRef.current===null)return B("div",{children:"rendering..."});{const n=this.canvasRef.current;if(this.penroseState){const r=await(this.props.interactive===!1?ke(this.penroseState,this.props.imageResolver??ut,this.props.name??""):xe(this.penroseState,async e=>{this.penroseState=e,this.props.animate||await this.converge(),this.renderCanvas()},this.props.imageResolver??ut,this.props.name??""));n.firstChild!==null?n.replaceChild(r,n.firstChild):n.appendChild(r),this.props.onFrame&&this.props.onFrame(this.penroseState)}else return B("div",{children:"rendering..."})}};render=()=>{const{error:n}=this.state;return st("div",{style:{width:"100%",height:"100%"},children:[!n&&B("div",{style:{width:"100%",height:"100%"},ref:this.canvasRef}),n&&st("div",{style:{padding:"1em",height:"100%"},children:[B("div",{style:{fontWeight:700},children:"1 error:"}),B("div",{style:{fontFamily:"monospace"},children:Pt(n).toString().split(`
`).map((r,e)=>B("p",{style:{margin:0},children:r},`err-ln-${e}`))})]})]})}}c(K,"Simple");try{K.displayName="Simple",K.__docgenInfo={description:"",displayName:"Simple",props:{domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"string"}},substance:{defaultValue:null,description:"",name:"substance",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"string"}},variation:{defaultValue:null,description:"",name:"variation",required:!0,type:{name:"string"}},excludeWarnings:{defaultValue:null,description:"",name:"excludeWarnings",required:!1,type:{name:"string[]"}},stepSize:{defaultValue:null,description:"",name:"stepSize",required:!1,type:{name:"number"}},interactive:{defaultValue:null,description:"",name:"interactive",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},onFrame:{defaultValue:null,description:"",name:"onFrame",required:!1,type:{name:"((frame: State) => void)"}},imageResolver:{defaultValue:null,description:"",name:"imageResolver",required:!1,type:{name:"PathResolver"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{K as S,H as i};
//# sourceMappingURL=Simple-88460ef2.js.map
