
const navBar = document.querySelector('.navbar-nav');

export default menuTrigger => {
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
};
