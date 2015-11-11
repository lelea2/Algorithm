/**
 * Created by LeonZhang on 11/2/15.
 */
$(function(){
    $(window).resize();
});

$(window).resize(function(){
    $(".centerBox").css({
        position: "absolute",
        left: ($(window).width() - $(".centerBox").outerWidth())/2,
        top: ($(window).height() - $(".centerBox").outerHeight())/2
    });
});