import { carType } from "./types";
import AbstractVehicle from "./vehicle";


class ParkingSpot {
  private spotname: string;
  protected type: carType;
  protected parkedCar: AbstractVehicle | null = null;

  constructor(spotname: string, type: carType) {
    this.spotname = spotname;
    this.type = type;
  }

  get spotName(): string {
    return this.spotname;
  }

  get isAvailable(): boolean {
    return this.parkedCar === null;
  }

  canFit(vehicle: AbstractVehicle): boolean {
    return vehicle.getType() === this.type;
  }

  parkCar(vehicle: AbstractVehicle): void {
    if (!this.isAvailable) {
      throw new Error("Spot already occupied");
    }
    if (!this.canFit(vehicle)) {
      throw new Error(`${vehicle.getNumber()} can't fit in this spot`);
    }
    this.parkedCar = vehicle;
  }

  unparkCar(): void {
    this.parkedCar = null;
  }

  get getSpotType(): carType {
    return this.type;
  }
}

export default ParkingSpot;
