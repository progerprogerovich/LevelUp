$(document).ready(function() {

	$(document).ready(function(){

        $('.buttonUp').click(function(){
             var currentImage = $('.slide.curry');
             var currentImageIndex = $('.slide.curry').index();
             var buttonUpImageIndex = currentImageIndex + 1;
             var buttonUpImage = $('.slide').eq(buttonUpImageIndex);
             currentImage.fadeOut(500);
             currentImage.removeClass('curry');
    
        if (buttonUpImageIndex == ($('.slide:last').index()+1)) {
            $('.slide').eq(0).fadeIn(500);
            $('.slide').eq(0).addClass('curry');
        }  
        else{
            buttonUpImage.fadeIn(500);
            buttonUpImage.addClass('curry');
        }   
      });
       
      $('.buttonBack').click(function(){
        var currentImage = $('.slide.curry');
        var currentImageIndex = $('.slide.curry').index();
        var buttonBackImageIndex = currentImageIndex - 1;
        var buttonBackImage = $('.slide').eq(buttonBackImageIndex);
        currentImage.fadeOut(500);
        currentImage.removeClass('curry');
    
        buttonBackImage.fadeIn(500);
        buttonBackImage.addClass('curry');
        });
        
        });
    });
