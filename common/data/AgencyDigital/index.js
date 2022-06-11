import serviceIcon1 from '../../assets/image/agencyDigital/services/translation-2.png';
import serviceIcon11 from '../../assets/image/agencyDigital/services/cert-2.svg';
import serviceIcon2 from '../../assets/image/agencyDigital/services/passport-1.svg';
import serviceIcon3 from '../../assets/image/agencyDigital/services/business-1.svg';
import serviceIcon4 from '../../assets/image/agencyDigital/services/legal-1.png';
import serviceIcon5 from '../../assets/image/agencyDigital/services/website-1.png';
import serviceIcon6 from '../../assets/image/agencyDigital/services/technical-2.svg';
import support1 from '../../assets/image/agencyDigital/services/email-1.png';
import support2 from '../../assets/image/agencyDigital/services/phone.png';
import news1 from '../../assets/image/agencyDigital/news/1.png';
import news2 from '../../assets/image/agencyDigital/news/2.png';
import news3 from '../../assets/image/agencyDigital/news/3.png';
import news4 from '../../assets/image/agencyDigital/news/4.png';
import NavItem from 'common/components/Navitem/navitem';


export const data = {
  navItems: [
    {
      label: 'Home',
      path: '/',
      offset: '70',
    },
    {
      label: 'Service',
      path: '#service',
      offset: '70',
    },
    {
      label: 'Languages',
      path: '#pricing',
      offset: '70',
    },
    {
      label: 'About',
      path: '#our-customer',
      offset: '70',
    },
    {
      label: 'Blog',
      path: '#blog',
      offset: '70',
    },
  ],
  services: [
    {
      id: 1,
      icon: serviceIcon1,
      title: 'Regular Translations',
      desc:
        'Documents like Driver\'s license, Passports, Work/Education Documents etc',
      link: '/regulartranslation',
    },
    {
      id: 2,
      icon: serviceIcon11,
      title: 'Certified Translations',
      desc:
        'With Free certificates of accuracy, every time',
      link: '#',
    },
    {
      id: 3,
      icon: serviceIcon2,
      title: 'Immigration Translations',
      desc:
        'Documents like Birth Certificates, Marriage Certificates, Police Certificates, Diploma etc as required by IRCC, USCIS',
      link: '#',
    },
    {
      id: 4,
      icon: serviceIcon3,
      title: 'Business Translations',
      desc:
        'Documents like Company Profile, Business Proposals, Marketing Material, ECommerce Documents etc',
      link: '#',
    },
    {
      id: 5,
      icon: serviceIcon4,
      title: 'Legal Translations',
      desc:
        'Documents like Contracts, Affidavits, Court Orders, Patents etc',
      link: '#',
    },
    {
      id: 6,
      icon: serviceIcon5,
      title: 'Website and App Translations',
      desc:
        'Localize your websites, Apps , Graphics Elements, Design etc ',
      link: '#',
    },
    {
      id: 7,
      icon: serviceIcon6,
      title: 'Technical Translations',
      desc:
        'Medical Translations like medical records, medical evidence etc',
      link: '#',
    },
    
  ],
  workHardList: [
    { id: 1, title: 'Best Rates' },
    { id: 2, title: 'High Quality' },
    { id: 3, title: 'Speed' },
    { id: 4, title: 'Customer Support' },
  ],
  pricing: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18.99',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29.99',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Custom Pack',
      price: '23.99',
      trial_day: 30,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 4,
      package_name: 'Ultimate Pack',
      price: '35.99',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: true,
        },
      ],
    },
  ],
  helps: [
    {
      id: 1,
      icon: support1,
      title: 'Email client support',
      desc:
        'Get in touch with us through email : support@scriptword.ca',
    },
    {
      id: 2,
      icon: support2,
      title: 'Live Customer Care Center',
      desc:
        'Get to talk to us directly through phone @ +1-123-456-7890',
    },
  ],
  newsFeed: [
    {
      id: 1,
      image: news1,
      title: 'Introducing our newest team with great experience',
      desc:
        'Brian Halligan knows that you need more than a great product to have a great brand.',
      link: '#',
    },
    {
      id: 2,
      image: news2,
      title:
        'New banking application has  developed and we expecting good feedback',
      desc: '',
      link: '#',
    },
    {
      id: 3,
      image: news3,
      title: 'Ui/UX industry are doing great job in previous year history',
      desc: '',
      link: '',
    },
    {
      id: 4,
      image: news4,
      title: 'Develop you design experience with figma features.',
      desc: '',
      link: '',
    },
  ],
  footer: [
    {
      id: 1,
      title: 'Company',
      list: [
        {
          id: 1,
          title: 'About',
          link: '#',
        },
        {
          id: 2,
          title: 'Affiliate',
          link: '#',
        },
        {
          id: 3,
          title: 'Careers & Culture',
          link: '#',
        },
        {
          id: 4,
          title: 'Blog',
          link: '#',
        },
        {
          id: 5,
          title: 'Press',
          link: '#',
        },
      ],
    },
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Customer Support',
          link: '#',
        },
        {
          id: 2,
          title: 'About Us',
          link: '#',
        },
        {
          id: 3,
          title: 'Copyright',
          link: '#',
        },
        
      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [
        {
          id: 1,
          title: 'Legal',
          link: '#',
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: '#',
        },
        {
          id: 3,
          title: 'Terms & Conditions',
          link: '#',
        },
        {
          id: 4,
          title: 'Site Map',
          link: '#',
        },
        
      ],
    },
    
  ],
  footerNav: [
    {
      id: 1,
      title: 'Home',
      link: '#',
    },
    {
      id: 2,
      title: 'Services',
      link: '#',
    },
    {
      id: 3,
      title: 'Languages',
      link: '#',
    },
    {
      id: 4,
      title: 'Get A Quote',
      link: '#',
    },
    {
      id: 5,
      title: 'FAQ',
      link: '#',
    },
  ],
};
