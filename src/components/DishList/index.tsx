import DishClass from '../../models/Dish'
import DishCard from '../DishCard'
import { List } from './styles'

export type Props = {
  dishs: DishClass[]
}

const DishList = ({ dishs }: Props) => (
  <List>
    {dishs.map((dish) => (
      <DishCard
        key={dish.id}
        DishImg={dish.DishImg}
        DishTitle={dish.DishTitle}
        DishInfo={dish.DishInfo}
      />
    ))}
  </List>
)

export default DishList
