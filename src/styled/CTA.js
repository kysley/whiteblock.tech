import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { theme } from 'Styled/Utils'

const CTAWrapper = Flex.extend`
  justify-content: center;
  margin-bottom: 10vh;
  margin-top: ${props => props.about ? '10vh' : null};
`

const CTA = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.about ? '#fff' : `${theme.color.lightPurple}`};
  border-radius: ${props => props.button ? '0px 4px 4px 0px' : '4px 0px 0px 4px'};
  // box-shadow: 0px 0px 15px 0px rgba(0,0,0,.07), 0px 18px 35px 0px rgba(50,50,93,.10);
`

const CTATitle = styled.h1`
  color: ${theme.color.altSecondary};
  font-weight: 300;
  line-height: 1.5;
  margin: .75em 0em .75em .75em;

  @media(max-width: 812px) {
    margin: .75em .75em;
  }
`

const CTASubtitle = styled.span`
  color: ${props => props.about ? `${theme.color.darkPurple}` : '#fff'};
  display: block;
  font-weight: 400;
`

const CTAButton = styled.a`
  font-family: Theinhardt-Bold;
  display: inline-block;
  outline: 0;
  color: ${theme.color.darkPurple};
  background: #fff;
  padding: 0.5em 0.85em;
  font-size: ${theme.font.button};
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11),
  0 1px 3px rgba(0,0,0,.08);
  transition: all .15s ease;

  @media(max-width: 812px) {
    margin-left: 4em
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1),
    0 3px 6px rgba(0, 0, 0, .08);
  }
`

export {
  CTAWrapper,
  CTA,
  CTATitle,
  CTASubtitle,
  CTAButton,
}
