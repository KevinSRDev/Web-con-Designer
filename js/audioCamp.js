function backHome(){
  location.href = "./index.html";
}

// ---------------------------
// Datos de las pistas
// ---------------------------
const listaPistas = [
  {
    titulo: "Have You Ever Seen The Rain",
    archivo: "./src/podcasts/Creedence Clearwater Revival Have You Ever Seen The Rain Official.mp3",
    portada: "./src/img/evento-02.jpg",
    descripcion:
      "Una guitarra suave acompaña una tarde lluviosa en la ciudad. Melodías cálidas y pausadas invitan a respirar y dejar que el tiempo se estire, como un té humeante cerca de la ventana, lento y reconfortante.",
  },
  {
    titulo: "Showtek - Bad",
    archivo: "./src/podcasts/David Guetta _ Showtek - Bad ft.Vassy (Lyrics Video)(MP3_320K).mp3",
    portada: "./src/img/evento-03.jpg",
    descripcion:
      "Sintetizadores retro, autopistas mojadas y carteles de neón. Un pulso constante que guía el viaje nocturno, entre nostalgia y futuro. Conduce, piensa, siente cada luz pasar como un latido que no se agota.",
  },
  {
    titulo: "Soy Yo",
    archivo:
      "./src/podcasts/Don Omar - _Soy Yo_ feat. Wisin _ Gente De Zona(MP3_320K).mp3",
    portada: "./src/img/evento-04.jpg",
    descripcion:
      "Cuerdas, charango y viento frío. El sol despierta los cerros mientras el ritmo crece. Camino de tierra, pasos firmes, horizonte claro. Música que abraza y empuja, sencilla, viva, abierta como el cielo.",
  },
];

const elementoAudio = document.getElementById("elemento-audio");
const imagenPortada = document.getElementById("imagen-portada");
const textoTitulo = document.getElementById("texto-titulo");
const textoDescripcion = document.getElementById("texto-descripcion");
const botonAnterior = document.getElementById("boton-anterior");
const botonReproducir = document.getElementById("boton-reproducir");
const botonSiguiente = document.getElementById("boton-siguiente");
const botonSilencio = document.getElementById("boton-silencio");
const iconoVolumen = document.getElementById("icono-volumen");
const iconoPlay = document.getElementById("icono-play");
const barraProgreso = document.getElementById("barra-progreso");
const textoTiempoActual = document.getElementById("texto-tiempo-actual");
const textoDuracion = document.getElementById("texto-duracion");
const controlVolumen = document.getElementById("control-volumen");

// ---------------------------
// Estado del reproductor
// ---------------------------
let indiceActual = 0;
let bloqueoActualizacionSlider = false;

// ---------------------------
// Utilidades
// ---------------------------
function formatearTiempo(segundos) {
  if (!isFinite(segundos)) return "0:00";
  const s = Math.floor(segundos % 60);
  const m = Math.floor(segundos / 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function aplicarGradienteDosColores(inputRange, porcentaje) {
  // porcentaje en [0,100]
  const p = Math.max(0, Math.min(100, porcentaje));
  inputRange.style.background = `linear-gradient(90deg, var(--color-acento1), var(--color-acento2) ${p}%, var(--color-resto) ${p}%)`;
}

function aplicarGradienteVolumen(inputRange, valor0a1) {
  const p = Math.round(valor0a1 * 100);
  inputRange.style.background = `linear-gradient(90deg, #39a900 ${p}%, #dcdcdc ${p}%)`;
}

function asegurar250Caracteres(texto) {
  const t = (texto ?? "").trim();
  if (t.length === 250) return t;
  if (t.length > 200) return t.slice(0, 250);
  // rellenar con espacios invisibles hasta 250
  return t + " ".repeat(200 - t.length);
}

function actualizarIconoReproducir(paused) {
  // Cambia entre Play y Pause dibujando el SVG
  if (paused) {
    iconoPlay.setAttribute("viewBox", "0 0 24 24");
    iconoPlay.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    botonReproducir.setAttribute("aria-label", "Reproducir");
    botonReproducir.title = "Reproducir (K)";
  } else {
    iconoPlay.setAttribute("viewBox", "0 0 24 24");
    iconoPlay.innerHTML = `<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>`;
    botonReproducir.setAttribute("aria-label", "Pausar");
    botonReproducir.title = "Pausar (K)";
  }
}

function actualizarIconoSilencio(mute, volumen) {
  if (mute || volumen === 0) {
    iconoVolumen.innerHTML = `<path d="M5 9v6h4l5 5V4L9 9H5zM19 12l3 3-1.5 1.5L17.5 13.5 14 10l1.5-1.5L19 12z"/>`;
  } else if (volumen < 0.5) {
    iconoVolumen.innerHTML = `<path d="M5 9v6h4l5 5V4L9 9H5zM16 12c0-1.77-1.02-3.29-2.5-4.03v8.06A4.49 4.49 0 0 0 16 12z"/>`;
  } else {
    iconoVolumen.innerHTML = `<path d="M5 9v6h4l5 5V4L9 9H5zM18.5 12c0-2.48-1.52-4.6-3.7-5.44v2.23c1.05.66 1.7 1.8 1.7 3.21s-.65 2.55-1.7 3.21v2.23c2.18-.84 3.7-2.96 3.7-5.44z"/>`;
  }
}

// ---------------------------
// Carga y control de pistas
// ---------------------------
function cargarPista(indice) {
  const pista = listaPistas[indice];
  if (!pista) return;

  indiceActual = indice;
  elementoAudio.src = pista.archivo;
  elementoAudio.load();

  imagenPortada.src = pista.portada;
  imagenPortada.alt = `Portada: ${pista.titulo}`;

  textoTitulo.textContent = pista.titulo;
  textoDescripcion.textContent = asegurar250Caracteres(pista.descripcion);

  textoTiempoActual.textContent = "0:00";
  textoDuracion.textContent = "0:00";
  barraProgreso.value = 0;
  aplicarGradienteDosColores(barraProgreso, 0);

  //Autoplay al cambiar de pista
  elementoAudio.play().catch(() => {
    /* reproducción bloqueada por el navegador */
  });
  actualizarIconoReproducir(elementoAudio.paused);
  historialEnTitulo();
}

function reproducirPausa() {
  if (elementoAudio.paused) {
    elementoAudio.play();
  } else {
    elementoAudio.pause();
  }
  actualizarIconoReproducir(elementoAudio.paused);
}

function pistaSiguiente() {
  const siguiente = (indiceActual + 1) % listaPistas.length;
  cargarPista(siguiente);
}

function pistaAnterior() {
  const anterior = (indiceActual - 1 + listaPistas.length) % listaPistas.length;
  cargarPista(anterior);
}


// ---------------------------
// Progreso y eventos
// ---------------------------
elementoAudio.addEventListener("loadedmetadata", () => {
  textoDuracion.textContent = formatearTiempo(elementoAudio.duration);
});

elementoAudio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = elementoAudio;
  textoTiempoActual.textContent = formatearTiempo(currentTime);

  if (!bloqueoActualizacionSlider && isFinite(duration) && duration > 0) {
    const porcentaje = (currentTime / duration) * 100;
    barraProgreso.value = porcentaje;
    aplicarGradienteDosColores(barraProgreso, porcentaje);
  }
});

