import { COLORS } from '../Settings/Settings.Colors'
import { CSS_GLOBAL } from '../Settings/Settings.Global'
import { rem } from 'polished'
import styled from 'styled-components'

export const AInput = styled.input`
  border: ${rem('1px')} solid ${COLORS.colorBlackDividers};
  border-radius: ${CSS_GLOBAL.borderRadius};
  display: inline-block;
  font-size: ${CSS_GLOBAL.fontSizeRegular};
  line-height: ${CSS_GLOBAL.lineHeight};
  margin-bottom: ${CSS_GLOBAL.p2};
  padding: ${CSS_GLOBAL.p2};
  width: 100%;

  :focus {
    outline: none;
  }
`
