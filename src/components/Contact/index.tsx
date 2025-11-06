import { ChangeEvent, useEffect, useState } from 'react'
import ContactsClass from '../../models/Contact'
import { useDispatch } from 'react-redux'
import { edit, remove, changeStatus } from '../../store/reducers/contacts'

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
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(category)

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
    dispatch(edit({ name, phone, email, id, category: status, favorite }))
    setEditing(false)
  }

  function contactStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, favorites: event.target.checked }))
  }

  // function phoneMask(e: ChangeEvent<HTMLInputElement>) {
  //   let mask = phone.replace(/\D/g, '')

  //   if (mask.length > 11) return (mask = mask.slice(0, 11))

  //   if (mask.length > 6) {
  //     return mask.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3')
  //   } else {
  //     return mask.replace(/^(\d*)/, '($1')
  //   }
  // }

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
      <S.Table>
        <S.DataTable>
          <div>
            <label htmlFor="data_name">&#9786;</label>
            <S.Name
              name="data_name"
              disabled={!editing}
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">&#9993;</label>
            <S.Name
              name="data_email"
              disabled={!editing}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div>
            <label htmlFor="data_phone">&#9743;</label>
            <S.Name
              name="data_phone"
              disabled={!editing}
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </div>
        </S.DataTable>
        <S.Buttons>
          {editing ? (
            <S.Edit>
              <div>
                <button title="Salvar" onClick={() => save()}>
                  &#x1F583;
                </button>
                <button title="Cancelar" onClick={() => cancel()}>
                  &#x1F7AD;
                </button>
              </div>
              <Options
                initialCategory={status}
                onChangeCategory={(cat) => setStatus(cat)}
              />
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
