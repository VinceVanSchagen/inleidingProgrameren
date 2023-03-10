

var body = document.querySelector("body")

var platenspeler = document.querySelector("img")

var plaatjes = ["img/Klassiek-Lp.svg", "img/Metal-Lp.svg", "img/Kansas-Lp.svg"]

var klassiek = document.getElementById("album1")

var metal = document.getElementById("album2")

var kansas = document.getElementById("album3")

var klassiekaudio = document.getElementById("klassiekaudio")

var metalaudio = document.getElementById("metalaudio")

var lp = document.getElementById("lp")

var voegtitel = document.querySelector("h1.titel")

var voegtekst = document.querySelector("p.stukje")

var platenspeler = 0;


// pauzeer alle audio 
function stopAudio(){
    klassiekaudio.pause();
    metalaudio.pause();
    kansasaudio.pause();
}

// verwijder de geactiveerde class
function reset(){
    body.classList.remove("bodychangeklassiek")
    body.classList.remove("bodychangemetal")
    body.classList.remove("bodychangekansas")
}
// pas de achtergrond kleur aan per album
function moodswitch(){
    if(platenspeler == 1){
        body.classList.add("bodychangeklassiek")
    }
    else if (platenspeler == 2){
        body.classList.add("bodychangemetal")

    }
    else if(platenspeler == 3){
        body.classList.add("bodychangekansas")
    }
}
// laat het album zien, laat het spinnen en voeg text toe
function klassiekshow(){
    lp.src =  plaatjes [0];
    stopAudio()
    reset()
    platenspeler = 1;
    klassiekaudio.play()
    lp.classList.add("afspelen")
    voegtitel.classList.add("text-open");
    voegtitel.textContent = "Erik Satie - Gymnopédie No.1";
    voegtekst.classList.add("text-open");
    voegtekst.textContent = "The work's unusual title comes from the French form of gymnopaedia, the ancient Greek word for an annual festival where young men danced naked – or perhaps simply unarmed"; 
    setTimeout(function showtext() {
    voegtekst.textContent = "The source of the title has been a subject of debate. Satie and his friend Alexis Roland-Manuel maintained that he adopted it after reading Gustave Flaubert's novel Salammbô, while others see a poem by J. P. Contamine de Latour as the source of Satie's inspiration."; 
    }, 8000)
    setTimeout(function showtext() {
    voegtekst.textContent = "since the first Gymnopédie was published in the magazine La Musique des familles in the summer of 1888 together with an excerpt of Latour's poem Les Antiques, where the term appears."; 
    }, 16000)
    setTimeout(function showtext() {
    voegtekst.classList.remove("text-open"); 
    }, 24000)
}

function metalshow(){
    lp.src =  plaatjes [1];
    stopAudio()
    reset()
    platenspeler = 2;
    metalaudio.play()
    lp.classList.add("afspelen")
    voegtitel.classList.add("text-open");
    voegtitel.textContent = "Metallica - Fade to black";
    voegtekst.classList.add("text-open");
    voegtekst.textContent = "Fade to Black is a song and the first power ballad by American heavy metal band Metallica, released as the first promotional single from its second studio album, Ride the Lightning."; 
    setTimeout(function showtext() {
    voegtekst.textContent = "The song was ranked as having the 24th best guitar solo ever by Guitar World readers."; 
    }, 8000)
    setTimeout(function showtext() {
    voegtekst.textContent = "The song peaked at number 100 on Swiss Singles Chart in 2008.[2] The song is certified gold by the Recording Industry Association of America."; 
    }, 16000)
    setTimeout(function showtext() {
    voegtekst.classList.remove("text-open"); 
    }, 24000)
}

function kansasshow(){
    lp.src =  plaatjes [2];
    stopAudio()
    reset()
    platenspeler = 3;
    kansasaudio.play()
    lp.classList.add("afspelen")
    voegtitel.classList.add("text-open");
    voegtitel.textContent = "Kansas - Dust in the wind";
    voegtekst.classList.add("text-open");
    voegtekst.textContent = "Dust in the Wind is a song recorded by American progressive rock band Kansas and written by band member Kerry Livgren, first released on their 1977 album Point of Know Return."; 
    setTimeout(function showtext() {
    voegtekst.textContent = "The song peaked at No. 6 on the Billboard Hot 100 the week of April 22, 1978, making it Kansas's only single to reach the top ten in the US. The 45-rpm single was certified Gold for sales of one million units by the RIAA shortly after the height of its popularity as a hit single."; 
    }, 8000)
    setTimeout(function showtext() {
    voegtekst.textContent = "More than 25 years later, the RIAA certified Gold the digital download format of the song, Kansas' only single to be so certified as of September 17, 2008."; 
    }, 16000)
    setTimeout(function showtext() {
    voegtekst.classList.remove("text-open"); 
    }, 24000)
}
//het pauzeren van de audio 
function pauseklassiekaudio(){
    klassiekaudio.pause()
    lp.classList.remove("afspelen")
}

function pausemetalaudio(){
    metalaudio.pause()
    lp.classList.remove("afspelen")
}
function pausekansasaudio(){
    kansasaudio.pause()
    lp.classList.remove("afspelen")
}

// activeer de functies door te klikken op de albums
klassiek.addEventListener("click", klassiekshow);
metal.addEventListener("click", metalshow);
kansas.addEventListener("click", kansasshow);
// Dubbelklik om te pauzeren
klassiek.addEventListener("dblclick", pauseklassiekaudio);
metal.addEventListener("dblclick", pausemetalaudio);
kansas.addEventListener("dblclick", pausekansasaudio);
// kleur veranderen achtergrond
platenspeler/addEventListener("click", moodswitch)



