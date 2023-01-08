"use strict";

const header = document.querySelector("header");
const navbar = document.querySelector("nav");

const subNavDrop = document.querySelector(".subnav .dropdown");
const subDropBtn = document.querySelector(".subnav .dropbtn");
const subNavContent = document.querySelector(".subnav .dropdown-content");

const landingRoadmapBtn = document.querySelector(".button_roadmap");

// Sticky Navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > header.offsetHeight + 50) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

// Subnavigation menu
subDropBtn.addEventListener("click", function () {
  subNavContent.classList.toggle("show");
});

landingRoadmapBtn.addEventListener("click", function () {
  subNavContent.classList.toggle("show");
});
