import { job_Position } from "../Person/Employee/jobPosition";
import { datetime } from "../DateTime/dateTime";
import { person } from "../Person/person";

export class Flight {
    pilot: string;
    chef: string;
    baggageHandlers: job_Position[]; 
    attendants: job_Position[]; 
    passengers: Passenger[];
    departureDateTime: datetime;

    constructor(pilot: string, chef: string, baggageHandlers: job_Position[], attendants: job_Position[], passengers: Passenger[], departureDateTime: datetime) {
        this.pilot = pilot;
        this.chef = chef;
        this.baggageHandlers = baggageHandlers;
        this.attendants = attendants;
        this.passengers = passengers;
        this.departureDateTime = departureDateTime;
    }
}


