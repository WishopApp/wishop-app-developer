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
