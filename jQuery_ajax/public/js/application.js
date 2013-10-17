$(document).ready(function(){
  $("#color_me").click(function(event){
    event.preventDefault;

    var user_input = $(this)serialize();
    console.log(user_input);

    $.post("/colors", user_input, function(response))
      console.log(response);
    $("#get_color").html(response);
  })
});
