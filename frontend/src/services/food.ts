import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const getDishes = () => {
    return axios.get(`${protocol}://${baseRoute}/api/dish`)
}