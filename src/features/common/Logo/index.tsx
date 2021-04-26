import { get } from 'lodash'
import { withTheme } from 'styled-components'

const LogoFC = ({ theme, ...props }) => {
  const cold = get(theme, ['palette', 'cold'])
  const warm = get(theme, ['palette', 'warm'])

  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 113 113'
      fill='none'
    >
      <g>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 56.5 59.5'
          to='360 56.5 59.5'
          dur='10s'
          repeatCount='indefinite'
        />
        <path
          d='M81.9559 29.0944C67.897 15.0355 45.1031 15.0355 31.0442 29.0944'
          stroke={warm}
          strokeWidth='5'
        />
        <path
          d='M81.9559 89.9056C67.6219 104.24 45.1039 103.965 31.0442 89.9056'
          stroke={cold}
          strokeWidth='5'
        />
      </g>
      <g>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 56.5 59.5'
          to='-360 56.5 59.5'
          dur='10s'
          repeatCount='indefinite'
        />
        <path
          d='M56 34.5442C41.9411 48.603 41.9411 71.397 56 85.4558'
          stroke={warm}
          strokeWidth='3'
        />
        <path
          d='M56 34.5442C70.0589 48.603 70.0589 71.397 56 85.4558'
          stroke={cold}
          strokeWidth='3'
        />
      </g>
      <g>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 56.5 59.5'
          to='360 56.5 59.5'
          dur='10s'
          repeatCount='indefinite'
        />
        <path
          d='M56 85.4558C41.9411 71.397 41.9411 48.603 56 34.5442'
          stroke={warm}
          strokeWidth='3'
        />
        <path
          d='M56 85.4558C70.0589 71.397 70.0589 48.603 56 34.5442'
          stroke={cold}
          strokeWidth='3'
        />
      </g>
    </svg>
  )
}

export const Logo = withTheme(LogoFC)
