import '../scss/main.scss';
import textWriter from './typewriter';
import scrollApper from './scrollanim';
import menuTrigger from './menutrigger';
import {changeDot, changeSlide} from './slide';

if(window.location.pathname == '/index.html') {
  //scroll animation
  window.addEventListener('scroll', scrollApper);
  //type writter- text animation on home page
  document.addEventListener('DOMContentLoaded',textWriter);
}

if(window.location.pathname == '/reference.html') {
  window.addEventListener('scroll', scrollApper);
}

// MENU TRIGGER
const menuBtn = document.querySelector('.menu-trigger');
menuBtn.addEventListener('click', menuTrigger);

// SLIDER
const links = document.querySelectorAll('.nav-link');

links.forEach((link,index)=>{
  link.addEventListener('click',()=>{
    changeDot(link);
    changeSlide(index);
  });
});


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

// preloader
window.addEventListener('load',() =>{
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('loader-finish');
});

// contact animation
const contactText = document.querySelectorAll('.form-control');
const labelText = document.querySelectorAll('label');

contactText.forEach((form,index) => {
  form.addEventListener('click',function() {
    labelText[index].style.top = '0px';
    labelText[index].style.fontSize = '16px';
  });
})




