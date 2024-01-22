class Vehicle {
    private owner: string;
    private type: string;
    private value: number;
    private engineCapacity: number;

    constructor(owner: string, type: string, value: number, engineCapacity: number) {
        this.owner = owner;
        this.type = type;
        this.value = value;
        this.engineCapacity = engineCapacity;
    }

    calculateTax(): number {
        if (this.engineCapacity < 100) {
            return 0.01 * this.value;
        } else if (this.engineCapacity >= 100 && this.engineCapacity <= 200) {
            return 0.03 * this.value;
        } else {
            return 0.05 * this.value;
        }
    }

    displayVehicleInfo(): void {
        console.log(`Owner: ${this.owner}`);
        console.log(`Type: ${this.type}`);
        console.log(`Value: ${this.value}`);
        console.log(`Engine Capacity: ${this.engineCapacity}`);
        console.log(`Tax: ${this.calculateTax()}`);
    }
}

let vehicle1 = new Vehicle("John Doe", "Car", 20000, 150);
let vehicle2 = new Vehicle("Jane Doe", "Motorcycle", 8000, 80);
let vehicle3 = new Vehicle("Bob Smith", "Truck", 50000, 250);

vehicle1.displayVehicleInfo();
vehicle2.displayVehicleInfo();
vehicle3.displayVehicleInfo();
