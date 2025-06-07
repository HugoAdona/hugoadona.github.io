document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu-list-items a");

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

  function equalizeCardHeights() {
    if (window.innerWidth > 576) {
      const rows = document.querySelectorAll(".services .my-row");

      rows.forEach((row) => {
        const cards = row.querySelectorAll(".my-card");
        let maxHeight = 0;

        cards.forEach((card) => {
          card.style.height = "auto";
        });

        cards.forEach((card) => {
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        cards.forEach((card) => {
          card.style.height = maxHeight + "px";
        });
      });
    } else {
      const cards = document.querySelectorAll(".services .my-card");
      cards.forEach((card) => {
        card.style.height = "auto";
      });
    }
  }

  window.addEventListener("load", equalizeCardHeights);
  window.addEventListener("resize", equalizeCardHeights);
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.querySelectorAll(".error-message").forEach((error) => {
    error.setAttribute("hidden", "");
  });

  let isValid = true;

  if (!name) {
    form.querySelector("#name-error").removeAttribute("hidden");
    isValid = false;
  }

  if (!email || !emailRegex.test(email)) {
    form.querySelector("#email-error").removeAttribute("hidden");
    isValid = false;
  }

  if (!message) {
    form.querySelector("#message-error").removeAttribute("hidden");
    isValid = false;
  }

  if (isValid) {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.location.href = `mailto:adonahugo@gmail.com?subject=${subject}&body=${body}`;
  }
});