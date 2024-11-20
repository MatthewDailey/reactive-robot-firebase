function toggleTheme() {
    const root = document.documentElement;
    const currentTextColor = getComputedStyle(root).getPropertyValue('--text-color').trim();
    
    if (currentTextColor === '#333333FF' || currentTextColor === '#333333ff') {
        root.style.setProperty('--text-color', '#FFFFFF');
        root.style.setProperty('--background-color', '#1a1a1a');
        document.querySelector('.theme-toggle').textContent = '🌙';
    } else {
        root.style.setProperty('--text-color', '#333333FF');
        root.style.setProperty('--background-color', '#FFFFFF');
        document.querySelector('.theme-toggle').textContent = '☀️';
    }
}

// Set initial icon based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('.theme-toggle').textContent = '🌙';
}