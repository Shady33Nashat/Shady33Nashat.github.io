$(function (){
  $("#hamburger-icon-holder").on("click" , function() {
    $(".nav-overlay").fadeToggle(800);
    $("body").toggleClass("preventScrolling");
    $(".hamburger-icon").toggleClass("active");
  });
  $("header nav ul a").on("click", function(e) {
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    },1000);
  });
  $(".nav-overlay ul a").on("click", function(e) {
    $("body").toggleClass("preventScrolling");
    $(".hamburger-icon").toggleClass("active");
    $(".nav-overlay").fadeToggle(500);
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    },1200);
  });
  $(".scrollTop").on("click", function() {
    $("body,html").animate({
      scrollTop: 0
    },500);
  });

  $(window).scroll(function(){
    console.log($(this).scrollTop());
       if ($(this).scrollTop() > 100) {
           $('.scrollTop').fadeIn();
       } else if($(this).scrollTop() < 100) {
           $('.scrollTop').fadeOut();
       }
   });

});
