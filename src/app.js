import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'state'
import { buildRoutes, ROUTES } from 'routes'
import { ErrorBoundary } from 'components'
import * as Views from 'views'

import 'styles/index.scss'

// Inject views into route builder.
const AppRoutes = buildRoutes(Views, ErrorBoundary, ROUTES)

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
