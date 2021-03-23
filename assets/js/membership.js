// document ready
////////////////////////////////////////////////////////////////////////////////
$(document).ready( function() {
  // run slick
  $('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
