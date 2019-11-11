import { LayoutProps, TypographyProps, layout, typography } from 'styled-system'

import { COLORS } from '../Settings/Settings.Colors'
import { CSS_GLOBAL } from '../Settings/Settings.Global'
import { rem } from 'polished'
import styled from 'styled-components'

type TAInput = LayoutProps & TypographyProps
export const AInput = styled.input<TAInput>`
  border: ${rem('1px')} solid ${COLORS.colorBlackDividers};
  border-radius: ${CSS_GLOBAL.borderRadius};
  display: inline-block;
  font-size: ${CSS_GLOBAL.fontSizeRegular};
  line-height: ${CSS_GLOBAL.lineHeight};
  margin-bottom: ${CSS_GLOBAL.p2};
  padding: ${CSS_GLOBAL.p2};
  transition: border-color 0.2s ease-in-out;
  width: 100%;
  ${layout};
  ${typography};

  :focus {
    border-color: ${COLORS.colorAccentBlue};
    outline: none;
  }
`
