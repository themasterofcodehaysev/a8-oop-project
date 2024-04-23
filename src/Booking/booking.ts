import { seatClass } from "./seatClass";
import { mealType } from "./Meal/mealtype";
export class booking{
    constructor( private bookingReference: string, private seatClass:seatClass,public mealType:mealType |null){
        this.bookingReference = bookingReference;
        this.seatClass = seatClass;
    }
}