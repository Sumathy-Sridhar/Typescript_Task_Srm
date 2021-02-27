var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarDemoAbstract = /** @class */ (function () {
    function CarDemoAbstract(carname, carcolor, Enginecapacity, NoofCylinders) {
        this.carname = carname;
        this.carcolor = carcolor;
        this.Enginecapacity = Enginecapacity;
        this.NoofCylinders = NoofCylinders;
    }
    return CarDemoAbstract;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(carname, carcolor, Enginecapacity, NoofCylinders, Manufacturer, Price) {
        var _this = _super.call(this, carname, carcolor, Enginecapacity, NoofCylinders) || this;
        _this.Manufacturer = Manufacturer;
        _this.Price = Price;
        return _this;
    }
    SUV.prototype.startCar = function () {
        console.log(this.carname + " is Ready to Start..");
    };
    SUV.prototype.stopCar = function () {
        console.log(this.carname + " is Halted..");
    };
    SUV.prototype.display = function () {
        console.log("Car Name : " + this.carname);
        console.log("Car Color : " + this.carcolor);
        console.log("Engine Capacity : " + this.Enginecapacity);
        console.log("No of Cylinders : " + this.NoofCylinders);
        console.log("Manufacturer : " + this.Manufacturer);
        console.log("Price : " + this.Price);
    };
    return SUV;
}(CarDemoAbstract));
var HatchBack = /** @class */ (function (_super) {
    __extends(HatchBack, _super);
    function HatchBack(carname, carcolor, Enginecapacity, NoofCylinders, Manufacturer, Price) {
        var _this = _super.call(this, carname, carcolor, Enginecapacity, NoofCylinders) || this;
        _this.Manufacturer = Manufacturer;
        _this.Price = Price;
        return _this;
    }
    HatchBack.prototype.startCar = function () {
        console.log(this.carname + " is Ready to Start..");
    };
    HatchBack.prototype.stopCar = function () {
        console.log(this.carname + " is Halted..");
    };
    HatchBack.prototype.display = function () {
        console.log("Car Name : " + this.carname);
        console.log("Car Color : " + this.carcolor);
        console.log("Engine Capacity : " + this.Enginecapacity);
        console.log("No of Cylinders : " + this.NoofCylinders);
        console.log("Manufacturer : " + this.Manufacturer);
        console.log("Price : " + this.Price);
    };
    return HatchBack;
}(CarDemoAbstract));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(carname, carcolor, Enginecapacity, NoofCylinders, Manufacturer, Price) {
        var _this = _super.call(this, carname, carcolor, Enginecapacity, NoofCylinders) || this;
        _this.Manufacturer = Manufacturer;
        _this.Price = Price;
        return _this;
    }
    Sedan.prototype.startCar = function () {
        console.log(this.carname + " is Ready to Start..");
    };
    Sedan.prototype.stopCar = function () {
        console.log(this.carname + " is Halted..");
    };
    Sedan.prototype.display = function () {
        console.log("Car Name : " + this.carname);
        console.log("Car Color : " + this.carcolor);
        console.log("Engine Capacity : " + this.Enginecapacity);
        console.log("No of Cylinders : " + this.NoofCylinders);
        console.log("Manufacturer : " + this.Manufacturer);
        console.log("Price : " + this.Price);
    };
    return Sedan;
}(CarDemoAbstract));
var suvobj = new SUV("Creta", "White", 96, 3, "Hyundai", 8.5);
console.log("SUV CAR DETAILS");
suvobj.display();
suvobj.startCar();
suvobj.stopCar();
console.log();
var hatchobj = new HatchBack("Swift", "Red", 98, 2, "Maruti", 5.73);
console.log("HATCHBACK CAR DETAILS");
hatchobj.display();
hatchobj.startCar();
hatchobj.stopCar();
var sedanobj = new Sedan("Amaze", "Silver", 100, 5, "Honda", 10.25);
console.log("SEDAN CAR DETAILS");
sedanobj.display();
sedanobj.startCar();
sedanobj.stopCar();
