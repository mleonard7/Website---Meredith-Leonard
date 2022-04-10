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

$(document).ready(function(){
    $("form").submit(function(){
      event.preventDefault();
      var toSubmit = {};
      toSubmit.email = $("#email").val();
      toSubmit.name = $("#name").val();
      toSubmit.message = $("#message").val();
      $.ajaxSetup({
        headers: {
          'Accept': "application/json",
        }
      });
      
      var form_submit = $.post("https://formspree.io/f/moqrkjjj", toSubmit);
      
      form_submit.done(function(){
        $("#form-success").modal('show');
        $("#email").val("");
        $("#name").val("");
        $("#message").val("");
      });
      
      form_submit.fail(function(){
        $("#form-error").modal('show');
      });
      
      
    })
  });