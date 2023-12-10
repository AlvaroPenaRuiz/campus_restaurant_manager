import { DishTagType } from "./DishTag"

export type TagType = {
    id: number,
    created_at: string,
    updated_at: string,
    name: string,
    dishes: DishTagType[]
  }