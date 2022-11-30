this.addEventListener("DOMContentLoaded", () => {
  // ****NAVBAR START****
  function hideNavbar() {
    $("body").classList.add("active");
  }

  function showNavbar() {
    $("body").classList.remove("active");
  }

  $(".fa-bars").addEventListener("click", () => {
    $(".new__nav").classList.add("active");
    hideNavbar();
  });
  $(".fa-times").addEventListener("click", () => {
    $(".new__nav").classList.remove("active");
    showNavbar();
  });

  $$(".new__nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      $(".new__nav").classList.remove("active");
      showNavbar();
    });
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      $(".new__nav").classList.remove("active");
      showNavbar();
    }
  });

  // ****NAVBAR END****

  // ****LOADER START****
  setTimeout(() => {
    $(".loader").style.opacity = "0";
    setTimeout(() => {
      $(".loader").style.display = "none";
    }, 500);
  }, 2000);

  // ****LOADER END****

  // ****SECRET IMG START****

  function showSecretImg() {
    $(".secret").style.display = "block";
    $("body").classList.add("active");
    $(".secret").style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    `;
  }

  function hideSecretImg() {
    $(".secret").style.display = "none";
    showNavbar();
  }

  $$(".section__third_img_box_img").forEach((img, index, array) => {
    img.addEventListener("click", () => {
      showSecretImg();
      $(".secret__img").src = img.getAttribute("src");
      $(".secret__text").innerHTML = `0${1 + index}/09`;
    });
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      hideSecretImg();
    }
  });

  $(".secret").addEventListener("click", (e) => {
    if (e.target) {
      hideSecretImg();
    }
  });

  // ****SECRET IMG END****

  // ****AOS ANIMATION LIBRARY****
  AOS.init();
});
