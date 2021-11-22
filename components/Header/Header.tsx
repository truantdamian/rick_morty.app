import Search from 'components/Search/Search'

interface Props {
  className: string
}

const Header = ({ className }: Props) => (
  <header className={className}>
    <Search />
  </header>
)

export default Header
