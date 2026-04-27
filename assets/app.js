import { PROFILE, PROJECTS, EXPERIENCE } from "./content.js?v=6";

const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];

function setText(sel, text) { const el = $(sel); if (el) el.textContent = text; }
function setHTML(sel, html) { const el = $(sel); if (el) el.innerHTML = html; }

document.title = `${PROFILE.name} · Atelier & Archive`;

setText("#monogram", PROFILE.monogram);
setText("#mastheadTitle", PROFILE.title);
setHTML("#issue", (PROFILE.issue || []).map(s => `<span>${s}</span>`).join(""));

if (PROFILE.portrait && PROFILE.portrait.src) {
  setHTML(
    "#portraitFrame",
    `
      <figure class="portrait">
        <img src="${PROFILE.portrait.src}" alt="${PROFILE.portrait.alt || ""}" />
        ${PROFILE.portrait.caption ? `<figcaption>${PROFILE.portrait.caption}</figcaption>` : ""}
      </figure>
    `
  );
}
setHTML(
  "#lede",
  (PROFILE.about || []).map((p, i) =>
    `<p${i === 0 ? ' class="drop-cap"' : ""}>${p}</p>`
  ).join("")
);
setHTML(
  "#heroMeta",
  (PROFILE.meta || []).map(m => `<div><dt>${m.label}</dt><dd>${m.value}</dd></div>`).join("")
);

setHTML(
  "#tools",
  (PROFILE.tools || []).map(t => `<li><span>${t.name}</span><span>${t.note}</span></li>`).join("")
);

const colophonTemplate = PROFILE.colophon || "{email}";
const emailLink = `<a href="mailto:${PROFILE.email}">${PROFILE.emailLinkLabel || "write to me"}</a>`;
setHTML("#colophonWrite", colophonTemplate.replace("{email}", emailLink));
setHTML(
  "#socials",
  PROFILE.socials.map(s => `<a href="${s.href}" target="_blank" rel="noreferrer">${s.label}</a>`).join("")
);

// Projects mosaic
const mosaic = $("#mosaic");
PROJECTS.forEach(p => {
  const el = document.createElement("button");
  el.className = `tile ${p.size}`;
  el.type = "button";
  el.dataset.id = p.id;
  el.setAttribute("aria-label", `Open dossier for ${p.title}`);

  if (p.size === "swatch") {
    el.classList.add("no-tape");
    el.innerHTML = `
      <div class="plate" data-num="${p.num || ""}"></div>
      <div class="caption">
        <span class="tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p class="snippet">${p.snippet}</p>
      </div>
    `;
  } else {
    el.innerHTML = `
      <div>
        <span class="tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p class="snippet">${p.snippet}</p>
      </div>
      <div class="foot">
        <div class="chips">${(p.chips || []).map(c => `<span class="chip">${c}</span>`).join("")}</div>
        <span class="arrow" aria-hidden="true">read →</span>
      </div>
      ${p.stamp ? `<span class="stamp" aria-hidden="true">${p.stamp}</span>` : ""}
    `;
  }

  el.addEventListener("click", () => openProject(p.id));
  mosaic.appendChild(el);
});

// Experience ledger
const ledger = $("#ledger");
EXPERIENCE.forEach(e => {
  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `
    <div class="when">${e.when}</div>
    <div class="who"><h3>${e.org}</h3><div class="role">${e.role}</div></div>
    <div class="what">${e.what}</div>
    <div class="place">${e.place}</div>
  `;
  ledger.appendChild(row);
});

// Modal
const modal = $("#modal");
const closeBtn = $("#closeModal");
let lastFocus = null;

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  setText("#modalKicker", `Dossier · ${p.tag}`);
  setText("#modalTitle", p.title);
  setHTML("#modalGallery", (p.images || []).map((img, i) => `
    <figure class="plate" style="--tilt:${i % 2 === 0 ? "-.4deg" : ".5deg"}">
      <a href="${img.src}" target="_blank" rel="noreferrer" aria-label="Open ${img.alt || "screenshot"} in new tab">
        <img src="${img.src}" alt="${img.alt || ""}" loading="lazy" />
      </a>
      ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
    </figure>
  `).join(""));
  setHTML("#modalBody", p.body.map(t => `<p>${t}</p>`).join(""));
  setHTML("#modalSpecs", Object.entries(p.specs || {}).map(
    ([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`
  ).join(""));
  setHTML("#modalActions", (p.links || []).map(
    l => `<a href="${l.href}" target="_blank" rel="noreferrer" class="${l.primary ? "" : "ghost"}">${l.label} →</a>`
  ).join(""));

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  closeBtn.focus();
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", `#${p.id}`);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus && lastFocus.focus) lastFocus.focus();
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// Deep link on load
if (location.hash) {
  const id = decodeURIComponent(location.hash.slice(1));
  if (PROJECTS.some(p => p.id === id)) {
    requestAnimationFrame(() => openProject(id));
  }
}

// Theme toggle
const root = document.documentElement;
const lights = $("#lights");

const saved = localStorage.getItem("theme");
if (saved === "dark" || (!saved && matchMedia("(prefers-color-scheme: dark)").matches)) {
  root.setAttribute("data-theme", "dark");
} else {
  root.setAttribute("data-theme", "light");
}

lights.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

$$(".reveal").forEach(el => observer.observe(el));

requestAnimationFrame(() => {
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
  });
});
