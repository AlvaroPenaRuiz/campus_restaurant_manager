import { useEffect, useState } from "react"
import { getDate } from "../services/date"
import { DateType } from "../types/Date"
import DishCard from "./subcomponent/dishCard"
import { useNavigate } from "react-router-dom"

const TodaysMeal = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState({} as DateType)

  useEffect(() => {
    let date = new Date()
    while (date.getDay() === 6 || date.getDay() === 0) date.setDate(date.getDate() + 1)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    getDate(year, month, day).then(response => setDate(response.data))

  }, [])

  return (
    <>
      <div className="subbody">
        <div>
          <h1>Today's Meal</h1>
          <div className="centeredText">
            <p>This is the menu for the day {date.day}/{date.month}/{date.year}.</p>
          </div>
        </div>
        <div className="contentBlock">
          <div className="cardContainer">
            {date.dishes ? date.dishes.map((dish, index) => {
              return <div onClick={() => navigate(`/restaurant/${dish.dish.restaurant.id}`)} key={index}><DishCard dish={dish.dish} showRestaurant key={index} /></div>
            }) : <></>}
          </div>
        </div>
      </div>
    </>
  )
}

export default TodaysMeal
