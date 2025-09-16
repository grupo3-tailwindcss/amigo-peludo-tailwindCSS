document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeBtn = document.getElementById("trdThemeBtn");
  const themeIcon = document.getElementById("themeIcon");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const modal = document.getElementById("modal");

  // Tema inicial
  if (localStorage.theme === "dark") {
    html.classList.add("dark");
    themeIcon.src = "./assets/img/lua.png";
    themeIcon.alt = "Tema claro";
  } else {
    html.classList.remove("dark");
    themeIcon.src = "./assets/img/modo-claro.png";
    themeIcon.alt = "Tema escuro";
  }

  // Alternar tema
  if (themeBtn && themeIcon) {
    themeBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
      const isDark = html.classList.contains("dark");
      localStorage.theme = isDark ? "dark" : "light";
      themeIcon.src = isDark ? "./assets/img/modo-claro.png" : "./assets/img/lua.png";
      themeIcon.alt = isDark ? "Tema claro" : "Tema escuro";
    });
  }

  // Menu hambúrguer com animação
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("opacity-0", "translate-x-4");
        setTimeout(() => {
          mobileMenu.classList.remove("opacity-0", "translate-x-4");
          mobileMenu.classList.add("opacity-100", "translate-x-0");
        }, 10);
      } else {
        mobileMenu.classList.remove("opacity-100", "translate-x-0");
        mobileMenu.classList.add("opacity-0", "translate-x-4");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("opacity-0", "translate-x-4");
        }, 300);
      }
    });

    // Fecha ao expandir para desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 640) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("opacity-100", "translate-x-0", "opacity-0", "translate-x-4");
      }
    });
  }

  // Modal
  if (modal) {
    window.toggleModal = function (open) {
      open ? modal.showModal() : modal.close();
    };
  }
});