import React, { Component } from 'react'
import { withRouter } from 'react-static'
import { Row, Col, Form, Input, Icon, Button, Card } from 'antd'

import Logo from '../../public/logo/app-logo-inline-text.svg'

const FormItem = Form.Item

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: '100vh' }}
      >
        <Col span={6}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={Logo}
              alt="logo"
              height="30"
              style={{ marginTop: 25, marginBottom: 25 }}
            />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem className="m-t-16">
                {getFieldDecorator('userName', {
                  rules: [
                    { required: true, message: 'Please input your username!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                )}
              </FormItem>
              <FormItem className="m-t-16">
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button m-t-16"
                block
              >
                <span>SIGN IN</span>
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  }
}

const LoginForm = Form.create()(Login)

export default withRouter(LoginForm)
