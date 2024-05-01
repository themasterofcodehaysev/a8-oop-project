import { flight } from "../Flight/flight";
export class ticket{
    constructor(private bookingReferenceNumber:string, private  ticketNumber:string, private flight:flight,private price:number){
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.ticketNumber = ticketNumber;
        this.flight = flight;
        this.price = price;
    }
    getBookingReferenceNumber():string{
        return this.bookingReferenceNumber;
    }
    getTicketNumber():string{
        return this.ticketNumber;
    }
    getFlight(){
        return this.flight;
    }
    getPrice():number{
        return this.price;
    }
}