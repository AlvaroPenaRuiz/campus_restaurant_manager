import { PrismaClient } from "@prisma/client"
import express from "express"

export const tagRouter = express.Router()
const prisma = new PrismaClient()


tagRouter.get("/", (req, res)=>{
    // @ts-ignore
    prisma.foodTypeTag.findMany({
        include: {dishes: {include: {dish: true}}}
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

tagRouter.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    prisma.foodTypeTag.findUnique({
        where: {id},
        include: {dishes: {include: {dish: true}}}
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

tagRouter.post("/", (req, res)=>{
    const body = req.body

    prisma.foodTypeTag.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The tag already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the tag.`)
        }
    })
})

tagRouter.post("/attach-to-dish", (req, res)=>{
    const body = req.body

    prisma.dishFoodTypeTag.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The tag id ${body.tag_id} is already attached to the dish id ${body.dish_id}.`)
        } else {
            res.send(`There was a problem attaching the tag id ${body.tag_id} to the dish id ${body.dish_id}.`)
        }
    })
})

tagRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body

    prisma.foodTypeTag.update({
        where: {id},
        data: body
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The tag does not exist, subsequently you cannot update it.`)
        } else {
            res.send(`There was a problem updating the tag.`)
        }
    })
})

tagRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.foodTypeTag.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The tag does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the tag.`)
        }
    })
})

export default tagRouter