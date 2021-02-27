var CarDemo = /** @class */ (function () {
    function CarDemo(carcolor, Enginecapacity, NoofCylinders) {
        this.carcolor = carcolor;
        this.Enginecapacity = Enginecapacity;
        this.NoofCylinders = NoofCylinders;
    }
    CarDemo.prototype.startCar = function () {
        console.log("Check the Engine Capacity Before you start the Car!!");
    };
    CarDemo.prototype.stopCar = function () {
        console.log("Slow Down and check if the Engine Capacity is Low...");
    };
    CarDemo.prototype.accelerateCar = function () {
        console.log("Please Accelerate your car to reach your Destination soon..1");
    };
    CarDemo.prototype.openCarLock = function () {
        console.log("Please Insert the Key to Unlock the Car");
    };
    CarDemo.prototype.closecarLock = function () {
        console.log("Remove the key to Lock your Car!");
    };
    return CarDemo;
}());
var obj = new CarDemo("Sumathy", 50, 2);
console.log('obj =>', obj);
obj.startCar();
obj.stopCar();
obj.accelerateCar();
obj.openCarLock();
obj.closecarLock();
