/* =====================================================================
   Stowarzyszenie „Za Daleko” — skrypt strony
   Wstawia treści z pliku content.js i obsługuje menu oraz animacje.
   Treści NIE edytujemy tutaj — tylko w content.js.
   ===================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  if (typeof TRESC === "undefined") {
    console.error("Nie udało się wczytać content.js — sprawdź, czy plik nie zawiera błędu (np. brakującego przecinka lub cudzysłowu).");
    document.documentElement.classList.remove("js");
    return;
  }

  /* ---------- Narzędzia ---------- */

  // Tworzy element: el("p", { class: "x" }, "tekst", innyElement)
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === undefined || value === null || value === false) continue;
      if (key === "class") node.className = value;
      else if (key === "style") node.setAttribute("style", value);
      else node.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children) {
      if (child === undefined || child === null || child === false || child === "") continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  const text = (value) => (typeof value === "string" ? value.trim() : "");

  // Odczytuje wartość z TRESC po ścieżce, np. "oNas.cytat"
  function get(path) {
    return path.split(".").reduce((obj, key) => (obj == null ? undefined : obj[key]), TRESC);
  }

  // Tekst z \n zamienia na linie rozdzielone <br>
  function fillText(node, value) {
    node.textContent = "";
    text(value).split("\n").forEach((line, i) => {
      if (i > 0) node.append(document.createElement("br"));
      node.append(line);
    });
  }

  function isExternal(url) {
    return /^https?:\/\//i.test(url) && !url.includes("za-daleko.github.io");
  }

  function linkAttrs(url) {
    return isExternal(url) ? { href: url, target: "_blank", rel: "noopener" } : { href: url };
  }

  // Pozycje kadru zastępczej mapy — każdy wpis bez zdjęcia dostaje inny fragment
  const MAP_CROPS = ["30% 35%", "65% 25%", "55% 80%", "20% 60%", "80% 50%", "45% 15%"];

  // Blok zdjęcia: prawdziwe zdjęcie albo zastępnik z mapą
  function media(src, alt, index, extra) {
    const box = el("div", { class: "media" });
    const fallback = () => {
      box.classList.add("media--empty");
      box.style.setProperty("--pos", MAP_CROPS[index % MAP_CROPS.length]);
      if (extra) box.append(extra);
    };
    if (text(src)) {
      const img = el("img", { src: text(src), alt: text(alt), loading: "lazy" });
      img.addEventListener("error", () => {
        console.warn(`Nie znaleziono zdjęcia: ${src} — sprawdź nazwę pliku i ścieżkę w content.js.`);
        img.remove();
        fallback();
      });
      box.append(img);
    } else {
      box.setAttribute("aria-hidden", "true");
      fallback();
    }
    return box;
  }

  const emptyState = (message) => el("p", { class: "empty rv" }, message);
  const list = (value) => (Array.isArray(value) ? value.filter(Boolean) : []);

  // Każda podstrona ma tylko część kontenerów — brakujące po prostu pomijamy
  const byId = (id) => document.getElementById(id);

  /* ---------- Proste teksty (atrybut data-tresc w plikach HTML) ---------- */
  document.querySelectorAll("[data-tresc]").forEach((node) => fillText(node, get(node.dataset.tresc)));

  /* ---------- O nas ---------- */
  const aboutBox = byId("onas-akapity");
  if (aboutBox) list(TRESC.oNas && TRESC.oNas.akapity).forEach((p) => aboutBox.append(el("p", null, text(p))));

  const aboutPhotos = byId("onas-zdjecia");
  if (aboutPhotos) {
    const photos = list(TRESC.oNas && TRESC.oNas.zdjecia).filter((z) => text(z.zdjecie));
    if (photos.length) photos.forEach((z, i) => aboutPhotos.append(el("li", { class: "rv" }, media(z.zdjecie, z.alt, i))));
    else aboutPhotos.remove();
  }

  /* ---------- Działania ---------- */
  const areasBox = byId("dzialania-lista");
  if (areasBox) list(TRESC.dzialania && TRESC.dzialania.lista).forEach((item, i) => {
    areasBox.append(
      el("li", { class: "area rv" },
        el("span", { class: "area__n", "aria-hidden": "true" }, String(i + 1).padStart(2, "0")),
        el("h2", { class: "area__title" }, text(item.tytul)),
        el("p", { class: "area__text" }, text(item.opis))
      )
    );
  });

  /* ---------- Projekty ---------- */
  const projectsBox = byId("projekty-lista");
  // Sortowanie od najnowszego: rok + ostatni miesiąc z pola „okres”, np. "wrzesień – grudzień 2026"
  const MONTHS = ["stycz", "lut", "mar", "kwie", "maj", "czerw", "lip", "sierp", "wrze", "pa", "list", "grud"];
  function dateKey(okres) {
    const s = text(okres).toLowerCase();
    const years = s.match(/\d{4}/g);
    if (!years) return -1;
    let month = 0;
    s.split(/[^a-ząćęłńóśźż]+/).forEach((word) => {
      const m = MONTHS.findIndex((p) => word.startsWith(p));
      if (m >= 0) month = m + 1;
    });
    return Number(years[years.length - 1]) * 13 + month;
  }
  const projects = projectsBox
    ? list(TRESC.projekty && TRESC.projekty.lista).slice().sort((a, b) => dateKey(b.okres) - dateKey(a.okres))
    : [];
  if (projectsBox && !projects.length) {
    projectsBox.append(emptyState(text(TRESC.projekty && TRESC.projekty.gdyBrak)));
  }
  projects.forEach((p, i) => {
    const link = text(p.link);
    projectsBox.append(
      el("article", { class: "proj rv" + (i === 0 ? " proj--featured" : "") },
        media(p.zdjecie, p.alt, i),
        el("div", { class: "proj__body" },
          text(p.rodzaj) && el("span", { class: "proj__tag" }, text(p.rodzaj)),
          el("h2", { class: "proj__title" }, text(p.tytul)),
          text(p.okres) && el("p", { class: "proj__date" }, text(p.okres)),
          ...text(p.opis).split(/\n\s*\n/).map((para) => el("p", { class: "proj__text" }, para.trim())),
          link && el("a", Object.assign({ class: "proj__link" }, linkAttrs(link)),
            el("span", null, text(p.linkTekst) || "Szczegóły"),
            el("span", { class: "visually-hidden" }, `: ${text(p.tytul)}`),
            el("span", { "aria-hidden": "true" }, "→"))
        ),
        galleryOf(p)
      )
    );
  });

  // Galeria pod projektem (opcjonalna)
  function galleryOf(p) {
    const photos = list(p.galeria).filter((g) => text(g.zdjecie));
    if (!photos.length) return null;
    return el("ul", { class: "proj__gallery", style: `--cols: ${Math.min(photos.length, 4)}`, "aria-label": `Zdjęcia: ${text(p.tytul)}` },
      ...photos.map((g, j) => el("li", null, media(g.zdjecie, g.alt, j))));
  }

  /* ---------- Zespół ---------- */
  const teamBox = byId("zespol-lista");
  const team = teamBox ? list(TRESC.zespol && TRESC.zespol.lista) : [];
  if (teamBox && !team.length) {
    teamBox.append(emptyState(text(TRESC.zespol && TRESC.zespol.gdyBrak)));
  }
  team.forEach((person, i) => {
    const name = text(person.imie);
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
    const box = media(person.zdjecie, text(person.alt) || name, i,
      el("span", { class: "person__initials", "aria-hidden": "true" }, initials));
    teamBox.append(
      el("article", { class: "person rv" },
        box,
        el("h2", { class: "person__name" }, name),
        text(person.funkcja) && el("span", { class: "person__role" }, text(person.funkcja)),
        text(person.opis) && el("p", { class: "person__text" }, text(person.opis))
      )
    );
  });

  // Ikony kanałów — proste kontury w kolorze tekstu (currentColor)
  const ICONS = {
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/>',
    facebook: '<path d="M14.5 3H13a4 4 0 0 0-4 4v3H6.5v3.5H9V21h3.5v-7.5h2.6l.6-3.5h-3.2V7.5a1 1 0 0 1 1-1h2V3z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.8 10.5V17M7.8 7.3v.1M11.6 17v-6.5M11.6 13.4a2.5 2.5 0 0 1 5 0V17"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10.5 9.5 4 2.5-4 2.5z"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.2 4.3 5 4.5"/>',
    nip: '<path d="M6.5 3h7.5l4.5 4.5V21h-12z"/><path d="M14 3v4.5h4.5M9.5 12.5h6M9.5 16.5h6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  };
  function icon(name) {
    const span = document.createElement("span");
    span.className = "icon";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.link}</svg>`;
    return span;
  }

  const k = TRESC.kontakt || {};
  const channels = [];
  if (text(k.email)) channels.push({ kanal: "E-mail", ikona: "email", nazwa: text(k.email), adres: "mailto:" + text(k.email), krotko: "E-mail" });
  [["Instagram", k.instagram], ["Facebook", k.facebook], ["LinkedIn", k.linkedin]].forEach(([label, c]) => {
    if (c && text(c.adres)) channels.push({ kanal: label, ikona: label.toLowerCase(), nazwa: text(c.nazwa) || label, adres: text(c.adres), krotko: label });
  });
  list(k.inne).forEach((c) => {
    if (text(c.adres)) channels.push({ kanal: text(c.kanal), ikona: text(c.kanal).toLowerCase(), nazwa: text(c.nazwa) || text(c.kanal), adres: text(c.adres), krotko: text(c.kanal) });
  });
  // NIP — zwykły tekst, bez linku; tylko na stronie Kontakt (nie w stopce)
  if (text(k.nip)) channels.push({ kanal: "NIP", ikona: "nip", nazwa: text(k.nip), tylkoKontakt: true });

  const channelsBox = byId("kontakt-kanaly");
  const footerContact = byId("stopka-kontakt");
  channels.forEach((c) => {
    const value = c.adres ? el("a", linkAttrs(c.adres), c.nazwa) : el("span", { class: "channels__v", translate: "no" }, c.nazwa);
    if (channelsBox) channelsBox.append(el("li", null,
      el("span", { class: "channels__k" }, icon(c.ikona), c.kanal),
      value));
    if (footerContact && !c.tylkoKontakt) footerContact.append(el("li", null,
      el("a", Object.assign({ class: "footer__contact" }, linkAttrs(c.adres)), icon(c.ikona), c.krotko)));
  });

  const privacy = text(TRESC.stopka && TRESC.stopka.politykaPrywatnosci);
  const privacyBox = byId("stopka-polityka");
  if (privacy && privacyBox) {
    privacyBox.querySelector("a").setAttribute("href", privacy);
    privacyBox.hidden = false;
  }
  if (byId("rok")) byId("rok").textContent = new Date().getFullYear();

  /* =====================================================================
     NAWIGACJA
     ===================================================================== */
  const nav = document.getElementById("nav");
  const burger = nav.querySelector(".burger");
  const menu = document.getElementById("menu");
  const menuLinks = [...menu.querySelectorAll("a")];

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  }
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  menuLinks.forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); burger.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-open") && !nav.contains(e.target)) setMenu(false);
  });
  window.matchMedia("(min-width: 821px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  // Łagodne pojawianie się elementów przy przewijaniu
  if ("IntersectionObserver" in window) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); reveal.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".rv").forEach((node) => reveal.observe(node));
  } else {
    document.querySelectorAll(".rv").forEach((node) => node.classList.add("is-in"));
  }
})();
