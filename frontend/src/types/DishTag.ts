import { DishType } from "./Dish"
import { TagType } from "./Tag"

export type DishTagType = {
    id: number,
    created_at: string,
    updated_at: string,
    dish_id: number,
    tag_id:	number,
    dish: DishType,
    tag: TagType
  }