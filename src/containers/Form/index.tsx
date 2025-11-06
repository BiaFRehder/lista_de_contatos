import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as enums from '../../utils/enums/Contact'
import { add } from '../../store/reducers/contacts'

import { MainContainer, Title } from '../../styles'
import * as S from './styles'
import Options from '../../components/Options'

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
