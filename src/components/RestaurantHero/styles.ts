import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'
import { Container, cores } from '../../styles'

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
  cursor: pointer;
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

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.5;
  }

  ${Container} {
    z-index: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0;
    color: #fff;
    font-size: 32px;
  }

  .title {
    font-weight: 900;
  }

  .subTitle {
    font-weight: 100;
  }
`
