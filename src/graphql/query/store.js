import gql from 'graphql-tag'

export const STORES = gql`
  query Store {
    stores {
      _id
      name
      owner {
        _id
        email
        profile {
          name
        }
      }
    }
  }
`

export const STORE_STATISTIC = gql`
  query StoreStatistic {
    storeStatistic {
      open
      closed
      banned
      total
    }
  }
`
