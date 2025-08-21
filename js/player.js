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
const btnsSlider = document.querySelectorAll(".btn-nav-slider")
const imgSlider = document.querySelectorAll(".img-slider")
const infoSlider = document.querySelectorAll(".boxSliderInfo")
const btnNavBar = document.getElementById("open-SideBar-btn");

let darkmode = localStorage.getItem("darkmode");

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

if (darkmode === "active") {
  enableDarMode()
  logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
  logoGov.src = "./src/img/SENA_TRABAJO.png";
};

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarMode() : disableDarkMode();
  if (darkmode !== "active") {
    logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
    logoGov.src = "./src/img/SENA_TRABAJO.png";
  } else {
    logoSENA.src = "./src/img/SENA_SENA VERDE.png";
    logoGov.src = "./src/img/SENA_TRABAJO COLOR.png";
  }
});


//----------------------------------------------------------
//  AL HACER SCROLL
// ---------------------------------------------------------

window.addEventListener("scroll", () => {
  boxLogos.classList.toggle("boxSENAyGovDown", window.scrollY > 0);
  boxNavBar.classList.toggle("navAbajo", window.scrollY > 0);
  btnNavBar.classList.toggle("btnNavBarDown", window.scrollY > 0);

  if(window.scrollY > 0 && darkmode !== "active"){
    logoSENA.src = "./src/img/SENA_SENA VERDE.png";
    logoGov.src = "./src/img/SENA_TRABAJO COLOR.png";
  } else if(window.scrollY == 0 && darkmode !== "active"){
    logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
    logoGov.src = "./src/img/SENA_TRABAJO.png";
  } 
  if(window.scrollY == 0 && darkmode === "active"){
    logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
    logoGov.src = "./src/img/SENA_TRABAJO.png";
  } else if(window.scrollY > 0 && darkmode === "active"){
    logoSENA.src = "./src/img/SENA_SENA BLANCO.png";
    logoGov.src = "./src/img/SENA_TRABAJO.png";
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

// ----------------------------------------------
// FOR SLIDER NAVEGATION
// ----------------------------------------------

var sliderNav = function(maual){
  btnsSlider.forEach((btn) =>{
    btn.classList.remove("btnSliderActive");
  })

  imgSlider.forEach((img) =>{
    img.classList.remove("imgSliderActive");
  })

  infoSlider.forEach((info) =>{
    info.classList.remove("infoSliderActive");
  })

  btnsSlider[maual].classList.add("btnSliderActive");
  imgSlider[maual].classList.add("imgSliderActive");
}

btnsSlider.forEach((btn, i) => {
  btn.addEventListener('click', ()=> {
    sliderNav(i);
  });
});



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
