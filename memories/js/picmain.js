$(document).ready(function(){ 
  if($("#imgs").width() > 750){ 
    $("#imgs").attr("width", 750); 
  } 
  if($('.xwnymmain').find('img')){ 
    $('.xwnymmain').find('img').each(function(index, element){ 
      if($(this).width() > 750){ 
        $(this).attr("width", 750); 
      } 
    }); 
  } 
}); 