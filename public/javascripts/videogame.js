var cvs, ctx;
function init() {
    cvs = $(".game")[0];
    ctx = cvs.getContext("2d");
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, false);
}

function resizeCanvas(){
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
}

$(document).ready(function(){
    init();
    // test code
    ctx.rect(0,0,100,100);
    ctx.stroke();
});
