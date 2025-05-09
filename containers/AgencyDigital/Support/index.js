import React from 'react';
import { Icon } from 'react-icons-kit';
import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight';
import { rgba } from 'polished';

import Container from 'common/components/UI/ContainerTwo';
import NextImage from 'common/components/NextImage';
import illustration from 'public/support_illustration.png';
import { data } from 'common/data/AgencyDigital';
import Section, {
  ContentWrapper,
  Content,
  HelpBlock,
  Illustration,
} from './support.style';

const Support = () => {
  return (
    <Section id="support">
      <Container>
        <ContentWrapper>
          <Content>
            <h2>Do you need help? Our support team ready to help you</h2>
            <p>
              Not sure about the type of translation required, no worries, contacts us, we will help you in every way possible
            </p>
            {data.helps.map((help) => (
              <HelpBlock key={help.id}>
                <div className="icon">
                  <NextImage src={help.icon} alt={help.title} />
                </div>
                <div className="content">
                  <h4>
                    {help.title}{' '}
                    <Icon
                      icon={iosArrowThinRight}
                      size={30}
                      style={{ color: rgba('#0F2137', 0.3) }}
                    />
                  </h4>
                  <p>{help.desc}</p>
                </div>
              </HelpBlock>
            ))}
          </Content>
          <Illustration>
            <NextImage src={illustration} alt="" />
          </Illustration>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Support;
