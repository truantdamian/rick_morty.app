import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from 'apollo/querys/locations'
import ListItem from 'components/ListItem/ListItem'
import Loading from 'components/Loading/Loading'
import { AppContext } from 'contexts/AppContextProvider'
import useInfiniteScroll from 'hooks/useInfinteScroll'
import Location from 'interfaces/location'
import { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Locations = () => {
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
  const [locationData, setLocationData] = useState<Location[]>([])
  const [page, setPage] = useState<number>(1)
  useInfiniteScroll(refList, setPage)
  const { state } = useContext(AppContext)

  const { loading, data } = useQuery(GET_LOCATIONS, {
    variables: { page, name: state.search },
  })

  useEffect(() => {
    if (loading || !data) return
    setLocationData([...locationData, ...data.locations.results])
  }, [loading, data])

  return (
    <>
      {loading && <Loading />}
      <SectionList ref={refList}>
        {locationData.map(({ id, name, dimension }: Location, index) => (
          <ListItem key={id}>
            <span>
              {name} ({dimension})
            </span>
          </ListItem>
        ))}
      </SectionList>
    </>
  )
}
export default Locations
