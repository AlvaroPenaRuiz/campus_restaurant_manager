import { DishType } from "./Dish"
import { ReservationType } from "./Reservation"

export type DateType = {

    id: number,
    created_at: string,
    updated_at: string,
    day: number,
    month: number,
    year: number,
    workable: boolean,
    vegetarian: boolean,
    dishes: {
        id: number,
        created_at: string,
        updated_at: string,
        dish_id: number,
        date_id: number,
        dish: DishType,

    }[],
    reservations: ReservationType[]
}