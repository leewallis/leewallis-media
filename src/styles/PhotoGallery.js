import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Col } from 'react-styled-flexboxgrid';

const PhotoGalleryContainer = styled.div`
  padding-top: 6rem;
`;

const YearArchiveContainer = styled.div`
  position: relative;

  &:last-child {
    margin-bottom: 4rem;
  }

  h2 {
    color: ${({theme}) => theme.colors.primary};
    font-size: 7rem;
    line-height: .75;
    margin-bottom: 0;

    @media (min-width: 48em) {
      font-size: 17rem;
      left: 0;
      letter-spacing: -1.2rem;
      margin-top: 2rem;
      position: absolute;
      top: 0;
      z-index: 9990;
    }
  }
`;

const YearArchiveContainerSwipeLabel = styled.div`
  font-size: 1.8rem;
  max-width: 15rem;
  position: absolute;
  right: 2rem;
  top: 2.5rem;

  @media (min-width: 48em) {
    font-size: 2rem;
    left: 24rem;
    top: 17rem;
    z-index: 9990;
  }
`;

const GalleriesContainer = styled.div`
  width: 100vw;

  @media (min-width: 48em) {
    margin-left: 35rem;
    width: calc(100vw - 35rem);
  }
`;

const GalleryContainer = styled.div`
  background-size: cover;
  height: 20rem;

  @media (min-width: 48em) {
    height: 40rem;
  }
`;

const GalleryLink = styled(Link)`
  align-items: flex-end;
  background: rgba(0, 0, 0, .7);
  color: ${({theme}) => theme.colors.base_0};
  display: flex;
  height: 100%;
  text-decoration: none;

  h3 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    min-width: 26rem;
    pointer-events:none;
    user-select: none;

    @media (min-width: 48em) {
      font-size: 3.6rem;
    }
  }

  h4 {
    margin-bottom: 1rem;
    pointer-events:none;
    user-select: none;
  }

  p {
    color: ${({theme}) => theme.colors.base_50};
    font-size: 1.4rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
`;

const EventGalleryContainer = styled.div`
  padding-top: 4rem;

  .tns-outer {
    position: relative;

    .tns-controls {

      button {
        background: ${({theme}) => theme.colors.primary};
        border: 0;
        color: ${({theme}) => theme.colors.base_0};
        font-size: 3rem;
        outline: none;
        padding: 1rem 3rem;

        &:first-child {
        }
      }
    }
  }
`;

const EventGalleryH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (min-width: 48em) {
    font-size: 4rem;
  }
`;

const EventGalleryH2 = styled.h2`
  color: ${({theme}) => theme.colors.base_70};
  font-size: 1.6rem;
  margin-bottom: 2rem;

  @media (min-width: 48em) {
    font-size: 2.4rem;
    margin-bottom: 4rem;
  }
`;

const EventGalleryImageAsset = styled(Col)`
  img {
    display: block;
    margin-bottom: 3rem;
    width: 100%;
  }
`;

export {
  PhotoGalleryContainer,
  YearArchiveContainer,
  YearArchiveContainerSwipeLabel,
  GalleriesContainer,
  GalleryContainer,
  GalleryLink,
  EventGalleryContainer,
  EventGalleryH1,
  EventGalleryH2,
  EventGalleryImageAsset
};