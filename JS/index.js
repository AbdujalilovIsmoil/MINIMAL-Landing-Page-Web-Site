// JAVASCRIPT TO THE CODES
window.addEventListener("DOMContentLoaded", () => {
  let faBars = document.querySelector(".fa-bars");
  let times = document.querySelector(".fa-times");
  let navbar = document.querySelector(".new__nav");
  let newLink = document.querySelectorAll(".new__nav__link");
  let body = document.querySelector("body");

  function hideNavbar() {
    body.classList.add("active");
  }

  function showNavbar() {
    body.classList.remove("active");
  }

  faBars.addEventListener("click", () => {
    navbar.classList.add("active");
    hideNavbar();
  });
  times.addEventListener("click", () => {
    navbar.classList.remove("active");
    showNavbar();
  });

  newLink.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      showNavbar();
    });
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      navbar.classList.remove("active");
      showNavbar();
    }
  });

  let loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  let secret = document.querySelector(".secret");
  let secretImages = document.querySelector(".secret__img");
  let images = document.querySelectorAll(".section__third_img_box_img");
  let secretText = document.querySelector(".secret__text");

  function showSecretImg() {
    secret.style.display = "block";
    body.classList.add("active");
    secret.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    `;
  }

  function hideSecretImg() {
    secret.style.display = "none";
    showNavbar();
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      showSecretImg();
      secretImages.src = img.getAttribute("src");
      secretText.innerHTML = `0/${1 + index}`;
    });
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      hideSecretImg();
    }
  });

  secret.addEventListener("click", (e) => {
    let target = e.target;
    if (target == secret) {
      hideSecretImg();
    }
  });
});
