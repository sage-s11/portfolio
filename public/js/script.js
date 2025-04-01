// Get the mode toggle element
const modeToggle = document.getElementById("mode-toggle");

// Check the current mode from localStorage, default to light mode
let isDarkMode = localStorage.getItem("dark-mode") === "true";

// Apply the dark mode class based on the stored preference
if (isDarkMode) {
    document.body.classList.add("dark-mode");
    modeToggle.innerHTML = "🌞"; // Change to sun emoji for dark mode
} else {
    document.body.classList.add("light-mode"); // Default to light mode
    modeToggle.innerHTML = "🌙"; // Change to moon emoji for light mode
}

// Add a click event to toggle dark mode
modeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode; // Toggle the mode
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        modeToggle.innerHTML = "🌞"; // Change to sun emoji for dark mode
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        modeToggle.innerHTML = "🌙"; // Change to moon emoji for light mode
    }

    // Store the current mode preference in localStorage
    localStorage.setItem("dark-mode", isDarkMode);
});
