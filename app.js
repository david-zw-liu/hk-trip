(function () {
  const T = window.TRIP;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const TAG_COLOR = { 美食: "--tag-food", 景點: "--tag-sight", 交通: "--tag-move", 購物: "--tag-shop", 住宿: "--tag-stay" };

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  // Header
  document.title = T.title;
  $("title").textContent = T.title;
  $("subtitle").textContent = T.subtitle;
  $("dates").textContent = `${T.dates.start} → ${T.dates.end}`;
  $("overview").innerHTML = T.overview
    .map((o) => `<div><dt>${esc(o.label)}</dt><dd>${esc(o.value)}</dd></div>`)
    .join("");

  // Day tabs
  const tabs = $("tabs");
  const daysEl = $("days");
  function showDay(i) {
    const d = T.days[i];
    [...tabs.children].forEach((b, j) => b.setAttribute("aria-selected", String(j === i)));
    daysEl.innerHTML = `
      <article class="card" role="tabpanel">
        <h2>${esc(d.title)}</h2>
        <p class="day-theme">${esc(d.theme)}</p>
        <ol class="timeline">
          ${d.items.map((it) => `
            <li>
              <time>${esc(it.time)}</time>
              <div>
                <div class="t">${esc(it.title)}${it.tag ? `<span class="tag" style="color:var(${TAG_COLOR[it.tag] || "--muted"})">${esc(it.tag)}</span>` : ""}</div>
                ${it.note ? `<div class="n">${esc(it.note)}</div>` : ""}
              </div>
            </li>`).join("")}
        </ol>
      </article>`;
    store.set("hk-trip:day", i);
  }
  T.days.forEach((d, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.textContent = `Day ${i + 1}`;
    b.addEventListener("click", () => showDay(i));
    tabs.appendChild(b);
  });
  const saved = store.get("hk-trip:day");
  showDay(Number.isInteger(saved) && saved < T.days.length ? saved : 0);

  // Budget
  const fmt = (n) => `${T.currency} ${Number(n || 0).toLocaleString()}`;
  $("budget").tBodies[0].innerHTML = T.budget
    .map((b) => `<tr><td>${esc(b.item)}</td><td class="num">${fmt(b.amount)}</td><td>${esc(b.note)}</td></tr>`)
    .join("");
  const total = T.budget.reduce((s, b) => s + Number(b.amount || 0), 0);
  $("budget").tFoot.innerHTML = `<tr><td>合計</td><td class="num">${fmt(total)}</td><td></td></tr>`;

  // Checklist (state kept only in this browser)
  const checked = new Set(store.get("hk-trip:checked") || []);
  $("checklist").innerHTML = T.checklist
    .map((c) => `<li><label><input type="checkbox" value="${esc(c)}" ${checked.has(c) ? "checked" : ""}><span>${esc(c)}</span></label></li>`)
    .join("");
  $("checklist").addEventListener("change", (e) => {
    if (e.target.checked) checked.add(e.target.value); else checked.delete(e.target.value);
    store.set("hk-trip:checked", [...checked]);
  });

  // Tips & links
  $("tips").innerHTML = T.tips.map((t) => `<dt>${esc(t.title)}</dt><dd>${esc(t.body)}</dd>`).join("");
  $("links").innerHTML = T.links
    .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a></li>`)
    .join("");
})();
