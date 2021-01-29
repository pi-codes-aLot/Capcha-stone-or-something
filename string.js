/*class String{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }
    display(){
        var one = this.chain.bodyA.position;
        var two = this.pointB;
        push();
        stroke(0, 0, 0);
        strokeWeight(6);
        line(one.x, one.y, two.x, two.y);
        pop();

    }
}*/

class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
    display(){
        
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4)
            stroke(0, 0, 0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
                
            
           
            
            pop();
        }
    }
    
