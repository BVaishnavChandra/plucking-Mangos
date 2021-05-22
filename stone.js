class stone
{
    constructor(x,y,radius)
    {
        var options=
        {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("images/stone.png");
        World.add(world,this.body);
    }

    display()
    {
              
        this.pos.x = this.body.position.x
        this.pos.y = this.body.position.y
        imageMode(CENTER)
        image(this.image,this.pos.x,this.pos.y,50,50);
    }
}