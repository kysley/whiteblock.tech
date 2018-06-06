import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { theme } from 'Styled/Utils'


const FooterWrapper = Flex.extend`
  background: ${theme.color.lightPurple};
  justify-content: center;
`

const FooterContainer = Box.extend`
  color: #fff;
  width: 65vw;

`

export {
  FooterWrapper,
  FooterContainer,
}
