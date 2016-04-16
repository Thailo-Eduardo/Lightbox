  $('.galeria img').click(function(){

      $('.fundo').animate({'opacity':'0.60'}, 500, 'linear');
      $('.fundo, .lb').css('display', 'block');

      var big = $(this).attr('src');

      $('.lb img').attr('src', big);
      $('.lb img').animate({'opacity':'1.00'}, 1500, 'linear');
  });

  $('.close').click(function(){
    $('.fundo, .lb').css('display', 'none');
    $('.lb img').css('opacity','0');
  });
