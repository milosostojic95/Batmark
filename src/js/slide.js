export {changeDot,changeSlide};

const slides = document.querySelectorAll('.slide > .slide-item');
const links = document.querySelectorAll('.nav-link');
let current = 0;

function changeDot(dot){
  links.forEach((link)=>{
    link.classList.remove('active');
  });
  dot.classList.add('active')
};

function changeSlide(slidePage){
  const nextPage = slides[slidePage];
  const currentPage = slides[current];

  nextPage.classList.add('show');
  nextPage.classList.remove('done');
  currentPage.classList.add('done');
  currentPage.classList.remove('show');
  current = slidePage;
};
