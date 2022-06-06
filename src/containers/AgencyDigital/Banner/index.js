import React from 'react';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from 'https://res.cloudinary.com/scriptword/image/upload/v1654473727/common/assets/image/agencyDigital/paypal_u7fbzd.png';
import google from 'https://res.cloudinary.com/scriptword/image/upload/v1654473725/common/assets/image/agencyDigital/google_nnhysw.png';
import dropbox from 'https://res.cloudinary.com/scriptword/image/upload/v1654473725/common/assets/image/agencyDigital/dropbox_yt5brn.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="Professional Translators For Canadians"
            />

            <Text
              className="banner-caption"
              content="Professional Translators Delivering High Quality, Fast and Affordable Translation Services In Canada"
            />

            <Subscribe>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Get A Quote" type="submit" />
            </Subscribe>

            <SponsoredBy>
              <Text className="sponsoredBy" content="Clients:" />
              <ImageGroup>
                <NextImage src={paypal} alt="Paypal" />
                <NextImage src={google} alt="Google" />
                <NextImage src={dropbox} alt="Dropbox" />
              </ImageGroup>
            </SponsoredBy>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
