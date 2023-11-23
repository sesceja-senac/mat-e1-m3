// $('.botao-fechar').click(function(){
//   $('.backdrop').fadeOut()
//   const stopVideos = () => {
//     document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
//     document.querySelectorAll('video').forEach(v => { v.pause() });
//   };
//   stopVideos();
// })
// $('.btVideo').click(function(){
//   $('.backdrop').fadeIn()
// })
$('#fechar-video').click(function(){
  $('.backdrop').fadeOut()
})
$('.btVideo').click(function(){
  $('.backdrop').fadeIn()
})