import styled from 'styled-components'
import { Logo } from 'features/common/Logo'

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const LogoBackground = styled(Logo)`
  position: fixed;
  z-index: -1;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  height: 100%;
  opacity: .05;
`

export const TitleText = styled.h1`
  font-size: 60px;
`

export const RegistrationLink = styled.a`
  position: relative;
  padding: 10px;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => `${theme.palette.cold}33`};
  transition: .3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${({ theme }) => theme.palette.warm};
    transition: .3s;
    transition-timing-function: ease-out;
  }

  &:hover::before {
    height: 100%;
    transition: .3s;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2px;
    height: 0;
    background-color: ${({ theme }) => theme.palette.warm};
    transition: .3s;
    transition-timing-function: ease-out;
  }

  &:hover::after {
    height: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.warm};
    background-color: ${({ theme }) => `${theme.palette.warm}33`};
    transition: .3s;
    text-decoration-color: transparent;
  }

  &:active {
    background-color: ${({ theme }) => `${theme.palette.cold}33`};
    transition: none;
    color:  ${({ theme }) => theme.palette.cold};
  }
  &:active::after, &:active::before {
    background-color: ${({ theme }) => theme.palette.cold};
    transition: none;
  }
`
