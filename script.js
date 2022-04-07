const copyContainer = document.querySelector('.copy-container');
const copy = document.querySelector('.link');
// event listerners
copy.addEventListener('click', () => copyText());

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