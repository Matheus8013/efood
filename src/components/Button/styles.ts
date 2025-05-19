import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled(Link)<Props>`
  background-color: ${cores.textColor};
  color: ${cores.fundoClaro};
  font-size: ${(props) => (props.type === 'link' ? '14px' : '12px')};
  cursor: ${(props) => (props.type === 'link' ? 'pointer' : 'default')};
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 8px;
  font-weight: bold;
  display: inline-block;
`
