import { passenger } from "./Person/Passenger/passenger";
import { employee } from "./Person/Employee/employee";
import { booking } from "./Booking/booking";
import { job_Position } from "./Person/Employee/jobPosition";
import { address } from "./Address/address";
import { seatClass } from "./Trip/seatClass";
import { trip } from "./Trip/trip";
import { mealType } from "./Meal/mealtype";
import { datetime } from "./DateTime/dateTime";
import { flight } from "./Flight/flight";
import { airline } from "./Airline/airline";
import { airport } from "./Airport/airport";
import { aeroplanes } from "./Aeroplanes/aeroplanes";
import { gate } from "./Gate/gate";
import { Crew } from "./Crew/crew";
import { baggageNumber } from "./Baggage/baggage";
import { route } from "./Route/route";
import { seatNumber } from "./Aeroplanes/seat"
import { ticket } from "./Ticket/ticket";


// Create employeese________________________________________________________
let Johnny = new employee('Johnny', 'Sin', 9743456782, job_Position.Pilot, 10000);
let Don = new employee('Don', 'Pa', 9743456782, job_Position.Pilot, 12000);
let Bill = new employee('Bill', 'Den',8888888888, job_Position.Chef,8000);
let Jack = new employee('Jack', 'Son',8888888888, job_Position.attendant,9000);
let Ben = new employee('Ben', 'Son',8888888888, job_Position.attendant,9000);

//Create Passenger___________________________________________________________
let DadaAddress = new address('PhN','cambodia');
let Dada = new passenger('Dada', 'Cha',9876534,DadaAddress);

let NaAddress = new address('Banlung','cambodia');
let Na = new passenger('Na','Jack',9876534,NaAddress);


//Create Departure time______________________________________________________
let LADepartureTime = new datetime(new Date("2024-01-07"), 7);
let LAarrivalTime = new datetime(new Date("2024-01-08"), 7);

let SRDepartureTime = new datetime(new Date("2024-01-07"), 7);
let SRarrivalTime = new datetime(new Date("2024-01-07"), 11);

//Create the Airport__________________________________________________________
let PPairline = new airline('PhnomPenhAirline',[],[],[]);
let Angkorairline = new airline('AngkorAirline',[],[],[]);

//Create the airport__________________________________________________________
let JFK = new airport("John F. Kennedy International Airport", 123, "New York");
let LAX = new airport("Los Angeles International Airport", 456, "Los Angeles");

let PNH = new airport("Phnom Penh International Airport", 256, "Phnom Penh");
let CAA = new airport("Siem Reap–Angkor International Airport", 118, "Siem Reap");

//Create the Route____________________________________________________________
let LosAngelesRoute = new route('A1',PNH,LAX,LADepartureTime,LAarrivalTime);
let SiemReapRoute = new route('A2',PNH,CAA,SRDepartureTime,SRarrivalTime);

//Create the Crew_____________________________________________________________
let flight1Attendant: employee[] = [];
flight1Attendant.push(Jack);
flight1Attendant.push(Ben);
let flight1Crew = new Crew(Johnny,Don,flight1Attendant)

//Create the Gate______________________________________________________________
let G1 = new gate('G1');
let G2 = new gate('G2');

//Create Aeroplance seat ______________________________________________________
let A1 = new seatNumber('A1');
let A2 = new seatNumber('A2');
let A3 = new seatNumber('A3');
let B1 = new seatNumber('B1');
let B2 = new seatNumber('B2');
let B3 = new seatNumber('C3');

//Create Aeroplane______________________________________________________________
let Boing737 = new aeroplanes('+H-737',[])
let Boing787 = new aeroplanes('+H-787',[])
//Add seat into Aeroplane_______________________________________________________
Boing737.addAeroplaneSeat(A1);
Boing737.addAeroplaneSeat(A2);
Boing737.addAeroplaneSeat(A3);
Boing737.addAeroplaneSeat(B1);
Boing737.addAeroplaneSeat(B2);
Boing737.addAeroplaneSeat(B3);

//Create the Flight______________________________________________________________
let flight1 = new flight('A1',flight1Crew,LosAngelesRoute,Boing787,G1);
let flight2 = new flight('A1',flight1Crew,SiemReapRoute,Boing737,G2);


//Create the Tickets____________________________________________________________
let ticket1 = new ticket('AY620123','T1',flight1,200);
let ticket2 = new ticket('AY610123','T2',flight2,200);

let tickets:ticket[] = [];
tickets.push(ticket2);
tickets.push(ticket1);

//Passenger baggage________________________________________________________________
let Dadabaggage = new baggageNumber(1);
let Nabaggage = new baggageNumber(2);

// Create Trip___________________________________  ________________________________
let trip1Date = new datetime(new Date("2024-01-07"), 7);
let departureTrip1 = new address('PhnomPenh','Cambocia')
let arrivalTrip1 = new address('Los Angeles','USA')
let trip1 = new trip(departureTrip1,arrivalTrip1,Dadabaggage,trip1Date, seatClass.BusinessClass,A1, mealType.Vegan,tickets);

let trip2Date = new datetime(new Date("2024-01-07"), 7);
let departureTrip2 = new address('Phnom Penh','Cambodia')
let arrivalTrip2 = new address('Siem Reap','Cambodia')
let trip2 = new trip(departureTrip2,arrivalTrip2,Nabaggage,trip2Date, seatClass.BusinessClass,B1, mealType.Vegetarian,ticket1);

let trip2Return = new trip(arrivalTrip2,departureTrip2,Nabaggage,trip2Date, seatClass.BusinessClass,B1, mealType.Vegetarian,ticket1);

// Booking_________________________________________________________________________
let bookingDate = new Date();

let booking1 = new booking(Dada, bookingDate, 'AY620123', trip1);
let booking2 = new booking(Na, bookingDate, 'AY610123', trip2,trip2Return);

//add employee into Airline_______________________________________________________
PPairline.addEmployee(Johnny);
PPairline.addEmployee(Bill);
PPairline.addEmployee(Don);
PPairline.addEmployee(Jack);
PPairline.addEmployee(Ben);

//Add flight into airline
PPairline.addFlight(flight1);
PPairline.addFlight(flight2);

//Add bookint into airline
PPairline.addBooking(booking1);
PPairline.addBooking(booking2);

//Test the result of user story __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ___

// 1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, customer information…)
// console.log(PPairline.getPassengerDetail('AY620123'));

// 2. As an airline manager, I want to know for a given flight, how many passengers have return tickets.
// console.log(PPairline.getPassengerReturn());

// 3. As an airline pilot, I want to know, for a given date, how many flights I have to join.
// console.log(PPairline.getFlights(Johnny,LADepartureTime));

// 4. As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare
// console.log(PPairline.getAllMeals('A1'));

// 5. As an airline manager, I want to find out how much salary I pay all my employees.
// console.log(PPairline.getAllEmployeeSalary());

// 6. As a passenger, I want to know which gate my plane is waiting at.
// console.log(PPairline.getPlaneGate(Dada));

// 7. As a passenger, I want to know get my booking ticket(s)
// console.log(booking1.getTrip().getTripTicket())

// 8. As a passenger, I want to cancel my booking
// PPairline.cancelBooking('AY610123',Na);

