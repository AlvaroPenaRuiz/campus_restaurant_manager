import { PrismaClient } from "@prisma/client"
import express from "express"

export const timetableRouter = express.Router()
const prisma = new PrismaClient()


timetableRouter.post("/", (req, res)=>{
    const {date_id, dish_id} = req.body

    prisma.timetable.create({data: {
        date_id,
        dish_id
    }})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The timetable already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the timetable.`)
        }
    })
})

timetableRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.timetable.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The timetable does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the timetable.`)
        }
    })
})

export default timetableRouter