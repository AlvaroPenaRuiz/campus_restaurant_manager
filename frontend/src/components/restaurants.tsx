import { useEffect, useState } from "react"
import { getRestaurants } from "../services/restaurant"

interface Restaurant {
  name: string,
  location: string, 
  description: string, 
  timetable: string
}

const Restaurants = () => {

  const [restaurants, setRestaurants] = useState({} as Restaurant[])

  useEffect(()=>{
    getRestaurants().then((response)=>{
      setRestaurants(response.data.map((restaurant: Restaurant) => {
          const {name, location, description, timetable} = restaurant
          return {name, location,description,timetable}
      }))
    })

  }, [])

    return (
      <>
        <div>
            <h1>Restaurant Page</h1>
        </div>
        <div>
            { restaurants.length > 0 ? restaurants.map((restaurant, index) => {
              return  <div key={index}>
                        <h2>{restaurant.name}</h2>
                        <p>({restaurant.location})</p>
                        <p>{restaurant.description}</p>
                        <p>{restaurant.timetable}</p>
                      </div>}) : <></>
            } 
        </div>
      </>
    )
  }
  
  export default Restaurants
  