import { person } from "../person";
import { job_Position } from "./jobPosition";


export class employee extends person {
    constructor(protected firstName:string, protected lastName:string, protected phoneNumber:number,private Positions: job_Position, private Salary: number) {
        super(firstName, lastName, phoneNumber);
        this.Positions = Positions;
        this.Salary = Salary;
    }

    getFirstname():string {
        return this.firstName;
    }

    getLastname():string {
        return this.lastName;
    }

    getPosition():job_Position {
        return this.Positions;
    }

    getSalary():number {
        return this.Salary;
    }

    getPhoneNumber():number {
        return this.phoneNumber;
    }
}