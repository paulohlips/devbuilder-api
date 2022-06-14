import { UserTypeDto } from "../../dtos/User/userTypeDto"
import { User } from "./user"

describe("User unit tests", () => {
  it('should create new User', () => {
    const userCreated = { name: 'James Bond', email: 'james@bond.com', type: 'default' as UserTypeDto, password: 'asdf1234'}
    const user = new User(userCreated)
    expect(user).toBeInstanceOf(User)
    expect(user).toEqual(userCreated)
  })

  it('should fail if User dont have name', () => {
    const userCreated = { name: '', email: 'james@bond.com', type: 'default' as UserTypeDto, password: 'asdf1234'}
    expect(() => new User(userCreated)).toThrowError('Name is required')
  })

  it('should fail if User dont have email', () => {
    const userCreated = { name: 'James Bond', email: '', type: 'default' as UserTypeDto, password: 'asdf1234'}
    expect(() => new User(userCreated)).toThrowError('Email is required')
  })
})

