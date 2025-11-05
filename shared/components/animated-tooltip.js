/* Animated Tooltip Component - Vanilla JS */
(function() {
  'use strict';

  function initTooltip(element) {
    const tooltipText = element.getAttribute('data-tooltip');
    const position = element.getAttribute('data-tooltip-position') || 'top';

    if (!tooltipText) return;

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = `tooltip-content tooltip-${position}`;
    tooltip.textContent = tooltipText;
    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('aria-hidden', 'true');

    // Create container if it doesn't exist
    let container = element.closest('.tooltip-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'tooltip-container';
      element.parentNode.insertBefore(container, element);
      container.appendChild(element);
    }

    // Add tooltip to container
    container.appendChild(tooltip);

    // Handle keyboard navigation
    element.addEventListener('focus', function() {
      container.setAttribute('aria-expanded', 'true');
      tooltip.setAttribute('aria-hidden', 'false');
    });

    element.addEventListener('blur', function() {
      container.setAttribute('aria-expanded', 'false');
      tooltip.setAttribute('aria-hidden', 'true');
    });

    // Handle mouse events
    element.addEventListener('mouseenter', function() {
      container.setAttribute('aria-expanded', 'true');
      tooltip.setAttribute('aria-hidden', 'false');
    });

    element.addEventListener('mouseleave', function() {
      container.setAttribute('aria-expanded', 'false');
      tooltip.setAttribute('aria-hidden', 'true');
    });
  }

  // Initialize tooltips
  function init() {
    document.querySelectorAll('[data-tooltip]').forEach(initTooltip);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

