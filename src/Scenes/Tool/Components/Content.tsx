import React, { Fragment, useState } from 'react'
import { darken, lighten } from 'polished'

import { ABtn } from '../../../Styles/Atoms/Atoms.Buttons'
import { AInput } from '../../../Styles/Atoms/Atoms.Inputs'
import { CSS_GLOBAL } from '../../../Styles/Settings/Settings.Global'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { EBox } from '../../../Styles/Elements/Elements.Box'
import { EText } from '../../../Styles/Elements/Elements.Text'
import { STL } from '../Styles/Tool.Styles'
import { string } from 'yup'

export default function Content() {
  const [color, setColor] = useState(['#00cec9'])
  const shade = ['Lighten', 'Darken']
  const schema = string().matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  const isValid = schema.isValidSync(color[0])

  return (
    <EBox>
      <EBox mb={CSS_GLOBAL.p5}>
        <AInput value={color} onChange={e => setColor([e.target.value])} />
      </EBox>

      {isValid &&
        shade.map((s, i) => {
          return (
            <Fragment key={i}>
              <EText as="h5">{s}</EText>

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
                          <CopyToClipboard text={c}>
                            <ABtn.Ghost
                              display="flex"
                              flex="1"
                              position="relative"
                            >
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
                                {String(color).toLocaleUpperCase()}
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
          )
        })}
    </EBox>
  )
}
