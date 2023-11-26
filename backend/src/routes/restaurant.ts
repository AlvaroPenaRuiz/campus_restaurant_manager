import { PrismaClient } from "@prisma/client"
import express from "express"

export const restaurantRouter = express.Router()
const prisma = new PrismaClient()


restaurantRouter.get("/", (req, res)=>{
    // @ts-ignore
    prisma.restaurant.findMany({
        include:{
            dishes: true,
            users: true
        }
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

restaurantRouter.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    prisma.restaurant.findUnique({
        where: {id},
        include:{
            dishes: true,
            users: true
        }
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

restaurantRouter.post("/", (req, res)=>{
    const body = req.body

    prisma.restaurant.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The restaurant already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the restaurant.`)
        }
    })
})

restaurantRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body

    prisma.restaurant.update({
        where: {id},
        data: body
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The restaurant does not exist, subsequently you cannot update it.`)
        } else {
            res.send(`There was a problem updating the restaurant.`)
        }
    })
})

restaurantRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.restaurant.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The restaurant does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the restaurant.`)
        }
    })
})

export default restaurantRouter