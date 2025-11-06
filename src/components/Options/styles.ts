import { styled } from 'styled-components'
import variables from '../../styles/variables'

export const Options = styled.div`
  padding: 8px;
  color: ${variables.colorWhite};
  display: block;

  p {
    font-size: 16px;
    padding: 8px 0;
  }

  div {
    display: inline;
    width: 100%;
    justify-content: space-between;

    label {
      padding: 0 16px 0 8px;
    }
  }
`
