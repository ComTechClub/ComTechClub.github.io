import"./modulepreload-polyfill-B5Qt9EMX.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-toggle"),t=document.querySelector("nav"),o=document.querySelector(".logo"),c=document.querySelectorAll("nav a");e.addEventListener("click",function(){t.classList.toggle("active")}),o.addEventListener("click",function(i){i.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),c.forEach(i=>{i.addEventListener("click",function(u){const n=this.getAttribute("href");n.startsWith("#")&&(u.preventDefault(),document.querySelector(n).scrollIntoView({behavior:"smooth"}))})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector('.nav-menu li a[href="Information"]');e.addEventListener("click",function(t){t.preventDefault(),window.scrollTo({top:750,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector('.nav-menu li a[href="News"]');e.addEventListener("click",function(t){t.preventDefault(),window.scrollTo({top:1550,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector('.nav-menu li a[href="Contact"]');e.addEventListener("click",function(t){t.preventDefault(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})});const r="AIzaSyDMZifErCLl91sZ6LfNRN3x7Xk4q5ZP5dM",a="15zXnwLg4VAsMtB0FWTmAl78fjZt--UEVlNGUCVOP3WM",l="URL!A1:B6";function s(){const e=`https://sheets.googleapis.com/v4/spreadsheets/${a}/values/${l}?key=${r}`;fetch(e).then(t=>{if(!t.ok)throw new Error(`Network response was not ok: ${t.statusText}`);return t.json()}).then(t=>{const o={fromLink:t.values[1][1],instagramLink:t.values[2][1],facebookLink:t.values[3][1],youtubeLink:t.values[4][1],youtubeVideoLink:t.values[5][1]};o.youtubeVideoLink=d(o.youtubeVideoLink),f(o.youtubeVideoLink),m(o)})}function d(e){return`https://www.youtube.com/embed/${e.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/)[1]}`}function f(e){var t=document.getElementById("youtube-video");t.src=e}function m(e){const t=document.getElementById("applyButton"),o=document.getElementById("Instragram"),c=document.querySelector("a.button.instagram"),i=document.querySelector("a.button.facebook"),u=document.querySelector("a.button.youtube");t&&(t.onclick=function(){window.location.href=e.fromLink}),o&&(o.onclick=function(){window.location.href=e.instagramLink}),c&&(c.onclick=function(n){n.preventDefault(),window.location.href=e.instagramLink}),i&&(i.onclick=function(n){n.preventDefault(),window.location.href=e.facebookLink}),u&&(u.onclick=function(n){n.preventDefault(),window.location.href=e.youtubeLink})}s();
