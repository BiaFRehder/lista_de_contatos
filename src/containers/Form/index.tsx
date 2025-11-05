import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as enums from '../../utils/enums/Contact'
import { add } from '../../store/reducers/contacts'

import { MainContainer, Title } from '../../styles'
import * as S from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState(enums.Category.FRIENDS)

  const newContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      add({
        name,
        email,
        phone,
        category,
        favorite: false
      })
    )
    navigate('/')
  }

  const categoryLabels: Record<enums.Category, string> = {
    [enums.Category.FAMILY]: 'Família',
    [enums.Category.FRIENDS]: 'Amigos',
    [enums.Category.BUSINESS]: 'Trabalho'
  }

  return (
    <MainContainer>
      <Title>Cadastar novo contato</Title>
      <S.FormStyle onSubmit={newContact}>
        <S.FormInput
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Nome"
        />
        <S.FormInput
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
        />
        <S.FormInput
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          type="text"
          placeholder="Telefone"
        />
        <S.Options>
          <p>Status</p>
          {Object.values(enums.Category).map((cat) => (
            <div key={cat}>
              <input
                type="radio"
                name="category"
                value={cat}
                id={`category-${cat}`}
                onChange={(e) => setCategory(e.target.value as enums.Category)}
                checked={category === cat}
              />
              <label htmlFor={`category-${cat}`}>{categoryLabels[cat]}</label>
            </div>
          ))}
        </S.Options>
        <S.AddButton>Adicionar contato</S.AddButton>
      </S.FormStyle>
    </MainContainer>
  )
}

export default Form
