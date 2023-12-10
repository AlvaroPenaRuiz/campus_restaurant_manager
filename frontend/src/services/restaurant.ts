import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const getRestaurants = () => {
    return axios.get(`${protocol}://${baseRoute}/api/restaurant`)
}

export const getRestaurant = (restaurantId: number) => {
    return axios.get(`${protocol}://${baseRoute}/api/restaurant/${restaurantId}`)
}

export const putRestaurant = (restaurantId: number, name: string, location: string, description: string, hour_opening: string, hour_closing: string) => {
    return axios.put(`${protocol}://${baseRoute}/api/restaurant/${restaurantId}`, {name, location, description, hour_opening: Number(hour_opening), hour_closing: Number(hour_closing)})
}