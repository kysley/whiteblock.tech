import React from 'react'
import { Flex, Box } from 'grid-styled'

import Header from 'Components/Header'
import { Wrapper, Illustration, Primary, Secondary, Button, SeeWrapper, Arrow } from 'Styled/Home'
import { BlockWrapper, BlockHeader, BlockParagraph, Block } from 'Styled/Block'

import illustration from '../assets/images/illu.png'
import arrow from '../assets/images/arrow.svg'

const Home = () => (
  <Flex>
    <Box w={1} >
      <Header />
      <Illustration src={illustration} />
      <Wrapper>
        <Primary>Whiteblock is a full-service consulting agency servicing blockchain projects.</Primary>
        <Secondary mb>
          WhiteBlock provides guidance, support, and connections throughout a blockchain
          project’s entire lifecycle to promote it’s success.
        </Secondary>
        <Button href="mailto:bay@whiteblock.tech">Get in touch</Button>
        <SeeWrapper>
          <Secondary>See what makes us different</Secondary>
          <Arrow src={arrow} alt="More" />
        </SeeWrapper>
      </Wrapper>
      <BlockWrapper>
        <Block w={1 / 2} pso>
          <BlockHeader>Project Strategy Optimization.</BlockHeader>
        </Block>
        <Block w={1 / 2}>
          <BlockParagraph>
            Whiteblock&apos;s Project Strategy Optimization (PSO) starts with a deep analysis of internal and external
            factors that define your project and team. Whiteblock formulates specific strategies to optimize your
            team&apos;s performance.
          </BlockParagraph>
        </Block>
      </BlockWrapper>
    </Box>
  </Flex>
)

export default Home
