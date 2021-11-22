import styled from 'styled-components'

const SectionContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
  width: 100%;
`

const ListItem = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>
}

export default ListItem
