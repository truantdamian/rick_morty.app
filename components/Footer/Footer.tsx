import Menu from 'components/Menu/Menu'
import styled from 'styled-components'

interface Props {
  className: string
}

const SectionFooter = styled.footer`
  background-color: #888;
  color: #ccc;
  font-weight: bold;
  border-top: 1px solid #d8d6d3;
`

const Footer = ({ className }: Props) => (
  <SectionFooter className={className}>
    <Menu />
  </SectionFooter>
)

export default Footer
