import * as Yup from 'yup'
import lixeira from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'

import { clear, close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'

import { DishBtn } from '../DishCard/styles'
import {
  CartiContainer,
  InputGroups,
  Item,
  ItemImg,
  Overlay,
  Price,
  Row,
  Sidebar
} from './styles'

const Cart = () => {
  const [purchase, { isSuccess, isLoading, data, reset }] =
    usePurchaseMutation()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [cartPage, setCartPage] = useState(1)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      zipCode: '',
      adressNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O campo da cidade prcisar ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O cep precisa ter pelo menos exatamente 8 caracteres')
        .max(8)
        .required('O campo é obrigatório'),
      adressNumber: Yup.string()
        .min(3, 'O cep precisa ter pelo menos exatamente 3 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().notRequired(),

      //Formulário do cartão

      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O cep precisa ter exatamente 16 caracteres')
        .max(16)
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O código do cartão precisa ter exatamente 3 caracteres')
        .max(3)
        .required('O campo é obrigatório'),
      expireMonth: Yup.string().min(2).max(2).required('O campo é obrigatório'),
      expireYear: Yup.string().min(2).max(2).required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.receiver,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.adressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const nextCartPage = () => {
    setCartPage(cartPage + 1)
  }

  const previousCartPage = () => {
    setCartPage(cartPage - 1)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
    form.resetForm()
    setCartPage(1)
    reset()
  }

  const checkInputHasError = (fildName: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
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

  const renderCartPage = () => {
    switch (cartPage) {
      case 1:
        return (
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
            <DishBtn onClick={nextCartPage}>Continuar com a compra</DishBtn>
          </>
        )
      case 2:
        return (
          <>
            <h3 className="mb-16">Entrega</h3>
            <Row>
              <InputGroups>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  placeholder="Ex: Guilherme Souza"
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </InputGroups>
            </Row>
            <Row>
              <InputGroups>
                <label htmlFor="adress">Endereço</label>
                <input
                  placeholder="Ex: Rua xxxxx"
                  type="text"
                  id="adress"
                  name="adress"
                  value={form.values.adress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
              </InputGroups>
            </Row>
            <Row>
              <InputGroups>
                <label htmlFor="city">Cidade</label>
                <input
                  placeholder="Ex: São Paulo"
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </InputGroups>
            </Row>
            <Row>
              <InputGroups maxwidth="155px">
                <label htmlFor="zipCode">CEP</label>
                <input
                  placeholder="Ex: 00000000"
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                />
              </InputGroups>
              <InputGroups maxwidth="155px">
                <label htmlFor="adressNumber">Número</label>
                <input
                  placeholder="Ex: 00"
                  type="text"
                  id="adressNumber"
                  name="adressNumber"
                  value={form.values.adressNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('adressNumber') ? 'error' : ''}
                />
              </InputGroups>
            </Row>
            <Row className="mb-24">
              <InputGroups>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </InputGroups>
            </Row>
            <DishBtn className="mb-8" onClick={nextCartPage} type="button">
              Continuar com o pagamento
            </DishBtn>
            <DishBtn onClick={previousCartPage} type="button">
              Voltar para o carrinho
            </DishBtn>
          </>
        )
      case 3:
        return (
          <>
            {isSuccess && data ? (
              <>
                <h3 className="mb-16">Pedido realizado - {data.orderId}</h3>
                <p className="mb-24">
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p className="mb-24">
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras
                </p>
                <p className="mb-24">
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p className="mb-24">
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <DishBtn onClick={clearCart} type="button">
                  Concluir
                </DishBtn>
              </>
            ) : (
              <>
                <h3 className="mb-16">
                  Pagamento - Valor a pager {formartaPreco(getTotalPrice())}
                </h3>
                <Row>
                  <InputGroups>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      placeholder="Ex: Guilherme Souza"
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardDisplayName') ? 'error' : ''
                      }
                    />
                  </InputGroups>
                </Row>
                <Row>
                  <InputGroups maxwidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      placeholder="Ex: 0000000000000000"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </InputGroups>
                  <InputGroups maxwidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      placeholder="Ex: 000"
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </InputGroups>
                </Row>
                <Row className="mb-24">
                  <InputGroups>
                    <label htmlFor="expireMonth">Mês de vencimento</label>
                    <input
                      placeholder="Ex: 06"
                      type="text"
                      id="expireMonth"
                      name="expireMonth"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expireMonth') ? 'error' : ''
                      }
                    />
                  </InputGroups>
                  <InputGroups>
                    <label htmlFor="expireYear">Ano de vencimento</label>
                    <input
                      placeholder="Ex: 32"
                      type="text"
                      id="expireYear"
                      name="expireYear"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expireYear') ? 'error' : ''
                      }
                    />
                  </InputGroups>
                </Row>
                <DishBtn className="mb-8" type="submit">
                  {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                </DishBtn>
                <DishBtn onClick={previousCartPage} type="button">
                  Voltar para o carrinho
                </DishBtn>
              </>
            )}
          </>
        )
    }
  }

  return (
    <CartiContainer className={isOpen ? 'is-Open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <form onSubmit={form.handleSubmit}>{renderCartPage()}</form>
        ) : (
          <h3 className="empty">O carrinho está vazio</h3>
        )}
      </Sidebar>
    </CartiContainer>
  )
}

export default Cart
