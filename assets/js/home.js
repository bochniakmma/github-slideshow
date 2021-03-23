// In View Function
////////////////////////////////////////////////////////////////////////////////
function Utils() {
}

Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    if (fullyInView === true) {
      return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
  }
};

var Utils = new Utils();

function inView(id) {
  var isElementInView = Utils.isElementInView($(id), false);
  if (isElementInView) {
    if (!$('.header__link').hasClass('underline')) {
      $(id + '__link').addClass('underline');
    }
  } else {
    $(id + '__link').removeClass('underline');
  }
}

function animate(elem) {
  if (Utils.isElementInView(elem, true)) {
    elem.addClass('animate');
  }
}

// Trigger on Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function() {
  if ($('#courses').length || $('#coaching').length) {
    inView('#courses');
    inView('#coaching');
  }
  $('.animatable').each( function() {
    animate($(this));
  });
});

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
  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000, function() {
            // Callback after animation to change focus
            var $target = $(target);
            $target.focus();
          });
        }
      }
    });
});
