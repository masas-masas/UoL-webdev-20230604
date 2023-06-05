const subtitles = {
  "observation-wheel": "Best observatory wheels",
  "observatory-wheel": "Observe with observatory wheel",
  "spinning-carousel": "Spinning carousels in Amusiland",
  "yoyo-carousel": "Try out our new YoYo carousel",
};
function changeImage(imageName) {
  const imageRef = document.getElementById("jumbotron-image");
  const subTitleRef = document.getElementById("jumbotron-subtitle");

  if (imageRef) {
    imageRef.src = "assets/images/main/jumbotron/" + `${imageName}` + ".png";
  }

  if (subTitleRef && subtitles[imageName]) {
    subTitleRef.innerHTML = subtitles[imageName];
  }
}
