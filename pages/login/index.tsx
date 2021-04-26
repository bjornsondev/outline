import Link from 'next/link'

import { PageWrapper } from 'features/common/PageWrapper'
import { WarmText } from 'features/common/WarmText'

import {
  LoginWrapper,
  LogoBackground,
  RegistrationLink,
  TitleText,
} from './styled'

export default () => (
  <PageWrapper>
    <LoginWrapper>
      <LogoBackground />

      <TitleText>
        O U T<WarmText> L I N E</WarmText>
      </TitleText>

      please identify your person

      <Link href='/registration' passHref>
        <RegistrationLink>
          New? Register
        </RegistrationLink>
      </Link>
    </LoginWrapper>
  </PageWrapper>
)
