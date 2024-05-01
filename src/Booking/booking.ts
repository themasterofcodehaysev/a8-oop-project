import { trip } from "../Trip/trip";
import { passenger } from "../Person/Passenger/passenger";


export class booking {
    constructor(private passenger: passenger, private bookingDate: Date, private bookingReference: string,
        private trip:trip,private returnTrip? : trip) {
        this.passenger = passenger;
        this.bookingDate = bookingDate;
        this.bookingReference = bookingReference;
        this.trip = trip;
        this.returnTrip = returnTrip;
    }
    getPassenger(): passenger {
        return this.passenger;
    }
    getBookingDate(): Date {
        return this.bookingDate;
    }
    getBookingReference(): string {
        return this.bookingReference;
    }
    getTrip(): trip {
        return this.trip;
    }
    getReturnTrip(){
        return this.returnTrip;
    }

}



