/* 3D Card Component - Vanilla JS */
(function() {
  'use strict';

  function init3DCard(card) {
    if (!card) return;

    let isMouseEntered = false;
    const cardWrapper = card.closest('.card-3d-container') || card;

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

    // Add class for styling
    card.classList.add('card-3d-enabled');
  }

  // Initialize on DOM ready
  function init() {
    // Initialize pricing cards
    document.querySelectorAll('.pricing-card').forEach(init3DCard);
    
    // Initialize feature cards
    document.querySelectorAll('.use-case-card').forEach(init3DCard);
    
    // Initialize any card with data-3d attribute
    document.querySelectorAll('[data-3d-card]').forEach(init3DCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

