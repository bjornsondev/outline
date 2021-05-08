import { useContext } from 'react'

import { ThemeContext } from 'styled-components'

import { ITheme } from 'styled/Theme'

export const useTheme = (): ITheme => useContext(ThemeContext)
