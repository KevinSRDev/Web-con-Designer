// footer
// Función para verificar el tamaño de la ventana
function insertarHTMLSiEsNecesario() {
  const anchoVentana = window.innerWidth;
  const contenedor = document.querySelector(".box-f-logos");
  const originalContenedor = document.querySelector('.footer-logos')

  if (anchoVentana < 600) {
    contenedor.innerHTML = `
          <div class="f-box-logo-sena">
                    <img src="../src/img/SENA_SENA VERDE.png" alt="Logo SENA">
                </div>
                <div class="f-box-logos-icontec">
                    <img src="http://www.sena.edu.co/Style%20Library/alayout/images/Icontec03_all.png" alt="Logos icontect">
                </div>
        `;
        originalContenedor.innerHTML = ''
  } else {
    contenedor.innerHTML = ''
    originalContenedor.innerHTML = `
    <div class="f-box-logo-sena">
                    <img src="../src/img/SENA_SENA VERDE.png" alt="Logo SENA">
                </div>
                <div class="f-box-logos-icontec">
                    <img src="http://www.sena.edu.co/Style%20Library/alayout/images/Icontec03_all.png" alt="Logos icontect">
                </div>
    `
  }
}

// Ejecutar la función al cargar la página
insertarHTMLSiEsNecesario();

// Escuchar cambios en el tamaño de la ventana
window.addEventListener("resize", insertarHTMLSiEsNecesario);