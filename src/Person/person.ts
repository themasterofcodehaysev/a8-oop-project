export abstract class person{
    constructor(protected firstName:string,protected lastName:string, protected phoneNumber:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
    }
}