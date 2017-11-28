$(document).ready (function() {

    // Burger Menu
    new WOW().init();

    $(".burger-nav").on("click", function() {
    $(".container nav ul").toggleClass("open");
  });


    // Smooth Scroll
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 )
    })

});
