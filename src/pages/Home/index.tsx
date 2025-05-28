import { DishItem } from '../../components/DishCard'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { Container } from '../../styles'
import { useEffect, useState } from 'react'

export type Resturante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: DishItem[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Resturante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <Container>
        <RestaurantList restaurants={restaurantes} />
      </Container>
    </>
  )
}

export default Home
