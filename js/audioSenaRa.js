const elementoAudioSena = document.querySelector("#elemento-audioSena-Ra");
const botonReproducirSena = document.querySelector("#boton-reproducirSena-RA");
const iconoPlaySena = document.querySelector("#icono-playSena-RA");


// -------------------------------------------------
//  AUDIO SENA-RA
// -------------------------------------------------




function reproducirPausaSenaRa() {
  if (elementoAudioSena.paused) {
    elementoAudioSena.play();
    iconoPlaySena.classList.remove("bi-play-fill");
    iconoPlaySena.classList.add("bi-pause-fill");
  } else {
    elementoAudioSena.pause();
    iconoPlaySena.classList.remove("bi-pause-fill");
    iconoPlaySena.classList.add("bi-play-fill");
  }
  actualizarIconoReproducirSenaRa(elementoAudioSena.paused);
}
elementoAudioSena.addEventListener("play", () => actualizarIconoReproducirSenaRa(false));
elementoAudioSena.addEventListener("pause", () => actualizarIconoReproducirSenaRa(true));

// ---------------------------
// Controles con teclado
// K: reproducir/pausa 
// ---------------------------
document.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  switch (e.key.toLowerCase()) {
    case "k":
    case " ":
      e.preventDefault();
      reproducirPausaSenaRa();
      break;
  }
});

botonReproducirSena.addEventListener("click", reproducirPausaSenaRa);

