jQuery("document").ready(function($){
    
    var nav = $('.navbar');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("fixar");
        } else {
            nav.removeClass("fixar");
        }
    });

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
    console.log('pg_number:',pg_number)
    $('#navbarScroll a').eq(pg_number).addClass('ativo');
    $('#navbarScrollingDropdown span').html($('#navbarScroll a').eq(pg_number).text());

    $("audio").on({
        play:function(){ // the audio is playing!
            $(".sesc-audio-player.personagem").css("background", "url('../assets/imgs/ilustracao_4.png')");
            $(".sesc-audio-player.personagem .btn-play").css("display", "none");
            $(".sesc-audio-player.personagem .btn-pause").css("display", "block");
        },
        pause:function(){ // the audio is paused!
            $(".sesc-audio-player.personagem").css("background", "url('../assets/imgs/ilustracao_3.png')");
            $(".sesc-audio-player.personagem .btn-play").css("display", "block");
            $(".sesc-audio-player.personagem .btn-pause").css("display", "none");
        },
    })
});