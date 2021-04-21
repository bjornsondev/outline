import 'styled-components'

import { ITheme } from 'config/styled/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
