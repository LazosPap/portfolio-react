import styled from 'styled-components';
import Logo from '../img/Logo.png';
import { Link } from 'react-router-dom';
import ReactSwitch from "react-switch";
import { useContext } from 'react'; // Import useContext
import { ThemeContext } from '../App'; // Import the ThemeContext from the App component

const Nav = () => {
  // Access theme and toggleTheme from the context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledNav>
      <h1><Link id="logo" to="/"><img src={Logo} id='logo' alt="Logo" /></Link></h1>
      <ul>
        <li>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    a {
        color: white;
        text-decoration:none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        width: 30%;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;