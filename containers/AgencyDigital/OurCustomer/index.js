import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import ourCustomer from 'public/ourCustomer.png';
import Section, { SectionHeading, ContentWrapper } from './ourCustomer.style';

const OurCustomer = () => {
  return (
    <Section id="customer">
      <Container>
        <ContentWrapper>
          <SectionHeading>
            <Heading content="Our Valued Clients" />
            <Text content="We are proude to serve many individuals and businesess in Canada" />
            {/* <Link href="#">
              Explore Details <Icon icon={chevronRight} />
            </Link> */}
          </SectionHeading>
          <NextImage
            src={ourCustomer}
            className="illustration"
            alt="Company who also worked us"
          />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default OurCustomer;
