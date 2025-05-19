import { styled } from 'styled-components'

import fundo from '../../assets/images/fundo.png'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 360px;
  align-items: center;
  background-image: url(${fundo});
`

export const Branding = styled.img`
  margin-top: 40px;
`

export const HeroText = styled.h3`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  max-width: 600px;
`
