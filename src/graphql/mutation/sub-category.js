import gql from 'graphql-tag'

export const CREATE_SUB_CATEGORY = gql`
  mutation createSubCategory($categoryId: ID!, $name: String!) {
    createSubCategory(categoryId: $categoryId, name: $name) {
      _id
    }
  }
`

export const CREATE_SUB_CATEGORY_PROP = gql`
  mutation createSubCategoryProp($subCategoryId: ID!, $name: String!, $values: [String]) {
    createSubCategoryProp(subCategoryId: $subCategoryId, name: $name, values: $values) {
      _id
    }
  }
`
