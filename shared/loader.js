/* ========================================
   SHARED LAYOUT LOADER
   ======================================== */
/* This script dynamically loads shared components into your page */
/* Include this script in the <head> section */

(function() {
  'use strict';

  // Configuration
  const SHARED_PATH = 'shared/';
  const COMPONENTS = {
    head: 'head-content.html',
    header: 'header.html',
    footer: 'footer.html'
  };

  // Load component function
  async function loadComponent(componentName, targetSelector) {
    try {
      const response = await fetch(`${SHARED_PATH}${COMPONENTS[componentName]}`);
      if (!response.ok) {
        console.warn(`Failed to load ${componentName}:`, response.statusText);
        return;
      }
      const html = await response.text();
      const target = document.querySelector(targetSelector);
      
      if (target) {
        // For body content, insert before target
        target.insertAdjacentHTML('beforebegin', html);
      } else {
        console.warn(`Target selector not found: ${targetSelector}`);
      }
    } catch (error) {
      console.error(`Error loading ${componentName}:`, error);
    }
  }

  // Auto-load components based on data attributes
  function autoLoadComponents() {
    // Check if auto-load is enabled
    const autoLoad = document.documentElement.hasAttribute('data-shared-auto-load');
    
    if (autoLoad) {
      // Load head content (insert into head)
      const temp = document.createElement('div');
      fetch(`${SHARED_PATH}${COMPONENTS.head}`)
        .then(response => response.ok ? response.text() : null)
        .then(html => {
          if (html) {
            temp.innerHTML = html;
            Array.from(temp.children).forEach(node => {
              document.head.appendChild(node);
            });
          }
        })
        .catch(err => console.warn('Failed to load head content:', err));
      
      // Load header (look for data-shared-header attribute)
      const headerTarget = document.querySelector('[data-shared-header]') || document.body;
      if (headerTarget) {
        loadComponent('header', headerTarget);
      }
      
      // Load footer (look for data-shared-footer attribute)
      const footerTarget = document.querySelector('[data-shared-footer]') || document.body;
      if (footerTarget) {
        loadComponent('footer', footerTarget);
      }
    }
  }

  // Manual load function (can be called from page scripts)
  window.loadSharedComponents = function(options = {}) {
    const opts = {
      head: options.head !== false,
      header: options.header !== false,
      footer: options.footer !== false,
      headerTarget: options.headerTarget || '[data-shared-header]',
      footerTarget: options.footerTarget || '[data-shared-footer]'
    };

    if (opts.head) {
      // Load head content
      const temp = document.createElement('div');
      fetch(`${SHARED_PATH}${COMPONENTS.head}`)
        .then(response => response.ok ? response.text() : null)
        .then(html => {
          if (html) {
            temp.innerHTML = html;
            Array.from(temp.children).forEach(node => {
              document.head.appendChild(node);
            });
          }
        })
        .catch(err => console.warn('Failed to load head content:', err));
    }
    
    if (opts.header) {
      const target = document.querySelector(opts.headerTarget) || document.body;
      if (target) {
        loadComponent('header', target);
      }
    }
    
    if (opts.footer) {
      const target = document.querySelector(opts.footerTarget) || document.body;
      if (target) {
        loadComponent('footer', target);
      }
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoLoadComponents);
  } else {
    autoLoadComponents();
  }
})();

