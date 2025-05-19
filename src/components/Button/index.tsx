import { ButtonContainer } from './styles'

export type Props = {
  type?: 'link' | 'tag'
  to?: string
  children: string
}

const Button = ({ children, to, type = 'tag' }: Props) => {
  return (
    <ButtonContainer type={type} to={to as string}>
      {children}
    </ButtonContainer>
  )
}

export default Button
