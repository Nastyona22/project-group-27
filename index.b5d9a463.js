!function(){var e,t,o,n;new Swiper(".rewiews-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:30,speed:1e3,effect:"flip",flipEffect:{slideShadows:!0,limitRotation:!0}}),function(){var e={openLocationBtn:document.querySelector("[data-location-open]"),closeLocation:document.querySelector("[data-location-close]"),location:document.querySelector("[data-location]")};function t(){e.location.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openLocationBtn.addEventListener("click",t),e.closeLocationBtn.addEventListener("click",t)}(),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.b5d9a463.js.map
