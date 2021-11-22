import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Loading = () => {
  const [active, setActive] = useState(1)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive(active + 1)
    }, 500)
    return () => {
      clearInterval(interval)
    }
  })

  useEffect(() => {
    if (active > 8) {
      setActive(1)
    }
  }, [active])

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `

  const Content = styled.div`
    background-color: #f00;
    width: 100px;
    height: 150px;
    position: fixed;
    z-index: 99999;
    top: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #222;
    gap: 10px;
    opacity: 0.8;
  `

  const Square = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.active === active ? '#333' : '#bbb')};

    position: absolute;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
  `

  const Line = styled.div`
    width: 100%;
    height: 10px;
    background-color: transparent;
    position: relative;
  `

  return (
    <Container>
      <Content>
        <Line>
          <Square right="10px" active={1} />
          <Square left="10px" active={1} />
        </Line>
        <Line>
          <Square right="10px" active={2} />
          <Square left="10px" active={2} />
        </Line>
        <Line>
          <Square right="10px" active={3} />
          <Square left="10px" active={3} />
        </Line>
        <Line>
          <Square right="10px" active={4} />
          <Square left="10px" active={4} />
        </Line>
        <Line>
          <Square right="10px" active={5} />
          <Square left="10px" active={5} />
        </Line>
        <Line>
          <Square right="10px" active={6} />
          <Square left="10px" active={6} />
        </Line>
        <Line>
          <Square right="10px" active={7} />
          <Square left="10px" active={7} />
        </Line>
        <Line>
          <Square right="10px" active={8} />
          <Square left="10px" active={8} />
        </Line>
      </Content>
    </Container>
  )
}

export default Loading
