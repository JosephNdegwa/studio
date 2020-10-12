$(document).ready(function() {
  $('.frame').hover(function(){
    $('.caption',this).slideToggle('slow');
  }, function() {
    $('.caption',this).slideToggle('slow');
  });
});