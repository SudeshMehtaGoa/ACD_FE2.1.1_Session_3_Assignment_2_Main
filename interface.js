/* Car is either moving or idle */
var carStatus;
(function (carStatus) {
    carStatus[carStatus["idle"] = 0] = "idle";
    carStatus[carStatus["moving"] = 1] = "moving";
})(carStatus || (carStatus = {}));
;
/* Class implements IDrivable interface*/
var car = (function () {
    function car() {
        this.numCarStatus = carStatus.idle;
    }
    car.prototype.drive = function () {
        this.numCarStatus = carStatus.moving;
    };
    car.prototype.stop = function () {
        this.numCarStatus = carStatus.idle;
    };
    car.prototype.getPosition = function () {
        return ("Google API is not implemented so cannot tell exact position of car on this road");
    };
    car.prototype.getCarStatus = function () {
        if (this.numCarStatus == carStatus.idle)
            return ("Car is not moving ....  ");
        else
            return ("Car is moving....  ");
    };
    return car;
}());
/* Object of class car */
var carObject = new car();
/* Start the car */
function CarStart() {
    carObject.drive();
    document.getElementById("lblMessage").innerHTML = carObject.getCarStatus() + carObject.getPosition();
}
/* Stop the car */
function CarStop() {
    carObject.stop();
    document.getElementById("lblMessage").innerHTML = carObject.getCarStatus() + carObject.getPosition();
}
