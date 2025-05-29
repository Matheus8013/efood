import { Container } from '../../styles'
import { Branding } from '../Hero/styles'
import { Banner, NavBar, NavLink, NavText, RestaurantHeader } from './styles'
import logo from '../../assets/images/logo.png'

import { Resturante } from '../../pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

type Prosps = {
  restaurant: Resturante
}

const RestaurantHero = ({ restaurant }: Prosps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <RestaurantHeader>
        <Container>
          <NavBar>
            <NavLink to="/">Restaurantes</NavLink>
            <Branding src={logo} alt="" />
            <NavText onClick={openCart}>
              {items.length} produto(s) no carrinho
            </NavText>
          </NavBar>
        </Container>
      </RestaurantHeader>
      <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <Container>
          <div className="subTitle">{restaurant.tipo}</div>
          <div className="title">{restaurant.titulo}</div>
        </Container>
      </Banner>
    </>
  )
}

export default RestaurantHero
