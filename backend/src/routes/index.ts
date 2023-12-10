import express from "express"
import userRouter from "./user"
import restaurantRouter from "./restaurant"
import dishRouter from "./dish"
import dateRouter from "./date"
import reservationRouter from "./reservation"
import tagRouter from "./tag"
import timetableRouter from "./timetable"

export const indexRouter = express.Router()

indexRouter.get("/", (req, res)=>{
    res.send("Hola mundo!")
})

indexRouter.use("/user", userRouter)
indexRouter.use("/restaurant", restaurantRouter)
indexRouter.use("/dish", dishRouter)
indexRouter.use("/date", dateRouter)
indexRouter.use("/reservation", reservationRouter)
indexRouter.use("/tag", tagRouter)
indexRouter.use("/timetable", timetableRouter)

export default indexRouter