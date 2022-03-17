const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1.5;

class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x:0,
            y:1,
        }
        this.width = 50;
        this.height = 50;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity;
        }
        else this.velocity.y = 0;
    }
}

class Platform{
    constructor(){
        this.position = {
            x: 0,
            y:0
        }
        this.width = 200;
        this.height = 200;
    }

    draw(){
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}









