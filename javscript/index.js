const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav");
const mainSection = document.getElementById("main-section");

//toggle button setting
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  // navLinks.style.backgroundColor = "red"
  if (navLinks.classList.contains("active")) {
    mainSection.classList.add('shifted'); // Adjust this value based on navbar height
  } else {
    mainSection.classList.remove('shifted') // Reset the margin when navbar is hidden
  }
});

//

