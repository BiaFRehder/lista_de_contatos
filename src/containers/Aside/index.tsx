import { useState } from 'react'
import CardFilter from '../../components/CardFilter'
import AddButton from '../../components/AddButton'

import * as S from './styles'
import { Button, Title } from '../../styles'

export type Props = {
  category?: 'family' | 'business' | 'friends' | 'all' | 'favorites'
  showFilters: boolean
}

const Aside = ({ showFilters }: Props) => {
  const [menu, setMenu] = useState(false)

  const clickMenu = () => {
    setMenu(!menu)
  }

  return (
    <S.Aside open={menu}>
      {showFilters ? (
        <>
          <S.Header>
            <Title>
              <S.Icon>&#x1F4DE;</S.Icon>
              <span>Contatos</span>
            </Title>
            <S.Burguer
              onClick={clickMenu}
              src="images/menu.png"
              alt="Ícone para menu hamburguer"
            />
          </S.Header>
          <AddButton />
          <S.Filtros open={menu}>
            <CardFilter title="Todos" categories={'all'} />
            <CardFilter title="Família" categories={'family'} />
            <CardFilter title="Amigos" categories={'friends'} />
            <CardFilter title="Trabalho" categories={'business'} />
            <CardFilter title="Favoritos" categories={'favorites'} />
          </S.Filtros>
        </>
      ) : (
        <>
          <S.Header>
            <Title>
              <S.Icon>&#x1F4DE;</S.Icon>
              <span>Contatos</span>
            </Title>
          </S.Header>
          <Button to="/">
            <span>Voltar</span>
            <span>&larr;</span>
          </Button>
        </>
      )}
    </S.Aside>
  )
}

export default Aside
