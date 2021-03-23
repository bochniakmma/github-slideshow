// Header Function
////////////////////////////////////////////////////////////////////////////////
function sizeHeader() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $("#header").addClass('small');
  } else {
    $("#header").removeClass('small');
  }
}

// Trigger on Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function() {
  sizeHeader();
});
