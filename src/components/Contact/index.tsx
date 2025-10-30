import { useEffect, useState } from 'react'
import * as S from './styles'
import ContactsClass from '../../models/Contact'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../../store/reducers/contacts'

type Props = ContactsClass

const Contact = ({
  name: initialName,
  email: initialEmail,
  phone: initialPhone,
  id,
  category,
  favorite
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (initialName.length > 0) {
      setName(initialName)
    }
  }, [initialName])

  useEffect(() => {
    if (initialEmail.length > 0) {
      setEmail(initialEmail)
    }
  }, [initialEmail])

  useEffect(() => {
    if (initialPhone.length > 0) {
      setPhone(initialPhone)
    }
  }, [initialPhone])

  function cancel() {
    setEditing(false)
    setName(initialName)
    setEmail(initialEmail)
    setPhone(initialPhone)
  }

  function save() {
    dispatch(edit({ name, phone, email, id, category, favorite }))
    setEditing(false)
  }

  return (
    <S.Contact>
      <S.Data>
        <S.Name
          disabled={!editing}
          value={name}
          onChange={({ target }) => setName(target.value)}
        >
          {name}
        </S.Name>
      </S.Data>
      <S.Data>
        <S.Name
          disabled={!editing}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        >
          {email}
        </S.Name>
      </S.Data>
      <S.Data>
        <S.Name
          disabled={!editing}
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        >
          {phone}
        </S.Name>
      </S.Data>
      <S.Buttons>
        <label htmlFor="nome">
          <input type="checkbox" placeholder="favoritar" id="nome" />
        </label>
        {editing ? (
          <>
            <button onClick={() => save()}>Salvar</button>
            <button onClick={() => cancel()}>Cancelar</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Editar</button>
            <button onClick={() => dispatch(remove(id))}>Remover</button>
          </>
        )}
      </S.Buttons>
    </S.Contact>
  )
}

export default Contact
