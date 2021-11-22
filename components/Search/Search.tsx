import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import { AppContext, actions } from 'contexts/AppContextProvider'
import { useContext } from 'react'
const SectionSearchContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #d8d6d3;
`

const SectionSearchIcon = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SectionSearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem;
  border: 0;
`

const Search = () => {
  const { state, dispatch } = useContext(AppContext)

  const handleChange = ({ target }) => {
    dispatch({ type: actions.search, payload: target.value })
  }

  return (
    <SectionSearchContainer>
      <SectionSearchIcon>
        <MdSearch size="1.3rem" />
      </SectionSearchIcon>
      <SectionSearchInput
        type="text"
        placeholder="Buscar..."
        value={state.search}
        onChange={handleChange}
      />
    </SectionSearchContainer>
  )
}

export default Search
