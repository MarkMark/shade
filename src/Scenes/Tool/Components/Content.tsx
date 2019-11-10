import React, { Fragment, useState } from 'react'
import { darken, lighten } from 'polished'

import { ABtn } from '../../../Styles/Atoms/Atoms.Buttons'
import { CSS_GLOBAL } from '../../../Styles/Settings/Settings.Global'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { EBox } from '../../../Styles/Elements/Elements.Box'
import { EText } from '../../../Styles/Elements/Elements.Text'
import { STL } from '../Styles/Tool.Styles'

export default function Content() {
  const [color, setColor] = useState(['#FFF'])
  const shade = ['Lighten', 'Darken']

  return (
    <EBox paddingY={CSS_GLOBAL.p10}>
      {shade.map((s, i) => (
        <Fragment key={i}>
          <EText as="h3">{s}</EText>

          <EBox mb={CSS_GLOBAL.p4}>
            {color.map((c, i) => (
              <EBox
                key={i}
                display="grid"
                gridTemplateColumns="repeat(11, 1fr)"
              >
                {[...new Array(11)].map((_, i) => {
                  const amount = String(i).padStart(3, '0.')
                  const color =
                    s === 'Lighten' ? lighten(amount, c) : darken(amount, c)

                  return (
                    <STL.Item key={i} background={color} display="flex">
                      <CopyToClipboard>
                        <ABtn.Ghost display="flex" flex="1" position="relative">
                          <STL.IconCopy />

                          <STL.ItemText
                            bottom="0"
                            flex="1"
                            fontSize={CSS_GLOBAL.fontSizeXS}
                            left="0"
                            mb={CSS_GLOBAL.p0}
                            position="absolute"
                            right="0"
                            textAlign="center"
                          >
                            {String(color)}
                          </STL.ItemText>
                        </ABtn.Ghost>
                      </CopyToClipboard>
                    </STL.Item>
                  )
                })}
              </EBox>
            ))}
          </EBox>
        </Fragment>
      ))}
    </EBox>
  )
}
