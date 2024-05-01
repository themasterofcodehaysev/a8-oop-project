import { address } from "../Address/address";
export class baggageNumber {
  
    constructor( private baggageNumber: number) {
      this.baggageNumber = baggageNumber;
    }
    getBaggageNumber(): number {
      return this.baggageNumber;
    }
    setBaggageNumber(baggageNumber: number) {

      this.baggageNumber = baggageNumber;
    }
}