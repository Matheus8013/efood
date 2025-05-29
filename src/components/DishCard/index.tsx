import * as S from './styles'

import close from '../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

export type DishItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  DishImg: string
  DishTitle: string
  DishInfo: string
  DishSize: string
  DishPrice: number
  dishItem: DishItem
}

const DishCard = ({
  DishImg,
  DishTitle,
  DishInfo,
  DishSize,
  DishPrice,
  dishItem
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dishItem))
    dispatch(open())
    closeModal()
  }

  const [modal, setModal] = useState({
    isActive: false
  })

  const closeModal = () => {
    setModal({
      isActive: false
    })
  }

  const getDescricao = (DishInfo: string) => {
    if (DishInfo.length > 140) {
      return DishInfo.slice(0, 120) + '...'
    }
  }

  const formartaPreco = (DishPrice: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(DishPrice)
  }

  return (
    <>
      <S.Card>
        <S.DishImg src={DishImg} alt="" />
        <S.DishTitle>{DishTitle}</S.DishTitle>
        <S.DishInfo>{getDescricao(DishInfo)}</S.DishInfo>
        <S.DishBtn onClick={() => setModal({ isActive: true })} type="button">
          Ver mais
        </S.DishBtn>
      </S.Card>
      <S.Modal className={modal.isActive ? 'isActive' : ''}>
        <S.ModalContent>
          <div className="modalContainer">
            <img src={DishImg} alt="" />
            <div className="info">
              <h3>{DishTitle}</h3>
              <p>{DishInfo}</p>
              <span>Serve: de {DishSize}</span>
              <S.DishBtn onClick={addToCart} type="button">
                Adicionar ao carrinho - {formartaPreco(DishPrice)}
              </S.DishBtn>
            </div>
          </div>
          <img onClick={closeModal} src={close} alt="" />
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default DishCard
