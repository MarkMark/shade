import { Col, Container, Row } from 'styled-bootstrap-grid'

import { CSS_GLOBAL } from '../Styles/Settings/Settings.Global'
import { EBox } from '../Styles/Elements/Elements.Box'
import React from 'react'

export default function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <EBox as="section" paddingY={CSS_GLOBAL.p10}>
            <h1>Shade 😎</h1>
          </EBox>
        </Col>
      </Row>
    </Container>
  )
}
