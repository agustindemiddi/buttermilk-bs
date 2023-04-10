const imageContainer = document.querySelector('#image-container');

const getImage = async () => {
  const random = Math.floor(Math.random() * 649) + 1;
  fetch(
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${random}.svg`
  )
    .then((res) => {
      const image = document.createElement('img');
      image.src = res.url;
      imageContainer.append(image);
    })
    .catch((error) => {
      console.log(error);
    });
};

getImage();
