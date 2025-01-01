//navbar and toggle code starts here
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
//navbar and toggle code ends here

//image slider code starts here
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

// Show the first image initially
images[currentIndex].classList.add('active');

function moveSlider() {
    // Hide the current image
    images[currentIndex].classList.remove('active');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Show the new image
    images[currentIndex].classList.add('active');
}

// Move slider every 3 seconds
setInterval(moveSlider, 3000);
//image slider code ends here




