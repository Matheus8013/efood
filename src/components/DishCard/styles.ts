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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.isActive {
    display: flex;
  }

  ${DishBtn} {
    margin: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  height: 344px;
  background-color: ${cores.textColor};
  color: #fff;

  > img {
    position: absolute;
    top: 0;
    right: 16px;
    margin-top: 8px;
    cursor: pointer;
  }

  .modalContainer {
    padding: 32px 32px;
    display: flex;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    .info {
      margin-left: 32px;

      h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 16px;
      }

      span {
        display: block;
        margin-bottom: 32px;
      }
    }
  }
`
