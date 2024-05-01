import { person } from "../person";
import { address } from "../../Address/address";
export class passenger extends person{
    constructor( firstName:string, lastName:string, phoneNumber:number,private address:address){
        super(firstName, lastName, phoneNumber);
        this.address = address;
    }
    getFirstName():string{
        return this.firstName;
    }
}