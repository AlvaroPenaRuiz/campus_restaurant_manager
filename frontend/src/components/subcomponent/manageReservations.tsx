import { useEffect, useState } from "react"
import { DateType } from "../../types/Date"
import { UserType } from "../../types/User"
import { getAmountOfDates } from "../../services/date"

import { ReservationType } from "../../types/Reservation"
import { delReservation } from "../../services/reservation"

type Props = {
	user: UserType
}

const ManageReservations = ({user}: Props) => {

	const [dates, setDates] = useState([] as DateType[])
	const [reservationsDate, setReservationsDate] = useState([] as ReservationType[])
	
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const date = dates.find(date => date.id === Number(event.currentTarget.value)) as DateType
		setReservationsDate(date.reservations.filter((reservation) => reservation.restaurant.id === user.restaurant_id))
	}

	const handlerReject = (reservationId: number) =>{
		const newReservationsDate = [...reservationsDate]
		newReservationsDate.splice(newReservationsDate.findIndex((reservationDate) => reservationDate.id === reservationId), 1)
		delReservation(reservationId)
		setReservationsDate(newReservationsDate)
	}

	const fetchData = async () => {

		const resDates: DateType[] = (await getAmountOfDates(30)).data

		return {
			resDates
		}
	}

	useEffect(() => {
		fetchData().then((response) => {
			const { resDates } = response

			setDates(resDates.filter((date) => date.workable))
			setReservationsDate(resDates[0].reservations.filter((reservation) => reservation.restaurant.id === user.restaurant_id))

		})
	}, [])

	return (
		<>
			{ dates.length > 0 ?
				<div id="reservationBlock" className="contentBlock centeredText">
					<div>
						<h2>Reservations</h2>
						<p>Here you can see your reservations for an specific day and reject them if needed.</p>
					</div>
					<div>
						<div id="reservationSelect">
						<select onChange={handleSelectChange}>
							{dates.map((date, index) => {
								return <option key={index} value={date.id}>{`${date.day}/${date.month}/${date.year}`}</option>
							})}
						</select>
						</div>
						{reservationsDate.length > 0 ? <div>
						<table className="bigTable tableW100">
							<thead>
								<tr><th>Fullname</th><th>Email</th><th>Phone</th><th>People</th><th>Hour</th><th>Minute</th><th>Reject</th></tr>
							</thead>
							<tbody>
								{reservationsDate.map((reservationDate, index) => {
									return <tr key={index}><td>{reservationDate.fullname}</td><td>{reservationDate.email}</td><td>{reservationDate.phone}</td><td>{reservationDate.amount_people}</td><td>{reservationDate.hour}</td><td>{reservationDate.minute}</td><td><button onClick={() => handlerReject(reservationDate.id)}>Reject</button></td></tr> 
								})}
							</tbody>
						</table>
						</div> : <p>The restaurant has no reservations for this day.</p>}
					</div>
				</div> : <></>}
		</>
	)
}


export default ManageReservations
