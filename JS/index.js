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
const blackTopNavbar = document.querySelector('.blackTopNavbar');
const bottomNavbar = document.querySelector('.bottomNavbar');
const mobileBottomNavbar = document.querySelector('.mobileBottomNavbar');

window.addEventListener('scroll', function() {

  if (window.pageYOffset > blackTopNavbar.offsetHeight) {
    blackTopNavbar.style.display = 'none';
  } else {
    blackTopNavbar.style.display = 'flex';
  }
});



const menuIcon = document.querySelector('.menuIcon');
const menuList = document.querySelector('.newMenuList');


menuIcon.addEventListener('click', function() {
  menuList.classList.toggle('open');
});

const titles = document.querySelectorAll('.title');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const menu = title.nextElementSibling;
    titles.forEach(t => {
      if (t !== title) {
        t.nextElementSibling.classList.remove('active');
      }
    });
    menu.classList.toggle('active');
  });
});
