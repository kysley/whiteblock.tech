import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderWrapper, HeaderLinks, HeaderLink } from 'Styled/Header'
import wblogo from '../assets/images/wb-logo-vector.svg'

const Header = () => (
  <HeaderWrapper>
    <HeaderLinks>
    <Link to="/">
      <img src={wblogo} alt="Whiteblock" width={50} height={50} />
    </Link>
      <HeaderLink to="/about">About</HeaderLink>
    </HeaderLinks>
  </HeaderWrapper>
)

export default Header
