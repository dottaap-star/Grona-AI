/* ========================================
   SHARED JAVASCRIPT - Common Functionality
   ======================================== */
/* Include this file before the closing </body> tag */

(function() {
  'use strict';

  const html = document.documentElement;

  function getSafeStorage() {
    try {
      const storage = window.localStorage;
      const testKey = '__grona_storage_test__';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return storage;
    } catch (err) {
      console.warn('Local storage is unavailable; continuing without persistence.', err);
      return null;
    }
  }

  const safeStorage = getSafeStorage();
  window.__gronaStorage = safeStorage;

  // Theme Toggle Functionality
  function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const currentTheme = (safeStorage && safeStorage.getItem("theme")) || "light";
    html.setAttribute("data-theme", currentTheme);

    // Update icon and logo based on current theme
    function updateIcon() {
      const isDark = html.getAttribute("data-theme") === "dark";

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

      // Update logos across the page
      const themedLogos = document.querySelectorAll("[data-theme-logo]");
      if (themedLogos.length) {
        themedLogos.forEach((logo) => {
          const lightSrc = logo.getAttribute("data-logo-light") || "assets/logo.png";
          const darkSrc = logo.getAttribute("data-logo-dark") || "assets/Grona_light.png";
          logo.setAttribute("src", isDark ? darkSrc : lightSrc);
        });
      } else {
        const logoImg = document.querySelector(".brand img");
        if (logoImg) {
          logoImg.src = isDark ? "assets/Grona_light.png" : "assets/logo.png";
        }
      }
    }

    window.__gronaRefreshTheme = updateIcon;
    updateIcon();

    // Add click listener
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme);
      if (safeStorage) {
        try {
          safeStorage.setItem("theme", newTheme);
        } catch (err) {
          console.warn('Unable to persist theme selection.', err);
        }
      }
      updateIcon();
      themeToggle.classList.add("toggled");
      setTimeout(() => themeToggle.classList.remove("toggled"), 220);
    });
  }

  // Footer Year
  function initFooterYear(root) {
    const context = root || document;
    const yearElements = context.querySelectorAll("[data-footer-year]");
    if (!yearElements.length) return;
    const year = new Date().getFullYear();
    yearElements.forEach((el) => {
      el.textContent = year;
    });
  }

  const INLINE_FOOTER_HTML = `
<footer class="final-footer scroll-reveal" role="contentinfo">
  <div class="footer-shell container">
    <div class="footer-columns">
      <div class="footer-brand">
        <a class="footer-logo" href="index.html" aria-label="grona home">
          <img
            src="assets/logo.png"
            alt="Grona.ai wordmark"
            width="180"
            height="48"
            data-theme-logo
            data-logo-light="assets/logo.png"
            data-logo-dark="assets/Grona_light.png"
          />
        </a>
        <p class="footer-tagline">Smarter Websites. Higher Sales.</p>
        <a class="footer-link footer-cta" href="#waitlist-form">Join the private beta →</a>
      </div>
      <div class="footer-column" aria-labelledby="footer-product-heading">
        <p id="footer-product-heading" class="footer-heading">Product</p>
        <ul class="footer-list">
          <li><a class="footer-link" href="how_it_works.html">How it works</a></li>
          <li><a class="footer-link" href="features.html">Features</a></li>
          <li><a class="footer-link" href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-column" aria-labelledby="footer-company-heading">
        <p id="footer-company-heading" class="footer-heading">Company</p>
        <ul class="footer-list">
          <li><a class="footer-link" href="mailto:hello@grona.ai">Contact</a></li>
          <li>
            <a
              class="footer-link"
              href="https://linkedin.com/company/grona-ai"
              target="_blank"
              rel="noreferrer"
            >LinkedIn</a>
          </li>
        </ul>
      </div>
      <div class="footer-column" aria-labelledby="footer-legal-heading">
        <p id="footer-legal-heading" class="footer-heading">Legal</p>
        <ul class="footer-list">
          <li><a class="footer-link" href="privacy-policy.html">Privacy Policy</a></li>
          <li><a class="footer-link" href="terms-conditions.html">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span data-footer-year></span> grona.ai — Built for teams that never stop testing.</p>
    </div>
  </div>
</footer>
`.trim();

  function initSharedFooter() {
    const mounts = document.querySelectorAll("[data-footer]");
    if (!mounts.length) return;

    const applyFooter = (html) => {
      mounts.forEach((mount) => {
        mount.innerHTML = html;
        initFooterYear(mount);
      });
      if (window.__gronaRefreshTheme) {
        window.__gronaRefreshTheme();
      }
    };

    const handleFailure = (error) => {
      if (error) {
        console.warn("Falling back to inline footer template:", error);
      }
      applyFooter(INLINE_FOOTER_HTML);
    };

    if (typeof fetch !== "function") {
      handleFailure();
      return;
    }

    fetch("shared/footer.html", { cache: "no-cache" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load footer");
        }
        return response.text();
      })
      .then((html) => applyFooter(html))
      .catch((error) => handleFailure(error));
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

  // Mobile Menu Toggle Functionality
  function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const iconMap = {
      'how_it_works.html': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8.67 19a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4 15.4a1.65 1.65 0 0 0-1.51-1H2a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4 8.67a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.6 4a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15.33 4a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8.6a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.4z"></path></svg>',
      'features.html': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.09 5.26L19 8l-4 3.5L16.18 17 12 14.5 7.82 17 9 11.5 5 8l4.91-.74L12 2z"></path></svg>',
      'pricing.html': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"></path><path d="M7 7h.01"></path></svg>',
      'blog.html': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>',
      'default': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"></path></svg>'
    };

    const getIconMarkup = (href) => {
      if (!href) return iconMap.default;
      const normalized = href.replace(/^\.\//, '').split(/[?#]/)[0];
      return iconMap[normalized] || iconMap.default;
    };
    
    // Only require menuBtn - navLinks is optional (some pages might not have it)
    if (!menuBtn) {
      console.warn('Mobile menu button not found');
      return;
    }
    
    // Create mobile menu overlay if it doesn't exist
    let mobileMenu = document.querySelector('.mobile-menu');
    if (!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      const menuPanel = document.createElement('div');
      menuPanel.className = 'mobile-menu-panel';
      mobileMenu.appendChild(menuPanel);
      
      // Clone the nav links if they exist
      if (navLinks) {
        const mobileNav = document.createElement('nav');
        mobileNav.className = 'nav-links mobile-nav-links';
        mobileNav.setAttribute('aria-label', 'Mobile navigation');
        
        // Clone all links from original nav
        const links = navLinks.querySelectorAll('a');
        links.forEach(function(link) {
          const clonedLink = document.createElement('a');
          Array.from(link.attributes).forEach(function(attr) {
            clonedLink.setAttribute(attr.name, attr.value);
          });
          const iconMarkup = getIconMarkup(link.getAttribute('href'));
          const label = link.textContent.trim();
          clonedLink.innerHTML = '<span class="mobile-nav-icon" aria-hidden="true">' + iconMarkup + '</span><span class="mobile-nav-label">' + label + '</span>';
          mobileNav.appendChild(clonedLink);
        });
        
        menuPanel.appendChild(mobileNav);
      } else {
        menuPanel.innerHTML = '<div class="mobile-nav-links"></div>';
      }
      
      body.appendChild(mobileMenu);
    }
    const menuPanel = mobileMenu.querySelector('.mobile-menu-panel') || mobileMenu;
    
    // Toggle menu
    function toggleMenu() {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        mobileMenu.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuBtn.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      } else {
        mobileMenu.classList.add('open');
        menuBtn.classList.add('open');
        menuBtn.setAttribute('aria-label', 'Close menu');
        menuBtn.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden';
      }
    }
    
    // Close menu when clicking overlay (not on the nav itself)
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        toggleMenu();
      }
    });
    
    // Close menu when clicking a link
    const mobileNavLinks = menuPanel.querySelectorAll('.nav-links a');
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        toggleMenu();
      });
    });
    
    // Toggle menu on button click - use capture phase to ensure it fires
    menuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    }, true);
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
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
      initSharedFooter();
      initMobileMenu();
      initComponents();
    });
  } else {
    initThemeToggle();
    initFooterYear();
    initSharedFooter();
    initMobileMenu();
    initComponents();
  }
})();
