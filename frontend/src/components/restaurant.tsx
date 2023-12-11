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
	const { restaurantId } = useParams() as Params

	useEffect(() => {
		getRestaurant(Number(restaurantId)).then(response => setRestaurant(response.data))

	}, [])

	return (
		<>
			<div className="subbody">
				<div>
					<h1>{restaurant.name}</h1>
					<div className="centeredText">
						<p><em>{restaurant.location} ({`from ${restaurant.hour_opening}:00 to ${restaurant.hour_closing}:00`})</em></p>
						<p>{restaurant.description}</p>
					</div>
				</div>
				<div className="contentBlock">
					<div className="cardContainer">
						{restaurant.dishes ? restaurant.dishes.map((dish, index) => {
							return <DishCard dish={dish} key={index} />
						}) : <></>}
					</div>
					<button className="backButton" onClick={() => history.back()}>Back</button>

				</div>
			</div>
		</>
	)
}


export default Restaurant
