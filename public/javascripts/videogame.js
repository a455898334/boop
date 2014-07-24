var cvs, ctx;
function init() {
    cvs = $(".game")[0];
    ctx = cvs.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false);
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
}


$(document).ready(function(){
    init();
    // test code
    ctx.rect(0,0,20,20);
    ctx.stroke();
});
