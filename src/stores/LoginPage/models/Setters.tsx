import { Main } from './Main'

export const Setters = Main.actions((self) => ({
  setEmailValue(value: string) {
    if (value) {
      self.emailField.isEmpty = false
    } else {
      self.emailField.isEmpty = true
    }

    self.emailField.value = value
  },

  setPasswordValue(value: string) {
    if (value) {
      self.passwordField.isEmpty = false
    } else {
      self.passwordField.isEmpty = true
    }

    self.passwordField.value = value
  },
}))
