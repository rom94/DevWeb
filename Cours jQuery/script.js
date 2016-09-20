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
    
    /*$("#p1").on({
        mouseenter: function(){
            $("#p5").hide();
        },
        mouseleave: function(){
            $("#p5").show();
        },
        click: function(){
            $("#p4").hide();
        }
    });*/


    /*$("#p1").click(function(){
        $("#p2").hide(3000, function(){
            $("#p3").hide(1000);
        });
    });*/

    /*$("#p1").click(function() {
        $("#p5").toggle();
    });*/


    /*$("#p1").click(function() {
        $("#p5").fadeTo(3000, 0.5);
    });*/

    /*$('button').click(function(){
        $('div').animate({left:'600px'}, 3000, function(){
            $('div').hide();
        });
    });*/

    /*$('button').click(function(){
        $('div').animate({
            left:'600px',
            opacity: 0.2,
            width: '+=150px',
            height: '+=150px'
        }, 5000);
    });*/

    /*$('#start').click(function(){
        $('div').animate({left:'600px'}, 3000);
        $('div').animate({opacity:0.2}, 3000);
        $('div').animate({width:'200px'}, 3000);
        $('div').animate({height:'200px'}, 3000);
    });

    $('#stop').click(function(){
        $('div').stop(true, true);
    });*/

    $('#start').click(function() {
        $('div').slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
    });


});