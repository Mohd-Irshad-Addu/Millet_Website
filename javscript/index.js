const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById('nav-links')

hamburger.addEventListener("click", function(){
  navLinks.classList.toggle("active")
  // navLinks.style.backgroundColor = "red"
  
});
