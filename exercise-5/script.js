
window.addEventListener('scroll', topScrollIndicator);

const scrollElement = document.getElementById('scrollIndicator');

const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function topScrollIndicator (e) {
  const percentage = ((window.scrollY) / maxHeight) * 100;

  scrollElement.style.width = percentage + '%';
};
