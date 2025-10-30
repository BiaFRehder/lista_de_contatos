import { useDispatch } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'

export type Props = {
  category: 'family' | 'business' | 'friends' | 'all' | 'favorites'
  counter: number
  title: string
}

const CardFilter = ({ title, counter, category }: Props) => {
  const dispatch = useDispatch()

  const filter = () => {
    dispatch(changeFilter(category))
  }

  return (
    <S.Card onClick={filter}>
      <span>{title}</span>
      <span>{counter}</span>
    </S.Card>
  )
}

export default CardFilter
