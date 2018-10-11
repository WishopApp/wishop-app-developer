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

export const ASSIGN_BEACON_TO_STORE = gql`
  mutation AssignBeaconToStore($id: ID!, $assignId: ID!) {
    assignBeaconToStore(_id: $id, assignId: $assignId) {
      _id
    }
  }
`

export const ASSIGN_BEACON_TO_PRODUCT = gql`
  mutation AssignBeaconToProduct($id: ID!, $assignId: ID!) {
    assignBeaconToProduct(_id: $id, assignId: $assignId) {
      _id
    }
  }
`

export const UPDATE_BEACON = gql`
  mutation UpdateBeacon($id: ID!, $assignId: ID, $status: BEACON_STATUSES) {
    updateBeacon(_id: $id, status: $status, assignId: $assignId) {
      _id
    }
  }
`
