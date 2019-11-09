import { BaseCSS, GridThemeProvider } from 'styled-bootstrap-grid'
import React, { Fragment } from 'react'

import { GRID } from './Styles/Settings/Settings.Grid'
import { GReset } from './Styles/Generics/Generics.Reset'
import Main from './Main/Main'

const App: React.FC = () => {
  return (
    <Fragment>
      <GReset />
      <BaseCSS />
      <GridThemeProvider gridTheme={GRID}>
        <Main />
      </GridThemeProvider>
    </Fragment>
  )
}

export default App
