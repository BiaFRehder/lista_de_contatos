import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style:none;
  }
`

export const Container = styled.div`
  background-color: ${variables.colorBack1};
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 1024px) {
    grid-template-columns: none;
  }
`

export const Title = styled.h1`
  color: ${variables.colorWhite};

  @media (max-width: 1024px) {
    font-size: 24px;
    padding: 16px 0;
  }
`

export const MainContainer = styled.main`
  padding: 40px;
  overflow-y: scroll;
  background-color: ${variables.colorBack1};

  @media (max-width: 1024px) {
    overflow-y: hidden;
    padding-top: 16px;
  }
`

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border: 1px solid #666666ff;
  width: 100%;
`

export const Button = styled(Link)`
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: space-between;
  background-color: ${variables.colorWhite};
  color: ${variables.colorBack1};
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s linear;
  text-decoration: none;
  z-index: 1;

  &:hover {
    transform: scale(1.02);
  }

  span {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 8px 16px;
    margin-top: 8px;
    border-radius: 8px;
    justify-content: space-between;
  }
`

export default GlobalStyle
