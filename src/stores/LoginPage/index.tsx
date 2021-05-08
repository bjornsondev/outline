import { Setters } from './models/Setters'

export const LoginPageStore = Setters.create({
  emailField: {
    error: null,
    isEmpty: true,
    isValid: true,
    value: '',
  },
  passwordField: {
    error: null,
    isEmpty: true,
    isValid: true,
    value: '',
  },
})
