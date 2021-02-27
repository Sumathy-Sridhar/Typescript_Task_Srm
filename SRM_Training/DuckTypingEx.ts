class Bird{
    fly():void{
        console.log("Fly with Wings!");
    }
}
class Airplane{
    fly(){
        console.log("Fly with Fuel!");
    }
}
class Fish{
    swim(){
        console.log("Fish swin in the sea");
    }
}
let ob:Airplane=new Bird();
ob.fly();
let bd:Bird=new Airplane();
bd.fly();
//let fh:Fish=new Bird(); Throws error 
/*let bi:Bird=new Fish();
bi.fly();   Throws Error  (Duck Typing)*/