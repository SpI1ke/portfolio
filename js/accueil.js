document.addEventListener("DOMContentLoaded", () => {
  const accueil = document.getElementById("accueil");
  const navImage = document.querySelector(".background-image");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navImage.classList.add("visible");
      } else {
        navImage.classList.remove("visible");
      }
    });
  });

  observer.observe(accueil);
});