var loc, score;

$(document).ready(function(){
    $(".text").one("click", function(){
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
            fire($(this));
        });
        $("a").click(function(){
            $(".text").html($(this).html().slice(0,-1) + "&#8628;");
        });
        init();
        setInterval(animate,50);
    });
});

function init(){
    $(".line").html("------------------------------------------------------------------------------------------------------");
    score = 5;
    $(".score").html(score.toString());
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
    if(score > 0){
        $(".sc").css('color', 'black');
        score -= 1;
        $(".score").html(score.toString());
        line.html(line.html().substring(0,1)+"@"+line.html().substring(2));
    }else{
        $(".sc").css('color', 'red');
    }
}

function advance(line){
    //spawn asteroids
    if(Math.random() > 0.995){
        line.html(line.html().replaceAt(101,"0"));
    }
    //advance asteroids
    for(var i = 0; i < line.html().length; i++){
        if(line.html().charAt(i) == "0"){
            if(i == 0){
                alert("Game over! Score: " + score.toString());
                init();
            }else if(line.html().charAt(i-1) == "@"){
                line.html(line.html().replaceAt(i, "-"));   
                line.html(line.html().replaceAt(i-1,"+"));
                score += 2;
                $(".score").html(score.toString());
            }else{
                line.html(line.html().replaceAt(i-1,"0"));    
                line.html(line.html().replaceAt(i, "-"));   
            }
        }
    }
    //advance bullets
    for(var i = line.html().length-1; i >= 0; i--){
        //console.log("woop");
        if(line.html().charAt(i) == "@"){
            if(i > 100){
                line.html(line.html().replaceAt(i,"+"));
            }else if(line.html().charAt(i+1) == "0"){
                line.html(line.html().replaceAt(i, "-"));   
                line.html(line.html().replaceAt(i+1,"+"));
                score += 2;
                $(".score").html(score.toString());
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
