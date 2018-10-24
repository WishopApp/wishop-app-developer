import React, { Component } from 'react'
import { Table, Divider, Row, Modal, Input, Icon, Col, Button } from 'antd'
import { Mutation } from 'react-apollo'

import {
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_PROP,
} from '../../graphql/mutation/category'
import ImageUpload from '../../components/ImageUpload'
import axios from '../../utils/axios-creator'
import ExamplePhoto from '../../components/ExamplePhoto'

class CategoryTable extends Component {
  state = {
    cateVisible: false,
    cateName: '',
    category: {},
    properties: [{ _id: '', name: '', values: [''] }],
    logo: '',
    newLogo: '',
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

  updateCategory = async () => {
    try {
      let newLogo

      if (this.state.newLogo) {
        const formData = new FormData()
        formData.append('photo', this.state.newLogo)

        const headers = {
          'content-type': 'multipart/form-data',
        }

        const resp = await axios.post('/upload', formData, headers)

        newLogo = resp.data.result.fileLocation
      }

      await this.props.updateCategory({
        variables: {
          id: this.state.category._id,
          name: this.state.cateName,
          logo: newLogo,
        },
      })

      Promise.all(
        await this.state.properties.map(p => {
          return this.props.updateCategoryProp({
            variables: {
              id: p._id,
              name: p.name,
              values: p.values,
            },
          })
        })
      )

      this.setState({
        cateVisible: false,
        cateName: '',
        category: {},
        properties: [{ _id: '', name: '', values: [''] }],
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const columns = [
      {
        title: 'Logo',
        dataIndex: 'logo',
        key: 'logo',
        width: 150,
        render: logo => <ExamplePhoto img={logo} />,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <div>
            <a
              onClick={() => {
                this.setState({
                  cateVisible: true,
                  cateName: record.name,
                  category: record,
                  properties: record.properties,
                  logo: record.logo,
                })
              }}
            >
              EDIT
            </a>
            <Divider type="vertical" />
          </div>
        ),
      },
    ]

    return (
      <div>
        <Table columns={columns} dataSource={this.props.dataSource} />

        <Modal
          title="EDIT CATEGORY"
          visible={this.state.cateVisible}
          onOk={this.updateCategory}
          onCancel={() => this.setState({ cateVisible: false })}
          okText="SAVE CHANGE"
          cancelText="CLOSE"
        >
          <p className="m-b-16">Logo</p>
          <ImageUpload
            name="newLogo"
            img={this.state.logo}
            onChange={(key, value) => this.setState({ [key]: value })}
          />
          <p className="m-b-16">Name</p>
          <Input
            type="text"
            value={this.state.cateName}
            onChange={e => this.setState({ cateName: e.target.value })}
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
  <Mutation mutation={UPDATE_CATEGORY}>
    {(updateCategory, _) => (
      <CategoryTable updateCategory={updateCategory} {...props} />
    )}
  </Mutation>
)

const WithUpdateCateProp = props => (
  <Mutation mutation={UPDATE_CATEGORY_PROP}>
    {(updateCategory, _) => (
      <WithUpdateCate updateCategoryProp={updateCategory} {...props} />
    )}
  </Mutation>
)

export default WithUpdateCateProp
