import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';

import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import List from 'common/components/List';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './customerSupport.style';
import { data } from 'common/data/AgencyDigital';
import illustration from 'common/assets/image/agencyDigital/illustration_2.png';

const CustomerSupport = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <NextImage src={illustration} alt="Translation Services Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="Precise translations with the nuance and cultural context you need"
            />
            <Text content="Our certified translators are native speakers who understand both the language and cultural nuances, ensuring your message is conveyed exactly as intended in any language." />
            <ListGroup>
              {data.workHardList.map((item) => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <Icon
                      icon={ic_check_circle}
                      size={18}
                      style={{ color: '#56BBD0' }}
                    />
                  }
                />
              ))}
            </ListGroup>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default CustomerSupport;
