import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const getRestaurants = () => {
    return axios.get(`${protocol}://${baseRoute}/api/restaurant`)
}

export const getRestaurant = (restaurantId: number) => {
    return axios.get(`${protocol}://${baseRoute}/api/restaurant/${restaurantId}`)
}