import { Instance, types } from 'mobx-state-tree'

const {
  boolean,
  maybeNull,
  model,
  string,
} = types

export const Field = model({
  error: maybeNull(string),
  isEmpty: boolean,
  isValid: boolean,
  value: string,
})

export const Main = model({
  emailField: Field,
  passwordField: Field,
})

export interface TLoginPage extends Instance<typeof Main> {}
