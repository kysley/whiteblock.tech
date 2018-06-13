import React from 'react'
import { Flex, Box } from 'grid-styled'

import Header from 'Components/Header'
import { AboutCTA } from 'Components/CTA'

import {
  Wrapper, Illustration, Primary,
  Secondary, SectionWrapper, Block, BlockImage,
} from 'Styled/About'

import { SectionHeader, SectionDesc, BackgroundFlair } from 'Styled/Home'

import splash from '../assets/images/about-splash-alt.svg'
import connection from '../assets/images/about-connections.svg'
import innovation from '../assets/images/about-innovation.svg'
import transparency from '../assets/images/about-transparency.svg'

const About = () => (
  <Flex>
    <Box w={1}>
      <Header />
      <Illustration src={splash} />
      <Wrapper>
        <Primary>One Team, endless insight.</Primary>
        <Secondary>
          Whiteblock was created out of the necessity for blockchain startups
          to thrive in an atypical, tight-knit industry. Whiteblock offers
          a comprehensive offering of services that give blockchain
          projects with innovative technologies and capable teams the best chance to
          succeed.
        </Secondary>
      </Wrapper>
      <SectionHeader>About Us</SectionHeader>
      <SectionDesc>
        Whiteblock's founding members have been involved in the crypto space for
        over 5 years. The team has previous experience with groundbreaking
        companies in the industry, TGO Network and Bitcoin Bravado, worked for
        multibillion dollar organizations, and have consulted several successful
        token offerings including: Current, BlockEx, One Ledger, Evermarkets, and
        Menlo One.
      </SectionDesc>
      <BackgroundFlair />
      <SectionWrapper>
        <Block w={[1, 1, 1 / 2]}>
          <BlockImage src={connection} />
        </Block>
        <Block w={[1, 1, 1 / 2]}>
          <p>Our experiences in the blockchain space have created strong interpersonal
          networks with powerhouse influencers, VCs, and leading advisors. These
          connections help drive resources into projects Whiteblock undertakes
          allowing us to successfully advise our clientele.</p>
        </Block>
      </SectionWrapper>
      <BackgroundFlair />
      <SectionWrapper>
        <Block w={[1, 1, 1 / 2]}>
          <p>It is our belief that legitimacy and upstanding moral fiber are paramount
          to raising capital and being successful in the blockchain space. That is why
          Whiteblock operates with total transparency and ensures high quality
          deliverables throughout the process.</p>
        </Block>
        <Block w={[1, 1, 1 / 2]}>
          <BlockImage src={transparency} />
        </Block>
      </SectionWrapper>
      <SectionWrapper>
        <Block w={[1, 1, 1 / 2]}>
          <BlockImage src={innovation} />
        </Block>
        <Block w={[1, 1, 1 / 2]}>
          <p>Today, Whiteblock is integrating original approaches and thanks to our unique
          experiences over several years in the industry, we bring to the table innovative
          insights, proven solutions, and lasting positive change for our clients.</p>
        </Block>
      </SectionWrapper>
      <AboutCTA />
    </Box>
  </Flex>
)


export default About
