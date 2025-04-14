// Select the toggle container
const toggleContainer = document.querySelector('.toggle-container');
const body = document.body;

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or default to light mode
if (savedTheme) {
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(savedTheme);

  if (savedTheme === 'dark-mode') {
    toggleContainer.classList.add('dark');
  }
} else {
  body.classList.add('light-mode');
}

// Handle the theme toggle
toggleContainer.addEventListener('click', () => {
  const isLight = body.classList.contains('light-mode');

  body.classList.toggle('light-mode', !isLight);
  body.classList.toggle('dark-mode', isLight);
  toggleContainer.classList.toggle('dark', isLight);
  localStorage.setItem('theme', isLight ? 'dark-mode' : 'light-mode');
});

// Typewriter animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.typewriter');
  if (!el) return;

  const text = el.getAttribute('data-text') || el.textContent.trim();
  el.textContent = '';
  el.style.fontFamily = "'Courier New', monospace";

  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
});

// Fade effect on scroll for name
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".name");

  const fadeInName = () => {
    if (window.scrollY === 0) {
      nameElement.classList.add("fade-in");
      nameElement.classList.remove("fade-out");
    } else {
      nameElement.classList.add("fade-out");
      nameElement.classList.remove("fade-in");
    }
  };

  fadeInName();
  window.addEventListener("scroll", fadeInName);
});

// Section observer animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  }, {
    root: null,
    threshold: 0.1,
  });

  sections.forEach((section) => observer.observe(section));
});

// Responsive menu toggle
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("navbar-links");

toggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");

  links.classList.toggle("hidden");
  links.classList.toggle("flex");
  links.classList.toggle("flex-col");
  links.classList.toggle("absolute");
  links.classList.toggle("top-14");
  links.classList.toggle("rounded-lg");
  links.classList.toggle("p-4");

  // Set correct bg/text color based on mode
  if (isDarkMode) {
    links.classList.add("bg-black", "text-white");
    links.classList.remove("bg-gray-100", "text-black");
  } else {
    links.classList.add("bg-gray-100", "text-black");
    links.classList.remove("bg-black", "text-white");
  }
});

// Hide menu on outside click
document.addEventListener("click", (event) => {
  if (!toggle.contains(event.target) && !links.contains(event.target)) {
    if (!links.classList.contains("sm:flex")) {
      links.classList.add("hidden");
      links.classList.remove(
        "flex", "flex-col", "absolute", "top-14",
        "bg-gray-100", "bg-black",
        "text-black", "text-white",
        "rounded-lg", "p-4"
      );
    }
  }
});

// Hide menu on screen resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    links.classList.add("sm:flex");
    links.classList.remove(
      "hidden", "flex", "flex-col", "absolute", "top-14",
      "bg-gray-100", "bg-black",
      "text-black", "text-white",
      "rounded-lg", "p-4"
    );
  } else {
    links.classList.remove("sm:flex");
    links.classList.add("hidden");
  }
});
