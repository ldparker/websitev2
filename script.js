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
    
    $('.socialsa').hover(function() {
        $(this).addClass('hovered');
    },
    function() {
        $(this).removeClass('hovered');
    });
    
    $('#button1').click(function() {
        $('.library').slideToggle(500);
    });
    
    $('#button2').click(function() {
        $('.youtube').slideToggle(500);
    });
    
    $('#button3').click(function() {
        $('.hometown').slideToggle(500);
    });
    
    
  
});
        
}());



