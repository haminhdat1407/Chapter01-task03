
$(document).ready(function () {

  // Active Nav
  $('.c-navlist li a').click(function(e) {
    $('.c-navlist li.is-active').removeClass('is-active');

    var $parent = $(this).parent();
    $parent.addClass('is-active');
});


  $('.c-point__btn').click(function () {

       // Button POINT
    var parent = $(this).parent().parent();
    var grand = parent.parent();
    grand.find('.c-img__inner').fadeOut();
    parent.find('.c-img__inner').fadeIn();

  });

       // Show Hide Des
  $('.c-btnarrow').click(function () {
    var parent = $(this).parent();
    var childArrow=$(parent).find('.c-iconarrow')[0];
    var child = $(parent).find('.c-deslink')[0];
    $(child).toggle();
    if ($(childArrow).hasClass('js-iconarrow')) {
      $(childArrow).removeClass('js-iconarrow');
    } else {
      $(childArrow).addClass('js-iconarrow');
    }
  })
  
  //Scroll leaf and drop
  $(window).scroll(function() {
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


});