import { DateType } from "./Date"
import { DishType } from "./Dish"

export type TimetableType = {
    id: number,
    created_at: string,
    updated_at: string,
    dish_id: number,
    dish: DishType
    date_id: number,
    date:  DateType
}