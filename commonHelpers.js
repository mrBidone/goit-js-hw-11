import{i as u,s as p}from"./assets/vendor-5c957d73.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(r){return r.map(({largeImageURL:s,webformatURL:i,tags:a,likes:e,views:t,comments:o,downloads:m})=>`
    <li class="gallery-card">
      <a href="${s}" class="gallery-card-link">
        <img
          class="gallery-card-img"
          src="${i}"
          alt="${a}"
          width="360"
        />
      </a>
      <ul class="image-desc-list">
        <li class="image-desc-item">
          <p class="image-desc-title">Likes</p>
          <p class="image-desc-data">${e}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Views</p>
          <p class="image-desc-data">${t}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Comments</p>
          <p class="image-desc-data">${o}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Downloads</p>
          <p class="image-desc-data">${m}</p>
        </li>
      </ul>
    </li>
  `).join("")}function f(r){const s="https://pixabay.com",i="/api/",a=new URLSearchParams({key:"44449535-a1df9548b4e4ca826019364d7",q:r,image_type:"photo",orientation:"horizontal",safesearh:!0}),e=`${s}${i}?${a}`;return fetch(e).then(t=>t.json())}const l=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),d=document.querySelector(".loader");l.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.search.value;s?(y(),f(s).then(i=>{i.hits.length===0&&(c.innerHTML="",n("Sorry","there are no images matching your search query. Please try again!"));const a=g(i.hits);c.innerHTML=a,h.refresh()}).catch(i=>{}).finally(()=>{L()}),l.reset()):(n("Oops","You forgot to enter a search query!"),c.innerHTML="")});function n(r,s){u.error({title:r,message:s,backgroundColor:"#EF4040",theme:"dark",position:"topRight"})}const h=new p(".gallery-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(){d.classList.remove("is-hidden")}function L(){d.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
