let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 120;

let c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 255, 0, 0.5)';
// c.fillRect(100, 100, 50, 50);

// line
// c.beginPath();
// c.moveTo(300, 400);
// c.lineTo(350, 470);
// c.lineTo(230, 870);
// c.strokeStyle = "blue";
// c.stroke();

// arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();

// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     c.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
//     c.fillRect(x, y, 50, 50);

//     Math.floor(Math.random() * 255);
// }


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

const maxSize = 80;
const minSize = 10;

let colorArray = [
    '#ffaaee',
    '#99ffaa',
    '#f1f1f1',
    '#181818',
    '#bad455',
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

        if (mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - 80 - this.y < 80 && mouse.y - 80 - this.y > -80) {
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
    let xSpeed = getRandomInt(-2, 2);
    let ySpeed = getRandomInt(-2, 2);
    let s = getRandomInt(minSize, 30);

    squaresArray.push(new Square(x, y, s, xSpeed, ySpeed));
}



function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // c.fillRect(mouse.x - 25, mouse.y - 130, 50, 50);

    for (let i = 0; i < squaresArray.length; i++) {

        squaresArray[i].update();

    }
}

animate();