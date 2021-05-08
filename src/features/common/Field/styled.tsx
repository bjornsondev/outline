import styled, { css } from 'styled-components'
import { customFieldAutofill } from 'styled/customFieldAutofill'

type TInputWrapper = {
  isOnFocus: boolean,
  isValid: boolean,
}

type TInput = {
  isValid?: boolean,
  isWithButton: boolean,
}

const validWrapperFocusStyles = css`
  opacity: 1;

  box-shadow: 
    0 0 3px ${({ theme }) => theme.palette.cold},
    ${({ theme }) => theme.palette.cold} 0 0 3px inset;

  &::before, &::after {
    height: calc(100% + 4px);
    box-shadow: 0 0 3px ${({ theme }) => theme.palette.cold};
  }
`

const noValidWrapperFocusStyles = css`
  opacity: 1;
  box-shadow: 
    0 0 3px ${({ theme }) => theme.palette.warm},
    ${({ theme }) => theme.palette.warm} 0 0 3px inset;

  &::before, &::after {
    height: calc(100% + 4px);
    box-shadow: 0 0 3px ${({ theme }) => theme.palette.warm};
  }
`

export const InputWrapper = styled.div<TInputWrapper>`
  position: relative;
  width: 600px;
  height: 60px;
  padding: 5px;
  opacity: 0.5;
  transition: .3s;

  &::before, &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -10px;
    width: 2px;
    height: 0;
    transition: .3s;
  }

  &::after{
    left: auto;
    top: auto;
    right: -10px;
    bottom: -2px;
  }

  ${({ isOnFocus, isValid, theme }) => (
    isValid
      ? css`
        border: 2px solid ${theme.palette.cold};

        &::before, &::after {
          background-color: ${theme.palette.cold}
        }

        ${isOnFocus && validWrapperFocusStyles}
      `
      : css`
        border: 2px solid ${theme.palette.warm};

        &::before, &::after {
          background-color: ${theme.palette.warm}
        }

        ${isOnFocus && noValidWrapperFocusStyles}
      `
  )}
`

export const Input = styled.input<TInput>`
  width: 100%;
  height: 100%;
  padding: 10px 50px;
  border: none;
  font-size: 1.3rem;
  text-align: center;
  
  &::placeholder {
    color: inherit;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }

 

  ${({ isValid, theme }) => (
    isValid
      ? css` 
          background-color: ${theme.palette.cold}22;
          color: ${theme.palette.cold};

          ${customFieldAutofill(theme.palette.cold)}
        `
      : css` 
          background-color: ${theme.palette.warm}22;
          color: ${theme.palette.warm};

          ${customFieldAutofill(theme.palette.warm)}
        `
  )}
`

export const VisibilityToggler = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
