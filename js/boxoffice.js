const koreaTop = document.querySelector(".korea-top");
const worldTop = document.querySelector(".worldwide-top");
const worldwide = document.querySelector(".worldwide-boxoffice");
const korea = document.querySelector(".korea-boxoffice");

function koreaClick() {
  worldwide.classList.add("hide");
  worldwide.classList.remove("show");
  korea.classList.remove("hide");
}

function worldwideClick() {
  worldwide.classList.add("show");
  worldwide.classList.remove("hide");
  korea.classList.add("hide");
}

koreaTop.addEventListener("click", koreaClick);
worldTop.addEventListener("click", worldwideClick);
