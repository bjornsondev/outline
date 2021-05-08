import Link from 'next/link'
import { observer } from 'mobx-react-lite'

import { get } from 'lodash'

import { useStore } from 'hooks/useStore'

import { PageWrapper } from 'features/common/PageWrapper'
import { WarmText } from 'features/common/WarmText'
import { Field } from 'features/common/Field'

import {
  FieldLabel,
  FieldContainer,
  LoginWrapper,
  LogoBackground,
  RegistrationLink,
  TitleText,
  EmailField,
} from './styled'

export const LoginPageFC = () => {
  const {
    login: {
      emailField,
      passwordField,
      setEmailValue,
      setPasswordValue,
    },
  } = useStore()

  const emailValue = get(emailField, 'value')
  const passwordValue = get(passwordField, 'value')

  return (
    <PageWrapper>
      <LoginWrapper>
        <LogoBackground animated={true} />

        <TitleText>
            O U T<WarmText> L I N E</WarmText>
        </TitleText>

        <FieldContainer>
          <FieldLabel htmlFor='loginEmail'>
              please identify your person
          </FieldLabel>
          <EmailField
            value={emailValue}
            placeholder='E-mail'
            id='loginEmail'
            isValid={false}
            type='email'
            onChange={(e) => setEmailValue(e.currentTarget.value)}
          />
          <Field
            value={passwordValue}
            placeholder='Password'
            isValid={false}
            type='password'
            onChange={(e) => setPasswordValue(e.currentTarget.value)}
          />
        </FieldContainer>

        <Link href='/registration' passHref={true}>
          <RegistrationLink>
              New? Register
          </RegistrationLink>
        </Link>
      </LoginWrapper>
    </PageWrapper>
  )
}

export const LoginPage = observer(LoginPageFC)
