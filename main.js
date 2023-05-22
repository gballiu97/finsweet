// function func1() {
//   $(".faq-questions-first-flex").click(function () {
//     $(".jtest").toggle(3000);
//   });
// }

// $(document).ready(function () {
//   $(".faq-questions-first-flex").on("click", function () {
//     $(".jtest").toggle(1500);
//   });

//   $(".faq-questions-flex").on("click", function () {
//     $(".faq-questions-flex").after("This is a test", "1234");
//   });
// });

$(document).ready(function () {
  $(".accordion-header").on("click", function () {
    $(this).next().slideToggle();
    // $(".jtest").slideToggle();

    $(this).find(".faq-svg").toggleClass("rotate-45");
  });
});

$(document).ready(function () {
  $(".testimonials-text-box_speech_wrap").slick({
    prevArrow: $(".svg-arrow-left"),
    nextArrow: $(".svg-arrow-right"),
  });
});

// $(document).ready(function () {
//   $(".our-team").slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//   });
// });

// $(document).ready(function () {
//   $(".portofolio-templates").isotope({
//     itemSelector: ".isotope",
//     layoutMode: "fitRows",
//   });
// });
