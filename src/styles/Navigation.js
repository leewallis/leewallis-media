import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const StyledNavigation = styled.nav`
  background: ${({theme}) => theme.colors.base_90};
  border: 0 solid ${({theme}) => theme.colors.base_90};
  height: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transition: all .5s linear;
  width: 0;
  z-index: 4998;

  &.active {
    border: 3rem solid ${({theme}) => theme.colors.base_100};
    height: calc( 100vh - 6rem );
    width: calc( 100vw - 6rem );

    @media (min-width: 48em) {
      width: 50vw;
    }
  }
`;

const StyledNavigationList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc( 100vh - 6rem );
  justify-content: space-between;
  margin: 0;
  opacity: 0;
  transition: all .5s linear;

  &.active {
    opacity: 1;
  }
`;

const StyledNavigationListItems = styled.li`
  align-items: center;
  border-bottom: .1rem solid ${({theme}) => theme.colors.base_70};
  display: flex;
  flex: 1;
  justify-content: center;
  list-style: none;
  margin: 0;
  text-align: center;

  &:last-child {
    border-bottom: 0;
  }
    
  &:nth-child(1n) {
    a {
      &:before {
        content: '01';
      }
    }
  }

  &:nth-child(2n) {
    a {
      &:before {
        content: '02';
      }
    }
  }

  &:nth-child(3n) {
    a {
      &:before {
        content: '03';
      }
    }
  }

  &:nth-child(4n) {
    a {
      &:before {
        content: '04';
      }
    }
  }
`;

const StyledNavigationListAnchor = styled(NavLink)`
  color: ${({theme}) => theme.colors.base_0};
  display: block;
  font-family: ${({theme}) => theme.font_family.heading};
  font-size: 3rem;
  padding: 3rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &:active {
    color: ${({theme}) => theme.colors.base_100};
    font-family: ${({theme}) => theme.font_family.heading};
  }

  &:before {
    content: '';
    color: ${({theme}) => theme.colors.base_60};
    font-size: 1.6rem;
    position: absolute;
    top: 1.5rem;
    left: calc( 50% - 1.5rem );
  }

  @media (min-width: 48em) {
    font-size: 5rem;
    padding: 3rem 6rem;
  }

  @media (min-width: 64em) {
    font-size: 5rem;
    padding: 3rem 6rem;
  }

  &:hover {
    color: ${({theme}) => theme.colors.primary};
  }

  &.current-page-item {
    color: ${({theme}) => theme.colors.primary};
  }
`;

export { 
  StyledNavigation,
  StyledNavigationList,
  StyledNavigationListItems,
  StyledNavigationListAnchor
};
