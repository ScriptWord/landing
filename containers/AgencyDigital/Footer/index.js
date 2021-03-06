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
import logo from 'public/logo.png';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          {data.footer.map((item) => (
            <Fade key={item.id} up delay={100 * item.id}>
              <FooterWidget key={item.id}>
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
              <li className="widgetListItem" key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
            ))}
          </FooterNav>
          <div>
          {/* WhatsApp icon */}
      <a
        href="https://wa.me/14168972720"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
