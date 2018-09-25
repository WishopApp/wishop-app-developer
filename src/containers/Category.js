import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon, Modal, AutoComplete, Input, Divider } from 'antd'
import { Mutation, Query } from 'react-apollo'

import CategoryTable from '../components/Category/CategoryTable'
import SubCategoryTable from '../components/Category/SubCategoryTable'
import { CREATE_CATEGORY, CREATE_CATEGORY_PROP } from '../graphql/mutation/category'
import { CREATE_SUB_CATEGORY, CREATE_SUB_CATEGORY_PROP } from '../graphql/mutation/sub-category'
import { CATEGORIES } from '../graphql/query/category'
import { SUB_CATEGORIES } from '../graphql/query/sub-category'

class Category extends Component {
  state = {
    cateVisible: false,
    subCateVisible: false,
    cateName: '',
    cateProps: [{ name: '', choices: [''] }],
    subCateName: '',
    categoryId: '',
  }

  createCategory = async e => {
    try {
      e.preventDefault()

      const {
        data: { createCategory },
      } = await this.props.createCategory({
        variables: { name: this.state.cateName },
      })

      Promise.all(
        await this.state.cateProps.map(p => {
          return this.props.createCategoryProp({
            variables: { categoryId: createCategory._id, name: p.name, values: p.choices },
          })
        }),
      )

      this.setState({
        cateVisible: false,
        cateName: '',
        cateProps: [{ name: '', choices: [''] }],
      })
    } catch (err) {
      console.log(err)
    }
  }

  createSubCategory = async e => {
    try {
      e.preventDefault()

      const {
        data: { createSubCategory },
      } = await this.props.createSubCategory({
        variables: { categoryId: this.state.categoryId, name: this.state.subCateName },
      })

      Promise.all(
        await this.state.cateProps.map(p => {
          return this.props.createSubCategoryProp({
            variables: { subCategoryId: createSubCategory._id, name: p.name, values: p.choices },
          })
        }),
      )

      this.setState({
        subCateVisible: false,
        categoryId: '',
        subCateName: '',
        cateProps: [{ name: '', choices: [''] }],
      })
    } catch (err) {
      console.log(err)
    }
  }

  changeStore = value => {
    let categoryId = ''
    this.props.categories.map(c => {
      if (c.name === value) {
        categoryId = c._id
      }
    })

    this.setState({
      categoryId,
    })
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
    const autoCompleteSource = this.props.categories.map(c => c.name)

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
              <Query query={CATEGORIES}>
                {({ loading, error, data }) => {
                  if (loading) return 'Loading...'
                  if (error) return `Error! ${error.message}`

                  return <CategoryTable dataSource={data.categories} />
                }}
              </Query>
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
              <Query query={SUB_CATEGORIES}>
                {({ loading, error, data: { subCategories } }) => {
                  if (loading) return 'Loading...'
                  if (error) return `Error! ${error.message}`

                  return <SubCategoryTable dataSource={subCategories} />
                }}
              </Query>
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
          onOk={this.createSubCategory}
          onCancel={() => this.setState({ subCateVisible: false })}
        >
          <p className="m-b-16">Category</p>
          <AutoComplete
            dataSource={autoCompleteSource}
            style={{ width: '100%' }}
            onSelect={this.changeStore}
            onSearch={this.handleSearch}
          />
          <p className="m-t-16 m-b-16">Name</p>
          <Input
            type="text"
            value={this.state.subCateName}
            onChange={e => this.setState({ subCateName: e.target.value })}
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

const CategoryMutation2 = props => (
  <Mutation mutation={CREATE_CATEGORY_PROP}>
    {(createCategoryProp, _) => (
      <CategoryMutation createCategoryProp={createCategoryProp} {...props} />
    )}
  </Mutation>
)

const CategoryMutation3 = props => (
  <Mutation mutation={CREATE_SUB_CATEGORY}>
    {(createSubCategory, _) => (
      <CategoryMutation2 createSubCategory={createSubCategory} {...props} />
    )}
  </Mutation>
)

const CategoryMutation4 = props => (
  <Mutation mutation={CREATE_SUB_CATEGORY_PROP}>
    {(createSubCategoryProp, _) => (
      <CategoryMutation3 createSubCategoryProp={createSubCategoryProp} {...props} />
    )}
  </Mutation>
)

const CategoryQuery = props => (
  <Query query={CATEGORIES}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return <CategoryMutation4 categories={data.categories} {...props} />
    }}
  </Query>
)

export default CategoryQuery
