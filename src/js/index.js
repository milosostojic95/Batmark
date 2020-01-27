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
    slide.style.opacity= '0';
    slide.style.transition='.2s';
    });
  slides[slidePage].style.opacity ='1';
  slides[slidePage].style.transition ='.8s';
};

//gallery popup

let galleryImages = document.querySelectorAll('.gallery-item');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
  galleryImages.forEach((image,index)=>{
    image.addEventListener('click',()=>{
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue('background-image');
      let getImgUrlPos = getFullImgUrl.split('/images/');
      let setNewImgUrl = getImgUrlPos[1].replace('")','');


      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');

      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src','../images/' +setNewImgUrl);
      newImg.setAttribute('id','current-img');

      newImg.onload = function(){
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let newNextBtn = document.createElement('a');
        let btnNextText = document.createTextNode('Next');
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute('class','img-btn-next');
        newNextBtn.setAttribute('onclick','changeImg(1)');

        newNextBtn.style.right = '200px';

        let newPrevBtn = document.createElement('a');
        let btnPrevText = document.createTextNode('Prev');
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute('class','img-btn-prev');
        newPrevBtn.setAttribute('onclick','changeImg(0)');

        newPrevBtn.style.left = '200px'
        // ovde promeni poziciju
      }

    });
  });
}

function closeImg() {
  document.querySelector('.img-window').remove();
  document.querySelector('.img-btn-next').remove();
  document.querySelector('.img-btn-prev').remove();
};

function changeImg(changeDir) {
  document.querySelector('#current-img').remove();

  let getImgWindow = document.querySelector('.img-window');
  let newImg = document.createElement('img');
  getImgWindow.appendChild(newImg);

  let calcNewImg;

  if(changeDir === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if(calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  }
  else if(changeDir === 0) {
    calcNewImg = getLatestOpenedImg + 1;
    if(calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }
  newImg.setAttribute('src', '../images'+ calcNewImg +'.jpg');
  newImg.setAttribute('id','current-img');
  getLatestOpenedImg = calcNewImg;

  newImg.addEventListener('load',()=>{
    let imgWidth = this.width;
    let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

    let nextBtn = document.querySelector('img-btn-next');
    nextBtn.style.scssText= 'right' + calcImgToEdge+ 'px';

    let prevBtn = document.querySelector('img-btn-next');
    nextBtn.style.scssText= 'left' + calcImgToEdge+ 'px';
  })

}
