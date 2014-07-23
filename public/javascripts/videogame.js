$(document).ready(function(){
    var cvs = $(".game")[0];
    var ctx = cvs.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false);
    
    function resizeCanvas() {
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
	drawStuff(); 
    }
    resizeCanvas();
    
    function drawStuff() {
	ctx.rect(20,20,20,20);
	ctx.stroke();
    }
}
);
