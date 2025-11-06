import styled from 'styled-components'
import variables from '../../styles/variables'

export const TableTitle = styled.h4`
  color: ${variables.colorWhite};
  padding: 0 8px;

  // @media (max-width: 1024px) {
  //   display: none;
  // }
`

export const Inform = styled(TableTitle)`
  color: ${variables.colorBack2};
  border-bottom: 1px solid ${variables.colorBack2};
  padding: 8px;
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 200px;
  padding: 16px 16px 0;

  @media (max-width: 1024px) {
    display: none;
  }
`
