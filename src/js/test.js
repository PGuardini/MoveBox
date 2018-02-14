function cord(event){
    var x = event.pageX;
    var y = event.pageY;
    var ball = document.getElementById("bola");
    var ballX = event.pageX;
    var ballY = event.pageY;

    var cords = "X: "+x+" Y: "+y;
    document.getElementById("cord").innerHTML = cords;
    
    ball.style.left = ballX-272;
    ball.style.top = ballY-54;

    if(y>=270){
        ball.style.top = 228;
    }else if(y<=55){
        ball.style.top = 0;
    }
    if(x<=272){
        ball.style.left=0;
    }else if(x>=1061){
        ball.style.left=789;
    }
}

function clean(){
    document.getElementById("cord").innerHTML = "";
}