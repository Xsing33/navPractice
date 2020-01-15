const header = document.querySelector("header");

header.addEventListener("scroll", opacityHeader);

function opacityHeader() {
  header.onscroll.style.opacity = 1;
}
