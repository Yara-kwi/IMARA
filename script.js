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
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector(
      'button[type="submit"]'
    );

    const thanks = document.getElementById("formThanks");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz2veLm83-NDeqTBa0q1bLxfvfimk4kHEyuRQ5DBUnRraCOAxMTj1K2bBDpYppCekotYg/exec";

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    thanks.style.display = "none";

    try {
      const formData = new FormData(contactForm);

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      });

      contactForm.reset();

      thanks.textContent =
        "Thank you! Your message has been submitted successfully.";

      thanks.style.display = "block";

    } catch (error) {
      thanks.textContent =
        "Something went wrong. Please try again.";

      thanks.style.display = "block";

      console.error("Contact form error:", error);

    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message →";
    }
  });
}


// Year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
