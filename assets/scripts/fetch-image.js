const imageContainer = document.querySelector('#image-container');

const getImage = async () => {
  const random = Math.floor(Math.random() * 649) + 1;
  fetch(
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${random}.svg`
  )
    .then((res) => {
      imageContainer.style.backgroundImage = `url(${res.url})`;
    })
    .catch((error) => {
      console.log(error);
    });
};

getImage();
