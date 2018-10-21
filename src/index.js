import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'

import indexRoutes from './routes'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import theme from './styles/theme'
import store from './store'
import './styles'
import history from './helpers/history'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={Login} />

          {indexRoutes.map((route, key) =>
            <PrivateRoute
              exact
              key={key}
              path={route.path}
              component={route.component}
              location={history.location} />
          )}
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
