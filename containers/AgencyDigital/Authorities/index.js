import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Section, { 
  SectionHeading, 
  AuthoritiesWrapper,
  CategoryWrapper,
  AuthorityGrid,
  AuthorityItem
} from './authorities.style';

const authorityData = {
  federal: [
    'IRCC (Immigration, Refugees and Citizenship Canada)',
    'Service Canada / Passport Canada',
    'WES (World Education Services)',
    'ICAS (International Credential Assessment Service of Canada)',
    'IQAS (International Qualifications Assessment Service)',
    'ICES (International Credential Evaluation Service)',
    'CES (Comparative Education Service)',
    'Global Affairs Canada',
  ],
  ontario: [
    'Ontario Government',
    'DriveTest / MTO (Ontario Ministry of Transportation)',
    'PEO (Professional Engineers Ontario)',
    'CPA Ontario',
    'CPSO (College of Physicians and Surgeons of Ontario)',
    'OCT (Ontario College of Teachers)',
  ],
  quebec: [
    'MIFI (Ministère de l\'Immigration, de la Francisation et de l\'Intégration du Quebec)',
    'Quebec Register of Civil Status',
    'SAAQ (Société de l\'assurance automobile du Québec)',
    'CPA Quebec',
  ],
  britishColumbia: [
    'WelcomeBC',
    'ICBC (Insurance Corporation of British Columbia)',
  ],
  other: [
    'Alberta Government',
    'Service Alberta',
    'Manitoba Government',
    'MPI (Manitoba Public Insurance)',
    'Nova Scotia Registry of Motor Vehicles',
    'SGI (Saskatchewan driver\'s licensing and vehicle registration)',
    'GNB (Government of New Brunswick)',
    'Digital Government and Service NL for Newfoundland and Labrador',
  ],
  foreign: [
    'USCIS (United States Citizenship and Immigration Services)',
    'Embassies and Consulates of Foreign Countries',
  ],
  professional: [
    'PEBC (Pharmacy Examining Board of Canada)',
    'NDEB (National Dental Examining Board of Canada)',
    'NNAS (National Nursing Assessment Centre)',
    'CACB (Canadian Architectural Certification Board)',
  ]
};

const Authorities = () => {
  return (
    <Section id="authorities">
      <Container>
        <SectionHeading>
          <h2>Authorities That We Translate For</h2>
          <p>
            We provide certified translations accepted by government agencies, educational institutions, 
            and professional organizations across Canada and internationally.
          </p>
        </SectionHeading>
        
        <AuthoritiesWrapper>
          <Container>
            <CategoryWrapper>
              <h3>Federal (All-Canada)</h3>
              <AuthorityGrid>
                {authorityData.federal.map((item, index) => (
                  <AuthorityItem key={`federal-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
            
            <CategoryWrapper>
              <h3>Ontario</h3>
              <AuthorityGrid>
                {authorityData.ontario.map((item, index) => (
                  <AuthorityItem key={`ontario-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
            
            <CategoryWrapper>
              <h3>Quebec</h3>
              <AuthorityGrid>
                {authorityData.quebec.map((item, index) => (
                  <AuthorityItem key={`quebec-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
            
            <CategoryWrapper>
              <h3>British Columbia</h3>
              <AuthorityGrid>
                {authorityData.britishColumbia.map((item, index) => (
                  <AuthorityItem key={`bc-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
            
            <CategoryWrapper>
              <h3>Other Provinces</h3>
              <AuthorityGrid>
                {authorityData.other.map((item, index) => (
                  <AuthorityItem key={`other-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
            
            <CategoryWrapper>
              <h3>International</h3>
              <AuthorityGrid>
                {authorityData.foreign.map((item, index) => (
                  <AuthorityItem key={`foreign-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
            
            <CategoryWrapper>
              <h3>Professional Organizations</h3>
              <AuthorityGrid>
                {authorityData.professional.map((item, index) => (
                  <AuthorityItem key={`professional-${index}`}>
                    <p>{item}</p>
                  </AuthorityItem>
                ))}
              </AuthorityGrid>
            </CategoryWrapper>
          </Container>
        </AuthoritiesWrapper>
      </Container>
    </Section>
  );
};

export default Authorities; 