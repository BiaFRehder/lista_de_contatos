import styled from 'styled-components'
import variables from '../../styles/variables'
import { Input } from '../../styles'

export const FormStyle = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variables.textColor};
`

export const AddButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  color: ${variables.textColor};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-self: right;
`

export const FormInput = styled(Input)`
  font-size: 16px;
`
