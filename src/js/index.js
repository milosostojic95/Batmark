import '../scss/main.scss';


// moving ref

const carouselSlide =  document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide > img');
// buttons
const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');

//counter
let counter = 1;

const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

console.log(size)
//
nextBtn.addEventListener('click',()=>{
  if(counter >= carouselImages.lenght - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out'
  carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
  counter ++;
});

prevBtn.addEventListener('click',()=>{
  if(counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out'
  carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
  counter --;
});

carouselSlide.addEventListener('transitionend',()=>{
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - 7;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - 17 ;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
  }
});

