import { FooterContainer, FooterText, LogoContainer } from './style'
import logo from '../../assets/images/logo.png'
import { Branding } from '../Hero/styles'

import redesSociaias from '../../assets/images/redes sociais.png'

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <Branding src={logo} alt="" />
      <img src={redesSociaias} alt="" />
    </LogoContainer>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterContainer>
)

export default Footer
