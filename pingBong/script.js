const gameArea = document.querySelector("#pingpong");
const ctx = gameArea.getContext('2d');
gameArea.width = 1000;
gameArea.height = 1000;

class Player{ //Playerlar icin baslangic degerleri
    constructor(width, height, X){
        this.width = width;
        this.height = height;
        this.locationY = Math.floor((gameArea.height - this.height) / 2);
        this.locationX = X;
        this.playerSpeed = 100;
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.locationX, this.locationY, this.width, this.height);
    }
}

var player1 = new Player(30 , 150, 20);
var player2 = new Player(30, 150 , gameArea.width - 50);

class Ball {
    constructor() { // Top icin baslangic degerleri
        this.ballX = gameArea.width / 2;
        this.ballY = gameArea.height / 2;
        this.player1Score = 0;
        this.player2Score = 0;
        this.ballDirectionX = 1;
        this.ballDirectionY = 1;
        this.ranndomAngle = Math.floor((Math.random() * 10) + 1);
        this.ballSpeed = 0.1;
    }
    draw() {
        //Bg
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, gameArea.width, gameArea.height);
        //Draw Middle Line

        //Gradient
        const gradient = ctx.createLinearGradient(this.ballX - 30, this.ballY - 30, this.ballX + 30, this.ballY + 30);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.17, 'orange');
        gradient.addColorStop(0.34, 'yellow');
        gradient.addColorStop(0.51, 'green');
        gradient.addColorStop(0.68, 'blue');
        gradient.addColorStop(0.85, 'indigo');
        gradient.addColorStop(1, 'violet');
        //Ball Draw
        ctx.beginPath();
        ctx.arc(this.ballX, this.ballY, 30, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        //Draw Score
        ctx.fillStyle = "#fff";
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(ball.player1Score + ' - ' + ball.player2Score, gameArea.width / 2, 50);
    }
    update() {
        
        this.ballX += this.ballDirectionX * (2 + this.ranndomAngle); //topun x konumunda ilerlemes ve hizinin rastgele degismesi
        this.ballY += (this.ranndomAngle * this.ballDirectionY); // topun y ekseninde ilerlemesi sekme acisinin rastgele degismesi
        if (this.ballX >= gameArea.width) { //top arenanin sag duvarina carptigi zaman yeni round
            ball.player1Score += 1;
            this.ballX = gameArea.width / 2;
            this.ballY = gameArea.height / 2;
            this.ranndomAngle = 0;
            player1.locationY = (gameArea.height - player1.height) / 2;
            player2.locationY = (gameArea.height - player2.height) / 2;
        }
        if (this.ballX <= 0) { //top arenanin sol duvarina carptigi zaman yeni round
            ball.player2Score += 1;
            this.ballX = gameArea.width / 2;
            this.ballY = gameArea.height / 2;
            this.ranndomAngle = 0;
            this.ballDirectionX = -1;
            player1.locationY = (gameArea.height - player1.height) / 2;
            player2.locationY = (gameArea.height - player2.height) / 2;
        }
        if ((player1.locationY <= ball.ballY && player1.locationY + player1.height >= this.ballY) && (player1.width + player1.locationX >= ball.ballX - 15)){ //top playerin ust ve alt konumlari arasinda ve ilk oyucunun on yuzune carptigi zaman gerceklesen kisim
            this.ballDirectionX = 1;
            this.ranndomAngle = Math.floor((Math.random() * 10) + 1);
        }
        if ((player2.locationY <= ball.ballY && player2.locationY + player2.height >= ball.ballY) && (player2.locationX <= ball.ballX + 15)){ // top player 2 nin ust ve alt konumlari arasinda ve player 2 nin on yuzune carptigi zaman gerceklesen kisim
            console.log('pl');
            this.ballDirectionX = -1;
            this.ranndomAngle = Math.floor((Math.random() * 10) + 1);
        }
        if (this.ballY >= gameArea.height) {
            this.ranndomAngle = Math.floor((Math.random() * 10) + 1);
            this.ballDirectionY = -1;
        }
        if (this.ballY <= 0) {
            this.ranndomAngle = Math.floor((Math.random() * 10) + 1);
            this.ballDirectionY = 1;
        }
        this.ballSpeed += 0.1;
        this.draw();
        player1.draw();
        player2.draw();
    }
}
var ball = new Ball;

document.addEventListener('keydown', function(e){ // input okuma
    if (e.keyCode === 87 && player1.locationY >= 0){
        player1.locationY -= player1.playerSpeed;
    }
    if (e.keyCode === 83 && player1.locationY <= gameArea.height - player1.height){
        player1.locationY += player1.playerSpeed;
    }
    if (e.keyCode === 38 && player2.locationY >= 0){
        player2.locationY -= player2.playerSpeed;
    }
    if (e.keyCode === 40 && player2.locationY <= gameArea.height - player2.height){
        player2.locationY += player2.playerSpeed;
    }
})

function animate() { // calistirma
    requestAnimationFrame(animate);
    ball.update();
}

animate() // yey