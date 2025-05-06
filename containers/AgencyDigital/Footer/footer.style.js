import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.footer`
  background-color: #ffffff;
  padding: 45px 0 0;
  @media screen and (max-width: 1440px) {
    padding: 70px 0 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 0 20px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
  .react-reveal {
    @media screen and (max-width: 768px) {
      width: calc(35% - 12px);
    }
    @media screen and (max-width: 480px) {
      width: 50%;
    }
    @media screen and (max-width: 360px) {
      width: 100%;
    }
  }
`;

export const FooterWidget = styled.div`
  margin-right: 15px;
  margin-bottom: 60px;

  &:last-child {
    margin-right: 0;
  }
  
  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #02073e;
    margin-bottom: 10px;
  }
  
  .widgetListItem {
    a {
      color: ${rgba('#02073e', 0.8)};
      font-size: 14px;
      line-height: 2;
      &:hover {
        color: #02073e;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #d9e0e7;
  padding: 20px 0;
`;

export const Copyright = styled.p`
  color: ${rgba('#0f2137', 0.6)};
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    margin-bottom: 15px;
    max-width: 150px;
    max-height: 50px;
    object-fit: contain;
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
  @media screen and (max-width: 360px) {
    flex-wrap: wrap;
  }
  li {
    margin-right: 15px;
    @media screen and (max-width: 360px) {
      margin-top: 10px;
    }
    &:last-child {
      margin-right: 0;
    }
    a {
      font-size: 15px;
      line-height: 33px;
      color: #02073e;
    }
  }
`;
