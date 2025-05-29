import DishCard, { DishItem } from '../DishCard'
import { List } from './styles'

export type Props = {
  dishs: DishItem[]
}

const DishList = ({ dishs }: Props) => (
  <List>
    {dishs.map((dish) => (
      <DishCard
        key={dish.id}
        DishImg={dish.foto}
        DishTitle={dish.nome}
        DishInfo={dish.descricao}
        DishSize={dish.porcao}
        DishPrice={dish.preco}
        dishItem={dish}
      />
    ))}
  </List>
)

export default DishList
