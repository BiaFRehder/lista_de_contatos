import { useState } from 'react'

const useMaskPhone = (initialValue = '') => {
  const [phone, setPhone] = useState(initialValue)

  function handleChange(value: string) {
    // Remove tudo que não for número
    let digits = value.replace(/\D/g, '')
    let formatted = ''

    if (digits.length > 11) {
      digits = digits.slice(0, 11)
    }

    // Regras:
    // 11 dígitos → celular com DDD → (11) 91234-5678
    // 10 dígitos → fixo com DDD → (11) 1234-5678
    // 9 dígitos → celular sem DDD → 91234-5678
    // 8 dígitos → fixo sem DDD → 1234-5678
    // 2 dígitos → DDD parcial → (11
    // 1 dígito → só abre parêntese

    if (digits.length === 11) {
      formatted = digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
    } else if (digits.length === 10) {
      formatted = digits.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
    } else if (digits.length > 2) {
      formatted = digits.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
    } else if (digits.length > 0) {
      formatted = digits.replace(/^(\d*)/, '($1')
    }

    setPhone(formatted)
  }

  return { phone, setPhone, handleChange }
}

export default useMaskPhone
