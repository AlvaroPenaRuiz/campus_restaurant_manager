import { useEffect, useState } from "react"
import { getRestaurants } from "../services/restaurant"
import { RestaurantType } from "../types/Restaurant"
import { useNavigate } from "react-router-dom"

const Restaurants = () => {

  const navigate = useNavigate()
  const [restaurants, setRestaurants] = useState({} as RestaurantType[])

  useEffect(() => {
    getRestaurants().then(response => setRestaurants(response.data))

  }, [])

  return (
    <>
      <div>
        <h1>Restaurant Page</h1>
      </div>
      <div>
        {restaurants.length > 0 ? restaurants.map((restaurant, index) => {
          return <div key={index} onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
            <h2>{restaurant.name}</h2>
            <p>({restaurant.location})</p>
            <p>{restaurant.description}</p>
            <p>{`From ${restaurant.hour_opening}:00 to ${restaurant.hour_closing}:00`}</p>
          </div>
        }) : <></>
        }
      </div>
    </>
  )
}

export default Restaurants
