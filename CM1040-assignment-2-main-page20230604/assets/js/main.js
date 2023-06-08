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

function ImagesJumbo() {
  currentIndex = 1;
  previousIndex = 0;

  document.getElementById('nav-item-0').style.backgroundColor = '#bbdbdf';

  setInterval(() =>
  {
    
    if (currentIndex > 3)
    {
      currentIndex = 0;
      previousIndex = 3;

      document.getElementById(`data-item-${previousIndex}`).style.display = 'none';
      prevImage = document.getElementById(`nav-image-${previousIndex}`);
      prevImage.style.display = 'none';

      document.getElementById(`nav-item-${previousIndex}`).style.backgroundColor = '';


      document.getElementById(`data-item-${currentIndex}`).style.display = 'block';
      document.getElementById(`nav-item-${currentIndex}`).style.backgroundColor = '#bbdbdf';
      image = document.getElementById(`nav-image-${currentIndex}`);
      image.style.display = 'block';

      currentIndex = 1;
      previousIndex = 0;
     
    }
    else {

      document.getElementById(`data-item-${previousIndex}`).style.display = 'none';
      prevImage = document.getElementById(`nav-image-${previousIndex}`);
      prevImage.style.display = 'none';
      document.getElementById(`nav-item-${previousIndex}`).style.backgroundColor = '';
      

      document.getElementById(`data-item-${currentIndex}`).style.display = 'block';
      document.getElementById(`nav-item-${currentIndex}`).style.backgroundColor = '#bbdbdf';
      image = document.getElementById(`nav-image-${currentIndex}`);
      image.style.display = 'block';

      currentIndex += 1;
      previousIndex += 1;
    }
    console.log('calling')
  }, 5000)
 
}