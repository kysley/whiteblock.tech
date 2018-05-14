import React from 'react'
import { Flex, Box } from 'grid-styled'

import Header from 'Components/Header'
import { Wrapper, Illustration, Primary, Secondary, Button } from 'Styled/Home'

import illustration from '../assets/images/illu.png'
import arrow from '../assets/images/arrow.svg'

const Home = () => (
  <Flex>
    <Box w={1} >
      {/*<Header />*/}
      <Illustration src={illustration} />
      <Wrapper>
        <Primary>Whiteblock is a full-service consulting agency servicing blockchain projects.</Primary>
        <Secondary>
          WhiteBlock provides guidance, support, and connections throughout a blockchain
          project’s entire lifecycle to promote it’s success.
        </Secondary>
        <Button href="mailto:bay@whiteblock.tech">Get in touch</Button>
        <img src={arrow} alt="More" />
      </Wrapper>
    </Box>
  </Flex>
)

export default Home
