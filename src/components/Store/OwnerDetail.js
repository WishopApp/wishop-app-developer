import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Select } from 'antd'

const confirm = Modal.confirm

const Option = Select.Option

const ReasonBlock = props => (
  <div>
    <p className="m-t-16 m-b-16">Please tell store owner the reason why.</p>
    <Select
      defaultValue="jack"
      style={{ width: '100%' }}
      onChange={props.changeReason}
    >
      <Option value="jack">This product </Option>
    </Select>
  </div>
)

export default class StoreDetail extends Component {
  state = {
    reason: '',
  }

  changeReason = e => {
    this.setState({ reason: e })
  }

  showDeleteConfirm = () => {
    confirm({
      title: 'Do you want to ban this product?',
      content: (
        <ReasonBlock
          reason={this.state.reason}
          changeReason={this.changeReason}
        />
      ),
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  render() {
    return (
      <Row>
        <Col span={24} className="m-b-32">
          <h3>OWNER DETAIL</h3>
          <Card className="m-t-16">
            <h4>Title: </h4>
          </Card>
        </Col>
        <Col span={24}>
          <h3>BAN</h3>
          <Card className="m-t-16">
            <p>
              If you ban this product, this product will not appear in the
              system and you have to tell store the reason{' '}
            </p>
            <Button
              type="danger"
              className="m-t-16"
              block
              onClick={this.showDeleteConfirm}
            >
              <span>BAN</span>
            </Button>
          </Card>
        </Col>
      </Row>
    )
  }
}
