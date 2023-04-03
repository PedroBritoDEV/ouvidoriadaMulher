
//slide box

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}
//fim do slide



//dropdown-mobile

var nav = document.querySelector(".nav-list")
var btn_mobile = document.querySelector(".mobile-menu")
var width = window.screen.width



if (width<801) {
  nav.classList.add('hidden')
  btn_mobile.classList.remove('hidden')
}
function dropdown() {
  nav.classList.toggle("hidden")
}