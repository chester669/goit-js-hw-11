import{S as l,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="44903420-1183eb8cf2f9f1f8b99b46ba0";async function d(o){const r=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(r);if(!n.ok)throw new Error("Network response was not ok");return await n.json()}function f(o){const r=document.getElementById("gallery"),n=o.map(e=>`<a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}">
                    <div>
                        <p>Likes: ${e.likes}</p>
                        <p>Views: ${e.views}</p>
                        <p>Comments: ${e.comments}</p>
                        <p>Downloads: ${e.downloads}</p>
                    </div>
                </a>`).join("");r.innerHTML=n,new l(".gallery a").refresh()}function m(){document.getElementById("loading").style.display="block"}function a(){document.getElementById("loading").style.display="none"}function g(){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(o){c.error({title:"Error",message:o})}document.getElementById("search-form").addEventListener("submit",async function(o){o.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){iziToast.error({title:"Error",message:"Please enter a search query."});return}const n=document.getElementById("gallery");n.innerHTML="",m();try{const s=await d(r);a(),s.hits.length===0?g():f(s.hits)}catch(s){a(),p("Something went wrong. Please try again later."),console.error("Error fetching images:",s)}});
//# sourceMappingURL=commonHelpers.js.map
