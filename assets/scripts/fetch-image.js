const magicButton = document.querySelector('#magic-button');
const productContainer = document.querySelector('#product-container');

const getImage = async () => {
  const random = Math.floor(Math.random() * 649) + 1;
  fetch(
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${random}.svg`
  )
    .then((res) => {
      const fetchedImage = document.createElement('img');
      fetchedImage.src = res.url;
      fetchedImage.classList = 'fetched-image';

      const previousImage = productContainer.querySelector('.fetched-image');
      if (previousImage) {
        previousImage.remove();
      }

      productContainer.append(fetchedImage);
    })
    .catch((error) => {
      console.log(error);
    });
};

magicButton.addEventListener('click', getImage);
