window.onload = function () {
    
    var canvasWidth = 900;
    var canvasHeight = 600;
    var bool = true;
    var blockSize = 30;
    var ctx;
    var delay = 100;
    var xCoord = 0;
    var yCoord = 0;
    
    init();
    
    function init() {
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
    }
    
    function refreshCanvas() {
        xCoord += 5;
        yCoord +=5;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord, yCoord, 100, 50);
        setTimeout(refreshCanvas, delay);
    }
    
    function Snake(body) {
        this.body = body;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for();
        };
    }
    
}