
import { RestaurantType } from "../../types/Restaurant"
import { putRestaurant } from "../../services/restaurant"

type Props = {
	restaurant: RestaurantType,
	setRestaurant: React.Dispatch<React.SetStateAction<RestaurantType>>
}

const ManageRestaurantDetails = ({ restaurant, setRestaurant }: Props) => {

	const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
		const elements = [...(event.currentTarget.previousSibling as HTMLTableElement).querySelectorAll('input, select')] as (HTMLInputElement|HTMLSelectElement)[]
		const [name, location, description, hour_opening, hour_closing] = elements.map((element) => element.value)
		putRestaurant(restaurant.id, name, location, description, hour_opening, hour_closing).then((result)=>{
			setRestaurant(result.data)
		})
	}

	return (
		<>
			{restaurant ? <div>
				<h2>{restaurant.name}</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th><th>location</th><th>Description</th><th>Opening Hour</th><th>Closing Hour</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" defaultValue={restaurant.name} /></td>
							<td><input type="text" defaultValue={restaurant.location} /></td>
							<td><input type="text" defaultValue={restaurant.description} /></td>
							<td><select defaultValue={restaurant.hour_opening} >
								{Array.from({ length: 24 }, (x, i) => i).map((i) => {
									return <option value={i} key={i} selected={i === restaurant.hour_opening ? true : false}>{i}</option>
								})}
							</select></td>
							<td><select defaultValue={restaurant.hour_closing}>
								{Array.from({ length: 24 }, (x, i) => i).map((i) => {
									return <option value={i} key={i}selected={i === restaurant.hour_closing ? true : false}>{i}</option>
								})}
							</select></td>
						</tr>
					</tbody>
				</table>
				<button onClick={handleSave}>Save</button>
			</div> : <></>}
		</>
	)
}


export default ManageRestaurantDetails
