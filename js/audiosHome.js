
const boxAudiosF = document.querySelector(".list-audiosF");
const btnPlayF = document.querySelector(".boxIconAudioF");
const iconoPlay = document.querySelector(".boxIconAudioF i");
const audioF = document.querySelector(".cardAudio audio");
const boxAudiosCamp = document.querySelector(".list-audiosC");

let audiosFormacion = [];
let tarjetaAudioF;
let audiosCampesena = [];
let tarjetaAudioCamp;


// ---------------------------------------------------
//  AUDIOS FORMACIÓN Y CAMPESENA
// ---------------------------------------------------
class Audio{
  constructor(img, texto, audio){
    this.img = img,
    this.texto = texto,
    this.audio = audio
  }
}

let audioF_01 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_02 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_03 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_04 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_05 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_06 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_07 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");
let audioF_08 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/formación/DVBBS _ Borgeous - TSUNAMI (Original Mix)(MP3_320K).mp3");

audiosFormacion.push(audioF_01,audioF_02,audioF_03,audioF_04,audioF_05,audioF_06,audioF_07,audioF_08);

function mostrarAudiosF(){
   audiosFormacion.forEach((audioF) => {
      tarjetaAudioF = `
      <li data-audio="audio1" class="audio1">
        <div class="cardAudio">
          <div class="cardImgAudio">
            <img src="${audioF.img}" alt="${audioF.texto}" />
            <button class="boxIconAudioF">
                <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="textAudio">
              <p class="textA">
                  ${audioF.texto}
              </p>
          </div>
            <audio src="${audioF.audio}"></audio>
         </div>
      </li>
      `
      boxAudiosF.innerHTML += tarjetaAudioF
   });
}

let audioCamp_01 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_02 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_03 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_04 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_05 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_06 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_07 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");
let audioCamp_08 = new Audio("./src/img/sena-radio.jpg", "Titulo o Descripción", "./src/podcasts/campesena/Vicente Fernández ― Resbalandito ⟦𝗘𝗽𝗶𝗰𝗲𝗻𝘁𝗿𝗼⟧.mp3");

audiosCampesena.push(audioCamp_01,audioCamp_02,audioCamp_03,audioCamp_04,audioCamp_05,audioCamp_06,audioCamp_07,audioCamp_08);

function mostrarAudiosC(){
   audiosCampesena.forEach((audioC) => {
      tarjetaAudioCamp = `
        <li data-audio="audio1" class="audio1">
          <div class="cardAudio">
            <div class="cardImgAudio">
              <img src="${audioC.img}" alt="${audioC.texto}" />
              <button class="boxIconAudioC">
                  <i class="bi bi-play-fill"></i>
              </button>
            </div>
            <div class="textAudio">
                <p class="textA">
                    ${audioC.texto}
                </p>
            </div>
              <audio src="${audioC.audio}"></audio>
           </div>
        </li>
      `
      boxAudiosCamp.innerHTML += tarjetaAudioCamp
   });
}


window.addEventListener("load",  mostrarAudiosF, mostrarAudiosC);