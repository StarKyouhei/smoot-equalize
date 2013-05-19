/*====
 *
 * jQuery Scroll equalize Plugin
 * 
 * License: MIT
 * Update: 2013/5/19
 * Version: 1.0
 * Author: Kyouhei
 *
====================================*/
//'use strict'
jQuery(function($) {  
    $.fn.smoothEqualize = function(args){
        var $wrap   = $('html,body'),
            $target = $(this),
            level;
        (typeof args === 'number') ? level = args : level = 6;
        $target.each(function(){
            $(this).on('click',function(e){
                if($target.filter(':animated').length) return;
                e.preventDefault();
                var $mine = $(this),
                    myref = $mine.attr('href');
                switch (myref){
                    case "#":
                        var distance  = $mine.offset().top,
                            duration  = Math.floor(distance/Math.floor(distance/Math.floor(distance/level)));
                        $wrap.animate({scrollTop:0},duration);
                        break;
                    default :
                        var distance = $(myref).offset().top;
                            duration = Math.floor(distance/Math.floor(distance/Math.floor(distance/level)));
                        $wrap.animate({scrollTop:distance},duration);
                        break;
                }
            });
        });
    }   
});
