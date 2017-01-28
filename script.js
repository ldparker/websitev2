/*global alert: false, console: false, jQuery: false */
/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true*/
/*jshint strict: false*/


(function () {
    "use strict";

$(document).ready(function() {
    
    /*$('#h1header').fadeIn(500);*/
    
    $('#h1header').delay(900).fadeIn(800);
    $('.socialsa').delay(2000).fadeIn(800);
    $('.arrow').delay(2000).fadeIn(800);
    
    $('.socialsa').hover(function() {
        $(this).addClass('hovered');
    },
    function() {
        $(this).removeClass('hovered');
    });
    
    $('.arrowpos').hover(function() {
        $(this).addClass('hovered');
    },
    function() {
        $(this).removeClass('hovered');
    });
    
    $('.arrowpos').click(function() {
        $('html , body').animate( {
            scrollTop: $('.aboutoutter').offset().top
        }, 1500);
    });
    
    $('#button1').click(function() {
        $('.library').slideToggle(100);
        $('.youtube').hide(100);
        $('.hometown').hide(100);
        
    });
    
    $('#button2').click(function() {
        $('.youtube').slideToggle(100);
        $('.library').hide(100);
        $('.hometown').hide(100);
    });
    
    $('#button3').click(function() {
        $('.hometown').slideToggle(100);
        $('.library').hide(100);
        $('.youtube').hide(100);
    });
    
    
  
});
        
}());



