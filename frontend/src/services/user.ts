import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const postUserAuthentication = (username: string, password: string) => {
    return axios.post(`${protocol}://${baseRoute}/api/user/authenticate`, {username, password})
}