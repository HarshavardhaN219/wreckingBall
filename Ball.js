class Ball{
    constructor(x,y,width,height){
        var options={          
             frictionAir:0.05,
             density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var b = this.body.position
        var a = this.body.angle
        push()  
        translate(b.x,b.y)
        rotate(a)
        fill("red")
        ellipse(0,0,this.width,this.height)
        pop()

        
    }
    
}