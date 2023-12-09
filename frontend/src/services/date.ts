import axios from "axios"
import config from "../config"

const {baseRoute, protocol} = config.backend

export const getDate = (year: number, month: number, day: number) => {
    return axios.get(`${protocol}://${baseRoute}/api/date/year/${year}/month/${month}/day/${day}`)
}

export const getAmountOfDates = (amount = 20) => {
    return axios.get(`${protocol}://${baseRoute}/api/date/nextDays/${amount}`)
}