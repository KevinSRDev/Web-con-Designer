const openButton = document.getElementById("open-SideBar-btn");
const navbar = document.getElementById("navBarM");
const media = window.matchMedia("(width < 600px)");
const linkOfertaSena = document.getElementById("oferta-sena");
const logoSENA = document.getElementById("logoSena");
const boxLogoSena = document.querySelector(".senaLogo");
const logoGov = document.getElementById("logoCobierno");
const boxLogoGov = document.querySelector(".govLogo");
var boxNavBar = document.querySelector(".boxNavBar");
const escucharMas = document.querySelector(".boxEscucharMas");

window.addEventListener("scroll", () => {
  var boxLogos = document.querySelector(".boxSENAyGov");
  boxLogos.classList.toggle("abajo", window.scrollY > 50);

  boxNavBar.classList.toggle("navAbajo", window.scrollY > 50);
  escucharMas.classList.toggle("espacioArriba", window.scrollY > 50);

  if (window.scrollY > 50) {
    logoSENA.src = "./src/img/SENA_SENA VERDE.png";
    logoGov.src = "./src/img/SENA_TRABAJO COLOR.png";

    boxLogoSena.style.width = `60px`;
    boxLogoSena.style.height = `60px`;

    boxLogoGov.style.width = `100px`;
  } else {
    logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
    logoGov.src = "./src/img/SENA_TRABAJO.png";
    boxLogoSena.style.width = `150px`;
    boxLogoSena.style.height = `150px`;

    boxLogoGov.style.width = `150px`;
  }
});

media.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  console.log(isMobile);

  if (isMobile) {
    navbar.setAttribute("inert", "");
  } else {
    // desktop device
    navbar.removeAttribute("inert");
  }
}

function openSideBar() {
  navbar.classList.add("show");
  openButton.setAttribute("aria-expanded", "true");
  navbar.removeAttribute("inert");
}

function closeSideBar() {
  navbar.classList.remove("show");
  openButton.setAttribute("aria-expanded", "false");
  navbar.setAttribute("inert", "");
}

// Inavilita la Nav al dar el primer click :: hay que solucionar

// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(Link => {
//     Link.addEventListener('click', () => {
//         closeSideBar()
//     })
// })

updateNavbar(media);

function linkOferta() {
  window.open(
    "https://app.powerbi.com/view?r=eyJrIjoiZjhhZDcyM2EtOGFhMi00Y2EwLTgyNGMtZTg5MDBkZDZlMjllIiwidCI6ImNiYzJjMzgxLTJmMmUtNGQ5My05MWQxLTUwNmM5MzE2YWNlNyIsImMiOjR9",
    "_blank"
  );
}

// footer
// Función para verificar el tamaño de la ventana
function insertarHTMLSiEsNecesario() {
  const anchoVentana = window.innerWidth;
  const contenedor = document.querySelector(".box-f-logos");
  const originalContenedor = document.querySelector('.footer-logos')

  if (anchoVentana < 600) {
    contenedor.innerHTML = `
          <div class="f-box-logo-sena">
                    <img src="./src/img/SENA_SENA VERDE.png" alt="Logo SENA">
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
                    <img src="./src/img/SENA_SENA VERDE.png" alt="Logo SENA">
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
