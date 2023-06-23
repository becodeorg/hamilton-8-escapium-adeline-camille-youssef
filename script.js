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
    "url(/images/gallery/gallery-2.jpg)";
}
function myFunctionb() {
  document.getElementById("header-gallery").style.backgroundImage =
    "url(/images/gallery/slide-4.jpg)";
}
function myFunctionc() {
  document.getElementById("header-gallery").style.backgroundImage =
    "url(/images/gallery/gallery-4.jpg)";
}
