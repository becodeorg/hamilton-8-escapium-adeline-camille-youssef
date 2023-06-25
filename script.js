function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "-responsive";
  } else {
    x.className = "topnav";
  }
}
function myFunctiona() {
  const headerGallery = document.getElementById("header-gallery");
  headerGallery.style.backgroundImage = "url(/images/gallery/slide-1.jpg)";

  const headerLeftP = document.querySelector(".headerleft___p");
  headerLeftP.innerHTML = "You<br> are locked in";

  const headerLeft = document.querySelector(".header-left");
  headerLeft.style.animation = "none";
  void headerLeft.offsetWidth;
  headerLeft.style.animation = "example 0.5s linear";

  headerGallery.style.animation = "none";
  void headerGallery.offsetWidth;
  headerGallery.style.animation = "fadeIn 1s both";
}

function myFunctionb() {
  const headerGallery = document.getElementById("header-gallery");
  headerGallery.style.backgroundImage = "url(/images/gallery/slide-4.jpg)";

  const headerLeftP = document.querySelector(".headerleft___p");
  headerLeftP.innerHTML = "Escape <br>in 60 mins?";

  const headerLeft = document.querySelector(".header-left");
  headerLeft.style.animation = "none";
  void headerLeft.offsetWidth;
  headerLeft.style.animation = "example 0.5s linear";

  headerGallery.style.animation = "none";
  void headerGallery.offsetWidth;
  headerGallery.style.animation = "fadeIn 1s both";
}

function myFunctionc() {
  const headerGallery = document.getElementById("header-gallery");
  headerGallery.style.backgroundImage = "url(/images/gallery/slide-2.jpg)";

  const headerLeftP = document.querySelector(".headerleft___p");
  headerLeftP.innerHTML = "The Clock <br>is Ticking";

  const headerLeft = document.querySelector(".header-left");
  headerLeft.style.animation = "none";
  void headerLeft.offsetWidth;
  headerLeft.style.animation = "example 0.5s linear";

  headerGallery.style.animation = "none";
  void headerGallery.offsetWidth;
  headerGallery.style.animation = "fadeIn 1s both";
}

function revealOnScroll() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

///

const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let cardIndex = 0;
const cardWidth = document.querySelector(".card").offsetWidth + 170;

prevBtn.addEventListener("click", () => {
  cardIndex = Math.max(cardIndex - 1, 0);
  slider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
});

nextBtn.addEventListener("click", () => {
  const numCards = document.querySelectorAll(".card").length;
  cardIndex = Math.min(cardIndex + 1, numCards - 1);
  slider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
});
