import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 5vh;
  padding-left: 5vw;
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
  font-size: 1rem;
  font-weight: 300;
  color: #222;
  margin-bottom: ${props => props.mb ? '8em' : '0em'}
`

const Button = styled.a`
  font-family: Theinhardt;
  outline: 0;
  color: #fff;
  background: #89B4A8;
  padding: 0.5em;
  font-size: 1.15rem;
  cursor: pointer;
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, .08),
  0px 7px 14px 0px rgba(50, 50, 93, .10);

  &:hover {
    // background: #fff;
    // color: #000;
    // border: 1px solid #000;
  }
`

const SeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20vh;
  }
`

const Arrow = styled.img`
  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateY(1em);
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
}
