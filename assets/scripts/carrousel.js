const main = document.querySelector('main');
const groups = main.querySelectorAll('.row');

for (let i = 1; i < groups.length; i++) {
  groups[0].style.display = 'flex';
  groups[i].style.display = 'none';
}

const getCurrentGroup = () => {
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].style.display === 'flex') {
      return groups[i];
    }
  }
};

const nextBtns = main.querySelectorAll('.next-btn');
const prevBtns = main.querySelectorAll('.prev-btn');

for (let i = 0; i < nextBtns.length; i++) {
  nextBtns[i].addEventListener('click', nextImg);
}

for (let i = 0; i < prevBtns.length; i++) {
  prevBtns[i].addEventListener('click', prevImg);
}

function nextImg(event) {
  event.preventDefault();

  const currentGroup = getCurrentGroup();
  currentGroup.style.display = 'none';
  currentGroup.nextElementSibling.style.display = 'flex';
}

function prevImg(event) {
  event.preventDefault();

  const currentGroup = getCurrentGroup();
  currentGroup.style.display = 'none';
  currentGroup.previousElementSibling.style.display = 'flex';
}
