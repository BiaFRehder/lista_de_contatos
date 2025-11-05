import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Contact'
import * as S from './styles'

export type Props = {
  categories: 'family' | 'business' | 'friends' | 'all' | 'favorites'
  title: string
  value?: enums.Category
}

const CardFilter = ({ title, categories, value }: Props) => {
  const dispatch = useDispatch()
  const { category } = useSelector((state: RootReducer) => state.filter)
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  const filterCategory = () => {
    dispatch(changeFilter({ category: categories, value }))
  }

  const countContacts = () => {
    switch (categories) {
      case 'all':
        return itens.length
      case 'favorites':
        return itens.filter((c) => c.favorite).length
      default:
        return itens.filter((c) => c.category === categories).length
    }
  }

  const isActive = () => category === categories

  const active = isActive()
  const counter = countContacts()

  return (
    <S.Card $active={active} onClick={filterCategory}>
      <span>{title}</span>
      <span>{counter}</span>
    </S.Card>
  )
}

export default CardFilter
