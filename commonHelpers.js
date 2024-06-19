import{i as u,s as d}from"./assets/vendor-5c957d73.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(r){return r.map(({largeImageURL:s,webformatURL:a,tags:i,likes:e,views:t,comments:o,downloads:m})=>`
    <li class="gallery-card">
      <a href="${s}" class="gallery-card-link">
        <img
          class="gallery-card-img"
          src="${a}"
          alt="${i}"
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
  `).join("")}function g(r){const s="https://pixabay.com",a="/api/",i=new URLSearchParams({key:"44449535-a1df9548b4e4ca826019364d7",q:r,image_type:"photo",orientation:"horizontal",safesearh:!0}),e=`${s}${a}?${i}`;return fetch(e).then(t=>t.json())}const l=document.querySelector(".search-form"),c=document.querySelector(".gallery-list");l.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.search.value;s?(g(s).then(a=>{a.hits.length===0&&(c.innerHTML="",n("Sorry","there are no images matching your search query. Please try again!"));const i=p(a.hits);c.innerHTML=i,f.refresh()}).catch(a=>{}),l.reset()):(n("Oops","You forgot to enter a search query!"),c.innerHTML="")});function n(r,s){u.error({title:r,message:s,backgroundColor:"#EF4040",theme:"dark",position:"topRight"})}const f=new d(".gallery-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
