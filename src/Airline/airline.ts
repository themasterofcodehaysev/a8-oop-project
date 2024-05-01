import { flight } from "../Flight/flight";
import { employee } from "../Person/Employee/employee";
import { booking } from "../Booking/booking";
import { passenger } from "../Person/Passenger/passenger";
import { datetime } from "../DateTime/dateTime";
import { gate } from "../Gate/gate";



export class airline{
    constructor(private airlineName: string, private flight:flight[] = [], private employees:employee[] = [], private bookings:booking[]=[]){
        this.airlineName = airlineName;
        this.flight = flight;
        this.employees = employees;
        this.bookings = bookings;
    }
    getAirlineName():string{
        return this.airlineName;
    }
    addEmployee(employee: employee): void {
        this.employees.push(employee);
    }
    addFlight(flight: flight): void {
        this.flight.push(flight);
    }
    addBooking(booking:booking):void{
        this.bookings.push(booking);
    }
    getBookings(): booking[] {
        return this.bookings;
    }
    getAllEmployeeSalary(){
        let totalSalary:number = 0;
            for(let employee of this.employees){
                totalSalary += employee.getSalary();
            }
            return  totalSalary; 
    }

    getPassengerDetail(bookingReference:string){
        for(let booking of this.bookings){
            if(bookingReference == booking.getBookingReference()){
                return  booking;
            }  
        }
    }

    getPassengerReturn(): booking | null {
        for(let booking of this.bookings){
            if(booking.getReturnTrip()!= null){
                return  booking;
            }
        }
        return null;
    }
    
    getPlaneGate(passenger: passenger): gate | null {
        for (let booking of this.bookings) {
            if (booking.getPassenger() === passenger) {
                let tripTicket = booking.getTrip().getTripTicket();
                if (tripTicket) {
                    if (tripTicket && tripTicket instanceof Array) {
                        for (let ticket of tripTicket) {
                            if (ticket.getFlight().getGate()) {
                                return ticket.getFlight().getGate();
                            } 
                        }
                    } else {
                        if ( tripTicket.getFlight().getGate()) {
                            return  tripTicket.getFlight().getGate();
                        }
                    }
                }
            }
        }
        return null;
    }
    
    
    getFlights (pilot: employee, date: datetime): flight[]{
        let flights: flight[] = [];
        for(let flight of this.flight){
            if(flight.getCrew().getPilot() == pilot ||flight.getCrew().getCoPilot() && flight.getRoute().getDepartureDateTime() == date){
                flights.push(flight);
            }
        }
        return  flights;
    }

    getAllMeals(flightNumber:string):string[]{
        let meals:string[] = [];
        for(let book of this.bookings){
            if(book.getTrip().getTripTicket()?.getFlight().getFlightNumber() == flightNumber){
                meals.push(book.getTrip().getMealtype())
            }
        }
        return meals;
    }

    cancelBooking(bookingReference: string, passenger:passenger): void {
        const index = this.bookings.findIndex(booking => booking.getBookingReference() === bookingReference);
        for(let book of this.bookings){
            if(book.getPassenger() === passenger){
                if (index !== -1) {
                    this.bookings.splice(index, 1);
                }
            }
        }
    }
    

}
