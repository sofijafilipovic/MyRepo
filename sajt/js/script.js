let ime = document.getElementById("ime")
let prezime = document.getElementById("prezime")
let email = document.getElementById("email")
let telefon = document.getElementById("telefon")
let poruka = document.getElementById("poruka")
let dugme = document.getElementById("posalji")
let meni = document.querySelector(".mobilna-verzija")
let dugmeMeni = document.querySelector(".dugmeMeni")

// BURGER MENI
dugmeMeni.addEventListener("click", otvori)
function otvori(){
    meni.classList.toggle("mobilna-verzija")
}

// VALIDACIJA FORME
dugme.addEventListener("click", posalji)
function posalji(e){
    
    if (ime.value === "" || prezime.value === "" || email.value === "" || telefon.value === "" || poruka.value === "") {
        alert("Morate popuniti sva polja pre nego što pošaljete formu.");
        e.preventDefault();
      } else {
        window.confirm("FORMA USPESNO POSLATA: \n\n Ime: " + ime.value + "\n Prezime: " + prezime.value + "\n Email: " + email.value + "\n Telefon: "
        + telefon.value + "\n Poruka: " + poruka.value )

        // ponovno postavljanje praznih polja
        ime.value=""
        prezime.value=""
        email.value=""
        telefon.value=""
        poruka.value=""

        e.preventDefault()
    }
}


// FUNKCIONALOST 1
let video = document.querySelector(".video");
let playBtn = document.querySelector(".play");

function play() {
  if (video.paused) {
    playBtn.innerHTML = "Stop";
    video.play();
 
  } else {
    playBtn.innerHTML = "Play";
    video.pause();
  }
}

// FUNKCIONALOST 2
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


  // FUNKCIONALOST 3
function acceptCookies() {
  let kolacici = document.querySelector(".kolacici");
  kolacici.style.display = "none";
}