import React, { Component } from 'react'
import { withRouter, Link } from 'react-static'
import { Layout, Row, Avatar, Dropdown, Icon, Menu } from 'antd'
import Cookies from 'js-cookie'

import DesktopMenu from './Menu'

const { Header, Content } = Layout

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/logout">
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: 30, padding: '0 10px' }}
        >
          <Icon type="poweroff" theme="outlined" style={{ marginRight: 10 }} />
          <Link to="/logout">
            <span style={{ color: '#000' }}>LOGOUT</span>
          </Link>
        </Row>
      </Link>
    </Menu.Item>
  </Menu>
)

class AppLayout extends Component {
  componentWillMount() {
    const token = Cookies.get(process.env.AUTH_TOKEN_NAME)
    if (!token) {
      this.props.history.push('/login')
    }
  }

  changePage = route => {
    this.props.history.push(route)
  }

  getKey = () => {
    const listOfKeys = {
      beacon: '1',
      category: '2',
      product: '3',
      store: '4',
      user: '5',
      report: '6',
    }

    return listOfKeys[this.props.pageDetail.department]
  }

  render() {
    return (
      <Layout>
        <DesktopMenu changePage={this.changePage} getKey={this.getKey} />
        <Content>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Row type="flex" justify="end">
                <Row type="flex" align="middle" style={{ marginRight: 50 }}>
                  <Avatar icon="user" style={{ marginRight: 10 }} />
                  <Dropdown overlay={menu}>
                    <p style={{ cursor: 'pointer' }}>
                      Administrator
                      <Icon type="down" style={{ marginLeft: 10 }} />
                    </p>
                  </Dropdown>
                </Row>
              </Row>
            </Header>
            <Content style={{ padding: 50 }}>{this.props.children}</Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}

export default withRouter(AppLayout)
