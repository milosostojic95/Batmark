import '../scss/main.scss';


// slide

const slides = document.querySelectorAll('.slide > .slide-item');
const links = document.querySelectorAll('.nav-link');

links.forEach((link,index)=>{
  link.addEventListener('click',()=>{
    changeDot(link);
    changeSlide(index);
  });
});

function changeDot(dot){
  links.forEach((link)=>{
    link.classList.remove('active');
  });
  dot.classList.add('active')
};

function changeSlide(slidePage){
  slides.forEach((slide)=>{
    slide.style.transform= 'translateX(-100%)';
    slide.style.transition='.2s';
    });
  slides[slidePage].style.transform ='translateX(0)';
  slides[slidePage].style.transition ='.8s';
};
