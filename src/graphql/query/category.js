import gql from 'graphql-tag'

export const CATEGORIES = gql`
  query categories($limit: Int, $skip: Int) {
    categories(limit: $limit, skip: $skip) {
      _id
      name
    }
  }
`
