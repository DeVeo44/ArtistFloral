document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuBtn?.querySelector("i");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Empêche la fermeture immédiate
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");

      // Toggle icône Bars / X
      if (menuIcon) {
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");
      }
    });

    // Ferme le menu si on clique n'importe où ailleurs sur la page
    document.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        menuIcon?.classList.replace("fa-xmark", "fa-bars");
      }
    });
  }
});
