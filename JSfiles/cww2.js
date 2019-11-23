var snake;

function startMovement() {
    snake = new component(30, 25, "green", 10, 120);
    playground.start();
}

var playground = {
    canvas : document.getElementById("MainCanvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 285;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updatePG, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        cnt = playground.context;
        cnt.fillStyle = color;
        cnt.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updatePG() {
    playground.clear();
    snake.newPos();    
    snake.update();
}

function up() {
  snake.speedY -= 1; 
}

function down() {
    snake.speedY += 1; 
}

function left() {
    snake.speedX -= 1; 
}

function right() {
    snake.speedX += 1; 
}
