import React from 'react'
import { Router, Switch, Route } from 'react-static'
import { hot } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import universal from 'react-universal-component'
/* css */
import 'antd/dist/antd.css'
import './global-css'
/* graphql */
import client from './utils/apollo-connector'

const Loading = () => <div />

const options = {
  loading: Loading,
}

const Layout = universal(import('./components/Layout'), options)

const Beacon = universal(import('./containers/Beacon'), options)
const Category = universal(import('./containers/Category'), options)
const User = universal(import('./containers/User'), options)
const Product = universal(import('./containers/Product'), options)
const Store = universal(import('./containers/Store'), options)
const Login = universal(import('./containers/Login'), options)
const NotFound = universal(import('./containers/404'), options)

const RouteWithLayout = props => (
  <Route
    exact={props.exact}
    path={props.path}
    render={() => (
      <Layout pageDetail={{ department: props.department }}>
        {props.component}
      </Layout>
    )}
  />
)

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <RouteWithLayout
          exact
          path="/"
          component={<Beacon />}
          department="beacon"
        />
        <RouteWithLayout
          path="/category"
          component={<Category />}
          department="category"
        />
        <RouteWithLayout path="/user" component={<User />} department="user" />
        <RouteWithLayout
          path="/product"
          component={<Product />}
          department="product"
        />
        <RouteWithLayout
          path="/store"
          component={<Store />}
          department="store"
        />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default hot(module)(App)
