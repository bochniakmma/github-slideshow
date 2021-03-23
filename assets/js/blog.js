// Use URL Hash to filter category
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  pageSetup();
  $('.blog__category').click(function(e) {
    e.preventDefault();
    $(this).parent().prepend(this);
    const url = $(this).attr('href');
    history.pushState('', '', url);
    pageSetup();
  });
});

$(window).on('hashchange', function(e) {
  e.preventDefault();
  pageSetup();
});

function getParam() {
  var param = document.location.href.split('#_')[1];
  return param;
}

function pageSetup() {
  $('.blog__category').removeClass('filled');
  $('.blog__feature').css('display', 'grid');
  $('.blog__thumbnail').css('display', 'block');
  var param = getParam();
  if (param != '' && param != null && param != undefined) {
    $('.blog__feature').css('display', 'none');
    $('.blog__category').each( function() {
      if ($(this).attr('id') == param) {
        $(this).addClass('filled');
      }
    });
    $('.blog__thumbnail').each( function(index) {
      if (!$(this).hasClass(param)) {
        $(this).css('display', 'none');
      }
    });
  } else {
    $('#all').addClass('filled');
    $('.blog__thumbnail').first().css('display','none');
  }
}
