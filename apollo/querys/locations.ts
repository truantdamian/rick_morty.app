import { gql } from '@apollo/client'

export const GET_LOCATIONS = gql`
  query getLocations($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      results {
        name
        dimension
      }
    }
  }
`
