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
  galleryImages.forEach((image)=>{
    image.addEventListener('click',()=>{
      // taking img src from css
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue('background-image');
      let getImgUrlPos = getFullImgUrl.split('/images/');
      let setNewImgUrl = getImgUrlPos[1].replace('")','');

      //create div element for image
      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');

      // create clobe btn
      let closeBtn = document.createElement('a');
      let newCloseText = document.createTextNode('x');
      closeBtn.appendChild(newCloseText);
      newImgWindow.appendChild(closeBtn);
      closeBtn.setAttribute('class', 'close-btn');

      // close on btn
      closeBtn.addEventListener('click',()=>{
        newImgWindow.remove();
      })
      // funcstion to close modal if outside click
      newImgWindow.addEventListener('click',(e)=>{
        if(e.target == newImgWindow) {
          newImgWindow.remove();
        }
      })
      // adding src of image to element
      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src','../images/'+setNewImgUrl);
    });
  });
}

//menu tigger

const menuBtn = document.querySelector('.menu-trigger');
const navBar = document.querySelector('.navbar-nav')

menuBtn.addEventListener('click', ()=>{
  navBar.style.transform = 'translateY(0)';

  let closeBtn = document.createElement('a');
  let closeBtnText = document.createTextNode('x');
  closeBtn.appendChild(closeBtnText);
  closeBtn.setAttribute('class','close-btn')
  navBar.appendChild(closeBtn);

  //closing navbar
  closeBtn.addEventListener('click',()=>{
    navBar.style.transform = 'translateY(-100%)';
  });
});




window.addEventListener('load',() =>{
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('loader-finish');
});


//text animation

class typeWriter {
  constructor(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.txt =  '';
    this.words = words;
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
    this.wait = wait;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    let typeSpeed = 100;

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex ++;
      typeSpeed = 500;
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() =>this.type(), typeSpeed);
  }
}
document.addEventListener('DOMContentLoaded',() => {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new typeWriter(txtElement, words, wait);
});
