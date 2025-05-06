import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/agencyDigital';
import ResetCSS from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/AgencyDigital/Navbar';
import Banner from 'containers/AgencyDigital/Banner';
import Service from 'containers/AgencyDigital/Service';
import CustomerSupport from 'containers/AgencyDigital/CustomerSupport';
import Pricing from 'containers/AgencyDigital/Pricing';
import Support from 'containers/AgencyDigital/Support';
import News from 'containers/AgencyDigital/News';
import Authorities from 'containers/AgencyDigital/Authorities';
import Footer from 'containers/AgencyDigital/Footer';

const AgencyDigital = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>ScriptWord | Translation Services</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="React next landing page" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Service />
          <CustomerSupport />
          <Pricing />
          <Authorities />
          <Support />
          <News />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default AgencyDigital;
