(function () {
  'use strict';

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
    });

    // Close menu when clicking a link (for single-page feel on mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links (already handled by CSS scroll-behavior: smooth)
  // Optional: close mobile menu on resize if viewport becomes desktop
  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 641px)').matches && navLinks) {
      navLinks.classList.remove('is-open');
    }
  });
})();
