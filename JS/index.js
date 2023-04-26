const popupMenu = document.querySelector(".popupMenu");
const dotsButton = document.querySelector(".dots");

dotsButton.addEventListener("click", () => {
  popupMenu.classList.toggle("open");
});

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
  popupMenu.classList.remove("open");
});

var profileBtn = document.getElementById('profileBtn');
var helpBtn = document.getElementById('helpBtn');

function toggleButton(button) {
button.classList.toggle('active');
}

function toggleList(button) {
var list = button.querySelector('ul');
list.classList.toggle('active');
}

profileBtn.addEventListener('click', function(event) {
event.preventDefault();
toggleButton(this);
toggleList(this);
});

helpBtn.addEventListener('click', function(event) {
event.preventDefault();
toggleButton(this);
toggleList(this);
});
