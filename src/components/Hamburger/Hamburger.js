import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

import { Navigation } from  '../Navigation/Navigation';

function Hamburger() {
  const [active, setActive] = useState(null);

  function activateHamburger() {
    setActive(active === null ? 'active' : null);
  }

  function handleMenuChange(handleMenuChangeState) {
    setActive(handleMenuChangeState);
  }

  return (
    <Fragment>
      <HamburgerContainer onClick={activateHamburger}>
        <div className={`meat-patty ${active}`}></div>
        <div className={`meat-patty ${active}`}></div>
        <div className={`meat-patty ${active}`}></div>
      </HamburgerContainer>
      <Navigation activateNavigation={active} onChange={handleMenuChange} />
    </Fragment>
  );
}

const HamburgerContainer = styled.div`
  background: none;
  border: 0;
  cursor: pointer;
  display: block;
  height: 2.5rem;
  outline: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 6rem;
  top: 6rem;
  z-index: 9998;

  .meat-patty.active {
    &:first-child {
      top: 1.1rem;
      transform: rotate( -45deg );
    }

    &:nth-child( 2n ) {
      left: 1.75rem;
      width: 0;
    }

    &:nth-child( 3n ) {
      top: .5rem;
      transform: rotate( 45deg );
    }
  }

  .meat-patty {
    background: #ffffff;
    border-radius: .3rem;
    height: .3rem;
    position: relative;
    transition: all .5s ease-in-out;
    width: 3.5rem;

    &:first-child {
      top: 0;
    }
  
    &:nth-child( 2n ) {
      left: 0;
      top: .65rem;
    }
  
    &:nth-child( 3n ) {
      top: 1.4rem;
    }
  }
`;

export { Hamburger };
