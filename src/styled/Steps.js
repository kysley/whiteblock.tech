import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { theme } from 'Styled/Utils'
import checkmark from '../assets/images/checkmark-small.svg'

const ListWrapper = Flex.extend`
  align-items: center;
  flex-direction: column;
`

const ListContainer = styled(Box)`
  display: flex;
  justify-content: center;
  width: 65vw;
  flex-direction: row;
  background: ${theme.color.green}
  border-radius: 4px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .07),
  0px 18px 35px 0px rgba(50, 50, 93, .10);
  margin-bottom: 10vh;
  flex-wrap: wrap;

  @media(max-width: 812px) {
    width: 90vw;
  }
`

const Half = styled(Box)`
  padding: 1em;
  background: ${props => props.shaded ? '' : '#f6f9fc'};
  border-radius: ${props => props.shaded ? '' : '4px 0px 0px 4px'};
`

const Description = styled.p`
  font-size: ${theme.font.secondary};
  color: #fff;
  margin: 0;
  padding: 0.75em 2em;
`

const StepList = styled.ul`
  list-style: none;

  @media(max-width: 812px) {
    padding-left: 0.5em
  }
`

const ListItem = styled.li`
  position: relative;
  padding-left: 2em;
  padding-bottom: .75em;
  font-weight: 300;
  font-size: 1.2rem;
  color: ${theme.color.altTitle};

  &:before {
    content: url(${checkmark});
    position: absolute;
    top: 3px;
    left: 0;
    width: 19px;
  }
`

export {
  ListWrapper,
  ListContainer,
  Half,
  Description,
  StepList,
  ListItem,
}
