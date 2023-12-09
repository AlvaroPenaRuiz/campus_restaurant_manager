import { useEffect, useState } from "react"
import { getDate } from "../services/date"
import { DateType } from "../types/Date"
import DishCard from "./subcomponent/dishCard"

const TodaysMeal = () => {

  const [date, setDate] = useState({} as DateType)

  useEffect(()=>{
    let date = new Date()
    while (date.getDay() === 6 || date.getDay() === 0 ) date.setDate(date.getDate() +1)
    const year = date.getFullYear()
    const month = date.getMonth() +1 
    const day = date.getDate()

    getDate(year, month, day).then( response => setDate(response.data))

  }, [])

    return (
      <>
        <div>
            <h1>Today's Meal Page</h1>
        </div>
        <div>
            {date.dishes ? date.dishes.map((dish, index)=>{
              return <a href={`restaurant/${dish.dish.restaurant.id}`}><DishCard dish={dish.dish} showRestaurant key={index}/></a>
            }) : <></>}
        </div>
      </>
    )
  }
  
  export default TodaysMeal
  