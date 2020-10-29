import React, { useContext} from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { AppContext } from '../App';

const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.navColor};
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.textColor};
  list-style: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

const NavToggle = styled(NavLink)`
  text-decoration: underline;
`;

function Navbar() {
  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };
  
  return (
    <NavBar>
      <NavMenu>
        <NavLink>
          <Link to="/"> Home </Link>
        </NavLink>
        <NavLink>
          <Link to="/about"> About </Link>
        </NavLink>
        <NavLink>
          <Link to="/api">API</Link>
        </NavLink>
      </NavMenu>
      <NavToggle onClick={toggleTheme}>Toggle theme</NavToggle>
    </NavBar>
  );
};

export default Navbar;