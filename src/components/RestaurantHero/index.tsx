import { Container } from '../../styles'
import { Branding } from '../Hero/styles'
import { Banner, NavBar, NavLink, NavText, RestaurantHeader } from './styles'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/apresentacao.png'

const RestaurantHero = () => (
  <>
    <RestaurantHeader>
      <Container>
        <NavBar>
          <NavLink to="/">Restaurantes</NavLink>
          <Branding src={logo} alt="" />
          <NavText>0 produto(s) no carrinho</NavText>
        </NavBar>
      </Container>
    </RestaurantHeader>
    <Banner src={banner} alt="" />
  </>
)

export default RestaurantHero
