import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'

import { GResetBtn } from '../Generics/Generics.ResetButton'
import styled from 'styled-components'

type TGhost = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps
const Ghost = styled.button<TGhost>`
  ${GResetBtn};
  ${space};
  ${color};
  ${typography};
  ${layout};
  ${flexbox};
  ${background};
  ${border};
  ${position};
  ${shadow};
`

export const ABtn = {
  Ghost
}
