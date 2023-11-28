import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const getRestaurants = () => {
    return axios.get(`${protocol}://${baseRoute}/api/restaurant`)
}