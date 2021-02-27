class CarDemo{
    carcolor:String;
    Enginecapacity:number;
    NoofCylinders:number;
    
    constructor(carcolor:String, Enginecapacity:number,NoofCylinders:number){
        this.carcolor=carcolor;
        this.Enginecapacity=Enginecapacity;
        this.NoofCylinders=NoofCylinders;
    }
    startCar():void{
        console.log("Check the Engine Capacity Before you start the Car!!");
    }
    stopCar():void{
        console.log("Slow Down and check if the Engine Capacity is Low...");

    }
    accelerateCar():void{
        console.log("Please Accelerate your car to reach your Destination soon..1");
    }
    openCarLock():void{
        console.log("Please Insert the Key to Unlock the Car");
    }
    closecarLock():void{
        console.log("Remove the key to Lock your Car!");
    }
}

let obj:CarDemo=new CarDemo("Sumathy",50,2);
console.log('obj =>',obj);
obj.startCar();
obj.stopCar();
obj.accelerateCar();
obj.openCarLock();
obj.closecarLock();