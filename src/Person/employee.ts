import { person } from "./person";
import { job_Position } from "./jobPosition";

class employee extends person {
    private Positions: job_Position;
    private Salary: number;
    constructor(protected firstName:string,protected lastName:string, protected phoneNumber:number, Positions: job_Position, Salary: number) {
        super(firstName, lastName, phoneNumber);
        this.Positions = Positions;
        this.Salary = Salary;
    }
}