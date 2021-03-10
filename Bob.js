class Bob{


    constructor(x,y,radius){
    
    var options={
    
      'isStatic':false,
      'restitution':0.3,
      'friction':0.5,
      'density': 1.2
    };
    
    this.body=Bodies.circle(x,y,radius/2,options);
    this.radius=radius;
    
    World.add(world,this.body);
    
    
    /*
    We have worked with two types of physics engine bodies -
    1) Bodies.rectangle
    2) Bodies.circle
    
    We use both the above statements in constructor.
    
    Let's consider case 1 --> 1) Bodies.rectangle
    
    constuctor(){
     this.body= Bodies.rectangle(x,y, width, height);
    }
    
    display()
    {
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y,this.width,this.height);
    }
    
    
    ----------------------------
    Let's consider case 2 --> 2) Bodies.circle
    
    constructor(x,y,radius){
    
    this.body=Bodies.circle(x,y, radius/2);
    this.radius=radius;
    }
    
    display(){
    
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    
    }
    
    
    */
    }
    
    display()
            {
    
                var pos =this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x, pos.y);
                rotate(angle);
                
                fill("pink");
                ellipseMode(CENTER);
                ellipse(0,0,this.radius,this.radius);
                pop();
            }
    
    
    
    
    
    }
    