import React from 'react'

import { SectionHeader, SectionDesc } from 'Styled/Home'
import { ListWrapper, ListContainer, Half, Description, StepList, ListItem } from 'Styled/Steps'

const Steps = () => (
  <ListWrapper flexWrap="wrap">
    <SectionHeader>The Process</SectionHeader>
    <SectionDesc>Whiteblock's team, is your team.</SectionDesc>
    <ListContainer>
      <Half w={[1, 1, 1 / 2]}>
        <StepList>
          <ListItem>
            Whiteblock will begin by providing a comprehensive review and deep analysis of your project's
            materials and strategies.
          </ListItem>
          <ListItem>
            Whiteblock then uses the data extracted from hundreds of ICOs to analyze and pinpoint
            crucial areas and nuances for potential improvement.
          </ListItem>
          <ListItem>
            Whiteblock will then provide actionable deliverables that your team
            will be able to assess and evaluate. Followed by open question and answer
            sessions to ensure accurate interpretation and understanding.
          </ListItem>
          <ListItem>
            For qualifying projects, Whiteblock will assist in providing invaluable introductions for your project
            to our extensive list of strategic contacts and affiliates. This will create the necessary momentum and visibility
            for any project to succeed in the competitive landscape.
          </ListItem>
        </StepList>
      </Half>
      <Half w={[1, 1, 1 / 2]} shaded>
        <Description>
          At Whiteblock, we believe blockchain technology has the opportunity to be the greatest innovation of our generation.
          It holds the power to drive change in supply chains, fintech solution, the financial services industry and much more.
        </Description>
        <Description>
          The opportunity to break down barriers and innovate has never been more accessible.
          Strategic alignment focusing on mitigating risks and maximizing opportunities. Helping to nurture new ideas to life.
        </Description>
        <Description>
          Blockchain projects at the forefront of this revolution deserve an established,
          trusted, and accountable advisor that can help them navigate the challenges a new company may face while entering this rapidly
          evolving blockchain ecosystem.
        </Description>
      </Half>
    </ListContainer>
  </ListWrapper>
)

export default Steps
