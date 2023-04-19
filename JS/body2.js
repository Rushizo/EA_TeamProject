const $notizieEa = document.querySelector("#notizieEA");
const $eaPlay = document.querySelector("#EA-play");
const $fifa = document.querySelector("#fifa");
const $f1 = document.querySelector("#F1");
const $apex = document.querySelector("#apex");
const $theSims = document.querySelector("#the-sims");
const $battlefild = document.querySelector("#battlefild");
const $insideEa = document.querySelector("#inside-EA");

const $container1 = document.querySelector(".container1");
const $container2 = document.querySelector(".container2");
const $container3 = document.querySelector(".container3");
const $container4 = document.querySelector(".container4");
const $container5 = document.querySelector(".container5");
const $container6 = document.querySelector(".container6");
const $container7 = document.querySelector(".container7");
const $container8 = document.querySelector(".container8");


let clicked = true;



$notizieEa.addEventListener("click", () => {
    if(clicked){
        $container1.style.display = "block";
        
        $container2.style.display = "none";
        $container3.style.display = "none";
        $container4.style.display = "none";
        $container5.style.display = "none";
        $container6.style.display = "none";
        $container7.style.display = "none";
        $container8.style.display = "none";
    } else {
        
    }
})

$eaPlay.addEventListener("click", () => {
    if($container2.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "block";
        $container3.style.display = "none";
        $container4.style.display = "none";
        $container5.style.display = "none";
        $container6.style.display = "none";
        $container7.style.display = "none";
        $container8.style.display = "none";
    } else {
        
    }
})

$fifa.addEventListener("click", () => {
    if($container3.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "none";
        $container3.style.display = "block";
        $container4.style.display = "none";
        $container5.style.display = "none";
        $container6.style.display = "none";
        $container7.style.display = "none";
        $container8.style.display = "none";
    } else {
        
    }
})


$f1.addEventListener("click", () => {
    if($container4.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "none";
        $container3.style.display = "none";
        $container4.style.display = "block";
        $container5.style.display = "none";
        $container6.style.display = "none";
        $container7.style.display = "none";
        $container8.style.display = "none";
    } else {
        
    }
})

$apex.addEventListener("click", () => {
    if($container5.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "none";
        $container3.style.display = "none";
        $container4.style.display = "none";
        $container5.style.display = "block";
        $container6.style.display = "none";
        $container7.style.display = "none";
        $container8.style.display = "none";
    } else {
        
    }
})


$theSims.addEventListener("click", () => {
    if($container6.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "none";
        $container3.style.display = "none";
        $container4.style.display = "none";
        $container5.style.display = "none";
        $container6.style.display = "block";
        $container7.style.display = "none";
        $container8.style.display = "none";
    } else {
        
    }
})

$battlefild.addEventListener("click", () => {
    if($container7.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "none";
        $container3.style.display = "none";
        $container4.style.display = "none";
        $container5.style.display = "none";
        $container6.style.display = "none";
        $container7.style.display = "block";
        $container8.style.display = "none";
    } else {
        
    }
})

$insideEa.addEventListener("click", () => {
    if($container8.style.display === "none"){
        $container1.style.display = "none";
        $container2.style.display = "none";
        $container3.style.display = "none";
        $container4.style.display = "none";
        $container5.style.display = "none";
        $container6.style.display = "none";
        $container7.style.display = "none";
        $container8.style.display = "block";
    } else {
        
    }
})








