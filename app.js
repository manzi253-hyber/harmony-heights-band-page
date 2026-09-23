const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-button");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

themeButton?.addEventListener("click", () => {
  const lightMode = document.body.classList.toggle("light-mode");
  themeButton.setAttribute("aria-pressed", String(lightMode));
  themeButton.textContent = lightMode ? "☾" : "☼";
  themeButton.setAttribute("aria-label", lightMode ? "Use dark mode" : "Use light mode");
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(contactForm).get("name");
  formStatus.textContent = `Thanks, ${name || "there"} — your message is queued for the band.`;
  contactForm.reset();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("[data-year]").textContent = new Date().getFullYear();
