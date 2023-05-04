
const $blackNavbar = document.querySelector('.black-navbar');
const $whiteNavbar = document.querySelector('.white-navbar');
const $navbar = document.querySelector('nav')

window.addEventListener('scroll', function() {

  if (window.pageYOffset > $blackNavbar.offsetHeight) {
    $blackNavbar.style.marginTop = "-40px";
  } else {
    $blackNavbar.style.marginTop = '0';
  }
});



const $account = document.querySelector(".account");
const $help = document.querySelector(".help");
const $login = document.querySelector(".login");
const $closeButton = document.querySelector(".nav-close-button")
const $closeDiv = document.querySelector(".close-div")
const $body = document.querySelector("body")
const $helpDiv = document.querySelector(".help-div")

$account.addEventListener("click", () => {
    $blackNavbar.style.height = "400px"
    $blackNavbar.style.position = "fixed"
    $whiteNavbar.style.position = "relative"
    $login.style.display = "flex"
    $closeDiv.style.display = "block"
    $body.style.overflow = "hidden"
    $helpDiv.style.display = "none"

})

$closeButton.addEventListener("click", () => {
  $blackNavbar.style.height = "40px"
  $blackNavbar.style.position = "relative"
  $whiteNavbar.style.position = "fixed"
  $login.style.display = "none"
  $closeDiv.style.display = "none"
  $body.style.overflow = "auto"
})


//-----------------------------------------------







//------------------------------------------------
$closeDiv.addEventListener("click", () => {
  $blackNavbar.style.height = "40px"
  $blackNavbar.style.position = "relative"
  $whiteNavbar.style.position = "fixed"
  $login.style.display = "none"
  $helpDiv.style.display = "none"
  $closeDiv.style.display = "none"
  $body.style.overflow = "auto"
})
