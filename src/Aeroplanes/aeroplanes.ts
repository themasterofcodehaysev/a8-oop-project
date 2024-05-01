import { seatNumber } from "./seat";
export class aeroplanes{
    constructor(private registrationNumbers:string,public aeroplaneSeat: seatNumber[] = []){
        this.registrationNumbers = registrationNumbers;
        this.aeroplaneSeat = aeroplaneSeat;
    }
    getRegistrationNumbers():string{
        return this.registrationNumbers;
    }
    addAeroplaneSeat(asteroplaneSeat:seatNumber){
        this.aeroplaneSeat.push(asteroplaneSeat);
    }
}