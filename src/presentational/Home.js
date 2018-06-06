import React from 'react'
import { Flex, Box } from 'grid-styled'

import scrollIt from '../utils/scroll'

import Header from 'Components/Header'
import MiddleCTA from 'Components/MiddleCTA'
import Steps from 'Components/Steps'
import Footer from 'Components/Footer'
import {
  Wrapper, Illustration, Primary, Secondary, Button,
  SeeWrapper, Arrow, SectionHeader, SectionDesc,
  ProjectsFirst, BackgroundFlair,
} from 'Styled/Home'
import { BlockWrapper, BlockHeader, BlockParagraph, Block } from 'Styled/Block'
import { ImpWrapper, IBlockWrapper, ImpBlock, ImpImg, BlockTitle, BlockDesc } from 'Styled/Impression'

import illustration from '../assets/images/illu.png'
import arrow from '../assets/images/arrow.svg'
import Star from '../assets/images/star.svg'
import Bookmark from '../assets/images/bookmark.svg'
import Checkmark from '../assets/images/checkmark.svg'

class Home extends React.Component {
  state = {}

  scrollDown = () => {
    scrollIt(
      document.querySelector('#scroll'),
      600,
      'easeOutQuad',
    )
  }

  render() {
    return (
      <Flex>
        <Box w={1} >
          <Header />
          <Illustration src={illustration} />
          <Wrapper>
            <Primary>Whiteblock</Primary>
            <Secondary mb>
              A proven group of blockchain specialists, Whiteblock provides actionable
              guidance to projects contributing to the development of the blockchain ecosystem.
            </Secondary>
            <Button href="mailto:bay@whiteblock.tech">Get in touch</Button>
            <SeeWrapper>
              <Secondary>See what makes us different</Secondary>
              <Arrow src={arrow} alt="More" onClick={this.scrollDown} />
            </SeeWrapper>
          </Wrapper>
          <ProjectsFirst id="scroll">
            <SectionHeader>'Project First' Approach</SectionHeader>
            <SectionDesc>
              Our wholistic, all-encompassing approach focuses on the 12 most crucial aspects a blockchain project must
              address in order to reach the same prowess as some of the most successful projects in the crypto space.
              Whiteblock's team members have analyzed and tracked hundreds of projects.
              Whiteblock uses this data to promote the success of our client projects.
            </SectionDesc>
          </ProjectsFirst>
          <BlockWrapper flexWrap="wrap">
            <Block w={[1, 1, 1 / 2]} pso>
              <BlockHeader>Project Strategy Optimization.</BlockHeader>
            </Block>
            <Block w={[1, 1, 1 / 2]}>
              <BlockParagraph>
                Whiteblock&apos;s Project Strategy Optimization (PSO) starts with a deep analysis of internal and external
                factors that define your project and team. Whiteblock formulates specific strategies to optimize your
                team&apos;s performance.
              </BlockParagraph>
            </Block>
          </BlockWrapper>
          <ImpWrapper>
            <SectionHeader>Make a Lasting Impression</SectionHeader>
            <SectionDesc>You get one shot to make a first impression, we will help you make the right moves.</SectionDesc>
            <IBlockWrapper flexWrap="wrap">
              <ImpBlock w={[1, 1, 1 / 3]}>
                <ImpImg src={Star} alt="Star" />
                <BlockTitle>Shine from the start.</BlockTitle>
                <BlockDesc>
                  Tokenomics, along with your Whitepaper/Litepaper creation are crucial,
                  highly criticized, building blocks for your ICO. Whiteblock will help you create and
                  tailor these materials, ensuring that they establish a positive driving force behind your project.
                </BlockDesc>
              </ImpBlock>
              <ImpBlock w={[1, 1, 1 / 3]}>
                <ImpImg src={Bookmark} alt="Bookmark" />
                <BlockTitle>Be Memorable.</BlockTitle>
                <BlockDesc>
                  Design is often one of those most overlooked aspects of a project. Presenting your project
                  professionally, in a modern, sleek design is essential for investors to remember your name.
                  Whiteblock can produce in-depth design reports to ensure that you retain users.
                </BlockDesc>
              </ImpBlock>
              <ImpBlock w={[1, 1, 1 / 3]}>
                <ImpImg src={Checkmark} alt="Checkmark" />
                <BlockTitle>Start off on the right foot.</BlockTitle>
                <BlockDesc>
                  Whiteblock will guide your pre-launch to ensure that the perception of your project
                  and resources are fit for the eyes of investors. Whiteblock will work hand-in-hand
                  with your core team in order to fine tune your project into it's optimal state.
                </BlockDesc>
              </ImpBlock>
            </IBlockWrapper>
          </ImpWrapper>
          <BackgroundFlair>
            <Steps />
          </BackgroundFlair>
          <MiddleCTA />
          {/* <Footer /> */}
        </Box>
      </Flex>
    )
  }
}

export default Home
