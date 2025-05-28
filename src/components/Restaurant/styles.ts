import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.textColor};
  background-color: #fff;
  position: relative;
  max-width: 472px;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
`

export const Details = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Rate = styled.div`
  display: flex;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  margin: 16px 8px 16px 8px;
  min-height: 120px;
`
