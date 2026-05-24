/**
 * Minority Partners — main.js
 * Minimal, dependency-free. No external libraries.
 */

(function () {
  'use strict';

  /* ── Scroll-reveal ────────────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ── Nav scroll-state ────────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Smooth scroll for anchor links (Safari fallback) ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus to target for keyboard users
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ── Keyboard: close mobile nav hint ────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // If focus is inside nav, return it to the wordmark
      const focused = document.activeElement;
      if (nav && nav.contains(focused)) {
        const wordmark = nav.querySelector('.wordmark');
        if (wordmark) wordmark.focus();
      }
    }
  });

})();
