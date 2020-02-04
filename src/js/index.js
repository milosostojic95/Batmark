import '../scss/main.scss';
import textWriter from './typewriter';
import scrollApper from './scrollanim';
import {changeDot, changeSlide} from './slide';

// scroll animations and typewriter anim
document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.getElementById('accordion');
  if(!accordion) {
    return;
  }
  else {
    textWriter();
    document.addEventListener('scroll', scrollApper);
  }
});

// home page slider
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

      // adding src of image to element
      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src','../images/'+setNewImgUrl);

      // create clobe btn
      let closeBtn = document.createElement('a');
      let newCloseText = document.createTextNode('x');
      closeBtn.appendChild(newCloseText);
      newImgWindow.appendChild(closeBtn);
      closeBtn.setAttribute('class', 'close-btn');

      newImg.addEventListener('load',() => {
        // next btn
        let imgWidth = newImg.width;
        let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.createElement('a');
        let nextText = document.createTextNode('next');
        nextBtn.appendChild(nextText);
        container.appendChild(nextBtn);
        nextBtn.setAttribute('class', 'img-btn-next');
        nextBtn.addEventListener('click',changeImg(1));
        nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;' ;

        // prev btn
        let prevBtn = document.createElement('a');
        let prevText = document.createTextNode('prev');
        prevBtn.appendChild(prevText);
        container.appendChild(prevBtn);
        prevBtn.setAttribute('class', 'img-btn-prev');
        prevBtn.addEventListener('click',changeImg(0));
        prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;' ;

      })

      // changing img
      function changeImg(changeImg) {

      }

      // close on btn
      closeBtn.addEventListener('click',()=>{
        newImgWindow.remove();
        document.querySelector('.img-btn-next').remove();
        document.querySelector('.img-btn-prev').remove();
      })
      // funcstion to close modal if outside click
      newImgWindow.addEventListener('click',(e)=>{
        if(e.target == newImgWindow) {
          newImgWindow.remove();
          document.querySelector('.img-btn-next').remove();
          document.querySelector('.img-btn-prev').remove();
        }
      })
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




