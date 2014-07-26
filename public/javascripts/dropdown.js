var loc;

$(document).ready(function(){
    $(".line").hover(
        function(){
            //console.log("hey", $(".line").index(this));
            addship($(this));
        },
        function(){
            //console.log("listen", $(".line").index(this));
            removeship($(this));
        }
    );    

    $(".line").click(function(){
        console.log("pew", $(".line").index(this));
        fire($(this));
    });
    init();
    setInterval(animate,50);
});

function init(){
    $(".line").html("------------------------------------------------------------------------------------------------------");
}

function animate(){
    $(".line").each(function(){
        $(this).html(advance($(this)));
    });
}

function addship(line){
    loc = $(".line").index(line);
    console.log(loc);
    line.html(line.html().substring(1));
    line.prepend("&#187;");
}

function removeship(line){
    line.html(line.html().substring(1));
    line.prepend("-");
}

function fire(line){
    line.html(line.html().substring(0,1)+"@"+line.html().substring(2));
}

function advance(line){
    for(var i = line.html().length-1; i >= 0; i--){
        if(line.html().charAt(i) == "@"){
            if(i > 100){
                console.log("boop");
                line.html(line.html().replaceAt(i,"+"));
            }else{
                line.html(line.html().replaceAt(i,"-"));
                line.html(line.html().replaceAt(i+1, "@"));   
            }
        }
        if(line.html().charAt(i) == "X"){
            line.html(line.html().replaceAt(i,"-"));
        }
        if(line.html().charAt(i) == "x"){
            line.html(line.html().replaceAt(i,"X"));
        }
        if(line.html().charAt(i) == "+"){
            line.html(line.html().replaceAt(i,"x"));
        }
    }
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+1);
}
