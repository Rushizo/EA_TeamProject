const divContainer = document.querySelector("#toggle-menu");
const divContainer2 = document.querySelector("#toggle-menu2");
let isClicked = true;
let isClicked2 = true;

let showOrHide = function(){
    if (isClicked){
    divContainer.style.display = "flex";
    divContainer2.style.display = "none";
    isClicked = false;
    isClicked2 = true;
    } else {
    divContainer.style.display = "none";
    isClicked = true;
    }
}

let showOrHide2 = function(){
    if (isClicked2){
    divContainer2.style.display = "flex";
    divContainer.style.display = "none";
    isClicked2 = false;
    isClicked = true;
    } else {
    divContainer2.style.display = "none";
    isClicked2 = true;
    }
}