import { useEffect, useState } from 'react'
import * as enums from '../../utils/enums/Contact'

import * as S from './styles'

type Props = {
  initialCategory?: enums.Category
  onChangeCategory?: (category: enums.Category) => void
}

const Options = ({ initialCategory, onChangeCategory }: Props) => {
  const [category, setCategory] = useState(
    initialCategory || enums.Category.FRIENDS
  )

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory)
    }
  }, [initialCategory])

  const categoryLabels: Record<enums.Category, string> = {
    [enums.Category.FAMILY]: 'Família',
    [enums.Category.FRIENDS]: 'Amigos',
    [enums.Category.BUSINESS]: 'Trabalho'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = e.target.value as enums.Category
    setCategory(newCategory)
    onChangeCategory?.(newCategory)
  }

  return (
    <>
      {Object.values(enums.Category).map((cat) => {
        return (
          <S.Option key={cat}>
            <input
              id={`category-${cat}`}
              type="radio"
              value={cat}
              onChange={handleChange}
              checked={category === cat}
            />
            <label htmlFor={`category-${cat}`}>{categoryLabels[cat]}</label>
          </S.Option>
        )
      })}
    </>
  )
}

export default Options
