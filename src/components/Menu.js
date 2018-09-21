import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import styled from 'styled-components'

import Logo from '../../public/logo/app-logo-no-title.svg'

const { Header, Sider } = Layout

const SecondBar = styled(Header)`
  box-shadow: 0px 6px 15px -4px #00000030;
  z-index: 99;
  height: 66px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export default class DesktopMenu extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <img
          src={Logo}
          alt="logo"
          height="30"
          style={{ margin: '25px auto', width: '100%' }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[this.props.getKey()]}
        >
          <Menu.Item key="1" onClick={() => this.props.changePage('/')}>
            <Icon type="wifi" theme="outlined" />
            <span>BEACON</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => this.props.changePage('/category')}>
            <Icon type="appstore" theme="outlined" />
            <span>CATEGORY</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => this.props.changePage('/product')}>
            <Icon type="tags" theme="outlined" />
            <span>PRODUCT</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={() => this.props.changePage('/store')}>
            <Icon type="shop" theme="outlined" />
            <span>STORE</span>
          </Menu.Item>
          <Menu.Item key="5" onClick={() => this.props.changePage('/user')}>
            <Icon type="team" theme="outlined" />
            <span>USER</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
