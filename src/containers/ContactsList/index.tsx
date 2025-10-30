import { useDispatch, useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

import * as S from './styles'

const ContactsList = () => {
  const dispatch = useDispatch()
  const { category, term } = useSelector((state: RootReducer) => state.filter)
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  const filterContacts = () => {
    let filtered = itens

    if (term !== undefined) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().search(term.toLowerCase()) >= 0 ||
          item.email.toLowerCase().search(term.toLowerCase()) >= 0 ||
          item.phone.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (category && category !== 'all') {
        if (category === 'favorites') {
          filtered = filtered.filter((c) => c.favorite)
        } else {
          filtered = filtered.filter((c) => c.category === category)
        }
      }

      return filtered
    } else {
      return itens
    }
  }

  const contacts = filterContacts()

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Pesquisar"
        value={term}
        onChange={(event) => dispatch(changeTerm(event.target.value))}
      />
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <Contact
              name={c.name}
              email={c.email}
              phone={c.phone}
              category={c.category}
              favorite={c.favorite}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ContactsList
