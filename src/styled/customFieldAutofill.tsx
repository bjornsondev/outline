import { css } from 'styled-components'

export const customFieldAutofill = (color) => css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 1px solid ${color};
    -webkit-text-fill-color: ${color};
    transition: background-color 5000s ease-in-out 0s;
  }
`
