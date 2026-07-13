/**
 * main.js — Robert Augusto | Landing Page
 * ------------------------------------------------------------------
 * Responsável pela animação de entrada (scroll reveal) dos blocos
 * marcados com a classe ".reveal", usando IntersectionObserver por
 * ser mais performático que listeners de "scroll".
 * ------------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', function () {
  var revealElements = document.querySelectorAll('.reveal');

  // Nada a observar: encerra sem custo adicional
  if (!revealElements.length) return;

  // Se o navegador não suportar IntersectionObserver, mostra tudo direto
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
    return;
  }

  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });
});
