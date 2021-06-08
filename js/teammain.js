// toggle
function toggle() {
  var curtain = document.getElementById('curtain');
  var container = document.getElementById('container');
  var fas = document.querySelector('.fas');
  curtain.classList.toggle('active')
  container.classList.toggle('active')
  fas.classList.toggle('active')
};

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

//slide
var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var index = 0;

function nextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
};

function prevSlide() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

var slideshowText = document.getElementById('slideshowText');
var slidesText = slideshowText.getElementsByTagName('div');
var i = 0;

function nextSlideText() {
  slidesText[i].classList.remove('active');
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add('active');
};

function prevSlideText() {
  slidesText[i].classList.remove('active');
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add('active');
};

