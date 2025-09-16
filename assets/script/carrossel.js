document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("section.overflow-x-auto"); // container com scroll
  const totalCards = 9;
  const cardWidth = 316; // 300px + 16px gap
  let index = 0;
  let intervalo;

  function moverCarrossel() {
    index++;

    if (index >= totalCards) {
      index = 0; // volta pra Luna
    }

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
  }

  intervalo = setInterval(moverCarrossel, 3000);
});

module.exports = {
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')],
};