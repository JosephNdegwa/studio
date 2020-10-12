$(document).ready(function() {
  $('.frame').hover(function(){
  $('.caption',this).slideToggle('slow');
}, function(){
  $('.caption',this).slideToggle('slow');
  });
});

$(document).ready(function(){
  $("form#formed").submit(function(event){
    var name = $("input#named").val();
    var email = $("input#mail").val();
    var message = $("textarea#message").val();
    if ($("input#named").val() && $("input#mail").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});
