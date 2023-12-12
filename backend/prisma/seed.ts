import { PrismaClient, FoodTypeTag } from "@prisma/client";
import data from "./data";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient()

const main = async () => {

    // Inserting restaurants and dishes
    let restaurants = await Promise.all(data.restaurants.map(async restaurant => {

        //@ts-ignore
        return await prisma.restaurant.create({
            //@ts-ignore
            data: {
                name: restaurant.name,
                description: restaurant.description,
                location: restaurant.location,
                hour_opening: restaurant.hour_opening,
                hour_closing: restaurant.hour_closing,
                dishes: {
                    //@ts-ignore
                    create: data.dishes[`${restaurant.name}`]
                }
            }
        })
    }))

    // Inserting dates
    const datesPromises = []
    for (let i = 0; i < 365; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i)

        const isWorkable = date.getDay() >= 1 && date.getDay() <= 5
        const isVegetarian = Math.random() < 0.2    // 1/5 posibilities

        datesPromises.push(prisma.date.create({
            // @ts-ignore
            data: {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                workable: isWorkable,
                vegetarian: isVegetarian,
            }
        }))

    }
        
    await Promise.all(datesPromises)

    // Relationships between dates and dishes
    const dates = await prisma.date.findMany({
        take: 10,
        orderBy: [
            {year: "asc"},
            {month:"asc"},
            {day: "asc"}
        ],
        where: {
            workable: true
        }
    })

    restaurants = await prisma.restaurant.findMany()
    
    await Promise.all(dates.flatMap(async (date) =>{
        return restaurants.flatMap(async (restaurant) =>{
            let dishes
            if (date.vegetarian){
                dishes = await prisma.dish.findMany({where: {restaurant_id: restaurant.id, vegetarian: true}})
            } else {
                dishes = await prisma.dish.findMany({
                    where: {restaurant_id: restaurant.id, vegetarian: true},
                    take: 3
                })
            }
            return dishes.map(async (dish) =>{
                return prisma.timetable.create({
                    data: {
                        dish_id: dish.id,
                        date_id: date.id
                    }
                })
            })
        })
    }))
    
    
    // Inserting Tags
    await Promise.all( data.tags.map(async (tag) =>{
        // @ts-ignore
        return prisma.foodTypeTag.create({
            data: {name: tag}
        })
    }))
        
    // Relationship between dishes and tags
    await Promise.all(data.tagsDishes.flatMap(async (relation) => {
        const dish_ids = (await prisma.dish.findMany({where:{name: (relation[0]) as string }})).map(dish => dish.id)
        const tag_ids = await Promise.all((relation[1] as string[]).map(async (tag) =>{
            // @ts-ignore
                return (await prisma.foodTypeTag.findFirst({where:{name: tag }})).id

            
        }))
        // @ts-ignore
        return dish_ids.flatMap(async (dish_id: number)=>{
            return tag_ids.map(async (tag_id) =>{
                // @ts-ignore
                return prisma.dishFoodTypeTag.create({data: {
                    dish_id,
                    // @ts-ignore
                    tag_id
                }})
            })
        })
    }))

    // Insert users and relate them to restaurant
    const usersPromises = []
        for (let i = 0; i< 8; i++){
            usersPromises.push(prisma.user.create({
                data: {
                    ...data.users[i],
                    restaurant_id: restaurants[i].id
                }
            }))
        }
        usersPromises.push(prisma.user.create({data: {...data.users[8]}}))
    
    await Promise.all(usersPromises)

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error: PrismaClientKnownRequestError) => {
        if (error.code === 'P2002'){
            console.log("The database has already been seeded. There is no need to do it again.")
            await prisma.$disconnect()
        } else {
            console.error(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    })