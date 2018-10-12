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

export const BEACON_TICKETS = gql`
  query BeaconTickets(
    $storeId: ID
    $status: BEACON_TICKET_STATUSES
    $type: BEACON_TICKET_TYPES
  ) {
    beaconRequestTickets(storeId: $storeId, status: $status, type: $type) {
      _id
      storeId
      telNo
      type
      status
      createdAt
      store {
        name
      }
    }
  }
`

export const BEACON_TICKET_STATISTIC = gql`
  query BeaconTicketStatistic {
    beaconTicketStatistic {
      new
      complete
      reject
      total
    }
  }
`
