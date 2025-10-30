import * as enums from '../utils/enums/Contact'

class Contacts {
  name: string
  email: string
  phone: string
  category: enums.Category
  favorite: boolean
  id: number

  constructor(
    name: string,
    email: string,
    phone: string,
    category: enums.Category,
    favorite: boolean,
    id: number
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.category = category
    this.favorite = favorite
    this.id = id
  }
}

export default Contacts
