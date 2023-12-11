import { useEffect, useState } from "react"
import { DateType } from "../../types/Date"
import { DishType } from "../../types/Dish"
import { UserType } from "../../types/User"
import { getRestaurant } from "../../services/restaurant"
import { RestaurantType } from "../../types/Restaurant"
import { getAmountOfDates } from "../../services/date"
import { delTimetable, postTimetable } from "../../services/timetable"

type Props = {
	user: UserType
}

const ManageDailyMenu = ({ user }: Props) => {

	const [dates, setDates] = useState([] as DateType[])
	const [dishes, setDishes] = useState([] as DishType[])

	const [selectedDay, setSelectedDay] = useState({} as DateType)

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedDay(dates.find(date => date.id === Number(event.currentTarget.value)) as DateType)
		setDishes([...dishes])
	}

	const handleCheckChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget
		const { checked } = input
		const dishName = (input.parentNode?.previousSibling as HTMLTableElement).innerText
		const dishId = dishes.find(dish => dish.name === dishName)!.id
		const newDishes = [...dishes]

		if (checked) {
			const timetable = (await postTimetable(selectedDay.id, dishId)).data
			newDishes[newDishes.findIndex((dish) => dish.id === dishId)].dates.push(timetable)

		} else {
			const dishIndex = newDishes.findIndex((dish) => dish.id === dishId)
			const timetableIndex = newDishes[dishIndex]!.dates.findIndex((timetable) => timetable.date_id === selectedDay.id)
			const timetableId = newDishes[dishIndex]!.dates[timetableIndex]!.id
			await delTimetable(timetableId)
			newDishes[dishIndex].dates.splice(timetableIndex, 1)
		}

		setDishes(newDishes)

	}

	const fetchData = async () => {
		const resRestaurant: RestaurantType = (await getRestaurant(user.restaurant_id!)).data
		const resDates: DateType[] = (await getAmountOfDates(30)).data
		return {
			resDishes: resRestaurant.dishes.sort((a, b) => a.name > b.name ? 1 : -1), resDates
		}
	}

	useEffect(() => {
		fetchData().then((response) => {
			const { resDishes, resDates } = response

			setDishes(resDishes)
			setDates(resDates)
			setSelectedDay(resDates[0])

		})
	}, [])

	return (
		<>
			{dishes && dates ?
				<div className="centeredText W40">
					<div>
						<h2>Calendar</h2>
						<p>Here you can select the dishes for each day.</p>
					</div>
					<div>
						<div className="W40">
							<select onChange={handleSelectChange}>
								{dates.map((date, index) => {
									return <option key={index} value={date.id}>{`${date.day}/${date.month}/${date.year}`}</option>
								})}
							</select>
						</div>
						{selectedDay.workable ?
							<div>
								{selectedDay.vegetarian ? <p>This is a Vegetarian Day, you only will be able to serve vegetarian dishes. If you do not have, please, design your menu according to this special condition.</p> : <></>}
								<table className="calendarTBody">
									<tbody>
										{dishes.map((dish, index) => {
											return selectedDay.vegetarian && !dish.vegetarian ? <></> : <tr key={index}><td>{dish.name}</td><td><input type="checkbox" checked={dish.dates.filter((timetable) => timetable.date_id == selectedDay.id).length > 0} onChange={handleCheckChange} /></td></tr>
										})}
									</tbody>
								</table>
							</div> : <p>This day is not workable.</p>}
					</div>
				</div> : <></>}
		</>
	)
}


export default ManageDailyMenu
