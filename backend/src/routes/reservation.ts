import { PrismaClient } from "@prisma/client"
import express from "express"

export const reservationRouter = express.Router()
const prisma = new PrismaClient()


reservationRouter.get("/", (req, res)=>{
    // @ts-ignore
    prisma.reservation.findMany({
        include:{
            restaurant: true,
            date: true
        }
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

reservationRouter.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    prisma.reservation.findUnique({
        where: {id},
        include:{
            restaurant: true,
            date: true
        }
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

reservationRouter.post("/", (req, res)=>{
    const body = req.body

    prisma.reservation.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The reservation already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the reservation.`)
        }
    })
})

reservationRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body

    prisma.reservation.update({
        where: {id},
        data: body
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The reservation does not exist, subsequently you cannot update it.`)
        } else {
            res.send(`There was a problem updating the reservation.`)
        }
    })
})

reservationRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.reservation.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The reservation does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the reservation.`)
        }
    })
})

export default reservationRouter