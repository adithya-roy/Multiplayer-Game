// function startMovement() {
//     snake = new component(30, 25, "green", 10, 120);
//     playground.start();
// }

// var playground = {
//     canvas : document.getElementById("MainCanvas"),
//     start : function() {
//         this.canvas.width = 400;
//         this.canvas.height = 400;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updatePG, 20);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

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
    setInterval(game,1000/15);
}

Snake_Pos_x=Snake_Pos_y=10;
grid_size=tiles_count=20;
foodX=foodY=15;
x_Speed=y_Speed=0;
trail=[];
tail = 1;
Score= 0;
name= "Unkown";
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
        ctx.fillRect(trail[i].x*grid_size,trail[i].y*grid_size,grid_size-2,grid_size-2);
        if(trail[i].x==Snake_Pos_x && trail[i].y==Snake_Pos_y) {
            tail = 1;
        }
    }
    trail.push({x:Snake_Pos_x,y:Snake_Pos_y});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(foodX==Snake_Pos_x && foodY==Snake_Pos_y) {
        Score += 1;
        foodX=Math.floor(Math.random()*tiles_count);
        foodY=Math.floor(Math.random()*tiles_count);
        document.getElementById("score").innerHTML = Score;

    }
    ctx.fillStyle="red";
    ctx.fillRect(foodX*grid_size,foodY*grid_size,grid_size-2,grid_size-2);

ctx.fillStyle = "red";
ctx.fillRect(300,92,5,100);
ctx.fillRect(200,55,5,100);
ctx.fillRect(100,150,5,100);
ctx.fillRect(400,0,5,100);
ctx.fillRect(500,230,5,100);
ctx.fillRect(600,100,5,100);
ctx.fillRect(700,60,5,100);
ctx.fillRect(200,340,5,50);
ctx.fillRect(1,100,100,5);
ctx.fillRect(355,200,100,5);
ctx.fillRect(100,300,100,5);
ctx.fillRect(100,150,100,5);

}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            x_Speed=-0.5;y_Speed=0;
            break;
        case 38:
            x_Speed=0;y_Speed=-0.5;
            break;
        case 39:
            x_Speed=0.5;y_Speed=0;
            break;
        case 40:
            x_Speed=0;y_Speed=0.5;
            break;
        case 65:
            x_Speed=-0.5;y_Speed=0;
            break;
        case 87:
            x_Speed=0;y_Speed=-0.5;
            break;
        case 68:
            x_Speed=0.5;y_Speed=0;
            break;
        case 83:
            x_Speed=0;y_Speed=0.5;
            break;
        
            
    }
    
}

function upmove() {
    x_Speed=0;y_Speed=-0.5;
  }
  
  function downmove() {
    x_Speed=0;y_Speed=0.5;
  }
  
  function leftmove() {
    x_Speed=-0.5;y_Speed=0;
  }
  
  function rightmove() {
    x_Speed=0.5;y_Speed=0;
  }



// function component(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;    
//     this.update = function() {
//         cnt = playground.context;
//         cnt.fillStyle = color;
//         cnt.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;        
//     }    
// }

// function updatePG() {
//     playground.clear();
//     snake.newPos();    
//     snake.update();
// }

function End() {
    alert("Game Over !!");
  }

// function buildWall(context,gridX,gridY,width,height) {
//     console.log("BuildWall");
//     width = width*2-1;
//     height = height*2-1;
//     context.fillRect(pacman.radius/2+gridX*2*pacman.radius,pacman.radius/2+gridY*2*pacman.radius, width*pacman.radius, height*pacman.radius);
// }

