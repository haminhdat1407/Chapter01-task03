
$(document).ready(function () {

  //Close menu
  $('.c-navlinksp').click(function () {
    var parent = $(this).parent().parent();
    var grand = $(parent).find('.l-overlay');
    $('.c-input').first().trigger('click');
  })


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

  $(document).on("scroll", onScroll);
  
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
  
  //Active menu when scroll
//   $(window).scroll(function () {
    
//     var scrollDistance = $(window).scrollTop() + 500;
//     $('.c-sectionpage').each(function (i) {
//         if ($(this).position().top <= scrollDistance) {
//             $('.c-navlinka').removeClass('is-active');
//             $('.c-navlinka').eq(i).addClass('is-active');
//         }
//     });
// }).scroll();

//active menu when click
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
    'scrollTop': $target.offset().top
  },'swing', function () {
    window.location.hash = target;
    $(document).on("scroll", onScroll);
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop()+ 400;
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

});


