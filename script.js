// ==========================================================
// Portfolio Technique - Interactions légères (Vanilla JS)
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        targetElement.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Afficher les détails';
      } else {
        targetElement.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        button.textContent = 'Masquer les détails';
      }
    });
  });
});