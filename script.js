// const head = document.getElementById("header");
// let lastScrolee

// header.addEventListener("scroll", opacityHeader);

// function opacityHeader() {
//   if
// }
const header = document.querySelector("header");
const sectionOne = document.querySelector(".about");

const sectionOneOptions = {
  rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);
