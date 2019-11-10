import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system'

import styled from 'styled-components'

type TEText = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps
export const EText = styled.p<TEText>`
  ${border};
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};
`
