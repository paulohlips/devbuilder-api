import { UserTypeDto } from "./userTypeDto"

export interface UserDto {
  name: string
  email: string
  type: UserTypeDto
  password: string
}
