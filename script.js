let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.toggle-mode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon for light mode
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
    localStorage.setItem('darkMode', 'disabled');
}

// Set initial mode based on localStorage
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode(); // Ensure it starts in light mode if not explicitly set
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); // Re-check the state
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
