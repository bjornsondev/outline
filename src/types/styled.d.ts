import 'styled-components'

import { ITheme } from 'styled/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
