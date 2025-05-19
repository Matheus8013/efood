import Hero from '../../components/Hero'
import RestaurantClass from '../../models/Restaurant'

import Image from '../../assets/images/imagem.png'
import Image2 from '../../assets/images/image 1.png'
import RestaurantList from '../../components/RestaurantList'
import { Container } from '../../styles'

const RestaurantCard: RestaurantClass[] = [
  {
    id: 1,
    restaurantImage: Image,
    restaurantTitle: 'Hioki Sushi ',
    restaurantRating: '4.9',
    restaurantDetails: ['Destaque da Semana', 'Japonesa'],
    restaurantDescription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    restaurantImage: Image2,
    restaurantTitle: 'La Dolce Vita Trattoria ',
    restaurantRating: '4.6',
    restaurantDetails: ['Italiana'],
    restaurantDescription:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    restaurantImage: Image2,
    restaurantTitle: 'La Dolce Vita Trattoria ',
    restaurantRating: '4.6',
    restaurantDetails: ['Italiana'],
    restaurantDescription:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    restaurantImage: Image2,
    restaurantTitle: 'La Dolce Vita Trattoria ',
    restaurantRating: '4.6',
    restaurantDetails: ['Italiana'],
    restaurantDescription:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    restaurantImage: Image2,
    restaurantTitle: 'La Dolce Vita Trattoria ',
    restaurantRating: '4.6',
    restaurantDetails: ['Italiana'],
    restaurantDescription:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    restaurantImage: Image2,
    restaurantTitle: 'La Dolce Vita Trattoria ',
    restaurantRating: '4.6',
    restaurantDetails: ['Italiana'],
    restaurantDescription:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <Container>
      <RestaurantList restaurants={RestaurantCard} />
    </Container>
  </>
)

export default Home
