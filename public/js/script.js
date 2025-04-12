// Select the toggle container
const toggleContainer = document.querySelector('.toggle-container');
const body = document.body;

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or default to light mode
if (savedTheme) {
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(savedTheme);

  // Add the 'dark' class to the toggle if the saved theme is dark-mode
  if (savedTheme === 'dark-mode') {
    toggleContainer.classList.add('dark');
  }
} else {
  body.classList.add('light-mode'); // Default to light mode
}

// Handle the toggle button click event
toggleContainer.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleContainer.classList.add('dark'); // Add 'dark' class for toggle animation
    localStorage.setItem('theme', 'dark-mode'); // Save theme to localStorage
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleContainer.classList.remove('dark'); // Remove 'dark' class for toggle animation
    localStorage.setItem('theme', 'light-mode'); // Save theme to localStorage
  }
});

// Typewriter animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = ''; // Clear the static text
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
  el.textContent = ''; // Clear it before animating
  el.style.fontFamily = "'Courier New', monospace"; // Re-apply just in case

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


document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".name");

    // Function to handle fade-in and fade-out
    const fadeInName = () => {
        if (window.scrollY === 0) {
            nameElement.classList.add("fade-in");
            nameElement.classList.remove("fade-out");
        } else {
            nameElement.classList.add("fade-out");
            nameElement.classList.remove("fade-in");
        }
    };

    // Trigger the fade-in effect on page load
    fadeInName();

    // Add scroll event listener to manage fade-in and fade-out
    window.addEventListener("scroll", fadeInName);
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    root: null, // Use viewport as root
    threshold: 0.1, // Trigger when 10% of the section is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // Add active class when the section is in view
      } else {
        entry.target.classList.remove("active"); // Remove active class when the section exits
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => observer.observe(section));
});