import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portafolio
      </SectionTitle>
      <SectionText>
        The purpose of Javascript Mastery is to help aspiring and established developer to take ther skills to the next level and build awesone apps.
      </SectionText>
      <Button onClick={() => window.Location = "https://google.com"}>Learn More</Button>
    </LeftSection>

  </Section>
);
export default Hero;