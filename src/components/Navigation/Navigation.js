import React from 'react';
import { NavLink } from "react-router-dom";

import { StyledNavigation, StyledNavigationList, StyledNavigationListItems } from '../../styles';

function Navigation(props) {
  function handleMenuChange() {
    props.onChange(null);
  }
  
  return (
    <StyledNavigation className={props.activateNavigation}>
      <StyledNavigationList className={`ground-zero ${props.activateNavigation}`}>
        <StyledNavigationListItems>
          <NavLink exact activeClassName="current-page-item" to="/" onClick={handleMenuChange}>Home</NavLink>
        </StyledNavigationListItems>
        <StyledNavigationListItems>
          <NavLink exact activeClassName="current-page-item" to="/photography/" onClick={handleMenuChange}>Photography</NavLink>
        </StyledNavigationListItems>
        <StyledNavigationListItems>
          <NavLink exact activeClassName="current-page-item" to="/websites/" onClick={handleMenuChange}>Websites</NavLink>
        </StyledNavigationListItems>
        <StyledNavigationListItems>
          <NavLink exact activeClassName="current-page-item" to="/contact/" onClick={handleMenuChange}>Contact</NavLink>
        </StyledNavigationListItems>
      </StyledNavigationList>
    </StyledNavigation>
  );
}

export { Navigation };
