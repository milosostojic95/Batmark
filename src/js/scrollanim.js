export default function scrollApper() {

  const textAnim = document.querySelector('.left-part-why');
  const mobileAnim = document.querySelector('.right-part-why');
  const slideAnim = document.querySelector('.slides');
  const whyPosition = textAnim.getBoundingClientRect().top;
  const servicePosition = slideAnim.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.4;

  if(whyPosition < screenPosition) {
    textAnim.style.opacity = '1';
    textAnim.style.transform = 'translateY(0)';
    mobileAnim.style.opacity = '1';
    mobileAnim.style.transform = 'translateY(0)';
  }
 if(servicePosition < screenPosition) {
    slideAnim.style.opacity = '1';
    slideAnim.style.transform = 'translateY(0)';
  }
};
