import styled from 'styled-components';

const WebsiteContainer = styled.div`
  background: ${({theme}) => theme.colors.base_98};
  padding-top: 4rem;
`;

const WebsiteH1 = styled.h1`
  color: ${({theme}) => theme.colors.base_0};
  font-size: 2.5rem;
  padding-left: 2rem;

  @media (min-width: 48em) {
    font-size: 4rem;
  }
`;

const WebsiteListingContainer = styled.div`
`;

const WebsiteListingContainerCoverImage = styled.img`
  max-width: 100%;
`;

const WebsiteListingContainerH2 = styled.h2`
  color: ${({theme}) => theme.colors.base_0};
  font-size: 2rem;
  margin: 1rem 0;
  text-align: center;
  text-transform: uppercase;
`;

const WebsiteListingContainerTech = styled.div`
  color: ${({theme}) => theme.colors.base_50};
  margin-bottom: 1rem;
  text-align: center;

  &:last-child {
    margin-bottom: 4rem;
  }
`;

export { 
  WebsiteContainer,
  WebsiteH1,
  WebsiteListingContainer,
  WebsiteListingContainerCoverImage,
  WebsiteListingContainerH2,
  WebsiteListingContainerTech
};