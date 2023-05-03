
const blackNavbar = document.querySelector('.black-navbar');
const whiteNavbar = document.querySelector('.white-navbar');
const navbar = document.querySelector('nav')

const ScrollBar = () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    whiteNavbar.style.top = "-40px";
  } else {
    whiteNavbar.style.top = "0px";
  }
}


const $giochi = document.querySelector('.giochi')
const $altreEsperienze = document.querySelector('.altre-esperienze')
const $informazioni = document.querySelector('.informazioni')
const $impegni = document.querySelector('.impegni')
const $risorse = document.querySelector('.risorse')

const $giochiMenù = document.querySelector('.giochi-menù')
const $altreEsperienzeMenù = document.querySelector('.altre-esperienze-menu')
const $informazioniMenù = document.querySelector('.informazioni-menu')
const $impegniMenù = document.querySelector('.impegni-menu')
const $risorseMenù = document.querySelector('.risorse-menu')



//Giochi

$giochi.addEventListener("mouseover", (event) => {
    $giochiMenù.style.display = "flex";
  } 
)

$giochiMenù.addEventListener("mouseover", (event) => {
  $giochiMenù.style.display = "flex";
} 
)



$giochiMenù.addEventListener("mouseleave", (event) => {
  setTimeout(() => {
    $giochiMenù.style.display = "none";
  }, 100);
} 
)


//Altre esperienze
$altreEsperienze.addEventListener("mouseover", (event) => {
  $altreEsperienzeMenù.style.display = "flex";
} 
)

$altreEsperienze.addEventListener("mouseover", (event) => {
$altreEsperienzeMenù.style.display = "flex";
} 
)




$altreEsperienzeMenù.addEventListener("mouseleave", (event) => {
setTimeout(() => {
  $altreEsperienzeMenù.style.display = "none";
}, 100);
} 
)
