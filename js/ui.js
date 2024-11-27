$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null){
    return null;
  }
  else {
    return decodeURI(results[1]) || 0;
  }
}

var GUI = window.GUI || (function(){
  return {
    init: function(){
      GUI.baseUI($(document));
    },
    baseUI: function($this){
      var _ = $this;
      var tabUI = _.find('.tab-base');
      
      $(window).on('load resize', function(){
        $('.content-wrap').css('height', $(window).height() - 70);
      });

      $('.control-area > a.pause').on('click', function(){
        if (!$(this).hasClass('on')) {
          $(this).addClass('on');
        } else {
          $(this).removeClass('on');
        }
      });

      $('.arrow-animation[data-arrow]').each(function(){
        var num = $(this).data('arrow');
        if ($(this).hasClass('down')) {
          for (let i=1; i<=num; i++) {
            $(this).append(`<img class="arrow d${i}" src="img/accident/img-polygon-b.png" alt="">`);
          }
        }
        if ($(this).hasClass('up')) {
          for (let i=1; i<=num; i++) {
            $(this).append(`<img class="arrow u${i}" src="img/accident/img-polygon-r.png" alt="">`);
          }
        }
      });
      $('.tab-base').each(function(){
        var target = $(this).find('li.on').find('a').attr('href');
        $(target).show();
      })
      $('.tab-base').find('a').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $(this).closest('li').addClass('on');
        $(this).closest('li').siblings().removeClass('on');
        $(target).show();
        $(target).siblings().hide();
      });
    },
  }
}());

$(function(){
  GUI.init();
})
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}