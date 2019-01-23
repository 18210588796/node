/* 
* @Author: Busy
* @Date:   2018-09-04 00:00:34
* @Last Modified by:   Busy
* @Last Modified time: 2019-01-22 17:57:25
*/

$(document).ready(function(){
    $('.layui-nav li').hover(function() {
        $(this).children('a').children('span').addClass('layui-nav-mored');
        $(this).children('dl').css({
            display:'block',
            opacity:1,
        });
        $('.layui-nav-bar').css({
            width: $(this).outerWidth()+'px',
            opacity:1,
            left: $(this).position().left+'px'
        });
        console.log($(this).position().left);
    }, function() {
        $(this).children('a').children('span').removeClass('layui-nav-mored');
        $(this).children('dl').css({
            display:'none',
            opacity:0,
        });
        $('.layui-nav-bar').css({
            width: 0,
            opacity:0,
            left: '20px'
        });       
    });
    var add = true;
    $('.button_nav').click(function() {
        if (add) {
            add = false;
            $('.dropdown').addClass('open');    
        } else{
            $('.dropdown').removeClass('open');
            add = true;
        };
        
        
    });
});   