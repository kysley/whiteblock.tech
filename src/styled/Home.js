import styled from 'styled-components'

import { theme } from 'Styled/Utils'

const Wrapper = styled.div`
  padding-top: 5vh;
  padding-left: 15vw;
  // min-height: 100vh;
  // min-width: 100vw;
  width: 30vw;

  @media(max-width: 812px) {
    width: 50vw;
  }
`

const Illustration = styled.img`
  position: absolute;
  width: 45%;
  right: 0;

  @media(max-width: 812px) {
    width: 50%;
    display: none;
  }
`

const Primary = styled.h1`
  font-family: Theinhardt-Bold;
  font-size: 3rem;
  color: #4B5DAE;
  display: inline-block;
  line-height: 1;
`

const Secondary = styled.h2`
  font-family: Theinhardt;
  font-size: 1.15rem;
  font-weight: 300;
  color: ${theme.color.altTitle};
  margin-bottom: ${props => props.mb ? '8em' : ''};
`

const Button = styled.a`
  font-family: Theinhardt-Bold;
  display: inline-block;
  outline: 0;
  color: #fff;
  background: #89B4A8;
  padding: 0.5em 0.85em;
  font-size: ${theme.font.button};
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11),
  0 1px 3px rgba(0,0,0,.08);
  transition: all .15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1),
    0 3px 6px rgba(0, 0, 0, .08);
  }
`

const SeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20vh;
`

const Arrow = styled.img`
  transition: transform .2s ease;

  &:hover {
    transform: translateY(1em);
  }
`

const SectionHeader = styled.h2`
  color: ${theme.color.darkPurple};
  font-family: Theinhardt-Bold;
  font-size: ${theme.font.section};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
`

const SectionDesc = styled.p`
  color: ${theme.color.altSecondary};
  font-size: ${theme.font.secondary};
  font-family: Theinhardt;
  text-align: center;
  max-width: 33vw;
  margin: 3em auto;
  padding: 0 1em;

  @media(max-width: 812px) {
    max-width: 70vw;
  }
`

const ProjectsFirst = styled.div`
  margin-top: 14vh;

  &::before {
    content: "";
    position: absolute;
    margin-top: -5em;
    z-index: -1;
    width: 100%;
    height: 80%;
    transform: skewY(-12deg);
    background: #f6f9fc;
  }
`

const BackgroundFlair = styled.div`
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 60%;
    transform: skewY(6deg);
    background: #f6f9fc;
  }
`

export {
  Wrapper,
  Illustration,
  Primary,
  Secondary,
  Button,
  SeeWrapper,
  Arrow,
  SectionHeader,
  SectionDesc,
  ProjectsFirst,
  BackgroundFlair,
}
