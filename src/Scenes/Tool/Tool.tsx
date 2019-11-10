import { Col, Container, Row } from 'styled-bootstrap-grid'
import React, { Component } from 'react'

import { CSS_GLOBAL } from '../../Styles/Settings/Settings.Global'
import Content from './Components/Content'
import { EBox } from '../../Styles/Elements/Elements.Box'
import Heading from './Components/Heading'

export default class Tool extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <EBox as="section" paddingY={CSS_GLOBAL.p10}>
              <Heading />

              <Content />
            </EBox>
          </Col>
        </Row>
      </Container>
    )
  }
}
