// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") nav.classList.remove("open");
});

// Hero reveal animation on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    // next frame makes transitions consistent
    requestAnimationFrame(() => el.classList.add("in"));
  });
});

// document.getElementById("year")?.textContent = new Date().getFullYear();

window.addEventListener("DOMContentLoaded", () => {
  const arrow = document.getElementById("processArrow");
  if (!arrow) return;

  // next frame makes the transition trigger reliably
  requestAnimationFrame(() => {
    arrow.classList.add("in");
  });
});