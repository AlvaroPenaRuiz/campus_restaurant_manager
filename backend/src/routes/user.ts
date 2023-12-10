import { PrismaClient } from "@prisma/client"
import express from "express"
import { encrypt256 } from "../utils/encryption"

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
    const {password, restaurant_id, ...body} = req.body
    if (restaurant_id) body.restaurant_id = restaurant_id
    prisma.user.create({data: {
        password: encrypt256(password), 
        ...body
    }})
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

userRouter.post("/authenticate", (req, res)=>{
    const {username} = req.body
    const password = encrypt256(req.body.password)

    prisma.user.findFirst({
        where: {
            username,
            password
        }
    })
    .then((results)=>{
        if (results) {
            const {password, ...data} = results
            res.json(data)
        } else {
            res.json({})
        }
    }).catch((error)=>{
        console.error(error)
    })
})

userRouter.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const {password, ...body} = req.body
    console.log(password)
    if (password) body.password = encrypt256(password)
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