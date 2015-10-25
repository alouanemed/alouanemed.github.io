$(window).scroll(function () {
  ytVideoScroll();
});

function ytVideoScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll + 'px');

}
