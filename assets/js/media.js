// Toggle Overlay
////////////////////////////////////////////////////////////////////////////////
function closeOverlay() {
  $('.overlay').css('display', 'none');
}

function openOverlay(id) {
  $('#' + id).css('display', 'block');
}

$(document).ready( function() {
  // Header sizing for pages with overlay
  $('.content').scroll( function() {
    if ($('.content').scrollTop() > 30) {
      $("#header").addClass('small');
    } else {
      $("#header").removeClass('small');
    }
  });
});
