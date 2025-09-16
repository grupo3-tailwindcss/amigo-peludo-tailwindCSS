// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // Referência ao elemento <html> para aplicar/remover a classe "dark"
  const html = document.documentElement;

  // Botão de alternância de tema (modo claro/escuro)
  const themeBtn = document.getElementById("trdThemeBtn");

  // Ícone que representa o tema atual (sol ou lua)
  const themeIcon = document.getElementById("themeIcon");

  // Botão do menu hambúrguer (mobile)
  const menuToggle = document.getElementById("menuToggle");

  // Menu de navegação para dispositivos móveis
  const mobileMenu = document.getElementById("mobileMenu");

  // Elemento do modal (caixa de diálogo)
  const modal = document.getElementById("modal");

  // 🔄 Define o tema inicial com base no que está salvo no localStorage
  if (localStorage.theme === "dark") {
    html.classList.add("dark"); // Aplica modo escuro
    themeIcon.src = "./assets/img/lua.png"; // Ícone de lua para indicar modo claro
    themeIcon.alt = "Tema claro";
  } else {
    html.classList.remove("dark"); // Aplica modo claro
    themeIcon.src = "./assets/img/modo-claro.png"; // Ícone de sol para indicar modo escuro
    themeIcon.alt = "Tema escuro";
  }

  // 🌗 Alterna entre modo claro e escuro ao clicar no botão de tema
  if (themeBtn && themeIcon) {
    themeBtn.addEventListener("click", () => {
      html.classList.toggle("dark"); // Alterna a classe "dark"
      const isDark = html.classList.contains("dark"); // Verifica se está no modo escuro

      // Salva a preferência no localStorage
      localStorage.theme = isDark ? "dark" : "light";

      // Atualiza o ícone de acordo com o tema
      themeIcon.src = isDark ? "./assets/img/modo-claro.png" : "./assets/img/lua.png";
      themeIcon.alt = isDark ? "Tema claro" : "Tema escuro";
    });
  }

  // 🍔 Menu hambúrguer com animação de entrada e saída
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
        // Mostra o menu com animação de entrada
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("opacity-0", "translate-x-4");

        // Pequeno delay para aplicar a transição
        setTimeout(() => {
          mobileMenu.classList.remove("opacity-0", "translate-x-4");
          mobileMenu.classList.add("opacity-100", "translate-x-0");
        }, 10);
      } else {
        // Oculta o menu com animação de saída
        mobileMenu.classList.remove("opacity-100", "translate-x-0");
        mobileMenu.classList.add("opacity-0", "translate-x-4");

        // Após a transição, esconde o menu completamente
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("opacity-0", "translate-x-4");
        }, 300);
      }
    });

    // 🖥️ Fecha o menu automaticamente ao redimensionar para desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 640) {
        mobileMenu.classList.add("hidden"); // Esconde o menu
        mobileMenu.classList.remove("opacity-100", "translate-x-0", "opacity-0", "translate-x-4"); // Remove classes de transição
      }
    });
  }

  // 💬 Função global para abrir ou fechar o modal
  if (modal) {
    window.toggleModal = function (open) {
      open ? modal.showModal() : modal.close(); // Abre ou fecha o modal
    };
  }
});