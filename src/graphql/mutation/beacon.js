import gql from 'graphql-tag'

export const CREATE_BEACON = gql`
  mutation CreateBeacon(
    $name: String!
    $type: BEACON_TYPES
    $status: BEACON_STATUSES
    $locationX: Int
    $locationY: Int
    $identifier: String
    $uuid: String!
    $major: Int!
    $minor: Int!
    $assignId: ID
  ) {
    createBeacon(
      name: $name
      type: $type
      status: $status
      locationX: $locationX
      locationY: $locationY
      identifier: $identifier
      uuid: $uuid
      major: $major
      minor: $minor
      assignId: $assignId
    ) {
      _id
      name
      type
      status
      locationX
      locationY
      identifier
      uuid
      major
      minor
      assignId
      history {
        title
        type
        createdAt
      }
      createdAt
    }
  }
`
