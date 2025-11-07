import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import ContactsClass from '../../models/Contact'
import { useDispatch } from 'react-redux'
import { edit, remove, changeStatus } from '../../store/reducers/contacts'
import useMaskPhone from '../../hooks/useMaskPhone'

import * as S from './styles'
import Options from '../Options'

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
  const [status, setStatus] = useState(category)

  const { phone, setPhone, handleChange } = useMaskPhone('')

  // UseEffect para toda a vez que o valor inicial for alterado
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
  }, [initialPhone, setPhone])

  //  Função responsável por puxar a action de cancelar
  function cancel() {
    setEditing(false)
    setName(initialName)
    setEmail(initialEmail)
    setPhone(initialPhone)
  }

  // Função responsável por puxar a action de editar
  function save() {
    dispatch(edit({ name, phone, email, id, category: status, favorite }))
  }

  // Função responsável por puxar a action de alterar status
  function contactStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, favorites: event.target.checked }))
  }

  // Função que não permite que o campo editado fique vazio
  function saveEdition(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    save()
    setEditing(false)
  }

  return (
    <S.Contact>
      <S.Star htmlFor={id.toString()}>
        {favorite ? (
          <img src="images/filled_star.png" alt="Ícone de estrela preenchida" />
        ) : (
          <img src="images/star.png" alt="Ícone de estrela vazada" />
        )}
        <input
          checked={favorite === true}
          onChange={contactStatus}
          type="checkbox"
          placeholder="favoritar"
          id={id.toString()}
        />
      </S.Star>
      <S.Table onSubmit={saveEdition}>
        <S.DataTable>
          <div>
            <label htmlFor="name">
              <img src="images/person.png" alt="Ícone de pessoa" />
            </label>
            <S.Name
              id="name"
              disabled={!editing}
              value={name}
              onChange={({ target }) => setName(target.value)}
              required={editing}
              type="text"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email">
              <img src="images/envelope.png" alt="Ícone de envelope" />
            </label>
            <S.Name
              id="email"
              disabled={!editing}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required={editing}
              type="email"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="phone">
              <img src="images/telephone.png" alt="Ícone de telefone" />
            </label>
            <S.Name
              id="phone"
              disabled={!editing}
              value={phone}
              onChange={({ target }) => handleChange(target.value)}
              required={editing}
              type="text"
              autoComplete="off"
            />
          </div>
        </S.DataTable>
        <S.Buttons>
          {editing ? (
            <S.Edit>
              <S.EditButtons>
                <Options
                  initialCategory={status}
                  onChangeCategory={(cat) => setStatus(cat)}
                />
              </S.EditButtons>
              <S.EditButtons>
                <button type="submit" title="Salvar" onClick={() => save()}>
                  <img src="images/save.png" alt="Ícone de check" />
                </button>
                <button title="Cancelar" onClick={() => cancel()}>
                  <img src="images/cancel.png" alt="Ícone de x" />
                </button>
              </S.EditButtons>
            </S.Edit>
          ) : (
            <>
              <button title="Editar" onClick={() => setEditing(true)}>
                <img src="images/edit.png" alt="Ícone de lápis" />
              </button>
              <button title="Remover" onClick={() => dispatch(remove(id))}>
                <img src="images/trash.png" alt="Ícone de lixo" />
              </button>
            </>
          )}
        </S.Buttons>
      </S.Table>
    </S.Contact>
  )
}

export default Contact
