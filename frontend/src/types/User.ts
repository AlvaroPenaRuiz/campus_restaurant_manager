import { RestaurantType } from "./Restaurant"

export type UserType = {
id: number,
created_at: string,
updated_at: string,
name: string,
lastname: string,	
user_id: string,
username: string,
email: string,
admin:	boolean,
restaurant?: RestaurantType,
restaurant_id?: number
}