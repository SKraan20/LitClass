$(document).ready(function(){
  $('.annotation').hide();
})

$('.highlight').mouseenter(function() {
  $('.annotation').show();
})

$('.highlight').mouseleave(function() {
  $('.annotation').hide();
})


$(document).ready(function(){
  $('#annotationtwo').hide();
})

$('.highlightone').mouseenter(function() {
  $('#annotationtwo').show();
})

$('.highlightone').mouseleave(function() {
  $('#annotationtwo').hide();
})
