import * as S from './styles'

type Props = {
  DishImg: string
  DishTitle: string
  DishInfo: string
}

const DishCard = ({ DishImg, DishTitle, DishInfo }: Props) => (
  <S.Card>
    <S.DishImg src={DishImg} alt="" />
    <S.DishTitle>{DishTitle}</S.DishTitle>
    <S.DishInfo>{DishInfo}</S.DishInfo>
    <S.DishBtn type="button">Adicionar ao carrinho</S.DishBtn>
  </S.Card>
)

export default DishCard
