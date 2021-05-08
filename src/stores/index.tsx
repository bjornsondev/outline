import { LoginPageStore } from './LoginPage'

const storesAssign = {}

export const RootStore = Object.assign(storesAssign, {
  login: LoginPageStore,
})
