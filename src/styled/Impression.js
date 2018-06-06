import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { theme } from 'Styled/Utils'

const ImpWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  align-items: center;
  justify-content: center;
`

const IBlockWrapper = styled(Flex)`
  display: flex;
  width: 60vw;
  flex-direction: row;
  margin-top: 7vh;
`

const ImpBlock = styled(Box)`
`

const ImpImg = styled.img`
  height: 7em;
`

const BlockTitle = styled.h3`
  color: ${theme.color.altTitle};
`

const BlockDesc = styled.p`
  color: ${theme.color.altSecondary};
  width: 90%;
`

export {
  ImpWrapper,
  IBlockWrapper,
  ImpBlock,
  ImpImg,
  BlockTitle,
  BlockDesc,
}
