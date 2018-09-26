import gql from 'graphql-tag'

export const CREATE_SUB_CATEGORY = gql`
  mutation createSubCategory($categoryId: ID!, $name: String!) {
    createSubCategory(categoryId: $categoryId, name: $name) {
      _id
    }
  }
`

export const CREATE_SUB_CATEGORY_PROP = gql`
  mutation createSubCategoryProp(
    $subCategoryId: ID!
    $name: String!
    $values: [String]
  ) {
    createSubCategoryProp(
      subCategoryId: $subCategoryId
      name: $name
      values: $values
    ) {
      _id
    }
  }
`

export const UPDATE_SUB_CATEGORY = gql`
  mutation updateSubCategory($id: ID!, $name: String!) {
    updateSubCategory(_id: $id, name: $name) {
      _id
      name
    }
  }
`

export const UPDATE_SUB_CATEGORY_PROP = gql`
  mutation updateSubCategoryProp($id: ID!, $name: String!, $values: [String]!) {
    updateSubCategoryProp(_id: $id, name: $name, values: $values) {
      _id
      name
      values
    }
  }
`
