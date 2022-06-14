import { User } from './1-domain/entities/user/user'
import { UserTypeDto } from "./1-domain/dtos/User/userTypeDto"

const user = new User({
  name: 'Paulo',
  email: 'paulo@email.com',
  type: UserTypeDto.DEFAULT,
  password: 'asdf'
})

console.log(user)
