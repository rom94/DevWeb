$(document).ready(function(){
    /*$("#p1").click(function(){
        $("#p5").hide();
    });*/
    
    /*$("#p1").mouseenter(function(){
        $("#p5").hide();
    });
    
    $("#p1").mouseleave(function(){
        $("#p5").show();
    });*/
    
    /*$("#p1").hover(function(){
        $("#p5").hide();
    },function(){
        $("#p5").show();
    });*/
    
    $("#p1").on({
        mouseenter: function(){
            $("#p5").hide();
        },
        mouseleave: function(){
            $("#p5").show();
        },
        click: function(){
            $("#p4").hide();
        }
    });
});