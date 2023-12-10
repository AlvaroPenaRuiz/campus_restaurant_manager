import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const postReservation = (fullname: string, phone: string, email: string, restaurant_id: number, amount_people: number, date_id: number, time: string) => {
    const [hour, minute] = time.split(":").map(x => Number(x))
    return axios.post(`${protocol}://${baseRoute}/api/reservation`, {
        fullname,
        phone,
        email,
        restaurant_id,
        amount_people,
        date_id,
        hour,
        minute
    })
}

export const delReservation = (id: number) => {
    return axios.delete(`${protocol}://${baseRoute}/api/reservation/${id}`)
}