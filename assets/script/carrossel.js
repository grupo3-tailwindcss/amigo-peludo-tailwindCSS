// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o container do carrossel que tem rolagem horizontal
  const container = document.querySelector("section.overflow-x-auto");

  // Número total de cards no carrossel
  const totalCards = 9;

  // Largura de cada card + espaço entre eles (300px + 16px de gap)
  const cardWidth = 316;

  // Índice atual do card visível
  let index = 0;

  // Variável para armazenar o intervalo de tempo
  let intervalo;

  // Função que move o carrossel automaticamente
  function moverCarrossel() {
    index++; // Avança para o próximo card

    // Se chegou ao final, volta para o primeiro card (Luna)
    if (index >= totalCards) {
      index = 0;
    }

    // Faz a rolagem suave até o card correspondente
    container.scrollTo({
      left: index * cardWidth, // Posição horizontal baseada no índice
      behavior: "smooth"       // Animação suave
    });
  }

  // Inicia o carrossel automático, trocando de card a cada 3 segundos
  intervalo = setInterval(moverCarrossel, 3000);
});

