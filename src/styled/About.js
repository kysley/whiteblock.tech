import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { theme } from 'Styled/Utils'

const Wrapper = styled.div`
  padding-top: 7vh;
  padding-left: 15vw;
  padding-bottom: 45vh;
  width: 40vw;
`

const Illustration = styled.img`
  position: absolute;
  width: 100%;
  right: 0;
  top: 0;
  z-index: -1;
`

const Primary = styled.h1`
  font-family: Theinhardt;
  font-weight: 300;
  font-size: 3rem;
  width: 48%;
  color: ${theme.color.white};
  display: inline-block;
  line-height: 1;
`

const Secondary = styled.h2`
  font-family: Theinhardt;
  font-size: 1.15rem;
  font-weight: 300;
  width: 67%;
  color: ${theme.color.white};
`

const SectionWrapper = styled(Flex)`
  display: flex;
  width: 65vw;
  flex-direction: row;
  margin: 0 auto 0 auto;
  padding-top: 10vh;
  padding-bottom: 4vh;
`

const Block = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18em;

  > p {
    width: 80%;
    font-size: ${theme.font.secondary};
  }
`

const BlockImage = styled.img`
  width: 50%;
`

export {
  Wrapper,
  Illustration,
  Primary,
  Secondary,
  SectionWrapper,
  Block,
  BlockImage,
}
