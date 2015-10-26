$(window).scroll(function () {
  ytVideoScroll();
  console.log('heu');
});

function ytVideoScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll + 'px');

}
