var carouselDepositions = document.querySelector(".carousel__depositions");
var flktyDepositions = new Flickity(carouselDepositions, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carouselDepositions.querySelectorAll(".depositionsGroup__photo img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flktyDepositions.on("scroll", function () {
  flktyDepositions.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flktyDepositions.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});
