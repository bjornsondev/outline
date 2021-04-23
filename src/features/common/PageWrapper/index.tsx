import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'config/styled/GlobalStyles'
import { Theme } from 'config/styled/Theme'

type TPageWrapper = {
  children: React.ReactNode,
}

export const PageWrapper = ({ children }: TPageWrapper) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    { children }
  </ThemeProvider>
)
