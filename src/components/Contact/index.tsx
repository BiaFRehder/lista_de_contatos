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
        {favorite ? <span>&#x2605;</span> : <span>&#x2606;</span>}
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
            <label htmlFor="name">&#9786;</label>
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
            <label htmlFor="email">&#9993;</label>
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
            <label htmlFor="phone">&#9743;</label>
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
                  &#x1F583;
                </button>
                <button title="Cancelar" onClick={() => cancel()}>
                  &#x1F7AD;
                </button>
              </S.EditButtons>
            </S.Edit>
          ) : (
            <>
              <button title="Editar" onClick={() => setEditing(true)}>
                &#x1F589;
              </button>
              <button title="Remover" onClick={() => dispatch(remove(id))}>
                &#x1F5D1;
              </button>
            </>
          )}
        </S.Buttons>
      </S.Table>
    </S.Contact>
  )
}

export default Contact
