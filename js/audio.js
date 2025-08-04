const titulo = document.getElementById('textoAudio');
const visualPod = document.querySelector('.boxSliderImg img');
const progresoPod = document.getElementById('progresoPod');
const podcasts = document.getElementById('podcasts');
const iconoControlPod = document.getElementById('iconoControlP');
const botonReproducirPausarPod = document.querySelector('.controlesPod button.boton-reproducir-pausarP');
const botonAtrasP = document.querySelector('.controlesPod button.atrasP');
const botonSiguienteP = document.querySelector('.controlesPod button.siguienteP');



// Galeria de Podcasts
const galeriaVisual = [
    {
        imagen:'https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png'
    },
    {
        imagen:'https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png'
    },
    {
        imagen:'https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png'
    },
    {
        imagen:'https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png'
    },
    {
        imagen:'https://www.sena.edu.co/es-co/Noticias/PublishingImages/Paginas/podCast/Sena-al-aire-Radio.png'
    }
]

const podcastsGaleria = [
    {
        tituloP:'Programa-SENA-Comunica-Radio-31-de-octubre-de-2024',
        fuenteP:'https://www.sena.edu.co/es-co/Noticias/Podcast_2024/Programa-SENA-Comunica-Radio-31-de-octubre-de-2024.mp3'
    },
    {
        tituloP:'Programa-SENA-Comunica-Radio-17-de-octubre-de-2024',
        fuenteP:'https://www.sena.edu.co/es-co/Noticias/Podcast_2024/Programa-SENA-Comunica-Radio-17-de-octubre-de-2024.mp3'
    },
    {
        tituloP:'Internacionalización',
        fuenteP:'https://www.sena.edu.co/es-co/Noticias/Podcast_2024/Internacionalizacio%CC%81n.mp3'
    },
    {
        tituloP:'Programa-SENA-Comunica-Radio-19-de-septiembre-de-2024',
        fuenteP:'https://www.sena.edu.co/es-co/Noticias/Podcast_2024/Programa-SENA-Comunica-Radio-19-de-septiembre-de-2024.mp33'
    },
    {
        tituloP:'Programa-SENA-Comunica-Radio-12-de-septiembre-de-2024',
        fuenteP:'https://www.sena.edu.co/es-co/Noticias/Podcast_2024/Programa-SENA-Comunica-Radio-12-de-septiembre-de-2024-v1.mp33'
    }
]

let visualActual = 0;
let indicePodcastsActual = 0;

function updateSongInfoPod(){
    visualPod.src = galeriaVisual[visualActual].imagen;
    titulo.textContent = podcastsGaleria[indicePodcastsActual].tituloP;
    podcasts.src = podcastsGaleria[indicePodcastsActual].fuenteP;
    podcasts.addEventListener('loadeddata', function(){});
};

podcasts.addEventListener('loadedmetadata', function(){
    progresoPod.max = podcasts.duration;
    progresoPod.value = podcasts.currentTime;
})

botonReproducirPausarPod.addEventListener('click', reproducirPausarP);

function reproducirPausarP(){

    if(podcasts.paused){

        reproducirPodcasts();

    } else {

        pausarPodcasts();
    }
};

function reproducirPodcasts(){

    podcasts.play();

    iconoControlPod.classList.add('bi-pause');
    iconoControlPod.classList.remove('bi-play');
};

function pausarPodcasts(){

    podcasts.pause();

    iconoControlPod.classList.remove('bi-pause');
    iconoControlPod.classList.add('bi-play');
};

podcasts.addEventListener('timeupdate', function(){
    
    if(!podcasts.paused){
        progresoPod.value = podcasts.currentTime;
    }
});

progresoPod.addEventListener('input', function(){
    podcasts.currentTime = progresoPod.value;
});

botonSiguienteP.addEventListener('click', ()=>{
    indicePodcastsActual = (indicePodcastsActual + 1) % podcastsGaleria.length;
    visualActual = (visualActual + 1) % galeriaVisual.length;
    updateSongInfoPod();
    reproducirPodcasts();
})
botonAtrasP.addEventListener('click', ()=>{
    indicePodcastsActual = (indicePodcastsActual - 1 + podcastsGaleria.length) % podcastsGaleria.length;
    visualActual = (visualActual - 1 + galeriaVisual.length) % galeriaVisual.length;
    updateSongInfoPod();
    reproducirPodcasts();
})

updateSongInfoPod();