import RestaurantHero from '../../components/RestaurantHero'
import DishClass from '../../models/Dish'

import image3 from '../../assets/images/image 3.png'
import { Container } from '../../styles'
import DishList from '../../components/DishList'

const DishCard: DishClass[] = [
  {
    id: 1,
    DishImg: image3,
    DishTitle: 'Pizza Marguerita',
    DishInfo:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    DishImg: image3,
    DishTitle: 'Pizza Marguerita',
    DishInfo:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    DishImg: image3,
    DishTitle: 'Pizza Marguerita',
    DishInfo:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    DishImg: image3,
    DishTitle: 'Pizza Marguerita',
    DishInfo:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    DishImg: image3,
    DishTitle: 'Pizza Marguerita',
    DishInfo:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    DishImg: image3,
    DishTitle: 'Pizza Marguerita',
    DishInfo:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const RestaurantPage = () => (
  <>
    <RestaurantHero />
    <Container>
      <DishList dishs={DishCard} />
    </Container>
  </>
)

export default RestaurantPage
