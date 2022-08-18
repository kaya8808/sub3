$(document).ready(function(){
    var b=0;
    $('.arrow_right').click(function(){
        b++;
        if(b>3){
            b=3;
        }
        $('.img_wrap').stop().animate({
            left:-409*b
        },
        );
    });

    $('.arrow_left').click(function(){
        b--;
        if(b<0){
            b=-1;
        }
        $('.img_wrap').stop().animate({
            left:-409*b
        });
    });
});