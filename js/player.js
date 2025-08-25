const openButton = document.getElementById("open-SideBar-btn");
const navbar = document.getElementById("navBarM");
const boxLogos = document.querySelector(".boxSENAyGov");
const boxNavBar = document.querySelector(".boxNavBar");
const media = window.matchMedia("(width < 600px)");
const linkOfertaSena = document.getElementById("oferta-sena");
const logoSENA = document.getElementById("logoSena");
const boxLogoSena = document.querySelector(".senaLogo");
const logoGov = document.getElementById("logoCobierno");
const boxLogoGov = document.querySelector(".govLogo");
const themeSwitch = document.getElementById("theme-switch");
const btnNavBar = document.getElementById("open-SideBar-btn");


let darkmode = localStorage.getItem("darkmode");


//----------------------------------------------------------
//  AL HACER SCROLL
// ---------------------------------------------------------

window.addEventListener("scroll", () => {
  boxLogos.classList.toggle("boxSENAyGovDown", window.scrollY > 0);
  boxNavBar.classList.toggle("navAbajo", window.scrollY > 0);
  btnNavBar.classList.toggle("btnNavBarDown", window.scrollY > 0);
});

//---------------------
// THEME: LIGHT OR DARK
// --------------------
const enableDarMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active" && window.scrollY > 0) {
  enableDarMode()
  logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
  logoGov.src = "./src/img/SENA_TRABAJO.png";
} else if(darkmode === "active" && window.scrollY < 0){
  enableDarMode()
  logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
  logoGov.src = "./src/img/SENA_TRABAJO.png";
} else if(darkmode !== "active" && window.scrollY < 0){
    enableDarMode()
    logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
    logoGov.src = "./src/img/SENA_TRABAJO.png";
} else if(darkmode !== "active" && window.scrollY > 0){
  enableDarMode()
  logoSENA.src = "./src/img/SENA_SENA VERDE.png";
  logoGov.src = "./src/img/SENA_TRABAJO COLOR.png";
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarMode() : disableDarkMode();
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

// ----------------------------------------------
// FOR SLIDER NAVEGATION
// ----------------------------------------------

const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    sliderN = document.querySelector("#sliderN"),
    sliderSection = document.querySelectorAll(".slider-Section");


btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

setInterval(() =>{
    moveToRight();
}, 6000);

let operacion = 0;
    counter = 0;
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;
        sliderN.style.transform = `translate(-${operacion}%)`;
        sliderN.style.transition = "none";
        return;
    }
    counter++;

    operacion = operacion + widthImg;
    sliderN.style.transform = `translate(-${operacion}%)`;
    sliderN.style.transition = "all .6s ease-in-out";
}
function moveToLeft() {
    counter--;
    if(counter < 0){
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        sliderN.style.transform = `translate(-${operacion}%)`;
        return;
    }
    operacion = operacion - widthImg;
    sliderN.style.transform = `translate(-${operacion}%)`;
    sliderN.style.transition = "all .6s ease-in-out";
}





// ----------------------------------------------
//  FOOTER
// ----------------------------------------------
function insertarHTMLSiEsNecesario() {
  const anchoVentana = window.innerWidth;
  const contenedor = document.querySelector(".box-f-logos");
  const originalContenedor = document.querySelector(".footer-logos");

  if (anchoVentana < 600) {
    contenedor.innerHTML = `
          <div class="f-box-logo-sena">
                    <img src="./src/img/SENA_SENA VERDE.png" alt="Logo SENA">
                </div>
                <div class="f-box-logos-icontec">
                    <img src="http://www.sena.edu.co/Style%20Library/alayout/images/Icontec03_all.png" alt="Logos icontect">
                </div>
        `;
    originalContenedor.innerHTML = "";
  } else {
    contenedor.innerHTML = "";
    originalContenedor.innerHTML = `
    <div class="f-box-logo-sena">
                    <img src="./src/img/SENA_SENA VERDE.png" alt="Logo SENA">
                </div>
                <div class="f-box-logos-icontec">
                    <img src="http://www.sena.edu.co/Style%20Library/alayout/images/Icontec03_all.png" alt="Logos icontect">
                </div>
    `;
  }
}

updateNavbar(media);

// Ejecutar la función al cargar la página
insertarHTMLSiEsNecesario();


// Escuchar cambios en el tamaño de la ventana
window.addEventListener("resize", insertarHTMLSiEsNecesario);
