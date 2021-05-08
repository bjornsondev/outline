import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'styled/GlobalStyles'
import { Theme } from 'styled/Theme'

type TPageWrapper = {
  children: React.ReactNode,
}

export const PageWrapper = ({ children }: TPageWrapper) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    { children }
  </ThemeProvider>
)
