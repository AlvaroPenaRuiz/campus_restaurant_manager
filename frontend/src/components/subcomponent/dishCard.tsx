import { DishType } from "../../types/Dish"

type Params = {
	dish: DishType,
  showRestaurant?: boolean
}	

const DishCard = ({dish, showRestaurant = false}: Params) => {

    return (
      <div className="card cardFood">
            <div>
            <h3>{dish.name}{showRestaurant ? ` (${dish.restaurant?.name})`: ""}</h3>
            <p><em>{dish.description}</em></p>
            <p><em>{dish.alergies}</em></p>
            </div>
            <p className="foodCardPrice"><b>{dish.price} €</b></p>
      </div>
    )
  }


  export default DishCard
  