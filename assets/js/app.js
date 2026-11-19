const WHATSAPP = "919653342288";
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("menuSearch");
let allItems = [];
let activeFilter = "all";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function orderLink(item) {
  const message = `Hello Mauli Momo House! I would like to enquire about ${item.name}. Please share the available options, current price and pickup time.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = allItems.filter(item => (activeFilter === "all" || item.diet === activeFilter) &&
    `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query));
  menuGrid.innerHTML = filtered.map(item => `
    <article class="food-card">
      <div class="food-photo ${item.diet}"><span class="photo-mark">${item.diet === "veg" ? "V" : "N"}</span><span class="photo-caption">MAULI MOMO HOUSE</span></div>
      <div class="food-body">
        <div class="food-meta"><span class="diet-label ${item.diet}">${item.diet === "veg" ? "● Veg" : "● Non-veg"}</span><span>${escapeHTML(item.category)}</span></div>
        <h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.description)}</p>
        ${item.preparations.length ? `<div class="preparations"><span>Available styles</span><div>${item.preparations.map(p => `<i>${escapeHTML(p)}</i>`).join("")}</div></div>` : ""}
        <div class="food-bottom"><strong>${escapeHTML(item.price)}</strong><a class="order-item" href="${orderLink(item)}" target="_blank" rel="noopener">Enquire / Order ↗</a></div>
      </div>
    </article>`).join("");
  if (!filtered.length) menuGrid.innerHTML = `<p class="no-results">No dishes found. Try another search.</p>`;
}

fetch("menu.json").then(response => {
  if (!response.ok) throw new Error("Could not load menu data");
  return response.json();
}).then(items => { allItems = items; renderMenu(); })
  .catch(() => { menuGrid.innerHTML = `<p class="no-results">Menu could not load. Please refresh the page.</p>`; });

searchInput.addEventListener("input", renderMenu);
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  activeFilter = button.dataset.filter;
  renderMenu();
}));
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
