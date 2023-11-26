import { PrismaClient } from "@prisma/client"
import express from "express"

export const dateRouter = express.Router()
const prisma = new PrismaClient()


dateRouter.get("/", (req, res)=>{
    // @ts-ignore
    prisma.date.findMany({
        include:{dishes: {include: {dish: {include: {restaurant: true}}}}}
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

dateRouter.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    prisma.date.findUnique({
        where: {id},
        include:{dishes: {include: {dish: {include: {restaurant: true}}}}}
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

dateRouter.post("/", (req, res)=>{
    const body = req.body

    prisma.date.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The date already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the date.`)
        }
    })
})

dateRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body

    prisma.date.update({
        where: {id},
        data: body
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The date does not exist, subsequently you cannot update it.`)
        } else {
            res.send(`There was a problem updating the date.`)
        }
    })
})

dateRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.date.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The date does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the date.`)
        }
    })
})

export default dateRouter