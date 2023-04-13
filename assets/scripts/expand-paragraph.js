const text = document.querySelector('.description-text');
const readMore = document.querySelector('.read-more');
const readLess = document.querySelector('.read-less');

readMore.addEventListener('click', function (e) {
  e.preventDefault();
  text.style.webkitLineClamp = 'unset';
  readMore.style.display = 'none';
  readLess.style.display = 'block';
});

readLess.addEventListener('click', function (e) {
  e.preventDefault();
  text.style.webkitLineClamp = '';
  readLess.style.display = 'none';
  readMore.style.display = 'block';
});
