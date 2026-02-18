// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});

// Reveal Fact Function (used on home and solutions pages)
function revealFact() {
  const fact = document.getElementById('fact');
  if (fact) {
    fact.classList.toggle('hidden');
  }
}