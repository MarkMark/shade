import React, { useState } from 'react'
import { darken, lighten, rem } from 'polished'

import { ABtn } from '../../../Styles/Atoms/Atoms.Buttons'
import { AInput } from '../../../Styles/Atoms/Atoms.Inputs'
import { COLORS } from '../../../Styles/Settings/Settings.Colors'
import { CSS_GLOBAL } from '../../../Styles/Settings/Settings.Global'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { EBox } from '../../../Styles/Elements/Elements.Box'
import { STL } from '../Styles/Tool.Styles'
import { string } from 'yup'

export default function Content() {
  const [color, setColor] = useState([''])
  const shade = ['Lighten', 'Darken']
  const schema = string().matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  const isValid = schema.isValidSync(color[0])

  return (
    <EBox>
      <EBox mb={CSS_GLOBAL.p5} textAlign="center">
        <AInput
          value={color}
          placeholder="#FFF"
          onChange={e => setColor([e.target.value])}
          maxWidth={rem('320px')}
          textAlign="center"
        />
      </EBox>

      {isValid &&
        shade.map((s, i) => {
          return (
            <EBox
              key={i}
              mb={CSS_GLOBAL.p4}
              border={`${rem('1px')} solid ${COLORS.colorBlackDividers}`}
            >
              {color.map((c, i) => (
                <EBox key={i} display="grid" gridAutoFlow="column">
                  {[...new Array(11)].map((_, i) => {
                    const amount = String(i).padStart(3, '0.')
                    const color =
                      s === 'Lighten' ? lighten(amount, c) : darken(amount, c)
                    let previousColor

                    if (i !== 0) {
                      const amount = String(i - 1).padStart(3, '0.')

                      previousColor =
                        s === 'Lighten' ? lighten(amount, c) : darken(amount, c)
                    }

                    if (previousColor === color) return undefined

                    return (
                      <STL.Item key={i} background={color} display="flex">
                        <CopyToClipboard
                          text={String(color).toLocaleUpperCase()}
                        >
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
          )
        })}
    </EBox>
  )
}
