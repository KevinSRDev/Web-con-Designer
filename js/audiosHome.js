const btnPlayF1 = document.querySelector(".boxIconAudioF1");
const btnPlayF2 = document.querySelector(".boxIconAudioF2");
const btnPlayF3 = document.querySelector(".boxIconAudioF3");
const btnPlayF4 = document.querySelector(".boxIconAudioF4");
const btnPlayF5 = document.querySelector(".boxIconAudioF5");
const btnPlayF6 = document.querySelector(".boxIconAudioF6");
const iconPlay1 = document.querySelector("#elemento-audioForma1");
const iconPlay2 = document.querySelector("#elemento-audioForma2");
const iconPlay3 = document.querySelector("#elemento-audioForma3");
const iconPlay4 = document.querySelector("#elemento-audioForma4");
const iconPlay5 = document.querySelector("#elemento-audioForma5");
const iconPlay6 = document.querySelector("#elemento-audioForma6");
const audioForma1 = document.querySelector("#audioForma1");
const audioForma2 = document.querySelector("#audioForma2");
const audioForma3 = document.querySelector("#audioForma3");
const audioForma4 = document.querySelector("#audioForma4");
const audioForma5 = document.querySelector("#audioForma5");
const audioForma6 = document.querySelector("#audioForma6");

const btnPlayC1 = document.querySelector(".boxIconAudioC1");
const btnPlayC2 = document.querySelector(".boxIconAudioC2");
const btnPlayC3 = document.querySelector(".boxIconAudioC3");
const btnPlayC4 = document.querySelector(".boxIconAudioC4");
const btnPlayC5 = document.querySelector(".boxIconAudioC5");
const btnPlayC6 = document.querySelector(".boxIconAudioC6");
const iconPlayC1 = document.querySelector("#elemento-audioCampe1");
const iconPlayC2 = document.querySelector("#elemento-audioCampe2");
const iconPlayC3 = document.querySelector("#elemento-audioCampe3");
const iconPlayC4 = document.querySelector("#elemento-audioCampe4");
const iconPlayC5 = document.querySelector("#elemento-audioCampe5");
const iconPlayC6 = document.querySelector("#elemento-audioCampe6");
const audioCampe1 = document.querySelector("#audioCampe1");
const audioCampe2 = document.querySelector("#audioCampe2");
const audioCampe3 = document.querySelector("#audioCampe3");
const audioCampe4 = document.querySelector("#audioCampe4");
const audioCampe5 = document.querySelector("#audioCampe5");
const audioCampe6 = document.querySelector("#audioCampe6");


btnPlayF1.addEventListener("click", reproducirPausaFormacion1);
btnPlayF2.addEventListener("click", reproducirPausaFormacion2);
btnPlayF3.addEventListener("click", reproducirPausaFormacion3);
btnPlayF4.addEventListener("click", reproducirPausaFormacion4);
btnPlayF5.addEventListener("click", reproducirPausaFormacion5);
btnPlayF6.addEventListener("click", reproducirPausaFormacion6);

btnPlayC1.addEventListener("click", reproducirPausaCampesena1);
btnPlayC2.addEventListener("click", reproducirPausaCampesena2);
btnPlayC3.addEventListener("click", reproducirPausaCampesena3);
btnPlayC4.addEventListener("click", reproducirPausaCampesena4);
btnPlayC5.addEventListener("click", reproducirPausaCampesena5);
btnPlayC6.addEventListener("click", reproducirPausaCampesena6);

audioForma1.addEventListener("play", () => actualizarIconoFormacion1(false));
audioForma1.addEventListener("pause", () => actualizarIconoFormacion1(true));
audioForma2.addEventListener("play", () => actualizarIconoFormacion2(false));
audioForma2.addEventListener("pause", () => actualizarIconoFormacion2(true));
audioForma3.addEventListener("play", () => actualizarIconoFormacion3(false));
audioForma3.addEventListener("pause", () => actualizarIconoFormacion3(true));
audioForma4.addEventListener("play", () => actualizarIconoFormacion4(false));
audioForma4.addEventListener("pause", () => actualizarIconoFormacion4(true));
audioForma5.addEventListener("play", () => actualizarIconoFormacion5(false));
audioForma5.addEventListener("pause", () => actualizarIconoFormacion5(true));
audioForma6.addEventListener("play", () => actualizarIconoFormacion6(false));
audioForma6.addEventListener("pause", () => actualizarIconoFormacion6(true));

audioCampe1.addEventListener("play", () => actualizarIconoCampesena1(false));
audioCampe1.addEventListener("pause", () => actualizarIconoCampesena1(true));
audioCampe2.addEventListener("play", () => actualizarIconoCampesena2(false));
audioCampe2.addEventListener("pause", () => actualizarIconoCampesena2(true));
audioCampe3.addEventListener("play", () => actualizarIconoCampesena3(false));
audioCampe3.addEventListener("pause", () => actualizarIconoCampesena3(true));
audioCampe4.addEventListener("play", () => actualizarIconoCampesena4(false));
audioCampe4.addEventListener("pause", () => actualizarIconoCampesena4(true));
audioCampe5.addEventListener("play", () => actualizarIconoCampesena5(false));
audioCampe5.addEventListener("pause", () => actualizarIconoCampesena5(true));
audioCampe6.addEventListener("play", () => actualizarIconoCampesena6(false));
audioCampe6.addEventListener("pause", () => actualizarIconoCampesena6(true));

// -------------------------------------------------
//  AUDIOS FORMACIÓN
//  -------------------------------------------------

