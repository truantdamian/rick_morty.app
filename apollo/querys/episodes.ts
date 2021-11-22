import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      results {
        id
        name
        airDate: air_date
      }
    }
  }
`
