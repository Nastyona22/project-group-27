!function(){var e,o,t,n;!function(){var e={openLocationBtn:document.querySelector("[data-location-open]"),closeLocation:document.querySelector("[data-location-close]"),location:document.querySelector("[data-location]")};function o(){e.location.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openLocationBtn.addEventListener("click",o),e.closeLocationBtn.addEventListener("click",o)}(),e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.ff728cd5.js.map
