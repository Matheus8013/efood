import RestaurantHero from '../../components/RestaurantHero'

import { Container } from '../../styles'
import DishList from '../../components/DishList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Resturante } from '../Home'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurantData, setRestaurantData] = useState<Resturante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantData(res))
  }, [id])

  if (!restaurantData) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantHero restaurant={restaurantData} />
      <Container>
        <DishList dishs={restaurantData?.cardapio} />
      </Container>
    </>
  )
}

export default RestaurantPage
