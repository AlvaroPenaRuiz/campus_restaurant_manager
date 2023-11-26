import { PrismaClient } from "@prisma/client"
import express from "express"

export const dishRouter = express.Router()
const prisma = new PrismaClient()


dishRouter.get("/", (req, res)=>{
    // @ts-ignore
    prisma.dish.findMany({
        include:{
            restaurant: true,
            tags: {include: {tag: true}}
        }
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

dishRouter.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    prisma.dish.findUnique({
        where: {id},
        include:{
            restaurant: true,
            tags: {include: {tag: true}}
        }
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

dishRouter.post("/", (req, res)=>{
    const body = req.body

    prisma.dish.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The dish already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the dish.`)
        }
    })
})

dishRouter.post("/attach-to-tag", (req, res)=>{
    const body = req.body

    prisma.dishFoodTypeTag.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The dish id ${body.dish_id} is already attached to the tag id ${body.tag_id}.`)
        } else {
            res.send(`There was a problem attaching the dish id ${body.dish_id} to the tag id ${body.tag_id}.`)
        }
    })
})

dishRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body

    prisma.dish.update({
        where: {id},
        data: body
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The dish does not exist, subsequently you cannot update it.`)
        } else {
            res.send(`There was a problem updating the dish.`)
        }
    })
})

dishRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.dish.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The dish does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the dish.`)
        }
    })
})

export default dishRouter