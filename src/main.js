document.addEventListener("DOMContentLoaded", () => {
  // Cargar Navbar
  fetch("../components/navbar.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    });

  // Cargar Footer
  fetch("../components/footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });

  // Configurar el botón "Volver a Arriba"
  document.body.addEventListener("click", (event) => {
    if (event.target.id === "back-to-top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

