
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
