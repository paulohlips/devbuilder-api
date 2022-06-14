import { UserDto } from "../../dtos/User/userDto"
import { UserTypeDto } from "../../dtos/User/userTypeDto"

export class User {
  id?: string
  name: string
  email: string
  type: UserTypeDto = UserTypeDto.DEFAULT
  password: string

  constructor ({ email, name, type, password }: UserDto) {
    this.name = name
    this.email = email
    this.type = type
    this.password = password
    this.validate()
  }

  private hashPassword (password: string) {
    return `${password}.${new Date().getMilliseconds()}`
  }

  validate() {
    if (this.name.length === 0) {
      throw new Error('Name is required')
    }

    if (this.email.length === 0) {
      throw new Error('Email is required')
    }
  }
}
