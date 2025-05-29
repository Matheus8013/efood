import { DishBtn } from '../DishCard/styles'
import {
  CartiContainer,
  Item,
  ItemImg,
  Overlay,
  Price,
  Sidebar
} from './styles'

import lixeira from '../../assets/images/lixeira.png'
import image from '../../assets/images/image_1.png'

const Cart = () => {
  return (
    <CartiContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <Item>
            <ItemImg src={image} alt="" />
            <div>
              <h3>Nome da refeição</h3>
              <p>R$ 60,90</p>
              <img src={lixeira} alt="" />
            </div>
          </Item>
        </ul>
        <Price>
          <h3>Valor Total</h3>
          <h3>R$ 132,70</h3>
        </Price>
        <DishBtn>Continuar com a compra</DishBtn>
      </Sidebar>
    </CartiContainer>
  )
}

export default Cart
