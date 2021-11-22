import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import {
  MdHome,
  MdPeople,
  MdTheaters,
  MdLocationSearching,
} from 'react-icons/md'

import styled from 'styled-components'

const Menu = () => {
  const router = useRouter()
  const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;
    background-color: #121212;
  `

  const ButtonNavigation = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) =>
      props.routes.some((x) => x === router.pathname) ? '#fff' : '#777'};
  `

  return (
    <Navigation>
      <Link href="/" passHref={true}>
        <ButtonNavigation routes={['/']}>
          <MdHome size="1.3rem" />
          <span>Inicio</span>
        </ButtonNavigation>
      </Link>
      <Link href="/characters" passHref={true}>
        <ButtonNavigation routes={['/characters', '/characters/[id]']}>
          <MdPeople size="1.3rem" />
          <span>Personajes</span>
        </ButtonNavigation>
      </Link>
      <Link href="/episodes" passHref={true}>
        <ButtonNavigation routes={['/episodes', '/episodes/[id]']}>
          <MdTheaters size="1.3rem" />
          <span>Episodios</span>
        </ButtonNavigation>
      </Link>
      <Link href="/locations" passHref={true}>
        <ButtonNavigation routes={['/locations', '/locations/[id]']}>
          <MdLocationSearching size="1.3rem" />
          <span>Lugares</span>
        </ButtonNavigation>
      </Link>
    </Navigation>
  )
}

export default Menu
