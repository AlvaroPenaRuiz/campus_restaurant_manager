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
      <div className="subbody">
        <div>
          <h1>Restaurant Page</h1>
          <div className="centeredText">
            <p>These are all the restaurants available in the area!</p>
          </div>
        </div>
        <div className="contentBlock">
          <div className="cardContainer">
            {restaurants.length > 0 ? restaurants.map((restaurant, index) => {
              return <div className="card" key={index} onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                <h2>{restaurant.name}</h2>
                <p>({restaurant.location})</p>
                <p>{restaurant.description}</p>
                <p>{`From ${restaurant.hour_opening}:00 to ${restaurant.hour_closing}:00`}</p>
              </div>
            }) : <></>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Restaurants
