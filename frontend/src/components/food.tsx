import { useEffect, useRef, useState } from 'react'
import { getDishes } from '../services/food'
import { DishType } from '../types/Dish'
import { getTag } from '../services/tag'
import { TagType } from '../types/Tag'
import Multiselect from 'multiselect-react-dropdown'
import DishCard from './subcomponent/dishCard'
import { useNavigate } from 'react-router-dom'

type TagOptions = {
	name: string,
	id: number
}

const Food = () => {

	const navigate = useNavigate()

	const [food, setFood] = useState([] as DishType[])
	const [tags, setTags] = useState([] as TagType[])
	const [tagsOptions, setTagsOptions] = useState([] as TagOptions[])
	const [selectedTags, setSelectedTags] = useState([] as TagType[])
	const [taggedFood, setTaggedFood] = useState([] as DishType[])

	const handlerMultiselect = ((selectedList: TagOptions[]) => {
		setSelectedTags(selectedList.map(item => tags.find(tag => tag.id == item.id)!))
	})

	const fetchData = async () => {
		const resFood: DishType[] = (await getDishes()).data
		const resTag: TagType[] = (await getTag()).data
		return { resFood: resFood.sort((a, b) => a.name > b.name ? 1 : -1), resTag }
	}

	const filterByMultipleTags = (tags: TagType[]) : DishType[] =>{
		if (tags.length !== 0){
			if (tags.length === 1) {
				const tag = tags[0]
				return food.filter((dish: DishType) => dish.tags.map(tag => tag.tag_id).includes(tag.id))
			}else {
				const tag = tags.pop()
				return filterByMultipleTags(tags).filter((dish: DishType) => dish.tags.map(tag => tag.tag_id).includes(tag!.id))
			}
		} else {
			return []
		}
	}

	useEffect(() => {
		fetchData().then((response) => {
			const { resFood, resTag } = response
			const optionTags = resTag.filter(tag => tag.dishes.length > 0).map(tag => { return { name: tag.name, id: tag.id } as TagOptions })

			setFood(resFood)
			setTaggedFood(resFood)
			setTags(resTag.filter(tag => tag.dishes.length > 0))
			setTagsOptions(optionTags)
		})

	}, [])

	useEffect(() => {
		if(selectedTags.length !== 0){
			const distinct = filterByMultipleTags(selectedTags)

			setTaggedFood(distinct)
		} else {
			setTaggedFood(food)
		}

	}, [selectedTags])

	return (
		<>
			{food && tags && taggedFood ? <div className='subbody'>
				<div>
					<h1>Food Page</h1>
				</div>
				<div className='contentBlock'>
					<div id='foodMultiselectContainer'>
						<Multiselect
							className='foodTagsMultiSelect'
							options={tagsOptions} // Options to display in the dropdown
							selectedValues={selectedTags} // Preselected value to persist in dropdown
							onSelect={handlerMultiselect} // Function will trigger on select event
							onRemove={handlerMultiselect} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
							avoidHighlightFirstOption={true} // Option to not show the higlight in the first option
							emptyRecordMsg="There is no tags with that prefix." // Message showed when the type in the search box does not mach with the tags
							showArrow={true} // Shows an arrow at the end of the box
						/>
					</div>
					<div className='cardContainer'>
						{ taggedFood.map((dish, index) => {
							return <div id='foodCardWrapper' onClick={() => navigate(`/restaurant/${dish.restaurant.id}`)} key={index}><DishCard dish={dish} showRestaurant key={index} /></div>
						})}
					</div>
				</div>
			</div>
				: <></>}
		</>
	)
}

export default Food