elementoAudio.addEventListener("play", () => actualizarIconoReproducir(false));
elementoAudio.addEventListener("pause", () => actualizarIconoReproducir(true));
elementoAudio.addEventListener("ended", pistaSiguiente);

// ---------------------------
// Interacción con la barra de progreso
// ---------------------------
barraProgreso.addEventListener("input", (e) => {
  // Mientras arrastra, actualiza el color de la barra
  aplicarGradienteDosColores(barraProgreso, e.target.value);
  bloqueoActualizacionSlider = true;
});

barraProgreso.addEventListener("change", (e) => {
  if (isFinite(elementoAudio.duration) && elementoAudio.duration > 0) {
    const pct = parseFloat(e.target.value) / 100;
    elementoAudio.currentTime = elementoAudio.duration * pct;
  }
  bloqueoActualizacionSlider = false;
});

// ---------------------------
// Volumen y silencio
// ---------------------------
controlVolumen.addEventListener("input", (e) => {
  const valor = parseFloat(e.target.value);
  elementoAudio.volume = valor;
  elementoAudio.muted = valor === 0;
  aplicarGradienteVolumen(controlVolumen, valor);
  actualizarIconoSilencio(elementoAudio.muted, valor);
});

botonSilencio.addEventListener("click", () => {
  elementoAudio.muted = !elementoAudio.muted;
  if (!elementoAudio.muted && elementoAudio.volume === 0) {
    elementoAudio.volume = 0.3;
    controlVolumen.value = 0.3;
  }
  aplicarGradienteVolumen(
    controlVolumen,
    elementoAudio.muted ? 0 : elementoAudio.volume
  );
  actualizarIconoSilencio(elementoAudio.muted, elementoAudio.volume);
});

// ---------------------------
// Controles con teclado
// K: reproducir/pausa | J: -10s/Anterior | L: +10s/Siguiente
// Flechas izquierda/derecha: +/- 5s | M: silencio
// ---------------------------
document.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  switch (e.key.toLowerCase()) {
    case "k":
    case " ":
      e.preventDefault();
      reproducirPausa();
      break;
    case "j":
      e.preventDefault();
      if (elementoAudio.currentTime > 3) {
        elementoAudio.currentTime = Math.max(0, elementoAudio.currentTime - 10);
      } else {
        pistaAnterior();
      }
      break;
    case "l":
      e.preventDefault();
      if (elementoAudio.duration - elementoAudio.currentTime > 3) {
        elementoAudio.currentTime = Math.min(
          elementoAudio.duration || 0,
          elementoAudio.currentTime + 10
        );
      } else {
        pistaSiguiente();
      }
      break;
    case "arrowleft":
      elementoAudio.currentTime = Math.max(0, elementoAudio.currentTime - 5);
      break;
    case "arrowright":
      elementoAudio.currentTime = Math.min(
        elementoAudio.duration || 0,
        elementoAudio.currentTime + 5
      );
      break;
    case "m":
      botonSilencio.click();
      break;
  }
});

// ---------------------------
// Botones
// ---------------------------
botonReproducir.addEventListener("click", reproducirPausa);
botonAnterior.addEventListener("click", pistaAnterior);
botonSiguiente.addEventListener("click", pistaSiguiente);

// ---------------------------
// Inicialización
// ---------------------------
function inicializarReproductor() {
  // Estado inicial de volumen y gradiente
  elementoAudio.volume = parseFloat(controlVolumen.value);
  aplicarGradienteVolumen(controlVolumen, elementoAudio.volume);
  actualizarIconoSilencio(elementoAudio.muted, elementoAudio.volume);

  // Carga de la primera pista
  cargarPista(indiceActual);
}

// Arranque
inicializarReproductor();