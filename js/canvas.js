let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


let c = canvas.getContext('2d');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

const maxSize = 50;
const minSize = 10;

let colorArray = [
    'rgba(215, 38, 61, 0.3',
    'rgba(241, 241, 241, 0.3)',
    'rgba(255, 164, 0, 0.3)',
]



function Square(x, y, s, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function () {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.s, this.s);
    }

    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x >= window.innerWidth - this.s || this.x <= -this.s) {
            this.xSpeed *= -1;
        }
        if (this.y >= window.innerHeight - this.s * 3 || this.y <= - this.s) {
            this.ySpeed *= -1;
        }

        //Interactivity

        if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {

            if (this.s < maxSize) {
                this.s += 5;
            }
        } else if (this.s > minSize) {
            this.s -= 5;
        }

        this.draw();
    }
}

let squaresArray = [];
for (let i = 0; i < 300; i++) {

    let x = Math.floor(Math.random() * window.innerWidth) + 50;
    let y = Math.floor(Math.random() * window.innerHeight - 150);
    let xSpeed = getRandomInt(-1, 1);
    let ySpeed = getRandomInt(-1, 1);
    let s = getRandomInt(minSize, 30);

    if (xSpeed == 0 || ySpeed == 0) {
        xSpeed += 1;
        ySpeed += 1;
    }

    squaresArray.push(new Square(x, y, s, xSpeed, ySpeed));
}



function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // c.fillRect(mouse.x - 25, mouse.y, 50, 50);

    for (let i = 0; i < squaresArray.length; i++) {

        squaresArray[i].update();

    }
}

animate();