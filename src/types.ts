import { Interpolation, Theme } from '@emotion/react'

import { CSSProperties } from 'react'

export type ICSSProps = {
  className?: string | undefined
  css?: Interpolation<Theme>
  style?: CSSProperties | undefined
}
