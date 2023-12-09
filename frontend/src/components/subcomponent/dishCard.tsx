import { DishType } from "../../types/Dish"

type Params = {
	dish: DishType,
  showRestaurant?: boolean
}	

const DishCard = ({dish, showRestaurant = false}: Params) => {

    return (
      <div>
            <h3>{dish.name}{showRestaurant ? ` (${dish.restaurant?.name})`: ""}</h3>
            <p><em>{dish.description}</em></p>
            <p><em>{dish.alergies}</em></p>
            <p><b>{dish.price}</b></p>
      </div>
    )
  }


  export default DishCard
  