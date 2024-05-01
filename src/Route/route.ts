import { airport } from "../Airport/airport";
import { datetime } from "../DateTime/dateTime";
export class route {
    constructor(
      private flightNumber: string,
      private departureAirport: airport,
      private arrivalAirport: airport,
      private departureDateTime: datetime,
      private arrivalDateTime: datetime
    ) {}
    getDepartureAirport(): airport{
      return this.departureAirport;
    }
    getArrivalAirport(): airport{
      return this.arrivalAirport;
    }
    getDepartureDateTime(): datetime{
      return this.departureDateTime;
    }
    getArrivalDateTime(): datetime{
      return this.arrivalDateTime;
    }
    getFlightNumber(): string{    
      return this.flightNumber;
    }
  
  }