const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav")

hamburger.addEventListener("click", function(){
  navLinks.classList.toggle("active")
  // navLinks.style.backgroundColor = "red"
  
});
