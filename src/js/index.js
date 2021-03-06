import 'bootstrap';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import '../scss/main.scss';

// owl carousel
(function ($) {
  $(document).ready(function () {
    var homeSlider = $('.hero-slider .owl-carousel');
    homeSlider.owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      autoplayTimeout: 3500,
      items: 1,
      autoplayHoverPause: true
    });

    var trainingCarousel = $('.reference .slider .owl-carousel');
    trainingCarousel.owlCarousel({
      items: 4,
      autoplay: false,
      smartSpeed: 1500,
      loop: true,
      margin: 10,
      autoplayHoverPause: true,
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
          items: 3,
          margin: 30,
        },
        992: {
          items: 4,
          margin: 50,
        },
        1200: {
          margin: 50,
        }
      }

    });

    var technologyCarousel = $('.technology .technology-slider .owl-carousel');
    technologyCarousel.owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      autoplayTimeout: 3000,
      margin: 30,
      autoplayHoverPause: true,
      dots: false,
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
          items: 3,
          margin: 30,
        },
        992: {
          items: 4,
          margin: 50,
        },
        1200: {
          margin: 70,
        }
      }
    });

    var owlTestemonial = $('.studies-testemonials .testemonial-slider .owl-carousel');
    owlTestemonial.owlCarousel({
      loop: false,
      margin: 10,
      animateIn: 'fadeIn',
      nav: true,
      mouseDrag: false,
      items: 1,
      navText: ["<img class='arrow-left'/>", "<img class='arrow-right'/>"],
    });


  });
}(jQuery));

//gallery popup
let galleryImages = document.querySelectorAll('.gallery-item');
// let getLatestOpenedImg;
// let windowWidth = window.innerWidth;
const body = document.body;

if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      // taking img src from css
      body.classList.add('overflow-hidden')
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue('background-image');
      let getImgUrlPos = getFullImgUrl.split('/images/');
      let setNewImgUrl = getImgUrlPos[1].replace('")', '');

      //create div element for image
      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');
      let closeBtn = document.createElement('a');
      let closeText = document.createTextNode('X');
      closeBtn.appendChild(closeText);
      container.appendChild(closeBtn);
      closeBtn.setAttribute('class', 'close-btn')


      // adding src of image to element
      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src', '../images/' + setNewImgUrl);
      newImg.setAttribute('id', 'current-img');

      // newImg.addEventListener('load', () => {
      //   // next btn
      //   let imgWidth = newImg.width;
      //   let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

      //   let nextBtn = document.createElement('a');
      //   let nextText = document.createTextNode('Next');
      //   nextBtn.appendChild(nextText);
      //   container.appendChild(nextBtn);
      //   nextBtn.setAttribute('class', 'img-btn-next');
      //   nextBtn.addEventListener('click', () => {
      //     document.querySelector('#current-img').remove();

      //     let getImgWindow = document.querySelector('.img-window');
      //     let newImg = document.createElement('img');
      //     getImgWindow.appendChild(newImg);
      //     let calcNewImg;
      //     calcNewImg = getLatestOpenedImg + 1;

      //     if (calcNewImg > galleryImages.length) {
      //       calcNewImg = 1;
      //     }
      //     newImg.setAttribute('src', '../images/img' + calcNewImg + '.jpg');
      //     newImg.setAttribute('id', 'current-img');
      //     getLatestOpenedImg = calcNewImg;
      //     //position nexxtbtn and prev btn after images load
      //     newImg.addEventListener('load', () => {
      //       let imgWidth = newImg.width;
      //       let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
      //       let nextBtn = document.querySelector('.img-btn-next');
      //       nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;';
      //       let prevBtn = document.querySelector('.img-btn-prev');
      //       prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;';
      //     });
      //   });
      //   nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;';

      //   // prev btn
      //   let prevBtn = document.createElement('a');
      //   let prevText = document.createTextNode('Prev');
      //   prevBtn.appendChild(prevText);
      //   container.appendChild(prevBtn);
      //   prevBtn.setAttribute('class', 'img-btn-prev');
      //   prevBtn.addEventListener('click', () => {
      //     document.querySelector('#current-img').remove();

      //     let getImgWindow = document.querySelector('.img-window');
      //     let newImg = document.createElement('img');
      //     getImgWindow.appendChild(newImg);
      //     let calcNewImg;
      //     calcNewImg = getLatestOpenedImg - 1;

      //     if (calcNewImg < 1) {
      //       calcNewImg = galleryImages.length;
      //     }
      //     newImg.setAttribute('src', '../images/img' + calcNewImg + '.jpg');
      //     newImg.setAttribute('id', 'current-img');
      //     getLatestOpenedImg = calcNewImg;
      //     //position nexxtbtn and prev btn after images load
      //     newImg.addEventListener('load', () => {
      //       let imgWidth = newImg.width;
      //       let caclImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
      //       let nextBtn = document.querySelector('.img-btn-next');
      //       nextBtn.style.cssText = 'right:' + caclImgToEdge + 'px;';
      //       let prevBtn = document.querySelector('.img-btn-prev');
      //       prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;';
      //     });
      //   });
      //   prevBtn.style.cssText = 'left:' + caclImgToEdge + 'px;';

      // });
      // funcstion to close modal if outside click
      newImgWindow.addEventListener('click', (e) => {
        if (e.target == newImgWindow) {
          body.classList.remove('overflow-hidden')
          newImgWindow.remove();
          closeBtn.remove();
          // document.querySelector('.img-btn-next').remove();
          // document.querySelector('.img-btn-prev').remove();
        }
      })
      closeBtn.addEventListener('click', () => {
        body.classList.remove('overflow-hidden')
        newImgWindow.remove();
        closeBtn.remove();
      })
      document.addEventListener('keydown', (e) => {
        if (e.which === 27) {
            body.classList.remove('overflow-hidden'),
            document.querySelector('.img-window').remove(),
            document.querySelector('.close-btn').remove();
        }
      })
    });
  });
}
// preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('loader-finish');
});

document.addEventListener('scroll', () => {
  const navBar = document.querySelector('.navigation');
  const scroll = window.scrollY;
  const navLink = document.querySelectorAll('.nav-item .nav-link');
  if (scroll / 2 > 250) {
    navBar.classList.add('color-grey')
  } else {
    navBar.classList.remove('color-grey')
  }
})

