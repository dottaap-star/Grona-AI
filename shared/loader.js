/* ========================================
   SHARED LAYOUT LOADER
   ======================================== */
/* Loads the shared header and footer exactly once per page */

(function() {
  'use strict';

  const SHARED_PATH = '/shared/';
  const URLS = {
    header: `${SHARED_PATH}header.html`,
    footer: `${SHARED_PATH}footer.html`
  };

  let headerPromise = null;
  let footerPromise = null;

  function shouldLoadHeader() {
    return !document.querySelector('[data-shared-header-loaded], header.navbar');
  }

  function shouldLoadFooter() {
    return !document.querySelector('[data-shared-footer-loaded], footer.final-footer');
  }

  async function fetchMarkup(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response.text();
  }

  async function loadHeader() {
    if (!shouldLoadHeader()) return;
    if (headerPromise) return headerPromise;

    headerPromise = fetchMarkup(URLS.header)
      .then((html) => {
        document.body.insertAdjacentHTML('afterbegin', html);
        if (typeof window.initThemeToggle === 'function') {
          window.initThemeToggle();
        } else if (typeof window.__gronaRefreshTheme === 'function') {
          window.__gronaRefreshTheme();
        }
      })
      .catch((error) => {
        console.warn('Unable to load shared header:', error);
      });

    return headerPromise;
  }

  async function loadFooter() {
    if (!shouldLoadFooter()) return;
    if (footerPromise) return footerPromise;

    footerPromise = fetchMarkup(URLS.footer)
      .then((html) => {
        document.body.insertAdjacentHTML('beforeend', html);
        if (typeof window.__gronaInitFooterYear === 'function') {
          window.__gronaInitFooterYear(document);
        }
        if (typeof window.__gronaRefreshTheme === 'function') {
          window.__gronaRefreshTheme();
        }
      })
      .catch((error) => {
        console.warn('Unable to load shared footer:', error);
      });

    return footerPromise;
  }

  function autoLoadComponents() {
    if (!document.documentElement.hasAttribute('data-shared-auto-load')) return;
    loadHeader();
    loadFooter();
  }

  window.loadSharedComponents = function(options = {}) {
    const { header = true, footer = true } = options;
    const tasks = [];
    if (header) tasks.push(loadHeader());
    if (footer) tasks.push(loadFooter());
    return Promise.all(tasks);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoLoadComponents);
  } else {
    autoLoadComponents();
  }
})();
