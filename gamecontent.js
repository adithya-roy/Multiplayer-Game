window.onload=function() {
    canv=document.getElementById("MainCanvas");
    ctx=canv.getContext("2d");
    name = prompt("Please enter your name ");
    document.addEventListener("keydown",keyPush);
    document.getElementById("left").addEventListener("click",leftmove);
    document.getElementById("right").addEventListener("click",rightmove);
    document.getElementById("up").addEventListener("click",upmove);
    document.getElementById("down").addEventListener("click",downmove);
    document.getElementById("score").innerHTML = Score;
    document.getElementById("playername").innerHTML = name;
   Game= setInterval(game,1000/15);
}

Snake_Pos_x=Snake_Pos_y=10;
grid_size=tiles_count=20;
foodX=foodY=15;
wall1=wall2=10;
wall4=11;
x_Speed=y_Speed=0;
trail=[];
tail = 1;
Score= 0;
Level =1;
var wall;
var x1=0;
var x2=400;
var y1=0;
var y2=400;
name= "Unkown";
buttons=11;
function game() {
   
    Snake_Pos_x+=x_Speed;
    Snake_Pos_y+=y_Speed;
    if(Snake_Pos_x<0) {
        Snake_Pos_x= tiles_count-1;
    }
    if(Snake_Pos_x>tiles_count-1) {
        Snake_Pos_x= 0;
    }
    if(Snake_Pos_y<0) {
        Snake_Pos_y= tiles_count-1;
    }
    if(Snake_Pos_y>tiles_count-1) {
        Snake_Pos_y= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*grid_size,trail[i].y*grid_size,grid_size,grid_size);
        if(trail[trail.length-1].x==Snake_Pos_x && trail[trail.length-1].y==Snake_Pos_y) {
            Reset();
        }
    }
    trail.push({x:Snake_Pos_x,y:Snake_Pos_y});
    while(trail.length>tail) {
    trail.shift();
    }
    
    if(Snake_Pos_y==x1 || Snake_Pos_y==x2 || Snake_Pos_x==y1 || Snake_Pos_x==y2){
        Reset();
        alert("Game Over !!");
    }

    if(Score==10){
        Level+=1;
        Score += 10;
        document.getElementById("score").innerHTML = Score;
        alert("Level 2");
        tail=1;
        buttons=0;
    }

    if (Score==30){
        Level+=1;
        Score += 100;
        document.getEl6uementById("score").innerHTML = Score;
        alert("Level 3");
        tail=1;
        buttons=0;
    }

    if (Score > 30){
        ctx.fillStyle = "Blue";
        ctx.fillRect(wall1*grid_size,wall2*grid_size,grid_size,grid_size);
        ctx.fillRect((wall1+1)*grid_size,wall2*grid_size,grid_size,grid_size);
        if(Snake_Pos_x==wall1 && Snake_Pos_y==wall2){
                console.log("done")  ;  
                Reset();
                alert("Game Over !!");
        }
        if(Snake_Pos_x==(wall1+1) && Snake_Pos_y==(wall2)){
            console.log("done")  ;  
            Reset();
            alert("Game Over !!");
    }

    }

    if(buttons==10){
        buttons=0;
        foodX=Math.floor(Math.random()*tiles_count);
        foodY=Math.floor(Math.random()*tiles_count);
    }

    if(foodX==Snake_Pos_x && foodY==Snake_Pos_y) {
        tail+=1;
        // Score();
        Score += 1;
        foodX=Math.floor(Math.random()*tiles_count);
        foodY=Math.floor(Math.random()*tiles_count);
        document.getElementById("score").innerHTML = Score;

    }
    ctx.fillStyle="red";
    ctx.fillRect(foodX*grid_size,foodY*grid_size,grid_size-2,grid_size-2);

// ctx.fillStyle = "Blue";
// ctx.fillRect(399,150,5,10);
// ctx.fillRect(200,55,5,100);
// ctx.fillRect(100,150,5,100);
// ctx.fillRect(400,0,5,100);
// ctx.fillRect(500,230,5,100);
// ctx.fillRect(600,100,5,100);
// ctx.fillRect(700,60,5,100);
// ctx.fillRect(200,340,5,50);
// ctx.fillRect(1,100,100,5);
// ctx.fillRect(355,200,100,5);
// ctx.fillRect(100,300,100,5);
// ctx.fillRect(100,150,100,5);

}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            x_Speed=-1;y_Speed=0;
            buttons+=1;
            break;
        case 38:
            x_Speed=0;y_Speed=-1;
            buttons+=1;
            break;
        case 39:
            x_Speed=1;y_Speed=0;
            buttons+=1;
            break;
        case 40:
            x_Speed=0;y_Speed=1;
            buttons+=1;
            break;
        case 65:
            x_Speed=-1;y_Speed=0;
            buttons+=1;
            break;
        case 87:
            x_Speed=0;y_Speed=-1;
            buttons+=1;
            break;
        case 68:
            x_Speed=1;y_Speed=0;
            buttons+=1;
            break;
        case 83:
            x_Speed=0;y_Speed=1;
            buttons+=1;
            break;
        
            
    }
    
}

// function Score(){
//     switch(Level){
//         case 1:
//             Score+=1;
//             document.getElementById("score").innerHTML = Score;
//             break
//         case 2:
//             Score+=10;
//             document.getElementById("score").innerHTML = Score;
//             break;
//         case 3:
//             Score+=100;
//             document.getElementById("score").innerHTML = Score;
//             break;
        
//     }

// }

function Reset(){
    
    Snake_Pos_x=Snake_Pos_y=10;
    grid_size=tiles_count=20;
    foodX=foodY=15;
    x_Speed=y_Speed=0;
    trail=[];
    tail = 1;
    Score= 0;
    clearInterval(Game);
    Game = setInterval(game, 100);
    document.getElementById("score").innerHTML = Score;
    Level=1;
}

function GameOver(){
    

}

function upmove() {
    x_Speed=0;y_Speed=-1;
  }
  
  function downmove() {
    x_Speed=0;y_Speed=1;
  }
  
  function leftmove() {
    x_Speed=-1;y_Speed=0;
  }
  
  function rightmove() {
    x_Speed=1;y_Speed=0;
  }

function End() {
    alert("Game Over !!");
  }
