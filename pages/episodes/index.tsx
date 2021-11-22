import { useQuery } from '@apollo/client'
import { GET_EPISODES } from 'apollo/querys/episodes'
import ListItem from 'components/ListItem/ListItem'
import Loading from 'components/Loading/Loading'
import { AppContext } from 'contexts/AppContextProvider'
import useInfiniteScroll from 'hooks/useInfinteScroll'
import Episode from 'interfaces/episode'
import { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Episodes = () => {
  const SectionList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    background-color: #f3f2ef;
    padding: 1rem;
    position: relative;
  `

  const refList = useRef(null)
  const [epidodeData, setEpisodeData] = useState<Episode[]>([])
  const [page, setPage] = useState<number>(1)
  useInfiniteScroll(refList, setPage)
  const { state } = useContext(AppContext)

  const { loading, data } = useQuery(GET_EPISODES, {
    variables: { page, name: state.search },
  })

  useEffect(() => {
    if (loading || !data) return
    setEpisodeData([...epidodeData, ...data.episodes.results])
  }, [loading, data])

  return (
    <>
      {loading && <Loading />}
      <SectionList ref={refList}>
        {epidodeData.map(({ id, name, airDate }: Episode, index) => (
          <ListItem key={id}>
            <span>
              {name} ({airDate})
            </span>
          </ListItem>
        ))}
      </SectionList>
    </>
  )
}
export default Episodes
