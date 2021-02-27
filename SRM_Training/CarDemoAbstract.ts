abstract class CarDemoAbstract{
    carname:String;
    carcolor:String;
    Enginecapacity:number;
    NoofCylinders:number;
    constructor(carname:String,carcolor:String, Enginecapacity:number,NoofCylinders:number){
        this.carname=carname;
        this.carcolor=carcolor;
        this.Enginecapacity=Enginecapacity;
        this.NoofCylinders=NoofCylinders;
    }
    abstract startCar();
    abstract stopCar();
}
class SUV extends CarDemoAbstract{
    carname:String;
    carcolor:String;
    Enginecapacity:number;
    NoofCylinders:number;
    Manufacturer:String;
    Price:number;
    constructor(carname:String,carcolor:String, Enginecapacity:number,NoofCylinders:number,Manufacturer:String,Price:number){
        super(carname,carcolor,Enginecapacity,NoofCylinders);
        this.Manufacturer=Manufacturer;
        this.Price=Price;
    }
    startCar(){
        console.log(this.carname + " is Ready to Start..");
    }
    stopCar(){
        console.log(this.carname + " is Halted..");
    }
    display(){
        console.log("Car Name : " +this.carname);
        console.log("Car Color : " +this.carcolor);
        console.log("Engine Capacity : " +this.Enginecapacity);
        console.log("No of Cylinders : " +this.NoofCylinders);
        console.log("Manufacturer : " +this.Manufacturer);
        console.log("Price : "+this.Price);
    }
}
class HatchBack extends CarDemoAbstract{
    carname:String;
    carcolor:String;
    Enginecapacity:number;
    NoofCylinders:number;
    Manufacturer:String;
    Price:number;
    constructor(carname:String,carcolor:String, Enginecapacity:number,NoofCylinders:number,Manufacturer:String,Price:number){
        super(carname,carcolor,Enginecapacity,NoofCylinders);
        this.Manufacturer=Manufacturer;
        this.Price=Price;
    }
    startCar(){
        console.log(this.carname + " is Ready to Start..");
    }
    stopCar(){
        console.log(this.carname + " is Halted..");
    }
    display(){
        console.log("Car Name : " +this.carname);
        console.log("Car Color : " +this.carcolor);
        console.log("Engine Capacity : " +this.Enginecapacity);
        console.log("No of Cylinders : " +this.NoofCylinders);
        console.log("Manufacturer : " +this.Manufacturer);
        console.log("Price : "+this.Price);
    }
}
class Sedan extends CarDemoAbstract{
    carname:String;
    carcolor:String;
    Enginecapacity:number;
    NoofCylinders:number;
    Manufacturer:String;
    Price:number;
    constructor(carname:String,carcolor:String, Enginecapacity:number,NoofCylinders:number,Manufacturer:String,Price:number){
        super(carname,carcolor,Enginecapacity,NoofCylinders);
        this.Manufacturer=Manufacturer;
        this.Price=Price;
    }
    startCar(){
        console.log(this.carname + " is Ready to Start..");
    }
    stopCar(){
        console.log(this.carname + " is Halted..");
    }
    display(){
        console.log("Car Name : " +this.carname);
        console.log("Car Color : " +this.carcolor);
        console.log("Engine Capacity : " +this.Enginecapacity);
        console.log("No of Cylinders : " +this.NoofCylinders);
        console.log("Manufacturer : " +this.Manufacturer);
        console.log("Price : "+this.Price);
    }
}
let suvobj:SUV=new SUV("Creta","White",96,3,"Hyundai",8.5);
console.log("SUV CAR DETAILS");
suvobj.display();
suvobj.startCar();
suvobj.stopCar();
console.log();
let hatchobj:HatchBack=new HatchBack("Swift","Red",98,2,"Maruti",5.73);
console.log("HATCHBACK CAR DETAILS");
hatchobj.display();
hatchobj.startCar();
hatchobj.stopCar();
let sedanobj:Sedan=new Sedan("Amaze","Silver",100,5,"Honda",10.25);
console.log("SEDAN CAR DETAILS");
sedanobj.display();
sedanobj.startCar();
sedanobj.stopCar();
