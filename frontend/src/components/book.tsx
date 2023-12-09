import { useEffect, useState, ChangeEvent } from "react"
import { RestaurantType } from "../types/Restaurant"
import { getRestaurants } from "../services/restaurant"
import { getAmountOfDates } from "../services/date"
import { DateType } from "../types/Date"
import { postReservation } from "../services/reservation"

type Props = {
	amountOfDays: number,
	amountOfPeople: number
}

type AvailableTimes = {
	restaurantId: number,
	slots: string[]
}

const Book = ({ amountOfDays = 20, amountOfPeople = 12 }: Props) => {

	// Values for form
	const [restaurants, setRestaurants] = useState([] as RestaurantType[])
	const [dates, setDates] = useState([] as DateType[])
	const [amountOfPeopleOptions] = useState(Array.from({ length: amountOfPeople }, (x, i) => i + 1))
	const [availableTimes, setAvailableTimes] = useState([] as AvailableTimes[])
	const [selectableTimes, setSelectableTimes] = useState([] as string[])

	// Values Selected
	const [fullname, setFullname] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [restaurant, setRestaurant] = useState(0)
	const [people, setPeople] = useState(amountOfPeopleOptions[0])
	const [date, setDate] = useState(0)
	const [time, setTime] = useState("")

	// Finished the form
	const [done, setDone] = useState(false)

	//Validators
	const validateFullname = (name: string) => /^[a-zA-z]+(?: [a-zA-z]+)*$/.test(name)
	const validateEmail = (name: string) => /^[a-z]+(?:[\.\-\_]?[a-z]+)*@[a-z]+(?:\.?[a-z]+)*\.[a-z]{2,5}$/.test(name)
	const validatePhone = (name: string) => /^\+\d{1,3}(?: ?\d){9,11}$/.test(name)

	// Handlers
	const handleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (validateFullname(fullname) && validateEmail(email) && validatePhone(phone)) {
			postReservation(fullname, email, phone, restaurant, people, date, time)
			setDone(true)
		} else {
			window.alert("Please, you must fill all the fields of the form, so the restaurant can contact you.")
			event.preventDefault()
		}
	}
	const handleFullname = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget
		if (validateFullname(value)) {
			setFullname(value)
			event.currentTarget.className = ""
		} else {
			setFullname("")
			event.currentTarget.className = "invalid"
		}
	}
	const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget
		if (validateEmail(value)) {
			setEmail(value)
			event.currentTarget.className = ""
		} else {
			setEmail("")
			event.currentTarget.className = "invalid"
		}
	}
	const handlePhone = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget
		if (validatePhone(value)) {
			setPhone(value)
			event.currentTarget.className = ""
		} else {
			setPhone("")
			event.currentTarget.className = "invalid"
		}
	}
	const handleRestaurant = (event: ChangeEvent<HTMLSelectElement>) => setRestaurant(Number(event.currentTarget.value))
	const handlePeople = (event: ChangeEvent<HTMLSelectElement>) => setPeople(Number(event.currentTarget.value))
	const handleDate = (event: ChangeEvent<HTMLSelectElement>) => setDate(Number(event.currentTarget.value))
	const handleTime = (event: ChangeEvent<HTMLSelectElement>) => setTime(event.currentTarget.value)

	// Others
	const dateToString = (date: DateType) => `${date.day}/${date.month}/${date.year}`

	const fetchData = async () => {
		const resRestaurants: RestaurantType[] = (await getRestaurants()).data
		const resDates: DateType[] = (await getAmountOfDates(amountOfDays)).data
		return { resRestaurants: resRestaurants.sort((a, b) => a.name > b.name ? 1 : -1), resDates }
	}

	useEffect(() => {
		fetchData().then((response) => {
			const { resRestaurants, resDates } = response
			const posibleReservationTime = resRestaurants.map((restaurant) => {
				const posibilities = { restaurantId: restaurant.id, slots: [] } as { restaurantId: number, slots: string[] }
				for (let i = restaurant.hour_opening; i <= restaurant.hour_closing - 1; i++) {
					for (let j = 0; j < 60; j = j + 15) {
						if (j === 0) {
							posibilities.slots.push(`${i}:00`)
						} else {
							posibilities.slots.push(`${i}:${j}`)
						}
					}
				}
				return posibilities

			})
			setAvailableTimes(posibleReservationTime)
			setRestaurants(resRestaurants)
			setDates(resDates)

			// Force setting restaurant
			handleRestaurant({
				currentTarget: {
					value: resRestaurants.length > 0 ? resRestaurants[0].id.toString() : "0",
				},
			} as ChangeEvent<HTMLSelectElement>)

			// Force setting date
			setDate(resDates[0].id)
		})

	}, [])


	useEffect(() => {
		const times = availableTimes[availableTimes.findIndex((element) => element.restaurantId === restaurant)]
		if (times) {
			setSelectableTimes(times.slots)
			setTime(times.slots[0])
		}
	}, [restaurant])

	return (
		<> {done ? <div>
			<h1>Thank you for your reservation!</h1>
			<p>{`You have a table for ${people} ${people === 1 ? "person" : "people"} at `}<b>{restaurants.find(res => res.id === restaurant)?.name}</b>{` the day "${dateToString(dates.find(day => day.id === date)!)}" at ${time}.`}</p>
			<p>If the staff members need to contact you they will do it with the provided information:</p>
				<table>
					<tr><td>"Fullname</td><td>{fullname}</td></tr>
					<tr><td>"Email</td><td>{email}</td></tr>
					<tr><td>"Phone Address</td><td>{phone}</td></tr>
				</table>
		</div> :
			restaurants && dates ? <div>
				<div>
					<h1>Booking page</h1>
					<p>Restaurants can only guarantee your reservation for 30 minutes maximum from the selected time on.</p>
				</div>
				<div>
					<form>
						<h2>Contact Information</h2>
						<div>
							<div>
								<label>Fullname</label>
								<input type="text" name="fullname" placeholder="Firstname Lastname" onChange={handleFullname} />
							</div>
							<div>
								<label>Email</label>
								<input type="email" name="email" placeholder="your-email-address@domain.com" onChange={handleEmail} />
							</div>
							<div>
								<label>Phone Number</label>
								<input type="tel" name="phone" placeholder="+Ext XXX XXX XXX" onChange={handlePhone} />
							</div>
						</div>
						<div>
							<div>
								<label>Restaurant</label>
								<select name="restaurant" onChange={handleRestaurant}>
									{restaurants.map((restaurant, index) => <option key={index} value={restaurant.id}>{restaurant.name}</option>)}
								</select>
							</div>
							<div>
								<label>Amount of People</label>
								<select name="people" onChange={handlePeople}>
									{amountOfPeopleOptions.map((quantity, index) => <option key={index} value={quantity}>{quantity}</option>)}
								</select>
							</div>
						</div>
						<div>
							<div>
								<label>Date</label>
								<select name="date" onChange={handleDate}>
									{dates.map((date, index) => <option key={index} value={date.id}>{`${date.day}/${date.month}/${date.year}`}</option>)}
								</select>
							</div>
							<div>
								<label>Time</label>
								<select name="time" onChange={handleTime}>
									{selectableTimes.map((time, index) => <option key={index} value={time}>{time}</option>)}
								</select>
							</div>
						</div>
						<button onClick={handleForm}>Book</button>
					</form>
				</div>
			</div> : <></>}
		</>
	)
}

export default Book
