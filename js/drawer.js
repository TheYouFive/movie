const drawerBox = document.querySelector(".drawer-box");
const drawer = document.querySelector(".drawer");
const drawerBar = document.querySelectorAll(".drawer-bar");
const drawerContent = document.querySelector(".drawer-content");
const drawerNav = document.querySelectorAll(".drawer-nav li");

function scrollDrawer() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    drawerBox.classList.add("change");
    for (let i = 0; i < drawerBar.length; i++) {
      drawerBar[i].classList.add("change");
    }
  } else {
    drawerBox.classList.remove("change");
    for (let i = 0; i < drawerBar.length; i++) {
      drawerBar[i].classList.remove("change");
    }
  }
}

function drawerClick() {
  drawer.classList.toggle("show");
  drawerContent.classList.toggle("show");
}

function liClick() {
  drawer.classList.remove("show");
  drawerContent.classList.remove("show");
}
for (let i = 0; i < drawerNav.length; i++) {
  drawerNav[i].addEventListener("click", liClick);
}

drawer.addEventListener("click", drawerClick);
window.addEventListener("scroll", scrollDrawer);
