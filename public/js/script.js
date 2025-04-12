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

  const text = el.textContent.trim();
  el.textContent = ''; // Clear it before animating

  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60); // Adjust speed here
    }
  }

  type(); // Start animation
});
