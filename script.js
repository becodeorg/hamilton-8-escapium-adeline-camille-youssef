function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "-responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunctiona() {
  document.getElementById("header-gallery").style.backgroundImage =
    "url(/images/gallery/slide-1.jpg)";
  document.querySelector(".headerleft___p").innerHTML = "You<br> are locked in";
  document.querySelector(".headerleft").style.animation =
    "example 2s linear";
}
function myFunctionb() {
  document.getElementById("header-gallery").style.backgroundImage =
    "url(/images/gallery/slide-4.jpg)";
  document.querySelector(".headerleft___p").innerHTML =
    "Escape <br>in 60 mins?";
  document.querySelector(".headerleft").style.animation =
    "example 2s linear";
}
function myFunctionc() {
  document.getElementById("header-gallery").style.backgroundImage =
    "url(/images/gallery/slide-2.jpg)";
  document.querySelector(".headerleft___p").innerHTML =
    "The Clock <br>is Ticking";
  document.querySelector(".headerleft").style.animation =
    "example 2s linear";
}
