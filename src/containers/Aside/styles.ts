import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  open?: boolean
}

export const Aside = styled.aside<Props>`
  height: 100vh;
  background-color: ${variables.colorBack1};
  border-right: 1px solid ${variables.colorBack2};
  padding: 40px 16px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 40px;
    height: ${({ open }) => (open ? '300px' : '200px')};
    border: none;
    border-bottom: 1px solid ${variables.colorBack2};
  }
`

export const Header = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }
`

export const Burguer = styled.span`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    color: ${variables.colorWhite};
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
`

export const Icon = styled.span`
  font-size: 24px;
  align-self: center;
`

export const Filtros = styled.div<Props>`
  justify-content: space-between;
  display: block;
  margin-top: 24px;
  width: 100%;
  border-top: 1px solid ${variables.colorBack2};

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 16px;
    border: none;
    opacity: ${({ open }) => (open ? '1' : '0')};
    transition: opacity 0 ease-in-out;
  }
`
