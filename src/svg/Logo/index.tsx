import { get } from 'lodash'

import { useTheme } from 'hooks/useTheme'

type TLogo = {
  animated: boolean,
  className?: string,
}

export const Logo = ({
  animated = false,
  className,
}: TLogo) => {
  const cold = get(useTheme(), ['palette', 'cold'])
  const warm = get(useTheme(), ['palette', 'warm'])

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 128 128'
      fill='none'
    >
      <g>
        { animated && (
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 64 64'
            to='360 64 64'
            dur='10s'
            repeatCount='indefinite'
          />
        )}
        <path
          d='M24 18 C45.5 -2 82.5 -2 104 18'
          stroke={warm}
          strokeWidth='6'
        />
        <path
          d='M24 110 C45.5 130 82.5 130 104 110'
          stroke={cold}
          strokeWidth='6'
        />
      </g>
      <g>
        { animated && (
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 64 64'
            to='-360 64 64'
            dur='10s'
            repeatCount='indefinite'
          />
        )}
        <path
          d='M64 102 C43 81 43 47 64 26'
          stroke={warm}
          strokeWidth='6'
        />
        <path
          d='M64 102 C85 81 85 47 64 26'
          stroke={cold}
          strokeWidth='6'
        />
      </g>
      <g>
        { animated && (
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 64 64'
            to='360 64 64'
            dur='10s'
            repeatCount='indefinite'
          />
        )}
        <path
          d='M64 102 C43 81 43 47 64 26'
          stroke={warm}
          strokeWidth='6'
        />
        <path
          d='M64 102 C85 81 85 47 64 26'
          stroke={cold}
          strokeWidth='6'
        />
      </g>
    </svg>
  )
}
