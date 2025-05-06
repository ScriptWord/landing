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
} from './footer.style';
import { data } from 'common/data/AgencyDigital';
import logo from 'common/assets/image/agencyDigital/logo-7.png';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          {data.footer.map((item) => (
            <Fade key={item.id} up delay={100 * item.id}>
              <FooterWidget key={item.id}>
                <h4>{item.title}</h4>
                <hr style={{ 
                  border: '0',
                  height: '1px',
                  background: '#d9e0e7',
                  marginBottom: '15px'
                }} />
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
            <img src={logo?.src} alt="ScriptWord" />
            Copyright &copy; {new Date().getFullYear()} by ScriptWord
          </Copyright>
          <div style={{ marginTop: '15px' }}>
            {/* WhatsApp icon */}
            <a
              href="https://wa.me/14168972720"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
          </div>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
