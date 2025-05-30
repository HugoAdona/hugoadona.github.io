document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu-list-items a");

  // Toggle menu
  hamburger.addEventListener("click", function () {
    const hamIcon = this.querySelector(".hamburger-icon");
    const crossIcon = this.querySelector(".cross-icon");
    if (hamIcon.style.display === "none") {
      hamIcon.style.display = "inline-block";
      menu.style.display = "none";
      crossIcon.style.display = "none";
    } else {
      crossIcon.style.display = "inline-block";
      hamIcon.style.display = "none";
      menu.style.display = "block";
    }
  });

  // Close menu when clicking on links
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 820) {
        const hamIcon = hamburger.querySelector(".hamburger-icon");
        const crossIcon = hamburger.querySelector(".cross-icon");
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
      }
    });
  });

  // All service cards have the same height
  function equalizeCardHeights() {
    if (window.innerWidth > 576) {
      const rows = document.querySelectorAll(".services .my-row");

      rows.forEach((row) => {
        const cards = row.querySelectorAll(".my-card");
        let maxHeight = 0;

        // Reset heights
        cards.forEach((card) => {
          card.style.height = "auto";
        });

        // Find tallest card
        cards.forEach((card) => {
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        // Set cards to the height of the tallest
        cards.forEach((card) => {
          card.style.height = maxHeight + "px";
        });
      });
    } else {
      // Mobile heights reset
      const cards = document.querySelectorAll(".services .my-card");
      cards.forEach((card) => {
        card.style.height = "auto";
      });
    }
  }

  // Page load and window resize
  window.addEventListener("load", equalizeCardHeights);
  window.addEventListener("resize", equalizeCardHeights);
});
