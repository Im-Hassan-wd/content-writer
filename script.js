const copyContainer = document.querySelector('.copy-container');
const copy = document.querySelector('.link');
const nav = document.querySelector('nav ul');
const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo')

// event listerners
copy.addEventListener('click', () => copyText());
copyContainer.addEventListener('transitionend', removeContainer);
hamburger.addEventListener('click', toggleNav)

// functions 
function copyText(){
  const el = document.createElement('textarea');
  el.value = origin;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  // popup animation
  copyContainer.classList.add('active');
}

function removeContainer(){
  copyContainer.classList.remove('active');
}

function toggleNav() {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
  logo.classList.toggle('active');
}