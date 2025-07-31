const openButton = document.getElementById("open-SideBar-btn");
const navbar = document.getElementById("navBarM");
const media = window.matchMedia("(width < 600px)");
const linkOfertaSena = document.getElementById("oferta-sena");
const logoSENA = document.getElementById("logoSena");
const boxLogoSena = document.querySelector(".senaLogo");
const logoGov = document.getElementById("logoCobierno");
const boxLogoGov = document.querySelector(".govLogo");
var boxNavBar = document.querySelector('.boxNavBar')



window.addEventListener("scroll", () => {
  var boxLogos = document.querySelector(".boxSENAyGov");
  boxLogos.classList.toggle("abajo", window.scrollY > 50);

  boxNavBar.classList.toggle('navAbajo', window.scrollY > 50);


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
