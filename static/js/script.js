// Select the toggle button, body, and navbar
const toggleContainer = document.getElementById('theme-toggle');
const body = document.getElementById('theme');
const navbar = document.querySelector('nav');

// Event Listener for Toggle Button
toggleContainer.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark-mode');

  if (isDarkMode) {
    // Switch to Light Mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleContainer.classList.remove('dark');

    // Update navbar to light mode
    navbar.style.backgroundColor = '#f2f2f2'; // Light gray background
    navbar.style.color = '#000'; // Black text
  } else {
    // Switch to Dark Mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleContainer.classList.add('dark');

    // Update navbar to dark mode
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Dark background
    navbar.style.color = '#fff'; // White text
  }
});