import React from 'react'

import { CTAWrapper, CTA, CTATitle, CTASubtitle, CTAButton } from 'Styled/MiddleCTA'

const MiddleCTA = () => (
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

export default MiddleCTA
