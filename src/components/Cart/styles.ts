import styled from 'styled-components'
import { cores } from '../../styles'
import { DishBtn } from '../DishCard/styles'

type InputGroupProps = {
  maxwidth?: string
}

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  z-index: 1;
`

export const CartiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-Open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.textColor};
  padding: 32px 8px;
  z-index: 1;
  max-width: 360px;
  width: 100%;
  color: ${cores.buttonTextColor};
  font-size: 14px;
  font-weight: 700;

  ul {
    margin-bottom: 40px;
    list-style: none;
  }

  ${DishBtn} {
    margin: 0;
    width: 344px;
  }

  .empty {
    display: flex;
    justify-content: center;
    padding-top: 8px;
  }

  .mb-24 {
    margin-bottom: 24px;
  }

  .mb-16 {
    margin-bottom: 16px;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const Item = styled.li`
  padding: 8px 8px 12px 8px;
  display: flex;
  background-color: ${cores.buttonTextColor};
  margin-bottom: 16px;
  color: ${cores.textColor};
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    img {
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 0;
      right: 16px;
      cursor: pointer;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  margin-bottom: 16px;
  align-items: flex-end;
`

export const InputGroups = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxwidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${cores.buttonTextColor};
    border: solid 1px transparent;
    text-align: center;

    &:focus {
      outline: none;
    }

    &.error {
      border: 4px solid red;
    }
  }
`
