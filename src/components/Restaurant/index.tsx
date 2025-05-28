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
  restaurantRate: number
  restaurantDescription: string
  restaurantHighLight?: boolean
  restaurantImage: string
  restaurantType: string
  id: number
}

const Restaurant = ({
  restauranTitle,
  restaurantRate,
  restaurantDescription,
  restaurantHighLight,
  restaurantImage,
  restaurantType,
  id
}: Props) => {
  return (
    <Card>
      <Image src={restaurantImage} alt={restauranTitle} />
      <Details>
        {restaurantHighLight ? (
          <>
            <Button>{'Destaque da Semana'}</Button>
            <Button>{restaurantType}</Button>
          </>
        ) : (
          <Button>{restaurantType}</Button>
        )}
      </Details>
      <ContainerTitle>
        <Title>{restauranTitle}</Title>
        <Rate>
          <h3>{restaurantRate}</h3>
          <img src={estrela} alt="" />
        </Rate>
      </ContainerTitle>
      <Description>{restaurantDescription}</Description>
      <Button type="link" to={`/RestaurantPage/${id}`}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
