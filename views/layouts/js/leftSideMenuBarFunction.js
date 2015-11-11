/**
 * Created by LeonZhang on 11/1/15.
 */
$(document).ready(function(){
    var n = 1;
    $("#flash").click(function(){
        $(".o_hFunction").slideToggle("fast");
            n = n * -1;
            if (n == -1){
                $(".rightSide").css("width","100%")

            }
            if (n == 1){
                $(".rightSide").css("width","85%")

            }
    });

});
