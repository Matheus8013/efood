import { Container } from '../../styles'
import { Branding } from '../Hero/styles'
import { Banner, NavBar, NavLink, NavText, RestaurantHeader } from './styles'
import logo from '../../assets/images/logo.png'

import image from '../../assets/images/image_1.png'

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
    <Banner style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <div className="subTitle">Italiana</div>
        <div className="title">La Dolce Vita Trattoria</div>
      </Container>
    </Banner>
  </>
)

export default RestaurantHero
