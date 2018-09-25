import React, { Component } from 'react'
import { withRouter } from 'react-static'
import { Row, Col, Form, Input, Icon, Button, Card } from 'antd'
import { Mutation } from 'react-apollo'
import Cookies from 'js-cookie'

import { LOGIN } from '../graphql/mutation/auth'
import Logo from '../../public/logo/app-logo-inline-text.svg'

const FormItem = Form.Item

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        try {
          e.preventDefault()

          const { data } = await this.props.login({
            variables: { email: values.email, password: values.password },
          })

          Cookies.set(process.env.AUTH_TOKEN_NAME, data.login, { expires: 7 })
          this.props.history.push('/')
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
        <Col span={6}>
          <Card style={{ textAlign: 'center' }}>
            <img src={Logo} alt="logo" height="30" style={{ marginTop: 25, marginBottom: 25 }} />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem className="m-t-16">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                  />,
                )}
              </FormItem>
              <FormItem className="m-t-16">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button m-t-16" block>
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

const LoginMutaion = props => (
  <Mutation mutation={LOGIN}>{(login, _) => <LoginForm login={login} {...props} />}</Mutation>
)

export default withRouter(LoginMutaion)
