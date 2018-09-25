import gql from 'graphql-tag'

export const CREATE_CATEGORY = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      _id
    }
  }
`

export const CREATE_CATEGORY_PROP = gql`
  mutation createCategoryProp($categoryId: ID!, $name: String!, $values: [String]) {
    createCategoryProp(categoryId: $categoryId, name: $name, values: $values) {
      _id
    }
  }
`
