class Chain{


        constructor(bodyA,pointB){

        var options={

            bodyA:bodyA,
            pointB:pointB,
            
            isStatic: true

        };


        this.pointB=pointB;
        this.chain= Constraint.create(options);
        World.add(world,this.chain);

}
        display(){


            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
          
            strokeWeight(4);
            stroke ("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
          
}

}













