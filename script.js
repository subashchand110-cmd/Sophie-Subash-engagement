// Gentle reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .detail-card, .photo, .rsvp-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
