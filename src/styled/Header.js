import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { theme } from 'Styled/Utils'

const HeaderWrapper = styled.header`
  display: inline-block;
  padding-left: 15vw;
  padding-top: 5vh;
`

const HeaderLinks = styled.div`
  /* position: fixed; */
  display: flex;
  width: 10vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${theme.color.white};
`

const HeaderLink = styled(Link)`
  color: ${theme.color.darkPurple};
  text-decoration: none;
  font-size: ${theme.font.button};
  transition: all .3s ease-in-out;

  &:hover {
    color: ${theme.color.altSecondary};
  }
`

export {
  HeaderWrapper,
  HeaderLinks,
  HeaderLink,
}
