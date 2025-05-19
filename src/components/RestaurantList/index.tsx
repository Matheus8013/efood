import RestaurantClass from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { List } from './style'

export type Props = {
  restaurants: RestaurantClass[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        restauranTitle={restaurant.restaurantTitle}
        restaurantRate={restaurant.restaurantRating}
        restaurantDescription={restaurant.restaurantDescription}
        restaurantDetails={restaurant.restaurantDetails}
        restaurantImage={restaurant.restaurantImage}
      />
    ))}
  </List>
)

export default RestaurantList
