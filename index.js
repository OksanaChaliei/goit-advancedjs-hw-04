import{a as L,S as v,i as n}from"./assets/vendor-8LKSFGxY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const w="55358111-f552df1b8fff0b00b11cf6f83",S="https://pixabay.com/api/";async function f(a,t=1){const r={key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await L.get(S,{params:r})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new v(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function g(a){const t=a.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href=" ${r.largeImageURL}">
            <img
              class="gallery-image"
              src=" ${r.webformatURL}"
              alt=" ${r.tags}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){m.innerHTML=""}function p(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function P(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let i=1,c="",u=0;B.addEventListener("submit",async a=>{if(a.preventDefault(),c=a.target.elements["search-text"].value.trim(),!!c){i=1,M(),d(),p();try{const t=await f(c,i);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits),Math.ceil(u/15)>1?P():(d(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Error loading images."})}finally{b()}}});$.addEventListener("click",async()=>{i+=1,p();try{const a=await f(c,i);g(a.hits);const t=Math.ceil(u/15);i>=t&&(d(),n.info({message:"We're sorry, but you've reached the end of search results."}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{n.error({message:"Error loading more images."})}finally{b()}});
//# sourceMappingURL=index.js.map
