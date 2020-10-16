const container = document.querySelector('.container');
const plusBtn = document.getElementById('plus');

plusBtn.addEventListener('click', () => {
  container.classList.toggle('expand');
  container.classList.toggle('collapse');
});
