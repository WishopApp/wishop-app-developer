import gql from 'graphql-tag'

export const USERS = gql`
  query Users {
    users {
      _id
      email
      password
      facebookId
      profile {
        name
        telNo
        avatarUrl
        address {
          district
          province
          country
          zipcode
          detail
        }
      }
    }
  }
`

export const USER_STATISTIC = gql`
  query UserStatistic {
    userStatistic {
      customer
      shopOwner
      banned
      total
    }
  }
`

export const USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      _id
      email
      facebookId
      profile {
        name
        telNo
        avatarUrl
        address {
          district
          province
          country
          zipcode
          detail
        }
      }
      status
      createdAt
    }
  }
`
