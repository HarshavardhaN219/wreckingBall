class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8 ,          
             friction:1.0,
             density:0.04
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
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop()

        
    }
    
}