import { styled } from 'styled-components'

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: red;
  width: 100%;
  align-items: center;
`

export const Data = styled.div`
  padding: 8px;
`

export const Buttons = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-around;
`

export const Name = styled.textarea`
  font-sixe: 18px;
  font-weight: bold;
  margin-left: 8px;
  resize: none;
  border: none;
`
