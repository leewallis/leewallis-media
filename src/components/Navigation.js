import React from 'react';

import { 
  StyledNavigation,
  StyledNavigationList,
  StyledNavigationListItems,
  StyledNavigationListAnchor
} from '../styles';

function Navigation(props) {
  function handleMenuChange() {
    props.onChange(null);
  }
  
  return (
    <StyledNavigation className={props.activateNavigation}>
      <StyledNavigationList className={`ground-zero ${props.activateNavigation}`}>
        <StyledNavigationListItems>
          <StyledNavigationListAnchor exact activeClassName="current-page-item" to="/" onClick={handleMenuChange}>Home</StyledNavigationListAnchor>
        </StyledNavigationListItems>
        <StyledNavigationListItems>
          <StyledNavigationListAnchor exact activeClassName="current-page-item" to="/photography/" onClick={handleMenuChange}>Photography</StyledNavigationListAnchor>
        </StyledNavigationListItems>
        <StyledNavigationListItems>
          <StyledNavigationListAnchor exact activeClassName="current-page-item" to="/websites/" onClick={handleMenuChange}>Websites</StyledNavigationListAnchor>
        </StyledNavigationListItems>
        <StyledNavigationListItems>
          <StyledNavigationListAnchor exact activeClassName="current-page-item" to="/contact/" onClick={handleMenuChange}>Contact</StyledNavigationListAnchor>
        </StyledNavigationListItems>
      </StyledNavigationList>
    </StyledNavigation>
  );
}

export { Navigation };
