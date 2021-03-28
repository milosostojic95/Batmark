import 'bootstrap';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import '../scss/main.scss';

// owl carousel
(function($) {
  $(document).ready(function(){
    var homeSlider = $('.hero-slider .owl-carousel');
    homeSlider.owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      autoplayHoverPause: true
    });

    var trainingCarousel = $('.reference .slider .owl-carousel');
    trainingCarousel.owlCarousel({
      items:4,
      autoplay: false,
      smartSpeed: 1500,
      loop: true,
      margin: 10,
      autoplayHoverPause: true,
      dots: true,
   
    })
    var testimonialCarousel = $('.why-batmark .testimonial-slider .owl-carousel');
    testimonialCarousel.owlCarousel({
      loop: true,
      autoplay: false,
      smartSpeed: 1500,
      margin: 30,
      autoWidth: true,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items:2,
        },
        992: {
          items:1,
        },
        1200: {
          items:1,
        }
      }
    })
    var trainingslCarousel = $('.trainings-testimonial .testimonial-slider-trainings .owl-carousel');
    trainingslCarousel.owlCarousel({
      items:2,
      loop: true,
      autoplay: false,
      smartSpeed: 1500,
      autoWidth: true,
      autoplayHoverPause: true,
      center: true,
      dots: true,
      responsive: {
        0: {
          items: 2,
          margin: 20,
        },
        578: {
          items: 2,
          margin: 30,
        },
        768: {
          items: 2,
          margin: 30,
        },
        992: {
          items: 2,
          margin: 50,
        },
        1200: {
          margin: 70,
        }
      }
    })
    var trainingslCarousel = $('.gallery-slider .testimonial-slider-gallery .owl-carousel');
    trainingslCarousel.owlCarousel({
      items:2,
      loop: true,
      autoplay: false,
      smartSpeed: 1500,
      autoWidth: true,
      autoplayHoverPause: true,
      center: true,
      dots: true,
      responsive: {
        0: {
          items: 2,
          margin: 20,
        },
        578: {
          items: 2,
          margin: 30,
        },
        768: {
          items: 2,
          margin: 30,
        },
        992: {
          items: 2,
          margin: 50,
        },
        1200: {
          margin: 70,
        }
      }
    })
  });
}(jQuery));



//gallery popup
let galleryImages = document.querySelectorAll('.gallery-item');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
  galleryImages.forEach((image, index)=>{
    image.addEventListener('click',()=>{
      // taking img src from css
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue('background-image');
      let getImgUrlPos = getFullImgUrl.split('/images/');
      let setNewImgUrl = getImgUrlPos[1].replace('")','');

      getLatestOpenedImg = index + 1;
      //create div element for image
      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');


      // adding src of image to element
      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src','../images/'+setNewImgUrl);
      newImg.setAttribute('id','current-img');

      newImg.addEventListener('load',() => {
        // next btn
        let imgWidth = newImg.width;
        let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.createElement('a');
        let nextText = document.createTextNode('next');
        nextBtn.appendChild(nextText);
        container.appendChild(nextBtn);
        nextBtn.setAttribute('class', 'img-btn-next');
        nextBtn.addEventListener('click', () => {
          document.querySelector('#current-img').remove();

          let getImgWindow = document.querySelector('.img-window');
          let newImg = document.createElement('img');
          getImgWindow.appendChild(newImg);
          let calcNewImg;
          calcNewImg = getLatestOpenedImg + 1;

          if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
          }
          newImg.setAttribute('src','../images/img'+ calcNewImg +'.jpg');
          newImg.setAttribute('id', 'current-img');
          getLatestOpenedImg = calcNewImg;
             //position nexxtbtn and prev btn after images load
          newImg.addEventListener('load',() => {
            let imgWidth = newImg.width;
            let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
            let nextBtn = document.querySelector('.img-btn-next');
            nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;' ;
            let prevBtn = document.querySelector('.img-btn-prev');
            prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;' ;
          });
        });
        nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;' ;

        // prev btn
        let prevBtn = document.createElement('a');
        let prevText = document.createTextNode('prev');
        prevBtn.appendChild(prevText);
        container.appendChild(prevBtn);
        prevBtn.setAttribute('class', 'img-btn-prev');
        prevBtn.addEventListener('click', () => {
          document.querySelector('#current-img').remove();

          let getImgWindow = document.querySelector('.img-window');
          let newImg = document.createElement('img');
          getImgWindow.appendChild(newImg);
          let calcNewImg;
          calcNewImg = getLatestOpenedImg - 1;

          if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
          }
          newImg.setAttribute('src','../images/img'+ calcNewImg +'.jpg');
          newImg.setAttribute('id', 'current-img');
          getLatestOpenedImg = calcNewImg;
             //position nexxtbtn and prev btn after images load
          newImg.addEventListener('load',() => {
            let imgWidth = newImg.width;
            let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
            let nextBtn = document.querySelector('.img-btn-next');
            nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;' ;
            let prevBtn = document.querySelector('.img-btn-prev');
            prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;' ;
          });
        });
        prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;' ;

      });
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


document.addEventListener('scroll',() => {
  const navBar = document.querySelector('.navigation');
  const scroll = window.scrollY;
  if(scroll >= window.innerHeight / 3) {
    navBar.classList.add('nav-color')
  } else {
    navBar.classList.remove('nav-color')
  }
})

