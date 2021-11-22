import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`
