import { COLORS } from '../../../Styles/Settings/Settings.Colors'
import { Copy } from 'styled-icons/boxicons-regular'
import { EBox } from '../../../Styles/Elements/Elements.Box'
import { EText } from '../../../Styles/Elements/Elements.Text'
import styled from 'styled-components'

const Item = styled(EBox)`
  ::before {
    content: '';
    display: inline-block;
    padding-top: 100%;
    width: 0;
  }
`

const ItemText = styled(EText)`
  color: ${COLORS.colorWhiteText};
  mix-blend-mode: difference;
`

const IconCopy = styled(Copy)`
  bottom: 0;
  color: ${COLORS.colorWhiteText};
  left: 0;
  margin: auto;
  mix-blend-mode: difference;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
  width: 20px;

  button:hover > & {
    opacity: 1;
  }
`

export const STL = {
  Item,
  IconCopy,
  ItemText
}
