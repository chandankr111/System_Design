import { carType } from "./types";

abstract class vehicleabastract {
    protected number: string;
    protected type: carType;

    constructor(number: string, type: carType) {
        this.number = number;
        this.type = type;
    }

    getNumber(): string {
        return this.number;
    }

    getType(): carType {
        return this.type;
    }
}

class Car extends vehicleabastract {
    constructor(number: string) {
        super(number, "Car");
    }
}

class Truck extends vehicleabastract {
    constructor(number: string) {
        super(number, "Truck");
    }
}

class Bike extends vehicleabastract {
    constructor(number: string) {
        super(number, "Bike");
    }
}

export default vehicleabastract;
export { Car, Truck, Bike };
