class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.2,
            density :1.2
        }
        this.body = Bodies.circle(x, y, r,options)
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.body)
    }
    display(){
        push()
        ellipseMode(RADIUS)
        circle(this.body.position.x,this.body.position.y,this.r)
        pop()
    }
}