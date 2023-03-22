$(document).ready(function() {
    $(".navbar-toggle").on("click", function() {
      $(this).toggleClass("active");
      $(".navbar-collapse").toggleClass("active");
    });
  });
  