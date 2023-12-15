jQuery(function ($) {


     //--------------------------------------- Counter Code
     $(".counter-box span").counterUp({
          delay: 10,
          time: 3000
     });
     // ----------------------------------------Faq
     $('.faq-ques1 a').click(function (e) {
          e.preventDefault();
     });
     $('.faq-ques2 a').click(function (e) {
          e.preventDefault();
     });
     $('.faq-ques3 a').click(function (e) {
          e.preventDefault();
     });
     $('.faq-ques4 a').click(function (e) {
          e.preventDefault();
     });
     $('.faq-ques5 a').click(function (e) {
          e.preventDefault();
     });
     $(".faq-ques1").click(function () {
          $(".faq-ans1").slideToggle('slow');
     });
     $(".faq-ques2").click(function () {
          $(".faq-ans2").slideToggle('slow');
     });
     $(".faq-ques3").click(function () {
          $(".faq-ans3").slideToggle('slow');
     });
     $(".faq-ques4").click(function () {
          $(".faq-ans4").slideToggle('slow');
     });
     $(".faq-ques5").click(function () {
          $(".faq-ans5").slideToggle('slow');
     });

     // --------------------------Slick Sloder

     $(".slider-main").slick({
          dots: true,
          autoplay: true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 992,
                    settings:
                     {
                         arrows: false,
                         slidesToShow: 1,
                     }
               }
          ]
     });
     //-------------------------------------- tab code
     $('#department ul li').on('click', function (e) {
          e.preventDefault();
          var dataNo = $(this).attr('data-no');
          var datanoClosests = $(this).closest('#department');
          if (datanoClosests.length == 1) {
               var dataFind = $(datanoClosests).find('.' + dataNo);
               if (dataFind) {
                    $(this).addClass('tab-active');
                    $(this).siblings().removeClass('tab-active');
                    $(dataFind).siblings().css('display', 'none');
                    $(dataFind).fadeIn();
               }
          }
     });

     // --------------------------- video
     $(".video-link").click(function (e) {
          e.preventDefault();
          $(".video-play").fadeIn();
          $(".video-play svg.fa-xmark").click(function () {
               $(".video-play").fadeOut();
          });
     });


     // ------------------------Navbar Code
     $("button.close-btn").click(function () {
          $("#open").css({
               "transform": "translateX(-50px)",
               "visibility": "visible",
          })
          $("button.close-btn").css({ "display": "none" });
          $("nav .menu-btn svg").css({ "display": "block" });
     });
     $('nav .menu-btn svg').click(function () {
          $("#open").css({ "visibility": "hidden" });
          $("nav .menu-btn svg").css({ "display": "none" })
          $("button.close-btn").css({ "display": "block" });
     });

     const galelryLightbox = GLightbox({
          selector: '.galelry-lightbox'
        });


});

// var close = document.getElementsByClassName('close-btn');
// var open = document.getElementById('open');
//      close.onclick = function(){
//           if (open.style.visibility == "none") {

//                open.style.visibility = "block";
//       }
//       else{
//        open.style.visibility ="none";
//       }
//      }


