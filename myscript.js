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