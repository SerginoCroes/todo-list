(()=>{"use strict";let e=[];const t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main"),t.appendChild(n),function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.innerText="Todo List",e.appendChild(n),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("button");n.innerText="Add todo",n.addEventListener("click",(()=>document.querySelector(".dialog").style.display="flex"));const d=document.createElement("button");d.innerText="All items";const c=document.createElement("button");c.innerText="Current Items";const o=document.createElement("p");o.innerText="Projects:";const a=document.createElement("button");a.innerText="Add project",e.appendChild(n),e.appendChild(d),e.appendChild(c),e.appendChild(o),e.appendChild(a),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("p");n.innerText="Footer",e.appendChild(n),t.appendChild(e)}(),function(){const d=document.createElement("div");d.classList.add("dialog");const c=document.createElement("h2");c.innerText="Add task:";const o=document.createElement("form"),a=document.createElement("div");a.classList.add("inputdiv");const l=document.createElement("input");l.setAttribute("id","todo");const i=document.createElement("label");i.setAttribute("for","todo"),i.innerText="Todo:";const s=document.createElement("div");s.classList.add("inputdiv");const r=document.createElement("input");r.setAttribute("id","date"),r.setAttribute("type","date");const u=document.createElement("label");u.setAttribute("for","date"),u.innerText="Date:";const p=document.createElement("div");p.classList.add("buttondiv");const m=document.createElement("button");m.innerText="Add todo",m.addEventListener("click",(t=>function(t,d,c,o){var a;t.preventDefault(),c.value&&o.value?(a={todo:c.value,date:o.value},e.push(a),console.log(c.value+" "+o.value),c.value="",o.value="",d.style.display="none",document.querySelectorAll(".taskbox").forEach((e=>e.remove())),e.forEach((e=>function(e){const t=document.createElement("div");t.classList.add("taskbox");const d=document.createElement("h3"),c=document.createElement("p");d.innerText=e.todo,c.innerText=e.date,t.appendChild(d),t.appendChild(c),n.appendChild(t)}(e)))):console.log("task value empty")}(t,d,l,r))),a.appendChild(i),a.appendChild(l),s.appendChild(u),s.appendChild(r),p.appendChild(m),o.appendChild(a),o.appendChild(s),o.appendChild(p),d.appendChild(c),d.appendChild(o),t.appendChild(d)}()})();