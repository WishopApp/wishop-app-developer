import gql from 'graphql-tag'

export const STORES = gql`
  query Stores {
    stores {
      _id
      name
      avatarUrl
      status
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

export const STORE = gql`
  query Store($id: ID) {
    store(_id: $id) {
      _id
      name
      description
      avatarUrl
      status
      owner {
        _id
        profile {
          name
          telNo
        }
      }
      beacons {
        _id
        name
        status
        createdAt
      }
      products {
        _id
        name
        status
        photoUrlList
        createdAt
      }
      branchs {
        _id
        name
        telNo
      }
    }
  }
`
