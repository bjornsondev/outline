import { InputHTMLAttributes, useState } from 'react'
import { BigBro } from 'svg/BigBro'

import {
  InputWrapper,
  Input,
  VisibilityToggler,
} from './styled'

type TField = {
  className?: string,
  errorText?: string,
  isValid: boolean,
  type: string,
  withButton?: boolean,
} & InputHTMLAttributes<HTMLInputElement>

export const Field = ({
  className,
  errorText,
  isValid,
  type,
  withButton,
  ...props
}: TField) => {
  const [isOnFocus, setIsOnFocus] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isWithButton = type === 'password' || withButton
  const inputType = type === 'password' && isVisible ? 'text' : type

  return (
    <InputWrapper
      isOnFocus={isOnFocus}
      isValid={isValid}
      className={className}
    >
      <Input
        isWithButton={isWithButton}
        isValid={isValid}
        type={inputType}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        {...props}
      />

      {errorText}

      { type === 'password' && (
        <VisibilityToggler
          onClick={() => setIsVisible(!isVisible)}
        >
          <BigBro
            isVisible={isVisible}
          />
        </VisibilityToggler>
      )}
    </InputWrapper>
  )
}
