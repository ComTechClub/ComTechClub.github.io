import"./modulepreload-polyfill-B5Qt9EMX.js";const i="AIzaSyDMZifErCLl91sZ6LfNRN3x7Xk4q5ZP5dM",d="15zXnwLg4VAsMtB0FWTmAl78fjZt--UEVlNGUCVOP3WM",g="Member webpage database!A2:F",h=new URL("/ComTechClub.github.io/assets/logo_background-C0ta_yvz.png",import.meta.url).href;function f(){const a=`https://sheets.googleapis.com/v4/spreadsheets/${d}/values/${g}?key=${i}`;fetch(a).then(n=>{if(!n.ok)throw new Error(`Network response was not ok: ${n.statusText}`);return n.json()}).then(n=>{const s=n.values.map(e=>({group:e[0],name:e[1],role:e[2],picture:e[3],backgroundImage:e[4],textColor:e[5]}));E(s)})}function E(a){const n=document.getElementById("grouped-cards"),s={};a.forEach(t=>{s[t.group]||(s[t.group]=[]),s[t.group].push(t)});const e=Object.keys(s),l=e.filter(t=>/\d+$/.test(t)).sort((t,r)=>parseInt(r.match(/\d+$/)[0],10)-parseInt(t.match(/\d+$/)[0],10));[...e.filter(t=>!/\d+$/.test(t)),...l].forEach(t=>{const r=document.createElement("div");r.className="group-container";const u=document.createElement("div");u.className="group-title",u.innerText=t,r.appendChild(u),s[t].forEach(o=>{const c=document.createElement("div");c.className="card",c.style.backgroundImage=`url(${o.backgroundImage})`;const p=o.picture?o.picture:h;c.innerHTML=`
        <img src="${p}" alt="${o.name}">
        <h3 style="color:${o.textColor};">${o.name}</h3>
        <p style="color:${o.textColor};">${o.role}</p>
      `,r.appendChild(c)}),n.appendChild(r)})}f();
