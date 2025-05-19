import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${cores.textColor};
  display: flex;
  flex-direction: column;
  color: ${cores.fundoClaro};
`

export const DishImg = styled.img`
  width: 304px;
  height: 167px;
  margin-top: 10px;
  margin-left: 8px;
  margin-bottom: 8px;
`

export const DishTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding-left: 8px;
`

export const DishInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  line-height: 22px;
  color: #ffebd9;
`

export const DishBtn = styled.button`
  text-align: center;
  width: 304px;
  height: 24px;
  background-color: ${cores.fundoClaro};
  color: ${cores.textColor};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-top: 10px;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`
