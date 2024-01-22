var Vehicle = /** @class */ (function () {
    function Vehicle(owner, type, value, engineCapacity) {
        this.owner = owner;
        this.type = type;
        this.value = value;
        this.engineCapacity = engineCapacity;
    }
    Vehicle.prototype.calculateTax = function () {
        if (this.engineCapacity < 100) {
            return 0.01 * this.value;
        }
        else if (this.engineCapacity >= 100 && this.engineCapacity <= 200) {
            return 0.03 * this.value;
        }
        else {
            return 0.05 * this.value;
        }
    };
    Vehicle.prototype.displayVehicleInfo = function () {
        console.log("Owner: ".concat(this.owner));
        console.log("Type: ".concat(this.type));
        console.log("Value: ".concat(this.value));
        console.log("Engine Capacity: ".concat(this.engineCapacity));
        console.log("Tax: ".concat(this.calculateTax()));
    };
    return Vehicle;
}());
// Example usage:
var vehicle1 = new Vehicle("John Doe", "Car", 20000, 150);
var vehicle2 = new Vehicle("Jane Doe", "Motorcycle", 8000, 80);
var vehicle3 = new Vehicle("Bob Smith", "Truck", 50000, 250);
vehicle1.displayVehicleInfo();
vehicle2.displayVehicleInfo();
vehicle3.displayVehicleInfo();