function reproducirPausaFormacion1() {
  if (audioForma1.paused) {
    audioForma1.play();
    iconPlay1.classList.remove("bi-play-fill");
    iconPlay1.classList.add("bi-soundwave");
  } else {
    audioForma1.pause();
    iconPlay1.classList.remove("bi-soundwave");
    iconPlay1.classList.add("bi-play-fill");
  }
  actualizarIconoFormacion(audioForma1.paused);
}

function reproducirPausaFormacion2() {
  if (audioForma2.paused) {
    audioForma2.play();
    iconPlay2.classList.remove("bi-play-fill");
    iconPlay2.classList.add("bi-soundwave");
  } else {
    audioForma2.pause();
    iconPlay2.classList.remove("bi-soundwave");
    iconPlay2.classList.add("bi-play-fill");
  }
  actualizarIconoFormacion2(audioForma2.paused);
}

function reproducirPausaFormacion3() {
  if (audioForma3.paused) {
    audioForma3.play();
    iconPlay3.classList.remove("bi-play-fill");
    iconPlay3.classList.add("bi-soundwave");
  } else {
    audioForma3.pause();
    iconPlay3.classList.remove("bi-soundwave");
    iconPlay3.classList.add("bi-play-fill");
  }
  actualizarIconoFormacion3(audioForma3.paused);
}

function reproducirPausaFormacion4() {
  if (audioForma4.paused) {
    audioForma4.play();
    iconPlay4.classList.remove("bi-play-fill");
    iconPlay4.classList.add("bi-soundwave");
  } else {
    audioForma4.pause();
    iconPlay4.classList.remove("bi-soundwave");
    iconPlay4.classList.add("bi-play-fill");
  }
  actualizarIconoFormacion4(audioForma4.paused);
}
function reproducirPausaFormacion5() {
  if (audioForma5.paused) {
    audioForma5.play();
    iconPlay5.classList.remove("bi-play-fill");
    iconPlay5.classList.add("bi-soundwave");
  } else {
    audioForma5.pause();
    iconPlay5.classList.remove("bi-soundwave");
    iconPlay5.classList.add("bi-play-fill");
  }
  actualizarIconoFormacion5(audioForma5.paused);
}
function reproducirPausaFormacion6() {
  if (audioForma6.paused) {
    audioForma6.play();
    iconPlay6.classList.remove("bi-play-fill");
    iconPlay6.classList.add("bi-soundwave");
  } else {
    audioForma6.pause();
    iconPlay6.classList.remove("bi-soundwave");
    iconPlay6.classList.add("bi-play-fill");
  }6
  actualizarIconoFormacion6(audioForma6.paused);
}

// -------------------------------------------------
//  AUDIOS CAMPESENA
//  -------------------------------------------------

function reproducirPausaCampesena1() {
  if (audioCampe1.paused) {
    audioCampe1.play();
    iconPlayC1.classList.remove("bi-play-fill");
    iconPlayC1.classList.add("bi-soundwave");
  } else {
    audioCampe1.pause();
    iconPlayC1.classList.remove("bi-soundwave");
    iconPlayC1.classList.add("bi-play-fill");
  }
  actualizarIconoCampesena1(audioCampe1.paused);
}

function reproducirPausaCampesena2() {
  if (audioCampe2.paused) {
    audioCampe2.play();
    iconPlayC2.classList.remove("bi-play-fill");
    iconPlayC2.classList.add("bi-soundwave");
  } else {
    audioCampe2.pause();
    iconPlayC2.classList.remove("bi-soundwave");
    iconPlayC2.classList.add("bi-play-fill");
  }
  actualizarIconoCampesena2(audioCampe2.paused);
}

function reproducirPausaCampesena3() {
  if (audioCampe3.paused) {
    audioCampe3.play();
    iconPlayC3.classList.remove("bi-play-fill");
    iconPlayC3.classList.add("bi-soundwave");
  } else {
    audioCampe3.pause();
    iconPlayC3.classList.remove("bi-soundwave");
    iconPlayC3.classList.add("bi-play-fill");
  }
  actualizarIconoCampesena3(audioCampe3.paused);
}

function reproducirPausaCampesena4() {
  if (audioCampe4.paused) {
    audioCampe4.play();
    iconPlayC4.classList.remove("bi-play-fill");
    iconPlayC4.classList.add("bi-soundwave");
  } else {
    audioCampe4.pause();
    iconPlayC4.classList.remove("bi-soundwave");
    iconPlayC4.classList.add("bi-play-fill");
  }
  actualizarIconoCampesena4(audioCampe4.paused);
}

function reproducirPausaCampesena5() {
  if (audioCampe5.paused) {
    audioCampe5.play();
    iconPlayC5.classList.remove("bi-play-fill");
    iconPlayC5.classList.add("bi-soundwave");
  } else {
    audioCampe5.pause();
    iconPlayC5.classList.remove("bi-soundwave");
    iconPlayC5.classList.add("bi-play-fill");
  }
  actualizarIconoCampesena5(audioCampe5.paused);
}

function reproducirPausaCampesena6() {
  if (audioCampe6.paused) {
    audioCampe6.play();
    iconPlayC6.classList.remove("bi-play-fill");
    iconPlayC6.classList.add("bi-soundwave");
  } else {
    audioCampe6.pause();
    iconPlayC6.classList.remove("bi-soundwave");
    iconPlayC6.classList.add("bi-play-fill");
  }
  actualizarIconoCampesena6(audioCampe6.paused);
}
