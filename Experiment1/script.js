const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggleBtn.addEventListener('click', () => {
    // Check current theme
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }
});