import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as enums from '../../utils/enums/Contact'
import { add } from '../../store/reducers/contacts'

import { MainContainer, Title } from '../../styles'
import * as S from './styles'
import Options from '../../components/Options'
import useMaskPhone from '../../hooks/useMaskPhone'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState(enums.Category.FRIENDS)

  const { phone, handleChange } = useMaskPhone('')

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

  return (
    <MainContainer>
      <Title>Cadastar novo contato</Title>
      <S.FormStyle onSubmit={newContact}>
        <S.FormInput
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Nome"
          required
          autoComplete="off"
        />
        <S.FormInput
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
          required
          autoComplete="off"
        />
        <S.FormInput
          name="phone"
          value={phone}
          onChange={({ target }) => handleChange(target.value)}
          type="text"
          placeholder="Telefone"
          required
          autoComplete="off"
        />
        <p>Status</p>
        <Options
          initialCategory={category}
          onChangeCategory={(cat) => setCategory(cat)}
        />
        <S.AddButton>Adicionar contato</S.AddButton>
      </S.FormStyle>
    </MainContainer>
  )
}

export default Form
