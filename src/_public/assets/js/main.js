
$(document).ready(function () {

  //Close menu
  $('.c-navlinksp').click(function () {
    var parent = $(this).parent().parent();
    var grand = $(parent).find('.l-overlay');
    $('.c-input').first().trigger('click');
  })

  // Active Nav
  // $('.c-navlist li a').click(function (e) {
  //   $('.c-navlist li.is-active').removeClass('is-active');

  //   var $parent = $(this).parent();
  //   $parent.addClass('is-active');
  // });

  // Button POINT
  $('.c-point__btn').click(function () {
    var parent = $(this).parent().parent();
    var grand = parent.parent();
    grand.find('.c-img__inner').fadeOut();
    parent.find('.c-img__inner').fadeIn();

  });

  // Show Hide Des
  $('.c-btnarrow').click(function () {
    var parent = $(this).parent();
    var childArrow = $(parent).find('.c-iconarrow')[0];
    var child = $(parent).find('.c-deslink')[0];
    $(child).toggle();
    if ($(childArrow).hasClass('js-iconarrow')) {
      $(childArrow).removeClass('js-iconarrow');
    } else {
      $(childArrow).addClass('js-iconarrow');
    }
  })

  //Scroll leaf and drop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
      $('.c-drop').addClass('is-active');
      $('.c-leaftop').addClass('is-active');
      $('.c-leafright').addClass('is-active');
    } else {
      $('.c-drop').removeClass('is-active');
      $('.c-leaftop').removeClass('is-active');
      $('.c-leafright').removeClass('is-active');
    }
  });


  //Active Menu When Scroll
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('is-active');
    })
    $(this).addClass('is-active');

    var target = this.hash, 
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 10
    },'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#menu-link a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-link li a ').removeClass("is-active");
      currLink.addClass("is-active");
    }
    else {
      currLink.removeClass("is-active");
    }
  });
}

