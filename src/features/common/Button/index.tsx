import { HTMLAttributes } from 'react'

import { Btn } from './styled'

type TButton = HTMLAttributes<HTMLButtonElement>

export const Button = (props: TButton) => (
  <Btn {...props} />
)
