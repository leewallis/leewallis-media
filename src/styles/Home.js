import styled from 'styled-components';
import HomeHeroBackground from '../assets/home-intro-001.jpg';

const HomeHero = styled.div`
  background: url(${HomeHeroBackground}) no-repeat;
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

export { HomeHero };