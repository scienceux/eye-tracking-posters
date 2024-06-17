import{B as q,C as V,D as Z,E as j,F as ee,G as te,I as re,K as oe,M as ne,a as ce,b as C,c as F,d as M,e as O,f as x,g as b,h as K,i as y,j as E,k as R,l as G,m as H,n as k,o as S,p as L,q as _,r as w,s as I,t as z,u as J,v as X,w as $,x as Q,y as W,z as Y}from"/myst_assets_folder/_shared/chunk-4KHMB7Q6.js";import{a as U}from"/myst_assets_folder/_shared/chunk-XIW7RL3H.js";import{a as fe}from"/myst_assets_folder/_shared/chunk-MITWS4PZ.js";import{j as T}from"/myst_assets_folder/_shared/chunk-2X34ZJ7N.js";import{g as D}from"/myst_assets_folder/_shared/chunk-W2XTUIOP.js";import{d as m}from"/myst_assets_folder/_shared/chunk-XJN3BT5Q.js";import{e as s}from"/myst_assets_folder/_shared/chunk-2NH4LW52.js";var ae={rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css",integrity:"sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ",crossOrigin:"anonymous"};var me=s(ce());var P=s(m());function A({children:e}){return(0,P.jsx)(K,{children:(0,P.jsx)(E,{children:(0,P.jsx)(M,{gridSystem:"article-left-grid",children:(0,P.jsx)("article",{className:"article content article-left-grid subgrid-gap",children:e})})})})}var le=s(fe());var N=s(m());function pe(e){if(!e)return"File";switch(e){case"pdf":return"PDF";case"meca":return"MECA";case"xml":return"JATS";default:break}return e}function ie(){var c,f,l;let e=y(),o=(c=e==null?void 0:e.projects)==null?void 0:c[0],a=(l=(f=o==null?void 0:o.downloads)!=null?f:o==null?void 0:o.exports)!=null?l:[];return a.length===0?null:(0,N.jsx)("div",{className:"col-margin mt-3 mx-5 lg:m-0 lg:w-[300px]",children:(0,N.jsx)("div",{className:"flex flex-wrap gap-2 lg:flex-col w-fit lg:mx-auto",children:a.map(r=>{var d;return(0,N.jsx)(V,{url:r.url,format:r.format,filename:r.filename,title:(d=r.title)!=null?d:pe(r.format),internal:r.internal})})})})}var n=s(m());function se({article:e,hideKeywords:o,hideOutline:a,hideTitle:c}){var g,v,h;let f=(v=(g=e.frontmatter)==null?void 0:g.keywords)!=null?v:[],l=T(e.mdast),r=C(l),{title:d,subtitle:u}=e.frontmatter,i=w();return(0,n.jsx)(x,{references:{...e.references,article:e.mdast},frontmatter:e.frontmatter,children:(0,n.jsx)(S,{children:(0,n.jsxs)(k,{enable:(h=i==null?void 0:i.enabled)!=null?h:!1,contents:e,children:[!c&&(0,n.jsx)(Z,{frontmatter:{title:d,subtitle:u},className:"mb-5"}),!a&&(0,n.jsx)("div",{className:"sticky top-0 z-10 hidden h-0 pt-2 ml-10 col-margin-right lg:block",children:(0,n.jsx)(Q,{className:"relative",children:(0,n.jsx)(W,{})})}),(i==null?void 0:i.enabled)&&(i==null?void 0:i.features.notebookCompute)&&e.kind===U.Notebook&&(0,n.jsx)(X,{showLaunch:!0}),(0,n.jsx)(z,{pageSlug:e.slug}),(0,n.jsx)("div",{id:"skip-to-article"}),(0,n.jsx)(ee,{parts:r,keywords:f,hideKeywords:o}),(0,n.jsx)($,{mdast:l}),(0,n.jsx)(te,{parts:r}),(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]})})})}var t=s(m());function de({article:e}){var i,g,v,h,B;let o=O(),{projects:a,hide_footer_links:c}=(i=y())!=null?i:{},f=F(),l=b(),r=w(),d=a==null?void 0:a[0],u=e.slug===(d==null?void 0:d.index);return d?(0,t.jsx)(x,{references:{...e.references,article:e.mdast},frontmatter:e.frontmatter,children:(0,t.jsx)(S,{children:(0,t.jsxs)(k,{enable:(g=r==null?void 0:r.enabled)!=null?g:!1,contents:e,children:[(0,t.jsx)(j,{frontmatter:d,children:(0,t.jsxs)("div",{className:"pt-5 md:self-center h-fit lg:pt-0 col-body lg:col-margin-right-inset",children:[(0,t.jsx)(ie,{}),(r==null?void 0:r.enabled)&&r.features.launchBinder&&(0,t.jsx)("div",{className:"col-margin mt-3 mx-5 lg:mt-2 lg:mx-0 lg:w-[300px]",children:(0,t.jsx)("div",{className:"flex flex-wrap gap-2 lg:flex-col w-[147px] pl-[1px] lg:mx-auto",children:(0,t.jsx)(L,{type:"link",location:e.location})})})]})}),(0,t.jsxs)("main",{id:"main",className:(0,le.default)(o,"subgrid-gap col-screen",{"pt-10":u}),children:[!u&&(0,t.jsxs)("div",{className:"flex items-center p-3 mb-10 border-y bg-slate-50 dark:bg-slate-600 border-y-slate-300 col-screen",children:[(0,t.jsxs)(f,{to:l||"/",className:"flex gap-1 px-2 py-1 font-normal no-underline border rounded bg-slate-200 border-slate-600 hover:bg-slate-800 hover:text-white hover:border-transparent",children:[(0,t.jsx)(G,{width:"1rem",height:"1rem",className:"self-center flex-none transition-transform group-hover:-translate-x-1"}),(0,t.jsx)("span",{children:"Back to Article"})]}),(0,t.jsx)("div",{className:"flex-grow text-center",children:e.frontmatter.title}),(r==null?void 0:r.enabled)&&r.features.launchBinder&&(0,t.jsx)("div",{className:"mr-2",children:(0,t.jsx)(L,{type:"button",location:e.location})}),(0,t.jsxs)("a",{href:(B=(h=(v=e.frontmatter)==null?void 0:v.exports)==null?void 0:h[0])==null?void 0:B.url,className:"flex gap-1 px-2 py-1 font-normal no-underline border rounded bg-slate-200 border-slate-600 hover:bg-slate-800 hover:text-white hover:border-transparent",children:[(0,t.jsx)(H,{width:"1rem",height:"1rem",className:"self-center flex-none transition-transform group-hover:-translate-x-1"}),(0,t.jsxs)("span",{children:["Download ",e.kind]})]})]}),(0,t.jsx)(se,{article:e,hideKeywords:!u,hideTitle:u})]}),!c&&(0,t.jsx)(Y,{links:e.footer})]})})}):(0,t.jsx)(re,{})}var p=s(m()),Xe=e=>{var c,f,l;let o=(f=(c=e.parentsData)==null?void 0:c.root)==null?void 0:f.config,a=e.data;return!o||!a||!a.frontmatter?{}:ne({origin:"",url:e.location.pathname,title:`${a.frontmatter.title} - ${o==null?void 0:o.title}`,description:a.frontmatter.description,image:(l=a.frontmatter.thumbnailOptimized||a.frontmatter.thumbnail)!=null?l:void 0})},$e=()=>[ae];function ue(){let e=b(),o=D();return(0,p.jsx)(A,{children:(0,p.jsx)(R,{children:(0,p.jsx)(_,{features:{notebookCompute:!1,figureCompute:!0,launchBinder:!0},children:(0,p.jsx)(I,{baseurl:e!=null?e:"",children:(0,p.jsx)(de,{article:o})})})})})}function Qe(){return(0,p.jsx)(A,{children:(0,p.jsx)("main",{className:"article",children:(0,p.jsx)(oe,{})})})}export{A as a,Xe as b,$e as c,ue as d,Qe as e};