import { Mock } from './styled'

type TPageMock = {
  children: React.ReactNode,
}

export const PageMock = ({ children }: TPageMock) => (
  <Mock>
    { children }
  </Mock>
)
