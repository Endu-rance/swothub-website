document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Standard One-Time Fade-Up Observer
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeSections.forEach(section => sectionObserver.observe(section));

  // Repeatable Right-to-Left Observer (Re-triggers every time in view)
  const fadeRightCards = document.querySelectorAll('.fade-right-card');
  const repeatableObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        // Removes class when out of view so it animates again on scroll back
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.2 });

  fadeRightCards.forEach(card => repeatableObserver.observe(card));

});