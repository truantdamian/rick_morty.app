import CardItem from 'components/CardItem/CardItem'
import { actions, AppContext } from 'contexts/AppContextProvider'
import Character from 'interfaces/character'
import { useContext } from 'react'
import styled from 'styled-components'

export default function Home() {
  const Container = styled.div`
    display: grid;
    gap: 1rem;
    padding: 1rem;
  `

  const StyledCard = styled.div`
    width: 30%;
  `

  const { state, dispatch } = useContext(AppContext)

  const handleToggleFavorite = (item) => {
    dispatch({ type: actions.toggleFavorite, payload: item })
  }

  return (
    <Container>
      {state.favorites.length === 0 && <b> No hay favoritos </b>}
      {state.favorites.map((item: Character, index) => (
        <StyledCard key={item.id}>
          <CardItem
            id={item.id}
            name={item.name}
            image={item.image}
            isFavorite={state.favorites.some((x) => x.id === item.id)}
            addFavorite={() => handleToggleFavorite(item)}
          />
        </StyledCard>
      ))}
    </Container>
  )
}
