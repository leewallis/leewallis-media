import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({theme}) => theme.colors.base_100};
  padding: 4.5rem 0;
  width: 100%;

  .leewallis-logo-header {
    display: block;

    @media (max-width: 47.9em) {
      max-width: 100%;
    }

    @media (min-width: 48em) {
      width: 30rem;
    }
  }
`;

export { HeaderContainer };