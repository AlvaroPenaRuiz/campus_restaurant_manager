import axios from "axios"
import config from "../config"
import { UserType } from "../types/User"

const {baseRoute, protocol} = config.backend

export const getUsers = () => {
    return axios.get(`${protocol}://${baseRoute}/api/user`)
}

export const postUserAuthentication = (username: string, password: string) => {
    return axios.post(`${protocol}://${baseRoute}/api/user/authenticate`, {username, password})
}

export const deleteUser = (user_id: Number) => {
    return axios.delete(`${protocol}://${baseRoute}/api/user/${user_id}`)
}

export const putUser = (id: number, name: string, lastname: string, user_id: string, username: string, password: string, email: string, restaurant_id: number, admin: boolean) => {
    const body = {name, lastname, user_id, username, email, admin, restaurant_id} as UserType
    if (password) body.password = password
    return axios.put(`${protocol}://${baseRoute}/api/user/${id}`, body)
}

export const postUser = (name: string, lastname: string, user_id: string, username: string, password: string, email: string, restaurant_id: number | undefined, admin: boolean) => {
    const body = {name, lastname, user_id, username, password, email, admin} as UserType
    if (restaurant_id) body.restaurant_id = restaurant_id
    return axios.post(`${protocol}://${baseRoute}/api/user`, body)
}