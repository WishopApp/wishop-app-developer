import React, { Component } from 'react'
import { Table, Divider, Row, Modal, Input, Icon, Col, Button } from 'antd'
import { Mutation } from 'react-apollo'

import {
  UPDATE_SUB_CATEGORY,
  UPDATE_SUB_CATEGORY_PROP,
} from '../../graphql/mutation/sub-category'

class SubCategoryTable extends Component {
  state = {
    visible: false,
    name: '',
    subCategory: {},
    properties: [{ _id: '', name: '', values: [''] }],
  }

  addProp = () => {
    const properties = [...this.state.properties]
    properties.push({ name: '', values: [''] })

    this.setState({
      properties,
    })
  }

  changePropName = (value, propIndex) => {
    const properties = [...this.state.properties]
    properties[propIndex].name = value

    this.setState({
      properties,
    })
  }

  removeProp = propIndex => {
    if (propIndex === 0) {
      return null
    }

    const properties = [...this.state.properties]
    properties.splice(propIndex, 1)

    this.setState({
      properties,
    })
  }

  addValue = propIndex => {
    const properties = [...this.state.properties]
    const values = [...properties[propIndex].values]

    values.push('')
    properties[propIndex].values = values
    this.setState({
      properties,
    })
  }

  changeValue = (value, propIndex, valueIndex) => {
    const properties = [...this.state.properties]
    const values = [...properties[propIndex].values]

    values[valueIndex] = value
    properties[propIndex].values = values

    this.setState({
      properties,
    })
  }

  removeValue = (propIndex, valueIndex) => {
    const properties = [...this.state.properties]
    const values = [...properties[propIndex].values]

    values.splice(valueIndex, 1)
    properties[propIndex].values = values

    this.setState({
      properties,
    })
  }

  updateSubCategory = async () => {
    try {
      await this.props.updateSubCategory({
        variables: {
          id: this.state.subCategory._id,
          name: this.state.name,
        },
      })

      Promise.all(
        await this.state.properties.map(p => {
          return this.props.updateSubCategoryProp({
            variables: {
              id: p._id,
              name: p.name,
              values: p.values,
            },
          })
        })
      )

      this.setState({
        visible: false,
        name: '',
        subCategory: {},
        properties: [{ _id: '', name: '', values: [''] }],
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text, record) => (
          <p>{record.category && record.category.name}</p>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <a
            onClick={() => {
              this.setState({
                visible: true,
                name: record.name,
                subCategory: record,
                properties: record.properties,
              })
            }}
          >
            EDIT
          </a>
        ),
      },
    ]

    return (
      <div>
        <Table columns={columns} dataSource={this.props.dataSource} />

        <Modal
          title="EDIT SUB CATEGORY"
          visible={this.state.visible}
          onOk={this.updateSubCategory}
          onCancel={() => this.setState({ visible: false })}
          okText="SAVE CHANGE"
          cancelText="CLOSE"
        >
          <p className="m-b-16">Name</p>
          <Input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Divider />
          {this.state.properties.map((c, propIndex) => (
            <div key={propIndex}>
              <Row type="flex" justify="space-between">
                <p>Property {propIndex + 1}</p>
                {propIndex !== 0 && (
                  <Button
                    type="danger"
                    onClick={() => this.removeProp(propIndex)}
                  >
                    <Icon type="minus" />
                    <span>DELETE</span>
                  </Button>
                )}
              </Row>
              <p className="m-t-16 m-b-16">Name</p>
              <Input
                type="text"
                value={c.name}
                onChange={e => this.changePropName(e.target.value, propIndex)}
              />
              <p className="m-t-16 m-b-16">Choices</p>
              {c.values.map((c, valueIndex) => (
                <div key={valueIndex}>
                  <Row gutter={16}>
                    <Col span={20}>
                      <Input
                        type="text"
                        value={c}
                        onChange={e =>
                          this.changeValue(
                            e.target.value,
                            propIndex,
                            valueIndex
                          )
                        }
                        className="m-b-16"
                      />
                    </Col>
                    {valueIndex !== 0 && (
                      <Col span={2}>
                        <Button
                          type="danger"
                          onClick={() =>
                            this.removeValue(propIndex, valueIndex)
                          }
                        >
                          <Icon type="minus" />
                        </Button>
                      </Col>
                    )}
                  </Row>
                </div>
              ))}
              <Button
                type="dashed"
                block
                className="m-t-16"
                onClick={() => this.addValue(propIndex)}
              >
                <Icon type="plus" />
                ADD
              </Button>
              <Divider />
            </div>
          ))}
          <Button type="dashed" block className="m-t-16" onClick={this.addProp}>
            <Icon type="plus" />
            ADD PROPERTY
          </Button>
        </Modal>
      </div>
    )
  }
}

const WithUpdateCate = props => (
  <Mutation mutation={UPDATE_SUB_CATEGORY}>
    {(updateSubCategory, _) => (
      <SubCategoryTable updateSubCategory={updateSubCategory} {...props} />
    )}
  </Mutation>
)

const WithUpdateCateProp = props => (
  <Mutation mutation={UPDATE_SUB_CATEGORY_PROP}>
    {(updateSubCategoryProp, _) => (
      <WithUpdateCate
        updateSubCategoryProp={updateSubCategoryProp}
        {...props}
      />
    )}
  </Mutation>
)

export default WithUpdateCateProp
