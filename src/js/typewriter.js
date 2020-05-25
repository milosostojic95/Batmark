
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

    //remove item one by one
    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      typeSpeed /= 2;
    }
    // adding item one by one
    else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // when words is completed, then delete items
    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
    // changing to another word
    else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex ++;
      typeSpeed = 500;
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() =>this.type(), typeSpeed);
  }
}

export default function textWriter() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new typeWriter(txtElement, words, wait);
};
