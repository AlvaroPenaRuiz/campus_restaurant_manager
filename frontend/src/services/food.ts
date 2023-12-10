import axios from "axios"
import config from "../config"

type BodyType = {
    name: string, description: string, price: number, vegetarian: boolean, alergies?: string, calories: number, carbohydrates: number, sugars: number, fiber: number, fats: number, saturated_fats?: number, trans_fats?: number, cholesterol?: number, proteins: number, sodium?: number, iron?: number, calcium?: number, magnesium?: number, potasium?: number, phosphorus?: number, zinc?: number, vitamin_a?: number, vitamin_b?: number, vitamin_c?: number, vitamin_d?: number, vitamin_e?: number, vitamin_k?: number, restaurant_id: number
}

const {baseRoute, protocol} = config.backend

export const getDishes = () => {
    return axios.get(`${protocol}://${baseRoute}/api/dish`)
}

export const delDishes = (dish_id: number) => {
    return axios.delete(`${protocol}://${baseRoute}/api/dish/${dish_id}`)
}

export const putDish = (dish_id: number, name: string, description: string, price: string, vegetarian: boolean, alergies: string, calories: string, carbohydrates: string, sugars: string, fiber: string, fats: string, saturated_fats: string, trans_fats: string, cholesterol: string, proteins: string, sodium: string, iron: string, calcium: string, magnesium: string, potasium: string, phosphorus: string, zinc: string, vitamin_a: string, vitamin_b: string, vitamin_c: string, vitamin_d: string, vitamin_e: string, vitamin_k: string) => {
    const body = {name, description, price: Number(price), vegetarian, calories: Number(calories), carbohydrates: Number(carbohydrates), sugars: Number(sugars), fiber: Number(fiber), fats: Number(fats), proteins: Number(proteins)} as BodyType
    if(alergies.length > 0) body.alergies = alergies
    if(Number(saturated_fats) > 0) body.saturated_fats = Number(saturated_fats)
    if(Number(trans_fats) > 0) body.trans_fats = Number(trans_fats)
    if(Number(cholesterol) > 0) body.cholesterol = Number(cholesterol)
    if(Number(sodium) > 0) body.sodium = Number(sodium)
    if(Number(iron) > 0) body.iron = Number(iron)
    if(Number(calcium) > 0) body.calcium = Number(calcium)
    if(Number(magnesium) > 0) body.magnesium = Number(magnesium)
    if(Number(potasium) > 0) body.potasium = Number(potasium)
    if(Number(phosphorus) > 0) body.phosphorus = Number(phosphorus)
    if(Number(zinc) > 0) body.zinc = Number(zinc)
    if(Number(vitamin_a) > 0) body.vitamin_a = Number(vitamin_a)
    if(Number(vitamin_b) > 0) body.vitamin_b = Number(vitamin_b)
    if(Number(vitamin_c) > 0) body.vitamin_c = Number(vitamin_c)
    if(Number(vitamin_d) > 0) body.vitamin_d = Number(vitamin_d)
    if(Number(vitamin_e) > 0) body.vitamin_e = Number(vitamin_e)
    if(Number(vitamin_k) > 0) body.vitamin_k = Number(vitamin_k)
    return axios.put(`${protocol}://${baseRoute}/api/dish/${dish_id}`, body)
}

export const postDish = (name: string, description: string, price: string, vegetarian: boolean, alergies: string, calories: string, carbohydrates: string, sugars: string, fiber: string, fats: string, saturated_fats: string, trans_fats: string, cholesterol: string, proteins: string, sodium: string, iron: string, calcium: string, magnesium: string, potasium: string, phosphorus: string, zinc: string, vitamin_a: string, vitamin_b: string, vitamin_c: string, vitamin_d: string, vitamin_e: string, vitamin_k: string, restaurant_id: number) => {
    const body = {name, description, price: Number(price), vegetarian, calories: Number(calories), carbohydrates: Number(carbohydrates), sugars: Number(sugars), fiber: Number(fiber), fats: Number(fats), proteins: Number(proteins), restaurant_id} as BodyType
    if(alergies.length > 0) body.alergies = alergies
    if(Number(saturated_fats) > 0) body.saturated_fats = Number(saturated_fats)
    if(Number(trans_fats) > 0) body.trans_fats = Number(trans_fats)
    if(Number(cholesterol) > 0) body.cholesterol = Number(cholesterol)
    if(Number(sodium) > 0) body.sodium = Number(sodium)
    if(Number(iron) > 0) body.iron = Number(iron)
    if(Number(calcium) > 0) body.calcium = Number(calcium)
    if(Number(magnesium) > 0) body.magnesium = Number(magnesium)
    if(Number(potasium) > 0) body.potasium = Number(potasium)
    if(Number(phosphorus) > 0) body.phosphorus = Number(phosphorus)
    if(Number(zinc) > 0) body.zinc = Number(zinc)
    if(Number(vitamin_a) > 0) body.vitamin_a = Number(vitamin_a)
    if(Number(vitamin_b) > 0) body.vitamin_b = Number(vitamin_b)
    if(Number(vitamin_c) > 0) body.vitamin_c = Number(vitamin_c)
    if(Number(vitamin_d) > 0) body.vitamin_d = Number(vitamin_d)
    if(Number(vitamin_e) > 0) body.vitamin_e = Number(vitamin_e)
    if(Number(vitamin_k) > 0) body.vitamin_k = Number(vitamin_k)
    return axios.post(`${protocol}://${baseRoute}/api/dish`, body)
}