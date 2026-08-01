/**
 * Bundled by jsDelivr using Rollup v4.62.2 and esbuild v0.28.1.
 * Original file: /npm/@polar-sh/checkout@0.3.0/dist/embed.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var m="POLAR_CHECKOUT",i=class o{iframe;loader;loaded;closable;eventTarget;windowMessageListener;constructor(t,e){this.iframe=t,this.loader=e,this.loaded=!1,this.closable=!0,this.eventTarget=new EventTarget,this.windowMessageListener=this.handleWindowMessage.bind(this),window.addEventListener("message",this.windowMessageListener)}static postMessage(t,e){window.parent.postMessage({...t,type:m},e)}static async create(t,e){typeof e=="string"&&(console.warn(`Passing theme as string is deprecated. Use { theme: "${e}" } instead.`),e={theme:e});const a=document.createElement("style");a.innerText=`
      .polar-loader-spinner {
        width: 20px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${e?.theme==="dark"?"#000":"#fff"};
        box-shadow: 0 0 0 0 ${e?.theme==="dark"?"#fff":"#000"};
        animation: polar-loader-spinner-animation 1s infinite;
      }
      @keyframes polar-loader-spinner-animation {
        100% {box-shadow: 0 0 0 30px #0000}
      }
      body.polar-no-scroll {
        overflow: hidden;
      }
    `,document.head.appendChild(a);const s=document.createElement("div");s.style.position="absolute",s.style.top="50%",s.style.left="50%",s.style.transform="translate(-50%, -50%)",s.style.zIndex="2147483647",s.style.colorScheme="auto";const c=document.createElement("div");c.className="polar-loader-spinner",s.appendChild(c),document.body.classList.add("polar-no-scroll"),document.body.appendChild(s);const d=new URL(t);d.searchParams.set("embed","true"),d.searchParams.set("embed_origin",window.location.origin),e?.theme&&d.searchParams.set("theme",e.theme);const u=d.toString(),n=document.createElement("iframe");n.src=u,n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.border="none",n.style.zIndex="2147483647",n.style.backgroundColor="rgba(0, 0, 0, 0.5)",n.style.colorScheme="auto";const h="https://polar.sh,https://sandbox.polar.sh".split(",").join(" ");n.allow=`payment 'self' ${h}; publickey-credentials-get 'self' ${h};`,document.body.appendChild(n);const r=new o(n,s);return e?.onLoaded&&r.addEventListener("loaded",e.onLoaded,{once:!0}),new Promise(p=>{r.addEventListener("loaded",()=>p(r),{once:!0})})}static init(){document.querySelectorAll("[data-polar-checkout]").forEach(t=>{t.removeEventListener("click",o.checkoutElementClickHandler),t.addEventListener("click",o.checkoutElementClickHandler)})}close(){window.removeEventListener("message",this.windowMessageListener),document.body.contains(this.iframe)&&document.body.removeChild(this.iframe),document.body.classList.remove("polar-no-scroll")}addEventListener(t,e,a){this.eventTarget.addEventListener(t,e,a)}removeEventListener(t,e){this.eventTarget.removeEventListener(t,e)}static async checkoutElementClickHandler(t){t.preventDefault();let e=t.target;for(;!e.hasAttribute("data-polar-checkout");){if(!e.parentElement)return;e=e.parentElement}const a=e.getAttribute("href")||e.getAttribute("data-polar-checkout"),s=e.getAttribute("data-polar-checkout-theme");o.create(a,s?{theme:s}:void 0)}handleLoaded(){this.loaded||(document.body.removeChild(this.loader),this.loaded=!0)}handleClose(){this.closable&&this.close()}handleConfirmed(){this.closable=!1}handleSuccess(t){this.closable=!0,t.redirect&&(window.location.href=t.successURL)}handleWindowMessage({data:t,origin:e}){if(!"https://polar.sh,https://sandbox.polar.sh".split(",").includes(e)||t.type!==m)return;const a=new CustomEvent(t.event,{detail:t,cancelable:!0});if(this.eventTarget.dispatchEvent(a),!a.defaultPrevented)switch(t.event){case"loaded":this.handleLoaded();break;case"close":this.handleClose();break;case"confirmed":this.handleConfirmed();break;case"success":this.handleSuccess(t)}}};if(typeof window<"u"&&(window.Polar={...window.Polar??{},EmbedCheckout:i}),typeof document<"u"){const l=document.currentScript;l&&l.hasAttribute("data-auto-init")&&document.addEventListener("DOMContentLoaded",async()=>{i.init()})}export{i as PolarEmbedCheckout};
