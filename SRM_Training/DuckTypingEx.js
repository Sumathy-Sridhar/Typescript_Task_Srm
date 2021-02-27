var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Fly with Wings!");
    };
    return Bird;
}());
var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.fly = function () {
        console.log("Fly with Fuel!");
    };
    return Airplane;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("Fish swin in the sea");
    };
    return Fish;
}());
var ob = new Bird();
ob.fly();
var bd = new Airplane();
bd.fly();
//let fh:Fish=new Bird(); Throws error 
var bi = new Fish();
bi.fly();
