$(document).ready(function() {
    
    $('.up-arrow').hide();
    
    
    var screenWidth = $(window).width();
    var flag = 0;
    
    var callresizefunc = function() {
        screenWidth = $(window).width();
        
        if(screenWidth < 767) {
            if(flag === 0) {
                $('#footer-nav .row ul').css('display', 'none');
                $('#footer-nav .list-of-links').find('.up-arrow').hide();
                $('#footer-nav .list-of-links').find('.down-arrow').show();
                
            }
            
            else {
                return false;
            }
        }
        
        else {
            flag = 0;
            $('#footer-nav .list-of-links').addClass('bgColorGrey');
            $('#footer-nav .list-of-links').removeClass('bgColorWhite');
            
            $('#footer-nav .row ul').css('display', 'block');
        }
        
    }
    
    
        $('h3').on("click", function() {
            flag = 1;
            screenWidth = $(window).width();
            
            if(screenWidth < 767) {

            var self = this;
                $('#footer-nav .list-of-links').removeClass('bgColorGrey');
            $(self).next().slideToggle(200, function() {
                
                $(self).parent().toggleClass("bgColorWhite");
                $(self).children().find('.down-arrow, .up-arrow').toggle();
            });
                
            }
            else {
                return false;
            }
        });
    
    $(window).on('resize', function() {
       
        callresizefunc();
    });
});