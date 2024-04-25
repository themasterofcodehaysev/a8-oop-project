import { person } from "../person";

export class Passenger extends person {
    // private bookings: Booking[] = [];

    constructor(firstName: string, lastName: string, phoneNumber: number) {
        super(firstName, lastName, phoneNumber);
    }
}