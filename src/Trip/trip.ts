import { address } from "../Address/address";
import { seatClass } from "./seatClass";
import { mealType } from "../Meal/mealtype";
import { datetime } from "../DateTime/dateTime";
import { baggageNumber } from "../Baggage/baggage";
import { seatNumber } from "../Aeroplanes/seat";
import { ticket } from "../Ticket/ticket";


export class trip{
    constructor( private departureTrip:address,private arrivalTrip:address,private baggage:baggageNumber, private tripDate:datetime,
        private seatClass:seatClass, private seatNumber:seatNumber, private mealType = mealType , private ticket:ticket | ticket[] = [])
        {
        this.departureTrip = departureTrip;
        this.arrivalTrip = arrivalTrip;
        this.baggage = baggage;
        this.tripDate = tripDate;
        this.seatClass = seatClass;
        this.seatNumber = seatNumber;
        this.mealType  = mealType;
        this.ticket = ticket;
    }
    getSeatClass(): string {
        return this.seatClass;
    }
    getMealtype(): string {
        return this.mealType;
    }
    getSeatNumber(){
        return this.seatNumber;
    }
    getBaggage(): baggageNumber {
        return this.baggage;
    }
    getTripDate(): datetime {
        return this.tripDate;
    }
    getDepartureTrip(): address {
        return this.departureTrip;
    }
    getArrivalTrip(): address {
        return this.arrivalTrip;
    }
    pushTickets(ticket: ticket) {
        if (Array.isArray(this.ticket)) {
            this.ticket.push(ticket);
        } else {
            this.ticket = [ticket];
        }
    }

        getTripTicket() {
        if (Array.isArray(this.ticket)) {
            for(let tick of this.ticket) {
                return tick;
            }
        } else {
            return this.ticket;
        }
    }
}