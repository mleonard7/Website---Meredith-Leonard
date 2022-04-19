$(document).ready(function (){
    $("#readmore-nearpod").click(function() {
    $("#nearpod"). fadeIn();
    $("#readmore-nearpod"). fadeOut();
    });
    $("#readless-nearpod").click(function() {
    $("#nearpod"). fadeOut();
    $("#readmore-nearpod"). fadeIn();
    });

    $("#readmore-explaineverything").click(function() {
    $("#explaineverything"). fadeIn();
    $("#readmore-explaineverything"). fadeOut();
    });
    $("#readless-explaineverything").click(function() {
    $("#explaineverything"). fadeOut();
    $("#readmore-explaineverything"). fadeIn();
    });

    $("#readmore-generationgenius").click(function() {
    $("#generationgenius"). fadeIn();
    $("#readmore-generationgenius"). fadeOut();
    });
    $("#readless-generationgenius").click(function() {
    $("#generationgenius"). fadeOut();
    $("#readmore-generationgenius"). fadeIn();
    });        

    $("#readmore-loom").click(function() {
    $("#loom"). fadeIn();
    $("#readmore-loom"). fadeOut();
    });
    $("#readless-loom").click(function() {
    $("#loom"). fadeOut();
    $("#readmore-loom"). fadeIn();
    });

});

$(document).ready (function(){
  $("form") .submit(function(){
    event.preventDefault();
    if($("#email" ).val().length===0){
      alert ("Email is required!");
      return;
    }
     if($("#name").val().length===0){
      alert ("Name is required!");
      return;
    }
     if($("#message").val().length===0){
      alert ("Message is required!");
      return;
      }
    var toSubmit = {};
    toSubmit.email = $("#email").val();
    toSubmit.name = $("#name").val();
    toSubmit.message = $("#message").val();
    
    $.ajaxSetup({
      headers: {
        'Accept': "application/json", 
      }
    });
    
    var form_submit = $.post("https://formspree.io/f/xeqnrkeq", toSubmit);
    
    form_submit.done(function (){
      alert("Your email has been sent!");
      $("#email").val("");
      $("#name").val("");
      $("#message").val("");
    });
    
    form_submit.fail(function(){
      alert("Error! Your email was not sent!")
    });
    
    });
  });