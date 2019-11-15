import styled from 'styled-components';

const ContactContainer = styled.div`
  background: url('/assets/contact-001.jpg') no-repeat;
  background-size: cover;

  .contact-section {
    min-height: 100vh;

    div {
      text-align: center;
    }
  }
`;

const ContactParagraph = styled.p`
  font-size: 2.2rem;

  @media (min-width: 48em) {
    font-size: 3rem;
  }
`;

export { ContactContainer, ContactParagraph };