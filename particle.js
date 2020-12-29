class Particle{
    constructor(x, y){
        var option={
            restitution: 0.4,
        }
        this.body = Bodies.circle(x, y, 30, option);
        this.color = color(random(0 ,255), random(0 ,255), random(0 ,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0, 30, 30);
        pop();
    }
}