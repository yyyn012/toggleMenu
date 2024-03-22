const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const sideMenu = document.querySelectorAll(".side-menu > li");
const openBtn = document.querySelector(".open-btn");

function openMenu() {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
}

// function openSideMenu() {

// }
