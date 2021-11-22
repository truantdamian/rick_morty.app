import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

interface Props {
  id: number
  image: string
  name: string
  addFavorite: any
  isFavorite: boolean
}

const Title = styled.p`
  font-weight: bold;
  font-size: 1rem;
`

const SectionContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #d8d6d3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SectionFooter = styled.div`
  border-top: 1px solid #d8d6d3;
  display: flex;
  gap: 1rem;
  align-items: center;
`

const SectionImage = styled.div`
  width: 100%;
`

const StyledMoreInfo = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #227be0;
  :hover {
    text-decoration: underline;
  }
`

const StyledFavorite = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
`

const CardItem = ({
  id,
  name,
  image = '',
  addFavorite,
  isFavorite = false,
}: Props) => {
  return (
    <SectionContainer id={id}>
      <Title>{name}</Title>
      {image !== '' && (
        <SectionImage>
          <Image
            src={image}
            alt={name}
            layout={'responsive'}
            width={200}
            height={200}
          />
        </SectionImage>
      )}
      <SectionFooter>
        <StyledFavorite onClick={addFavorite}>
          {!isFavorite && <MdFavoriteBorder size="1.3rem" />}
          {isFavorite && <MdFavorite size="1.3rem" color="#f00" />}
        </StyledFavorite>
        <Link href={`characters/${id}`} passHref>
          <StyledMoreInfo>Más info...</StyledMoreInfo>
        </Link>
      </SectionFooter>
    </SectionContainer>
  )
}

export default CardItem
