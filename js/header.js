const header = document.querySelector("header");
const navLi = document.querySelectorAll(".nav li a");

function headerColor() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    header.style.cssText =
      "background-color:#ffffff; box-shadow:0 2px 5px 0 rgba(0,0,0,0.2)";
    for (let i = 0; i < navLi.length; i++) {
      navLi[i].style.color = "#000000";
    }
  } else {
    header.style.cssText = "background-color:transparent; box-shadow:none";
    for (let i = 0; i < navLi.length; i++) {
      navLi[i].style.color = "#ffffff";
    }
  }
}

window.addEventListener("scroll", headerColor);
