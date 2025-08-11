// AUDIOS
const audios = {
  audio1: {
    title: "ode to oi-tjr",
    img: "../src/img/evento-03.jpg",
    src: "../src/audios/069.ode to oi-tjr.mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio2: {
    title: "Para Que La Plata",
    img: "../src/img/evento-04.jpg",
    src: "../src/audios/Para Que La Plata(MP3_320K).mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio3: {
    title: "Más De La Una",
    img: "../src/img/evento-03.jpg",
    src: "../src/audios/Piso 21 _ Maluma - Más De La Una (Video Oficial)(MP3_160K).mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio4: {
    title: "La Niña De Mis Sueños",
    img: "../src/img/evento-04.jpg",
    src: "../src/audios/La Energia Norteña - La Niña De Mis Sueños (Video Oficial)(MP3_320K).mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio5: {
    title: "ADMV",
    img: "../src/img/evento-03.jpg",
    src: "../src/audios/Maluma - ADMV (Official Video)(MP3_160K).mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio6: {
    title: "Corazon De Seda",
    img: "../src/img/evento-04.jpg",
    src: "../src/audios/Ozuna   Corazon De Seda Audio Oficial.mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio7: {
    title: "Dile Que Tu Me Quieres",
    img: "../src/img/evento-03.jpg",
    src: "../src/audios/Ozuna - Dile Que Tu Me Quieres (Video Oficial) (1080p_ bee7d4e6.mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
  audio8: {
    title: "Dile A Él",
    img: "../src/img/evento-04.jpg",
    src: "../src/audios/Rauw Alejandro - Dile A Él (Video Oficial)(MP3_160K).mp3",
    info: "Campesinos e indígenas de Obandos, construyendo propuestas para fortalecer la formación y el desarrollo rural",
  },
};
// ---------------------------
// Referencias del DOM
// ---------------------------
// const elementoAudio = document.getElementById("elemento-audioF");
// const botonAnterior = document.getElementById("boton-anterior-F");
// const botonReproducir = document.getElementById("boton-reproducir-F");
// const botonSiguiente = document.getElementById("boton-siguiente-F");
// const botonSilencio = document.getElementById("boton-silencio-F");
// const iconoVolumen = document.getElementById("icono-volumen-F");
// const iconoPlay = document.getElementById("icono-playF");
// const barraProgreso = document.getElementById("barra-progreso-F");
// const textoTiempoActual = document.getElementById("texto-tiempo-actual-F");
// const textoDuracion = document.getElementById("texto-duracion-F");
// const controlVolumen = document.getElementById("control-volumen-F");


const listView = document.getElementById("view-list");
const detailView = document.getElementById("view-detail");
const audioTitle = document.getElementById("audio-title");
const imgAudio = document.getElementById('imagenAudio')
const audioPlayer = document.getElementById("elemento-audioF");
const audioInfo = document.getElementById("audio-info");
const backBtn = document.getElementById("back-btn");
const items = document.querySelectorAll(".list-audios li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const key = item.dataset.audio;
    const audio = audios[key];
    audioTitle.textContent = audio.title;
    imgAudio.src = audio.img;
    audioPlayer.src = audio.src;
    audioInfo.textContent = audio.info;
    listView.classList.add("flex");
    detailView.classList.remove("hidden");
    audioPlayer.play();
  });
});

backBtn.addEventListener("click", () => {
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");
  audioPlayer.pause();
});
