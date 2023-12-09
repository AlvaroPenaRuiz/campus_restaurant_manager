import { useEffect, useState } from "react"
import { getRestaurant } from "../services/restaurant"
import { useParams } from "react-router-dom"
import { RestaurantType } from "../types/Restaurant"
import DishCard from "./subcomponent/dishCard"

type Params = {
	restaurantId: string
}	

const Restaurant = () => {

  const [restaurant, setRestaurant] = useState({} as RestaurantType)
  const {restaurantId} = useParams() as Params

  useEffect(()=>{
    getRestaurant(Number(restaurantId)).then( response => setRestaurant(response.data))

  }, [])

    return (
      <>
		<div>
			<h2>{restaurant.name}</h2>
			<p><em>{restaurant.location} ({`from ${restaurant.hour_opening}:00 to ${restaurant.hour_closing}:00`})</em></p>
			<p>{restaurant.description}</p>
		</div>
		<div>
			{restaurant.dishes ? restaurant.dishes.map((dish, index) => {
				return <DishCard dish={dish} key={index}/>
			}): <></>}
			<button onClick={()=>history.back()}>Back</button>
		</div>
      </>
    )
  }


  export default Restaurant
  