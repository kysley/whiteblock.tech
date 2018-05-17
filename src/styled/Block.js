import styled from 'styled-components'
import { Box } from 'grid-styled'

const BlockWrapper = styled(Box)`
  display: flex;
  width: 70vw;
  flex-direction: row;
  margin: 12vw auto 0 auto;
  margin-bottom: 15vh;
`
const BlockHeader = styled.h2`
  font-family: Theinhardt-Bold;
  font-size: 2rem;
  color: #fff;
  width: 25%;
  line-height: 1.15;
  margin-left: 10%;
`

const BlockParagraph = styled.p`
  color: inherit;
  font-size: 1.15rem;
  padding: 3rem;
`

const Block = styled(Box)`
  border-radius: 3px;
  display: flex;
  justify-content: ${props => props.pso ? 'flex-start' : 'center'};
  align-items: center;
  height: 18em;
  background: ${props => props.pso ? '#6074c8' : '#fff'};
  color: ${props => props.pso ? '#fff' : '#222222'};
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .07),
  0px 18px 35px 0px rgba(50, 50, 93, .10);
`

export {
  BlockWrapper,
  BlockHeader,
  BlockParagraph,
  Block,
}
