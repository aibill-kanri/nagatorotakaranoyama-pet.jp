// JavaScript Document

//scrolltop
$(document).ready(function() {
  var pagetop = $('#pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn().css('display','flex');
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});

//btn_sp
$(document).ready(function() {
  var pagetop = $('#btn_sp');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn().css('display','flex');
       } else {
            pagetop.fadeOut();
            }
       });
});


//faq
$(function(){
    $(".question").on("click", function() {
        $(this).next().slideToggle(); 
        $(this).toggleClass("active"); 
    });
});
