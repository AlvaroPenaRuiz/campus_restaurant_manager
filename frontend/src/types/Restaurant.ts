import { DishType } from "./Dish"
import { ReservationType } from "./Reservation"
import { UserType } from "./User"

export type RestaurantType = {
    id: number,
    created_at: string,
    updated_at: string,
    name: string,
    location: string,
    description: string,
    hour_opening:	number,
    hour_closing:	number,
    dishes: DishType[],
    users: UserType[],
    reservations: ReservationType[]
  }