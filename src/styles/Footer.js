import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

const FooterGrid = styled(Grid)`
  background: ${({theme}) => theme.colors.base_90};
  color: ${({theme}) => theme.colors.base_0};
  padding-bottom: 4rem;
  padding-top: 4rem;
`;

const FooterH3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const FooterP = styled.p`
  font-size: 1.4rem;
  margin-bottom: .75rem;
`;

const FooterCopyright = styled.p`
  font-size: 1.4rem;
  margin: 4rem 0 2rem 0;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin-right: 1rem;
`;

export { 
  FooterGrid,
  FooterH3,
  FooterP,
  FooterCopyright,
  SocialMediaIcon
};