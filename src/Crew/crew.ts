import { employee } from "../Person/Employee/employee";
export class Crew {
    constructor( private pilot: employee, private coPilot: employee, private attendants: employee[]=[]) {
      this.pilot = pilot;
      this.coPilot = coPilot;
      this.attendants = attendants;
    }
    addAttendant(attendants: employee): void {
      this.attendants.push(attendants);
    }
    getPilot(): employee {
      return this.pilot;
    }
    getCoPilot(): employee {
      return this.coPilot;
    }
    getAttendants(): employee[] {
      return this.attendants;
    }
  }