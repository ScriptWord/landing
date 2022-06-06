import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Link from 'common/components/Link';
import {
  Section,
  FooterTop,
  FooterWidget,
  FooterBottom,
  Copyright,
  FooterNav,
} from './footer.style';
import { data } from 'common/data/AgencyDigital';
import logo from 'https://res.cloudinary.com/scriptword/image/upload/v1654473726/common/assets/image/agencyDigital/logo_qbjjvb.png';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          {data.footer.map((item) => (
            <Fade key={item.id} up delay={100 * item.id}>
              <FooterWidget key={item.id}>
                <h4>{item.title}</h4>
                <ul>
                  {item.list.map((item) => (
                    <li className="widgetListItem" key={item.id}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </FooterWidget>
            </Fade>
          ))}
        </FooterTop>
        <FooterBottom>
          <Copyright>
            <img src={logo?.src} alt="Agency Digital" />
            Copyright &copy; {new Date().getFullYear()} by ScriptWord
          </Copyright>
          <FooterNav>
            {data.footerNav.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
