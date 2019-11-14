import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function Navigation(props) {
  function handleMenuChange() {
    props.onChange(null);
  }
  return (
    <NavigationContainer className={props.activateNavigation}>
      <ul className={`ground-zero ${props.activateNavigation}`}>
        <li>
          <NavLink exact activeClassName="current_page_item" to="/" onClick={handleMenuChange}>Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current_page_item" to="/photography/" onClick={handleMenuChange}>Photography</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current_page_item" to="/websites/" onClick={handleMenuChange}>Websites</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current_page_item" to="/contact/" onClick={handleMenuChange}>Contact</NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  background: #212529;
  border: 0 solid #212529;
  height: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transition: all .5s ease-in-out;
  width: 0;

  &.active {
    border: 3rem solid #000000;
    height: calc( 100vh - 6rem );
    width: calc( 100vw - 6rem );
  }

  .ground-zero {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: calc( 100vh - 6rem );
    justify-content: space-between;
    margin: 0;
    opacity: 0;
    transition: all .5s ease-in-out;

    &.active {
      opacity: 1;
    }

    li {
      align-items: center;
      border-bottom: .1rem solid #495057;
      display: flex;
      flex: 1;
      justify-content: center;
      list-style: none;
      margin: 0;
      text-align: center;

      a {
        color: #ffffff;
        display: block;
        font-family: 'Archivo Black', sans-serif;
        font-size: 3rem;
        padding: 3rem;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;

        &:before {
          content: '';
          color: #6c757d;
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
          color: #84bd00;
        }

        &.current_page_item {
          color: #84bd00;
        }
      }

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
    }
  }
`;

export { Navigation };
