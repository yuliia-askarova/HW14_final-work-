// Burger 

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});