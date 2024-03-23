const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const dropContent = document.querySelectorAll(".drop-content .sub-list");
const dropBtn = document.querySelector(".drop-btn");

function openMenu() {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
}

function optionOpen() {
  dropContent.classList.toggle("on");
}

dropContent.addEventListener("click", optionOpen);
