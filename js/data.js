const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg"
];

$(document).ready(function() {
  images.forEach(function(image) {
    const template = `<div class="imageWrapper"><img src='${image}' /></div>`;
    $(".imagesWrapper").append(template);
  });
});
