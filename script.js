// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Newsletter (footer)
const subscribe = document.getElementById("subscribe");
if (subscribe) {
  subscribe.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    document.getElementById("thanks").style.display = "block";
  });
}

// Contact form (contact page)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    document.getElementById("formThanks").style.display = "block";
  });
}

// Year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
