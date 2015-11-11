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
