class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        this.pointB=pointB
        this.Constraint = Constraint.create(options);
        World.add(world, this.Constraint);
    }

    display(){
        push();
        var pointA = this.Constraint.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}