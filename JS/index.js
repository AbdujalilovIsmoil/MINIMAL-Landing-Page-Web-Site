// JAVASCRIPT TO THE CODES
window.addEventListener("DOMContentLoaded", () => {
  let faBars = document.querySelector(".fa-bars");
  let times = document.querySelector(".fa-times");
  let navbar = document.querySelector(".new__nav");
  let newLink = document.querySelectorAll(".new__nav__link");

  faBars.addEventListener("click", () => {
    navbar.classList.add("active");
  });
  times.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

  newLink.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      navbar.classList.remove("active");
    }
  });
});
