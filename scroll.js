$("a[href='#top']").click(function(){
    $("html,body").animate({scrollTop:0},2000);
    return false;
  })

  function blink_text(){
    $(".blink").fadeOut(500);
    $(".blink").fadeIn(500);
}
setInterval(blink_text,1000)