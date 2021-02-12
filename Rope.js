class Rope{
    constructor(bodyA,pointB){
     var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:250
     }
     this.pointB=pointB
     this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }
    display(){
      if(this.rope.bodyA){
          var c = this.rope.bodyA.position
          var p = this.pointB
          push()
          stroke(48,22,8)
          strokeWeight(5)
          line(p.x,p.y,c.x,c.y)
          pop()
      }
    }
}