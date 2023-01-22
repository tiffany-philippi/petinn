function toggleMenu() {
  document
    .querySelector(".petinnHeader__topnav")
    .classList.toggle("responsive");
  console.log(document.querySelector(".petinnHeader__topnav"));
}
const benefits = [
  "Diminui o risco da ansiedade de separação",
  "Ambiente familiar",
  "Quintal protegido para brincar",
  "Fotos e vídeos durante a estadia para diminuir a saudade do tutor",
  "Muito carinho ao longo do dia",
];

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
