$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

 


});


//preloader
function preloadAnimation() {
  setTimeout(showPage, 5000);
}
function showPage() {
  document.querySelectorAll(".preloader-gif")[0].style.display = "none";
//document.querySelectorAll(".preloader")[0].style.display = "none";
  document.getElementById("wrapper").style.display = "block";
}

//slick slider
$(document).ready(function(){
  $('.project-container').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });
});

// Menu
$('.menu-link').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('close');
  $("nav").toggleClass('show');
  $("#tasha, #projects, #contact, footer").toggleClass("menu-open");
});
