document.addEventListener('DOMContentLoaded', () => {
  // Theme toggler
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.dataset.theme =
      document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  });
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .timeline-item').forEach(el =>
    observer.observe(el)
  );
});
