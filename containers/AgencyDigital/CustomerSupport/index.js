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
import illustration from 'public/illustration.png';

const CustomerSupport = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <NextImage src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="Customer support is our main priority with their hundred percent satisfaction."
            />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever." />
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
