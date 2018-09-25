import gql from 'graphql-tag'

export const SUB_CATEGORIES = gql`
  query subCategories($limit: Int, $skip: Int, $categoryId: ID) {
    subCategories(limit: $limit, skip: $skip, categoryId: $categoryId) {
      _id
      name
      category {
        name
      }
    }
  }
`
