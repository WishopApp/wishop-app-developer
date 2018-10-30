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

/* Development Import */
// import Layout from './components/Layout'
// import Beacon from './containers/Beacon'
// import Category from './containers/Category'
// import User from './containers/User'
// import UserDetail from './containers/UserDetail'
// import Product from './containers/Product'
// import ProductDetail from './containers/ProductDetail'
// import Store from './containers/Store'
// import StoreDetail from './containers/StoreDetail'
// import Login from './containers/Login'
// import Logout from './containers/Logout'
// import ReportTicket from './containers/ReportTicket'
// import NotFound from './containers/404'

const Loading = () => <div />

const options = {
  loading: Loading,
}

const Layout = universal(import('./components/Layout'), options)
const Beacon = universal(import('./containers/Beacon'), options)
const Category = universal(import('./containers/Category'), options)
const User = universal(import('./containers/User'), options)
const UserDetail = universal(import('./containers/UserDetail'), options)
const Product = universal(import('./containers/Product'), options)
const ProductDetail = universal(import('./containers/ProductDetail'), options)
const Store = universal(import('./containers/Store'), options)
const StoreDetail = universal(import('./containers/StoreDetail'), options)
const Login = universal(import('./containers/Login'), options)
const Logout = universal(import('./containers/Logout'), options)
const ReportTicket = universal(import('./containers/ReportTicket'), options)
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
        <RouteWithLayout
          path="/user/:id"
          component={<UserDetail />}
          department="user"
        />
        <RouteWithLayout path="/user" component={<User />} department="user" />
        <RouteWithLayout
          path="/product/:id"
          component={<ProductDetail />}
          department="product"
        />
        <RouteWithLayout
          path="/product"
          component={<Product />}
          department="product"
        />
        <RouteWithLayout
          path="/store/:id"
          component={<StoreDetail />}
          department="store"
        />
        <RouteWithLayout
          path="/store"
          component={<Store />}
          department="store"
        />
        <RouteWithLayout
          path="/report"
          component={<ReportTicket />}
          department="report"
        />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default hot(module)(App)
