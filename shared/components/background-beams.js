/* Background Beams Component - Vanilla JS */
(function() {
  'use strict';

  function initBackgroundBeams(container) {
    if (!container) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'background-beams-svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 696 316');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    // Main path
    const mainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    mainPath.setAttribute('d', 'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875');
    mainPath.setAttribute('stroke', 'url(#paint0_radial)');
    mainPath.setAttribute('stroke-opacity', '0.05');
    mainPath.setAttribute('stroke-width', '0.5');
    mainPath.setAttribute('class', 'main-path');
    svg.appendChild(mainPath);

    // Animated paths
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

    // Defs for gradients
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    // Radial gradient for main path
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

    // Linear gradients for animated paths
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

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.background-beams').forEach(initBackgroundBeams);
    });
  } else {
    document.querySelectorAll('.background-beams').forEach(initBackgroundBeams);
  }
})();

