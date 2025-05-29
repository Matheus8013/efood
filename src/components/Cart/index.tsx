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
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formartaPreco = (DishPrice: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(DishPrice)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, currentValue) => {
      return (acumulador += currentValue.preco)
    }, 0)
  }

  return (
    <CartiContainer className={isOpen ? 'is-Open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <Item key={item.id}>
                  <ItemImg src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formartaPreco(item.preco)}</p>
                    <img
                      onClick={() => removeItem(item.id)}
                      src={lixeira}
                      alt=""
                    />
                  </div>
                </Item>
              ))}
            </ul>
            <Price>
              <h3>Valor Total</h3>
              <h3>{formartaPreco(getTotalPrice())}</h3>
            </Price>
            <DishBtn>Continuar com a compra</DishBtn>
          </>
        ) : (
          <h3 className="empty">O carrinho está vazio</h3>
        )}
      </Sidebar>
    </CartiContainer>
  )
}

export default Cart
