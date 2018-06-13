import React from 'react'

import { CTAWrapper, CTA, CTATitle, CTASubtitle, CTAButton } from 'Styled/CTA'

const HomeCTA = () => (
  <CTAWrapper flexWrap="wrap">
    <CTA w={1 / 2}>
      <CTATitle>
        <CTASubtitle>Get Started.</CTASubtitle>
        Send us an email about your project and let's build a relationship.
      </CTATitle>
    </CTA>
    <CTA w={1 / 7} button>
      <CTAButton>contact us</CTAButton>
    </CTA>
  </CTAWrapper>
)

const AboutCTA = () => (
  <CTAWrapper flexWrap="wrap" about>
    <CTA w={1 / 2} about>
      <CTATitle>
        <CTASubtitle about>Want to Work Together?</CTASubtitle>
        Send us an email about your project and let's build a relationship.
      </CTATitle>
    </CTA>
    <CTA w={1 / 7} button about>
      <CTAButton>contact us</CTAButton>
    </CTA>
  </CTAWrapper>
)

export {
  HomeCTA,
  AboutCTA,
}
