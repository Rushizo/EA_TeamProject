const divContainer = document.querySelector("#toggle-menu");
const divContainer2 = document.querySelector("#toggle-menu2");
let isClicked = true;
let isClicked2 = true;

let showOrHide = function(){
    if (isClicked){
    divContainer.style.visibility = "visible";
    divContainer2.style.visibility = "hidden";
    isClicked = false;
    isClicked2 = true;
    } else {
    divContainer.style.visibility = "hidden";
    isClicked = true;
    }
}

let showOrHide2 = function(){
    if (isClicked2){
    divContainer2.style.visibility = "visible";
    divContainer.style.visibility = "hidden";
    isClicked2 = false;
    isClicked = true;
    } else {
    divContainer2.style.visibility = "hidden";
    isClicked2 = true;
    }
}