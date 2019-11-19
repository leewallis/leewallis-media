import styled from 'styled-components';
import { Link } from "react-router-dom";

const PhotoGalleryContainer = styled.div`
  padding-top: 15rem;
`;

const YearArchiveContainer = styled.div`
  position: relative;

  h2 {
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

    @media (min-width: 48em) {
      font-size: 3.6rem;
    }
  }
`;

const EventGalleryContainer = styled.div`
  padding-top: 15rem;
`;

const EventGalleryH1 = styled.h1`
  color: ${({theme}) => theme.colors.base_0};
  font-size: 6rem;
  margin-bottom: 1rem;
`;

const EventGalleryH2 = styled.h2`
color: ${({theme}) => theme.colors.base_70};
  font-size: 2.8rem;
`;

const EventGalleryImageAsset = styled.div`
  img {
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