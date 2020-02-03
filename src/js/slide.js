export {changeDot,changeSlide};

const slides = document.querySelectorAll('.slide > .slide-item');
const links = document.querySelectorAll('.nav-link');

function changeDot(dot){
  links.forEach((link)=>{
    link.classList.remove('active');
  });
  dot.classList.add('active')
};

function changeSlide(slidePage){
  slides.forEach((slide)=>{
    slide.style.opacity= '0';
    slide.style.transition='.2s';
    });
  slides[slidePage].style.opacity ='1';
  slides[slidePage].style.transition ='.8s';
};
