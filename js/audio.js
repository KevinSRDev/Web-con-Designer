const titulo = document.getElementById("textoAudio");
const visualPod = document.querySelector(".boxSliderImg img");
const progresoPod = document.getElementById("progresoPod");
const podcasts = document.getElementById("podcasts");
const iconoControlPod = document.getElementById("iconoControlP");
const botonReproducirPausarPod = document.querySelector(".controlesPod button.boton-reproducir-pausarP");
const botonAtrasP = document.querySelector(".controlesPod button.atrasP");
const botonSiguienteP = document.querySelector(".controlesPod button.siguienteP");


// Galeria de Podcasts
const galeriaVisual = [
  {
    imagen:
      "https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png",
  },
  {
    imagen:
      "https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png",
  },
  {
    imagen:
      "https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png",
  },
  {
    imagen:
      "https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png",
  },
  {
    imagen:
      "https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png",
  },
];

const podcastsGaleria = [
  {
    tituloP: "Have You Ever Seen The Rain",
    fuenteP: "../src/podcasts/Creedence Clearwater Revival Have You Ever Seen The Rain Official.mp3",
  },
  {
    tituloP: "Showtek - Bad",
    fuenteP: "../src/podcasts/David Guetta _ Showtek - Bad ft.Vassy (Lyrics Video)(MP3_320K).mp3",
  },
  {
    tituloP: "Soy Yo",
    fuenteP: "../src/podcasts/Don Omar - _Soy Yo_ feat. Wisin _ Gente De Zona(MP3_320K).mp3",
  },
  {
    tituloP: "Adiccion",
    fuenteP: "../src/podcasts/Lisandro Meza - Adiccion.mp3",
  },
  {
    tituloP: "Resbalandito",
    fuenteP: "../src/podcasts/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3",
  },
];

let visualActual = 0;
let indicePodcastsActual = 0;

function updateSongInfoPod() {
  visualPod.src = galeriaVisual[visualActual].imagen;
  titulo.textContent = podcastsGaleria[indicePodcastsActual].tituloP;
  podcasts.src = podcastsGaleria[indicePodcastsActual].fuenteP;
  podcasts.addEventListener("loadeddata", function () {});
}

podcasts.addEventListener("loadedmetadata", function () {
  progresoPod.max = podcasts.duration;
  progresoPod.value = podcasts.currentTime;
});


botonReproducirPausarPod.addEventListener("click", reproducirPausarP);

function reproducirPausarP() {
  if (podcasts.paused) {
    reproducirPodcasts();
  } else {
    pausarPodcasts();
  }
}

function reproducirPodcasts() {
  podcasts.play();

  iconoControlPod.classList.add("bi-pause");
  iconoControlPod.classList.remove("bi-play");
}

function pausarPodcasts() {
  podcasts.pause();

  iconoControlPod.classList.remove("bi-pause");
  iconoControlPod.classList.add("bi-play");
}

podcasts.addEventListener("timeupdate", function () {
  if (!podcasts.paused) {
    progresoPod.value = podcasts.currentTime;
  }
});

progresoPod.addEventListener("input", function () {
  podcasts.currentTime = progresoPod.value;
});

botonSiguienteP.addEventListener("click", () => {
  indicePodcastsActual = (indicePodcastsActual + 1) % podcastsGaleria.length;
  visualActual = (visualActual + 1) % galeriaVisual.length;
  updateSongInfoPod();
  reproducirPodcasts();
});
botonAtrasP.addEventListener("click", () => {
  indicePodcastsActual =
    (indicePodcastsActual - 1 + podcastsGaleria.length) %
    podcastsGaleria.length;
  visualActual =
    (visualActual - 1 + galeriaVisual.length) % galeriaVisual.length;
  updateSongInfoPod();
  reproducirPodcasts();
});

updateSongInfoPod();
