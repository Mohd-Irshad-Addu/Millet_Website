
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

// gallery code start here
$(document).ready(function(){

    $('.buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }
    });

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});