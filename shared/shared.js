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

  // ========================================
  // SHADCN COMPONENTS
  // ========================================

  // Background Beams Component
  function initBackgroundBeams(container) {
    if (!container) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'background-beams-svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 696 316');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const mainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    mainPath.setAttribute('d', 'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875');
    mainPath.setAttribute('stroke', 'url(#paint0_radial)');
    mainPath.setAttribute('stroke-opacity', '0.05');
    mainPath.setAttribute('stroke-width', '0.5');
    mainPath.setAttribute('class', 'main-path');
    svg.appendChild(mainPath);

    const paths = [
      'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875',
      'M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867',
      'M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859',
      'M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851',
      'M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843',
      'M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835',
      'M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827',
      'M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819',
      'M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811',
      'M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803',
    ];

    paths.forEach((path, index) => {
      const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathEl.setAttribute('d', path);
      pathEl.setAttribute('stroke', `url(#linearGradient-${index})`);
      pathEl.setAttribute('stroke-opacity', '0.4');
      pathEl.setAttribute('stroke-width', '0.5');
      pathEl.setAttribute('class', 'animated-path');
      pathEl.style.animationDelay = `${index * 0.5}s`;
      svg.appendChild(pathEl);
    });

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    const radialGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    radialGradient.setAttribute('id', 'paint0_radial');
    radialGradient.setAttribute('cx', '0');
    radialGradient.setAttribute('cy', '0');
    radialGradient.setAttribute('r', '1');
    radialGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    radialGradient.setAttribute('gradientTransform', 'translate(352 34) rotate(90) scale(555 1560.62)');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0.0666667');
    stop1.setAttribute('stop-color', 'var(--muted)');
    radialGradient.appendChild(stop1);

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '0.243243');
    stop2.setAttribute('stop-color', 'var(--muted)');
    radialGradient.appendChild(stop2);

    const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop3.setAttribute('offset', '0.43594');
    stop3.setAttribute('stop-color', 'var(--bg)');
    stop3.setAttribute('stop-opacity', '0');
    radialGradient.appendChild(stop3);

    defs.appendChild(radialGradient);

    paths.forEach((_, index) => {
      const linearGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      linearGrad.setAttribute('id', `linearGradient-${index}`);
      linearGrad.setAttribute('x1', '0%');
      linearGrad.setAttribute('y1', '0%');
      linearGrad.setAttribute('x2', '100%');
      linearGrad.setAttribute('y2', '0%');

      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('stop-color', 'var(--green-800)');
      stop1.setAttribute('stop-opacity', '0');
      linearGrad.appendChild(stop1);

      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '32.5%');
      stop2.setAttribute('stop-color', 'var(--green-800)');
      linearGrad.appendChild(stop2);

      const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop3.setAttribute('offset', '100%');
      stop3.setAttribute('stop-color', 'var(--green-400)');
      stop3.setAttribute('stop-opacity', '0');
      linearGrad.appendChild(stop3);

      defs.appendChild(linearGrad);
    });

    svg.appendChild(defs);
    container.appendChild(svg);
  }

  // 3D Card Component
  function init3DCard(card) {
    if (!card) return;

    let isMouseEntered = false;

    function handleMouseMove(e) {
      if (!isMouseEntered) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    function handleMouseEnter() {
      isMouseEntered = true;
      card.classList.add('card-3d-hover');
    }

    function handleMouseLeave() {
      isMouseEntered = false;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.classList.remove('card-3d-hover');
    }

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    card.classList.add('card-3d-enabled');
  }

  // Animated Tooltip Component
  function initTooltip(element) {
    const tooltipText = element.getAttribute('data-tooltip');
    const position = element.getAttribute('data-tooltip-position') || 'top';

    if (!tooltipText) return;

    const tooltip = document.createElement('div');
    tooltip.className = `tooltip-content tooltip-${position}`;
    tooltip.textContent = tooltipText;
    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('aria-hidden', 'true');

    let container = element.closest('.tooltip-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'tooltip-container';
      element.parentNode.insertBefore(container, element);
      container.appendChild(element);
    }

    container.appendChild(tooltip);

    element.addEventListener('focus', function() {
      container.setAttribute('aria-expanded', 'true');
      tooltip.setAttribute('aria-hidden', 'false');
    });

    element.addEventListener('blur', function() {
      container.setAttribute('aria-expanded', 'false');
      tooltip.setAttribute('aria-hidden', 'true');
    });

    element.addEventListener('mouseenter', function() {
      container.setAttribute('aria-expanded', 'true');
      tooltip.setAttribute('aria-hidden', 'false');
    });

    element.addEventListener('mouseleave', function() {
      container.setAttribute('aria-expanded', 'false');
      tooltip.setAttribute('aria-hidden', 'true');
    });
  }

  // Sparkles Component
  function createSparkles(container, count) {
    if (!container) return;

    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';

    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      sparkle.style.left = `${left}%`;
      sparkle.style.top = `${top}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
      
      sparklesContainer.appendChild(sparkle);
    }

    container.style.position = 'relative';
    container.appendChild(sparklesContainer);
  }

  // Initialize all components
  function initComponents() {
    // Background beams
    document.querySelectorAll('.background-beams').forEach(initBackgroundBeams);
    
    // 3D cards
    document.querySelectorAll('.pricing-card').forEach(init3DCard);
    document.querySelectorAll('.use-case-card').forEach(init3DCard);
    document.querySelectorAll('[data-3d-card]').forEach(init3DCard);
    
    // Tooltips
    document.querySelectorAll('[data-tooltip]').forEach(initTooltip);
    
    // Sparkles
    document.querySelectorAll('[data-sparkles]').forEach(function(element) {
      const count = parseInt(element.getAttribute('data-sparkles')) || 8;
      createSparkles(element, count);
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initThemeToggle();
      initFooterYear();
      initComponents();
    });
  } else {
    initThemeToggle();
    initFooterYear();
    initComponents();
  }
})();

