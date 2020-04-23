$(function(){

    $(".navbar a, footer a").on("click", function(event){
        event.preventdefault();
        var hash = this.hash;

        $('body').animate({scrolltop: $(hash).offset().top} , 900 , function(){window.location.hash;})
    });
})