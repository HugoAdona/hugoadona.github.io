document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu-list-items a");

  // Toggle menu function
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

  // Close menu when clicking on menu links
  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      if (window.innerWidth <= 820) {
        const hamIcon = hamburger.querySelector(".hamburger-icon");
        const crossIcon = hamburger.querySelector(".cross-icon");
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
      }
    });
  });

  // Ensure all service cards have the same height in each row
  function equalizeCardHeights() {
    if (window.innerWidth > 576) {
      const rows = document.querySelectorAll('.services .my-row');
      
      rows.forEach(row => {
        const cards = row.querySelectorAll('.my-card');
        let maxHeight = 0;
        
        // Reset heights first
        cards.forEach(card => {
          card.style.height = 'auto';
        });
        
        // Find the tallest card
        cards.forEach(card => {
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        
        // Set all cards to the height of the tallest
        cards.forEach(card => {
          card.style.height = maxHeight + 'px';
        });
      });
    } else {
      // Reset heights on mobile
      const cards = document.querySelectorAll('.services .my-card');
      cards.forEach(card => {
        card.style.height = 'auto';
      });
    }
  }

  // Run on page load and window resize
  window.addEventListener('load', equalizeCardHeights);
  window.addEventListener('resize', equalizeCardHeights);
});