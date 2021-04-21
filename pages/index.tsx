import { ThemeProvider } from 'styled-components'

import { CommonHead } from 'heads/CommonHead'
import { PageHead } from 'heads/HomePage'
import { PageMock } from '__mocks__/PageMock'
import { Theme } from 'config/styled/Theme'
import { GlobalStyle } from 'config/styled/GlobalStyles'
import { FontFace } from 'config/FontFace/FontFace'

export default function HomePage() {
  return (
    <ThemeProvider theme={Theme}>
      <CommonHead />
      <PageHead />

      <GlobalStyle />
      <FontFace />

      <PageMock>
        LELELETMEDIE
      </PageMock>
    </ThemeProvider>
  )
}
