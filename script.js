let toggles = document.getElementsByClassName("toggle");
let faqfaqDiv = document.getElementsByClassName("faqfaq");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(faqfaqDiv[i].style.height) != faqfaqDiv[i].scrollHeight) {
      faqfaqDiv[i].style.height = faqfaqDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-circle-plus");
      icons[i].classList.add("fa-circle-minus");
    } else {
      faqfaqDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-circle-minus");
      icons[i].classList.add("fa-circle-plus");
    }
    for (let j = 0; j < faqfaqDiv.length; j++) {
      if (j !== i) {
        faqfaqDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-circle-minus");
        icons[j].classList.add("fa-circle-plus");
      }
    }
  });
}

var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
