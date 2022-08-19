const koreaTitle = document.querySelector(".korea-top");
const worldwideTitle = document.querySelector(".worldwide-top");

function koreaTitleClick() {
  koreaTitle.classList.remove("hide");
  worldwideTitle.classList.remove("show");
}

function worldwideTitleClick() {
  koreaTitle.classList.add("hide");
  worldwideTitle.classList.add("show");
}

koreaTitle.addEventListener("click", koreaTitleClick);
worldwideTitle.addEventListener("click", worldwideTitleClick);
