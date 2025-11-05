/* Sparkles Component - Lightweight Vanilla JS */
(function() {
  'use strict';

  function createSparkles(container, count = 8) {
    if (!container) return;

    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';

    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      
      // Random position
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

  // Initialize sparkles on elements with data-sparkles attribute
  function init() {
    document.querySelectorAll('[data-sparkles]').forEach(function(element) {
      const count = parseInt(element.getAttribute('data-sparkles')) || 8;
      createSparkles(element, count);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

