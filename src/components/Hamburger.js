import React, { useState, Fragment } from 'react';

import { Navigation } from  './Navigation';
import { HamburgerContainer, HamburgerContainerMeatPatty } from '../styles';

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
        <HamburgerContainerMeatPatty className={`${active}`}></HamburgerContainerMeatPatty>
        <HamburgerContainerMeatPatty className={`${active}`}></HamburgerContainerMeatPatty>
        <HamburgerContainerMeatPatty className={`${active}`}></HamburgerContainerMeatPatty>
      </HamburgerContainer>
      <Navigation activateNavigation={active} onChange={handleMenuChange} />
    </Fragment>
  );
}

export { Hamburger };
