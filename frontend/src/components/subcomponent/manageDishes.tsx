import { useEffect, useState } from "react"
import { getRestaurant } from "../../services/restaurant"
import { RestaurantType } from "../../types/Restaurant"
import { UserType } from "../../types/User"
import { DishType } from "../../types/Dish"
import { delDishes, postDish, putDish } from "../../services/food"

type Props = {
	user: UserType,
    micronutrients?: boolean
}

const ManageDishes = ({ user, micronutrients = false }: Props) => {


    const [dishes, setDishes] = useState([] as DishType[])
    const [newDish, setNewDish] = useState(false)

    const handleSave = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        const elements = [...event.currentTarget.parentNode!.parentNode!.querySelectorAll("input")] as HTMLInputElement[]
        // @ts-ignore
        const [name, description, price, vegetarian, alergies, calories, carbohydrates, sugars, fiber, fats, saturated_fats, trans_fats, cholesterol, proteins, sodium, iron, calcium, magnesium, potasium, phosphorus, zinc, vitamin_a, vitamin_b, vitamin_c, vitamin_d, vitamin_e, vitamin_k] = elements.map((e,i) => i === 3 ? e.checked : e.value)
        // @ts-ignore
        putDish(id, name, description, price, vegetarian, alergies, calories, carbohydrates, sugars, fiber, fats, saturated_fats, trans_fats, cholesterol, proteins, sodium, iron, calcium, magnesium, potasium, phosphorus, zinc, vitamin_a, vitamin_b, vitamin_c, vitamin_d, vitamin_e, vitamin_k)
    }

    const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const elements = [...event.currentTarget.parentNode!.parentNode!.querySelectorAll("input")] as HTMLInputElement[]
        // @ts-ignore
        const [name, description, price, vegetarian, alergies, calories, carbohydrates, sugars, fiber, fats, saturated_fats, trans_fats, cholesterol, proteins, sodium, iron, calcium, magnesium, potasium, phosphorus, zinc, vitamin_a, vitamin_b, vitamin_c, vitamin_d, vitamin_e, vitamin_k] = elements.map((e,i) => i === 3 ? e.checked : e.value)
        if(name && description && price && calories && carbohydrates && sugars && fiber && fats && proteins){
            // @ts-ignore
			postDish(name, description, price, vegetarian, alergies, calories, carbohydrates, sugars, fiber, fats, saturated_fats, trans_fats, cholesterol, proteins, sodium, iron, calcium, magnesium, potasium, phosphorus, zinc, vitamin_a, vitamin_b, vitamin_c, vitamin_d, vitamin_e, vitamin_k, user.restaurant_id).then((response)=>{
                
                setDishes([...dishes, {...response.data}])
                setNewDish(false)
            })
        }else {
            window.alert("Please, you must fill all the fields for create an user.")
            event.preventDefault()
        }

    }

    const handleDelete = (dish_id: number) => {
        delDishes(dish_id)
        setDishes(dishes.filter(dish=> dish.id !== dish_id)!)

    }

    const fetchData = async () => {
		const resDishes: DishType[] = ((await getRestaurant(user.restaurant_id!)).data as RestaurantType).dishes
		return { resDishes: resDishes.sort((a, b) => a.name > b.name ? 1 : -1) }
	}

    useEffect(() => {
		fetchData().then((response) => {
			const { resDishes } = response
            setDishes(resDishes)
        })


    }, [newDish])

    return (
        <>
            {dishes.length > 0 ? <div>
                <div>
                    <h1>Dish Managing Page</h1>
                </div>
                <div className="centeredText">
                    <table className="tableW100">
                        <thead>
                            <tr><th>Name</th><th>Description</th><th>Price</th><th>Vegetarian</th><th>Alergies</th><th>Calories</th><th>Carbohydrates</th><th>Sugar</th><th>Fiber</th><th>Fats</th><th hidden={!micronutrients}>Saturated Fats</th><th hidden={!micronutrients}>Trans Fats</th><th hidden={!micronutrients}>Cholesterol</th><th>Proteins</th><th hidden={!micronutrients}>Sodium</th><th hidden={!micronutrients}>Iron</th><th hidden={!micronutrients}>Calcium</th><th hidden={!micronutrients}>Magnesium</th><th hidden={!micronutrients}>Potasium</th><th hidden={!micronutrients}>Phosphorus</th><th hidden={!micronutrients}>Zinc</th><th hidden={!micronutrients}>Vitamin A</th><th hidden={!micronutrients}>Vitamin B</th><th hidden={!micronutrients}>Vitamin C</th><th hidden={!micronutrients}>Vitamin D</th><th hidden={!micronutrients}>Vitamin E</th><th hidden={!micronutrients}>Vitamin K</th></tr>
                        </thead>
                        <tbody>
                            {dishes.map((dish, index) => {
                                return <tr key={index}>
                                    <td><input type="text" defaultValue={dish.name} /></td>
                                    <td><input type="text" defaultValue={dish.description} /></td>
                                    <td><input type="number" defaultValue={dish.price} /></td>
                                    <td><input type="checkbox" defaultChecked={dish.vegetarian} /></td>
                                    <td><input type="text" defaultValue={dish.alergies} /></td>
                                    <td><input type="number" defaultValue={dish.calories} /></td>
                                    <td><input type="number" defaultValue={dish.carbohydrates} /></td>
                                    <td><input type="number" defaultValue={dish.sugars} /></td>
                                    <td><input type="number" defaultValue={dish.fiber} /></td>
                                    <td><input type="number" defaultValue={dish.fats} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.saturated_fats} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.trans_fats} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.cholesterol} /></td>
                                    <td><input type="number" defaultValue={dish.proteins} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.sodium} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.iron} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.calcium} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.magnesium} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.potasium} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.phosphorus} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.zinc} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.vitamin_a} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.vitamin_b} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.vitamin_c} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.vitamin_d} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.vitamin_e} /></td>
                                    <td hidden={!micronutrients}><input type="number" defaultValue={dish.vitamin_k} /></td>
                                    
                                    <td><button onClick={(event)=>handleSave(event, dish.id)}><i className="fa-regular fa-floppy-disk"></i></button></td>
                                    <td><button onClick={()=>handleDelete(dish.id)}><i className="fa-solid fa-trash"></i></button></td>
                                </tr>
                            })}
                            {newDish ? <tr >
									<td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                    <td><input type="checkbox" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                    <td><input type="number" /></td>
                                    <td><input type="number" /></td>
                                    <td><input type="number" /></td>
                                    <td><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td hidden={!micronutrients}><input type="number" /></td>
                                    <td><button onClick={handleCreate}><i className="fa-regular fa-floppy-disk"></i></button></td>
                                    <td><button onClick={()=>setNewDish(false)}><i className="fa-solid fa-xmark"></i></button></td>
                                </tr> : <></>}
                        </tbody>
                    </table>
                    {!newDish ? <button className="formButton" onClick={()=>setNewDish(true)}>New Dish</button> : <></>}
                </div>
            </div> : <></>}
        </>
    )
}


export default ManageDishes
