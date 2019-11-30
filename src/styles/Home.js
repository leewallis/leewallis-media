import styled from 'styled-components';

const HomeHero = styled.div`
  background: url('https://media.lwcdn.co/lwm/home-intro-001.jpg') no-repeat;
  background-size: cover;

  .home-hero {
    min-height: 100vh;

    div {
      text-align: center;

      .leewallis-logo-home {
        max-width: 80%;
    
        @media (min-width: 48em) {
            max-width: 50%;
        }
      }
    }
  }
`;

const HomeH1 = styled.h1`
  color: ${({theme}) => theme.colors.base_0};
  font-size: 3rem;
  line-height: 1.5;
  margin-top: 6rem;
  text-transform: initial;
`;

export { HomeHero, HomeH1 };