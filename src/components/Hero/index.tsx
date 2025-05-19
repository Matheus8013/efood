import logo from '../../assets/images/logo.png'
import { Branding, HeroContainer, HeroText } from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <Branding src={logo} alt="" />
      <HeroText>
        Viva experiências gastronômicas no conforto da sua casa
      </HeroText>
    </HeroContainer>
  )
}

export default Hero
