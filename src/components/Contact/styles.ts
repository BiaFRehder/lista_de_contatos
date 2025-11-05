import { styled } from 'styled-components'
import variables from '../../styles/variables'

export const Contact = styled.div`
  padding: 16px 24px;
  margin-top: 32px;
  border-radius: 16px;
  background-color: ${variables.colorBack2};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const Star = styled.label`
  position: absolute;
  top: 8px;
  left: 8px;

  span {
    color: ${variables.colorWhite};
    font-size: 16px;
  }

  input {
    display: none;
  }
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const DataTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  div {
    display: flex;
  }

  label {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;

    label {
      display: flex;
      justify-content: center;
      width: 40px;
      font-size: 24px;
      padding: 4px;
      color: ${variables.textColor};
    }
  }
`

export const Buttons = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: right;

  button {
    background-color: ${variables.colorBack2};
    border-radius: 8px;
    border: 1px solid ${variables.colorBack1};
    color: ${variables.colorWhite};
    font-size: 18px;
    height: 30px;
    width: 30px;
    align-items: center;
    margin-right: 8px;
  }

  @media (max-width: 1024px) {
    padding: 0 8px;
    margin-top: 8px;
  }
`

export const Name = styled.input`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: ${variables.colorWhite};
  background-color: ${variables.colorBack2};
  padding: 8px;
  align-content: center;
  width: 100%;

  &:focus {
    border: 0.5px solid ${variables.colorWhite};
    border-radius: 8px;
    outline: none;
  }
`
