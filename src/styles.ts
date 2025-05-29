import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  textColor: '#E66767',
  fundoClaro: '#FFF8F2',
  buttonTextColor: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    body {
      background-color: ${cores.fundoClaro};
      color: ${cores.textColor};
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
