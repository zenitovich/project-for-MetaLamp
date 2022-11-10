const switchBtn = document.getElementById('switchBtn')
switchBtn.onclick = function () {
  switchBtn.classList.toggle('.switch-on')
}



$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
      $(this).trigger('on.switch');
    } else {
      $(this).trigger('off.switch');
    }
  });