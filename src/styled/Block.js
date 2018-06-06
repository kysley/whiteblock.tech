import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { theme } from 'Styled/Utils'

const BlockWrapper = styled(Flex)`
  display: flex;
  width: 65vw;
  flex-direction: row;
  margin: 12vh auto 0 auto;
  margin-bottom: 15vh;

  @media(max-width: 812px) {
    width: 90vw;
  }
`

const BlockHeader = styled.h2`
  font-family: Theinhardt-Bold;
  font-size: ${theme.font.section};
  color: #fff;
  width: 25%;
  line-height: 1.15;
  margin-left: 10%;
`

const BlockParagraph = styled.p`
  color: inherit;
  font-size: ${theme.font.secondary};
  padding: 3rem;
`

const Block = styled(Box)`
  border-radius: 4px 0px 0px 4px;
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
