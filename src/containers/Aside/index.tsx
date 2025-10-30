import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filter'

export type Props = {
  category: 'family' | 'business' | 'friends' | 'all' | 'favorites'
}

const Aside = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  const countContacts = (category: string) => {
    if (category === 'all') return itens.length
    if (category === 'favorites') return itens.filter((c) => c.favorite).length
    return itens.filter((c) => c.category === category).length
  }

  const teste = dispatch(changeFilter('all'))
  console.log(teste)

  return (
    <S.Aside>
      <h1>&#x1F4DE;Contatos</h1>
      <S.Filtros>
        <CardFilter
          title="Todos"
          counter={countContacts('all')}
          category={'all'}
        />
        <CardFilter
          title="Família"
          counter={countContacts('family')}
          category={'family'}
        />
        <CardFilter
          title="Amigos"
          counter={countContacts('friends')}
          category={'friends'}
        />
        <CardFilter
          title="Trabalho"
          counter={countContacts('business')}
          category={'business'}
        />
        <CardFilter
          title="Favoritos"
          counter={countContacts('favorites')}
          category={'favorites'}
        />
      </S.Filtros>
      <button>Adicionar contato</button>
    </S.Aside>
  )
}

export default Aside
