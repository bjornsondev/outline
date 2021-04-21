import { ThemeProvider } from 'styled-components'

import { SomeFeature } from 'features/SomeFeature'
import { CommonHead } from 'heads/CommonHead'
import { PageHead } from 'heads/HomePage'
import { Theme } from 'config/styled/Theme'
import { GlobalStyle } from 'config/styled/GlobalStyles'
import { FontFace } from 'config/FontFace/FontFace'
import { PageMock } from '__mocks__/PageMock'

export default function HomePage() {
  return (
    <ThemeProvider theme={Theme}>
      <CommonHead />
      <PageHead />

      <GlobalStyle />
      <FontFace />

      <PageMock>
        LELELETMEDIE
        <SomeFeature someProp='someFeatureProp' />
      </PageMock>
    </ThemeProvider>
  )
}
