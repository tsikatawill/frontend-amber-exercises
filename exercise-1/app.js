

const arrowUpBtn = document.querySelector('.arrUp');
const arrowDownBtn = document.querySelector('.arrDwn');

arrowDownBtn.addEventListener('click', () => {
  arrowDownBtn.style.display = 'none';
  arrowUpBtn.style.display = 'block';

});
arrowUpBtn.addEventListener('click', () => {
  arrowDownBtn.style.display = 'block';
  arrowUpBtn.style.display = 'none';

});
