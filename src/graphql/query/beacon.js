import gql from 'graphql-tag'

export const BEACONS = gql`
  query Beacons($assignId: ID, $type: BEACON_TYPES, $status: BEACON_STATUSES) {
    beacons(assignId: $assignId, type: $type, status: $status) {
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

export const BEACON = gql`
  query Beacon(
    $id: ID
    $assignId: ID
    $uuid: String
    $status: BEACON_STATUSES
    $type: BEACON_TYPES
  ) {
    beacon(
      _id: $id
      assignId: $assignId
      uuid: $uuid
      type: $type
      status: $status
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

export const BEACON_STATISTIC = gql`
  query BeaconStatistic {
    beaconStatistic {
      idle
      inuse
      expire
      total
    }
  }
`
