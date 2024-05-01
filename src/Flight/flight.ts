import { Crew } from "../Crew/crew";
import { route } from "../Route/route";
import { aeroplanes } from "../Aeroplanes/aeroplanes";
import { gate } from "../Gate/gate";

export class flight{
    constructor( public flightNumber: string,public crew:Crew , public route:route, private aeroplane:aeroplanes, public gate:gate
    ){
        
    }
    getFlightNumber(): string {
        return this.flightNumber;
    }
    getAeroplane(){
        return this.aeroplane;
    }
    getCrew() {
        return this.crew;
    }
    getRoute():route{
        return this.route;
    }
    getGate():gate{
        return this.gate;
    }

}