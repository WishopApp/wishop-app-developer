import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon, Modal, AutoComplete, Input, Divider } from 'antd'
import { Mutation } from 'react-apollo'

import CategoryTable from '../components/Category/CategoryTable'
import SubCategoryTable from '../components/Category/SubCategoryTable'
import { CREATE_CATEGORY } from '../graphql/mutation/category'

class Category extends Component {
  state = {
    cateVisible: false,
    subCateVisible: false,
    cateName: '',
    cateProps: [{ name: '', choices: [''] }],
    dataSource: ['A', 'B', 'C'],
  }

  createCategory = async e => {
    try {
      e.preventDefault()

      console.log('CREATE')

      const { data } = await this.props.createCategory({
        variables: { cateName: this.state.cateName },
      })

      console.log(data)

      Promise.all(
        await this.state.cateProps.map(p => {
          return this.props.createCategoryProp({
            variables: { categoryId: data._id, name: p.name, values: p.choices },
          })
        }),
      )
    } catch (err) {
      console.log(err)
    }
  }

  addProp = () => {
    const cateProps = [...this.state.cateProps]
    cateProps.push({ name: '', choices: [''] })

    this.setState({
      cateProps,
    })
  }

  changePropName = (value, index) => {
    const cateProps = [...this.state.cateProps]
    cateProps[index].name = value

    this.setState({
      cateProps,
    })
  }

  removeProp = propIndex => {
    if (propIndex === 0) {
      return null
    }

    const cateProps = [...this.state.cateProps]
    cateProps.splice(propIndex, 1)

    this.setState({
      cateProps,
    })
  }

  addCateChoice = propIndex => {
    const cateProps = [...this.state.cateProps]
    const choices = [...cateProps[propIndex].choices]
    choices.push('')

    cateProps[propIndex].choices = choices
    this.setState({
      cateProps,
    })
  }

  changeCateChoice = (value, propIndex, choiceIndex) => {
    const cateProps = [...this.state.cateProps]
    const choices = [...cateProps[propIndex].choices]
    choices[choiceIndex] = value

    cateProps[propIndex].choices = choices
    this.setState({
      cateProps,
    })
  }

  removeCateChoice = (propIndex, choiceIndex) => {
    if (choiceIndex === 0) {
      return null
    }

    const cateProps = [...this.state.cateProps]
    const choices = [...cateProps[propIndex].choices]
    choices.splice(choiceIndex, 1)

    cateProps[propIndex].choices = choices
    this.setState({
      cateProps,
    })
  }

  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Col span={24}>
            <h3>CATEGORY</h3>
          </Col>
          <Col span={24}>
            <Card className="m-t-16">
              <Row type="flex" justify="end" className="m-b-16">
                <Button type="primary" onClick={() => this.setState({ cateVisible: true })}>
                  <Icon type="plus" />
                  ADD NEW
                </Button>
              </Row>
              <CategoryTable />
            </Card>
          </Col>
        </Col>

        <Col span={12}>
          <Col span={24}>
            <h3>SUB CATEGORY</h3>
          </Col>
          <Col span={24}>
            <Card className="m-t-16">
              <Row type="flex" justify="end" className="m-b-16">
                <Button type="primary" onClick={() => this.setState({ subCateVisible: true })}>
                  <Icon type="plus" />
                  ADD NEW
                </Button>
              </Row>
              <SubCategoryTable />
            </Card>
          </Col>
        </Col>

        <Modal
          title="NEW CATEGORY"
          visible={this.state.cateVisible}
          onOk={this.createCategory}
          onCancel={() => this.setState({ cateVisible: false })}
        >
          <p className="m-b-16">Name</p>
          <Input
            type="text"
            value={this.state.cateName}
            onChange={e => this.setState({ cateName: e.target.value })}
          />
          <Divider />
          {this.state.cateProps.map((c, propIndex) => (
            <div key={propIndex}>
              <Row type="flex" justify="space-between">
                <p>Property {propIndex + 1}</p>
                {propIndex !== 0 && (
                  <Button type="danger" onClick={() => this.removeProp(propIndex)}>
                    <Icon type="minus" />
                    <span>DELETE</span>
                  </Button>
                )}
              </Row>
              <p className="m-t-16 m-b-16">Name</p>
              <Input
                type="text"
                value={this.state.cateProps[propIndex].name}
                onChange={e => this.changePropName(e.target.value, propIndex)}
              />
              <p className="m-t-16 m-b-16">Choices</p>
              {this.state.cateProps[propIndex].choices.map((c, choiceIndex) => (
                <div key={choiceIndex}>
                  <Row gutter={16}>
                    <Col span={20}>
                      <Input
                        type="text"
                        value={c}
                        onChange={e =>
                          this.changeCateChoice(e.target.value, propIndex, choiceIndex)
                        }
                        className="m-b-16"
                      />
                    </Col>
                    {choiceIndex !== 0 && (
                      <Col span={2}>
                        <Button
                          type="danger"
                          onClick={() => this.removeCateChoice(propIndex, choiceIndex)}
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
                onClick={() => this.addCateChoice(propIndex)}
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

        <Modal
          title="NEW SUB CATEGORY"
          visible={this.state.subCateVisible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ subCateVisible: false })}
        >
          <p className="m-b-16">Category</p>
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: '100%' }}
            onSelect={this.changeStore}
            onSearch={this.handleSearch}
          />
          <p className="m-t-16 m-b-16">Name</p>
          <Input
            type="text"
            value={this.state.cateName}
            onChange={e => this.setState({ cateName: e.target.value })}
          />
          <Divider />
          {this.state.cateProps.map((c, propIndex) => (
            <div key={propIndex}>
              <Row type="flex" justify="space-between">
                <p>Property {propIndex + 1}</p>
                {propIndex !== 0 && (
                  <Button type="danger" onClick={() => this.removeProp(propIndex)}>
                    <Icon type="minus" />
                    <span>DELETE</span>
                  </Button>
                )}
              </Row>
              <p className="m-t-16 m-b-16">Name</p>
              <Input
                type="text"
                value={this.state.cateProps[propIndex].name}
                onChange={e => this.changePropName(e.target.value, propIndex)}
              />
              <p className="m-t-16 m-b-16">Choices</p>
              {this.state.cateProps[propIndex].choices.map((c, choiceIndex) => (
                <div key={choiceIndex}>
                  <Row gutter={16}>
                    <Col span={20}>
                      <Input
                        type="text"
                        value={c}
                        onChange={e =>
                          this.changeCateChoice(e.target.value, propIndex, choiceIndex)
                        }
                        className="m-b-16"
                      />
                    </Col>
                    {choiceIndex !== 0 && (
                      <Col span={2}>
                        <Button
                          type="danger"
                          onClick={() => this.removeCateChoice(propIndex, choiceIndex)}
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
                onClick={() => this.addCateChoice(propIndex)}
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
      </Row>
    )
  }
}

const CategoryMutation = props => (
  <Mutation mutation={CREATE_CATEGORY}>
    {(createCategory, _) => <Category createCategory={createCategory} {...props} />}
  </Mutation>
)

export default CategoryMutation
