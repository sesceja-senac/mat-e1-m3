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

    
  
    // script pras páginas já visitadas
    switch(window.location.search){
        case '?page=1':
          localStorage.setItem('pagina1','visitada')
          break;
        case '?page=2':
          localStorage.setItem('pagina2','visitada')
          break;
        case '?page=3':
          localStorage.setItem('pagina3','visitada')
          break;
        case '?page=4':
          localStorage.setItem('pagina4','visitada')
          break;
        case '?page=5':
          localStorage.setItem('pagina5','visitada')
          break;
        case '?page=6':
          localStorage.setItem('pagina6','visitada')
          break;
        case '?page=7':
          localStorage.setItem('pagina7','visitada')
      }
      
      if(localStorage['pagina1']=='visitada'){document.querySelectorAll('.pagination li')[0].classList.add('visitada')}
      if(localStorage['pagina2']=='visitada'){document.querySelectorAll('.pagination li')[1].classList.add('visitada')}
      if(localStorage['pagina3']=='visitada'){document.querySelectorAll('.pagination li')[2].classList.add('visitada')}
      if(localStorage['pagina4']=='visitada'){document.querySelectorAll('.pagination li')[3].classList.add('visitada')}
      if(localStorage['pagina5']=='visitada'){document.querySelectorAll('.pagination li')[4].classList.add('visitada')}
      if(localStorage['pagina6']=='visitada'){document.querySelectorAll('.pagination li')[5].classList.add('visitada')}
      // if(localStorage['pagina7']=='visitada'){document.querySelectorAll('.pagination li')[6].classList.add('visitada')}

      AOS.refresh();
    
});

