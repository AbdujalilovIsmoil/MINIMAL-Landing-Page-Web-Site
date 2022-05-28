let faBars = document.querySelector(".fa-bars");
let times = document.querySelector(".fa-times");
let navbar = document.querySelector(".new__nav");
let newLink = document.querySelectorAll(".new__nav__link");

faBars.addEventListener("click",()=>{
  navbar.style.left = "0";
});
times.addEventListener("click",()=>{
  navbar.style.left = "-100%";
});

for(let i = 0; i < newLink.length; i++){
  newLink[i].addEventListener("click",()=>{
    navbar.style.left = "-100%";
  });
};