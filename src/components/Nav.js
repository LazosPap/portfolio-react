import styled from 'styled-components';
import Logo from '../img/Logo.png';
import {Link} from'react-router-dom';
const Nav =  () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/"><img src={Logo} id='logo'/></Link></h1>
            <ul>
                <li>
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