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

  img {
    width: 16px;
    height: 16px;
  }

  input {
    display: none;
  }
`

export const Table = styled.form`
  display: grid;
  grid-template-columns: 1fr 200px;
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

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1024px) {
    display: block;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      padding: 4px;
      color: ${variables.textColor};
    }
  }
`

export const Edit = styled.div`
  display: flex;
  color: ${variables.colorWhite};
  align-items: center;
  font-size: 12px;

  label {
    padding: 0 4px;
    padding-top: 4px;
  }

  @media (max-width: 1024px) {
    div {
      display: flex;
      justify-content; center;
    }
  }
`

export const EditButtons = styled.div`
  padding: 8px;
  justify-content: center;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: ${variables.colorBack2};
    border-radius: 8px;
    border: 1px solid ${variables.colorBack1};
    color: ${variables.colorWhite};
    font-size: 18px;
    height: 30px;
    width: 30px;
    align-items: center;
    margin: 4px;
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
