import gql from 'graphql-tag'

export const CREATE_CATEGORY = gql`
  mutation createCategory($name: String!, $logo: String!) {
    createCategory(name: $name, logo: $logo) {
      _id
    }
  }
`

export const CREATE_CATEGORY_PROP = gql`
  mutation createCategoryProp(
    $categoryId: ID!
    $name: String!
    $values: [String]
  ) {
    createCategoryProp(categoryId: $categoryId, name: $name, values: $values) {
      _id
    }
  }
`

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID!, $name: String!, $logo: String) {
    updateCategory(_id: $id, name: $name, logo: $logo) {
      _id
      name
    }
  }
`

export const UPDATE_CATEGORY_PROP = gql`
  mutation updateCategoryProp($id: ID!, $name: String!, $values: [String]!) {
    updateCategoryProp(_id: $id, name: $name, values: $values) {
      _id
      name
      values
    }
  }
`
