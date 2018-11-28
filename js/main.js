$(document).ready(function(){
  $('.annotation').hide();
})

$('.highlight').mouseenter(function() {
  $('.annotation').show();
})

$('.highlight').mouseleave(function() {
  $('.annotation').hide();
})
