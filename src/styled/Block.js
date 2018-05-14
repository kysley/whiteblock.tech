import styled from 'styled-components'
import { Box } from 'grid-styled'

const BlockWrapper = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: row;
  margin: 12vh auto 0 auto;
`
const BlockHeader = styled.h2`
  font-size: 2rem;
  color: #fff;
`

const Block = styled.div`
  display: flex
  height: 15em;
  background: #6074c8;
`

export {
  BlockWrapper,
  BlockHeader,
  Block,
}
