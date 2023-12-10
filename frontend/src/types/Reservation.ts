import { DateType } from "./Date"
import { RestaurantType } from "./Restaurant"

export type ReservationType = {
    id: number,
    created_at: string,
    updated_at: string,
    fullname:	string,	
    email:	string,	
    phone:	string,	
    amount_people:	number,	
    hour:	number,	
    minute:	number,	
    restaurant_id:	number,
    restaurant: RestaurantType,
    date_id: number,
    date: DateType
}