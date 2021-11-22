import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from 'apollo/querys/characters'
import Character from 'interfaces/character'
import CardItem from 'components/CardItem/CardItem'
import styled from 'styled-components'
import { useContext, useEffect, useRef, useState } from 'react'
import useInfiniteScroll from 'hooks/useInfinteScroll'
import Loading from 'components/Loading/Loading'
import { AppContext, actions } from 'contexts/AppContextProvider'

const Characters = () => {
  const SectionList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    background-color: #f3f2ef;
    padding: 0.5rem 4rem;
  `

  const refList = useRef(null)
  const refCharacters = useRef([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  useInfiniteScroll(refList, setPage)
  const { state, dispatch } = useContext(AppContext)

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page, name: state.search },
  })

  const lastFilter = useRef({ search: state.search, page: null })

  useEffect(() => {
    refCharacters.current = data?.characters?.results || []
  }, [data])

  useEffect(() => {
    setPage(1)
    document.getElementById('main').scroll(0, 0)
  }, [state.search])

  useEffect(() => {
    if (!loading && data && lastFilter.current.search !== state.search) {
      setCharacters(data.characters.results)
      lastFilter.current.search = state.search
    }

    if (lastFilter.current.search !== state.search && state.search === '') {
      setCharacters(refCharacters.current)
    }
  }, [loading, data, state.search])

  useEffect(() => {
    if (!loading && data && lastFilter.current.page !== page) {
      setCharacters([...characters, ...data.characters.results])
      lastFilter.current.page = page
    }
  }, [loading, data, page])

  const handleToggleFavorite = (item) => {
    dispatch({ type: actions.toggleFavorite, payload: item })
  }

  return (
    <>
      {loading && <Loading />}
      <SectionList ref={refList}>
        {characters.map((item: Character) => (
          <CardItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            isFavorite={state.favorites.some((x) => x.id === item.id)}
            addFavorite={() => handleToggleFavorite(item)}
          />
        ))}
      </SectionList>
    </>
  )
}

export default Characters
