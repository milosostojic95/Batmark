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

      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');

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

      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src','../images/' +setNewImgUrl);
    });
  });
}
