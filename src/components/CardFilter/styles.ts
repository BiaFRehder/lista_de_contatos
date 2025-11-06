import { styled } from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  $active: boolean
}

export const Card = styled.div<Props>`
  background-color: ${(props) =>
    props.$active ? variables.colorBack2 : variables.colorBack1};
  color: ${variables.colorWhite};
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-right: -16px;
  margin-top: 16px;
  padding: 16px;

  span {
    padding-right: 16px;

    @media (max-width: 1024px) {
      padding-right: 0;
    }
  }

  @media (max-width: 1024px) {
    border-radius: 8px;
    margin: 0;
    padding: 8px;
  }
`
