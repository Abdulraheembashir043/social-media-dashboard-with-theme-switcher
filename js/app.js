const button = document.querySelector('#outer');
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');



button.addEventListener('click', (e) => {
  // console.log(e);

  body.classList.toggle('dark');
  wrapper.classList.toggle('dark');

})