class Bob {
  constructor(x,y) {
    var options = {
        isStatic: false,
       
    }
    this.radius = 10;
    this.body = Bodies.circle(x,y,10,options);
    World.add(world, this.body);
    
    
    
  }
  display(){
    var pos =this.body.position;
    push();
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x,pos.y, this.radius, this.radius);
    pop();
  }
};