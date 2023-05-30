"use strict";(self.webpackChunkca=self.webpackChunkca||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,s=new RegExp("^"+n.source),o=new RegExp(n.source+i.source,"gu"),c=new RegExp("\\d+"+i.source,"gu"),l=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),l=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?l(e):n(e);return e!==n(e)&&(e=((e,r,i)=>{let n=!1,s=!1,o=!1;for(let c=0;c<e.length;c++){const l=e[c];n&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),n=!1,o=s,s=!0,c++):s&&o&&a.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),o=s,s=!1,n=!0):(n=r(l)===l&&i(l)!==l,o=s,s=i(l)===l&&r(l)!==l)}return e})(e,n,l)),e=e.replace(s,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),i.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,c.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return A},P:function(){return x},S:function(){return F},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return c}});var r=a(7294),i=(a(3204),a(5697)),n=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function u(e,t,a,r,i,n,o,c){const l={};n&&(l.backgroundColor=n,"fixed"===a?(l.width=r,l.height=i,l.backgroundColor=n,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),c&&(l.objectPosition=c);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:c}=e,l=o(e,f);return r.createElement("img",s({},l,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=o(e,h);const c=n.sizes||(null==t?void 0:t.sizes),l=r.createElement(y,s({},n,t,{sizes:c,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:c})})),l):l};var w;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const A=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};A.displayName="MainImage",A.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],E=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},Z={image:n().object.isRequired,alt:C},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],N=new Set;let I,R;const O=function(e){let{as:t="div",image:i,style:n,backgroundColor:d,className:u,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,L);const{width:y,height:b,layout:w}=i,v=l(y,b,w),{style:x,className:A}=v,k=o(v,j),S=(0,r.useRef)(),E=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(u=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(E);if(R&&N.has(E))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:N.has(E),image:i},h)),N.has(E)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,E,N,n,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{N.has(E)&&R&&(S.current.innerHTML=R(s({isLoading:N.has(E),isLoaded:N.has(E),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(t,s({},k,{style:s({},x,n,{backgroundColor:d}),className:A+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));T.propTypes=Z,T.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:i,__error:n}=t,c=o(t,W);return n&&console.warn(n),i?r.createElement(e,s({image:i},c)):(console.warn("Image not loaded",a),null)}}const z=q((function(e){let{as:t="div",className:a,class:i,style:n,image:c,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=o(e,k);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:C,layout:Z,images:L,placeholder:j,backgroundColor:N}=c,I=l(v,C,Z),{style:R,className:O}=I,T=o(I,S),W={fallback:void 0,sources:[]};return L.fallback&&(W.fallback=s({},L.fallback,{srcSet:L.fallback.srcSet?E(L.fallback.srcSet):void 0})),L.sources&&(W.sources=L.sources.map((e=>s({},e,{srcSet:E(e.srcSet)})))),r.createElement(t,s({},T,{style:s({},R,n,{backgroundColor:h}),className:O+(a?" "+a:"")}),r.createElement(m,{layout:Z,width:v,height:C},r.createElement(x,s({},u(j,!1,Z,v,C,N,y,b))),r.createElement(A,s({"data-gatsby-image-ssr":"",className:g},w,d("eager"===p,!1,W,p,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},J=new Set(["fixed","fullWidth","constrained"]),V={src:n().string.isRequired,alt:C,width:P,height:P,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!J.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=V;const F=q(T);F.displayName="StaticImage",F.propTypes=V},507:function(e,t,a){a.r(t),a.d(t,{Head:function(){return x},default:function(){return k}});var r=a(8032),i=a(917);var n=function(){return(0,i.tZ)("div",{style:{display:"grid"}},(0,i.tZ)(r.S,{style:{gridArea:"1/1"},layout:"fullWidth",aspectRatio:2,alt:"",src:"../images/hero3.jpg",formats:["auto","webp","avif"],__imageData:a(4129)}),(0,i.tZ)("div",{style:{gridArea:"1/1",position:"relative",placeItems:"center",display:"grid"}},(0,i.tZ)("h1",{style:{color:"#FFF",fontSize:"4.5rem"}},"Your guide to the Philippines")))},s=a(5506),o=a(4316),c=a(1883),l=a(1562);const d=(0,o.Z)("div",{target:"esli2yc0"})({name:"z5atxi",styles:"display:flex;flex-direction:column;flex-grow:1"});function u(e){return(0,i.tZ)(d,{style:e.style},e.children)}const p=(0,o.Z)("div",{target:"e1v7eyws3"})({name:"16y8bmc",styles:"column-count:1;column-gap:15px;margin:15px;@media (min-width: 480px){column-count:2;}@media (min-width: 768px){column-count:2;}@media (min-width: 1024px){column-count:3;}"}),g=(0,o.Z)("div",{target:"e1v7eyws2"})({name:"1rh6xz3",styles:"margin-bottom:15px;-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid;box-sizing:border-box;display:inline-block;width:100%;border-radius:18px;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(.25,.8,.25,1);&:hover{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}"}),m=(0,o.Z)("div",{target:"e1v7eyws1"})({name:"1clflv3",styles:"color:inherit;padding:12px;color:inherit;text-decoration:none"}),f=(0,o.Z)("div",{target:"e1v7eyws0"})({name:"1dbpdap",styles:"color:#CCC;font-size:1.5rem;font-weight:700"});function h(){var e,t;const n=(0,c.useStaticQuery)(y);return(0,i.tZ)(u,{style:{justifyContent:"center"}},(0,i.tZ)(p,null,null==n||null===(e=n.allMdx)||void 0===e||null===(t=e.edges)||void 0===t?void 0:t.map((e=>(0,i.tZ)(g,null,(0,i.tZ)(l.rU,{to:""+e.node.frontmatter.slug},(0,i.tZ)(r.S,{style:{borderRadius:"18px 18px 0px 0px",gridArea:"1/1"},layout:"fullWidth",aspectRatio:2,alt:"",src:"../images/hero3.jpg",formats:["auto","webp","avif"],__imageData:a(3562)}),(0,i.tZ)(m,null,(0,i.tZ)(f,null,e.node.frontmatter.title),(0,i.tZ)("div",null,e.node.frontmatter.tags.join(", ")))))))))}const y="1060946871";var b=a(4842),w=a(7294);const v=e=>{const{title:t,description:a,image:r,siteUrl:n,twitterUsername:s}=(0,c.useStaticQuery)("1865044719").site.siteMetadata,{title:o,description:l,pathname:d,children:u}=e,p={title:o||t,description:l||a,image:""+n+r,url:""+n+(d||""),twitterUsername:s};return(0,i.tZ)(w.Fragment,null,(0,i.tZ)("title",null,p.title),(0,i.tZ)("meta",{name:"description",content:p.description}),(0,i.tZ)("meta",{name:"image",content:p.image}),(0,i.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.tZ)("meta",{name:"twitter:title",content:p.title}),(0,i.tZ)("meta",{name:"twitter:url",content:p.url}),(0,i.tZ)("meta",{name:"twitter:description",content:p.description}),(0,i.tZ)("meta",{name:"twitter:image",content:p.image}),(0,i.tZ)("meta",{name:"twitter:creator",content:p.twitterUsername}),(0,i.tZ)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),u)},x=()=>(0,i.tZ)(v,null);function A(){return(0,i.tZ)(s.Z,{style:{marginTop:"-70px",marginLeft:"100px"}},(0,i.tZ)(r.S,{src:"../images/sunset.png",alt:"A dinosaur",placeholder:"blurred",layout:"fixed",width:250,height:250,style:{borderRadius:"50%",border:"5px solid white"},__imageData:a(2254)}),(0,i.tZ)(u,{style:{justifyContent:"center",marginTop:"25px",marginLeft:"20px"}},(0,i.tZ)("div",{style:{fontSize:"2rem",fontWeight:700}},"Your guide, Cebuanna"),(0,i.tZ)("div",{style:{fontSize:"1.5rem",color:"#AAA",letterSpacing:.1}},"@cebuanna")))}function k(){return(0,i.tZ)(b.Z,null,(0,i.tZ)(u,null,(0,i.tZ)(u,{style:{position:"relative"}},(0,i.tZ)(n,null),(0,i.tZ)(A,null)),(0,i.tZ)(h,null)))}},2254:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVR42gHEBDv7AGNtXGZxX2h0YWp3Y216ZXF8Z3iBaYCFa4aIbIaKboWLb4aNcIeOcYmOcY2PcZCOb5KNbouIaoCAZXt7YQBveWRzf2h3g2x8iXCCjnKJk3aQmXmZnXujon2opX6opoCpqIGqqIGrqICuqH+tpXymn3icmXSWk2+Jh2cAgIhthZBzjZl3lqB6nqd/pq2CrbOGtLeKvruOxL6Pxb+RxL+Qw76PwryOwrqLvraGta+BoJVvmn1aoYxkAJmadZ6jeqWsfq6zg7e6iL3AjcPDksrGltHKnNfNo9rNodjMn9XLnNLImdDHltHEj86vdqOGX6OAWrSPYAC2rHq9toLBv4rEw4/Kx5TPypjTzZ3Z0abg0abozZ3s06zr0q3nzqXjyp3evIu3kmq6k2XOpm+0hlpySjwAz7h828CH38KN4cqX4M+g5c6g6s6g7cGI+ceB/NGO+dio+def+sN576RY6ZlRy4VJ2pRV4pVQyX1GtXFEAPK7avbBdfO1afnGf/jTnPnVoPvRk//McvPDa/jVkP7iqPzcmN6rVdunWf3Qg//am/rUkf3Rj/7Piv/KewD3mUL/qkb/s07+u1j+vVn+vFP/wVPip0ZYLRPFnmn///v038qscS+ueTforVH/yW3QmEztsFT/wVf+tEcAhlE0pWg7x4NC1Y9Ev4A9uH4745pCaTggEAAJtns5/92U9syGxXsryYM3zYs+4p1Eo2ozvHs1tnEtp2QsAGFYRmpeSYFwU454V492Vpp+WrqRYU4yJAcACFQmFq52NLaDP7F8Q69/TZ54UJNwTYNjR3hcRmFLQEw9OgBwZE1+blKIdFWbhV6ukWW0lWaqjWFdQTExGRc8GheXaEC1h1Klf1Shf1mae1eTc1GAZUuDZkpzWERgSz4APjo3SEA6U0k+ZFdFb15KfGdOgmpPW0EyOR4YORcSkGA1wJJVuIpVtIpaqoRamHhVhWpPfWJKbVZFWkk/AGlaR2xcSHRiS3hkTHVeSHZcRnBUQE0rISYQEToZE3xIJ6h0PZhrQJdtR5RrRotmRn1cQ3VUP2tNPVpCOACjelSvg1i8ilvYnWXipmvoqmnDgEaBJwlBGRA8Egm/dEL90nn2nyvrl0X3tWX2tm3rp2LuqWLpo1/aklIAz5Fb355i5J9h8K9v87d7/8J5rWw2nCsBYSIOMAwJ0306/9V+9qEu6plF+bVo87Nu7adi5J5d2ZRXyoJJAIBPPItUPZRYPaBdP6phQLdnQZVJKY0tCkgYDTQSELVWEfKGF/ODJPF8KtNoLbpbLq5VMIxELW02KnI5LQBrNytwOit5PS2CQSyKQyyeTC6/XjK9WitUIhZsMBjTYyLZaCG8VyGsTSOvUimkTy2WSi2NRy57QC1qNykAdD0udz8veD8udz0shUQuslk0nU4us1QsZSwdn0ci6XAqu1opmUkomUcnnkorl0ksiEIsgkAsYjQoUiskAGk4LWk4LXQ9LnM8LoJDMJVLMnY8K2o0JTwkI3U3JKtPKptLK41HLatTMIVDLJFJMHtAL00rJ08sJjogIABiNixOLClcMSlqOCt9QC+GQi15OShHKSU/KCZtNCWLQCd+OyZTKSNSLCVwOiuCQi5pOSxnOCxmNytkNSpJekaeKtCGJwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/3fea0a9238b60ba0bcd4b98a49b8d216/de391/sunset.png","srcSet":"/static/3fea0a9238b60ba0bcd4b98a49b8d216/de391/sunset.png 250w,\\n/static/3fea0a9238b60ba0bcd4b98a49b8d216/82c11/sunset.png 500w","sizes":"250px"},"sources":[{"srcSet":"/static/3fea0a9238b60ba0bcd4b98a49b8d216/e7160/sunset.webp 250w,\\n/static/3fea0a9238b60ba0bcd4b98a49b8d216/5f169/sunset.webp 500w","type":"image/webp","sizes":"250px"}]},"width":250,"height":250}')},4129:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#78d8c8","images":{"fallback":{"src":"/static/ce92d2ea1ed6932c6c568f5397a86551/dac54/hero3.jpg","srcSet":"/static/ce92d2ea1ed6932c6c568f5397a86551/5f965/hero3.jpg 750w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/76f9a/hero3.jpg 1080w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/54fb8/hero3.jpg 1366w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/dac54/hero3.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/ce92d2ea1ed6932c6c568f5397a86551/06049/hero3.avif 750w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/0f115/hero3.avif 1080w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/c833e/hero3.avif 1366w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/343e8/hero3.avif 1920w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/ce92d2ea1ed6932c6c568f5397a86551/ee7ce/hero3.webp 750w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/819dc/hero3.webp 1080w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/7b8ce/hero3.webp 1366w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/e0a47/hero3.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5}')},3562:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#78d8c8","images":{"fallback":{"src":"/static/ce92d2ea1ed6932c6c568f5397a86551/dac54/hero3.jpg","srcSet":"/static/ce92d2ea1ed6932c6c568f5397a86551/5f965/hero3.jpg 750w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/76f9a/hero3.jpg 1080w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/54fb8/hero3.jpg 1366w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/dac54/hero3.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/ce92d2ea1ed6932c6c568f5397a86551/06049/hero3.avif 750w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/0f115/hero3.avif 1080w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/c833e/hero3.avif 1366w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/343e8/hero3.avif 1920w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/ce92d2ea1ed6932c6c568f5397a86551/ee7ce/hero3.webp 750w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/819dc/hero3.webp 1080w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/7b8ce/hero3.webp 1366w,\\n/static/ce92d2ea1ed6932c6c568f5397a86551/e0a47/hero3.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-295225b09e19e82b5e8d.js.map