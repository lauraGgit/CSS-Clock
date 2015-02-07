$(document).ready(function(){
    $('.clock-container').append($('<div/>').addClass('circle'));
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours >= 12){
        hours -= 12
    }
    if (hours === 0) {
        hours = 12;
    }
    var hAngle = (360/12)*hours+(30/60)*minutes;
    var htransform = 'rotate('+hAngle+'deg)';
    
    $('.circle').append($('<div/>').addClass('hour-hand').css({
          'transform-origin': '0% 100%',
          'transform': htransform
        }));
    
    var mAngle = (360/60)*minutes;
    var mtransform = 'rotate('+mAngle+'deg)';
    
    $('.circle').append($('<div/>').addClass('minute-hand').css({
          'transform-origin': '0% 100%',
          'transform': mtransform
        }));
    
    var sAngle = (360/60)*seconds;
    var stransform = 'rotate('+sAngle+'deg)';
    
    $('.circle').append($('<div/>').addClass('second-hand').css({
          'transform-origin': '0% 100%',
          'transform': stransform
        }));
    
    //$('.clock-container').after($('<div/>').addClass('bug').text(hours+":"+minutes+"   mAngle:"+mAngle + ""));
    
    setInterval(function(){
        sAngle +=6;
        newSec = 'rotate('+sAngle+'deg)';
        $('.second-hand').css('transform', newSec);
        if (sAngle === 360){
        mAngle += 6;
        newMin = 'rotate('+mAngle+'deg)';
        $('.minute-hand').css('transform', newMin);
        hAngle +=.5;
        newHr = 'rotate('+hAngle+'deg)';
        $('.hour-hand').css('transform', newHr);
        sAngle = 0;
        //$('.bug').text(mAngle+ " "+hAngle);
        }
        //$('.bug').text(sAngle);
        },1000);
   
});
    


