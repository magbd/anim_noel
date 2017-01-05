$(document).ready(function(){

  $('.titre').find('.clic').addClass('animClic');

  $('.titre').on('click', function(){
    $(this).closest('.container').find('.step1').removeClass('masque');
    $(this).closest('.container').find('.step1 > .clic').addClass('animClic');
  });

  $('.step1').on('click', function(){
    $(this).closest('.container').find('.step2').removeClass('masque');
    $(this).closest('.container').find('.step2 > .clic').addClass('animClic');
  });

  $('.step2').on('click', function(){
    $(this).closest('.container').find('.step3').removeClass('masque');
    $(this).closest('.container').find('.step3 > .clic').addClass('animClic');
  });

  $('.step3').on('click', function(){
    $('body').css({'background-image' : 'url("img/698.jpg")', 'background-size' : '50%', 'background-repeat' : 'no-repeat', 'background-position' : 'center'});
    $('.event').addClass('masque');
    $('.titre').addClass('masque');
    $('audio').attr({src:"audio/We_Wish_You_a_Merry_Christmas.mp3",autoplay:"", controls:"", loop:""});
  });

});
