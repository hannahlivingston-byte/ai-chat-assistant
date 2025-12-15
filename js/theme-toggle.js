document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    const themes = ["light", "dark", "jaguars"];
    let currentTheme = localStorage.getItem("theme") || "light";

    function applyTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            themeIcon.textContent = "🌙";
        } 
        else if (theme === "jaguars") {
            document.documentElement.setAttribute("data-theme", "jaguars");
            themeIcon.textContent = "🐆";
        } 
        else {
            document.documentElement.removeAttribute("data-theme");
            themeIcon.textContent = "☀️";
        }

        localStorage.setItem("theme", theme);
        currentTheme = theme;
    }

    // Apply saved theme on load
    applyTheme(currentTheme);

    // Cycle themes on click
    themeToggle.addEventListener("click", () => {
        const nextTheme =
            themes[(themes.indexOf(currentTheme) + 1) % themes.length];
        applyTheme(nextTheme);
    });
});

