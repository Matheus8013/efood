import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${cores.buttonTextColor};
  height: 298px;
  margin-top: 80px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 40px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 80px;
  color: ${cores.textColor};
  max-width: 490px;
`
