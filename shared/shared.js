/* ========================================
   SHARED JAVASCRIPT - Common Functionality
   ======================================== */
/* Include this file before the closing </body> tag */

(function() {
  'use strict';

  const html = document.documentElement;

  // Theme Toggle Functionality
  function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", currentTheme);

    // Update icon and logo based on current theme
    function updateIcon() {
      const isDark = html.getAttribute("data-theme") === "dark";
      const logoImg = document.querySelector(".brand img");

      // Update theme toggle icon
      themeToggle.innerHTML = isDark
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;

      // Update logo
      if (logoImg) {
        logoImg.src = isDark ? "assets/Grona_light.png" : "assets/logo.png";
      }
    }

    updateIcon();

    // Add click listener
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateIcon();
      themeToggle.classList.add("toggled");
      setTimeout(() => themeToggle.classList.remove("toggled"), 220);
    });
  }

  // Footer Year
  function initFooterYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initThemeToggle();
      initFooterYear();
    });
  } else {
    initThemeToggle();
    initFooterYear();
  }
})();

