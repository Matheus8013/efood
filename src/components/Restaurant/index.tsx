import Button from '../Button'
import {
  Card,
  Details,
  ContainerTitle,
  Title,
  Rate,
  Description,
  Image
} from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  restauranTitle: string
  restaurantRate: string
  restaurantDescription: string
  restaurantDetails: string[]
  restaurantImage: string
}

const Restaurant = ({
  restauranTitle,
  restaurantRate,
  restaurantDescription,
  restaurantDetails,
  restaurantImage
}: Props) => {
  return (
    <Card>
      <Image src={restaurantImage} alt={restauranTitle} />
      <Details>
        {restaurantDetails.map((detail) => (
          <Button key={detail}>{detail}</Button>
        ))}
      </Details>
      <ContainerTitle>
        <Title>{restauranTitle}</Title>
        <Rate>
          <h3>{restaurantRate}</h3>
          <img src={estrela} alt="" />
        </Rate>
      </ContainerTitle>
      <Description>{restaurantDescription}</Description>
      <Button type="link" to="/RestaurantPage">
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
