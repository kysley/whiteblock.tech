import React from 'react'

import { HeaderWrapper } from 'Styled/Header'
import wblogo from '../assets/images/wblogo.svg'

const Header = () => (
  <HeaderWrapper>
    <img src={wblogo} alt="Whiteblock" width={50} height={50} />
  </HeaderWrapper>
)

export default Header
