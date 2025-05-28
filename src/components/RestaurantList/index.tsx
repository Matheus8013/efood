import { Resturante } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List } from './style'

export type Props = {
  restaurants: Resturante[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id}
        restauranTitle={restaurant.titulo}
        restaurantRate={restaurant.avaliacao}
        restaurantDescription={restaurant.descricao}
        restaurantType={restaurant.tipo}
        restaurantImage={restaurant.capa}
        restaurantHighLight={restaurant.destacado}
      />
    ))}
  </List>
)

export default RestaurantList
