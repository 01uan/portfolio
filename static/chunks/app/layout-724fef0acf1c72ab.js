(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{3549:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9324,23)),Promise.resolve().then(r.bind(r,7780)),Promise.resolve().then(r.t.bind(r,8007,23))},7780:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>b});var a=r(5155),n=r(2115),s=(e,t,r,a,n,s,l,o)=>{let i=document.documentElement,c=["light","dark"];function m(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,a=r&&s?n.map(e=>s[e]||e):n;r?(i.classList.remove(...a),i.classList.add(s&&s[t]?s[t]:t)):i.setAttribute(e,t)}),r=t,o&&c.includes(r)&&(i.style.colorScheme=r)}if(a)m(a);else try{let e=localStorage.getItem(t)||r,a=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(a)}catch(e){}},l=["light","dark"],o="(prefers-color-scheme: dark)",i=n.createContext(void 0),c=e=>n.useContext(i)?n.createElement(n.Fragment,null,e.children):n.createElement(d,{...e}),m=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:c="theme",themes:d=m,defaultTheme:b=a?"system":"light",attribute:p="data-theme",value:v,children:g,nonce:w,scriptProps:E}=e,[S,k]=n.useState(()=>h(c,b)),[C,T]=n.useState(()=>"system"===S?f():S),_=v?Object.values(v):d,L=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=f());let n=v?v[t]:t,o=r?y(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(..._),n&&i.classList.add(n)):e.startsWith("data-")&&(n?i.setAttribute(e,n):i.removeAttribute(e))};if(Array.isArray(p)?p.forEach(c):c(p),s){let e=l.includes(b)?b:null,r=l.includes(t)?t:e;i.style.colorScheme=r}null==o||o()},[w]),A=n.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),P=n.useCallback(e=>{T(f(e)),"system"===S&&a&&!t&&L("system")},[S,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?k(e.newValue):A(b))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),n.useEffect(()=>{L(null!=t?t:S)},[t,S]);let M=n.useMemo(()=>({theme:S,setTheme:A,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:a?[...d,"system"]:d,systemTheme:a?C:void 0}),[S,A,t,C,a,d]);return n.createElement(i.Provider,{value:M},n.createElement(u,{forcedTheme:t,storageKey:c,attribute:p,enableSystem:a,enableColorScheme:s,defaultTheme:b,value:v,themes:d,nonce:w,scriptProps:E}),g)},u=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([a,r,i,t,m,c,l,o]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),h=(e,t)=>{let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},f=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light");function b(e){let{children:t,...r}=e;return(0,a.jsx)(c,{...r,children:t})}},8007:e=>{e.exports={style:{fontFamily:"'Merriweather', 'Merriweather Fallback'",fontStyle:"normal"},className:"__className_c59aa5",variable:"__variable_c59aa5"}},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[62,441,684,358],()=>t(3549)),_N_E=e.O()}]);