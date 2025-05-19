import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const RestaurantHeader = styled.div`
  width: 100%;
  height: 186px;
  background-image: url(${fundo});
`

export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  color: ${cores.textColor};
`

export const NavText = styled.h3`
  font-size: 18px;
  font-weight: 900;
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-top: 0;
  }

  padding-top: 40px;
`

export const Banner = styled.img`
  width: 100%;
  height: 280px;
`
