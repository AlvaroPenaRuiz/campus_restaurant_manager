import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const postTimetable = (date_id: number, dish_id: number) => {
    return axios.post(`${protocol}://${baseRoute}/api/timetable`, {date_id, dish_id})
}

export const delTimetable = (id: number) => {
    return axios.delete(`${protocol}://${baseRoute}/api/timetable/${id}`)
}