import { PrismaClient } from "@prisma/client"
import express from "express"

export const userRouter = express.Router()
const prisma = new PrismaClient()

userRouter.get("/", (req, res)=>{
    // @ts-ignore
    prisma.user.findMany({
        include:{restaurant: true}
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

userRouter.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    prisma.user.findUnique({
        where: {id},
        include:{restaurant: true}
    }).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        res.send(error)
    })
})

userRouter.post("/", (req, res)=>{
    const body = req.body

    prisma.user.create({data: body})
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2002"){
            res.statusCode = 409
            res.send(`The user already exists fully or partially.`)
        } else {
            res.send(`There was a problem inserting the user.`)
        }
    })
})

userRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body

    prisma.user.update({
        where: {id},
        data: body
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The user does not exist, subsequently you cannot update it.`)
        } else {
            res.send(`There was a problem updating the user.`)
        }
    })
})

userRouter.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)

    prisma.user.delete({
        where: {id}
    })
    .then((results)=>{
        res.json(results)
    }).catch((error)=>{
        console.error(error)
        if (error.code == "P2025"){
            res.statusCode = 404
            res.send(`The user does not exist, subsequently you cannot delete it.`)
        } else {
            res.send(`There was a problem deleting the user.`)
        }
    })
})

export default userRouter