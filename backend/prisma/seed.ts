import { PrismaClient, FoodTypeTag } from "@prisma/client";
import data from "./data";

const prisma = new PrismaClient()

const main = async () => {

    // Inserting restaurants and dishes
    await Promise.all(data.restaurants.map(async restaurant => {

        //@ts-ignore
        return await prisma.restaurant.create({
            //@ts-ignore
            data: {
                name: restaurant.name,
                description: restaurant.description,
                location: restaurant.location,
                timetable: restaurant.timetable,
                dishes: {
                    //@ts-ignore
                    create: data.dishes[`${restaurant.name}`]
                }
            }
        })
    }))

    // Inserting dates
    const dates = []
    for (let i = 0; i < 365; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i)

        const isWorkable = date.getDay() >= 1 && date.getDay() <= 5
        const isVegetarian = Math.random() < 0.2    // 1/5 posibilities

        dates.push(prisma.date.create({
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
        
    await Promise.all(dates)
    
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
            const result = await prisma.foodTypeTag.findFirst({where:{name: tag }})
            if (result){
                return result.id
            } else {
                console.log(tag)
            }
            
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

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    })