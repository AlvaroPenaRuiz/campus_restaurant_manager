import { useEffect, useState } from "react"
import { getAmountOfDates } from "../services/date"
import { getRestaurant } from "../services/restaurant"
import { DateType } from "../types/Date"
import { RestaurantType } from "../types/Restaurant"
import { UserType } from "../types/User"
import { DishType } from "../types/Dish"
import { ReservationType } from "../types/Reservation"
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import ManageRestaurantDetails from "./subcomponent/manageRestaurantDetails"
import ManageDailyMenu from "./subcomponent/manageDailyMenu"
import ManageReservations from "./subcomponent/manageReservations"
import ManageDishes from "./subcomponent/manageDishes"

type Props = {
    user: UserType,
}

const Manage = ({user}: Props) => {

	const navigate = useNavigate()

	const [restaurant, setRestaurant] = useState({} as RestaurantType)
	const [dishes, setDishes] = useState([] as DishType[])
	const [dates, setDates] = useState([] as DateType[])
	const [reservations, setReservations] = useState([] as ReservationType[])

	const fetchData = async () => {
		const resRestaurant: RestaurantType = (await getRestaurant(user.restaurant_id!)).data
		const resDates: DateType[] = (await getAmountOfDates(30)).data
		return { resRestaurant, resDishes: resRestaurant.dishes.sort((a, b) => a.name > b.name ? 1 : -1), resDates, resReservations: resRestaurant.reservations.sort((a, b) => {
			return new Date(a.date.year, a.date.month, a.date.day) > new Date(b.date.year, b.date.month, b.date.day) ? 1 : -1
		}) }
	}

	useEffect(()=>{
		fetchData().then((response)=>{
			const {resRestaurant, resDishes, resDates, resReservations} = response

			setRestaurant(resRestaurant)
			setDishes(resDishes)
			setDates(resDates)
			setReservations(resReservations)

		})
	}, [])

	return (
		<>
			<div>
				<h1>Managing Page</h1>
				<nav>
					<button onClick={() => navigate('/manage/details')}>Details</button>
					<button onClick={() => navigate('/manage/calendar')}>Calendar</button>
					<button onClick={() => navigate('/manage/reservations')}>Reservations</button>
					<button onClick={() => navigate('/manage/menu')}>Menu</button>
				</nav>
			</div>
			<div>
				<Routes>
				<Route path="/" element={<Outlet />}>
					<Route index element={<Navigate to="details" />} />
					<Route path="details" element={<ManageRestaurantDetails restaurant={restaurant} setRestaurant={setRestaurant}/>} />
					<Route path="calendar" element={<ManageDailyMenu/>} />
					<Route path="reservations" element={<ManageReservations/>} />
					<Route path="menu" element={<ManageDishes/>} />
				</Route>

				</Routes>
				{/* Datos Restaurante */}
				{/* Calendario comidas pudiendo añadir y quitar platos */}
				{/* Aceptacion o cancelacion de reservas */}
				{/* Crear, borrar o modificar platos incluyendo tags */}
			</div>
		</>
	)
}

export default Manage
