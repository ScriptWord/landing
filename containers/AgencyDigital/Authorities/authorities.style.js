import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding: 80px 0;
  background-color: #f9fbfd;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 1.3;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 16px;
    line-height: 1.85;
    color: ${themeGet('colors.textColor', '#343D48')};
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`;

export const AuthoritiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (max-width: 667px) {
    margin-top: 20px;
  }
`;

export const CategoryWrapper = styled.div`
  margin-bottom: 30px;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    padding-bottom: 10px;
    border-bottom: 1px solid ${themeGet('colors.borderColor', '#E5ECF4')};
    margin-bottom: 15px;
  }
`;

export const AuthorityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AuthorityItem = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }
  
  p {
    font-size: 15px;
    line-height: 1.4;
    color: ${themeGet('colors.textColor', '#343D48')};
    margin: 0;
  }
`;

export default Section; 