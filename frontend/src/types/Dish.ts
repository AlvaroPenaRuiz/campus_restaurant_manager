import { DishTagType } from "./DishTag"
import { RestaurantType } from "./Restaurant"
import { TimetableType } from "./Timetable"

export type DishType = {
id: number,
created_at: string,
updated_at: string,
name: string,
description: string,
price: number,
vegetarian: boolean,
alergies?: string,
calories: number,
carbohydrates: number,
sugars: number,
fiber: number,
fats: number,
saturated_fats?: number,
trans_fats?: number,
cholesterol?: number,
proteins: number,
sodium?: number,
iron?: number,
calcium?: number,
magnesium?: number,
potasium?: number,
phosphorus?: number,
zinc?: number,
vitamin_a?: number,
vitamin_b?: number,
vitamin_c?: number,
vitamin_d?: number,
vitamin_e?: number,
vitamin_k?: number,
restaurant: RestaurantType,
restaurant_id: number,
tags: DishTagType[]
dates: TimetableType[]
}